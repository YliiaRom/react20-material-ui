import schemaTest01 from "@/entities/form/model/validationTest01";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
const defaultValues = {
  name: "",
  password: null,
};

function useFormTest01() {
  const form = useForm({
    mode: "onBlur",
    defaultValues,
    resolver: yupResolver(schemaTest01),
  });

  const field = useMemo(
    () => ({
      Controller,
      errors: form.formState?.errors,
    }),
    [form.formState.errors]
  );
  return { ...form, field };
}

export default useFormTest01;
