import useBooksData from "../Hooks/useBooksData";
import useLocalStorage from "../Hooks/useLocalStorage";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
const PagesToRead = () => {
  const { data: bookData } = useBooksData();
  const { localData } = useLocalStorage();

  // const {
  //   bookName,
  //   author,
  //   category,
  //   rating,
  //   tags,
  //   review,
  //   totalPages,
  //   publisher,
  //   yearOfPublishing,
  //   image,
  // } = data || {};
  const data = [
    {
      name: "Page a",
      uv: localData.length,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: bookData.length - localData.length,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // <BarChart
  //     width={500}
  //     height={300}
  //     data={data}
  //     margin={{
  //       top: 20,
  //       right: 30,
  //       left: 20,
  //       bottom: 5,
  //     }}
  //   >
  //     <CartesianGrid strokeDasharray="3 3" />
  //     <XAxis dataKey="name" />
  //     <YAxis />
  //     <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
  //       {data.map((entry, index) => (
  //         <Cell key={`cell-${index}`} fill={colors[index % 20]} />
  //       ))}
  //     </Bar>
  //   </BarChart>

  return (
    <div>
      <div className="question">
        <div className="question-container">
          <ResponsiveContainer width="100%" aspect={3}>
            <BarChart>
              <YAxis
                axisLine={false}
                tickLine={false}
                width={800}
                dataKey="name"
                type="category"
              ></YAxis>
              <Bar
                dataKey="valuePre"
                fill="#00a0dc"
                label={<Text scaleToFit={true} verticalAnchor="middle" />}
              />
              <Bar
                dataKey="valuePost"
                fill="#c7c7c7"
                label={<Text verticalAnchor="middle" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PagesToRead;
