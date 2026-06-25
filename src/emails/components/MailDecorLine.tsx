interface IProps {
  size: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  color: 'purple' | 'orange' | 'green' | 'gray';
}

const getColor = (color: string) => {
  switch (color) {
    case 'purple':
      return 'linear-gradient(to right, #ec9fff, #7f99fa)';
    case 'orange':
      return 'linear-gradient(to right, #ffd879, #fe6a68)';
    case 'green':
      return 'linear-gradient(to right, #6990d1, #4debc6)';
    case 'gray':
      return '#969696';
  }
};

const getSize = (size: string) => {
  switch (size) {
    case 'xs':
      return '10px';
    case 's':
      return '40px';
    case 'm':
      return '56px';
    case 'l':
      return '60px';
    case 'xl':
      return '94px';
    case 'xxl':
      return '152px';
  }
};

export default function MailDecorLine({ size, color }: IProps) {
  return (
    <div
      style={{
        borderRadius: '2px',
        height: '10px',
        background: getColor(color),
        width: getSize(size),
      }}
    />
  );
}
