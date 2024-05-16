import { useEffect } from "react";
import * as S from "./PieChart.styles";
import * as echarts from "echarts";

interface ChartProps {
  title: string;
  data: any[];
}
const { Meta } = S.ChartCard;

export const PieChart: React.FC<ChartProps> = ({ title, data }) => {
  useEffect(() => {
    const chartDom = document.getElementById("main1")!;
    const myChart = echarts.init(chartDom);

    console.log(data);

    const option: echarts.EChartsOption = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "0",
        left: "center",
      },
      series: [
        {
          name: "Values",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: data,
        },
      ],
    };

    option && myChart.setOption(option);

    // Cleanup: Dispose the chart when the component unmounts
    return () => {
      myChart.dispose();
    };
  }, [data]);
  return (
    <Meta
      description={
        <div id="main1" style={{ marginTop: "2rem", height: "17rem" }}></div>
      }
    />
  );
};
