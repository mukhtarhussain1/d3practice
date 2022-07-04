import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import "./ResponsiveBarChart.css";

const sample = [
  {
    Name: "Lahore",
    Value: "30",
  },
  {
    Name: "Karachi",
    Value: "55",
  },
  {
    Name: "Multan",
    Value: "25",
  },
  {
    Name: "Islamabad",
    Value: "75",
  },
  {
    Name: "Faislabad",
    Value: "10",
  },
  {
    Name: "Sialkot",
    Value: "40",
  },
];

const ResponsiveBarChart = (props) => {
  const chart = useRef();

  useEffect(() => {
    const margin = { top: 50, right: 30, bottom: 30, left: 60 };

    const colors = d3.schemeCategory10;

    const chartwidth =
      parseInt(d3.select("#d3demo").style("width")) -
      margin.left -
      margin.right;
    const chartheight =
      parseInt(d3.select("#d3demo").style("height")) -
      margin.top -
      margin.bottom;

    const svg = d3
      .select(chart.current)
      .attr("width", chartwidth + margin.left + margin.right)
      .attr("height", chartheight + margin.top + margin.bottom);

    const x = d3
      .scaleBand()
      .domain(d3.range(props.data.length))
      .range([margin.left, chartwidth - margin.right])
      .padding(0.2);

    svg
      .append("g")
      .attr("transform", "translate(0, " + chartheight + ")")
      .call(
        d3
          .axisBottom(x)
          .tickFormat((i) => props.data[i].Name)
          .tickSizeOuter(0)
      );

    // const xtop = d3.scaleBand()
    // .domain(d3.range(sample.length))
    // .range([margin.left, chartwidth - margin.right])
    // .padding(0.1)

    // svg
    //   .append("g")
    //   .attr("transform", "translate(0, " + margin.top + ")")
    //   .call(
    //     d3
    //       .axisTop(x)
    //       .tickFormat((i) => props.data[i].Name)
    //       .tickSizeOuter(0)
    //   );

    const max = d3.max(props.data, function (d) {
      return d.Value;
    });

    const y = d3
      .scaleLinear()
      .domain([0, max])
      .range([chartheight, margin.top]);

    svg
      .append("g")
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(d3.axisLeft(y));

    // svg
    //   .append("g")
    //   .attr("transform", "translate(" + chartwidth + ",0)")
    //   .call(d3.axisRight(y));

    svg
      .append("g")
      .selectAll("rect")
      .data(props.data)
      .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", (d) => y(d.Value))
      .attr("height", (d) => y(0) - y(d.Value))
      .attr("width", x.bandwidth())
      .attr("fill", function (d, i) {
        return colors[i];
      });

    svg
      .append("g")
      .selectAll("text")
      .data(props.data)
      .enter()
      .append("text")
      .text(function (d) {
        return d.Value;
      })
      .attr("x", (d, i) => x(i) + x.bandwidth() / 2)
      .attr("y", (d) => y(d.Value) - 5)
      .attr("font-family", "sans-serif")
      .attr("font-size", "12px")
      .attr("text-anchor", "middle");

    svg
      .append("g")
      .selectAll("text")
      .data(props.data)
      .enter()
      .append("text")
      .text("Names")
      .attr("x", function (d) {
        return chartwidth - 300;
      })
      .attr("y", function (d) {
        return chartheight + 50;
      })
      .style("fill", "black")
      .attr("font-family", "sans-serif")
      .attr("font-size", "15px")
    //   .attr("text-anchor", "end");
  });

  return (
    <div id="d3demo">
      <svg ref={chart}></svg>
    </div>
  );
};

export default ResponsiveBarChart;
