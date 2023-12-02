import AcUnitIcon from "@mui/icons-material/AcUnit";
import { primary } from "../../theme/themeColors";
import { useNavigate } from "react-router-dom";

type Props = {};

const Operations = (props: Props) => {
  const navigate = useNavigate();

  const handleClickPredictionExcel = () => {
    navigate("/predictionexcel");
  };
  return (
    <div className="bg-gray-800">
      <section>
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-200 capitalize lg:text-3xl italic">
            learn about our Operations
          </h1>
          <div>
            <span
              className="inline-block w-40 h-1  rounded-full"
              style={{ background: primary.main }}
            ></span>
            <span
              className="inline-block w-3 h-1 ml-1  rounded-full"
              style={{ background: primary.main }}
            ></span>
            <span
              className="inline-block w-1 h-1 ml-1  rounded-full"
              style={{ background: primary.main }}
            ></span>
          </div>
          <p className="mt-4 text-gray-400 xl:mt-6 italic">
            Six Paths to Success: Explore, Understand, Excel in Market Dynamics
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div className="space-y-3">
              <span className="inline-block p-3  bg-gray-200 rounded-full">
                <img
                  src="/static/icons/excel-icon.png"
                  alt=""
                  style={{ width: "28px", height: "28px" }}
                />
              </span>

              <h1 className="text-xl font-semibold capitalize text-gray-200 italic">
                Potential Sales Excel
              </h1>

              <p className="text-gray-400 italic">
                This feature aims to predict future sales by examining the past
                sales of any specified product. By doing so, you can anticipate
                potential sales, adjust inventory accordingly, and effectively
                manage your revenue. Simply uploading the Excel file containing
                your historical sales data will be sufficient
              </p>

              <button
                onClick={handleClickPredictionExcel}
                className="inline-flex items-center -mx-1 text-sm capitalize transition-colors duration-300 transform  hover:underline"
                style={{ color: primary.main }}
              >
                <span className="mx-1 italic">give it a go</span>
                <svg
                  className="w-4 h-4 mx-1 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3 bg-gray-200 rounded-full">
                <AcUnitIcon sx={{ color: primary.main }} />
              </span>

              <h1 className="text-xl font-semibold capitalize text-gray-200 italic">
                Copy & paste components
              </h1>

              <p className="text-gray-400 italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>

              <button
                className="inline-flex items-center -mx-1 text-sm capitalize transition-colors duration-300 transform  hover:underline"
                style={{ color: primary.main }}
              >
                <span className="mx-1 italic">give it a go</span>
                <svg
                  className="w-4 h-4 mx-1 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3 bg-gray-200 rounded-full">
                <AcUnitIcon sx={{ color: primary.main }} />
              </span>

              <h1 className="text-xl font-semibold capitalize text-gray-200 italic">
                Copy & paste components
              </h1>

              <p className="text-gray-400 italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>

              <button
                className="inline-flex items-center -mx-1 text-sm capitalize transition-colors duration-300 transform  hover:underline"
                style={{ color: primary.main }}
              >
                <span className="mx-1 italic">give it a go</span>
                <svg
                  className="w-4 h-4 mx-1 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3  bg-gray-200 rounded-full">
                <AcUnitIcon sx={{ color: primary.main }} />
              </span>

              <h1 className="text-xl font-semibold capitalize text-gray-200 italic">
                Copy & paste components
              </h1>

              <p className="text-gray-400 italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>

              <button
                className="inline-flex items-center -mx-1 text-sm capitalize transition-colors duration-300 transform  hover:underline"
                style={{ color: primary.main }}
              >
                <span className="mx-1 italic">give it a go</span>
                <svg
                  className="w-4 h-4 mx-1 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3  bg-gray-200 rounded-full">
                <AcUnitIcon sx={{ color: primary.main }} />
              </span>

              <h1 className="text-xl font-semibold capitalize text-gray-200 italic">
                Copy & paste components
              </h1>

              <p className="text-gray-400 italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>

              <button
                className="inline-flex items-center -mx-1 text-sm capitalize transition-colors duration-300 transform  hover:underline"
                style={{ color: primary.main }}
              >
                <span className="mx-1 italic">give it a go</span>
                <svg
                  className="w-4 h-4 mx-1 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3  bg-gray-200 rounded-full">
                <AcUnitIcon sx={{ color: primary.main }} />
              </span>

              <h1 className="text-xl font-semibold capitalize text-gray-200 italic">
                Copy & paste components
              </h1>

              <p className="text-gray-400 italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>

              <button
                className="inline-flex items-center -mx-1 text-sm capitalize transition-colors duration-300 transform  hover:underline"
                style={{ color: primary.main }}
              >
                <span className="mx-1 italic">give it a go</span>
                <svg
                  className="w-4 h-4 mx-1 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Operations;
