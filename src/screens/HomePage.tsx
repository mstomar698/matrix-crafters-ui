import { AiOutlinePlayCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="min-h-screen bg-white [background:linear-gradient(180deg,rgb(255,236.39,235.73)_0%,rgb(59,55,46)_100%)] flex flex-col items-center justify-center text-center relative -mt-20">
      <div className="text-[#393939] lg:w-[45%] max-lg:w-[90%] lg:text-5xl max-lg:text-3xl font-bold mt-8 lg:leading-20 max-lg:leading-8 ">
        Optimal storage & retrieval in m*n sparse matrix
      </div>
      <div className="text-[#272626] lg:w-[68%] max-lg:w-[80%] text-2xl max-lg:text-[16px] font-semibold mt-12 leading-10 max-lg:leading-6">
        Our project introduces a novel approach to managing PIN codes
        efficiently, prevalent in sectors like retail and logistics. By
        leveraging tree structures, we optimize storage and retrieval
        operations.
      </div>
      <div className="flex max-lg:flex-col flex-row justify-center items-center text-center lg:space-x-8 max-lg:space-y-4 relative lg:mt-20 max-lg:mt-12 max-lg:w-[90%]">
        <div className="max-lg:w-full">
          <button
            type="submit"
            className="bg-tertiary rounded-3xl p-2 w-[200px] text-white font-semibold text-2xl relative z-0 max-lg:w-full"
            onClick={() => {
              window.location.href = '#';
            }}
          >
            View In ONDC
          </button>
        </div>
        <div className="max-lg:w-full">
          <button
            type="submit"
            className="bg-transparent rounded-3xl p-2 w-[200px] text-black font-semibold text-2xl flex justify-center items-center border border-black border-solid space-x-2 max-lg:w-full"
          >
            <AiOutlinePlayCircle className="mt-[3px]" />
            <Link to={'/demo'}>View Demo</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
