'use client';

import './files.scss';

import Bean from '@/components/Bean';
import clsx from 'clsx';
import { FaPaperclip } from 'react-icons/fa6';
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

      <div className='form-input-files'>
        <label className='form-input-files__upload-button' htmlFor={name}>
          {label} <FaPaperclip aria-hidden='true' />
        </label>

        {files.length > 0 && (
          <div className='form-input-files__files'>
            {files.map((file, index) => (
              <Bean
                key={index}
                label={file.name}
                option={'files'}
                onClick={() => removeFile(index)}
              />
            ))}
          </div>
        )}
      </div>

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
