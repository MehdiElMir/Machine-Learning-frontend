import React, { useEffect, useState } from "react";
import Plotly from "react-plotly.js";

export const TestingPage: React.FC = () => {
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
        marker: {
          color: "black",
        },
        mode: "markers",
        name: "Training data",
        x: [0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0],
        y: [0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        type: "scatter",
      },
      {
        line: {
          color: "blue",
        },
        mode: "lines",
        name: "Decision boundary",
        x: [
          0.0, 0.0033444816053511705, 0.006688963210702341,
          0.010033444816053512, 0.013377926421404682, 0.016722408026755852,
          0.020066889632107024, 0.023411371237458192, 0.026755852842809364,
          0.030100334448160536, 0.033444816053511704, 0.03678929765886287,
          0.04013377926421405, 0.043478260869565216, 0.046822742474916385,
          0.05016722408026756, 0.05351170568561873, 0.056856187290969896,
          0.06020066889632107, 0.06354515050167224, 0.06688963210702341,
          0.07023411371237458, 0.07357859531772575, 0.07692307692307693,
          0.0802675585284281, 0.08361204013377926, 0.08695652173913043,
          0.0903010033444816, 0.09364548494983277, 0.09698996655518395,
          0.10033444816053512, 0.10367892976588629, 0.10702341137123746,
          0.11036789297658862, 0.11371237458193979, 0.11705685618729096,
          0.12040133779264214, 0.12374581939799331, 0.12709030100334448,
          0.13043478260869565, 0.13377926421404682, 0.13712374581939799,
          0.14046822742474915, 0.14381270903010032, 0.1471571906354515,
          0.1505016722408027, 0.15384615384615385, 0.15719063545150502,
          0.1605351170568562, 0.16387959866220736, 0.16722408026755853,
          0.1705685618729097, 0.17391304347826086, 0.17725752508361203,
          0.1806020066889632, 0.18394648829431437, 0.18729096989966554,
          0.1906354515050167, 0.1939799331103679, 0.19732441471571907,
          0.20066889632107024, 0.2040133779264214, 0.20735785953177258,
          0.21070234113712374, 0.2140468227424749, 0.21739130434782608,
          0.22073578595317725, 0.22408026755852842, 0.22742474916387959,
          0.23076923076923075, 0.23411371237458192, 0.23745819397993312,
          0.2408026755852843, 0.24414715719063546, 0.24749163879598662,
          0.2508361204013378, 0.25418060200668896, 0.25752508361204013,
          0.2608695652173913, 0.26421404682274247, 0.26755852842809363,
          0.2709030100334448, 0.27424749163879597, 0.27759197324414714,
          0.2809364548494983, 0.2842809364548495, 0.28762541806020064,
          0.2909698996655518, 0.294314381270903, 0.29765886287625415,
          0.3010033444816054, 0.30434782608695654, 0.3076923076923077,
          0.3110367892976589, 0.31438127090301005, 0.3177257525083612,
          0.3210702341137124, 0.32441471571906355, 0.3277591973244147,
          0.3311036789297659, 0.33444816053511706, 0.3377926421404682,
          0.3411371237458194, 0.34448160535117056, 0.34782608695652173,
          0.3511705685618729, 0.35451505016722407, 0.35785953177257523,
          0.3612040133779264, 0.36454849498327757, 0.36789297658862874,
          0.3712374581939799, 0.3745819397993311, 0.37792642140468224,
          0.3812709030100334, 0.3846153846153846, 0.3879598662207358,
          0.391304347826087, 0.39464882943143814, 0.3979933110367893,
          0.4013377926421405, 0.40468227424749165, 0.4080267558528428,
          0.411371237458194, 0.41471571906354515, 0.4180602006688963,
          0.4214046822742475, 0.42474916387959866, 0.4280936454849498,
          0.431438127090301, 0.43478260869565216, 0.43812709030100333,
          0.4414715719063545, 0.44481605351170567, 0.44816053511705684,
          0.451505016722408, 0.45484949832775917, 0.45819397993311034,
          0.4615384615384615, 0.4648829431438127, 0.46822742474916385,
          0.47157190635451507, 0.47491638795986624, 0.4782608695652174,
          0.4816053511705686, 0.48494983277591974, 0.4882943143812709,
          0.4916387959866221, 0.49498327759197325, 0.4983277591973244,
          0.5016722408026756, 0.5050167224080268, 0.5083612040133779,
          0.5117056856187291, 0.5150501672240803, 0.5183946488294314,
          0.5217391304347826, 0.5250836120401338, 0.5284280936454849,
          0.5317725752508361, 0.5351170568561873, 0.5384615384615384,
          0.5418060200668896, 0.5451505016722408, 0.5484949832775919,
          0.5518394648829431, 0.5551839464882943, 0.5585284280936454,
          0.5618729096989966, 0.5652173913043478, 0.568561872909699,
          0.5719063545150501, 0.5752508361204013, 0.5785953177257525,
          0.5819397993311036, 0.5852842809364548, 0.588628762541806,
          0.5919732441471571, 0.5953177257525083, 0.5986622073578595,
          0.6020066889632107, 0.6053511705685619, 0.6086956521739131,
          0.6120401337792643, 0.6153846153846154, 0.6187290969899666,
          0.6220735785953178, 0.6254180602006689, 0.6287625418060201,
          0.6321070234113713, 0.6354515050167224, 0.6387959866220736,
          0.6421404682274248, 0.6454849498327759, 0.6488294314381271,
          0.6521739130434783, 0.6555183946488294, 0.6588628762541806,
          0.6622073578595318, 0.6655518394648829, 0.6688963210702341,
          0.6722408026755853, 0.6755852842809364, 0.6789297658862876,
          0.6822742474916388, 0.68561872909699, 0.6889632107023411,
          0.6923076923076923, 0.6956521739130435, 0.6989966555183946,
          0.7023411371237458, 0.705685618729097, 0.7090301003344481,
          0.7123745819397993, 0.7157190635451505, 0.7190635451505016,
          0.7224080267558528, 0.725752508361204, 0.7290969899665551,
          0.7324414715719063, 0.7357859531772575, 0.7391304347826086,
          0.7424749163879598, 0.745819397993311, 0.7491638795986622,
          0.7525083612040133, 0.7558528428093645, 0.7591973244147157,
          0.7625418060200668, 0.765886287625418, 0.7692307692307692,
          0.7725752508361204, 0.7759197324414716, 0.7792642140468228,
          0.782608695652174, 0.7859531772575251, 0.7892976588628763,
          0.7926421404682275, 0.7959866220735786, 0.7993311036789298,
          0.802675585284281, 0.8060200668896321, 0.8093645484949833,
          0.8127090301003345, 0.8160535117056856, 0.8193979933110368,
          0.822742474916388, 0.8260869565217391, 0.8294314381270903,
          0.8327759197324415, 0.8361204013377926, 0.8394648829431438,
          0.842809364548495, 0.8461538461538461, 0.8494983277591973,
          0.8528428093645485, 0.8561872909698997, 0.8595317725752508,
          0.862876254180602, 0.8662207357859532, 0.8695652173913043,
          0.8729096989966555, 0.8762541806020067, 0.8795986622073578,
          0.882943143812709, 0.8862876254180602, 0.8896321070234113,
          0.8929765886287625, 0.8963210702341137, 0.8996655518394648,
          0.903010033444816, 0.9063545150501672, 0.9096989966555183,
          0.9130434782608695, 0.9163879598662207, 0.9197324414715718,
          0.923076923076923, 0.9264214046822742, 0.9297658862876254,
          0.9331103678929765, 0.9364548494983277, 0.9397993311036789,
          0.9431438127090301, 0.9464882943143813, 0.9498327759197325,
          0.9531772575250836, 0.9565217391304348, 0.959866220735786,
          0.9632107023411371, 0.9665551839464883, 0.9698996655518395,
          0.9732441471571907, 0.9765886287625418, 0.979933110367893,
          0.9832775919732442, 0.9866220735785953, 0.9899665551839465,
          0.9933110367892977, 0.9966555183946488, 1.0,
        ],
        y: [
          0.5293885323085142, 0.5294055600486005, 0.5294225877202426,
          0.5294396153234012, 0.5294566428580368, 0.5294736703241103,
          0.5294906977215822, 0.5295077250504131, 0.5295247523105636,
          0.5295417795019945, 0.5295588066246665, 0.5295758336785401,
          0.5295928606635759, 0.5296098875797347, 0.529626914426977,
          0.5296439412052636, 0.5296609679145551, 0.529677994554812,
          0.5296950211259952, 0.5297120476280651, 0.5297290740609827,
          0.5297461004247083, 0.5297631267192027, 0.5297801529444265,
          0.5297971791003405, 0.5298142051869051, 0.5298312312040813,
          0.5298482571518295, 0.5298652830301104, 0.5298823088388848,
          0.5298993345781131, 0.5299163602477562, 0.5299333858477746,
          0.5299504113781291, 0.5299674368387802, 0.5299844622296888,
          0.5300014875508152, 0.5300185128021205, 0.5300355379835651,
          0.5300525630951096, 0.5300695881367149, 0.5300866131083414,
          0.53010363800995, 0.5301206628415013, 0.5301376876029559,
          0.5301547122942745, 0.5301717369154177, 0.5301887614663464,
          0.5302057859470211, 0.5302228103574025, 0.5302398346974513,
          0.530256858967128, 0.5302738831663935, 0.5302909072952083,
          0.5303079313535334, 0.530324955341329, 0.5303419792585561,
          0.5303590031051753, 0.5303760268811473, 0.5303930505864326,
          0.5304100742209922, 0.5304270977847865, 0.5304441212777763,
          0.5304611446999223, 0.5304781680511851, 0.5304951913315255,
          0.5305122145409041, 0.5305292376792815, 0.5305462607466186,
          0.5305632837428759, 0.5305803066680141, 0.530597329521994,
          0.5306143523047763, 0.5306313750163214, 0.5306483976565903,
          0.5306654202255436, 0.530682442723142, 0.5306994651493462,
          0.5307164875041167, 0.5307335097874145, 0.5307505319992001,
          0.5307675541394342, 0.5307845762080775, 0.5308015982050908,
          0.5308186201304346, 0.5308356419840697, 0.530852663765957,
          0.5308696854760568, 0.5308867071143301, 0.5309037286807374,
          0.5309207501752397, 0.5309377715977973, 0.5309547929483712,
          0.5309718142269219, 0.5309888354334102, 0.5310058565677969,
          0.5310228776300424, 0.5310398986201078, 0.5310569195379535,
          0.5310739403835404, 0.5310909611568291, 0.5311079818577803,
          0.5311250024863547, 0.5311420230425131, 0.5311590435262161,
          0.5311760639374244, 0.5311930842760989, 0.5312101045422001,
          0.5312271247356888, 0.5312441448565256, 0.5312611649046713,
          0.5312781848800868, 0.5312952047827326, 0.5313122246125693,
          0.5313292443695579, 0.5313462640536588, 0.5313632836648331,
          0.5313803032030412, 0.531397322668244, 0.5314143420604021,
          0.5314313613794762, 0.5314483806254272, 0.5314653997982156,
          0.5314824188978022, 0.5314994379241479, 0.5315164568772133,
          0.531533475756959, 0.5315504945633457, 0.5315675132963343,
          0.5315845319558855, 0.53160155054196, 0.5316185690545185,
          0.5316355874935218, 0.5316526058589304, 0.5316696241507054,
          0.5316866423688072, 0.5317036605131967, 0.5317206785838345,
          0.5317376965806816, 0.5317547145036985, 0.5317717323528459,
          0.5317887501280847, 0.5318057678293755, 0.531822785456679,
          0.5318398030099563, 0.5318568204891675, 0.5318738378942739,
          0.531890855225236, 0.5319078724820145, 0.5319248896645704,
          0.5319419067728641, 0.5319589238068564, 0.5319759407665082,
          0.5319929576517803, 0.5320099744626332, 0.5320269911990277,
          0.5320440078609247, 0.5320610244482847, 0.5320780409610687,
          0.5320950573992373, 0.5321120737627513, 0.5321290900515714,
          0.5321461062656584, 0.532163122404973, 0.5321801384694759,
          0.532197154459128, 0.53221417037389, 0.5322311862137226,
          0.5322482019785865, 0.5322652176684425, 0.5322822332832514,
          0.5322992488229741, 0.532316264287571, 0.5323332796770031,
          0.5323502949912311, 0.5323673102302157, 0.5323843253939178,
          0.532401340482298, 0.5324183554953171, 0.532435370432936,
          0.5324523852951153, 0.5324694000818158, 0.5324864147929982,
          0.5325034294286234, 0.5325204439886522, 0.532537458473045,
          0.532554472881763, 0.5325714872147668, 0.5325885014720171,
          0.5326055156534747, 0.5326225297591004, 0.532639543788855,
          0.5326565577426993, 0.5326735716205938, 0.5326905854224996,
          0.5327075991483773, 0.5327246127981876, 0.5327416263718916,
          0.5327586398694496, 0.5327756532908228, 0.5327926666359717,
          0.5328096799048573, 0.53282669309744, 0.532843706213681,
          0.5328607192535411, 0.5328777322169805, 0.5328947451039605,
          0.5329117579144418, 0.5329287706483851, 0.5329457833057512,
          0.5329627958865009, 0.5329798083905949, 0.532996820817994,
          0.533013833168659, 0.533030845442551, 0.5330478576396303,
          0.5330648697598578, 0.5330818818031944, 0.533098893769601,
          0.5331159056590381, 0.5331329174714666, 0.5331499292068475,
          0.5331669408651413, 0.5331839524463089, 0.533200963950311,
          0.5332179753771086, 0.5332349867266625, 0.5332519979989332,
          0.5332690091938816, 0.5332860203114688, 0.5333030313516551,
          0.5333200423144017, 0.5333370531996693, 0.5333540640074185,
          0.5333710747376103, 0.5333880853902054, 0.5334050959651648,
          0.533422106462449, 0.533439116882019, 0.5334561272238355,
          0.5334731374878593, 0.5334901476740515, 0.5335071577823725,
          0.5335241678127831, 0.5335411777652445, 0.5335581876397172,
          0.5335751974361621, 0.5335922071545399, 0.5336092167948117,
          0.5336262263569379, 0.5336432358408797, 0.5336602452465976,
          0.5336772545740526, 0.5336942638232054, 0.533711272994017,
          0.5337282820864478, 0.5337452911004592, 0.5337623000360115,
          0.5337793088930659, 0.5337963176715829, 0.5338133263715236,
          0.5338303349928485, 0.5338473435355187, 0.5338643519994949,
          0.533881360384738, 0.5338983686912087, 0.5339153769188678,
          0.5339323850676763, 0.5339493931375949, 0.5339664011285844,
          0.5339834090406057, 0.5340004168736198, 0.5340174246275871,
          0.5340344323024686, 0.5340514398982252, 0.5340684474148178,
          0.5340854548522072, 0.5341024622103541, 0.5341194694892193,
          0.5341364766887639, 0.5341534838089484, 0.5341704908497339,
          0.534187497811081, 0.5342045046929508, 0.534221511495304,
          0.5342385182181012, 0.5342555248613037, 0.5342725314248721,
          0.5342895379087671, 0.5343065443129498, 0.5343235506373808,
          0.5343405568820212, 0.5343575630468316, 0.534374569131773,
          0.5343915751368061, 0.5344085810618919, 0.5344255869069913,
          0.5344425926720647, 0.5344595983570735, 0.5344766039619783,
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
      title: {
        text: "Logistic Regression Decision Boundary",
      },
      xaxis: {
        title: {
          text: "Feature 1",
        },
      },
      yaxis: {
        title: {
          text: "Probability",
        },
      },
      showlegend: true,
    },
  };

  return (
    <div>
      {plotData && <Plotly data={plotData.data} layout={plotData.layout} />}
    </div>
  );
};
