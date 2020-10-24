
// MAKE GRAPHS FROM CSV FILE
d3.csv("../static/data/craftbeerdotcom_beer_styles_for_table.csv").then(function (data, err) {
  if (err) throw err;

  // parse data for plots
  data.forEach(function (data) {
    data.Dataa = +data.Original_gravity_min;
    data.DataA = +data.Original_gravity_max;
    data.Datab = +data.Final_gravity_min;
    data.DataB = +data.Final_gravity_max;
    data.Datac = +data.Alcohol_by_volume_min;
    data.DataC = +data.Alcohol_by_volume_max;
    data.Datad = +data.International_bitterness_units_min;
    data.DataD = +data.International_bitterness_units_max;
    data.Datae = +data.Bitterness_ratio_min;
    data.DataE = +data.Bitterness_ratio_max;
    data.Dataf = +data.Standard_reference_method_min;
    data.DataF = +data.Standard_reference_method_max;
    data.Datag = +data.Volumes_of_CO2_min;
    data.DataG = +data.Volumes_of_CO2_max;
    data.Datah = +data.Apparent_attenuation_min;
    data.DataH = +data.Apparent_attenuation_max;
  });

  //Find maxima
  var maxDataA = d3.max(data, function (d) { return d.DataA; });
  var maxDataB = d3.max(data, function (d) { return d.DataB; });
  var maxDataC = d3.max(data, function (d) { return d.DataC; });
  var maxDataD = d3.max(data, function (d) { return d.DataD; });
  var maxDataE = d3.max(data, function (d) { return d.DataE; });
  var maxDataF = d3.max(data, function (d) { return d.DataF; });
  var maxDataG = d3.max(data, function (d) { return d.DataG; });
  var maxDataH = d3.max(data, function (d) { return d.DataH; });

  //Scale all variables on a 0-100 percent scale

  // Empty lists to collect normalized data
  var list_DataAScaled = [];
  var list_DataBScaled = [];
  var list_DataCScaled = [];
  var list_DataDScaled = [];
  var list_DataEScaled = [];
  var list_DataFScaled = [];
  var list_DataGScaled = [];
  var list_DataHScaled = [];

  var list_DataaScaled = [];
  var list_DatabScaled = [];
  var list_DatacScaled = [];
  var list_DatadScaled = [];
  var list_DataeScaled = [];
  var list_DatafScaled = [];
  var list_DatagScaled = [];
  var list_DatahScaled = [];

  // Calculate normalized data and collect in lists
  data.forEach(function (data) {
    data.DataAScaled = (data.DataA / maxDataA) * 100;
    data.DataBScaled = (data.DataB / maxDataB) * 100;
    data.DataCScaled = (data.DataC / maxDataC) * 100;
    data.DataDScaled = (data.DataD / maxDataD) * 100;
    data.DataEScaled = (data.DataE / maxDataE) * 100;
    data.DataFScaled = (data.DataF / maxDataF) * 100;
    data.DataGScaled = (data.DataG / maxDataG) * 100;
    data.DataHScaled = (data.DataH / maxDataH) * 100;

    data.DataaScaled = (data.Dataa / maxDataA) * 100;
    data.DatabScaled = (data.Datab / maxDataB) * 100;
    data.DatacScaled = (data.Datac / maxDataC) * 100;
    data.DatadScaled = (data.Datad / maxDataD) * 100;
    data.DataeScaled = (data.Datae / maxDataE) * 100;
    data.DatafScaled = (data.Dataf / maxDataF) * 100;
    data.DatagScaled = (data.Datag / maxDataG) * 100;
    data.DatahScaled = (data.Datah / maxDataH) * 100;

    list_DataAScaled.push(data.DataAScaled);
    list_DataBScaled.push(data.DataBScaled);
    list_DataCScaled.push(data.DataCScaled);
    list_DataDScaled.push(data.DataDScaled);
    list_DataEScaled.push(data.DataEScaled);
    list_DataFScaled.push(data.DataFScaled);
    list_DataGScaled.push(data.DataGScaled);
    list_DataHScaled.push(data.DataHScaled);

    list_DataaScaled.push(data.DataaScaled);
    list_DatabScaled.push(data.DatabScaled);
    list_DatacScaled.push(data.DatacScaled);
    list_DatadScaled.push(data.DatadScaled);
    list_DataeScaled.push(data.DataeScaled);
    list_DatafScaled.push(data.DatafScaled);
    list_DatagScaled.push(data.DatagScaled);
    list_DatahScaled.push(data.DatahScaled);

  });

  const normdata = data;

  // Introductory scatterpolar graphs

  var chartdataIntro = [
    {
      type: "scatterpolar",
      fill: 'toself',
      opacity: 0.7,
      mode: "lines+markers",
      r: [normdata[0].DataAScaled, normdata[0].DataBScaled, normdata[0].DataCScaled, normdata[0].DataDScaled, normdata[0].DataEScaled, normdata[0].DataFScaled, normdata[0].DataGScaled, normdata[0].DataHScaled, normdata[0].DataAScaled],
      theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
      name: "Maximum",
      line: {
        color: "darkgoldenrod"
      },
      marker: {
        color: "darkgoldenrod",
        symbol: "square",
        size: 8
      }
    },
    {
      type: "scatterpolar",
      mode: "lines+markers",
      fill: 'toself',
      opacity: 0.7,
      r: [normdata[0].DataaScaled, normdata[0].DatabScaled, normdata[0].DatacScaled, normdata[0].DatadScaled, normdata[0].DataeScaled, normdata[0].DatafScaled, normdata[0].DatagScaled, normdata[0].DatahScaled, normdata[0].DataaScaled],
      theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
      name: "Minimum",
      labels: false,
      line: {
        color: "saddlebrown"
      },
      marker: {
        color: "saddlebrown",
        symbol: "square",
        size: 8
      },
    }
  ]

  var layoutIntro = {
    title: { text: normdata[0].Style_family + ': ' + normdata[0].Style },
    showlegend: true,
    polar: {
      radialaxis: {
        visible: true,
        range: [0, 100],
        automargin: true
      }
    }
  }

  Plotly.newPlot("plotIntro", chartdataIntro, layoutIntro); 

  //Button event handler for specific scatterpolar graphs
  d3.select("#selBeerFamily").on("change", function (d) {
  
    // recover the option that has been chosen
    var selectedOption = d3.select(this).property("value");
    console.log(selectedOption);

    // update charts with this selected option

    if (selectedOption == 0) { 
        var chartdataIntro = [
          {
            type: "scatterpolar",
            fill: 'toself',
            opacity: 0.7,
            mode: "lines+markers",
            r: [normdata[0].DataAScaled, normdata[0].DataBScaled, normdata[0].DataCScaled, normdata[0].DataDScaled, normdata[0].DataEScaled, normdata[0].DataFScaled, normdata[0].DataGScaled, normdata[0].DataHScaled, normdata[0].DataAScaled],
            theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
            name: "Maximum",
            line: {
              color: "darkgoldenrod"
            },
            marker: {
              color: "darkgoldenrod",
              symbol: "square",
              size: 8
            }
          },
          {
            type: "scatterpolar",
            mode: "lines+markers",
            fill: 'toself',
            opacity: 0.7,
            r: [normdata[0].DataaScaled, normdata[0].DatabScaled, normdata[0].DatacScaled, normdata[0].DatadScaled, normdata[0].DataeScaled, normdata[0].DatafScaled, normdata[0].DatagScaled, normdata[0].DatahScaled, normdata[0].DataaScaled],
            theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
            name: "Minimum",
            labels: false,
            line: {
              color: "saddlebrown"
            },
            marker: {
              color: "saddlebrown",
              symbol: "square",
              size: 8
            },
          }
        ]

        var layoutIntro = {
          title: { text: normdata[0].Style_family + ': ' + normdata[0].Style },
          showlegend: true,
          polar: {
            radialaxis: {
              visible: true,
              range: [0, 100],
              automargin: true
            }
          }
        }

        Plotly.newPlot("plotIntro", chartdataIntro, layoutIntro)  
  
    }

    else {

      var selectedOptionData = normdata.filter(function (d) { return d.Style_family_code == selectedOption; });
      styles = selectedOptionData.length

      var chartdata0 = [
        {
          type: "scatterpolar",
          fill: 'toself',
          opacity: 0.7,
          mode: "lines+markers",
          r: [selectedOptionData[0].DataAScaled, selectedOptionData[0].DataBScaled, selectedOptionData[0].DataCScaled, selectedOptionData[0].DataDScaled, selectedOptionData[0].DataEScaled, selectedOptionData[0].DataFScaled, selectedOptionData[0].DataGScaled, selectedOptionData[0].DataHScaled, selectedOptionData[0].DataAScaled],
          theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
          name: "Maximum",
          line: {
            color: "darkgoldenrod"
          },
          marker: {
            color: "darkgoldenrod",
            symbol: "square",
            size: 8
          }
        },
        {
          type: "scatterpolar",
          mode: "lines+markers",
          fill: 'toself',
          opacity: 0.7,
          r: [selectedOptionData[0].DataaScaled, selectedOptionData[0].DatabScaled, selectedOptionData[0].DatacScaled, selectedOptionData[0].DatadScaled, selectedOptionData[0].DataeScaled, selectedOptionData[0].DatafScaled, selectedOptionData[0].DatagScaled, selectedOptionData[0].DatahScaled, selectedOptionData[0].DataaScaled],
          theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
          name: "Minimum",
          labels: false,
          line: {
            color: "saddlebrown"
          },
          marker: {
            color: "saddlebrown",
            symbol: "square",
            size: 8
          },
        }
      ]

      var layout0 = {
        title: { text: selectedOptionData[0].Style_family + ': ' + selectedOptionData[0].Style },
        showlegend: true,
        polar: {
          radialaxis: {
            visible: true,
            range: [0, 100],
            automargin: true
          }
        }
      }

      Plotly.newPlot("plot0", chartdata0, layout0);

      var chartdata1 = [
        {
          type: "scatterpolar",
          mode: "lines+markers",
          fill: 'toself',
          opacity: 0.7,
          r: [selectedOptionData[1].DataAScaled, selectedOptionData[1].DataBScaled, selectedOptionData[1].DataCScaled, selectedOptionData[1].DataDScaled, selectedOptionData[1].DataEScaled, selectedOptionData[1].DataFScaled, selectedOptionData[1].DataGScaled, selectedOptionData[1].DataHScaled, selectedOptionData[1].DataAScaled],
          theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
          name: "Maximum",
          line: {
            color: "darkgoldenrod"
          },
          marker: {
            color: "darkgoldenrod",
            symbol: "square",
            size: 8
          }
        },
        {
          type: "scatterpolar",
          mode: "lines+markers",
          fill: 'toself',
          opacity: 0.7,
          r: [selectedOptionData[1].DataaScaled, selectedOptionData[1].DatabScaled, selectedOptionData[1].DatacScaled, selectedOptionData[1].DatadScaled, selectedOptionData[1].DataeScaled, selectedOptionData[1].DatafScaled, selectedOptionData[1].DatagScaled, selectedOptionData[1].DatahScaled, selectedOptionData[1].DataaScaled],
          theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
          name: "Minimum",
          labels: false,
          line: {
            color: "saddlebrown"
          },
          marker: {
            color: "saddlebrown",
            symbol: "square",
            size: 8
          },
        }
      ]

      var layout1 = {
        title: { text: selectedOptionData[1].Style_family + ': ' + selectedOptionData[1].Style },

        polar: {
          radialaxis: {
            visible: true,
            range: [0, 100],
            automargin: true
          }
        }
      }

      Plotly.newPlot("plot1", chartdata1, layout1);

      var chartdata2 = [
        {
          type: "scatterpolar",
          mode: "lines+markers",
          fill: 'toself',
          opacity: 0.7,
          r: [selectedOptionData[2].DataAScaled, selectedOptionData[2].DataBScaled, selectedOptionData[2].DataCScaled, selectedOptionData[2].DataDScaled, selectedOptionData[2].DataEScaled, selectedOptionData[2].DataFScaled, selectedOptionData[2].DataGScaled, selectedOptionData[2].DataHScaled, selectedOptionData[2].DataAScaled],
          theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
          name: "Maximum",
          line: {
            color: "darkgoldenrod"
          },
          marker: {
            color: "darkgoldenrod",
            symbol: "square",
            size: 8
          }
        },
        {
          type: "scatterpolar",
          mode: "lines+markers",
          fill: 'toself',
          opacity: 0.7,
          r: [selectedOptionData[2].DataaScaled, selectedOptionData[2].DatabScaled, selectedOptionData[2].DatacScaled, selectedOptionData[2].DatadScaled, selectedOptionData[2].DataeScaled, selectedOptionData[2].DatafScaled, selectedOptionData[2].DatagScaled, selectedOptionData[2].DatahScaled, selectedOptionData[2].DataaScaled],
          theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
          name: "Minimum",
          labels: false,
          line: {
            color: "saddlebrown"
          },
          marker: {
            color: "saddlebrown",
            symbol: "square",
            size: 8
          },
        }
      ]

      var layout2 = {
        title: { text: selectedOptionData[2].Style_family + ': ' + selectedOptionData[2].Style },
        showlegend: true,
        polar: {
          radialaxis: {
            visible: true,
            range: [0, 100],
            automargin: true
          }
        }
      }

      Plotly.newPlot("plot2", chartdata2, layout2);

      var chartdata3 = [
        {
          type: "scatterpolar",
          mode: "lines+markers",
          fill: 'toself',
          opacity: 0.7,
          r: [selectedOptionData[3].DataAScaled, selectedOptionData[3].DataBScaled, selectedOptionData[3].DataCScaled, selectedOptionData[3].DataDScaled, selectedOptionData[3].DataEScaled, selectedOptionData[3].DataFScaled, selectedOptionData[3].DataGScaled, selectedOptionData[3].DataHScaled, selectedOptionData[3].DataAScaled],
          theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
          name: "Maximum",
          line: {
            color: "darkgoldenrod"
          },
          marker: {
            color: "darkgoldenrod",
            symbol: "square",
            size: 8
          }
        },
        {
          type: "scatterpolar",
          mode: "lines+markers",
          fill: 'toself',
          opacity: 0.7,
          r: [selectedOptionData[3].DataaScaled, selectedOptionData[3].DatabScaled, selectedOptionData[3].DatacScaled, selectedOptionData[3].DatadScaled, selectedOptionData[3].DataeScaled, selectedOptionData[3].DatafScaled, selectedOptionData[3].DatagScaled, selectedOptionData[3].DatahScaled, selectedOptionData[3].DataaScaled],
          theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
          name: "Minimum",
          labels: false,
          line: {
            color: "saddlebrown"
          },
          marker: {
            color: "saddlebrown",
            symbol: "square",
            size: 8
          },
        }
      ]

      var layout3 = {
        title: { text: selectedOptionData[3].Style_family + ': ' + selectedOptionData[3].Style },
        showlegend: true,
        polar: {
          radialaxis: {
            visible: true,
            range: [0, 100],
            automargin: true
          }
        }
      }

      Plotly.newPlot("plot3", chartdata3, layout3);

      var chartdata4 = [
        {
          type: "scatterpolar",
          mode: "lines+markers",
          fill: 'toself',
          opacity: 0.7,
          r: [selectedOptionData[4].DataAScaled, selectedOptionData[4].DataBScaled, selectedOptionData[4].DataCScaled, selectedOptionData[4].DataDScaled, selectedOptionData[4].DataEScaled, selectedOptionData[4].DataFScaled, selectedOptionData[4].DataGScaled, selectedOptionData[4].DataHScaled, selectedOptionData[4].DataAScaled],
          theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
          name: "Maximum",
          line: {
            color: "darkgoldenrod"
          },
          marker: {
            color: "darkgoldenrod",
            symbol: "square",
            size: 8
          }
        },
        {
          type: "scatterpolar",
          mode: "lines+markers",
          fill: 'toself',
          opacity: 0.7,
          r: [selectedOptionData[4].DataaScaled, selectedOptionData[4].DatabScaled, selectedOptionData[4].DatacScaled, selectedOptionData[4].DatadScaled, selectedOptionData[4].DataeScaled, selectedOptionData[4].DatafScaled, selectedOptionData[4].DatagScaled, selectedOptionData[4].DatahScaled, selectedOptionData[4].DataaScaled],
          theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
          name: "Minimum",
          labels: false,
          line: {
            color: "saddlebrown"
          },
          marker: {
            color: "saddlebrown",
            symbol: "square",
            size: 8
          },
        }
      ]

      var layout4 = {
        title: { text: selectedOptionData[4].Style_family + ': ' + selectedOptionData[4].Style },
        showlegend: true,
        polar: {
          radialaxis: {
            visible: true,
            range: [0, 100],
            automargin: true
          }
        }
      }

      Plotly.newPlot("plot4", chartdata4, layout4);

      var chartdata5 = [
        {
          type: "scatterpolar",
          mode: "lines+markers",
          fill: 'toself',
          opacity: 0.7,
          r: [selectedOptionData[5].DataAScaled, selectedOptionData[5].DataBScaled, selectedOptionData[5].DataCScaled, selectedOptionData[5].DataDScaled, selectedOptionData[5].DataEScaled, selectedOptionData[5].DataFScaled, selectedOptionData[5].DataGScaled, selectedOptionData[5].DataHScaled, selectedOptionData[5].DataAScaled],
          theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
          name: "Maximum",
          line: {
            color: "darkgoldenrod"
          },
          marker: {
            color: "darkgoldenrod",
            symbol: "square",
            size: 8
          }
        },
        {
          type: "scatterpolar",
          mode: "lines+markers",
          fill: 'toself',
          opacity: 0.7,
          r: [selectedOptionData[5].DataaScaled, selectedOptionData[5].DatabScaled, selectedOptionData[5].DatacScaled, selectedOptionData[5].DatadScaled, selectedOptionData[5].DataeScaled, selectedOptionData[5].DatafScaled, selectedOptionData[5].DatagScaled, selectedOptionData[5].DatahScaled, selectedOptionData[5].DataaScaled],
          theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
          name: "Minimum",
          labels: false,
          line: {
            color: "saddlebrown"
          },
          marker: {
            color: "saddlebrown",
            symbol: "square",
            size: 8
          },
        }
      ]

      var layout5 = {
        title: { text: selectedOptionData[5].Style_family + ': ' + selectedOptionData[5].Style },
        showlegend: true,
        polar: {
          radialaxis: {
            visible: true,
            range: [0, 100],
            automargin: true
          }
        }
      }

      Plotly.newPlot("plot5", chartdata5, layout5);

      var chartdata6 = [
        {
          type: "scatterpolar",
          mode: "lines+markers",
          fill: 'toself',
          opacity: 0.7,
          r: [selectedOptionData[6].DataAScaled, selectedOptionData[6].DataBScaled, selectedOptionData[6].DataCScaled, selectedOptionData[6].DataDScaled, selectedOptionData[6].DataEScaled, selectedOptionData[6].DataFScaled, selectedOptionData[6].DataGScaled, selectedOptionData[6].DataHScaled, selectedOptionData[6].DataAScaled],
          theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
          name: "Maximum",
          line: {
            color: "darkgoldenrod"
          },
          marker: {
            color: "darkgoldenrod",
            symbol: "square",
            size: 8
          }
        },
        {
          type: "scatterpolar",
          mode: "lines+markers",
          fill: 'toself',
          opacity: 0.7,
          r: [selectedOptionData[6].DataaScaled, selectedOptionData[6].DatabScaled, selectedOptionData[6].DatacScaled, selectedOptionData[6].DatadScaled, selectedOptionData[6].DataeScaled, selectedOptionData[6].DatafScaled, selectedOptionData[6].DatagScaled, selectedOptionData[6].DatahScaled, selectedOptionData[6].DataaScaled],
          theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
          name: "Minimum",
          labels: false,
          line: {
            color: "saddlebrown"
          },
          marker: {
            color: "saddlebrown",
            symbol: "square",
            size: 8
          },
        }
      ]

      var layout6 = {
        title: { text: selectedOptionData[6].Style_family + ': ' + selectedOptionData[6].Style },
        showlegend: true,
        polar: {
          radialaxis: {
            visible: true,
            range: [0, 100],
            automargin: true
          }
        }
      }

      Plotly.newPlot("plot6", chartdata6, layout6);

      var chartdata7 = [
        {
          type: "scatterpolar",
          mode: "lines+markers",
          fill: 'toself',
          opacity: 0.7,
          r: [selectedOptionData[7].DataAScaled, selectedOptionData[7].DataBScaled, selectedOptionData[7].DataCScaled, selectedOptionData[7].DataDScaled, selectedOptionData[7].DataEScaled, selectedOptionData[7].DataFScaled, selectedOptionData[7].DataGScaled, selectedOptionData[7].DataHScaled, selectedOptionData[7].DataAScaled],
          theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
          name: "Maximum",
          line: {
            color: "darkgoldenrod"
          },
          marker: {
            color: "darkgoldenrod",
            symbol: "square",
            size: 8
          }
        },
        {
          type: "scatterpolar",
          mode: "lines+markers",
          fill: 'toself',
          opacity: 0.7,
          r: [selectedOptionData[7].DataaScaled, selectedOptionData[7].DatabScaled, selectedOptionData[7].DatacScaled, selectedOptionData[7].DatadScaled, selectedOptionData[7].DataeScaled, selectedOptionData[7].DatafScaled, selectedOptionData[7].DatagScaled, selectedOptionData[7].DatahScaled, selectedOptionData[7].DataaScaled],
          theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
          name: "Minimum",
          labels: false,
          line: {
            color: "saddlebrown"
          },
          marker: {
            color: "saddlebrown",
            symbol: "square",
            size: 8
          },
        }
      ]

      var layout7 = {
        title: { text: selectedOptionData[7].Style_family + ': ' + selectedOptionData[7].Style },
        showlegend: true,
        polar: {
          radialaxis: {
            visible: true,
            range: [0, 100],
            automargin: true
          }
        }
      }

      Plotly.newPlot("plot7", chartdata7, layout7);

      var chartdata8 = [
        {
          type: "scatterpolar",
          mode: "lines+markers",
          fill: 'toself',
          opacity: 0.7,
          r: [selectedOptionData[8].DataAScaled, selectedOptionData[8].DataBScaled, selectedOptionData[8].DataCScaled, selectedOptionData[8].DataDScaled, selectedOptionData[8].DataEScaled, selectedOptionData[8].DataFScaled, selectedOptionData[8].DataGScaled, selectedOptionData[8].DataHScaled, selectedOptionData[8].DataAScaled],
          theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
          name: "Maximum",
          line: {
            color: "darkgoldenrod"
          },
          marker: {
            color: "darkgoldenrod",
            symbol: "square",
            size: 8
          }
        },
        {
          type: "scatterpolar",
          mode: "lines+markers",
          fill: 'toself',
          opacity: 0.7,
          r: [selectedOptionData[8].DataaScaled, selectedOptionData[8].DatabScaled, selectedOptionData[8].DatacScaled, selectedOptionData[8].DatadScaled, selectedOptionData[8].DataeScaled, selectedOptionData[8].DatafScaled, selectedOptionData[8].DatagScaled, selectedOptionData[8].DatahScaled, selectedOptionData[8].DataaScaled],
          theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
          name: "Minimum",
          labels: false,
          line: {
            color: "saddlebrown"
          },
          marker: {
            color: "saddlebrown",
            symbol: "square",
            size: 8
          },
        }
      ]

      var layout8 = {
        title: { text: selectedOptionData[8].Style_family + ': ' + selectedOptionData[8].Style },
        showlegend: true,
        polar: {
          radialaxis: {
            visible: true,
            range: [0, 100],
            automargin: true
          }
        }
      }

      Plotly.newPlot("plot8", chartdata8, layout8);

      var chartdata9 = [
        {
          type: "scatterpolar",
          mode: "lines+markers",
          fill: 'toself',
          opacity: 0.7,
          r: [selectedOptionData[9].DataAScaled, selectedOptionData[9].DataBScaled, selectedOptionData[9].DataCScaled, selectedOptionData[9].DataDScaled, selectedOptionData[9].DataEScaled, selectedOptionData[9].DataFScaled, selectedOptionData[9].DataGScaled, selectedOptionData[9].DataHScaled, selectedOptionData[9].DataAScaled],
          theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
          name: "Maximum",
          line: {
            color: "darkgoldenrod"
          },
          marker: {
            color: "darkgoldenrod",
            symbol: "square",
            size: 8
          }
        },
        {
          type: "scatterpolar",
          mode: "lines+markers",
          fill: 'toself',
          opacity: 0.7,
          r: [selectedOptionData[9].DataaScaled, selectedOptionData[9].DatabScaled, selectedOptionData[9].DatacScaled, selectedOptionData[9].DatadScaled, selectedOptionData[9].DataeScaled, selectedOptionData[9].DatafScaled, selectedOptionData[9].DatagScaled, selectedOptionData[9].DatahScaled, selectedOptionData[9].DataaScaled],
          theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
          name: "Minimum",
          labels: false,
          line: {
            color: "saddlebrown"
          },
          marker: {
            color: "saddlebrown",
            symbol: "square",
            size: 8
          },
        }
      ]

      var layout9 = {
        title: { text: selectedOptionData[9].Style_family + ': ' + selectedOptionData[9].Style },
        showlegend: true,
        polar: {
          radialaxis: {
            visible: true,
            range: [0, 100],
            automargin: true
          }
        }
      }

      Plotly.newPlot("plot9", chartdata9, layout9);

      // }) 

      var chartdata10 = [
        {
          type: "scatterpolar",
          mode: "lines+markers",
          fill: 'toself',
          opacity: 0.7,
          r: [selectedOptionData[10].DataAScaled, selectedOptionData[10].DataBScaled, selectedOptionData[10].DataCScaled, selectedOptionData[10].DataDScaled, selectedOptionData[10].DataEScaled, selectedOptionData[10].DataFScaled, selectedOptionData[10].DataGScaled, selectedOptionData[10].DataHScaled, selectedOptionData[10].DataAScaled],
          theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
          name: "Maximum",
          line: {
            color: "darkgoldenrod"
          },
          marker: {
            color: "darkgoldenrod",
            symbol: "square",
            size: 8
          }
        },
        {
          type: "scatterpolar",
          mode: "lines+markers",
          fill: 'toself',
          opacity: 0.7,
          r: [selectedOptionData[10].DataaScaled, selectedOptionData[10].DatabScaled, selectedOptionData[10].DatacScaled, selectedOptionData[10].DatadScaled, selectedOptionData[10].DataeScaled, selectedOptionData[10].DatafScaled, selectedOptionData[10].DatagScaled, selectedOptionData[10].DatahScaled, selectedOptionData[10].DataaScaled],
          theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
          name: "Minimum",
          labels: false,
          line: {
            color: "saddlebrown"
          },
          marker: {
            color: "saddlebrown",
            symbol: "square",
            size: 8
          },
        }
      ]

      var layout10 = {
        title: { text: selectedOptionData[10].Style_family + ': ' + selectedOptionData[10].Style },
        showlegend: true,
        polar: {
          radialaxis: {
            visible: true,
            range: [0, 100],
            automargin: true
          }
        }
      }

      Plotly.newPlot("plot10", chartdata10, layout10);


      var chartdata11 = [
        {
          type: "scatterpolar",
          mode: "lines+markers",
          fill: 'toself',
          opacity: 0.7,
          r: [selectedOptionData[11].DataAScaled, selectedOptionData[11].DataBScaled, selectedOptionData[11].DataCScaled, selectedOptionData[11].DataDScaled, selectedOptionData[11].DataEScaled, selectedOptionData[11].DataFScaled, selectedOptionData[11].DataGScaled, selectedOptionData[11].DataHScaled, selectedOptionData[11].DataAScaled],
          theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
          name: "Maximum",
          line: {
            color: "darkgoldenrodb"
          },
          marker: {
            color: "darkgoldenrod",
            symbol: "square",
            size: 8
          }
        },
        {
          type: "scatterpolar",
          mode: "lines+markers",
          fill: 'toself',
          opacity: 0.7,
          r: [selectedOptionData[11].DataaScaled, selectedOptionData[11].DatabScaled, selectedOptionData[11].DatacScaled, selectedOptionData[11].DatadScaled, selectedOptionData[11].DataeScaled, selectedOptionData[11].DatafScaled, selectedOptionData[11].DatagScaled, selectedOptionData[11].DatahScaled, selectedOptionData[11].DataaScaled],
          theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
          name: "Minimum",
          labels: false,
          line: {
            color: "saddlebrown"
          },
          marker: {
            color: "saddlebrown",
            symbol: "square",
            size: 8
          },
        }
      ]

      var layout11 = {
        title: { text: selectedOptionData[11].Style_family + ': ' + selectedOptionData[11].Style },
        showlegend: true,
        polar: {
          radialaxis: {
            visible: true,
            range: [0, 100],
            automargin: true
          }
        }
      }

      Plotly.newPlot("plot11", chartdata11, layout11);

      var chartdata12 = [
        {
          type: "scatterpolar",
          mode: "lines+markers",
          fill: 'toself',
          opacity: 0.7,
          r: [selectedOptionData[12].DataAScaled, selectedOptionData[12].DataBScaled, selectedOptionData[12].DataCScaled, selectedOptionData[12].DataDScaled, selectedOptionData[12].DataEScaled, selectedOptionData[12].DataFScaled, selectedOptionData[12].DataGScaled, selectedOptionData[12].DataHScaled, selectedOptionData[12].DataAScaled],
          theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
          name: "Maximum",
          line: {
            color: "darkgoldenrod"
          },
          marker: {
            color: "darkgoldenrod",
            symbol: "square",
            size: 8
          }
        },
        {
          type: "scatterpolar",
          mode: "lines+markers",
          fill: 'toself',
          opacity: 0.7,
          r: [selectedOptionData[12].DataaScaled, selectedOptionData[12].DatabScaled, selectedOptionData[12].DatacScaled, selectedOptionData[12].DatadScaled, selectedOptionData[12].DataeScaled, selectedOptionData[12].DatafScaled, selectedOptionData[12].DatagScaled, selectedOptionData[12].DatahScaled, selectedOptionData[12].DataaScaled],
          theta: ['<b>OG</b><br> (max: ' + maxDataA + ')', '<b>FG</b><br> (max: ' + maxDataB + ')', '<b>ABV</b><br> (max: ' + maxDataC + ')', '<b>IBU</b><br> (max: ' + maxDataD + ')', '<b>BU:GU</b><br> (max: ' + maxDataE + ')', '<b>SRM</b><br> (max:' + maxDataF + ')', '<b>CO<sub>2</sub> (v/v)</b><br> (max:' + maxDataG + ')', '<b>AA</b><br> (max:' + maxDataH + ')', '<b>OG</b><br> (max: ' + maxDataA + ')'],
          name: "Minimum",
          labels: false,
          line: {
            color: "saddlebrown"
          },
          marker: {
            color: "saddlebrown",
            symbol: "square",
            size: 8
          },
        }
      ]

      var layout12 = {
        title: { text: selectedOptionData[12].Style_family + ': ' + selectedOptionData[12].Style },
        showlegend: true,
        polar: {
          radialaxis: {
            visible: true,
            range: [0, 100],
            automargin: true
          }
        }
      }

      Plotly.newPlot("plot12", chartdata12, layout12);


    };
  })

}).catch(function (error) {
  console.log(error);
});
