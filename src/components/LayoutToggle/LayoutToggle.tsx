import clsx from 'clsx';
import { BsGridFill } from 'react-icons/bs';
import { FaListUl } from 'react-icons/fa6';
import './layoutToggle.scss';
import { useLayoutToogleStore } from './useLayoutToogleStore';

export default function LayoutToggle() {
  const { isListView, setIsListView } = useLayoutToogleStore();

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
