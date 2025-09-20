interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { label: string; value: string }[];
}

export const Select = ({ label, options, ...props }: SelectProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>
      <select className="flex p-2" {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
