type Props = {
  text: string;
};

const Warning:React.FC<Props> = ({ text }) => {
  return (
    <div className="notification is-warning">{text}</div>
  );
};

export default Warning;
