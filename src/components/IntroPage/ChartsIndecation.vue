<template>
  <div class="charts pa-4">
    <v-row>
      <v-col sm="6" md="3">
        <v-card color="#303344" class="pa-3 card-1">
          <v-row>
            <v-col>
              <p class="card-title">Content Usage</p>
              <v-row align="end" justify="center">
                <apexchart
                  class="apex-charts d-flex algin-end"
                  height="180"
                  type="donut"
                  :series="gradientDonutChart.series"
                  :options="gradientDonutChart.chartOptions"
                ></apexchart>
                <div>
                  <div class="d-flex align-center">
                    <span class="dot-brown ml-1"></span>
                    <span class="text-chart-white ml-1"> 8368 </span>
                    <span class="text-chart-grey ml-1">Premium</span>
                    <span class="dot-grey ml-1"></span>
                    <span class="text-chart-white ml-1"> 3804 </span>
                    <span class="text-chart-grey ml-1">Free</span>
                  </div>
                  <div>
                    <span class="dot-green ml-1"></span>
                    <span class="text-chart-white ml-1"> 243 </span>
                    <span class="text-chart-grey ml-1">In use</span>
                  </div>
                </div>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col sm="6" md="3">
        <v-card color="#303344" class="pa-3 card-1">
          <v-row>
            <v-col>
              <p class="card-title">Usage Trend Compared to Industry</p>
              <v-row align="end" justify="center">
                <apexchart
                  class="apex-charts"
                  height="180"
                  type="line"
                  :series="linewithDataChart.series"
                  :options="linewithDataChart.chartOptions"
                ></apexchart>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col sm="6" md="3">
        <v-card color="#303344" class="pa-3 card-1">
          <v-row>
            <v-col>
              <p class="card-title">Usage Trend Compared to Industry</p>
              <p class="card-details mt-10">140</p>
              <v-row class="d-flex align-end mt-10">
                <v-col>
                  <ProgressPia />
                </v-col>
                <v-col align="start" class="justify-end">
                  <p class="text-grey-12">Industry Avg</p>
                  <p class="text-grey-14">150</p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col sm="6" md="3">
        <p class="card-title">Trending Searches</p>
        <v-row>
          <p class="trend-clip" v-for="(item, index) in trendText" :key="index">
            {{ item }}
          </p>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import ProgressPia from "../Comman/ProgressPia.vue";

export default {
  data() {
    return {
      gradientDonutChart: {
        series: [2, 67, 31],
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
          labels: ["In use", "8368 Premium", "3804 Free"],
          colors: ["#5CEAAD", "#B57D2D", "#9FA1A8"],
          responsive: [
            {
              breakpoint: 600,
              options: {
                chart: {
                  height: 100,
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
      linewithDataChart: {
        chartOptions: {
          chart: {
            zoom: {
              enabled: false,
            },
            toolbar: {
              show: false,
            },
          },
          colors: ["#4fc6e1", "#9fa1a8", "#1abc9c"],
          dataLabels: {
            enabled: false,
          },
          stroke: {
            width: [3, 3],
            curve: "smooth",
          },
          title: {
            text: "",
            align: "left",
            style: {
              fontSize: "0px",
              color: "#666",
            },
          },
          grid: {
            row: {
              colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
              opacity: 1,
            },
            borderColor: "#f1f3fa",
          },
          markers: {
            style: "inverted",
            size: 6,
          },
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
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
                ], // Change the color values to your desired colors
              },
            },
            title: {
              text: "",
            },
            style: {
              color: "green", // Change the color value to your desired color
            },
          },
          yaxis: {
            title: {
              text: "",
            },
          },
          legend: {
            position: "top",
            horizontalAlign: "right",
            floating: false,
            offsetY: -25,
            offsetX: -5,
          },
          responsive: [
            {
              breakpoint: 600,
              options: {
                chart: {
                  toolbar: {
                    show: false,
                  },
                },
                legend: {
                  show: false,
                },
              },
            },
          ],
        },
        series: [
          {
            name: "Industry Max",
            data: [307, 308, 468, 393, 249, 203, 201],
          },
          {
            name: "Industry Avg",
            data: [168, 152, 221, 212, 167, 174, 201],
          },
        ],
      },
      basicRadialBarChart: {
        chartOptions: {
          plotOptions: {
            radialBar: {
              hollow: {
                size: "10%",
              },
            },
          },
          colors: ["#6c757d"],
        },
        series: [70],
      },
      trendText: [
        "cve-2023-38146",
        "blackcat",
        "apt28",
        "uac-0006",
        "uac-0057",
        "tropic trooper",
        "cve-2023-3519",
        "exfiltration",
        "apt-34",
        "ransomware",
      ],
    };
  },
  components: {
    ProgressPia,
  },
};
</script>
<style >
.card-1 {
  max-width: 280px;
  min-height: 250px;
}
.trend-clip {
  color: #cdced1;
  padding: 5px;
  border-radius: 50px;
  border: 1px solid #cdced1;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 8px;
  padding-right: 8px;
  white-space: nowrap;
  font-size: 13px;
  margin: 10px 10px 10px;
}
.trend-clip:hover {
  background: #cdced1;
  color: black;
  cursor: pointer;
}
.card-details {
  font-size: 42px;
  font-weight: 600;
  color: rgb(249, 249, 249);
  line-height: 1.2;
  letter-spacing: -0.00833em;
  margin-top: 20px;
}
.dot-green {
  height: 10px;
  width: 10px;
  background-color: #5ceaad;
  border-radius: 50%;
  display: inline-block;
}
.dot-brown {
  height: 10px;
  width: 10px;
  background-color: #b57d2d;
  border-radius: 50%;
  display: inline-block;
}
.dot-grey {
  height: 10px;
  width: 10px;
  background-color: #9fa1a8;
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
.charts .card-title {
  font-weight: 400;
  color: rgb(249, 249, 249);
  font-size: 14px;
  line-height: 1.4;
}
.text-grey-12 {
  font-weight: 400;
  color: #9fa1a8;
  font-size: 12px;
  line-height: 1.4;
}
.text-grey-14 {
  font-weight: 400;
  color: #9fa1a8;
  font-size: 12px;
  line-height: 1.4;
}
@media screen and (max-width: 768px) {
  .card-1 {
    min-width: 330px;
    min-height: 250px;
    margin-bottom: 20px;
  }
}
</style>