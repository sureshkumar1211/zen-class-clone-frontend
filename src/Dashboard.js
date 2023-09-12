import { Row } from "antd";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

const Dashboard = () => {
  return (
    <section>
      <Row style={{ gap: "20px" }}>
        <BarChart title={"Codeketa"} />
        <BarChart title={"Webketa"} />
      </Row>
      <LineChart />
    </section>
  );
};

export default Dashboard;
