import Input from "@/shared/admin/Input";
import useAdminError from "./model/useAdminError";
import { useState } from "react";

function ErrorAdminForm() {
  const [errorValue, setErrorValue] = useState(null);
  const {
    register,
    control,

    handleSubmit,
    hint,
    watch,
    formState: { errors },
    reset,
  } = useAdminError();

  const handleOnSubmit = (value) => {
    if (value.password !== "1234")
      setErrorValue(new Error("Тут опис моєї помилки- передала її в стан"));
    console.log(value);
  };

  const witchRole = watch("role");
  const witchPassword = watch("password");
  if (errorValue) throw errorValue;
  return (
    <>
      <h2> YUP + @hookform/resolvers</h2>
      <form className="form" onSubmit={handleSubmit(handleOnSubmit)}>
        <Input
          label="role"
          hint="якщо не admin буде помилка - спрацює yup / yup.oneOf(['admin'], 'опис помилки')"
          placeholder="xxxx"
          error={errors.role?.message}
          {...register("role")}
        />
        <Input
          label="Password"
          hint="пароль має бути 1234, якщо помилка спрацює ErrorBoundary:<ErrorBoundary FallbackComponent={Fallback}"
          error={errors.password?.message}
          {...register("password")}
        />
        <button type="submit">submit</button>
      </form>
      <div>
        <div>role: {witchRole && <p>{witchRole}</p>}</div>
        <div>password: {witchPassword && <p>{witchPassword}</p>}</div>
      </div>
    </>
  );
}

export default ErrorAdminForm;
