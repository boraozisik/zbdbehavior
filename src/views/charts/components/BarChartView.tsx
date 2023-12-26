import { axisClasses } from "@mui/x-charts";
import { BarChart } from "@mui/x-charts/BarChart";
import ProductsData from "../../products.json";

type Props = {};

const chartSettings = {
  yAxis: [
    {
      label: "sales (count)",
    },
  ],
  width: 700,
  height: 400,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-10px, 0)",
    },
  },
};

const valueFormatter = (value: number) => `${value} units`;

const seriesColors = ["#6C63FF", "#FF6C90", "#FFA500"];

const BarChartView = (props: Props) => {
  return (
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:-mx-6">
          <div className="lg:w-2/4 lg:px-6">
            <BarChart
              dataset={ProductsData}
              xAxis={[{ scaleType: "band", dataKey: "month" }]}
              series={[
                {
                  dataKey: "macbookPro",
                  label: "Macbook Pro 14",
                  valueFormatter,
                },
                {
                  dataKey: "samsungGalaxyWatch",
                  label: "Samsung Galaxy Watch",
                  valueFormatter,
                },
                { dataKey: "jblClipFour", label: "JBL Clip 4", valueFormatter },
              ]}
              colors={seriesColors}
              {...chartSettings}
            />
          </div>

          <div className="mt-8 lg:w-2/4 lg:mt-0 lg:px-6">
            <div>
              <h3 className="text-[#6C63FF] capitalize italic">
                Representation of Categorical Data
              </h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 italic"
              >
                Each bar represents a specific category or data segment.
              </a>
            </div>

            <hr className="my-6 border-gray-200" />

            <div>
              <h3 className="text-[#6C63FF] capitalize italic">
                Value Representation with Length
              </h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 italic"
              >
                The length of each bar indicates the value it represents.
              </a>
            </div>

            <hr className="my-6 border-gray-200" />

            <div>
              <h3 className="text-[#6C63FF] capitalize italic">
                Comparison of Multiple Categories
              </h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 italic"
              >
                Multiple bars enable the comparison of different categories.
              </a>
            </div>

            <hr className="my-6 border-gray-200" />

            <div>
              <h3 className="text-[#6C63FF] capitalize italic">
                Simple and Understandable Representation
              </h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 italic"
              >
                Representing data in a simple and understandable visual format,
                facilitating easy visual analysis.
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BarChartView;
