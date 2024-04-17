import React, { useEffect, useState } from "react";
import Plotly from "react-plotly.js";

export const LinearRegressionPage: React.FC = () => {
  // const [plotData, setPlotData] = useState<any>(null);

  // useEffect(() => {
  //   // Fetch plot data from Django backend when component mounts
  //   fetch(process.env.REACT_APP_API_URL + "generate_plot_data/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPlotData(data.plot_data);
  //     })
  //     .catch((error) => console.error("Error fetching plot data:", error));
  // }, []);
  const plotData: any = {
    data: [
      {
        hovertemplate: "TV=%{x}<br>Sales=%{y}<extra></extra>",
        legendgroup: "",
        marker: {
          color: "#636efa",
          opacity: 0.65,
          symbol: "circle",
        },
        mode: "markers",
        name: "",
        orientation: "v",
        showlegend: false,
        x: [230.1, 230.1, 17.2, 2.0, 180.8, 99.0],
        xaxis: "x",
        y: [22.1, 10.4, 9.3, 18.5, 12.9, 7.2],
        yaxis: "y",
        type: "scatter",
      },
      {
        name: "Regression Fit",
        x: [
          2.0, 4.3040404040404034, 6.608080808080808, 8.912121212121212,
          11.216161616161616, 13.520202020202019, 15.824242424242424,
          18.128282828282828, 20.43232323232323, 22.736363636363635,
          25.040404040404038, 27.34444444444444, 29.64848484848485,
          31.952525252525252, 34.256565656565655, 36.560606060606055,
          38.86464646464646, 41.16868686868687, 43.47272727272727,
          45.776767676767676, 48.080808080808076, 50.38484848484848,
          52.68888888888888, 54.99292929292929, 57.2969696969697,
          59.6010101010101, 61.905050505050504, 64.2090909090909,
          66.51313131313131, 68.81717171717172, 71.12121212121211,
          73.42525252525252, 75.72929292929292, 78.03333333333333,
          80.33737373737374, 82.64141414141413, 84.94545454545454,
          87.24949494949495, 89.55353535353535, 91.85757575757575,
          94.16161616161615, 96.46565656565656, 98.76969696969697,
          101.07373737373737, 103.37777777777777, 105.68181818181817,
          107.98585858585858, 110.28989898989899, 112.5939393939394,
          114.89797979797979, 117.2020202020202, 119.5060606060606,
          121.81010101010101, 124.1141414141414, 126.41818181818181,
          128.72222222222223, 131.02626262626262, 133.330303030303,
          135.63434343434344, 137.93838383838383, 140.24242424242422,
          142.54646464646464, 144.85050505050503, 147.15454545454546,
          149.45858585858585, 151.76262626262624, 154.06666666666666,
          156.37070707070706, 158.67474747474748, 160.97878787878787,
          163.28282828282826, 165.58686868686868, 167.89090909090908,
          170.1949494949495, 172.4989898989899, 174.80303030303028,
          177.1070707070707, 179.4111111111111, 181.7151515151515,
          184.0191919191919, 186.3232323232323, 188.62727272727273,
          190.93131313131312, 193.2353535353535, 195.53939393939393,
          197.84343434343432, 200.14747474747475, 202.45151515151514,
          204.75555555555553, 207.05959595959595, 209.36363636363635,
          211.66767676767677, 213.97171717171716, 216.27575757575755,
          218.57979797979797, 220.88383838383837, 223.1878787878788,
          225.49191919191918, 227.79595959595957, 230.1,
        ],
        y: [
          12.105257792448604, 12.129212329592729, 12.153166866736854,
          12.177121403880976, 12.2010759410251, 12.225030478169224,
          12.248985015313348, 12.272939552457471, 12.296894089601595,
          12.320848626745718, 12.344803163889843, 12.368757701033967,
          12.39271223817809, 12.416666775322215, 12.440621312466337,
          12.464575849610462, 12.488530386754585, 12.51248492389871,
          12.536439461042834, 12.560393998186957, 12.584348535331081,
          12.608303072475204, 12.632257609619328, 12.656212146763451,
          12.680166683907576, 12.7041212210517, 12.728075758195823,
          12.752030295339948, 12.77598483248407, 12.799939369628195,
          12.823893906772318, 12.847848443916442, 12.871802981060565,
          12.89575751820469, 12.919712055348814, 12.943666592492937,
          12.967621129637061, 12.991575666781184, 13.015530203925309,
          13.039484741069431, 13.063439278213556, 13.08739381535768,
          13.111348352501803, 13.135302889645928, 13.15925742679005,
          13.183211963934175, 13.207166501078298, 13.231121038222422,
          13.255075575366547, 13.27903011251067, 13.302984649654794,
          13.326939186798917, 13.350893723943042, 13.374848261087164,
          13.398802798231289, 13.422757335375413, 13.446711872519536,
          13.47066640966366, 13.494620946807784, 13.518575483951908,
          13.54253002109603, 13.566484558240155, 13.590439095384278,
          13.614393632528403, 13.638348169672527, 13.66230270681665,
          13.686257243960775, 13.710211781104897, 13.734166318249022,
          13.758120855393145, 13.78207539253727, 13.806029929681394,
          13.829984466825517, 13.853939003969641, 13.877893541113764,
          13.901848078257888, 13.925802615402011, 13.949757152546136,
          13.973711689690258, 13.997666226834383, 14.021620763978508,
          14.04557530112263, 14.069529838266755, 14.093484375410878,
          14.117438912555002, 14.141393449699127, 14.16534798684325,
          14.189302523987372, 14.213257061131497, 14.237211598275621,
          14.261166135419744, 14.285120672563869, 14.309075209707991,
          14.333029746852116, 14.35698428399624, 14.380938821140363,
          14.404893358284488, 14.42884789542861, 14.452802432572735,
          14.47675696971686,
        ],
        type: "scatter",
      },
    ],
    layout: {
      template: {
        data: {
          histogram2dcontour: [
            {
              type: "histogram2dcontour",
              colorbar: {
                outlinewidth: 0,
                ticks: "",
              },
              colorscale: [
                [0.0, "#0d0887"],
                [0.1111111111111111, "#46039f"],
                [0.2222222222222222, "#7201a8"],
                [0.3333333333333333, "#9c179e"],
                [0.4444444444444444, "#bd3786"],
                [0.5555555555555556, "#d8576b"],
                [0.6666666666666666, "#ed7953"],
                [0.7777777777777778, "#fb9f3a"],
                [0.8888888888888888, "#fdca26"],
                [1.0, "#f0f921"],
              ],
            },
          ],
          choropleth: [
            {
              type: "choropleth",
              colorbar: {
                outlinewidth: 0,
                ticks: "",
              },
            },
          ],
          histogram2d: [
            {
              type: "histogram2d",
              colorbar: {
                outlinewidth: 0,
                ticks: "",
              },
              colorscale: [
                [0.0, "#0d0887"],
                [0.1111111111111111, "#46039f"],
                [0.2222222222222222, "#7201a8"],
                [0.3333333333333333, "#9c179e"],
                [0.4444444444444444, "#bd3786"],
                [0.5555555555555556, "#d8576b"],
                [0.6666666666666666, "#ed7953"],
                [0.7777777777777778, "#fb9f3a"],
                [0.8888888888888888, "#fdca26"],
                [1.0, "#f0f921"],
              ],
            },
          ],
          heatmap: [
            {
              type: "heatmap",
              colorbar: {
                outlinewidth: 0,
                ticks: "",
              },
              colorscale: [
                [0.0, "#0d0887"],
                [0.1111111111111111, "#46039f"],
                [0.2222222222222222, "#7201a8"],
                [0.3333333333333333, "#9c179e"],
                [0.4444444444444444, "#bd3786"],
                [0.5555555555555556, "#d8576b"],
                [0.6666666666666666, "#ed7953"],
                [0.7777777777777778, "#fb9f3a"],
                [0.8888888888888888, "#fdca26"],
                [1.0, "#f0f921"],
              ],
            },
          ],
          heatmapgl: [
            {
              type: "heatmapgl",
              colorbar: {
                outlinewidth: 0,
                ticks: "",
              },
              colorscale: [
                [0.0, "#0d0887"],
                [0.1111111111111111, "#46039f"],
                [0.2222222222222222, "#7201a8"],
                [0.3333333333333333, "#9c179e"],
                [0.4444444444444444, "#bd3786"],
                [0.5555555555555556, "#d8576b"],
                [0.6666666666666666, "#ed7953"],
                [0.7777777777777778, "#fb9f3a"],
                [0.8888888888888888, "#fdca26"],
                [1.0, "#f0f921"],
              ],
            },
          ],
          contourcarpet: [
            {
              type: "contourcarpet",
              colorbar: {
                outlinewidth: 0,
                ticks: "",
              },
            },
          ],
          contour: [
            {
              type: "contour",
              colorbar: {
                outlinewidth: 0,
                ticks: "",
              },
              colorscale: [
                [0.0, "#0d0887"],
                [0.1111111111111111, "#46039f"],
                [0.2222222222222222, "#7201a8"],
                [0.3333333333333333, "#9c179e"],
                [0.4444444444444444, "#bd3786"],
                [0.5555555555555556, "#d8576b"],
                [0.6666666666666666, "#ed7953"],
                [0.7777777777777778, "#fb9f3a"],
                [0.8888888888888888, "#fdca26"],
                [1.0, "#f0f921"],
              ],
            },
          ],
          surface: [
            {
              type: "surface",
              colorbar: {
                outlinewidth: 0,
                ticks: "",
              },
              colorscale: [
                [0.0, "#0d0887"],
                [0.1111111111111111, "#46039f"],
                [0.2222222222222222, "#7201a8"],
                [0.3333333333333333, "#9c179e"],
                [0.4444444444444444, "#bd3786"],
                [0.5555555555555556, "#d8576b"],
                [0.6666666666666666, "#ed7953"],
                [0.7777777777777778, "#fb9f3a"],
                [0.8888888888888888, "#fdca26"],
                [1.0, "#f0f921"],
              ],
            },
          ],
          mesh3d: [
            {
              type: "mesh3d",
              colorbar: {
                outlinewidth: 0,
                ticks: "",
              },
            },
          ],
          scatter: [
            {
              fillpattern: {
                fillmode: "overlay",
                size: 10,
                solidity: 0.2,
              },
              type: "scatter",
            },
          ],
          parcoords: [
            {
              type: "parcoords",
              line: {
                colorbar: {
                  outlinewidth: 0,
                  ticks: "",
                },
              },
            },
          ],
          scatterpolargl: [
            {
              type: "scatterpolargl",
              marker: {
                colorbar: {
                  outlinewidth: 0,
                  ticks: "",
                },
              },
            },
          ],
          bar: [
            {
              error_x: {
                color: "#2a3f5f",
              },
              error_y: {
                color: "#2a3f5f",
              },
              marker: {
                line: {
                  color: "#E5ECF6",
                  width: 0.5,
                },
                pattern: {
                  fillmode: "overlay",
                  size: 10,
                  solidity: 0.2,
                },
              },
              type: "bar",
            },
          ],
          scattergeo: [
            {
              type: "scattergeo",
              marker: {
                colorbar: {
                  outlinewidth: 0,
                  ticks: "",
                },
              },
            },
          ],
          scatterpolar: [
            {
              type: "scatterpolar",
              marker: {
                colorbar: {
                  outlinewidth: 0,
                  ticks: "",
                },
              },
            },
          ],
          histogram: [
            {
              marker: {
                pattern: {
                  fillmode: "overlay",
                  size: 10,
                  solidity: 0.2,
                },
              },
              type: "histogram",
            },
          ],
          scattergl: [
            {
              type: "scattergl",
              marker: {
                colorbar: {
                  outlinewidth: 0,
                  ticks: "",
                },
              },
            },
          ],
          scatter3d: [
            {
              type: "scatter3d",
              line: {
                colorbar: {
                  outlinewidth: 0,
                  ticks: "",
                },
              },
              marker: {
                colorbar: {
                  outlinewidth: 0,
                  ticks: "",
                },
              },
            },
          ],
          scattermapbox: [
            {
              type: "scattermapbox",
              marker: {
                colorbar: {
                  outlinewidth: 0,
                  ticks: "",
                },
              },
            },
          ],
          scatterternary: [
            {
              type: "scatterternary",
              marker: {
                colorbar: {
                  outlinewidth: 0,
                  ticks: "",
                },
              },
            },
          ],
          scattercarpet: [
            {
              type: "scattercarpet",
              marker: {
                colorbar: {
                  outlinewidth: 0,
                  ticks: "",
                },
              },
            },
          ],
          carpet: [
            {
              aaxis: {
                endlinecolor: "#2a3f5f",
                gridcolor: "white",
                linecolor: "white",
                minorgridcolor: "white",
                startlinecolor: "#2a3f5f",
              },
              baxis: {
                endlinecolor: "#2a3f5f",
                gridcolor: "white",
                linecolor: "white",
                minorgridcolor: "white",
                startlinecolor: "#2a3f5f",
              },
              type: "carpet",
            },
          ],
          table: [
            {
              cells: {
                fill: {
                  color: "#EBF0F8",
                },
                line: {
                  color: "white",
                },
              },
              header: {
                fill: {
                  color: "#C8D4E3",
                },
                line: {
                  color: "white",
                },
              },
              type: "table",
            },
          ],
          barpolar: [
            {
              marker: {
                line: {
                  color: "#E5ECF6",
                  width: 0.5,
                },
                pattern: {
                  fillmode: "overlay",
                  size: 10,
                  solidity: 0.2,
                },
              },
              type: "barpolar",
            },
          ],
          pie: [
            {
              automargin: true,
              type: "pie",
            },
          ],
        },
        layout: {
          autotypenumbers: "strict",
          colorway: [
            "#636efa",
            "#EF553B",
            "#00cc96",
            "#ab63fa",
            "#FFA15A",
            "#19d3f3",
            "#FF6692",
            "#B6E880",
            "#FF97FF",
            "#FECB52",
          ],
          font: {
            color: "#2a3f5f",
          },
          hovermode: "closest",
          hoverlabel: {
            align: "left",
          },
          paper_bgcolor: "white",
          plot_bgcolor: "#E5ECF6",
          polar: {
            bgcolor: "#E5ECF6",
            angularaxis: {
              gridcolor: "white",
              linecolor: "white",
              ticks: "",
            },
            radialaxis: {
              gridcolor: "white",
              linecolor: "white",
              ticks: "",
            },
          },
          ternary: {
            bgcolor: "#E5ECF6",
            aaxis: {
              gridcolor: "white",
              linecolor: "white",
              ticks: "",
            },
            baxis: {
              gridcolor: "white",
              linecolor: "white",
              ticks: "",
            },
            caxis: {
              gridcolor: "white",
              linecolor: "white",
              ticks: "",
            },
          },
          coloraxis: {
            colorbar: {
              outlinewidth: 0,
              ticks: "",
            },
          },
          colorscale: {
            sequential: [
              [0.0, "#0d0887"],
              [0.1111111111111111, "#46039f"],
              [0.2222222222222222, "#7201a8"],
              [0.3333333333333333, "#9c179e"],
              [0.4444444444444444, "#bd3786"],
              [0.5555555555555556, "#d8576b"],
              [0.6666666666666666, "#ed7953"],
              [0.7777777777777778, "#fb9f3a"],
              [0.8888888888888888, "#fdca26"],
              [1.0, "#f0f921"],
            ],
            sequentialminus: [
              [0.0, "#0d0887"],
              [0.1111111111111111, "#46039f"],
              [0.2222222222222222, "#7201a8"],
              [0.3333333333333333, "#9c179e"],
              [0.4444444444444444, "#bd3786"],
              [0.5555555555555556, "#d8576b"],
              [0.6666666666666666, "#ed7953"],
              [0.7777777777777778, "#fb9f3a"],
              [0.8888888888888888, "#fdca26"],
              [1.0, "#f0f921"],
            ],
            diverging: [
              [0, "#8e0152"],
              [0.1, "#c51b7d"],
              [0.2, "#de77ae"],
              [0.3, "#f1b6da"],
              [0.4, "#fde0ef"],
              [0.5, "#f7f7f7"],
              [0.6, "#e6f5d0"],
              [0.7, "#b8e186"],
              [0.8, "#7fbc41"],
              [0.9, "#4d9221"],
              [1, "#276419"],
            ],
          },
          xaxis: {
            gridcolor: "white",
            linecolor: "white",
            ticks: "",
            title: {
              standoff: 15,
            },
            zerolinecolor: "white",
            automargin: true,
            zerolinewidth: 2,
          },
          yaxis: {
            gridcolor: "white",
            linecolor: "white",
            ticks: "",
            title: {
              standoff: 15,
            },
            zerolinecolor: "white",
            automargin: true,
            zerolinewidth: 2,
          },
          scene: {
            xaxis: {
              backgroundcolor: "#E5ECF6",
              gridcolor: "white",
              linecolor: "white",
              showbackground: true,
              ticks: "",
              zerolinecolor: "white",
              gridwidth: 2,
            },
            yaxis: {
              backgroundcolor: "#E5ECF6",
              gridcolor: "white",
              linecolor: "white",
              showbackground: true,
              ticks: "",
              zerolinecolor: "white",
              gridwidth: 2,
            },
            zaxis: {
              backgroundcolor: "#E5ECF6",
              gridcolor: "white",
              linecolor: "white",
              showbackground: true,
              ticks: "",
              zerolinecolor: "white",
              gridwidth: 2,
            },
          },
          shapedefaults: {
            line: {
              color: "#2a3f5f",
            },
          },
          annotationdefaults: {
            arrowcolor: "#2a3f5f",
            arrowhead: 0,
            arrowwidth: 1,
          },
          geo: {
            bgcolor: "white",
            landcolor: "#E5ECF6",
            subunitcolor: "white",
            showland: true,
            showlakes: true,
            lakecolor: "white",
          },
          title: {
            x: 0.05,
          },
          mapbox: {
            style: "light",
          },
        },
      },
      xaxis: {
        anchor: "y",
        domain: [0.0, 1.0],
        title: {
          text: "TV",
        },
      },
      yaxis: {
        anchor: "x",
        domain: [0.0, 1.0],
        title: {
          text: "Sales",
        },
      },
      legend: {
        tracegroupgap: 0,
      },
      margin: {
        t: 60,
      },
    },
  };
  return (
    <div>
      {plotData && <Plotly data={plotData.data} layout={plotData.layout} />}
    </div>
  );
};
