interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = ({ label, error, id, ...props }: InputProps) => {
  const inputId = id || `input-${label.replace(/\s+/g, "-").toLowerCase()}`;
  const errorId = `${inputId}-error`;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        className="flex p-2"
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        {...props}
      />
      {error && (
        <p
          id={errorId}
          role="alert"
          aria-live="polite"
          className="text-red-500"
        >
          {error}
        </p>
      )}
    </div>
  );
};
