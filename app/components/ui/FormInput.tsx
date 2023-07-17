import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import FormFieldError from './FormFieldError';

type Props = {
  name: string;
  label: string;
  placeholder: string;
  error: boolean;
  icon: any;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput: React.FC<Props> = ({
  name,
  label,
  placeholder,
  error,
  icon,
  value,
  onChange,
}) => (
  <>
    <label
      className="label"
      htmlFor={`comment-${name}`}
    >
      {label}
    </label>

    <div className="control has-icons-left has-icons-right">
      <input
        type="text"
        name={name}
        id={`comment-${name}`}
        placeholder={placeholder}
        className={classNames('input', { 'is-danger': error })}
        value={value}
        onChange={onChange}
      />

      <span className="icon is-small is-left">
        <FontAwesomeIcon icon={icon} />
      </span>
      {error && <FormFieldError />}
    </div>
    {error && <p className="help is-danger">{`${label} is required`}</p>}
  </>
);

export default FormInput;
