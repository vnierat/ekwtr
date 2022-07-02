import { FC, Fragment } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { defaultGreen, defaultYellow } from "../../../../helpers/constants";
import { Contract } from "../../../../interfaces/interfaces";

interface ElecBarChartsProps {
  elecDataPerYear: Contract[];
}

const ElecBarCharts: FC<ElecBarChartsProps> = ({ elecDataPerYear }) => {
  const data = elecDataPerYear.map(({ date, valueHP, valueHC }) => {
    const dateFormat = new Date(date).toLocaleDateString("fr-FR");
    const time = new Date(date).toLocaleTimeString("fr", {
      timeStyle: "short",
      hour12: false,
      timeZone: "UTC",
    });

    const dateValue = `${dateFormat} ${time}`;

    return {
      date: dateValue,
      valueHP: valueHP,
      valueHC: valueHC,
    };
  });

  return (
    <Fragment>
      <div>
        <ResponsiveContainer width="100%" aspect={1}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 0,
              bottom: 5,
            }}
          >
            <XAxis dataKey="date" />
            <YAxis domain={[0, 100]} allowDataOverflow={true} />
            <Tooltip />
            <Legend />
            <Bar dataKey="valueHP" fill={defaultGreen} />
            <Bar dataKey="valueHC" fill={defaultYellow} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Fragment>
  );
};

export default ElecBarCharts;
