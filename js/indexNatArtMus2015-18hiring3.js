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
			
////draw percentage lines, color every 2 bars differently

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
								var color = "GOLDENROD"
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

////vertical line to show national percentage

let natpercentage = bars1.append("line")
// let natpercentage = g.append("line")
							.attr("fill", "none")
							.attr("stroke", "#f5f4f9")
							.attr("opacity", 0.9)
							// .style("stroke-dasharray", 3,3)
							.attr("stroke-width", 0.2)
							.attr('x1', function(d,i) {
												return xScale(68);
									})
							.attr('x2', function(d,i) {
												return xScale(68);
									})
							.attr('y1', height/2)
							.attr('y2', height*1.7)
							
////line to label vertical percent

let natpercentlabel =	g.append("path")
						.data(data)
							.attr("fill", "none")
							.attr("stroke", "#f5f4f9")
							.attr("opacity", 0.9)
							.attr("stroke-width", 0.3)
							
							.attr("d", "M "+xScale(68)+ ",100, L 520,50 L 670,50 ")  ////////can I change these to scales? or do I use margin.left etc?
							
							// .attr('M', function(d,i) {
							// 					return xScale(68);
							// 		})
							// .attr('x2', function(d,i) {
							// 					return xScale(68);
							// 		})
							// .attr('y1', height/8)
							// .attr('y2', height*1.7)
					
				g.append("text")   ////text on line label
						.text('67% white, total U.S. population, 2010 U.S. Census')
						.style("fill", "#f5f4f9")
						.attr('font-size', '0.8em')
						.attr('x', 525)
						.attr('y', 45)
					
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
							var color = "CHOCOLATE";
							return color; 
						} else {
							var color = "CHOCOLATE";
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
					.text('Data: Art Museum Staff Demographic Survey 2018, Westermann, M., Sweeney, L., & Schonfeld, R. C. (January 2019)')
					.attr('x', -margin.left/25)
					.attr('y', -margin.top/1.61)
					.style("fill", "#f5f4f9")
					.attr('font-size', '0.95em');
					
};
