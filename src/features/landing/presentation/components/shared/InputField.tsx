import { ForwardedRef, forwardRef } from "react";

interface InputFieldProps {
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  readOnly?: boolean;
  containerClassName?: string;
  inputClassName?: string;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ value, onChange, placeholder, icon, readOnly = false, containerClassName = "", inputClassName = "" }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(e.target.value);
    };

    return (
      <div className={`flex items-center border border-gray-200 rounded-md px-3 py-2.5 bg-white shadow-sm focus-within:border-brand focus-within:ring-1 focus-within:ring-brand transition ${containerClassName}`}>
        {icon}
        <input
          ref={ref as ForwardedRef<HTMLInputElement>}
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          readOnly={readOnly}
          className={`w-full bg-transparent text-sm focus:outline-none text-gray-800 ${inputClassName}`}
        />
      </div>
    );
  }
);

InputField.displayName = "InputField";