import React, { Component } from "react";
import Joi from "joi";
import Form from "./common/form";
import { login } from "../services/authServices";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" }, //state里面元素为‘’或从服务器获取，如果是null或者undefined，则为不受控组件
    errors: {},
  };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };

  doSubmit = async () => {
    //console.log("submit"); //保存页面带去下个页面
    const { data } = this.state;
    await login(data.username, data.password);
  };

  render() {
    return (
      <div>
        <h1>This is a login page ~ </h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
//disabled={this.validate()}
