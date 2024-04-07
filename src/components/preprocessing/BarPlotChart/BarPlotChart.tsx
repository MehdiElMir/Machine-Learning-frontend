import { useEffect } from "react";
import * as S from "./BarPlotChart.styles";
import * as echarts from "echarts";

interface ChartProps {
  title: string;
  data: any[];
}
const { Meta } = S.ChartCard;

export const BarPlotChart: React.FC<ChartProps> = ({ title, data }) => {
  useEffect(() => {
    const chartDom = document.getElementById("main")!;
    const myChart = echarts.init(chartDom);

    console.log(data);

    const option: echarts.EChartsOption = {
      title: {
        show: false,
      },
      legend: {
        show: false,
      },
      xAxis: {
        type: "category",
        data: Object.keys(data),

        axisTick: {
          alignWithLabel: false,
        },
        axisLabel: {
          rotate: 45,
        },
      },
      yAxis: {
        type: "value",
        axisLine: {
          show: false,
          lineStyle: {
            type: "dotted",
            dashOffset: 5,
          },
        },
        splitLine: {
          lineStyle: {
            width: 1,
            type: "dotted",
            opacity: 0.5,
          },
        },
      },
      series: [
        {
          data: Object.values(data),
          type: "bar",
          barWidth: "60%",
          itemStyle: {
            color: "#6047ed",
          },
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
    <>
      <S.ChartCard>
        <p>{title}</p>
        <Meta description={<div id="main" style={{ height: "17rem" }}></div>} />
      </S.ChartCard>
    </>
  );
};
