interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>
      <input className="flex p-2" {...props} />
    </div>
  );
};
