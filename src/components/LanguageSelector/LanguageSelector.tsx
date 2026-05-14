'use client';

import { LANGS } from '@/consts/langs';
import clsx from 'clsx';
import { FaChevronDown } from 'react-icons/fa6';
import './languageSelector.scss';
import useLanguageSelector from './useLanguageSelector';

export default function LanguageSelector() {
  const { selectRef, ...hook } = useLanguageSelector();

  return (
    <div
      className='language-select'
      onClick={() => hook.setIsOpened((prev) => !prev)}
      ref={selectRef}
    >
      <div className='select mock'>
        <div className='select__placeholder'>&nbsp;</div>
      </div>

      <div className={clsx('select', { opened: hook.isOpened })}>
        <div className='select__placeholder'>
          <p>{hook.selectedValue}</p>{' '}
          <FaChevronDown
            className={clsx('select__placeholder__icon', {
              opened: hook.isOpened,
            })}
          />
        </div>

        <hr className='select__divider' />
        <div className='select__options'>
          {LANGS.filter((opt) => opt !== hook.selectedValue).map(
            (option, idx) => (
              <p
                key={idx}
                className='select__options__entry'
                onClick={() => hook.handleSelection(option)}
              >
                {option}
              </p>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
