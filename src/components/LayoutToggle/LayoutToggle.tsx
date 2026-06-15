import clsx from 'clsx';
import { BsGridFill } from 'react-icons/bs';
import { FaListUl } from 'react-icons/fa6';
import './layoutToggle.scss';
import { useLayoutToggleStore } from './useLayoutToggleStore';

export default function LayoutToggle() {
  const { isListView, setIsListView } = useLayoutToggleStore();

  return (
    <div className='layout-toggle'>
      <button
        onClick={() => setIsListView(true)}
        className={clsx('layout-toggle__button', {
          'layout-toggle__button--active': isListView,
        })}
      >
        <FaListUl />
      </button>
      <button
        onClick={() => setIsListView(false)}
        className={clsx('layout-toggle__button', {
          'layout-toggle__button--active': !isListView,
        })}
      >
        <BsGridFill />
      </button>
    </div>
  );
}
