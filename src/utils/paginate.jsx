import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startInex = (pageNumber - 1) * pageSize;
  return _(items).slice(startInex).take(pageSize).value();
}
