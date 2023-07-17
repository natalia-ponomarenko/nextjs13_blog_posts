import classNames from 'classnames';

type Props = {
  type: 'submit' | 'reset';
  isLoading: boolean;
  children: string;
};

const FormButton: React.FC<Props> = ({ type, isLoading, children }) => (
  <button
    type={type}
    className={classNames('button', 'is-link', {
      'is-loading': isLoading,
    })}
  >
    {children}
  </button>
);

export default FormButton;

