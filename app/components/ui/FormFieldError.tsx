import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const FormFieldError: React.FC = () => {
  return (
    <span className="icon is-small is-right has-text-danger">
      <FontAwesomeIcon icon={faExclamationTriangle as IconProp} />
    </span>
  );
};

export default FormFieldError;
