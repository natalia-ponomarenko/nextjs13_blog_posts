import FooterLink from './FooterLink';
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="has-background-link-light is-flex-align-items-flex-end mt-auto">
      <div className="is-flex is-justify-content-space-evenly is-align-content-center p-1">
        <span className="mt-2">Nataliia Ponomarenko 2023</span>
        <div>
          <FooterLink
            href="https://github.com/natalia-ponomarenko"
            icon={faGithub}
          />
          <FooterLink
            href="https://www.linkedin.com/in/nataliia-ponomarenko-71219b20b/"
            icon={faLinkedin}
          />
          <FooterLink
            href="https://t.me/ponomarenko_nataliia"
            icon={faTelegram}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
