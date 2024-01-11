import AcUnitIcon from "@mui/icons-material/AcUnit";
import { primary } from "../../theme/themeColors";
import { useNavigate } from "react-router-dom";

type Props = {};

const Operations = (props: Props) => {
  const navigate = useNavigate();

  const handleClickPredictionExcel = () => {
    navigate("/predictionexcel");
  };

  const handleClickCharts = () => {
    navigate("/charts");
  };

  const handleClickCampaign = () => {
    navigate("/campaign");
  };

  const handleClickLoyaltyMeter = () => {
    navigate("/producesolution");
  };

  const handleClickRewardLoyals = () => {
    navigate("/rewardloyals");
  };

  const handleClickNewJoiners = () => {
    navigate("/specialoffersfornewjoiners");
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

              <p className="text-gray-400 italic text-justify">
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
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3 bg-gray-200 rounded-full">
                <img
                  src="/static/icons/chart-icon.svg"
                  alt=""
                  style={{ width: "28px", height: "28px" }}
                />
              </span>

              <h1 className="text-xl font-semibold capitalize text-gray-200 italic">
                Declarative Charts
              </h1>

              <p className="text-gray-400 italic text-justify">
                Companies are constantly pressed for time, making it essential
                to adopt a charting system that is effortlessly excellent from
                the start. A declarative, concise approach is crucial,
                minimizing the need for extensive imperative scripting. This not
                only propels progress but also enables you to articulate your
                data visualization requirements swiftly, aligning with the pace
                of your creative endeavors.
              </p>

              <button
                onClick={handleClickCharts}
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
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3 bg-gray-200 rounded-full">
                <img
                  src="/static/icons/define-campaign-icon.svg"
                  alt=""
                  style={{ width: "28px", height: "28px" }}
                />
              </span>

              <h1 className="text-xl font-semibold capitalize text-gray-200 italic">
                Define Campaign
              </h1>

              <p className="text-gray-400 italic text-justify">
                This feature allows you to easily define a campaign for users
                who have added at least one of your products to their cart in
                case others of your products are also purchased. This feature
                encourages the user to buy and use more of your products.
              </p>

              <button
                onClick={handleClickCampaign}
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
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3  bg-gray-200 rounded-full">
                <img
                  src="/static/icons/star-icon.svg"
                  alt=""
                  style={{ width: "28px", height: "28px" }}
                />
              </span>

              <h1 className="text-xl font-semibold capitalize text-gray-200 italic">
                Reward Loyal Ones
              </h1>

              <p className="text-gray-400 italic text-justify">
                This operation allows you to find and reward your loyal users.
                You can create special discount coupons for customers who shop
                on your site more than once. In addition to discount coupons,
                offering more personalized offers and deals based on their
                previous purchases will increase the likelihood of repeat
                purchases.
              </p>

              <button
                onClick={handleClickRewardLoyals}
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
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3  bg-gray-200 rounded-full">
                <img
                  src="/static/icons/person-icon.svg"
                  alt=""
                  style={{ width: "28px", height: "28px" }}
                />
              </span>

              <h1 className="text-xl font-semibold capitalize text-gray-200 italic">
                Produce a Solution
              </h1>

              <p className="text-gray-400 italic text-justify">
                This operation lists users who are not loyal to you and looks at
                their feedback and other actions to help you win them back.
                Using this feature is a great way to take back users who are
                about to give up on you.
              </p>

              <button
                onClick={handleClickLoyaltyMeter}
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
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="space-y-3">
              <span className="inline-block p-3  bg-gray-200 rounded-full">
                <img
                  src="/static/icons/cupcake-icon.svg"
                  alt=""
                  style={{ width: "28px", height: "28px" }}
                />
              </span>

              <h1 className="text-xl font-semibold capitalize text-gray-200 italic">
                Special Offers for Newcomers
              </h1>

              <p className="text-gray-400 italic text-justify">
                This operation helps you make special offers for new users who
                register on your site. In this way, you can attract new joiners
                to buy your products and ensure continuity.
              </p>

              <button
                onClick={handleClickNewJoiners}
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
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
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
