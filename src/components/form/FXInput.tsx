"use client";
import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

interface IProps {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: string;
  label: string;
  name: string;
}
export default function FXInput({
  variant = "bordered",
  size = "md",
  required = false,
  type = "text",
  label,
  name,
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message; // Access error message for this input

  return (
    <Input
      {...register(name)}
      errorMessage={error ? String(error) : undefined}
      isInvalid={!!error}
      variant={variant}
      label={label}
      type={type}
      size={size}
      required={required}
    />
  );
}
