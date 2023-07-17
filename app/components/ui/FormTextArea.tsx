import classNames from 'classnames';

type TextAreaProps = {
  label: string;
  placeholder: string;
  error: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const FormTextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  error,
  value,
  onChange,
}) => (
  <>
    <label
      className="label"
      htmlFor="comment-body"
    >
      {label}
    </label>

    <div className="control">
      <textarea
        id="comment-body"
        name="body"
        placeholder={placeholder}
        className={classNames('textarea', { 'is-danger': error })}
        value={value}
        onChange={onChange}
      />
    </div>

    {error && <p className="help is-danger">{`${label} is required`}</p>}
  </>
);

export default FormTextArea;
