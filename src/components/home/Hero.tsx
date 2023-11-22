import { primary } from "../../theme/themeColors";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="text-gray-700 p-3 lg:px-8 lg:container lg:mx-auto">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="/static/illustrations/analysis-illustration-hero.svg"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1
            className="text-5xl font-inter leadi sm:text-6xl italic"
            style={{ color: primary.main }}
          >
            ZBD Behavior
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 font-inter text-gray-700 italic">
            Navigating Trends, Understanding Behaviors, Shaping Markets.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <div className="flex">
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-500 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300  font-inter rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Explore Operations
              </button>

              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-inter text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                  See Graphs
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
