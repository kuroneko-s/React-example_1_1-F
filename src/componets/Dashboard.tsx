import ReactApexChart from "react-apexcharts";
import styled from "styled-components";
import Table from "./Table";

const Container = styled.div`
  width: 60%;
  padding: 10px;
`;

const DashboardChart = styled.div`
  height: 40%;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  height: 35%;

  h1 {
    font-size: 44px;
    font-weight: 600;
  }
`;

const Charts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;

  height: 65%;
`;

const Chart = styled.div`
  border-radius: 15px;
  height: 90%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  &:nth-child(1) {
    background-color: #e62ae6c0;
  }

  &:nth-child(2) {
    background-color: #f07c59ca;
  }

  &:nth-child(3) {
    background-color: #f8c844da;
  }
`;

const Orders = styled.div`
  max-height: 60%;
  height: 50%;

  h1 {
    font-size: 28px;
    font-weight: 600;
  }
`;

const OrderTitle = styled.h1`
  padding: 10px 0;
  margin-bottom: 20px;
`;

function Dashboard() {
  const options: any = {
    series: [70],
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
      },
    },
    labels: ["Cricket"],
  };

  return (
    <Container>
      <DashboardChart>
        <Title>
          <h1>Dashboard</h1>
        </Title>
        <Charts>
          <Chart>
            <ReactApexChart options={options} height={70} />
          </Chart>
          <Chart></Chart>
          <Chart></Chart>
        </Charts>
      </DashboardChart>
      <Orders>
        <OrderTitle>Recent Orders</OrderTitle>
        <Table />
      </Orders>
    </Container>
  );
}

export default Dashboard;
