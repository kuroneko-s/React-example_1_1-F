import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";
import imgA from "../images/MOKOKO_01.png";
import imgB from "../images/MOKOKO_02.png";
import imgC from "../images/MOKOKO_03.png";

const Container = styled.div`
  width: 23%;
`;

const UpdateNotification = styled.div`
  height: 50%;
  padding: 0 10px;
  h1 {
    padding: 20px 0;
    font-size: 28px;
    font-weight: 600;
  }
`;

const Messenger = styled.div`
  background-color: #fff;
  height: 80%;
  border-radius: 8px;
`;

const MessengerItem = styled.div`
  position: relative;
  height: 33.33%;

  display: flex;
  flex-direction: row;

  .profile-box {
    border-radius: 50%;
    width: 70px;
    height: 70px;
    margin: 5px 10px;
  }

  .profile-description {
    h3 {
      font-weight: 600;
      margin-bottom: 5px;
    }
  }

  .profile-time {
    position: absolute;
    bottom: 5px;
  }

  &:not(:last-child) {
    margin-bottom: 3px;
    border-bottom: #dbdbdb solid 1px;
  }

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
`;

const Chart = styled.div`
  height: 49%;

  h1 {
    padding: 20px 0;
    font-size: 28px;
    font-weight: 600;
  }
`;

interface IMessagendDate {
  name: string;
  content: string;
  createTime: number;
  src: string;
}

function MessengerComponent({
  name,
  content,
  createTime,
  src,
}: IMessagendDate) {
  console.log(createTime);
  const time = Math.floor((new Date().getTime() - createTime) / 1000); // second
  console.log(time);
  // 60 = 1min, 360 = 1h
  console.log(src);
  return (
    <MessengerItem>
      <div className="profile-box">
        <img src={src} alt="profile" />
      </div>
      <div className="profile-description">
        <h3>{name}</h3>
        <p>{content}</p>
        <p className="profile-time">
          {time <= 59
            ? `${time} seconds ago`
            : time >= 1800 && time <= 3599
            ? `${Math.floor(time / 60)} minutes ago`
            : `${Math.floor(time / 360)} hours ago`}
        </p>
      </div>
    </MessengerItem>
  );
}

function Notifications() {
  const [messengerData] = useState<IMessagendDate[]>([
    {
      name: "Andrew Thomas",
      content: "has ordered Apple smart watch 2500mh battery.",
      createTime: new Date().getTime(),
      src: imgA,
    },
    {
      name: "James Bond",
      content: "has received Samsung gadget for charging battery",
      createTime: new Date().getTime() - 1000 * 60 * 30,
      src: imgB,
    },
    {
      name: "Andrew Thomas",
      content: "has ordered Apple smart watch 2500mh battery.",
      createTime: new Date().getTime() - 1000 * 60 * 180,
      src: imgC,
    },
  ]);

  const options: any = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };
  const series: any = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ];

  return (
    <Container>
      <UpdateNotification>
        <h1>Updates</h1>
        <Messenger>
          {messengerData.map((data, index) => (
            <MessengerComponent
              name={data.name}
              content={data.content}
              createTime={data.createTime}
              src={data.src}
              key={data.createTime}
            />
          ))}
        </Messenger>
      </UpdateNotification>
      <Chart>
        <h1>Customer Review</h1>
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={270}
        />
      </Chart>
    </Container>
  );
}

export default Notifications;
