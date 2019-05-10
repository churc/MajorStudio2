////National Art Museum Staff Survey Intellectual Leadership Positions 
////by number 2015 and 2018 from 2018 report survey
////numbers, race and ethnicity increased hiring 


    d3.json("data/2018artmus_intLeadershiprace_reord.json").then((data)=>{
    		svgPlot16(data);
			});
  
			// d3.json("data/2018artmus_intLeadershiprace.json").then((data) => {
			// 	// console.log(data);
			// 	svgPlot16(data);
			// });

		

	let svgPlot16 = (data) => {

		console.log(data);

	let margin = { top: 60, right: 75, bottom: 50, left: 180 };
		
			let width = 940 - margin.left - margin.right; // Use the window's width 
			let height = 680 - margin.top - margin.bottom; // Use the window's height



//////for 2015 data
			var svg = d3.select('#svg16') ////here select named svg and put it into the var svg
				.append('svg') ////then append an svg 
				.attr('width', width + margin.left + margin.right)
				.attr('height', height + margin.top + margin.bottom);

			var g = svg.append('g')
				
				.attr("transform", "translate(" + margin.left/1.35 + "," + margin.top*3.5 + ")");
		

///////======parallel lines paired together 2015 data with 2018
////National Art Museum Staff Survey Intellectual Leadership Positions 
////by number
var n = 12;

		// for horizontal
				
				let xScale5 = d3.scaleLinear()
					.domain([0, 305])
					.range([0, width]);

				let yScale5 = d3.scaleLinear()
					.domain([0, 305]) 
					.range([height, 0]);
					

				let bars1 = g.selectAll("line")
					.data(data)
					.enter()
					.append("g")
					.attr('class', 'barthin')
			
				console.log(data);


	// bars1.append("line")
	// 				.attr("fill", "none")
	// 				// 	.attr('x1', function(d,i) { 
	// 				// 	// return xScale5(d.yearline);  ////change start for showing change  // x1 ////look at svg element line x1 y1 x2 y2
	// 				// 	return 0;												/////start at 0 for regular bars this works
	// 				// })
	// 				.attr("stroke", function(d,i){    ///////set up different attributes to select bars before calling the lines
	// 						if(i % 2 == 0){
	// 							var color = "lightgreen"
	// 								return color
	// 				} else {
	// 						var color = "purple"
	// 								return color
	// 				}
	// 				})
	// 				.style("stroke-dasharray", function(d,i){
	// 							if(i % 2 == 0){
	// 							var dash = ("3, 3")
	// 								return dash
	// 				} else{
	// 				}
	// 				})
	// 				.attr("stroke-width", function(d,i){    ///////set up different attributes to select bars before calling the lines
	// 						if(i % 2 == 0){
	// 							var strokewidth = 0.1
	// 							return strokewidth
	// 				} else{
	// 							var strokewidth = 2.5
	// 							return strokewidth
	// 				}
	// 				})
	// 				// .attr('width', function(d,i) {
	// 				// 			if(i % 2 == 0){
	// 				// 					var width = xScale5(d.yearline)
	// 				// 					return width
	// 				// 		} else{
	// 				// 					var width = xScale5(d.year18-d.year15)
	// 				// 					return width
	// 				// 		}
	// 				// 		})
	// 					// return xScale5(d.yearline); 	// x1 2015 x2 2018  /// color positive negative
						
	// 					// return xScale5(d.year18-d.year15); //////difference between years 15 and 18
	// 				// })
	// 				// .attr("marker-end", "url(#end)")
	// 				.attr("marker-end", function(d,i){    ///arrows on every second bar
	// 						if(i % 2 == 0){
	// 							var marker = 0
	// 				} else{
	// 							var marker = "url(#arrow)"
	// 							return marker   
	// 				}
	// 				})
					
	// 				// .attr('x1', function(d,i) {       
	// 				// 	// return xScale5(d.yearline);  ////change start for showing change  // x1 ////look at svg element line x1 y1 x2 y2
	// 				// 	return 0;												/////start at 0 for regular bars this works
	// 				// })
					
	// 				.attr('x1', function(d,i) {
	// 							if(i % 2 == 0){
	// 									var start = 0
	// 									return start
	// 						} else{
	// 									// var width = xScale5(d.year18-d.year15)
	// 									var start = xScale5(d.year15)
	// 									return start
	// 						}
	// 						})
					
	// 					.attr('y1', (d, i) => {   /////change line spacing
	// 						if(i % 2 == 0){ 				/////group bars into twos
	// 							return i *35;
	// 				} else{
	// 							return i *35-12;
	// 				}
	// 				})
					
				 //.attr('x2', function(d,i) { 
					// 	return xScale5(d.yearline);  //// svg element line x1 y1 x2 y2
					// })
					
	////////=======
	
	
	//////
	
		bars1.append("line")    /////first
					.attr("fill", "none")
					.attr("stroke", function(d,i){    ///////set up different attributes to select bars before calling the lines
							if(i % 2 == 0){
								// var color = "lightgreen"
								// 	return color
					} else if (i % 2 !== 0){
							var color = "lightgreen"
									return color
					}
					})
					.style("stroke-dasharray", function(d,i){
								if(i % 2 == 0){
								var dash = ("3, 3")
									return dash
					} else{
									var dash = ("3, 3")  
									return dash
					}
					})
					.attr("stroke-width", function(d,i){    ///////set up different attributes to select bars before calling the lines
							if(i % 2 == 0){
								var strokewidth = 0.2
								return strokewidth
					} else{
								var strokewidth = 0.2
								return strokewidth
					}
					})
				
					// .attr("marker-end", function(d,i){    ///arrows on every second bar
					// 		if(i % 2 == 0){
					// 			var marker = 0
					// } else{
					// 			var marker = "url(#arrow)"
					// 			return marker   
					// }
					// })
					
					.attr('x1', function(d,i) {
								if(i % 2 == 0){
										var start = 0
										return start
							} else{
										// var start = xScale5(d.year18-d.year15)
										var start = 0    ////////\\\\\\\\\  second green line
										return start
							}
							})
					
						.attr('y1', (d, i) => {   /////change line spacing
							if(i % 2 == 0){ 				/////group bars into twos
								return i *35;
					} else{
								return i *35-12;
					}
					})
						.attr('x2', function(d,i) { 
						var linestart = xScale5(d.year15)
						var lineend = xScale5(d.year18)
							if(i % 2 == 0){
								var linedouble = linestart
								return linedouble 
						} else  {
						    var linedouble = linestart  /////second green line goes to 2015 amount
						    return linedouble
					}
					})
					
					.attr('y2', (d, i) => {  ////change spacing of lines
							if(i % 2 == 0){
								return i *35;
					} else{
								return i *35-12;
					}
					})
			
		/////////
		
			bars1.append("line")   //////second set returns increase purple
					.attr("fill", "none")
					.attr("stroke", function(d,i){    ///////set up different attributes to select bars before calling the lines
							if(i % 2 == 0){
								var color = "lightgreen"
									return color
					} else {
							var color = "purple"
									return color
					}
					})
					.style("stroke-dasharray", function(d,i){
								if(i % 2 == 0){
								var dash = ("3, 3")
									return dash
					} else{
				
					}
					})
					.attr("stroke-width", function(d,i){    ///////set up different attributes to select bars before calling the lines
							if(i % 2 == 0){
								var strokewidth = 0.1
								return strokewidth
					} else{
								var strokewidth = 2.5
								return strokewidth
					}
					})
				
					.attr("marker-end", function(d,i){    ///arrows on every second bar
							if(i % 2 == 0){
								var marker = 0
					} else{
								var marker = "url(#arrow)"
								return marker   
					}
					})
					
		
					.attr('x1', function(d,i) {
								if(i % 2 == 0){
										var start = 0
										return start
							} else{
										// var width = xScale5(d.year18-d.year15)
										var start = xScale5(d.year15)    ////////\\\\\\\\\
										return start
							}
							})
					
						.attr('y1', (d, i) => {   /////change line spacing
							if(i % 2 == 0){ 				/////group bars into twos
								return i *35;
					} else{
								return i *35-12;
					}
					})
						.attr('x2', function(d,i) { 
						var linestart = xScale5(d.year15)
						var lineend = xScale5(d.year18)
							if(i % 2 == 0){
								var linedouble = linestart
								return linedouble 
						} else  {
						    var linedouble = lineend 
						    return linedouble
					}
					})
					
					.attr('y2', (d, i) => {  ////change spacing of lines
							if(i % 2 == 0){
								return i *35;
					} else{
								return i *35-12;
					}
					})
					
					
					
		////////THIS WORKS TO RETURN DIFFERENCE IN LINE LENGTHS BUT STARTS AT 0 not at the end of d.year15
		//////need different start - see width attribute below
		
					// .attr('x2', function(d,i) { 
					// 	var linestart = xScale5(d.year15)
					
					// 	var lineend = xScale5(d.yearline-d.year15)
					// 		if(i % 2 == 0){
					// 			var linedouble = linestart
					// 			return linedouble 
					// 	} else  {
					// 	    var linedouble = lineend 
					// 	    return linedouble
					// }
					// })
					
				
					
					
				
					
		// 			 .attrTween('d', pathTween)

  // function pathTween() {
  //   var interpolate = d3.scaleQuantile()
  //     .domain([0, 1])
  //     .range(d3.range(1, data.length + 1));
  //   return function (t) {
  //     return line(data.slice(0, interpolate(t)));
  //   }
  // }
					

				
	//////add arrows  https://codepen.io/zxhfighter/pen/wWKqqX
let linearrows = g.append("svg:defs").selectAll("marker")
							    .data(["arrow"])   
							    .data(data)
							  .enter().append("svg:marker")   
							    .attr("id", "arrow")
							    .attr("viewBox", "0 -5 10 10")
							    .attr("refX", 15)
							    .attr("refY", 0)
							    .attr("markerWidth", 4.5)
							    .attr("markerHeight", 4.5)
							    // .attr("orient", "auto")
							    .attr("orient", function(data,i){    ///arrows on every second bar
										console.log(data)
										if(i == 1){
												var direction = "auto" 
												return direction
										} else{
													var direction = "auto-start-reverse"   ////change arrow orientation
													return direction   
										}
										})
							  .append("svg:path")
							    .attr("d", "M0,-5L10,0L0,5")
							    .attr("fill", function(d,i){    ///////color negative arrow differently
											if(i == 1){
												var arrowneg = "red"
												return arrowneg
										} else{
													var arrowneg = "purple"
													return arrowneg
										}
									})
									
									
									
	////draw 2018 SECOND bar drawing from end of 2015 - end of 2018
					// .attr("stroke", "purple")
					// .attr('x1', function(d,i) {       //////group bars into twos
					// 	// return xScale5(d.yearline);  ////change start for showing change  // x1 ////look at svg element line x1 y1 x2 y2
					// 	return xScale5(d.year15);												/////start at 0 for regular bars this works
					// })
					// 	.attr('y1', (d, i) => {   /////try changing line spacing
					// 		if(i % 2 == 0){
					// 			// return i *35;
					// } else{
					// 			return i *35-12;
					// }
					// })
				 //.attr('x2', function(d,i) { 
					// 	return xScale5(d.year18);  //// svg element line x1 y1 x2 y2
					// })
					// .attr('y2', (d, i) => {  ////change spacing of lines
					// 		if(i % 2 == 0){
					// 			// return i *35;
					// } else{
					// 			return i *35-12;
					// }
					// })
					// .attr("stroke", function(d,i){    ///////color negative bar differently
					// 		if(i  == 3){
					// 			var color = "red"
					// 				return color

					// } else{
					// 		var color = "pink"
					// 				return color
					// }
					// })
					// .attr('width', function(d,i) {  
					// 	return xScale5(d.yearline); 	// x1 2015 x2 2018  /// color positive negative
						
					// 	return xScale5(d.year15-d.year18); //////difference between years 15 and 18
					// })
					
					
					// .attr("width", function(d,i){    ///////set up different attributes to select bars before calling the lines
					// 		if(i % 2 == 0){
					// 			return xScale5(d.yearline);
						
					// } else{
					// 		return xScale5(d.year15-d.year18);  ///////draw from end of year 2015 to end of year 2018
							
					// }
					// })
					
///============================================
///////========repeat to do lines 2015 

// let bars2 = g.selectAll("line")
// 					.data(data)
// 					.enter()
// 					.append("g")
// 					.attr('class', 'barone')
			
		
// 	bars2.append("line")
// 					.attr("fill", "none")
// 					// .attr("stroke", "purple")
// 					// .attr("color", "blue")
// 					// .attr("fill", "orange")
// 					// .attr("fill", function(d,i){
// 					// if(i % 2 == 0){
// 					// 	var color = "LEMONCHIFFON"
						
// 					// 		return color
// 					// // bars1.attr("stroke", "sienna")
// 					// } else {
// 					// 	// bars1.attr("stroke", "gold")
// 					// 		var color = "saddlebrown"
// 					// 		return color
// 					// }
// 					// })
// 					// 	.attr('x1', function(d,i) { 
// 					// 	// return xScale5(d.yearline);  ////change start for showing change  // x1 ////look at svg element line x1 y1 x2 y2
// 					// 	return 0;												/////start at 0 for regular bars this works
// 					// })
// 						.attr("stroke", function(d,i){    ///////set up different attributes to select bars before calling the lines
// 							if(i % 2 == 0){
// 								var color = "white"
// 									return color
// 					} else{
// 							var color = "blue"
// 									return color
// 					}
// 					})
// 					.attr("stroke-width", function(d,i){    ///////set up different attributes to select bars before calling the lines
// 							if(i % 2 == 0){
// 								var width = 0.1
// 								return width
// 					} else{
// 								// var width = 2
// 								return 0
// 					}
// 					})
// 					.attr('x1', function(d,i) {       //////group bars into twos
// 						// return xScale5(d.yearline);  ////change start for showing change  // x1 ////look at svg element line x1 y1 x2 y2
// 						return 0;												/////start at 0 for regular bars this works
// 					})
// 						.attr('y1', (d, i) => {   /////try changing line spacing
// 							if(i % 2 == 0){
// 								return i *35;
// 					} else{
// 								// return i *35-12;
// 								return 0
// 					}
// 					})
// 				 .attr('x2', function(d,i) { 
// 						return xScale5(d.yearline);  //// svg element line x1 y1 x2 y2
// 					})
// 					.attr('y2', (d, i) => {  ////change spacing of lines
// 							if(i % 2 == 0){
// 								return i *35;
// 					} else{
// 								return 0
// 					}
// 					})
// 					// .attr('width', function(d,i) {  
// 					// 	return xScale5(d.yearline); 	// x1 2015 x2 2018  /// color positive negative
						
// 					// 	// return xScale5(d.year15-d.year18); //////difference between years 15 and 18
// 					// })
// 					// .attr("stroke-width", function(d,i){    ///////set up different attributes to select bars before calling the lines
// 					// 		if(i % 2 == 0){
// 					// 			var width = 0
// 					// 			return width
// 					// } else{
// 					// 			var width = 4
// 					// 			return width
// 					// }
// 					// })
					
	// ////draw 2018 SECOND bar drawing from end of 2015 - end of 2018
	// 				.attr("stroke", "purple")
	// 				.attr('x1', function(d,i) {       //////group bars into twos
	// 					// return xScale5(d.yearline);  ////change start for showing change  // x1 ////look at svg element line x1 y1 x2 y2
	// 					return xScale5(d.year15);												/////start at 0 for regular bars this works
	// 				})
	// 					.attr('y1', (d, i) => {   /////try changing line spacing
	// 						if(i % 2 == 0){
	// 							// return i *35;
	// 				} else{
	// 							return i *35-12;
	// 				}
	// 				})
	// 			 .attr('x2', function(d,i) { 
	// 					return xScale5(d.year18);  //// svg element line x1 y1 x2 y2
	// 				})
	// 				.attr('y2', (d, i) => {  ////change spacing of lines
	// 						if(i % 2 == 0){
	// 							// return i *35;
	// 				} else{
	// 							return i *35-12;
	// 				}
	// 				})
	// 				.attr("stroke", function(d,i){    ///////color negative bar differently
	// 						if(i  == 3){
	// 							var color = "red"
	// 								return color

	// 				} else{
	// 						var color = "pink"
	// 								return color
	// 				}
	// 				})
	// 				.attr('width', function(d,i) {  
	// 					return xScale5(d.yearline); 	// x1 2015 x2 2018  /// color positive negative
						
	// 					return xScale5(d.year15-d.year18); //////difference between years 15 and 18
	// 				})
					
					
	// 				.attr("width", function(d,i){    ///////set up different attributes to select bars before calling the lines
	// 						if(i % 2 == 0){
	// 							return xScale5(d.yearline);
						
	// 				} else{
	// 						return xScale5(d.year15-d.year18);  ///////draw from end of year 2015 to end of year 2018
							
	// 				}
	// 				})
	// 				.attr("marker-end", "url(#end)")
				
	//////add arrows
// let linearrows = g.append("svg:defs").selectAll("marker")
// 							    .data(["end"])      // Different link/path types can be defined here
// 							  .enter().append("svg:marker")    // This section adds in the arrows
// 							    .attr("id", String)
// 							    .attr("viewBox", "0 -5 10 10")
// 							    .attr("refX", 15)
// 							    .attr("refY", -1.5)
// 							    .attr("markerWidth", 3)
// 							    .attr("markerHeight", 3)
// 							    .attr("orient", "auto")
// 							  .append("svg:path")
// 							    .attr("d", "M0,-5L10,0L0,5")
// 							    .attr("fill", function(d,i){    ///////color negative bar differently
// 											if(i  == 3){
// 												var fill = "red"
// 													return fill
// 										} else{
// 														return "pink"
// 										}
// 									})
// 									.attr("transform","translate(0,-2)")				

///////notes with Felix about lines

// 			bars1.append("line")  /////note line
// 					.attr("fill", "none")
// 					.attr("stroke", "orange")
// 					.attr('x1', function(d,i) { 
// 						return xScale5(d.yearline);  ////change start  // x1 ////look at svg element line x1 y1 x2 y2
// 					})
// 					.attr('y1', (d, i) => { //// d is shorthand for element in the data and i is index
// 						return i *33;    // y1 y2
// 						// return line(d.year15) 
					
// 					})
					
// 					.attr('x2', function(d,i) { 
// 						return xScale5(d.yearline);  ////change start  // x1 ////look at svg element line x1 y1 x2 y2
// 					})
// 					.attr('y2', (d, i) => { //// d is shorthand for element in the data and i is index
// 						return i *33;    // y1 y2
// 						// return line(d.year15) 
					
// 					})
// 					// .attr('width', function(d,i) { 
// 					// 	return xScale5(d.year15); 	// x1 2015 x2 2018  /// color positive negative
						
// 					// 	return xScale5(d.year15-d.year18); 
// 					// })
// 					// .attr('height', 1) ///bar width
// 					// 	.on('mouseenter', (d,i,j) => {
// 					// 		console.log("hover")
// 					//   	title2.text(d.year15)
// 					//   	d3.select(j[i])
// 					//   	.style('fill', 'blue')
//     //         .style('opacity', '.5');
// 					// 	})
// 	        .on('mouseout', (d, i,j) => {
// 		            // console.log(d);
// 		            title2.text((d) => { return ""; });
// 		      	 d3.select(j[i])
// 					  	.style('fill', 'sienna')
// 					  	 .style('opacity', '1');
// 						})
// 	  ////////==============

///////////=================
	  // THIS GIVES BARS TOGETHER - CHANGING FROM BARS TO LINES parallel lines - above
	  
	// bars1.append("rect")
	// 				.attr("fill", "none")
	// 				// .attr("stroke", "none")
	// 				// .attr("fill", "orange")
	// 				.attr("fill", function(d,i){
	// 				if(i % 2 == 0){
	// 					var color = "LEMONCHIFFON"
						
	// 						return color
	// 				// bars1.attr("stroke", "sienna")
	// 				} else {
	// 					// bars1.attr("stroke", "gold")
	// 						var color = "saddlebrown"
	// 						return color
	// 				}
	// 				})
	// 				.attr('y', (d, i) => { //// d is shorthand for element in the data and i is index
	// 					return i *33;
	// 					// return line(d.percent) 
	// 				})
	// 				.attr('width', function(d,i) { 
	// 					return xScale5(d.yearline); 
	// 				})
	// 				.attr('height',2) ///bar width
	// 					.on('mouseenter', (d,i,j) => {
	// 						console.log("hover")
	// 						console.log(d.jobtype)
					  	
	// 				  	// headingpercent2.text(d.jobtype + ": " + d.yearline + "% " + d.raceethnicity)
	// 				  	d3.select(j[i])
	// 				  		.transition()	
 //               .delay(50)
 //               .duration(100)
	// 				  	// .style('fill', 'lightgrey')
 //             	.style('opacity', '1');
	// 					})
	//         .on('mouseout', (d, i,j) => {
	// 	            // console.log(d);
	// 	           //headingpercent2.text((d) => { return "curators & educators compared to museum leadership, including executive positions, & conservators"; });
	// 	      	 d3.select(j[i])
	// 	      			.transition()	
 //               .delay(500)
 //               .duration(2000)
	// 				  	// .style('fill', 'sienna')
	// 				  	 .style('opacity', '1');
	// 					})
						
			
////////============ circles at end of lines
		
	 bars1.append("circle")  ////first circles
  			.data(data)
			  // .attr("r", 5)
			  .attr("r", function(d,i) {
			  		if (i === 0){
							var size = 3;
							return size; 
						}  if (i === 2){
							var size = 2;
							return size; 
			  		}  if (i == 4){
							var size = 2;
							return size; 
						}  if (i == 6){
								var size = 2;
								return size; 
						} if (i == 8){
								var size = 2;
								return size;
						} if (i == 10){
								var size = 2;
								return size;
						} else {
							var size = 7
							return size;
						}
					  })
					  .attr("fill", function(d,i) { 
								if (i === 1){
									var color = "red";
									return color; 
								}  else {
									// var color = "#11593b"
									var color = "DARKSEAGREEN"
									return color;
								}
					  })
						.attr('cy', (d, i) => {   /////changeline spacing
							if(i % 2 == 0){
								return i *35;
							} else{
										return i *35-12;
							}
							})
						.attr('cx', function(d,i) { 
								return xScale5(d.yearline);  ////change start  // x1 ////look at svg element line x1 y1 x2 y2
							})
				
				
	////////////
	
	 bars1.append("circle")  ////second circles at end of second 2015
  			.data(data)
			  // .attr("r", 5)
			  .attr("r", function(d,i) {
			  		if (i === 1){
							var size = 0;
							return size; 
						}  if (i === 3){
							var size = 2;
							return size; 
			  		}  if (i == 5){
							var size = 2;
							return size; 
						}  if (i == 7){
								var size = 0;
								return size; 
						} if (i == 9){
								var size = 2;
								return size;
						} if (i == 11){
								var size = 2;
								return size;
						} else {
							var size = 0
							return size;
						}
					  })
					  .attr("fill", function(d,i) { 
								// if (i === 1){
								// 	// var color = "red";
								// 	// return color; 
								// }  else {
								// 	// var color = "#11593b"
									var color = "DARKSEAGREEN"
									return color;
								// }
					  })
						.attr('cy', (d, i) => {   /////changeline spacing
							if(i % 2 == 0){
								return i *35;
							} else{
										return i *35-12;
							}
							})
						.attr('cx', function(d,i) { 
								// return xScale5(d.yearline);  ////change start  // x1 ////look at svg element line x1 y1 x2 y2
								return xScale5(d.year15)
							})
				
				
			  // .on('mouseenter', (d,i,j) => {
					// 			console.log("hover")
					// 			console.log(d.jobtype)
					// 	  	heading2.text("2015 -> 2018: " + " " + d.raceethnicity + ": " + d.year15 + " total hires -> " + d.year18)
					//   	d3.select(j[i])
					//   	// .style('fill', 'lightgrey')
	    //           .style('opacity', '1');
					// 		})
	    //     .on('mouseout', (d, i,j) => {
		   //         // console.log(d);
		   //        heading2.text((d) => { return "curators, educators, museum leadership, including executive positions, conservators"; });
		   //   	 d3.select(j[i])
		   //   			.transition()	
     //           .delay(500)
     //           .duration(2000)
					//   	// .style('fill', 'sienna')
					//   	.style("font-size", "0.98em")
					//   	 .style('opacity', '1');
					// 	})

	

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
var numlabel =	bars1.append('text')
					.text((d,i) => {
						// return d.yearline;
							if(i % 2 == 0){
								return d.yearline;
							} else if (i === 1){
								return (d.yearline  + " ..... " + d.percentdifference + "% ");
							} else{
									return (d.yearline  + " ..... +" + d.percentdifference + "% ");
							}
					})
					.attr('y', (d, i) => {   /////try changing line spacing
							if(i % 2 == 0){
								return i *35;
							} else{
										return i *35-12;
							}
							})
					.attr('x', function(d,i) { 
							// return xScale5(d.yearline);
							if(i=== 1){
								return xScale5(d.yearline)+12;
							} else if(i % 2 == 0) {
										return xScale5(d.yearline)-12;
							} else  {
									return xScale5(d.yearline)
							}
						})
					.style("font-size", "0.85em")
					.style('fill', '#f5fcf7') ///////numbers on top of bars
					.attr("text-anchor", "start")
				  .attr("transform", "translate(20, 4)")
			
					
//////label text for each bar
	bars1.append('text')
					.data(data)
						.attr("class", "numlabel")
						.attr("text-anchor", "bottom")
						.attr("text-anchor","end")
						.text((d, i) => {
							// return d.raceethnicity;
							if(i % 2 == 0){
									return ""
								} else{
									return d.raceethnicity;
								}
						})
						.attr("x", -margin.left/2)
						.attr('y', (d, i) => {   /////change line spacing
								if(i % 2 == 0){
									return i *35;
								} else{
									return i *35-12;
								}
						})
						.attr("transform", `translate(${margin.left/2.1}, -5)`)
						// .style("font-family", "sans-serif")
						.style("font-size", "80%")
						.style("fill", "white")
						.attr("text-anchor", "end")
						.attr("transform", (d, i) => { 
								let a = -56;
                // let x = i *35;
                // let x =  -margin.top*2;
                let x =  -margin.left/3;  ////height
                let y = i *35 - margin.left/1.75;  ///width
                return `rotate(${a}, ${x}, ${y})`;
						})
				


// ////  axis 
	let yAxis = g.append('g') // just append axis to global space
					.attr("class", "axisside3")
					.style('stroke', 'darkslategrey')
					.attr('stroke-width', 0.3)
					// .attr("transform", `translate(0, ${-margin.top/3} )`)						
					.attr("transform", `translate(0, ${-margin.top/1.4} )`)
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
					.attr('y', -margin.top/0.35)
					.attr('font-size', '1.6em');
					
		 let titleend = g.append('text')
					.text('Percent Changes in Staff Numbers Years 2015 and 2018 By Race and Ethnicity')
		 			.style("fill", "white")
					.attr('x', 0)
					.attr('y', -margin.top/0.44)
					.attr('font-size', '1.2em')
					.style('font-weight', 600);
					
		let titleend2 = g.append('text')
					.text('Excluding White non-Hispanic Staff')
		 			.style("fill", "white")
					.attr('x', 0)
					.attr('y', -margin.top/0.56)
					.attr('font-size', '1.2em')
					.style('font-weight', 600);
					
			let heading2 = g.append('text')
					// .text('excluding white,')
					.attr("class", "intelhead")
					.text('Intellectual Positions: Curators, Educators, Museum Leadership, including Executive Positions, Conservators')
					.attr('x', 5)
					.attr('y', height/1.3)
					.attr('font-size', '1.05em')
					.style("fill", "#f5f9f4");

			let title2 = g.append('text')
					.text('Data and Graph from Art Museum Staff Demographic Survey 2018 Report')
					.attr('x', 0)
					.attr('y', -margin.top/0.9)
					.attr('font-size', '1.2em')
					.style("fill", "#f5f9f4");

/////==================

 // .style("opacity", function(d,i) { 
					// 	if (i == 0){
					// 		var opacity = 1;
					// 		return opacity; 
					// 	}  if (i == 2){
					// 		var opacity = 1;
					// 		return opacity; 
			  // 		}  if (i == 4){
					// 		var opacity = 1;
					// 		return opacity; 
					// 	}  if (i == 6){
					// 			var opacity = 1;
					// 			return opacity; 
					// 	} else {
					// 		var opacity = 1
					// 		return opacity;
					// 	}
			  // })
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
					
			  // position the circles right where the path elements end
			  // .attr('cy', (d, i) => { //// d is shorthand for element in the data and i is index
					// 	return i * 33;
					// })
			  // .attr('cx', (d,i) => { 
			  // 	return  xScale5(d.yearline); 
			  // })
///////////taken THIS OFF FOR THE MOMENT
///////2018 parallel lines 
////National Art Museum Staff Survey Intellectual Leadership Positions 
////by number
// var n = 6;

// 				// for horizontal
				
// 				let xScale3 = d3.scaleLinear()
// 					.domain([0, 305+10])
// 					.range([0, width]);

// 				let yScale3 = d3.scaleLinear()
// 					.domain([0, 305]) 
// 					.range([height, 0]);
					
// 					/////bars ascending
// 				// let ySc = d3.scaleLinear()
// 				// 	.domain([0, 220]) ////using just the numbers here
// 				// 	.range([height, 0]);
// // var line = d3.line()

// 		let bars3 = g.selectAll("rect")
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
// 						return xScale5(d.year18); 
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
// 			  .attr("r", 4)
// 			  .attr("fill", "#11593b")
// 			  // .attr("fill", function(d,i) { 
// 					// 	if(i == 0){
// 					// 		var color = "lightgoldenrodyellow";
// 					// 		return color; 
// 					// 	} else if(i == 1) {
// 					// 		var color = "darkcyan";
// 					// 		return color; 							
// 					// 	} else if(i == 2){
// 					// 		var color = "pink";
// 					// 		return color;							
// 					// 	} else if (i == 3){
// 					// 		var color = "purple";
// 					// 		return color;								
// 					// 	} else if (i == 4){
// 					// 		var color = "turquoise";
// 					// 		return color;								
// 					// 	} else {
// 					// 		var color = "gold";
// 					// 		return color;								
// 					// 	}
// 					// })
// 					.style("opacity", 0.65)
// 				  // position the circles right where the path elements end
// 				  .attr('cy', (d, i) => { 
// 							return i * 33;
// 						})
// 				  .attr('cx', (d,i) => { 
// 				  	return  xScale5(d.yearline); 
// 				  })
// 					.on('mouseenter', (d,i,j) => {
// 								console.log("hover")
// 								console.log(d.jobtype)
// 						  	heading2.text("2015 -> 2018: " + " " + d.raceethnicity + ": " + d.yearline + " total hires -> " + d.yearline)
// 					  	d3.select(j[i])
// 					  	// .style('fill', 'lightgrey')
// 	              .style('opacity', '1');
// 							})
// 	        .on('mouseout', (d, i,j) => {
// 		            // console.log(d);
// 		           heading2.text((d) => { return "curators, educators, museum leadership, including executive positions, conservators"; });
// 		      	 d3.select(j[i])
// 		      			.transition()	
//                 .delay(500)
//                 .duration(2000)
// 					  	// .style('fill', 'sienna')
// 					  	.style("font-size", "0.98em")
// 					  	 .style('opacity', '1');
// 						})

// 			// /////add transparent rect on top so can select bars more easily
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
// var numlabel = bars3.append('text')
// 					.text((d,i) => {
// 						return d.yearline;
// 					})
// 					.attr('y', (d, i) => { //// d is shorthand for element in the data and i is index
// 						return i * 33;
// 					})
// 					.attr('x', (d, i) => { return  xScale5(d.yearline); })
// 					// .attr('transform', (d) => { return 'translate(' + 20 + ', ' + (500 - yScale(d) ); });
// 					.style("font-size", "90%")
// 					.style('fill', '#f5fcf7') ///////numbers on top of bars
// 					.attr("text-anchor", "middle")
// 					.attr("transform", "translate(30, 4)")
// 					.attr('height', 3.3) ///bar width
						
	        	

// 			//////label text for each bar
// 			bars3.append('text')
// 					.data(data)
// 					.attr("class", "numlabel")
// 					.attr("text-anchor", "bottom")
// 					.attr("text-anchor", "end")
// 					.text((d, i) => {
// 						return d.raceethnicity;
// 					})
// 					.attr("x", -margin.left/2)
// 					.attr('y', (d, i) => { //// d is shorthand for element in the data and i is index
// 						return i * 33;
// 					})
// 					// .attr("x", margin.left/10)
// 					.attr("transform", `translate(${margin.left/2.1}, 2)`)
// 					// .style("font-family", "sans-serif")
// 					.style("font-size", "80%")
// 					.style("fill", "white")
// // 					.style('fill', 'dark grey') 
				

// // 				////  numbers on the axis 
// 		let yaxisside3 = g.append('g') // just append axis to global space
// 					.attr("class", "axisside3")
// 					.style('stroke', 'darkslategrey')
// 					.attr('stroke-width', 0.3)
// 					// .attr("transform", `translate(0, ${-margin.top/0.9} )`)
// 						.attr("transform", `translate(0, ${margin.top/200} )`)
// 					.call(d3.axisLeft(yScale5) //call axisLeft to use yScale for axis ticks and scale
// 						.tickSize(0)
// 						.ticks(0)
// 						.tickFormat("") ////empty no text
// 					)
// 					.selectAll("text")
// 					.attr("transform", "rotate(-65)")
// 					.attr("text-anchor", "end");

// 		// let xaxisside3 = g2.append("g")
// 		// 			.attr("class", "axisside3")
// 		// 			.style('stroke', 'darkslategrey')
// 		// 			.attr("opacity", 0.2)
// 		// 			.style('stroke-width', 0.1)
// 		// 			.attr("transform", `translate(0, ${height-margin.bottom/4} )`)
// 		// 			.call(d3.axisBottom(xScale5)
// 		// 				////above move the axis to place that the chart ends - within the margins
// 		// 				.tickSize(3)
// 		// 				.ticks(5)
// 		// 				// .tickFormat.style('stroke', 'darkslategrey').style('stroke-width', 0.3)
// 		// 			);


// 			let heading3 = g.append('text')
// 					// .text('National Art Museum Staff Survey Intellectual Leadership Positions, Total Hires')
// 					.text('National Art Museum Staff Survey Intellectual Leadership Positions')
// 					.attr('x', -margin.left)
// 					.style("fill", "white")
// 					// .attr('y', height+margin.top+margin.top/0.5)
// 					.attr('y', height+margin.top+margin.top/0.35)
// 					.attr('font-size', '100%');

// 			let title3 = g.append('text')
// 					.text('2018')
// 					.style("fill", "white")
// 					.attr('x', -margin.left/3.9)
// 					.attr('y', -margin.bottom/2.5)
// 					.attr('font-size', '1.9em');
	
					
// 			let heading23 = g.append('text')
// 					.text('Number of total hires, excluding white, non-Hispanic. Repeat survey participants')
// 					.style("fill", "white")
// 					.attr('x', 0)
// 					.attr('y', height+margin.bottom/3.2)
// 					.attr('font-size', '1em');

// 			let title23 = g.append('text')
// 					// .text('excluding white, non-Hispanic')
// 					.style("fill", "white")
// 					.attr('x', -margin.left/1.44)
// 					.attr('y', height+margin.top/0.5)
// 					.attr('font-size', '0.9em');

	};					
///////=======

///////2015 Hispanic / non-Hispanic parallel lines
// var n = 2;

// 				// for horizontal
				
// 				let xScale1 = d3.scaleLinear()
// 					.domain([0, 305+5])
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
					
///////////======					




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

