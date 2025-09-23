import * as yup from "yup";
const adminErrorBounderSchema = yup.object().shape({
  role: yup
    .string()
    .min(1, "треба більше 1 символа")
    .oneOf(["admin"], "значення має бути admin"),
  password: yup.string().min(4, "min 4 символа"),
});
export default adminErrorBounderSchema;
