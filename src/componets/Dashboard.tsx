import ReactApexChart from "react-apexcharts";
import styled from "styled-components";
import Table from "./Table";
import { CardsData } from "../Data";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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

const Chart = styled(motion.div)`
  display: flex;
  flex-direction: row;

  border-radius: 15px;
  height: 90%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;

  &:hover {
    box-shadow: none;
    transform: scale(1.03);
  }

  &:nth-child(1) {
    background-color: ${(props) => props.theme.colors.charts.first};
  }

  &:nth-child(2) {
    background-color: ${(props) => props.theme.colors.charts.second};
  }

  &:nth-child(3) {
    background-color: ${(props) => props.theme.colors.charts.third};
  }
`;

const ChartItemOne = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 100%;
  padding-left: 10px;

  p {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    text-align: center;
  }
`;

const ChartItemTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 55%;
  height: 100%;
  padding-top: 20px;
  padding-right: 10px;
  position: relative;
  font-size: 25px;
  font-weight: 600;
  color: #fff;

  svg {
    margin-bottom: 22px;
  }

  p:last-child {
    position: absolute;
    bottom: 20px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
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

const BiggerChart = styled(motion.div)`
  position: fixed;
  background-color: red;
  width: 720px;
  height: 480px;
  top: calc(50% - 240px);
  left: calc(50% - 400px);
  z-index: 1;
`;

function getTime(createTime: number) {
  const time = Math.floor((new Date().getTime() - createTime) / 1000);
  return time <= 59
    ? `${time} seconds ago`
    : time >= 1800 && time <= 3599
    ? `${Math.floor(time / 60)} minutes ago`
    : `${Math.floor(time / 360)} hours ago`;
}

function Dashboard() {
  const [selected, setSelected] = useState<number>(-1);

  return (
    <Container>
      <DashboardChart>
        <Title>
          <h1>Dashboard</h1>
        </Title>
        <Charts>
          {CardsData.map((data, index) => {
            return (
              <Chart
                key={index}
                onClick={() => setSelected(index)}
                layoutId={index + ""}
              >
                <ChartItemOne>
                  <ReactApexChart
                    options={{
                      plotOptions: {
                        radialBar: {
                          startAngle: 0,
                          endAngle: data.endAngle,
                          hollow: {
                            size: "45%", // 선 두께
                            background: "rgba(0, 0, 0, 0)",
                          },
                          track: {
                            dropShadow: {
                              enabled: true,
                              top: 2,
                              left: 0,
                              blur: 4,
                              color: "#fff",
                              opacity: 0.15,
                            },
                          },
                          dataLabels: {
                            name: {
                              show: true,
                              color: "#fff",
                              fontSize: "16px",
                              fontWeight: "600",
                            },
                            value: {
                              show: false,
                            },
                          },
                        },
                      },
                      fill: {
                        type: "solid",
                        colors: ["#fff"],
                        opacity: 0.9,
                      },
                      stroke: {
                        lineCap: "round",
                      },
                      labels: [data.barValue],
                    }}
                    series={[100]}
                    type="radialBar"
                    height={150}
                  />
                  <p>{data.title}</p>
                </ChartItemOne>
                <ChartItemTwo>
                  <data.png />
                  <p>{`$${data.value}`}</p>
                  <p>{getTime(data.createDate)}</p>
                </ChartItemTwo>
              </Chart>
            );
          })}
        </Charts>
      </DashboardChart>
      <Orders>
        <OrderTitle>Recent Orders</OrderTitle>
        <Table />
      </Orders>
      {selected >= 0 && (
        <BiggerChart
          initial={{ opacity: 0, zIndex: -1 }}
          animate={{ opacity: 1, zIndex: 2 }}
          layoutId={selected + ""}
        >
          chart
          <p onClick={() => setSelected(-1)}>X</p>
        </BiggerChart>
      )}
    </Container>
  );
}

export default Dashboard;
