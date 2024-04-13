import React, { useEffect, useState } from "react";
import Plotly from "react-plotly.js";

export const LinearRegressionPage: React.FC = () => {
  const [plotData, setPlotData] = useState<any>(null);

  useEffect(() => {
    // Fetch plot data from Django backend when component mounts
    fetch(process.env.REACT_APP_API_URL + "generate_plot_data/")
      .then((response) => response.json())
      .then((data) => {
        setPlotData(data.plot_data);
      })
      .catch((error) => console.error("Error fetching plot data:", error));
  }, []);
  return (
    <div>
      {plotData && <Plotly data={plotData.data} layout={plotData.layout} />}
    </div>
  );
};
