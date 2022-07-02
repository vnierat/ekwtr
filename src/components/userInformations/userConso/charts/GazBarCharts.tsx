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
import { defaultGreen } from "../../../../helpers/constants";
import { Contract } from "../../../../interfaces/interfaces";

interface GazBarChartsProps {
  gazDataPerYear: Contract[];
}

const GazBarCharts: FC<GazBarChartsProps> = ({ gazDataPerYear }) => {
  const data = gazDataPerYear.map(({ date, value }) => {
    const dateFormat = new Date(date).toLocaleDateString("fr-FR");
    const time = new Date(date).toLocaleTimeString("fr", {
      timeStyle: "short",
      hour12: false,
      timeZone: "UTC",
    });

    const dateValue = `${dateFormat} ${time}`;
    return {
      date: dateValue,
      value: value,
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
            <Bar dataKey="value" fill={defaultGreen} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Fragment>
  );
};

export default GazBarCharts;
