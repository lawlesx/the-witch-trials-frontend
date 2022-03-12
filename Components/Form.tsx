import { ErrorMessage, Field, FieldAttributes } from "formik";
import { FC } from "react";

interface InputProps extends FieldAttributes<any> {
  title: string;
  placeholder?: string;
  name: string;
  description?: string;
}

export const InputField: FC<InputProps> = ({
  title,
  placeholder,
  name,
  description,
  ...rest
}) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <h1 className="font-semibold text-light-grey-100 text-lg pl-1">
        {title}
      </h1>
      <Field
        name={name}
        className="p-2 bg-white focus:border focus:border-primary-500 focus:shadow-input rounded-md text-dark-grey-900 font-semibold text-lg outline-none w-full placeholder:text-light-grey-600 ease-in-out duration-200"
        placeholder={placeholder}
        {...rest}
      />
      <ErrorMessage
        component="p"
        name={name}
        className="text-error-400 text-sm font-medium ml-1"
      />
      {description && (
        <p className="text-information-200 text-sm font-normal tracking-wider ml-1">
          {description}
        </p>
      )}
    </div>
  );
};
