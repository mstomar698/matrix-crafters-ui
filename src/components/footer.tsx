import { FaFacebookF, FaLinkedinIn, FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter, FaPhone } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { Link } from 'react-router-dom';
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex flex-row max-lg:flex-col justify-evenly items-center py-4 [background:linear-gradient(180deg,rgb(59,55,46)_1000%,rgb(255,236.39,235.73)_100%)]">
      <div className="flex flex-col justify-center items-center text-center">
        <div className="text-white/70 text-center text-xl flex flex-row space-x-4 my-2">
          <Link to={''} target="_blank">
            <FaFacebookF />
          </Link>
          <Link to={''} target="_blank">
            <FaXTwitter />
          </Link>
          <Link
            to={'https://www.linkedin.com/in/mayank-tomar-726187205/'}
            target="_blank"
          >
            <FaLinkedinIn />
          </Link>
          <Link to={''} target="_blank">
            <FaInstagramSquare />
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <div className="font-bold flex text-xl w-full px-2 max-lg:hidden">
          <span className="text-white/70">Contact</span>
        </div>
        <div className="text-white/70 text-center text-xl flex flex-col space-y-2 mt-4">
          <div className="flex flex-row text-center justify-start items-center">
            <IoMdMail className="mt-1" />
            <span className="pl-2">tomarm698@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
