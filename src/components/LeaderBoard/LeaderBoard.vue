<template>
  <div class="leader-board">
    <v-row>
      <v-col>
        <p class="page-title ml-3">Leaderboards</p>
        <v-row class="ml-13 mr-3 mt-5">
          <v-col class="mr-10" cols="12" sm="5">
            <v-card color="#3B3D4F">
              <v-row>
                <v-col class="pa-4">
                  <p class="card-title">Release Dynamics</p>
                  <apexchart
                    height="380"
                    type="bar"
                    class="apex-charts"
                    :series="basicColumChart.series"
                    :options="basicColumChart.chartOptions"
                  ></apexchart>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card color="#3B3D4F">
              <v-row>
                <v-col class="pa-4">
                  <p class="card-title">Top Platforms</p>
                  <apexchart
                    class="apex-charts"
                    height="380"
                    type="bar"
                    :series="basicBarChart.series"
                    :options="basicBarChart.chartOptions"
                  ></apexchart>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="ml-13 mr-3 mt-5">
          <v-col class="mr-10" cols="12" sm="5">
            <v-card color="#3B3D4F">
              <v-row>
                <v-col class="pa-4">
                  <p class="card-title">Top Authors</p>
                  <apexchart
                    class="apex-charts"
                    height="380"
                    type="bar"
                    :series="topAuthorsChart.series"
                    :options="topAuthorsChart.chartOptions"
                  ></apexchart>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card color="#3B3D4F">
              <v-row>
                <v-col class="pa-4">
                  <p class="card-title">Top 50 Author Statistics</p>
                  <v-data-table
                    v-model:items-per-page="itemsPerPage"
                    :headers="headers"
                    :items="desserts"
                    item-value="name"
                    class="elevation-1 table"
                  ></v-data-table>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="ml-13 mr-3 mt-5">
          <v-col class="mr-10" cols="12" sm="5">
            <v-card color="#3B3D4F">
              <v-row>
                <v-col class="pa-4">
                  <p class="card-title">Techniques, Tools & Actors</p>
                  <apexchart
                    class="apex-charts my-chart"
                    height="380"
                    type="line"
                    :series="lineColumAreaChart.series"
                    :options="lineColumAreaChart.chartOptions"
                  ></apexchart>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card color="#3B3D4F">
              <v-row>
                <v-col class="pa-4">
                  <p class="card-title">All Content Linked With MITRE ATT&CK</p>
                  <apexchart
                    class="apex-charts mt-16"
                    height="320"
                    type="donut"
                    :series="gradientDonutChart.series"
                    :options="gradientDonutChart.chartOptions"
                  ></apexchart>

                  <div class="d-flex align-center justify-center">
                    <span class="dot-brown ml-1"></span>
                    <span class="text-chart-white ml-1"> 92% </span>
                    <span class="text-chart-grey ml-1">Content Tagged</span>
                    <span class="dot-grey ml-1"></span>
                    <span class="text-chart-white ml-1"> 8% </span>
                    <span class="text-chart-grey ml-1">Content Untagged</span>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { VDataTable } from "vuetify/labs/VDataTable";

export default {
  data() {
    return {
      basicBarChart: {
        chartOptions: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
          dataLabels: {
            enabled: false,
          },
          colors: ["#1abc9c", "#9fa1a8"],
          xaxis: {
            categories: [
              "South Korea",
              "Canada",
              "United Kingdom",
              "Netherlands",
              "Italy",
              "France",
              "Japan",
              "United States",
              "China",
              "Germany",
            ],
            labels: {
              style: {
                colors: "#9fa1a8", // Change the color to your desired value
              },
            },
          },
          yaxis: {
            title: {
              text: "$ (thousands)",
            },
            labels: {
              style: {
                colors: [
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                ], // Change the color values to your desired colors
              },
            },
          },
          states: {
            hover: {
              filter: "none",
            },
          },
          grid: {
            borderColor: "#f1f3fa",
          },
        },
        series: [
          {
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
          },
        ],
      },
      basicColumChart: {
        chartOptions: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
              endingShape: "rounded",
              columnWidth: "55%",
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
          },
          colors: ["#1abc9c"],
          xaxis: {
            categories: [
              "2015",
              "2016",
              "2017",
              "2018",
              "2019",
              "2020",
              "2021",
              "2022",
              "2023",
            ],
            labels: {
              style: {
                colors: [
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                ], // Change the color values to your desired colors
              },
            },
          },
          legend: {
            offsetY: -10,
          },
          yaxis: {
            title: {
              text: "$ (thousands)",
            },
            labels: {
              style: {
                colors: [
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                ], // Change the color values to your desired colors
              },
            },
          },
          fill: {
            opacity: 1,
          },
          grid: {
            row: {
              colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
              opacity: 0.2,
            },
            borderColor: "#37394A",
          },
          tooltip: {
            y: {
              formatter(val) {
                return val;
              },
            },
          },
        },
        series: [
          {
            name: "",
            data: [5, 158, 255, 853, 1849, 2731, 5513, 2438],
          },
        ],
      },
      topAuthorsChart: {
        chartOptions: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
          dataLabels: {
            enabled: false,
          },
          colors: ["#1abc9c", "#9fa1a8"],
          xaxis: {
            categories: [
              "SOC Prime Team",
              "Corelight",
              "Aykut Curses",
              "Nattatorn Chuen",
              "Mustafa Gurkan",
              "Mise",
              "davut selcuk",
              "United States",
              "Sittikorn Sangr",
              "Splunk",
            ],
            labels: {
              style: {
                colors: "#9fa1a8", // Change the color to your desired value
              },
            },
          },
          yaxis: {
            title: {
              text: "$ (thousands)",
            },
            labels: {
              style: {
                colors: [
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                ], // Change the color values to your desired colors
              },
            },
          },
          states: {
            hover: {
              filter: "none",
            },
          },
          grid: {
            borderColor: "",
          },
        },
        series: [
          {
            data: [130, 120, 9, 8, 7, 4, 3, 2, 1],
          },
        ],
      },
      itemsPerPage: 5,
      headers: [
        {
          title: "Name",
          align: "start",
          sortable: false,
          key: "name",
        },
        { title: "DOWNLOADS", align: "end", key: "calories" },
        { title: "VIEWS", align: "end", key: "fat" },
        { title: "DOCS", align: "end", key: "carbs" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22",
        },
      ],
      lineColumAreaChart: {
        chartOptions: {
          chart: {
            padding: {
              right: 0,
              left: 0,
            },
            stacked: false,
            toolbar: {
              show: false,
            },
          },
          stroke: {
            width: [0, 2, 4],
            curve: "smooth",
          },
          plotOptions: {
            bar: {
              columnWidth: "50%",
            },
          },
          colors: ["#1abc9c"],
          fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
              inverseColors: false,
              shade: "light",
              type: "vertical",
              opacityFrom: 0.85,
              opacityTo: 0.55,
              stops: [0, 100, 100, 100],
            },
          },
          labels: [
            "Oct 2018",
            "May 2019",
            "Dec 2019",
            "Jul 2019",
            "Jul 2020",
            "Feb 2020",
            "Sep 2021",
            "Apr 2022",
            "Nov 2022",
            "Jun 2023",
          ],
          markers: {
            size: 0,
          },
          legend: {
            offsetY: -10,
          },
          xaxis: {
            type: "datetime",
            labels: {
              style: {
                colors: "#9fa1a8", // Change the color to your desired value
              },
            },
          },
          yaxis: {
            title: {
              text: "Points",
            },
            labels: {
              style: {
                colors: [
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                  "#9fa1a8",
                ], // Change the color values to your desired colors
              },
            },
          },
          tooltip: {
            shared: true,
            intersect: false,
            y: {
              formatter(y) {
                if (typeof y !== "undefined") {
                  return y.toFixed(0) + " points";
                }
                return y;
              },
            },
          },
          grid: {
            borderColor: "#f1f3fa",
          },
        },
        series: [
          {
            name: "Team B",
            type: "area",
            data: this.generateDayWiseTimeSeries(
              new Date("11 Feb 2017 GMT").getTime(),
              20,
              {
                min: 0,
                max: 800,
              }
            ),
          },
        ],
      },
      gradientDonutChart: {
        series: [92, 8],
        chartOptions: {
          legend: {
            show: false,
            position: "bottom",
            horizontalAlign: "center",
            verticalAlign: "middle",
            floating: false,
            fontSize: "14px",

            offsetX: 0,
            offsetY: -10,
          },
          dataLabels: {
            enabled: false,
          },

          labels: ["Content Tagged", "Content Untagged"],
          colors: ["#1abc9c", "#9fa1a8"],
          responsive: [
            {
              breakpoint: 600,
              options: {
                chart: {
                  height: 240,
                },
                legend: {
                  show: false,
                },
              },
            },
          ],
          fill: {
            type: "gradient",
          },
        },
      },
    };
  },
  methods: {
    generateDayWiseTimeSeries(baseval, count, yrange) {
      let i = 0;
      const series = [];
      while (i < count) {
        const x = baseval;
        const y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
          yrange.min;

        series.push([x, y]);
        baseval += 86400000;
        i++;
      }
      return series;
    },
  },
  components: {
    VDataTable,
  },
};
</script>
<style>
.dot-brown {
  height: 10px;
  width: 10px;
  background-color: #1abc9c;
  border-radius: 50%;
  display: inline-block;
}
.text-chart-grey {
  color: rgb(207, 208, 211);
  font-weight: 600;
  font-size: 14px;
}
.text-chart-white {
  color: rgb(249, 249, 249);
  font-weight: 600;
  font-size: 14px;
}
.dot-grey {
  height: 10px;
  width: 10px;
  background-color: #9fa1a8;
  border-radius: 50%;
  display: inline-block;
}
.my-chart .apexcharts-legend-text {
  fill: red; /* Set your desired text color */
}
.v-data-table .v-table__wrapper > table > thead > tr > th,
.v-data-table .v-table__wrapper > table tbody > tr > th {
  background: #3b3d4f;
  color: #9fa1a8;
}
.v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > td,
.v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > th {
  background: #3b3d4f;
  color: #9fa1a8;
}
.v-data-table .v-table__wrapper > table > thead > tr > td,
.v-data-table .v-table__wrapper > table > thead > tr th,
.v-data-table .v-table__wrapper > table tbody > tr > td,
.v-data-table .v-table__wrapper > table tbody > tr th {
  background: #3b3d4f;
  color: #9fa1a8;
}
.leader-board .table {
  margin-top: 30px;
  background: #3b3d4f;
  color: #fff;
}
.leader-board .left-col {
  margin-right: 170px;
}
.leader-board .page-title {
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 120%;
  color: #fff;
}
.leader-board .card-title {
  text-transform: capitalize;
  font-family: Inter, sans-serif;
  letter-spacing: unset;
  font-size: 14px;
  line-height: 18px;
  color: #f9f9f9;
}
</style>