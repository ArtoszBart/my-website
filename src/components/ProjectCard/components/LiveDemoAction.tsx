import { PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  href?: string;
  action?: 'install-modal';
  label: string;
  className?: string;
  onClick: () => void;
};

export default function LiveDemoAction(props: Props) {
  if (props.action === 'install-modal') {
    return (
      <button
        type='button'
        className={props.className}
        aria-label={props.label}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  }

  return (
    <a
      className={props.className}
      aria-label={props.label}
      data-tooltip={props.label}
      href={props.href}
      target='_blank'
      rel='noreferrer'
    >
      {props.children}
    </a>
  );
}
