import './socials.scss';

import { SOCIALS } from '@/consts/socials';

export default function Socials() {
  return (
    <div className='socials'>
      {SOCIALS.map((social) => (
        <a
          key={social.url}
          href={social.url}
          className='socials__button'
          aria-label={social.label}
          target='_blank'
          rel='noopener noreferrer'
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
