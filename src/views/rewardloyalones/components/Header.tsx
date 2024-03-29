import { useNavigate } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/");
  };
  return (
    <div className="lg:flex gap-4 items-stretch">
      <div className="bg-white md:p-2 p-6 rounded-lg border border-gray-200 mb-4 lg:mb-0 shadow-md lg:w-[35%]">
        <div className="flex justify-center items-center space-x-5 h-full">
          <div>
            <button
              className="text-4xl font-semibold italic text-gray-600 mr-8 underline"
              onClick={handleClickHome}
            >
              Back Home
            </button>
          </div>
          <img
            src="/static/illustrations/stayingIn.svg"
            alt=""
            style={{ width: "200px", height: "120px" }}
          />
        </div>
      </div>

      <div className="bg-white border border-gray-200 p-4 rounded-lg xs:mb-4 max-w-full shadow-md lg:w-[65%]">
        <div className="flex flex-wrap justify-between h-full">
          <div className="flex-1 bg-[#ef5350] rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2  transition duration-300 hover:shadow-md">
            <img
              src="/static/handdraws/pointer.svg"
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
            <p className="text-white font-semibold italic">Find Loyals</p>
          </div>

          <div className="flex-1 bg-[#ef5350] rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2  transition duration-300 hover:shadow-md">
            <img
              src="/static/handdraws/cupcake.svg"
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
            <p className="text-white font-semibold italic">Reward them</p>
          </div>

          <div className="flex-1 bg-[#ef5350] rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2  transition duration-300 hover:shadow-md">
            <img
              src="/static/handdraws/asymmetricParallels.svg"
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
            <p className="text-white font-semibold italic">Gain continuity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
