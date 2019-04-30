	////NYC DCLA data select 
			////Boards NYC Museums budgets over $999,999 
			////Race/Ethnicity 

			d3.json("2018artmus_intLeadershiprace.json").then((data) => {
				// console.log(data);
				svgPlot16(data);
			});

		

			let svgPlot16 = (data) => {

		console.log(data);

	let margin = { top: 28, right: 35, bottom: 90, left: 280 };
		
			let width = 680 - margin.left - margin.right; // Use the window's width 
			let height = 250 - margin.top - margin.bottom; // Use the window's height

			// var color_legend = {
			// 	1: ["American Indian or Alaskan Native & Native Hawaiian or Pacific Islander", "purple"],
			// 	2: ["Asian", "pink"],
			// 	3: ["Black or African American", "green"],
			// 	4: ["Hispanic", "orange"],
			// 	5: ["Two Or More Races", "blue"],
			// 	6: ["white, non-Hispanic", "yellow"],
			// 	7: ["Declined to State", "red"]
			// }

			var svg = d3.select('#svg16') ////here select named svg and put it into the var svg
				.append('svg') ////then append an svg 
				.attr('width', width + margin.left + margin.right)
				.attr('height', height + margin.top + margin.bottom);

			var g = svg.append('g')
				////then append to global g - so now the div svg is appended - see further down
				///note for multiple svgs you need a new g variable so you'd have g1, g2, etc
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
			// console.log(width);  ////the above transform gives the space around the chart


///////bar chart
var n = 6;

				// let xScale = d3.scaleLinear()
				// 	.domain([0, n])
				// 	.range([0, width]);

				// let yScale = d3.scaleLinear()
				// 	// .domain([0, d3.max(ethboardallg)]) ////using just the numbers here
				// 	.domain([0, 220]) ///ADDS HEIGHT TO THE AXIS
				// 	.range([0, height]);
					
				// 	/////bars ascending
				// let ySc = d3.scaleLinear()
				// 	.domain([0, 220]) ////using just the numbers here
				// 	.range([height, 0]);
				
				// for horizontal
				
				let xScale = d3.scaleLinear()
					.domain([0, 220+30])
					.range([0, width]);

				let yScale = d3.scaleLinear()
					.domain([0, 220]) 
					.range([height, 0]);
					
					/////bars ascending
				// let ySc = d3.scaleLinear()
				// 	.domain([0, 220]) ////using just the numbers here
				// 	.range([height, 0]);
// var line = d3.line()

		let bars1 = g.selectAll("rect")
					.data(data)
					.enter()
					.append("g")
					.attr('class', 'barthin')
			
				console.log(data);

			bars1.append("rect")
					.attr("fill", "none")
					.attr("stroke", "sienna")
					.attr('x', function(d,i) { 
						return 0; 
					})
					.attr('y', (d, i) => { //// d is shorthand for element in the data and i is index
						return i *33;
						// return line(d.year15) 
					})
					.attr('width', function(d,i) { 
						return xScale(d.year15); 
					})
					.attr('height', 1) ///bar width
						// .on('mouseenter', (d,i,j) => {
						// 	console.log("hover")
					 // 	title2.text(d[i].year15)
					 // 	d3.select(j[i])
					 // 	.style('fill', 'blue')
      //         .style('opacity', '.5');
						// })
	     //   .on('mouseout', (d, i,j) => {
		    //         // console.log(d);
		    //         title2.text((d) => { return ""; });
		    //   	 d3.select(j[i])
					 // 	.style('fill', 'sienna')
					 // 	 .style('opacity', '1');
						// })
	        	
	    bars1.append("circle")
  			.data(data)
			  .attr("r", 8)
			  .attr("fill", "pink")
			  // position the circles right where the path elements end
			  .attr('cy', (d, i) => { //// d is shorthand for element in the data and i is index
						return i * 33;
					})
			  .attr('cx', (d,i) => { 
			  	return  xScale(d.year15); 
			  })
	

			// /////add transparent rect on top so can select bars more easily
				// bars1.append("rect")
				// 	.enter()
				// 	.attr('class', 'barthin')
				// 	.attr('x', margin.right)
				// 	.attr('width', width)
				// 	.attr('height', height*8)
				// 	.attr('fill', 'transparent')
				// 			.on('mouseenter', (d,i,j) => {
				// 			console.log("hover")
				// 	  	title2.text(d.year15)
				// 	  	d3.select(j[i])
				// 	  	.style('fill', 'pink')
    //           .style('opacity', '.5');
				// 		})
	   //     .on('mouseout', (d, i,j) => {
		  //           // console.log(d);
		  //           title2.text((d) => { return "NYC Museum Staff"; });
		  //     	 d3.select(j[i])
				// 	  	.style('fill', 'blue')
				// 	  	 .style('opacity', '1');
				// 		})


				////number each bar 
var numlabel =		bars1.append('text')
					.text((d,i) => {
						return d.year15;
					})
					.attr('y', (d, i) => { //// d is shorthand for element in the data and i is index
						return i * 33;
					})
					.attr('x', (d, i) => { return  xScale(d.year15); })
					// .attr('transform', (d) => { return 'translate(' + 20 + ', ' + (500 - yScale(d) ); });
					.style("font-size", "60%")
					.style('fill', 'white') ///////numbers on top of bars
					.attr("text-anchor", "middle")
				.attr("transform", "translate(30, 4)")
			
					

				//////label text for each bar
	bars1.append('text')
					.data(data)
					.attr("class", "numlabel")
					.attr("text-anchor", "bottom")
					.text((d, i) => {
						return d.raceethnicity;
					})
					.attr("x", -margin.left/2)
					.attr('y', (d, i) => { //// d is shorthand for element in the data and i is index
						return i * 33;
					})
					// .attr("x", margin.left/10)
					.attr("transform", "translate(-20, -12)")
					.style("font-family", "sans-serif")
					.style("font-size", "65%")
					.style('fill', 'dark grey') 
				


// 				////  numbers on the axis 
				let yAxis = g.append('g') // just append axis to global space
					.style('fill', 'none')
					.attr('stroke', 'grey')
					.attr('path', 'red')
					.attr('stroke-width', 0.3)
					.attr("transform", `translate(0, ${-margin.top} )`)
					.call(d3.axisLeft(xScale) //call axisLeft to use yScale for axis ticks and scale
						.tickSize(0)
						.ticks(0)
						.tickFormat("") ////empty no text
					)
					.selectAll("text")
					.attr("transform", "rotate(-65)")
					.attr("text-anchor", "end");

				// let xAxis = g.append("g")
				// 	.attr("class", "y axis")
				// 	.attr('fill', 'none')
				// 	.attr('stroke', 'grey')
				// 	.attr('stroke-width', 0.3)
				// 	.attr("transform", `translate(0, ${height+margin.bottom/0.8 } )`)
				// 	.call(d3.axisBottom(xScale)
				// 		////above move the axis to place that the chart ends - within the margins
				// 		.tickSize(3)
				// 		.ticks(5)
				// 	);
	

			let heading = g.append('text')
					.text('National Art Museum Staff Survey')
					.attr('x', -margin.left/2)
					.attr('y', height+margin.top+margin.top/0.5)
					.attr('font-size', '100%');

			let title = g.append('text')
					.text('2015')
					.attr('x', -margin.left)
					.attr('y', height+margin.top+margin.top/0.5)
					.attr('font-size', '100%');
					
			let heading2 = g.append('text')
					.text('excluding white,')
					.attr('x', -margin.left)
					.attr('y', height+margin.top/0.7)
					.attr('font-size', '70%');

			let title2 = g.append('text')
					.text('non-Hispanic')
					.attr('x', -margin.left)
					.attr('y', height+margin.top/0.5)
					.attr('font-size', '70%');


};

  // bars1.append("circle")
  // 			.data(data)
  // 			// .circle((d,i) => {
		// 			// 	return d.years15;
		// 			// })
		// 	  .attr("r", 8)
		// 	  // position the circles right where the path elements end
		// 	  // .attr("cy", (d, i) => yScale(i) + yScale() / 2)
		// 	  .attr('cy', (d, i) => { //// d is shorthand for element in the data and i is index
		// 				return i * 42;
		// 			})
		// 	  // transition them horizontally and jointly with the path elements
		// 	  // .attr("cx", (d) => 0)
		// 	  // .transition()
		// 	  // .duration(1000)
		// 	  // .delay((d, i) => 100 + 150 * i)
		// 	  .attr('cx', (d,i) => { return  xScale(d.year15); })
		// 	  // .attr("cx", (d,i) => xScale(d)); 
		// // //Call the y axis in a group tag
///////////\\\\\
// 				var n = 6; // number of samples
//     		m = 2; // number of series
			

// 				// let xScale0 = d3.scaleLinear()
// 				// 	.domain([0, n])
// 				// 	.range([0, width]);
				
// 				let yScale = d3.scaleLinear()
// 					// .domain([0, d3.max(ethboardallg) + 18]) ////using just the numbers here
// 						.domain([0,305])
// 						.range([height, 0]);
						
// 				let xScale0 = d3.scaleBand()
// 						  .domain(d3.range(n))
// 	    			  .range([0, width], .2);

// 				let xScale1 = d3.scaleBand()
// 					// .domain([0, d3.max(ethboardallg)]) ////using just the numbers here
// 					// .domain([0, d3.max(ethboardallg) + 18]) ///ADDS HEIGHT TO THE AXIS
// 						.domain(d3.range(m))
//     				.range([0, xScale0.bandwidth() - 10]);
					
		
// // var y = d3.scaleLinear()
// //     .domain([0, 1])
// //     .range([height, 0]);

// // var x0 = d3.scaleBand()
// //     .domain(d3.range(n))
// //     .range([0, width], .2);

// // var x1 = d3.scaleBand()
// //     .domain(d3.range(m))
// //     .range([0, x0.bandwidth() - 10]);

// console.log(data[0].year15)

// 			let bars1 = g.selectAll("rect")
// 					.data(data)
// 					.enter()
// 					.append("g")
// 					// .attr("transform", "translate(0, -150)") ////so that bars are not cut off on base
// 					.attr('x', (d, i) => { //// d is shorthand for element in the data and i is index
// 						return i * 42;
// 					})
// 					.attr('width', 10) ///bar width
// 					//////mouseover for text
// 					// .on('mouseover', function(d) {
// 					//   			        bars1.text(d.name)  ///////?????
// 					//   			   	d3.select(this).select('text')
// 					//       				.text((d) => { return 'number ' + d; });
// 					//   			      });
// 					.text((d) => { return 'number ' + d; });

// 				// .on('mouseover', function() {
// 				//             d3.select(this).selectAll('.bar').style('fill-opacity',0.5)
// 				//             d3.select(this).selectAll('.bar-name').style('visibility','visible')
// 				//         })
// 				//  .on('mouseout', function() {
// 				//             d3.select(this).selectAll('.bar').style('fill-opacity',1)
// 				//             d3.select(this).selectAll('.bar-name').style('visibility','hidden')
// 				//         })

