import { PieChart } from "@mui/x-charts/PieChart";
import ProductsData from "../../products.json";

type Props = {};

const seriesColors = ["#6C63FF", "#FF6C90", "#FFA500"];

const PieChartView = (props: Props) => {
  const calculateProductCount = (productName: string) => {
    let count = 0;

    switch (productName) {
      case "MacBookPro14":
        ProductsData.map((t) => {
          count += t.macbookPro;
        });
        break;

      case "SamsungGalaxyWatch":
        ProductsData.map((t) => {
          count += t.samsungGalaxyWatch;
        });
        break;

      case "JBLClip4":
        ProductsData.map((t) => {
          count += t.jblClipFour;
        });
        break;

      default:
        break;
    }

    return count;
  };

  return (
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:-mx-6">
          <div className="lg:w-2/4 lg:px-6">
            <h1 className="font-medium italic mb-8">
              Yearly Sales of Your Products
            </h1>
            <PieChart
              series={[
                {
                  data: [
                    {
                      id: 0,
                      value: calculateProductCount("MacBookPro14"),
                      label: "MacBook Pro 14",
                    },
                    {
                      id: 1,
                      value: calculateProductCount("SamsungGalaxyWatch"),
                      label: "Samsung Galaxy Watch",
                    },
                    {
                      id: 2,
                      value: calculateProductCount("JBLClip4"),
                      label: "JBL Clip 4",
                    },
                  ],
                },
              ]}
              width={700}
              height={300}
              colors={seriesColors}
            />
          </div>

          <div className="mt-8 lg:w-2/4 lg:mt-0 lg:px-6">
            <div>
              <h3 className="text-[#6C63FF] capitalize italic">
                Category Distribution
              </h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 italic"
              >
                Pie charts show how categories are distributed within a whole.
              </a>
            </div>

            <hr className="my-6 border-gray-200" />

            <div>
              <h3 className="text-[#6C63FF] capitalize italic">
                Proportional Comparison
              </h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 italic"
              >
                Emphasizes the proportional relationship between different
                categories.
              </a>
            </div>

            <hr className="my-6 border-gray-200" />

            <div>
              <h3 className="text-[#6C63FF] capitalize italic">
                Percentage Distribution
              </h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 italic"
              >
                Depicts the percentage contribution of each category to the
                total.
              </a>
            </div>

            <hr className="my-6 border-gray-200" />

            <div>
              <h3 className="text-[#6C63FF] capitalize italic">
                Highlighting Prominent Data
              </h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 italic"
              >
                Emphasizes significant or standout categories in the dataset.
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PieChartView;
