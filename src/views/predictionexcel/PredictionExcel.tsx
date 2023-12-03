import ExcelForm from "./components/ExcelForm";
import Header from "./components/Header";

type Props = {};

const PredictionExcel = (props: Props) => {
  return (
    <div className="container px-6 py-10 mx-auto">
      <Header />
      <ExcelForm />
    </div>
  );
};

export default PredictionExcel;
