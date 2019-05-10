///National Art Museum 2018 staff data from 2018 staff survey report
// intellectual leadership positions new hiring since 2014 percentages
////parallel lines comparing new hiring by curators / educators and by museum leadership incl exec / conservators

             
                    
            d3.json("data/2018artmus_newhiring2014CurEd_Leader_comparison.json").then((data) => {
                                 svgPlot27(data);
                    });
                
   
            let svgPlot27 = (data) => { ////need to call a different svgPlot 
                console.log(data); ////with each chart for multiple charts
                
////National Art Museum Staff Survey Intellectual Leadership Positions 
////by number 2015 and 2018 from 2018 report survey
////Race/Ethnicity 


	let margin = {top: 125, right: 95, bottom: 190, left: 190};
		
			let width = 990 - margin.left - margin.right; // Use the window's width 
			let height = 465 - margin.top - margin.bottom; // Use the window's height

	

			var svg = d3.select('#svg27') 
    				.append('svg') ////then append an svg 
      				.attr('width', width + margin.left + margin.right)
      				.attr('height', height + margin.top + margin.bottom);

			var g = svg.append('g')
				////then append to global g - so now the div svg is appended - see further down
				    .attr("transform", "translate(" + margin.left*1.3 + "," + margin.top*1.15 + ")");
			

/////// parallel lines comparing new hiring by curators / educators and by museum leadership incl exec / conservators
////National Art Museum Staff Survey Intellectual Leadership Positions 
////percent
var n = 10;

	// for horizontal
				
				
				
				let xScale = d3.scaleLinear()
    					.domain([0, 88+15])
    					.range([0, width]);

				let yScale = d3.scaleLinear()
    					.domain([0, 88]) 
    					.range([height, 0]);
					
					/////bars ascending
				// let ySc = d3.scaleLinear()
				// 	.domain([0, 220]) ////using just the numbers here
				// 	.range([height, 0]);
// var line = d3.line()

		let bars1 = g.selectAll("line")
					.data(data)
  					.enter()
  					.append("g")
  					.attr('class', 'thinline2')
			
				console.log(data);

////color every other bar differently

		// .attr("fill", function(d,i) { 
						// if(i % 2 == 0){
						// 	var color = "blue";
						// 	return color; 
						// } else {
						// 	var color = "red";
						// 	return color; 							
						// 
	// 	.attr((d,i)=>{
				// 		if(data[i].id % 2 == 0){
					
				// 	bars1.attr("fill", "blue")
				// } else {
				// 		bars1.attr("fill", "red")
				// }
				// 	})
					// .attr("fill", "sienna")
// multiple bar colors
// .avar color = "purple";
			// 				return color; 							
			// 			} else if(i <= 5){
			// 				var color = "turquoise";
			// 				return color;							
			// 			} else if (i <= 7){
			// 				vttr("fill", function(d,i) { 
			// 			if(i <= 1){
			// 				var color = "pink";
			// 				return color; 
			// 			} else if(i <= 3) {
			// 				ar color = "yellow";
			// 				return color;								
			// 			} else {
			// 				var color = "blue";
			// 				return color;								
			// 			}
			// 
////color every 2 bars differently
////color by color scheme
			bars1.append("line")
					.attr("fill", "none")
					// .attr("stroke", "none")
					.attr("stroke", function(d,i){
						if(i % 2 == 0){
							var color = "yellow"
								return color
						// bars1.attr("stroke", "sienna")
						} else {
							// bars1.attr("stroke", "gold")
								var color = "coral"
								return color
						}
						})
					.attr("opacity", function(d,i){
						if(i === 8){
							var opacity = 0.9
								return opacity
						} else if (i === 9){
						// if (i >=5) {
								var opacity = 1
								return opacity
						} else  {
								var opacity = 0  ////////======
								return opacity
						}
						})
					.style("stroke-dasharray", function(d,i){
							if(i % 2 == 0){
								var dash = ("3, 3")
										return dash
						} else {
								var dash = ("3, 3")
										return dash
						}
						})
						.attr("stroke-width", function(d,i){    ///////set up different attributes to select bars before calling the lines
								if(i % 2 == 0){
									var strokewidth = 1.6
									return strokewidth
						} else{
									var strokewidth = 1.6
									return strokewidth
						}
						})
					// .attr('y', (d, i) => { //// d is shorthand for element in the data and i is index
					// 	// return i *30;
					// 		if(i > 5){
					// 		return 
					// } else if (i >=5) {
					// 		return i *30;
					// }
					// 	// return line(d.percent) 
					// })
					.attr('x1', function(d,i) {
										return 0;
							})
					.attr('y1', (d, i) => {   /////change line spacing
							if(i === 8){
							return i *21
					} else if (i === 9) {
							return i *25;
					} else if  (i <=7){ 
								return i * 1;
					}
					})
					.attr('x2', function(d,i) { 
						var linestart = xScale(d.percent)
						var lineend = xScale(d.percent)
							if(i % 2 == 0){
								var linedouble = linestart
								return linedouble 
						} else  {
						    var linedouble = lineend 
						    return linedouble
					}
					})
					.attr('y2', (d, i) => {  ////change spacing of lines
							if(i === 8){
							return i *21
					} else if (i === 9) {
							return i *25;
					} else if  (i <= 7){ 
								return i * 1;
					}
					})
					
						// .on('mouseenter', (d,i,j) => {
						// 	console.log("hover")
						// 	console.log(d.jobtype)
					  	
					 // 	headingpercent2.text(d.jobtype + ": " + d.percent + "% " + d.raceethnicity)
					 // 	d3.select(j[i])
					 // 		.transition()	
      //           .delay(50)
      //           .duration(100)
					 // 	// .style('fill', 'lightgrey')
      //         	.style('opacity', '1');
						// })
	     //   .on('mouseout', (d, i,j) => {
		    //         // console.log(d);
		    //       headingpercent2.text((d) => { return "curators & educators compared to museum leadership, including executive positions, & conservators"; });
		    //   	 d3.select(j[i])
		    //   			.transition()	
      //           .delay(500)
      //           .duration(2000)
					 // 	// .style('fill', 'sienna')
					 // 	 .style('opacity', '1');
						// })
	        	


			// /////add transparent rect on top so can select bars more easily
	// bars1.append("line")
	// 				.enter()
	// 				.attr('class', 'thinbar')
	// 				.attr('x', function(d,i) { 
	// 					return 0; 
	// 				})
	// 				.attr('y', (d, i) => { //// d is shorthand for element in the data and i is index
	// 					return i *30;
	// 					// return line(d.percent) 
	// 				})
	// 				.attr('width', function(d,i) { 
	// 					return xScale(d.percent); 
	// 				})
	// 				.attr('height', 12) ///bar width
	// 				.attr('fill', 'transparent')
	// 						.on('mouseenter', (d,i,j) => {
	// 							console.log("hover")
	// 							headingpercent2.text(d.jobtype + ": " + d.percent + "% " + d.raceethnicity)
	// 						d3.select(j[i])
	// 							.transition()	
 //               .delay(50)
 //               .duration(100)
	// 				  	// .style('fill', 'lightgrey')
 //             // .style('opacity', '1');
	// 					})
	//         .on('mouseout', (d, i,j) => {
	// 	            // console.log(d);
	// 			         headingpercent2.text((d) => { return "curators & educators compared to museum leadership, including executive positions, & conservators"; });
	// 	      	 d3.select(j[i])
	// 	      		.transition()	
 //               .transition()	
 //               .delay(500)
 //               .duration(2000)
	// 				  	// .style('fill', 'sienna')
	// 				  	 //.style('opacity', '0.7');
	// 					})

//////circles at end of lines

		bars1.append("circle")
		  			.data(data)
					  .attr("r", 5)
					 // .attr("stroke", "sienna")
					 ////.attr('x', function(d,i) { 
					 // // .attr("fill", "#513c2f")
					  .style("opacity", function(d,i){
							if(i === 8){
								var opacity = 0.9
								return opacity
						} else if (i === 9){
						// if (i >=5) {
								var opacity = 0.9
								return opacity
						} else  {
								var opacity = 0  ////////======
								return opacity
						}
						})
					  .attr("fill", function(d,i) {
					  		if(i % 2 == 0){
							var color = "palevioletred";
							return color; 
						} else {
							var color = "palevioletred";
							return color; 							
						}
						 // 	if(i <= 1){
							// 	var color = "pink";
							// 	return color; 
							// } else if(i <= 3) {
							// 	var color = "purple";
							// 	return color; 							
							// } else if(i <= 5){
							// 	var color = "turquoise";
							// 	return color;							
							// } else if (i <= 7){
							// 	var color = "gold";
							// 	return color;								
							// } else {
							// 	var color = "blue";
							// 	return color;								
							// }
						})
					.attr('cy', (d, i) => {   /////change line spacing
							if(i === 8){
								return i *21 -1
						} else if (i === 9) {
								return i *25 -1;
						} else if  (i <=7){ 
									return i * 1;
						}
						})
					.attr('cx', function(d,i) { 
						var linestart = xScale(d.percent)
						var lineend = xScale(d.percent)
							if(i % 2 == 0){
								var linedouble = linestart
								return linedouble 
						} else  {
						    var linedouble = lineend 
							    return linedouble
						}
						})
              .attr('transform', 'translate(0,1)')
								.on('mouseenter', (d,i,j) => {
									console.log("hover")
									headingpercent2.text(d.jobtype + ": " + d.percent + "% " + d.raceethnicity)
								d3.select(j[i])
									.transition()	
		                .delay(50)
		                .duration(400)
						  			.attr("r", 7.8)
						  			.style('opacity', '1')
							})
			        .on('mouseout', (d, i,j) => {
				            // console.log(d);
				            headingpercent2.text((d) => { return "curators & educators compared to museum leadership, including executive positions, & conservators"; });
				      	 d3.select(j[i])
				      		.transition()	
		                .delay(100)
		                .duration(400)
							  		// .attr("r", 7)
							  	 //.style('opacity', '1');
								})

////percent label on each bar 

var numlabel = bars1.append('text')
					.text((d,i) => {
						if(i % 2 == 0){
							// return (d.percent + "% " + d.raceethnicity + " " + d.jobtype) 
							return (d.percent + "% " ) 
						} else {
							return (d.percent + "% " ) 							
						// return (d.percent + "% " + d.raceethnicity + " " + d.jobtype)
							}
							})
							.attr('y', (d, i) => {   /////change line spacing
							if(i === 8){
									return i *21 -1
							} else if (i === 9) {
									return i *25 -1;
							} else { 
										// return i * 1;
							}
							})
						.attr('x', function(d,i) { 
							var linestart = xScale(d.percent)
							var lineend = xScale(d.percent)
								if(i % 2 == 0){
									var linedouble = linestart
									return linedouble 
							} else  {
							    var linedouble = lineend 
								    return linedouble
							}
						})
						.style("opacity", function(d,i){
							if(i === 8){
								var opacity = 0.9
								return opacity
							} else if (i === 9){
							// if (i >=5) {
									var opacity = 0.9
									return opacity
							} else  {
									var opacity = 0  ////////======
									return opacity
							}
							})
							// .attr('transform', (d) => { return 'translate(' + 20 + ', ' + (500 - yScale(d) ); });
							.style("fill", "#f5f4f9")
							.style("font-size", "90%")
							.attr("text-anchor", "start")
							.attr("transform", "translate(15, 6)")

	
//// label bar axis

let jobtype = bars1.append('text')
					.data(data)
						.attr("class", "numlabel")
						.attr("text-anchor", "bottom")
						.attr("text-anchor","end")
						// .text((d,i)=> { 
						// 	if(i % 2 == 0){
						// 		return (d.jobtype)
						// 	} else {
						// 		return (d.raceethnicity)
						// 	}
						// })
						.text((d,i) => {
							return (d.jobtype)
						})
						.attr("x", -margin.left/2.2)
						.attr('y', (d, i) => {   /////change line spacing
							if(i === 8){
									return i *21 -1
							} else if (i === 9) {
									return i *25 -1;
							} else { 
										// return i * 1;
							}
							})
						.attr("transform", `translate(${margin.left/2.4}, 4)`)
						.style("opacity", function(d,i){
							if(i === 8){
								var opacity = 0.9
								return opacity
							} else if (i === 9){
							// if (i >=5) {
									var opacity = 0.9
									return opacity
							} else  {
									var opacity = 0  ////////======
									return opacity
							}
							})
						// .style("font-size", "100%")
						.style("fill", "#f5f4f9") 
						.style("font-weight", "bolder")
						.style("font-size", "0.95em")
						// .style("opacity", 0) ///////take this out for now

				//////label text for each bar
// 	bars1.append('text')
// 					.data(data)
// 					.attr("class", "numlabel")
// 					.attr("text-anchor", "bottom")
// 					.text((d, i) => {
// 						return d.raceethnicity;
// 					})
// 					.attr("x", -margin.left/2)
// 					.attr('y', (d, i) => { //// d is shorthand for element in the data and i is index
// 						return i * 33;
// 					})
// 					// .attr("x", margin.left/10)
// 					.attr("transform", "translate(-20, -12)")
// 					.style("font-family", "sans-serif")
// 					.style("font-size", "65%")
// 					.style('fill', 'dark grey') 
				
// let curator = g.append('text')
// 					.text('curators and educators')
// 					.attr('x', width/2)
// 					.attr('y', margin.top)
// 					.attr('font-size', '1em');

//////  left axis 
	let yAxispercent = g.append('g') // just append axis to global space
					.attr("class", "y18axis")
					.style('color', 'darkslategrey')
					.attr('stroke-width', 0.6)
					.attr("opacity", 0.8)
				// 	.attr("transform", `translate(0, ${-margin.top} )`)
					.attr("transform", `translate(0, ${margin.top/155} )`)
					.style("fill", "#f5f4f9")
					.call(d3.axisLeft(xScale) //call axisLeft to use yScale for axis ticks and scale
						.tickSize(0)
						.ticks(0)
						.tickFormat("") ////empty no text
					)
					.selectAll("text")
					.style("fill", "#f5f4f9")
					.attr("transform", "rotate(-65)")
					.attr("text-anchor", "end");

// bottom axis percent numbers & line
	let xAxispercent = g.append("g")
					// .attr("class", "y18axis")
					.attr("class", "xaxis1")
			    .style('fill', 'none')
			    .style('stroke-width', 0.2)
			    .style("fill", "darkslategrey")
			    .style('font-size', "80%")
			    .style('color', '#faf9fc')
					.attr('opacity', 1)
					.attr("transform", `translate(0, ${height+margin.bottom/1.5} )`)
					.call(d3.axisBottom(xScale)
						.tickSize(.1)
			      .ticks("10")
			      .tickPadding(10)
			      .tickFormat(function(d,i) {
			          console.log(d)
			          var s = d;
			           return   s + "% ";
		    				})
						)
						
			
////bottom line
// let yAxispercentline = g.append('g') // just append axis to global space
// 					.attr("class", "y18axis")
// 					.style('color', 'darkslategrey')
// 					.attr('stroke-width', 0.2)
// 					.attr("opacity", 0.8)
// 				  .attr("transform", `translate(0, ${height*2.05} )`)
// 					// .attr("transform", `translate(0, ${height*2.12} )`)
// 					.call(d3.axisBottom(xScale) //call axisLeft to use yScale for axis ticks and scale
// 						.tickSize(3)
// 						.ticks(10)
// 						.tickFormat("") ////empty no text
// 					)
					// .selectAll("text")
					// .style("fill", "#f5f4f9")
					// .attr("transform", "rotate(-65)")
					// .attr("text-anchor", "end");

 // add the X gridlines
  // let gridxpercent = g.append("g")
  //         .attr("class", "gridx")
  //         .style('stroke', 'darkslategrey')
		// 			.attr('stroke-width', 0.2)
  //         // .style('font-size', "80%")
  //         // .attr("transform", `translate(0, ${height } )`)
  //         .call(d3.axisBottom(xScale)
  //           .tickSize(height*2.2)
  //           .ticks("10")
  //           .tickFormat("")
  //       )
          
          
          
// // add top line
//   let gridy = g.append("path")
//         .attr("class", "gridy")
//         .attr('x', 0)
// 					.attr('y', height*1.07)
//         // .style('font-size', "70%")
//         .attr("transform", `translate(0, ${5} )`)
        

let xlabel = g.append('text')
            .attr("class", "y18axis")
            .attr("transform", "translate(" + (width/2.19) + " ," + (height*2.12) + ")")
            .style("font-size", "0.85em")
            .style("opacity", 0.88)
	    			.style("fill", "#f5f4f9")
            .text("percent")
              

			let headingpercent = g.append('text')
					.text('New Hiring Since 2014: Percent Comparison Among Repeat 2015 & 2018 Survey Participants')
					.attr('x', -margin.left/20)
					.attr('y', -margin.top/1.2)
					.style("fill", "#f5f4f9")
					.attr('font-size', '1.3em');
					
			let headingpercent2 = g.append('text')
					// .text('excluding white,')
					.style("fill", "#f5f4f9")
					.text('comparing curators & cducators to museum leadership, including executive positions, & conservators')
					.attr('x',  -margin.left/20)
					.attr('y', -margin.top/2.8)
					.attr('font-size', '1.12em');

			let titlepercent2 = g.append('text')
				// 	.text('')
					.attr('x', -margin.left)
					// .attr('y', height+margin.top+margin.top/0.5)
					.attr('y', height+margin.top+margin.top/0.7)
					.attr('font-size', '100%');
				

			let datanote = g.append('text')
					.text('Data from Art Museum Staff Demographic Survey 2018, Westermann, M., Sweeney, L., & Schonfeld, R. C. (January 2019)')
					.attr('x', -margin.left/25)
					.attr('y', -margin.top/1.61)
					.style("fill", "#f5f4f9")
					.attr('font-size', '0.95em');
					
};

/////==================

///////2018 parallel lines 
////National Art Museum Staff Survey Intellectual Leadership Positions 
////by number
// var n = 6;

// 				// for horizontal
				
// 				let xScale3 = d3.scaleLinear()
// 					.domain([0, 305+30])
// 					.range([0, width]);

// 				let yScale3 = d3.scaleLinear()
// 					.domain([0, 305]) 
// 					.range([height, 0]);
					
// 					/////bars ascending
// 				// let ySc = d3.scaleLinear()
// 				// 	.domain([0, 220]) ////using just the numbers here
// 				// 	.range([height, 0]);
// // var line = d3.line()

// 		let bars3 = g2.selectAll("rect")
// 					.data(data)
// 					.enter()
// 					.append("g")
// 					.attr('class', 'barthin3')
			
// 				console.log(data);

// 			bars3.append("rect")
// 					.attr("fill", "none")
// 					.attr("stroke", "sienna")
// 					.attr('x', function(d,i) { 
// 						return 0; 
// 					})
// 					.attr('y', (d, i) => { //// d is shorthand for element in the data and i is index
// 						return i *33;
// 						// return line(d.year15) 
// 					})
// 					.attr('width', function(d,i) {
// 						console.log(d.year18)
// 						return xScale(d.year18); 
// 					})
// 					.attr('height', 1) ///bar width
// 						// .on('mouseenter', (d,i,j) => {
// 						// 	console.log("hover")
// 					 // 	title2.text(d[i].year15)
// 					 // 	d3.select(j[i])
// 					 // 	.style('fill', 'blue')
//       //         .style('opacity', '.5');
// 						// })
// 	     //   .on('mouseout', (d, i,j) => {
// 		    //         // console.log(d);
// 		    //         title2.text((d) => { return ""; });
// 		    //   	 d3.select(j[i])
// 					 // 	.style('fill', 'sienna')
// 					 // 	 .style('opacity', '1');
// 						// })
	        	
// 	    bars3.append("circle")
//   			.data(data)
// 			  .attr("r", 8)
// 			  .attr("fill", "pink")
// 			  // position the circles right where the path elements end
// 			  .attr('cy', (d, i) => { //// d is shorthand for element in the data and i is index
// 						return i * 33;
// 					})
// 			  .attr('cx', (d,i) => { 
// 			  	return  xScale(d.year18); 
// 			  })
	

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


// 				////number each bar 
// var numlabel = bars3.append('text')
// 					.text((d,i) => {
// 						return d.year18;
// 					})
// 					.attr('y', (d, i) => { //// d is shorthand for element in the data and i is index
// 						return i * 33;
// 					})
// 					.attr('x', (d, i) => { return  xScale(d.year18); })
// 					// .attr('transform', (d) => { return 'translate(' + 20 + ', ' + (500 - yScale(d) ); });
// 					.style("font-size", "60%")
// 					.style('fill', 'white') ///////numbers on top of bars
// 					.attr("text-anchor", "middle")
// 				.attr("transform", "translate(30, 4)")
	

// 				//////label text for each bar
// 	bars3.append('text')
// 					.data(data)
// 					.attr("class", "numlabel")
// 					.attr("text-anchor", "bottom")
// 					.text((d, i) => {
// 						return d.raceethnicity;
// 					})
// 					.attr("x", -margin.left/2)
// 					.attr('y', (d, i) => { //// d is shorthand for element in the data and i is index
// 						return i * 33;
// 					})
// 					// .attr("x", margin.left/10)
// 					.attr("transform", "translate(-20, -12)")
// 					.style("font-family", "sans-serif")
// 					.style("font-size", "65%")
// 					.style('fill', 'dark grey') 
				


// // 				////  numbers on the axis 
// 				let yAxis3 = g2.append('g') // just append axis to global space
// 					.style('fill', 'none')
// 					.attr('stroke', 'grey')
// 					.attr('path', 'red')
// 					.attr('stroke-width', 0.3)
// 					.attr("transform", `translate(0, ${-margin.top} )`)
// 					.call(d3.axisLeft(xScale) //call axisLeft to use yScale for axis ticks and scale
// 						.tickSize(0)
// 						.ticks(0)
// 						.tickFormat("") ////empty no text
// 					)
// 					.selectAll("text")
// 					.attr("transform", "rotate(-65)")
// 					.attr("text-anchor", "end");

// 				// let xAxis = g.append("g")
// 				// 	.attr("class", "y axis")
// 				// 	.attr('fill', 'none')
// 				// 	.attr('stroke', 'grey')
// 				// 	.attr('stroke-width', 0.3)
// 				// 	.attr("transform", `translate(0, ${height+margin.bottom/0.8 } )`)
// 				// 	.call(d3.axisBottom(xScale)
// 				// 		////above move the axis to place that the chart ends - within the margins
// 				// 		.tickSize(3)
// 				// 		.ticks(5)
// 				// 	);
	

// 			let heading3 = g2.append('text')
// 					// .text('National Art Museum Staff Survey Intellectual Leadership Positions, Total Hires')
// 					.text('National Art Museum Staff Survey Intellectual Leadership Positions')
// 					.attr('x', -margin.left)
// 					// .attr('y', height+margin.top+margin.top/0.5)
// 					.attr('y', height+margin.top+margin.top/0.35)
// 					.attr('font-size', '100%');

// 			let title3 = g2.append('text')
// 					.text('2018')
// 					.attr('x', -margin.left)
// 					.attr('y', height+margin.top+margin.top/0.5)
// 					.attr('font-size', '100%');
					
// 			let heading23 = g2.append('text')
// 					.text('excluding white,')
// 					.attr('x', -margin.left)
// 					.attr('y', height+margin.top/0.7)
// 					.attr('font-size', '70%');

// 			let title23 = g2.append('text')
// 					.text('non-Hispanic')
// 					.attr('x', -margin.left)
// 					.attr('y', height+margin.top/0.5)
// 					.attr('font-size', '70%');
					
// ///////=======

// ///////2015 Hispanic / non-Hispanic parallel lines
// var n = 2;

// 				// for horizontal
				
// 				let xScale1 = d3.scaleLinear()
// 					.domain([0, 305+30])
// 					.range([0, width]);

// 				let yScale1 = d3.scaleLinear()
// 					.domain([0, 305]) 
// 					.range([height, 0]);
					
// 					/////bars ascending
// 				// let ySc = d3.scaleLinear()
// 				// 	.domain([0, 220]) ////using just the numbers here
// 				// 	.range([height, 0]);
// // var line = d3.line()

// 		let bars2 = g1.selectAll("rect")
// 					// .data(data)
// 					.enter()
// 					.append("g")
// 					.attr('class', 'barthin3')
			
// 				console.log(data);

// 			bars2.append("rect")
// 					.attr("fill", "none")
// 					.attr("stroke", "sienna")
// 					.attr('x', function(d,i) { 
// 						return 0; 
// 					})
// 					.attr('y', (d, i) => { //// d is shorthand for element in the data and i is index
// 						return i *33;
// 						// return line(d.year15) 
// 					})
// 					.attr('width', function(d,i) {
// 						console.log(d.year18)
// 						return xScale(d.year18); 
// 					})
// 					.attr('height', 1) ///bar width
// 						// .on('mouseenter', (d,i,j) => {
// 						// 	console.log("hover")
// 					 // 	title2.text(d[i].year15)
// 					 // 	d3.select(j[i])
// 					 // 	.style('fill', 'blue')
//       //         .style('opacity', '.5');
// 						// })
// 	     //   .on('mouseout', (d, i,j) => {
// 		    //         // console.log(d);
// 		    //         title2.text((d) => { return ""; });
// 		    //   	 d3.select(j[i])
// 					 // 	.style('fill', 'sienna')
// 					 // 	 .style('opacity', '1');
// 						// })
	        	
// 	    bars2.append("circle")
//   			.data(data)
// 			  .attr("r", 8)
// 			  .attr("fill", "pink")
// 			  // position the circles right where the path elements end
// 			  .attr('cy', (d, i) => { //// d is shorthand for element in the data and i is index
// 						return i * 33;
// 					})
// 			  .attr('cx', (d,i) => { 
// 			  	return  xScale(d.year18); 
// 			  })
	

// 			// /////add transparent rect on top so can select bars more easily
// 				// bars1.append("rect")
// 				// 	.enter()
// 				// 	.attr('class', 'barthin')
// 				// 	.attr('x', margin.right)
// 				// 	.attr('width', width)
// 				// 	.attr('height', height*8)
// 				// 	.attr('fill', 'transparent')
// 				// 			.on('mouseenter', (d,i,j) => {
// 				// 			console.log("hover")
// 				// 	  	title2.text(d.year15)
// 				// 	  	d3.select(j[i])
// 				// 	  	.style('fill', 'pink')
//     //           .style('opacity', '.5');
// 				// 		})
// 	   //     .on('mouseout', (d, i,j) => {
// 		  //           // console.log(d);
// 		  //           title2.text((d) => { return "NYC Museum Staff"; });
// 		  //     	 d3.select(j[i])
// 				// 	  	.style('fill', 'blue')
// 				// 	  	 .style('opacity', '1');
// 				// 		})


// 				////number each bar 
// var numlabel =	bars2.append('text')
// 					.text((d,i) => {
// 						return d.year18;
// 					})
// 					.attr('y', (d, i) => { //// d is shorthand for element in the data and i is index
// 						return i * 33;
// 					})
// 					.attr('x', (d, i) => { return  xScale(d.year18); })
// 					// .attr('transform', (d) => { return 'translate(' + 20 + ', ' + (500 - yScale(d) ); });
// 					.style("font-size", "60%")
// 					.style('fill', 'white') ///////numbers on top of bars
// 					.attr("text-anchor", "middle")
// 				.attr("transform", "translate(30, 4)")
	

// 				//////label text for each bar
// 	bars2.append('text')
// 					.data(data)
// 					.attr("class", "numlabel")
// 					.attr("text-anchor", "bottom")
// 					.text((d, i) => {
// 						return d.raceethnicity;
// 					})
// 					.attr("x", -margin.left/2)
// 					.attr('y', (d, i) => { //// d is shorthand for element in the data and i is index
// 						return i * 33;
// 					})
// 					// .attr("x", margin.left/10)
// 					.attr("transform", "translate(-20, -12)")
// 					.style("font-family", "sans-serif")
// 					.style("font-size", "65%")
// 					.style('fill', 'dark grey') 
				


// // 				////  numbers on the axis 
// 				let yAxis2 = g1.append('g') // just append axis to global space
// 					.style('fill', 'none')
// 					.attr('stroke', 'grey')
// 					.attr('path', 'red')
// 					.attr('stroke-width', 0.3)
// 					.attr("transform", `translate(0, ${-margin.top} )`)
// 					.call(d3.axisLeft(xScale) //call axisLeft to use yScale for axis ticks and scale
// 						.tickSize(0)
// 						.ticks(0)
// 						.tickFormat("") ////empty no text
// 					)
// 					.selectAll("text")
// 					.attr("transform", "rotate(-65)")
// 					.attr("text-anchor", "end");

// 				// let xAxis = g.append("g")
// 				// 	.attr("class", "y axis")
// 				// 	.attr('fill', 'none')
// 				// 	.attr('stroke', 'grey')
// 				// 	.attr('stroke-width', 0.3)
// 				// 	.attr("transform", `translate(0, ${height+margin.bottom/0.8 } )`)
// 				// 	.call(d3.axisBottom(xScale)
// 				// 		////above move the axis to place that the chart ends - within the margins
// 				// 		.tickSize(3)
// 				// 		.ticks(5)
// 				// 	);
	

// 			let heading12 = g1.append('text')
// 					.text('National Art Museum Staff Survey')
// 					.attr('x', -margin.left/2)
// 					.attr('y', height+margin.top+margin.top/0.5)
// 					.attr('font-size', '100%');

// 			let title12 = g1.append('text')
// 					.text('2018')
// 					.attr('x', -margin.left)
// 					.attr('y', height+margin.top+margin.top/0.5)
// 					.attr('font-size', '100%');
					
// 			let heading13 = g1.append('text')
// 					.text('excluding white,')
// 					.attr('x', -margin.left)
// 					.attr('y', height+margin.top/0.7)
// 					.attr('font-size', '70%');

// 			let title13 = g1.append('text')
// 					.text('non-Hispanic')
// 					.attr('x', -margin.left)
// 					.attr('y', height+margin.top/0.5)
// 					.attr('font-size', '70%');
					
// ///////////======					




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

