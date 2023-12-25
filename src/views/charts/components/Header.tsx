import { useNavigate } from "react-router-dom";

type HeaderProps = {
  value: string;
  handleChange: (newValue: string) => void;
};

const Header = ({ value, handleChange }: HeaderProps) => {
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
            src="/static/illustrations/relaxation.svg"
            alt=""
            style={{ width: "200px", height: "120px" }}
          />
        </div>
      </div>

      <div className="bg-white border border-gray-200 p-4 rounded-lg xs:mb-4 max-w-full shadow-md lg:w-[65%]">
        <div className="flex flex-wrap justify-between h-full">
          <div
            className="flex-1 bg-[#FF6C90] rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2 cursor-pointer transition duration-300 hover:shadow-md"
            onClick={() => handleChange("barchart")}
          >
            <img
              src="/static/handdraws/barchart.svg"
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
            <p className="text-white font-semibold italic">Click to see Bar</p>
          </div>

          <div
            className="flex-1 bg-[#FF6C90] rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2 cursor-pointer transition duration-300 hover:shadow-md"
            onClick={() => handleChange("linechart")}
          >
            <img
              src="/static/handdraws/linechart.svg"
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
            <p className="text-white font-semibold italic">Click to see Line</p>
          </div>

          <div
            className="flex-1 bg-[#FF6C90] rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2 cursor-pointer transition duration-300 hover:shadow-md"
            onClick={() => handleChange("piechart")}
          >
            <img
              src="/static/handdraws/piechart.svg"
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
            <p className="text-white font-semibold italic">Click to see Pie</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
