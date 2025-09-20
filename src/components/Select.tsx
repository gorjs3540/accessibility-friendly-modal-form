interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

export const Select = ({ label, ...props }: SelectProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>
      <select className="flex p-2" {...props} />
    </div>
  );
};
