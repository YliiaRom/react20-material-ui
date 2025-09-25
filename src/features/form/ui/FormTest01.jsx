import { ErrorBoundary } from "react-error-boundary";
import Input from "@/shared/form/Input";
import Box from "@mui/material/Box";
import useFormTest01 from "../model/useFormTest01";
import { useErrorBoundary } from "react-error-boundary";
import { Button, Typography } from "@mui/material";
import { useId, useState } from "react";

function FormTest01() {
  const { showBoundary } = useErrorBoundary();

  const [errorInFetch, setErrorInFetch] = useState(null);

  const formId01 = useId();
  const formId = useId();
  const [dataValue, setDataValue] = useState("");
  const [dataValue2, setDataValue2] = useState("");
  const form01 = useFormTest01();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting, isValid, errors },
    reset,
  } = form01;
  const form02 = useFormTest01();
  const {
    register: register02,
    handleSubmit: handleSubmit02,
    control: control02,
    watch: watch02,
    formState: { isSubmitting: isSubmitting02, errors: errors02 },
    reset: reset02,
  } = form02;

  const onSubmit = async (values) => {
    console.log(values);

    try {
      const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok)
        throw new Error("мій опис помилки:... спрацював if(!response.ok");
      if (response) {
        const data = await response.json();
        console.log(data);
        setDataValue(data);
      }
    } catch (error) {
      console.log(error.message);
    }
    reset();
  };

  const onSubmitError = async (values) => {
    console.log(values);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${values.password}`
      );
      if (!response.ok) {
        throw new Error("мій опис помилки:... спрацював if(!response.ok");
      }

      if (response) {
        const data = await response.json();
        console.log(data);
        setDataValue2(data);
      }
    } catch (error) {
      setErrorInFetch(error);
      showBoundary(error);
    } finally {
      reset02();
    }
  };

  // if (errorInFetch) throw errorInFetch;
  const watchName = watch("name");
  const watchPassword = watch("password");
  const watchName02 = watch02("name");
  const watchPassword02 = watch02("password");
  return (
    <>
      <div>
        <Typography className="title">
          форма без помилки (try/catch) <br />
          Запит на https://httpbin.org/post:
        </Typography>
        <Typography>
          Данні для перевірки роботи форми відправити на
          :https://httpbin.org/post
        </Typography>
        <Typography>
          const response = await fetch("https://httpbin.org/post", &#123;
          <br />
          method: "POST",
          <br />
          headers: &#123; "Content-Type": "application/json" &#125;,
          <br />
          body: JSON.stringify(values),
          <br />
          &#125;);
        </Typography>
        <Box
          component="form"
          id={formId01}
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
          className="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Typography variant="h5" color="secondary">
            &lt;Box
          </Typography>
          <Typography color="secondary">
            component="form" onSubmit=&#123;handleSubmit(onSubmit)&#125;
          </Typography>
          <Input
            name="name"
            id={`${formId01}-name`}
            label="name"
            hint=" тут має бути підказка: min 1 simb"
            error={errors.name?.message}
            {...register("name")}
          />
          <Input
            id={`${formId01}-password`}
            name="password"
            label="password"
            hint=" тут має бути підказка: цифри від 0-5"
            error={errors.password?.message}
            {...register("password")}
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </div>

      <div>
        <Typography> name :{watchName}</Typography>
        <Typography> password :{watchPassword}</Typography>
        <p>
          Відповідь від сервера:{dataValue.json?.name && dataValue.json.name}
        </p>
        <p>
          Відповідь від сервера:
          {dataValue.json?.password && dataValue.json.password}
        </p>
        {/* =======form02 */}
        <br />
        <Typography className="error">
          Якщ ввести цифру 33 в password і видправити значення форми - винекне
          помилка-зломається сторінка, помилку перехопить ErrorBoundary за
          допомогою showBoundary з хука useErrorBoundary;(Спрацює бібліотека
          react-error-boundary)
        </Typography>
        <Box
          id={formId}
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            border: "1px solid #999",
            p: 1,
          }}
          onSubmit={handleSubmit02(onSubmitError)}
        >
          <Typography className="title">запит на JSONplaceholder</Typography>
          <Input
            name="name"
            id={`${formId}-name`}
            label="name"
            hint=" тут має бути підказка: min 1 simb"
            error={errors02.name?.message}
            {...register02("name")}
          />
          <Input
            name="password"
            id={`${formId}-password`}
            label="password"
            hint=" тут має бути підказка: цифри від 0-5"
            error={errors02.password?.message}
            {...register02("password")}
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
        <Typography> name :{watchName02}</Typography>
        <Typography> password :{watchPassword02}</Typography>
        {isSubmitting02 && <p>Завантаження</p>}
        <p>
          Відповідь від сервера (форма 2) email:
          {dataValue2?.email || "-"}
        </p>
      </div>
    </>
  );
}

export default FormTest01;
