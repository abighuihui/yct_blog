import React, { Component } from "react";
import Joi from "joi";
import Input from "./input";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = async () => {
    const options = {
      abortEarly: false,
    };
    const result = await this.schema.validateAsync(this.state.data, options);
    // const result = Joi.validate(this.state.data, this.schema);
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = async (e) => {
    const name = e?.name;
    const value = e?.value;
    let success = false;
    const obj = { [name]: value?.trim() }; //es6
    const schema = Joi.object({ [name]: this.schema[name] });
    // const result = await schema.validateAsync(obj);
    const result = await schema
      .validateAsync(obj)
      .then((response) => {
        success = true;
        return response;
      })
      .catch((error) => {
        success = false;
        return error;
      });
    return success ? null : result.details[0].message;
  };

  //html提交会把整个页面重新加载一次，为了这个情况发生，需要阻止
  handleSubmit = (e) => {
    e.preventDefault(); //阻止事件的默认行为，
    const errors = this.validate();
    this.setState({ errors: errors || {} }); //若有错误赋值给errors，反之赋空对象，不能是null
    if (errors) return; // 如果有错误，就不请求服务器
    this.doSubmit();
  };

  handleChange = async ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    const errors = { ...this.state.errors };
    const errorMessage = await this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    this.setState({ data, errors });
  };

  renderButton(label) {
    return <button className="btn btn-primary">{label}</button>;
  }

  renderInput(name, label) {
    const { data, errors } = this.state;

    return (
      <Input
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      ></Input>
    );
  }
}

export default Form;
