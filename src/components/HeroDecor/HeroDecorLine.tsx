interface IProps {
  size: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  color: 'purple' | 'orange' | 'green' | 'gray';
}

export default function HeroDecorLine({ size, color }: IProps) {
  return (
    <div className='hero-decor__line' data-size={size} data-color={color} />
  );
}
