import './bean.scss';

import { BEAN_OPTION } from '@/enums/beanOption.enum';
import { FaXmark } from 'react-icons/fa6';

interface IProps {
  label: string;
  option: BEAN_OPTION;
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
