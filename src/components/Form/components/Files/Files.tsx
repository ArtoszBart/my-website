'use client';

import './files.scss';

import clsx from 'clsx';
import { FaPaperclip, FaXmark } from 'react-icons/fa6';
import useFiles, { type IuseFiles } from './useFiles';

interface IProps extends IuseFiles {
  label: string;
  tabIndex: number;
}

export default function Files({ name, tabIndex, label }: IProps) {
  const { errorMessage, addFiles, removeFile, files } = useFiles({
    name,
  });
  const errorId = `${name}-error`;

  return (
    <div
      className={clsx('form-input', {
        'form-input--error': errorMessage,
      })}
    >
      <input
        id={name}
        type='file'
        tabIndex={tabIndex}
        multiple
        onChange={addFiles}
        aria-invalid={!!errorMessage}
        aria-describedby={errorMessage ? errorId : undefined}
      />

      <label className='form-input__upload-button' htmlFor={name}>
        {label} <FaPaperclip aria-hidden='true' />
      </label>

      {files.length > 0 && (
        <ul className='form-input__files' aria-live='polite'>
          {files.map((file, index) => (
            <li
              key={`${file.name}-${index}`}
              className='form-input__files__item'
            >
              <span>{file.name}</span>

              <button
                type='button'
                onClick={() => removeFile(index)}
                aria-label={`Usuń plik ${file.name}`}
              >
                <FaXmark />
              </button>
            </li>
          ))}
        </ul>
      )}

      <span
        id={errorId}
        className='form-input__error-message'
        aria-live='polite'
      >
        {errorMessage}
      </span>
    </div>
  );
}
