///NEA audience art museum attendance data 2012-17 subgroup by race and ethnicity
////tooltips
             
            // d3.json("SPPA_NEA_2017UStrends2012-17_edpopmusraceeth.json").then((data) => {
            //                     svgPlot24(data);
            //         });
                    
            d3.json("data/NEA2012_2017audienceraceethlines.json").then((data) => {
                                 svgPlot24(data);
                    });
                //  console.log(data);
            
            
            let svgPlot24 = (data) => { ////need to call a different svgPlot 
                console.log(data); ////with each chart for multiple charts
                
        	var margin = {top: 95, right: 130, bottom: 90, left: 50}; ////this works outside the svgPlot
	
	var width = 780 - margin.left - margin.right; // specify the width and give space around the chart
	var height = 550 - margin.top - margin.bottom; // specify the width and give space around the chart
	console.log(margin.top)
 
	
			var svg = d3.select('#svg24')		  
                .append('svg')  ////then append an svg 
                    .attr("width", width + margin.left + margin.right) ///attribute width is width(above) with the margins back on
        			.attr("height", height + margin.top + margin.bottom)
            
             var g = svg.append('g')    ////then append to global g - so now the div svg is appended
             ///note for multiple svgs you need a new g variable so you'd have g1, g2, etc

            	.attr("transform", "translate(" + margin.left/1.3 + "," + margin.top*1.2 + ")");
        ////the above transform moves the whole chart away from the left and top of the browser
                
// to get paired lines for 2012-2017///make new array with just the SAME two numbers 
          	const museum12 = data[0].percent[0]
          	console.log(museum12)
          	
        	  const museum17 = data[0].percent[1]
          	console.log(museum17)
let lines1 = [museum12, museum17];


          	const museu12 = data[1].percent[0]
          	console.log(museu12)
          	
        	  const museu17 = data[1].percent[1]
          	console.log(museu17)
let lines2 = [museu12, museu17];

          	const muse12 = data[2].percent[0]
          	console.log(muse12)
          	
        	  const muse17 = data[2].percent[1]
          	console.log(muse17)
let lines3 = [muse12, muse17];

          	const mus12 = data[3].percent[0]
          	console.log(mus12)
          	
        	  const mus17 = data[3].percent[1]
          	console.log(mus17)
let lines4 = [mus12, mus17];

          	const mu12 = data[4].percent[0]
          	console.log(mu12)
          	
        	  const mu17 = data[4].percent[1]
          	console.log(mu17)
let lines5 = [mu12, mu17];          	

		        const m12 = data[5].percent[0]
          	console.log(m12)
          	
        	  const m17 = data[5].percent[1]
          	console.log(museum17)
let linesall = [museum12, m17];

console.log(lines1, lines2, lines3, lines4, lines5, linesall);

// // The number of datapoints for paired lines
	var n = 2;
// //////

var xScale = d3.scaleLinear()
				.domain([0, n-1])
				.range([0, width]); ////note don't add margins here
                

// console.log(max)
var yScale = d3.scaleLinear()
				.domain([0, 26.7+5]) ///to give axis height 100% 
				.range([height, 0]);  ////note don't add margins here
                
// console.log(data[0].percent[0])
 
var line = d3.line()
	.x(function(d,i) { // to use “i” in xScale 
					   // you have to list d first and then i and separate by comma
		console.log(xScale(i));
		return xScale(i);
	})
	.y(function(d, i) { 
		return yScale(d);
	});
	
	
// var area = d3.area()  //////can use this twice just call in each of the 2 lines
// 	.x(function(d,i) { // to use “i” in xScale 
// 					   // you have to list d first and then i and separate by comma
// 		console.log(xScale(i))
// 		return xScale(i); 
// 	})
// 	.y1(function(d, i) { 
// 		return yScale(d);
// 	})
// 	.y0(yScale(0));
	

// // // 9. Append the path, bind the data, and call the line generator - Example
// // svg.append("path")
// //     .datum(dataset) // 10. Binds data to the line 
// //     .attr("class", "line") // Assign a class for styling 
// //     .attr("d", line); // 11. Calls the line generator 
    
// ///////\\\\\\\\\\\\\\\showing one line only

/////blue line Hispanic
////tooltip
// let div = d3.select("#svg24").append("div")
//     .append('g')
let div1 = d3.select("g").append("div")
    .attr("class", "tooltip") ////best to use #tooltip div for styling
    .style("opacity", 0)
    .style("display", "none");

  function mouseover() {
    div.style("display", "inline");
  }
  
let line1 = g.append("path")
    			.datum(lines1)
    			// .attr("class", "line") // Assign a class for styling
    			.attr('d', (d,i)=> {
    				// return line(d,i)    ////\\here add function in the line generator 
    				console.log(d,i)
    				return line(d,i)
    			})
    			.attr('stroke', 'turquoise')
    			.attr('stroke-width', 1)
    			 //  .on("mouseover", function(d,i) {
        // d3.select(this) 
        //   line1.append('text')
        //       .style("color", "turquoise")
        //       .style('font-size', "100%")
   
        //   var _x = (d3.mouse(this)[0]);
        //   var _y = (d3.mouse(this)[1]);
       
        // d3.select("#tooltipline1")  //Update the tooltip position and value
          
        //   .style("left", (_x + margin.right*1.3 ) + "px")
        //   .style("top", (_y + margin.top/1.1 ) + "px")
            
        //   .text(`Hispanic: 14.3% 2012, 16.2% 2017`)
          
        //   d3.select("#tooltipline1").classed("hidden", false);  //Show the tooltip
        //   // d3.select("#tooltipline1").style("opacity", 1);
        // })
        //   .on("mouseout", function () {
                      
        //     d3.select(this)
        //             .transition()
        //             .delay(50)
        //             .duration(70)
        //               .style("fill", "")
        //     d3.select("#tooltipline1").classed("hidden", true)
        //           // d3.select("#tooltipline1").style("opacity", 0) 
        //   });
 
 let line1transparent = g.append("path")
    			.datum(lines1)
    			.attr("class", "tooltip") // Assign a class for styling
    			.attr('d', (d,i)=> {
    				// return line(d,i)    ////\\here add function in the line generator 
    				console.log(d,i)
    				return line(d,i)
    			})
    			.attr('stroke', '#737997')
    		  .attr("opacity", 0)
    			.attr('stroke-width', 15)
    			   .on("mouseover", function(d,i) {
        d3.select(this) 
          line1.append('text')
              // .style("color", "turquoise")
              // .style('font-size', "100%")
   
          var _x = (d3.mouse(this)[0]);
          var _y = (d3.mouse(this)[1]);
       
        d3.select("#tooltipline1")  //Update the tooltip position and value
          
          .style("left", (_x  ) + "px")
          .style("top", (_y +margin.top*1.1 ) + "px")
            
          .text(`Hispanic: 14.3% 2012, 16.2% 2017`)
          
          // d3.select("#tooltipline1").classed("hidden", false);  //Show the tooltip
          d3.select("#tooltipline1").style("opacity", 1);
        })
          .on("mouseout", function () {
                      
            d3.select(this)
                    .transition()
                    .delay(20)
                    .duration(70)
                      .style("fill", "")
            // d3.select("#tooltipline1").classed("hidden", true)
                  d3.select("#tooltipline1").style("opacity", 0) 
          });
    
      // line1.append("text")
      //       .text(`Hispanic: 14.3% 2012, 16.2% 2017`)
      //       .attr("class", "textline1")
          //   // .attr("x", lines1 => xScale(d[0]) + 5)
          //   console.log(d)
          //   .attr("x", function(d,i) { return xScale(i) + 5})
          //   .attr("y", function(d,i) {  yScale(d) - 10})
          //   // .attr("x", d => { 
          //   //   return xScale(d[0]) + 1;
          //   // })
          //   // // .attr("y", d => yScale(d[1]) - 10)
          //   // .attr("y", d => { 
          //   //   return yScale(d[1]) + 1; })
        //   })
        // .on("mouseout", function(d) {
        //     d3.select(this)
        //       .style("cursor", "none")  
        //       .transition()
        //       .duration(250)
        //       .selectAll(".text").remove();
        //       })
                    
    			
    				// .on('mouseenter', function(d){
        //                 console.log('hover');
        //                 console.log(d)
        //                 d3.select(this)
        //                     .transition()
				   	// 	    .duration(100)
				   	// 	   // NEED TO CHANGE THIS TEXT
        //                 attr.subhead3.text('art museum audience 2012: '+ d[0] + '% of US adult population; art museum audience 2017: ' + d[1] + '%')
    				// })
        //         .on('mouseout', function(d) {
        //         		console.log(d)
        //         		d3.select(this)
        //         		    .transition()
        //         		    .ease(Math.sqrt)
        //         		    .delay(1000)
				   	// 	    .duration(1000)
        //                 // ytext2.text(d[0]  + ' art museum audience 2012: 21% of US adult population; '+ d[1] + ' art museum audience 2017: 23.7%')
        //                 .attr.subhead3.text('Percent change for each')
        //             });
                     
			   		
 ////just the area below the line
// let line1area = g.append("path")
//     			.datum(data.percent)
//     			.attr('fill', 'purple')
//     //         	.attr('d', area(museumaudience))     
// 				// .attr("fill", "pink")
// 					.on('mouseenter', function(d){
//                         console.log('hover');
//                         console.log(d)
//                         ytext2.text('art museum audience 2012: '+ d[0] + '% of US adult population; art museum audience 2017: ' + d[1] + '%')
//     				})
//                 .on('mouseout', function(d) {
//                 		console.log(d)
//                         // ytext2.text(d[0]  + ' art museum audience 2012: 21% of US adult population; '+ d[1] + ' art museum audience 2017: 23.7%')
//                         ytext2.text('museum audience 2012-2017: 57.5 million adults')
//                         // .attr("class", "line"); 
//                     });
   
  // "white",  [24.1, 26.7]
let line2 = g.append("path")
    			.datum(lines2)
    			// .attr("class", "line") // Assign a class for styling
    			.attr('d', (d,i)=> {
    				// return line(d,i)    ////\\here add function in the line generator 
    				// console.log(d,i)
    				return line(d,i)
    			})
    			.attr('stroke', '#a5e2ff')
    			.attr('stroke-width', 1)
    // 				 .on("mouseover", function(d,i) {
    //       d3.select(this) 
         
    //     line2.append('text')
    //         .style("color", "#ffffff")
    //         .style('font-size', "100%")
    //   // var xPosition = parseFloat(d3.select(this).attr("xScale"))
    //   // var yPosition = parseFloat(d3.select(this).attr("yScale"))
    //     var _x2 = (d3.mouse(this)[0]);
    //     var _y2 = (d3.mouse(this)[1]);
   
      
    //   d3.select("#tooltipline2")  //Update the tooltip position and value
    //     .style("left", (_x2 + margin.right*1.3 ) + "px")
    //     .style("top", (_y2 + margin.top/1.1 ) + "px")
    //     // .select("#value")
    //     .text(`white: 24.1% 2012, 26.7% 2017`)
        
    //   d3.select("#tooltipline2").classed("hidden", false);  //Show the tooltip
    // })
    // .on("mouseout", function () {
    //   d3.select(this)
    //             .transition()	
    //             .delay(50)
    //             .duration(70)
    //               .style("fill", "")
    //   d3.select("#tooltipline2").classed("hidden", true)
              
    // });

 let line2transparent = g.append("path")
    			.datum(lines2)
    			.attr("class", "tooltip") // Assign a class for styling
    			.attr('d', (d,i)=> {
    				// return line(d,i)    ////\\here add function in the line generator 
    				console.log(d,i)
    				return line(d,i)
    			})
    			.attr('stroke', '#737997')
    		  .attr("opacity", 0)
    			.attr('stroke-width', 15)
    			   .on("mouseover", function(d,i) {
        d3.select(this) 
          line1.append('text')
              // .style("color", "turquoise")
              // .style('font-size', "100%")
   
          var _x = (d3.mouse(this)[0]);
          var _y = (d3.mouse(this)[1]);
       
        d3.select("#tooltipline2")  //Update the tooltip position and value
          
          .style("left", (_x  ) + "px")
          .style("top", (_y +margin.top*1.1 ) + "px")
            
          .text(`white: 24.1% 2012, 26.7% 2017`)
          
          // d3.select("#tooltipline2").classed("hidden", false);  //Show the tooltip
          d3.select("#tooltipline2").style("opacity", 1);
        })
          .on("mouseout", function () {
                      
            d3.select(this)
                    .transition()
                    .delay(20)
                    .duration(70)
                      .style("fill", "")
            // d3.select("#tooltipline2").classed("hidden", true)
                  d3.select("#tooltipline2").style("opacity", 0) 
          });   


// "African American",  [12, 17.1]
let line3 = g.append("path")
    			.datum(lines3)
    			// .attr("class", "line") // Assign a class for styling
    			.attr('d', (d,i)=> {
    				// return line(d,i)    ////\\here add function in the line generator 
    				// console.log(d,i)
    				return line(d,i)
    			})
    			.attr('stroke', '#dfbded')
    			.attr('stroke-width', 1)
    		// .on("mouseover", function(d,i) {
      //     		d3.select(this) 
        
         
      //       line3.append('text')
      //           .style("color", "#ffffff")
      //           .style('font-size', "100%")
      //     // var xPosition = parseFloat(d3.select(this).attr("xScale"))
      //     // var yPosition = parseFloat(d3.select(this).attr("yScale"))
          
      //   var _x3 = (d3.mouse(this)[0]);
      //   var _y3 = (d3.mouse(this)[1]);
          
      //     d3.select("#tooltipline3")  //Update the tooltip position and value
      //       .style("left", (_x3 + margin.right*1.3 ) + "px")
      //       .style("top", (_y3 + margin.top/1.1 ) + "px")
      //       // .select("#value")
      //       .text(`African American: 12% 2012, 17.1% 2017`)
            
      //     d3.select("#tooltipline3").classed("hidden", false);  //Show the tooltip
      //   })
      //   .on("mouseout", function () {
      //     d3.select(this).style("fill", "");
      //     d3.select("#tooltipline3").classed("hidden", true);
      //   });

let line3transparent = g.append("path")
    			.datum(lines3)
        			.attr("class", "tooltip") // Assign a class for styling
        			.attr('d', (d,i)=> {
        				// return line(d,i)    ////\\here add function in the line generator 
        				console.log(d,i)
        				return line(d,i)
        			})
        			.attr('stroke', '#737997')
        		  .attr("opacity", 0)
        			.attr('stroke-width', 15)
    			   .on("mouseover", function(d,i) {
          d3.select(this) 
            line1.append('text')
                // .style("color", "turquoise")
                // .style('font-size', "100%")
     
            var _x = (d3.mouse(this)[0]);
            var _y = (d3.mouse(this)[1]);
       
          d3.select("#tooltipline3")  //Update the tooltip position and value
            
              .style("left", (_x  ) + "px")
              .style("top", (_y +margin.top*1.1 ) + "px")
                
              .text(`African American: 12% 2012, 17.1% 2017`)
            
            // d3.select("#tooltipline3").classed("hidden", false);  //Show the tooltip
          d3.select("#tooltipline3").style("opacity", 1);
           })
          .on("mouseout", function () {
                      
           d3.select(this)
                    .transition()
                    .delay(20)
                    .duration(70)
                      .style("fill", "")
            // d3.select("#tooltipline3").classed("hidden", true)
                  d3.select("#tooltipline3").style("opacity", 0) 
          });   

    
// "Asian" [23, 26.2]                
let line4 = g.append("path")
    		.datum(lines4)
    			// .attr("class", "line") // Assign a class for styling
    			.attr('d', (d,i)=> {
    				// return line(d,i)    ////\\here add function in the line generator 
    				// console.log(d,i)
    				return line(d,i)
    			})
    			.attr('stroke', 'pink')
    			.attr('stroke-width', 1)
    				// .on("mouseover", function(d,i) {
        //   d3.select(this) 
         
        //     line4.append('text')
        //         .style("color", "#ffffff")
        //         .style('font-size', "100%")
        //   // var xPosition = parseFloat(d3.select(this).attr("xScale"))
        //   // var yPosition = parseFloat(d3.select(this).attr("yScale"))
       
        // var _x4 = (d3.mouse(this)[0]);
        // var _y4 = (d3.mouse(this)[1]);
          
        //   d3.select("#tooltipline4")  //Update the tooltip position and value
        //     .style("left", (_x4 + margin.right*1.3 ) + "px")
        //     .style("top", (_y4 + margin.top/1.1 ) + "px")
        //     // .select("#value")
        //     .text(`Asian: 23% 2012, 26.2% 2017`)
              
        //     d3.select("#tooltipline4").classed("hidden", false);  //Show the tooltip
        //   })
        //   .on("mouseout", function () {
        //     d3.select(this).style("fill", "");
        //     d3.select("#tooltipline4").classed("hidden", true);
        //   });
        
let line4transparent = g.append("path")
    			.datum(lines4)
      			.attr("class", "tooltip") // Assign a class for styling
      			.attr('d', (d,i)=> {
      				// return line(d,i)    ////\\here add function in the line generator 
      				console.log(d,i)
      				return line(d,i)
      			})
      			.attr('stroke', '#737997')
      		  .attr("opacity", 0)
      			.attr('stroke-width', 15)
    			 .on("mouseover", function(d,i) {
        d3.select(this) 
          line1.append('text')
              // .style("color", "turquoise")
              // .style('font-size', "100%")
   
          var _x = (d3.mouse(this)[0]);
          var _y = (d3.mouse(this)[1]);
       
         d3.select("#tooltipline4")  //Update the tooltip position and value
          
            .style("left", (_x  ) + "px")
            .style("top", (_y +margin.top*1.1 ) + "px")
              
            .text(`Asian: 23% 2012, 26.2% 2017`)
            
            // d3.select("#tooltipline4").classed("hidden", false);  //Show the tooltip
          d3.select("#tooltipline4").style("opacity", 1);
        })
          .on("mouseout", function () {
                      
            d3.select(this)
                    .transition()
                    .delay(20)
                    .duration(70)
                      .style("fill", "")
            // d3.select("#tooltipline4").classed("hidden", true)
            d3.select("#tooltipline4").style("opacity", 0) 
          });
    
 
// "Other",  [16.9, 22.1]       
let line5 = g.append("path")
    			.datum(lines5)
    			// .attr("class", "line") // Assign a class for styling
    			.attr('d', (d,i)=> {
    				// return line(d,i)    ////\\here add function in the line generator 
    				// console.log(d,i)
    				return line(d,i)
    			})
    			.attr('stroke', 'palegoldenrod')
    			.attr('stroke-width', 1)
        //     .on("mouseover", function(d,i) {
        //   d3.select(this) 
         
        //     line5.append('text')
        //         .style("color", "#ffffff")
        //         .style('font-size', "100%")
        //   // var xPosition = parseFloat(d3.select(this).attr("xScale"))
        //   // var yPosition = parseFloat(d3.select(this).attr("yScale"))
      
        // var _x5 = (d3.mouse(this)[0]);
        // var _y5 = (d3.mouse(this)[1]);
        
        //   d3.select("#tooltipline5")  //Update the tooltip position and value
        //     .style("left", (_x5 + margin.right*1.3 ) + "px")
        //     .style("top", (_y5 + margin.top/1.1 ) + "px")
        //     // .select("#value")
        //     .text(`other: 16.9% 2012, 22.1% 2017`)
              
        //     d3.select("#tooltipline5").classed("hidden", false);  //Show the tooltip
        //   })
        //   .on("mouseout", function () {
        //     d3.select(this).style("fill", "");
        //     d3.select("#tooltipline5").classed("hidden", true);
        //   });
  
let line5transparent = g.append("path")
    			.datum(lines5)
      			.attr("class", "tooltip") // Assign a class for styling
      			.attr('d', (d,i)=> {
      				// return line(d,i)    ////\\here add function in the line generator 
      				console.log(d,i)
      				return line(d,i)
      			})
      			.attr('stroke', '#737997')
      		  .attr("opacity", 0)
      			.attr('stroke-width', 15)
    			 .on("mouseover", function(d,i) {
        d3.select(this) 
          line1.append('text')
              // .style("color", "turquoise")
              // .style('font-size', "100%")
   
          var _x5 = (d3.mouse(this)[0]);
          var _y5 = (d3.mouse(this)[1]);
       
         d3.select("#tooltipline5")  //Update the tooltip position and value
          
            .style("left", (_x5  ) + "px")
            .style("top", (_y5 +margin.top*1.1 ) + "px")
              
            .text(`other: 16.9% 2012, 22.1% 2017`)
            
            // d3.select("#tooltipline5").classed("hidden", false);  //Show the tooltip
          d3.select("#tooltipline5").style("opacity", 1);
        })
          .on("mouseout", function () {
                      
            d3.select(this)
                    .transition()
                    .delay(20)
                    .duration(70)
                      .style("fill", "")
            // d3.select("#tooltipline5").classed("hidden", true)
            d3.select("#tooltipline5").style("opacity", 0) 
          });
    
  
	let line6 = g.append("path")
    			.datum(linesall)
    			// .attr("class", "line") // Assign a class for styling
    			.attr('d', (d,i)=> {
    				// return line(d,i)    ////\\here add function in the line generator 
    				// console.log(d,i)
    				return line(d,i)
    			})
    			.style('stroke', 'silver')
    		  .style("stroke-dasharray", "5,5,5")
    		  .attr("opacity", 0.9)
    			.attr('stroke-width', 1.5)
    		// 		 .on("mouseover", function(d,i) {	    
		    // d3.select(this) 
         
      //       line6.append('text')
      //           .style("color", "#ffffff")
      //           .style('font-size', "100%")
						// var _x6 = (d3.mouse(this)[0]);
      //   		 var _y6 = (d3.mouse(this)[1]);
        
      //     d3.select("#tooltipline5")  //Update the tooltip position and value
      //       .style("left", (_x6 + margin.right*1.3 ) + "px")
      //       .style("top", (_y6 + margin.top/1.1 ) + "px")
      //       // .select("#value")
      //       .text(`all: 21% 2012, 23.7% 2017`)
              
      //       d3.select("#tooltipline5").classed("hidden", false);  //Show the tooltip
      //     })
      //     .on("mouseout", function () {
      //       d3.select(this).style("fill", "");
      //       d3.select("#tooltipline5").classed("hidden", true);
      //     }); 

let line6transparent = g.append("path")
    			.datum(linesall)
      			.attr("class", "tooltip") // Assign a class for styling
      			.attr('d', (d,i)=> {
      				// return line(d,i)    ////\\here add function in the line generator 
      				console.log(d,i)
      				return line(d,i)
      			})
      			.attr('stroke', '#737997')
      		  .attr("opacity", 0)
      			.attr('stroke-width', 15)
    			 .on("mouseover", function(d,i) {
        d3.select(this) 
          line1.append('text')
              // .style("color", "turquoise")
              // .style('font-size', "100%")
   
          var _x6 = (d3.mouse(this)[0]);
          var _y6 = (d3.mouse(this)[1]);
       
         d3.select("#tooltipline6")  //Update the tooltip position and value
          
            .style("left", (_x6  ) + "px")
            .style("top", (_y6 +margin.top*1.1 ) + "px")
              
            .text(`all: 21% 2012, 23.7% 2017`)
            
            // d3.select("#tooltipline6").classed("hidden", false);  //Show the tooltip
          d3.select("#tooltipline6").style("opacity", 1);
        })
          .on("mouseout", function () {
                      
            d3.select(this)
                    .transition()
                    .delay(20)
                    .duration(70)
                      .style("fill", "")
            // d3.select("#tooltipline6").classed("hidden", true)
            d3.select("#tooltipline6").style("opacity", 0) 
          });
          
  
    let yAxis = g.append("g")  // just append axis to global space
        .attr("class", "yaxisnea3")
        .style('fill', 'none')
        .style('stroke', 'darkslategrey')
        .style("color",'darkslategrey')
        .style('stroke-width', 0.2)
        .style('font-size', "80%")
				.style("color", "#f5f4f9")
        .attr("transform", `translate(0.19 , 0 )`) 
        .call(d3.axisLeft(yScale) //call axisLeft to use yScale for axis ticks and scale
        	.tickSize(3)
            .ticks(5)
        );

    let yaxisRight = g.append("g")
        .attr("class", "yaxisnea3")
        .style('fill', 'none')
        .style('stroke', 'darkslategrey')
        .style("color",'darkslategrey')
        .style('stroke-width', 0.2)
        .style('font-size', "80%")
				.style("color", "#f5f4f9")
         .attr("transform", `translate(${width} , 0 )`)  //////move it to right hand side
        .call(d3.axisRight(yScale)///.above move the axis to place that the chart ends - within the margins
        	.tickSize(3)
        // 	.ticks("")
            .ticks(5)
        );
  
    // console.log(data[0].years[0])
    
     let xaxisbottom = g.append("g")
        .attr("class", "xaxisnea3")
        // .append('text')
        .style('fill', 'none')
        .style('stroke', 'darkslategrey')
        .style("color",'darkslategrey')
        .style('stroke-width', 0.32)
        .style('font-size', "80%")
			 .style("color", "#f5f4f9")
         .attr("transform", `translate(0, ${height} )`)  //////move it to right hand side
        .datum(lines1)
        .call(d3.axisBottom(xScale)///.above move the axis to place that the chart ends - within the margins
        	.tickSize(0)
        // 	.ticks("1")
        	.ticks("")
        // 	.tickPadding(10)
        //     .tickFormat(function(e,i) {
        //   console.log(data[0].years)
        //   var s = data[0].years[0];
        //   return   s + " ";
        // })
        );

 let chartxaxistick2 = g.append('g')
		.append('text')
//     		    .attr("class", "xaxisnea3")
                    .text('2017')
                    .attr('x', width-margin.left/4)
                    .attr('y', height*1.06)
                    .attr('font-size', '80%')
                    .style("color", "#f5f4f9")
                    .style("fill", "currentColor");
                    
let chartxaxistick1 = g.append('g')
		.append('text')
//     		    .attr("class", "xaxisnea3")
                    .text('2012')
                    .attr('x', -margin.left/6)
                    .attr('y', height*1.06)
                    .attr('font-size', '80%')
                    .style("color", "#f5f4f9")
                    .style("fill", "currentColor");
                    
let line1text = g.append('g')
	.append('text')
             .text('Hispanic')
              .attr('x', width*1.05)
              .attr('y', height/2)
              .attr('font-size', '80%')
              .style("color", "turquoise")
              .style("fill", "currentColor");

let line2text = g.append('g')
	.append('text')
             .text('white')
              .attr('x', width*1.05)
              .attr('y', height/6.7)
              .attr('font-size', '80%')
              .style("color", "#a5e2ff")
              .style("fill", "currentColor");

let line3text = g.append('g')
	.append('text')
             .text('African American')
              .attr('x', width*1.05)
              .attr('y', height/2.18)
              .attr('font-size', '80%')
              .style("color", "#dfbded")
              .style("fill", "currentColor");

let line4text = g.append('g')
	.append('text')
             .text('Asian')
              .attr('x', width*1.05)
              .attr('y', height/5.3)
              .attr('font-size', '80%')
              .style("color", "pink")
              .style("fill", "currentColor");
              
let line5text = g.append('g')
	.append('text')
             .text('other')
              .attr('x', width*1.05)
              .attr('y', height/3.3)
              .attr('font-size', '80%')
              .style("color", "PALEGOLDENROD")
              .style("fill", "currentColor");
							
let line6text = g.append('g')
	.append('text')
             .text('ALL')
              .attr('x', width*1.05)
              .attr('y', height/4)
              .attr('font-size', '100%')
              .style("font-weight", "bold")
              .style("color", "silver")
              .style("fill", "currentColor");
 
 let chart1 = g.append('g')
		.append('text')
    		    .attr("class", "audtext3")
                    .text('percent')
                    .attr('x', -margin.left*5.5)
                    // .attr('y', 0-margin.top/15)
                    .attr('y', width+margin.left)
                    .attr("transform", "rotate(-90)")
                    .attr('font-size', '90%');
                
                
 let heading = g.append('g')  //// append text to global
		.append('text')
    		    .attr("class", "audheading3")
                    .text('National Art Museum Audiences: 2012 - 2017')
                    .attr('x', margin.left/18)
                    .attr('y', 0-margin.top)
                    

  let subhead1 = g.append('g')
						.append('text')  /////to site text you can always do negative values to be outside the chart
                    .attr("class", "audsubhd3")
                    .text('Breaking Down the Audience Uptick in Museum Attendance by Race and Ethnicity')
                    .attr('x', margin.left/18)
                    .attr('y', 0-margin.top/1.5)
  
        
  let subhead2 = g.append('g')
					.append('text')  /////to site text you can always do negative values to be outside the chart
                    .attr("class", "audsubhead4")
                    .text('Hispanic, African American, other, all, Asian, white')
                    .attr('x', margin.left/18)
                    .attr('y', 0-margin.top/5)
		     						.style('font-size', '1.1em')
                    .style("color", "#f5f4f9")
                    .style("fill", "currentColor");
  
   let footnote1 = g.append('g')
							.append('text')  /////to site text you can always do negative values to be outside the chart
                    .attr("class", "audsubhead5")
                     .text('Data: ADP18-DemographicTables, SPPA 2017, Office of Research & Analysis, National Endowment for the Arts, Sept. 2018')
                    .attr('x', margin.left/18)
                    .attr('y', height+margin.top/1.5)
	 									.attr('font-size', '80%')
                    .style("color", "#f5f4f9")
                    .style("fill", "currentColor"); 
                    
  let footnote2 = g.append('g')
								.append('text')  /////to site text you can always do negative values to be outside the chart
                    .attr("class", "audsubhead5")
                    .text('Percent of U.S. adults visiting art museums/galleries by demographic subgroup: 2012, 2017')
                    .attr('x', margin.left/18)
                    .attr('y', height+margin.top/2.1)
                    .attr('font-size', '80%')
                    .style("color", "#f5f4f9")
                    .style("fill", "currentColor");

   }; 
