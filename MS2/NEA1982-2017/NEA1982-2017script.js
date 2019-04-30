// NEA AUDIENCE DATA 1982-2017 art museum visits
// one line to show trend of museum audience 1982 - 2017

// //////NEA data art museum audience years 1982, 1992, 2002, 2008, 2012, 2017 

d3.json("SPPA_NEA_2017USt_2008Perc1982-2017edonlymusaud.json").then((data) => {
  console.log(data);
  svgPlot(data);
});



// var g = svg.append('g') ////then append to global g - so now the div svg is appended
//   ///note for multiple svgs you need a new g variable so you'd have g1, g2, etc
//   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
// // console.log(width);  ////the above transform gives the space around the chart


let svgPlot = (data) => { ////need to call a different svgPlot 
  console.log(data);

  var margin = { top: 100, right: 50, bottom: 50, left: 100 };
  var width = 1100 - margin.left - margin.right; // Use the window's width 
  var height = 600 - margin.top - margin.bottom; // Use the window's height


  var svg = d3.select('#svg1') ////here select named svg and put it into the var svg
    .append('svg') ////then append an svg 
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .style("background", "#877c74");



  var g = svg.append('g') ////then append to global g - so now the div svg is appended
    ///note for multiple svgs you need a new g variable so you'd have g1, g2, etc
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  // console.log(width);  ////the above transform gives the space around the chart


  let heading = g.append('g') //// append text to global
    .append('text')
    .text('National Art Museum Audiences, by Year, 1982-2017')
    .attr('x', 20)
    .attr('y', -margin.top / 1.8)
    .attr('font-size', '24px');

  let subhead1 = g.append('g') /////to site text you can always do negative values to be outside the chart
    .append('text')
    .text('NEA data: percent of US adult population who visited an art museum that year')
    .attr('x', 20)
    .attr('y', -margin.top / 3.8)
    .attr('font-size', '16.1px');


  let ytext1 = g.append('g')
    .append('text')
    .text('percent')
    .attr('x', -340)
    .attr('y', -37)
    .attr("transform", "rotate(-90)")
    .attr('font-size', '18px'); // or can do .25in or %

  let ytext2 = g.append('g')
    .append('text')
    .text('percent')
    .attr('x', -340)
    .attr('y', 230)
    .attr("transform", `translate(${height-margin.left/3}, 0)rotate(-90)`)
    .attr('font-size', '18px') // or can do .25in or %


  /////////=====2012-2017 dataset
  // console.log(data[0].percent) /////this gets the numbers

  // let dataselect2 = (data[0].percent)
  // console.log(dataselect2)

  // // let dataselect =  data.map((e, i) => {    
  // //                 // return {percent: e.key, percent: i[0]}; ///values are undefined
  // //                 return data.percent
  // //                 });
  // // console.log(dataselect)


  // // example
  // var dataselect = data.map(function (cent) {
  //   return  cent.percent
  //             })
  // console.log(dataselect)           
  ////////======


  // //Function for converting CSV values from strings to Dates and numbers
  // 			var rowConverter = function(d) {
  // 				return {
  // 					date: new Date(+d.year, (+d.month - 1)),  //Make a new Date object for each year + month
  // 					average: parseFloat(d.average)  //Convert from string to float
  // 				};
  // 			}

  function getSmoothInterpolation() {
    var interpolate = d3.scale.linear()
      .domain([0, 1])
      .range([1, indexSeries.length + 1]);

    return function (t) {
      var flooredX = Math.floor(interpolate(t));
      var interpolatedLine = indexSeries.slice(0, flooredX);

      if (flooredX > 0 && flooredX < indexSeries.length) {
        var weight = interpolate(t) - flooredX;
        var weightedLineAverage = indexSeries[flooredX].y * weight + indexSeries[flooredX - 1].y * (1 - weight);
        interpolatedLine.push({ "x": interpolate(t) - 1, "y": weightedLineAverage });
      }

      return lineFunction(interpolatedLine);
    }
  }
  // // The number of datapoints for line
  var n = 6;
  //////

  var xScale = d3.scaleLinear()
    .domain([0, n - 1])
    .range([0, 600]);


  var yScale = d3.scaleLinear()
    .domain([0, (26.7) + 73.3]) /////add height to axis
    // .range([0, height]);
    .range([height, 0]);

  // d3's line generator
  var line = d3.line()
    .x(function (d, i) { // to use “i” in xScale 
      // console.log(xScale(i))
      return xScale(i);
    })
    .y(function (d, i) {
      // console.log("y:", i, yScale(d));
      return yScale(d);
      // 		return yScale(d.y);
    })


  //  to fill below line   
  //  var area = d3.area() 
  //         .x(function (d, i) {
  //             console.log(xScale(i)) 
  //             return xScale(i);
  //         }).y1(function (d, i) {
  //             return yScale(d);
  //         }).y0(yScale(0));

  // fill above line
  var area = d3.area()
    .x(function (d, i) {
      console.log(xScale(i))
      return xScale(i);
    }).y1(function (d, i) {
      return yScale(d);
    }).y0(yScale(height - 350))


  // console.log(line) 
  console.log(data)
  console.log(data[0])

  // /////draw line for audience
  ///unrolling line http://big-elephants.com/2014-06/unrolling-line-charts-d3js/
  ///http://jsfiddle.net/nrabinowitz/XytnD/

  let line1 = g.append("g")
    .append("path")
    .datum(data)
    .attr("class", "line") // Assign a class for styling
    .attr('d', function (d, i) {
      console.log(d)
      return line(d) ////\\here add function in the line generator 
    })
    .attr('fill', 'none')
    // 	.attr('stroke', '#9179e8')
    .style("opacity", 1)
    .style('stroke', "red")
    .attr('stroke-width', 0.5)
    .transition()
    .duration(2000)
    .attrTween('d', pathTween)

  function pathTween() {
    var interpolate = d3.scaleQuantile()
      .domain([0, 1])
      .range(d3.range(1, data.length + 1));
    return function (t) {
      return line(data.slice(0, interpolate(t)));
    }
  }

  // clip to cut off extra color 
  // http://bl.ocks.org/darrenjaworski/5392352
  //  g.append("clipPath")
  //             .data(data)
  //             .attr("id", "clip-below")
  //         .append("path")
  //             .attr("d", area.y0(height))

  //         g.append("clipPath")
  //         .data(data)
  //         .attr("id", "clip-above")
  //         .append("path")
  //         // .attr("d", area.y0(0))
  //         .attr("d", area.y0(0))

  //         g.append("path")
  //         .data(data)
  //         .attr("class", "area above")
  //         .attr("clip-path", "url(#clip-above)")
  //         .attr("d", area.y0(yScale(height-350)))

  //       g.append("path")
  //       .data(data)
  //       .attr("class", "area below")
  //       .attr("clip-path", "url(#clip-below)");


  // let area1 = g.append("path")
  let area1 = g.append("g")
    .append("path")
    .data(data)
    .attr("class", "area")
    .attr("d", area(data))
    .attr('fill', 'purple')
    .attr('opacity', 0.1)


  ////tooltip
  let div = d3.select("g").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0)
    .style("display", "none");

  function mouseover() {
    div.style("display", "inline");
  }


  ////circles on line
  let linedots = g.append("g")
    .selectAll(".dot")
    .data(data)
    .enter().append("circle") // Uses the enter().append() method
    .attr("class", "dot") // Assign a class for styling
    .attr("cx", function (d, i) { return xScale(i) })
    .attr("cy", function (d, i) { return yScale(d) })
    .attr("r", 5)
    .style("fill", "#ba79c5")
    .attr("opacity", 0.6)


  ////larger circles on line for tooltips
  let linedotstr = g.append("g")
    .selectAll(".dot")
    .data(data)
    .enter().append("circle") // Uses the enter().append() method
    .attr("class", "dot") // Assign a class for styling
    .attr("cx", function (d, i) { return xScale(i) })
    .attr("cy", function (d, i) { return yScale(d) })
    .attr("r", 18)
    .attr("opacity", 0)
    .on("mouseover", function (d, i) {
      d3.select(this).style("fill", "pink")
      var xPosition = parseFloat(d3.select(this).attr("cx"))
      var yPosition = parseFloat(d3.select(this).attr("cy"))
      //Update the tooltip position and value
      d3.select("#tooltip")
        .style("left", (xPosition + margin.right * 4) + "px")
        .style("top", (yPosition + margin.right * 3) + "px")
        .select("#value")
        .text(d);
      //Show the tooltip
      d3.select("#tooltip").classed("hidden", false);
    })
    .on("mouseout", function () {
      d3.select(this).style("fill", "green");
      //Hide the tooltip
      d3.select("#tooltip").classed("hidden", true);
    });


  // Call the y axis in a group tag
  let axisLeft = g.append("g") // just append axis to global space
    .attr("class", "yaxis")
    .attr('fill', 'none')
    .attr('stroke', 'grey')
    .attr('stroke-width', 0.3)
    .call(d3.axisLeft(yScale) //call axisLeft to use yScale for axis ticks and scale
      .tickSize(3)
      .ticks(8)
    );

  let axisRight = g.append("g") // just append axis to global space
    .attr("class", "yaxis")
    .attr('fill', 'none')
    .attr('stroke', 'grey')
    .attr('stroke-width', 0.3)
    .attr("transform", `translate(${height+margin.left+margin.right}, 0)`)
    .call(d3.axisRight(yScale) //call axisLeft to use yScale for axis ticks and scale
      .tickSize(3)
      .ticks(8)
    );

  let yaxisTop = g.append("g")
    .attr("class", "xaxis")
    .attr('fill', 'none')
    .attr('stroke', 'grey')
    .attr('stroke-width', 0.3)
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisTop(xScale) ///.above move the axis to place that the chart ends - within the margins
      .tickSize(3)
      .ticks("")
    );

  // add the X gridlines
  let gridx = g.append("g")
    .attr("class", "gridx")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisTop(xScale)
      .tickSize(height)
      .ticks("6")
      .tickFormat("")
    )

  // add the Y gridlines
  let gridy = g.append("g")
    .attr("class", "gridy")
    .call(d3.axisRight(yScale)
      .tickSize(height + margin.left + margin.right)
      .tickFormat("")
    )

  let datelabels = g.append("g")
    .append("text")
    .attr("transform", "translate(" + (-margin.left / 5) + " ," + (height + margin.top / 2.9) + ")")
    .style("text-anchor", "start")
    .attr('font-size', '16px')
    .text("1982...................1992...................2002...................2008...................2012...................2017");

};
