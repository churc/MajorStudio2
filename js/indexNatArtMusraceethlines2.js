////National Art Museum Staff Survey Intellectual Leadership Positions 
////by number 2015 and 2018 from 2018 report survey
////numbers, race and ethnicity increased hiring 

			d3.json("data/2018artmus_intLeadershiprace.json").then((data) => {
				// console.log(data);
				svgPlot16(data);
			});

		

			let svgPlot16 = (data) => {

		console.log(data);

	let margin = { top: 38, right: 75, bottom: 110, left: 310 };
		
			let width = 815 - margin.left - margin.right; // Use the window's width 
			let height = 320 - margin.top - margin.bottom; // Use the window's height



//////for 2015 data
			var svg = d3.select('#svg16') ////here select named svg and put it into the var svg
				.append('svg') ////then append an svg 
				.attr('width', width + margin.left + margin.right)
				.attr('height', height + margin.top + margin.bottom);

			var g = svg.append('g')
				////then append to global g - so now the div svg is appended - see further down
				///note for multiple svgs you need a new g variable so you'd have g1, g2, etc
				.attr("transform", "translate(" + margin.left/1.35 + "," + margin.top*3.5 + ")");
			// console.log(width);  ////the above transform gives the space around the chart

/////for 2015 Hispanic non-Hispanic data
			var svg1 = d3.select('#svg17')
				.append('svg') ////then append an svg 
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)
		
			var g1 = svg1.append('g') ////then append to global g - so now the div svg is appended
				///note for multiple svgs you need a new g variable so you'd have g1, g2, etc
		
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
			////the above transform gives the space around the chart

/////for 2018 data
	var svg2 = d3.select('#svg18')
		.append('svg') ////then append an svg 
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)


	var g2 = svg2.append('g') ////then append to global g - so now the div svg is appended
		///note for multiple svgs you need a new g variable so you'd have g1, g2, etc

		.attr("transform", "translate(" + margin.left/1.35 + "," + margin.top*2.8 + ")");
	////the above transform gives the space around the chart

/////for 2018 Hispanic non-Hispanic data
	// var svg3 = d3.select('#svg19')
	// 	.append('svg') ////then append an svg 
	// 		.attr("width", width + margin.left + margin.right)
	// 		.attr("height", height + margin.top + margin.bottom)

	// var g3 = svg3.append('g') ////then append to global g - so now the div svg is appended
	// 	///note for multiple svgs you need a new g variable so you'd have g1, g2, etc

	// 	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	// ////the above transform gives the space around the chart


///////======2015 parallel lines
////National Art Museum Staff Survey Intellectual Leadership Positions 
////by number
var n = 6;

				// for horizontal
				
				let xScale5 = d3.scaleLinear()
					.domain([0, 214+30])
					.range([0, width]);

				let yScale5 = d3.scaleLinear()
					.domain([0, 214]) 
					.range([height, 0]);
					
					// adding
		// var x = d3.scaleBand().rangeRound([0, width])
  // 						.padding(0.1);

		// var x1 = d3.scaleBand()
		// 				 .rangeRound([0, x.bandwidth()])
		// 				 .padding(0.05);
					
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
						return xScale5(d.year15); 
					})
					.attr('height', 1) ///bar width
						.on('mouseenter', (d,i,j) => {
							console.log("hover")
					  	title2.text(d.year15)
					  	d3.select(j[i])
					  	.style('fill', 'blue')
              .style('opacity', '.5');
						})
	        .on('mouseout', (d, i,j) => {
		            // console.log(d);
		            title2.text((d) => { return ""; });
		      	 d3.select(j[i])
					  	.style('fill', 'sienna')
					  	 .style('opacity', '1');
						})
	        	
	    bars1.append("circle")
  			.data(data)
			  .attr("r", 7)
			  .attr("fill", "#11593b")
			  // .attr("fill", function(d,i) { 
					// 	if(i == 0){
					// 		var color = "lightgoldenrodyellow";
					// 		return color; 
					// 	} else if(i == 1) {
					// 		var color = "darkcyan";
					// 		return color; 							
					// 	} else if(i == 2){
					// 		var color = "pink";
					// 		return color;							
					// 	} else if (i == 3){
					// 		var color = "purple";
					// 		return color;								
					// 	} else if (i == 4){
					// 		var color = "turquoise";
					// 		return color;								
					// 	} else {
					// 		var color = "gold";
					// 		return color;								
					// 	}
					// })
					.style("opacity", 0.65)
			  // position the circles right where the path elements end
			  .attr('cy', (d, i) => { //// d is shorthand for element in the data and i is index
						return i * 33;
					})
			  .attr('cx', (d,i) => { 
			  	return  xScale5(d.year15); 
			  })
			  .on('mouseenter', (d,i,j) => {
								console.log("hover")
								console.log(d.jobtype)
						  	heading2.text("2015 -> 2018: " + " " + d.raceethnicity + ": " + d.year15 + " total hires -> " + d.year18)
					  	d3.select(j[i])
					  	// .style('fill', 'lightgrey')
	              .style('opacity', '1');
							})
	        .on('mouseout', (d, i,j) => {
		            // console.log(d);
		           heading2.text((d) => { return "curators, educators, museum leadership, including executive positions, conservators"; });
		      	 d3.select(j[i])
		      			.transition()	
                .delay(500)
                .duration(2000)
					  	// .style('fill', 'sienna')
					  	.style("font-size", "0.98em")
					  	 .style('opacity', '1');
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
					.attr('x', (d, i) => { return  xScale5(d.year15); })
					// .attr('transform', (d) => { return 'translate(' + 20 + ', ' + (500 - yScale(d) ); });
					.style("font-size", "90%")
					.style('fill', '#f5fcf7') ///////numbers on top of bars
					.attr("text-anchor", "start")
				  .attr("transform", "translate(30, 4)")
			
					

				//////label text for each bar
	bars1.append('text')
					.data(data)
					.attr("class", "numlabel")
					.attr("text-anchor", "bottom")
					.attr("text-anchor","end")
					.text((d, i) => {
						return d.raceethnicity;
					})
					.attr("x", -margin.left/2)
					.attr('y', (d, i) => { //// d is shorthand for element in the data and i is index
						return i * 33;
					})
					// .attr("x", margin.left/10)
					.attr("transform", `translate(${margin.left/2.1}, 2)`)
					// .style("font-family", "sans-serif")
					.style("font-size", "80%")
					.style('fill', 'dark grey') 
				


// ////  numbers on the axis 
				let yAxis = g.append('g') // just append axis to global space
					.attr("class", "axisside3")
					.style('stroke', 'darkslategrey')
					.attr('stroke-width', 0.3)
					// .attr("transform", `translate(${-margin.top}, ${-margin.bottom/0.7} )`)
						.attr("transform", `translate(0, ${margin.top/200} )`)
					.call(d3.axisLeft(yScale5) //call axisLeft to use yScale for axis ticks and scale
						.tickSize(0)
						.ticks(0)
						.tickFormat("") ////empty no text
					)
					.selectAll("text")
					.attr("transform", "rotate(-65)")
					.attr("text-anchor", "end");

	
				// let xAxis = g.append("g")
				// 	.attr("class", "axisside3")
				// 	.style('stroke', 'darkslategrey')
				// 	.attr('stroke-width', 0.3)
				// 	.attr("transform", `translate(0, ${height-margin.bottom } )`)
				// 	.call(d3.axisBottom(xScale5)
				// 		////above move the axis to place that the chart ends - within the margins
				// 		.tickSize(3)
				// 		.ticks(5)
				// 	);
	

			// let heading = g.append('text')
			// 		// .text('National Art Museum Staff Survey Intellectual Leadership Positions, Total Hires')
			// 		.text('National Art Museum Staff Survey Intellectual Leadership Positions, Total Hires')
			// 		.attr('x', -margin.left/2)
			// 		.attr('y', height+margin.top+margin.top/0.5)
			// 		.attr('font-size', '90%');

			let title = g.append('text')
					.text('Intellectual Leadership Positions, National Art Museum Staff')
					.attr('x', 0)
					.style("fill", "white")
					// .attr('y', height+margin.top+margin.top/0.5)
					.attr('y', -margin.bottom)
					.attr('font-size', '1.4em');
					
		 let titleend = g.append('text')
					.text('2015')
		 			.style("fill", "white")
					.attr('x', -margin.left/3.9)
					.attr('y', -margin.bottom/2.5)
					.attr('font-size', '1.9em');
					
			let heading2 = g.append('text')
					// .text('excluding white,')
					.attr("class", "intelhead")
					.text('curators, educators, museum leadership, including executive positions, conservators')
					.attr('x', 0)
					.attr('y', -margin.bottom/1.3)
					.attr('font-size', '0.98em')
					.style("fill", "#f5f9f4");

			let title2 = g.append('text')
					// .text('non-Hispanic')
					.attr('x', -margin.left)
					.attr('y', height+margin.top/0.5)
					.attr('font-size', '70%');

/////==================

///////2018 parallel lines 
////National Art Museum Staff Survey Intellectual Leadership Positions 
////by number
var n = 6;

				// for horizontal
				
				let xScale3 = d3.scaleLinear()
					.domain([0, 305+10])
					.range([0, width]);

				let yScale3 = d3.scaleLinear()
					.domain([0, 305]) 
					.range([height, 0]);
					
					/////bars ascending
				// let ySc = d3.scaleLinear()
				// 	.domain([0, 220]) ////using just the numbers here
				// 	.range([height, 0]);
// var line = d3.line()

		let bars3 = g2.selectAll("rect")
					.data(data)
					.enter()
					.append("g")
					.attr('class', 'barthin3')
			
				console.log(data);

			bars3.append("rect")
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
						console.log(d.year18)
						return xScale5(d.year18); 
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
	        	
	    bars3.append("circle")
  			.data(data)
			  .attr("r", 7)
			  .attr("fill", "#11593b")
			  // .attr("fill", function(d,i) { 
					// 	if(i == 0){
					// 		var color = "lightgoldenrodyellow";
					// 		return color; 
					// 	} else if(i == 1) {
					// 		var color = "darkcyan";
					// 		return color; 							
					// 	} else if(i == 2){
					// 		var color = "pink";
					// 		return color;							
					// 	} else if (i == 3){
					// 		var color = "purple";
					// 		return color;								
					// 	} else if (i == 4){
					// 		var color = "turquoise";
					// 		return color;								
					// 	} else {
					// 		var color = "gold";
					// 		return color;								
					// 	}
					// })
					.style("opacity", 0.65)
				  // position the circles right where the path elements end
				  .attr('cy', (d, i) => { 
							return i * 33;
						})
				  .attr('cx', (d,i) => { 
				  	return  xScale5(d.year18); 
				  })
					.on('mouseenter', (d,i,j) => {
								console.log("hover")
								console.log(d.jobtype)
						  	heading2.text("2015 -> 2018: " + " " + d.raceethnicity + ": " + d.year15 + " total hires -> " + d.year18)
					  	d3.select(j[i])
					  	// .style('fill', 'lightgrey')
	              .style('opacity', '1');
							})
	        .on('mouseout', (d, i,j) => {
		            // console.log(d);
		           heading2.text((d) => { return "curators, educators, museum leadership, including executive positions, conservators"; });
		      	 d3.select(j[i])
		      			.transition()	
                .delay(500)
                .duration(2000)
					  	// .style('fill', 'sienna')
					  	.style("font-size", "0.98em")
					  	 .style('opacity', '1');
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
var numlabel = bars3.append('text')
					.text((d,i) => {
						return d.year18;
					})
					.attr('y', (d, i) => { //// d is shorthand for element in the data and i is index
						return i * 33;
					})
					.attr('x', (d, i) => { return  xScale5(d.year18); })
					// .attr('transform', (d) => { return 'translate(' + 20 + ', ' + (500 - yScale(d) ); });
					.style("font-size", "90%")
					.style('fill', '#f5fcf7') ///////numbers on top of bars
					.attr("text-anchor", "middle")
					.attr("transform", "translate(30, 4)")
					.attr('height', 3.3) ///bar width
						
	        	

				//////label text for each bar
	bars3.append('text')
					.data(data)
					.attr("class", "numlabel")
					.attr("text-anchor", "bottom")
					.attr("text-anchor", "end")
					.text((d, i) => {
						return d.raceethnicity;
					})
					.attr("x", -margin.left/2)
					.attr('y', (d, i) => { //// d is shorthand for element in the data and i is index
						return i * 33;
					})
					// .attr("x", margin.left/10)
					.attr("transform", `translate(${margin.left/2.1}, 2)`)
					// .style("font-family", "sans-serif")
					.style("font-size", "80%")
					.style('fill', 'dark grey') 
				

// 				////  numbers on the axis 
		let yaxisside3 = g2.append('g') // just append axis to global space
					.attr("class", "axisside3")
					.style('stroke', 'darkslategrey')
					.attr('stroke-width', 0.3)
					// .attr("transform", `translate(0, ${-margin.top/0.9} )`)
						.attr("transform", `translate(0, ${margin.top/200} )`)
					.call(d3.axisLeft(yScale5) //call axisLeft to use yScale for axis ticks and scale
						.tickSize(0)
						.ticks(0)
						.tickFormat("") ////empty no text
					)
					.selectAll("text")
					.attr("transform", "rotate(-65)")
					.attr("text-anchor", "end");

		// let xaxisside3 = g2.append("g")
		// 			.attr("class", "axisside3")
		// 			.style('stroke', 'darkslategrey')
		// 			.attr("opacity", 0.2)
		// 			.style('stroke-width', 0.1)
		// 			.attr("transform", `translate(0, ${height-margin.bottom/4} )`)
		// 			.call(d3.axisBottom(xScale5)
		// 				////above move the axis to place that the chart ends - within the margins
		// 				.tickSize(3)
		// 				.ticks(5)
		// 				// .tickFormat.style('stroke', 'darkslategrey').style('stroke-width', 0.3)
		// 			);


			let heading3 = g2.append('text')
					// .text('National Art Museum Staff Survey Intellectual Leadership Positions, Total Hires')
					.text('National Art Museum Staff Survey Intellectual Leadership Positions')
					.attr('x', -margin.left)
					// .attr('y', height+margin.top+margin.top/0.5)
					.attr('y', height+margin.top+margin.top/0.35)
					.attr('font-size', '100%');

			let title3 = g2.append('text')
					.text('2018')
					.attr('x', -margin.left/3.9)
					.attr('y', -margin.bottom/2.5)
					.attr('font-size', '1.9em');
	
					
			let heading23 = g2.append('text')
					.text('Number of total hires, excluding white, non-Hispanic. Repeat survey participants')
					// .style("fill", "#f5f9f4")
					.attr('x', 0)
					.attr('y', height+margin.bottom/3.2)
					.attr('font-size', '1em');

			let title23 = g2.append('text')
					// .text('excluding white, non-Hispanic')
					.attr('x', -margin.left/1.44)
					.attr('y', height+margin.top/0.5)
					.attr('font-size', '0.9em');

	};					
