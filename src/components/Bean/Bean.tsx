import './bean.scss';

import { FaXmark } from 'react-icons/fa6';

interface IProps {
  label: string;
  option: string;
  onClick: () => void;
}

export default function Bean({ label, option, onClick }: IProps) {
  return (
    <button className={`bean bean--${option}`} onClick={onClick}>
      {label}
      <FaXmark />
    </button>
  );
}
