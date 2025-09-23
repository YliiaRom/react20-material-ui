import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";
import adminErrorBounderSchema from "@/entities/admin/model/valitation";

const defaultValues = {
  role: "",
  password: "",
};
const useAdminError = () => {
  const form = useForm({
    mode: "onBlur",
    defaultValues,
    resolver: yupResolver(adminErrorBounderSchema),
  });
  const field = useMemo(
    () => ({
      Controller,
      errors: form.formState?.errors,
    }),
    [form.formState?.errors]
  );
  return { ...form, field };
};
export default useAdminError;
