import "./App.css";
import { getEnergyType } from "./helpers/utils";
import Header from "./components/header/Header";
import { Fragment } from "react";
import UserCard from "./components/userInformations/UserCard";
import { Container } from "./App.style";

const App = () => {
  const data = [
    { date: "2021-12-08T14:23:09.283Z", valueHP: 65, valueHC: 33, id: "1" },
    { date: "2021-11-27T05:35:29.433Z", valueHP: 14, valueHC: 21, id: "2" },
    { date: "2021-10-27T23:22:54.304Z", valueHP: 67, valueHC: 69, id: "3" },
    { date: "2021-09-16T23:15:32.732Z", valueHP: 82, valueHC: 60, id: "4" },
    { date: "2021-08-15T05:33:48.507Z", valueHP: 91, valueHC: 78, id: "5" },
    { date: "2021-07-19T04:29:10.271Z", valueHP: 31, valueHC: 59, id: "6" },
    { date: "2021-07-02T17:23:36.665Z", valueHP: 14, valueHC: 71, id: "7" },
    { date: "2021-06-20T15:15:09.472Z", valueHP: 95, valueHC: 60, id: "8" },
    { date: "2021-06-08T12:16:04.015Z", valueHP: 67, valueHC: 51, id: "9" },
    { date: "2021-05-07T20:50:48.715Z", valueHP: 52, valueHC: 72, id: "10" },
    { date: "2021-04-23T15:09:09.392Z", valueHP: 59, valueHC: 52, id: "11" },
    { date: "2021-04-10T06:16:40.420Z", valueHP: 84, valueHC: 48, id: "12" },
    { date: "2021-03-30T02:49:00.353Z", valueHP: 10, valueHC: 31, id: "13" },
    { date: "2021-03-10T16:46:23.815Z", valueHP: 12, valueHC: 78, id: "14" },
    { date: "2021-02-21T08:16:51.816Z", valueHP: 17, valueHC: 93, id: "15" },
    { date: "2021-02-07T22:07:33.948Z", valueHP: 19, valueHC: 15, id: "16" },
    { date: "2021-01-13T01:59:50.506Z", valueHP: 93, valueHC: 11, id: "17" },
    { date: "2020-12-27T21:51:03.206Z", valueHP: 64, valueHC: 41, id: "18" },
    { date: "2020-11-14T09:28:35.559Z", valueHP: 7, valueHC: 94, id: "19" },
    { date: "2020-12-17T15:25:10.691Z", valueHP: 13, valueHC: 53, id: "20" },
    { date: "2021-02-08T09:54:00.319Z", valueHP: 78, valueHC: 35, id: "21" },
    { date: "2021-08-16T12:04:36.788Z", valueHP: 9, valueHC: 56, id: "22" },
    { date: "2020-12-20T08:55:02.768Z", valueHP: 70, valueHC: 38, id: "23" },
    { date: "2020-11-17T11:28:43.939Z", valueHP: 11, valueHC: 2, id: "24" },
    { date: "2020-10-09T18:35:05.387Z", valueHP: 93, valueHC: 93, id: "25" },
    { date: "2020-09-16T03:56:40.447Z", valueHP: 4, valueHC: 18, id: "26" },
    { date: "2020-08-20T11:47:18.339Z", valueHP: 46, valueHC: 14, id: "27" },
    { date: "2020-07-21T14:56:51.405Z", valueHP: 73, valueHC: 91, id: "28" },
    { date: "2020-06-07T13:46:18.143Z", valueHP: 93, valueHC: 71, id: "29" },
    { date: "2020-05-17T06:53:22.858Z", valueHP: 44, valueHC: 69, id: "30" },
  ];

  const properties = data
    .filter(({ date }) => new Date(date).getFullYear() === 2020)
    .map(({ valueHP, valueHC }) => ({ hp: valueHP, hc: valueHC }));

  console.log(properties);

  const typeEn = getEnergyType("electricity");

  console.log(typeEn);
  return (
    <Fragment>
      <Header />
      <Container>
        <UserCard />
      </Container>
    </Fragment>
  );
};

export default App;
