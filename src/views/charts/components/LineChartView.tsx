import { axisClasses } from "@mui/x-charts";
import { LineChart } from "@mui/x-charts/LineChart";
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

const LineChartView = (props: Props) => {
  return (
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:-mx-6">
          <div className="lg:w-2/4 lg:px-6">
            <LineChart
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
                Visual Trend Analysis
              </h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 italic"
              >
                Line charts visually show trends over time or between related
                variables.
              </a>
            </div>

            <hr className="my-6 border-gray-200" />

            <div>
              <h3 className="text-[#6C63FF] capitalize italic">
                Comparison Between Variables
              </h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 italic"
              >
                Line charts compare multiple datasets on the same graph for easy
                analysis.
              </a>
            </div>

            <hr className="my-6 border-gray-200" />

            <div>
              <h3 className="text-[#6C63FF] capitalize italic">
                Time Series Analysis
              </h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 italic"
              >
                Ideal for analyzing changes and trends over a specific time
                period.
              </a>
            </div>

            <hr className="my-6 border-gray-200" />

            <div>
              <h3 className="text-[#6C63FF] capitalize italic">
                Detecting Anomalies
              </h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 italic"
              >
                Line charts help identify unexpected changes or irregularities
                in the dataset.
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LineChartView;
