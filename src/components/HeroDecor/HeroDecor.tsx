import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import './heroDecor.scss';
import HeroDecorLine from './HeroDecorLine';

type Props = PropsWithChildren & {
  compact?: boolean;
  reversed?: boolean;
};

export default function HeroDecor({ reversed, compact, children }: Props) {
  return (
    <div
      className={clsx('hero-decor', {
        'hero-decor--reversed': reversed,
      })}
    >
      <div className='hero-decor__group'>
        <div className='hero-decor__row'>
          <HeroDecorLine size='xl' color='purple' />
          <HeroDecorLine size='m' color='gray' />
          <HeroDecorLine size='xs' color='gray' />
        </div>

        <div className='hero-decor__row'>
          <HeroDecorLine size='xxl' color='orange' />
        </div>

        <div className='hero-decor__row'>
          <HeroDecorLine size='m' color='green' />
          <HeroDecorLine size='xs' color='gray' />
          <HeroDecorLine size='s' color='gray' />
          <HeroDecorLine size='l' color='green' />
        </div>

        <div className='hero-decor__row'>
          <HeroDecorLine size='xl' color='purple' />
          <HeroDecorLine size='l' color='gray' />
          <HeroDecorLine size='xs' color='gray' />
          <HeroDecorLine size='xxl' color='purple' />
        </div>
      </div>

      {compact ? (
        <div className='hero-decor__body'>{children}</div>
      ) : (
        <>
          <div className='hero-decor__tab'>
            <div className='hero-decor__group'>
              <div className='hero-decor__row'>
                <HeroDecorLine size='m' color='orange' />
                <HeroDecorLine size='xs' color='gray' />
                <HeroDecorLine size='s' color='gray' />
                <HeroDecorLine size='xl' color='purple' />
              </div>
            </div>
            <div className='hero-decor__body'>{children}</div>
          </div>
        </>
      )}

      <div className='hero-decor__group'>
        <div className='hero-decor__row'>
          <HeroDecorLine size='xl' color='green' />
          <HeroDecorLine size='xs' color='gray' />
        </div>
        <div className='hero-decor__row'>
          <HeroDecorLine size='l' color='green' />
          <HeroDecorLine size='s' color='orange' />
          <HeroDecorLine size='xxl' color='purple' />
        </div>
      </div>

      {!compact && (
        <div className='hero-decor__group'>
          <div className='hero-decor__row'>
            <HeroDecorLine size='xl' color='green' />
            <HeroDecorLine size='s' color='orange' />
          </div>
          <div className='hero-decor__row'>
            <HeroDecorLine size='xxl' color='green' />
          </div>
          <div className='hero-decor__row'>
            <HeroDecorLine size='s' color='purple' />
            <HeroDecorLine size='xs' color='gray' />
            <HeroDecorLine size='s' color='gray' />
            <HeroDecorLine size='m' color='green' />
          </div>
        </div>
      )}
    </div>
  );
}
