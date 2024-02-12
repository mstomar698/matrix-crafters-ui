import { FaFacebookF, FaLinkedinIn, FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div className="min-h-screen bg-white [background:linear-gradient(180deg,rgb(255,236.39,235.73)_0%,rgb(59,55,46)_100%)] flex flex-col relative -mt-20">
      <div className="text-black text-center flex w-full justify-center text-3xl p font-semibold y-4 items-start mt-20 ">
        About Us
      </div>
      <div className="flex flex-col justify-center items-start text-center px-6">
        <span className="w-full text-left mt-8 text-xl max-lg:text-lg">
          Problem Statement:
        </span>
        <span className="w-full text-center text-2xl max-lg:text-xl">
          Optimal storage & retrieval in m*n sparse matrix
        </span>
        <span className="w-full text-left mt-8 text-xl ">Approach:</span>
        <span className="w-full text-left text-xl max-lg:text-sm py-2">
          Our project introduces a novel approach to managing PIN codes
          efficiently, prevalent in sectors like retail and logistics. By
          leveraging tree structures, we optimize storage and retrieval
          operations. Each level of the tree corresponds to a digit of the PIN
          code, allowing us to exploit shared prefixes among adjacent codes. For
          instance, consider "543211," "543212," and "543213." In our tree,
          nodes represent digits, with branches extending only for differing
          digits, minimizing redundancy. This approach ensures space savings and
          streamlined retrieval, aligning with PIN code structure. This
          innovative solution enhances real-time verification and scalability in
          our system. Our approach has achieved in storing 10 million records of
          seller and their pincodes ( with sparseness of ⅓ in respect to
          original matrix) within 50GB.
        </span>
        <span className="w-full text-left mt-8 text-2xl font-bold">Team:</span>
        <ul className="w-full text-left text-2xl max-lg:text-xl py-2 flex flex-row max-lg:flex-col justify-around items-center my-4 ">
          <li className="lg:p-4 flex flex-col justify-center items-center text-center max-lg:p-2 rounded-lg shadow-lg shadow-black backdrop-blur-md min-w-[300px] m-2">
            <span>Mayank Singh Tomar</span>
            <span className="text-[16px] font-semi-bold">Developer</span>
            <span>B-Tech (2024)</span>
            <div className="text-white/70 text-center text-xl flex flex-row space-x-4 my-4">
              <Link to={''} target="_blank" className="hover:text-white">
                <FaFacebookF />
              </Link>
              <Link to={''} target="_blank" className="hover:text-white">
                <FaXTwitter />
              </Link>
              <Link
                to={'https://www.linkedin.com/in/mayank-tomar-726187205/'}
                target="_blank"
                className="hover:text-white"
              >
                <FaLinkedinIn />
              </Link>
              <Link to={''} target="_blank" className="hover:text-white">
                <FaInstagramSquare />
              </Link>
            </div>
          </li>
          <li className="lg:p-4 flex flex-col justify-center items-center text-center max-lg:p-2 rounded-lg shadow-lg shadow-black backdrop-blur-md min-w-[300px] m-2">
            <span>Mukul Kumar</span>
            <span className="text-[16px] font-semi-bold">Developer</span>
            <span>B-Tech (2024)</span>
            <div className="text-white/70 text-center text-xl flex flex-row space-x-4 my-4">
              <Link to={''} target="_blank" className="hover:text-white">
                <FaFacebookF />
              </Link>
              <Link to={''} target="_blank" className="hover:text-white">
                <FaXTwitter />
              </Link>
              <Link
                to={'https://www.linkedin.com/in/mayank-tomar-726187205/'}
                target="_blank"
                className="hover:text-white"
              >
                <FaLinkedinIn />
              </Link>
              <Link to={''} target="_blank" className="hover:text-white">
                <FaInstagramSquare />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
