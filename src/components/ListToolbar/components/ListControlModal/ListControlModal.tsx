import './listControlModal.scss';

import clsx from 'clsx';
import { type PropsWithChildren } from 'react';
import useListControlModal, {
  type IListControlModal,
} from './useListControlModal';

interface IProps extends IListControlModal, PropsWithChildren {}

export default function ListControlModal({
  id,
  isOpened,
  onClose,
  children,
}: IProps) {
  useListControlModal({ id, isOpened, onClose });

  return (
    <div
      className={clsx('modal', {
        'modal--opened': isOpened,
      })}
      id={id}
      role='dialog'
      aria-modal='true'
      aria-label={id}
    >
      <div className='modal__container'>{children}</div>
    </div>
  );
}
