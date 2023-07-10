import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

type Props = {
  href: string;
  icon: IconDefinition;
}

const FooterLink: React.FC<Props> = ({ href, icon }) => {
  return (
    <a href={href} target='_blank' rel='noopener' className='is-size-4 m-1'>
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

export default FooterLink;