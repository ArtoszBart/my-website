import './radioOption.scss';

interface IProps<S extends string> {
  label: string;
  value: S;
  group: string;
  isChecked: boolean;
  onChange: (v: string) => void;
}

export default function RadioOption<S extends string>({
  label,
  value,
  group,
  isChecked,
  onChange,
}: IProps<S>) {
  return (
    <label className='radio-option'>
      <input
        type='radio'
        name={group}
        value={value}
        checked={isChecked}
        onChange={() => onChange(value)}
      />
      <span>{label}</span>
    </label>
  );
}
