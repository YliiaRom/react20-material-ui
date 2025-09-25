import * as yup from "yup";
let schemaTest01 = yup.object().shape({
  name: yup.string().min(1, "min 1 символ"),
  password: yup.string().matches(/^[0-5]+$/, "Від 0-5/^[0-5]+$"),
});
export default schemaTest01;
