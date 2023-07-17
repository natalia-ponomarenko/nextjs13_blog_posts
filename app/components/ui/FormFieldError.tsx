import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const FormFieldError: React.FC = () => {
  return (
    <span className="icon is-small is-right has-text-danger">
      <FontAwesomeIcon icon={faExclamationTriangle} />
    </span>
  );
};

export default FormFieldError;
