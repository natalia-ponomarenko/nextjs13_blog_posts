import classNames from 'classnames';

type NewsButtonProps = {
  onClick?: () => void;
  className?: string;
  children: string;
  title: string;
};

const NewsButton: React.FC<NewsButtonProps> = ({
  onClick,
  children,
  className,
  title,
}) => (
  <button
    onClick={onClick}
    className={classNames('button is-link is-light m-1', className)}
    title={title}
  >
    {children}
  </button>
);

export default NewsButton;
