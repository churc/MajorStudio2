// DCLA race and ethnicity data for PERCENT
// grouped by race and ethnicity
// with percentDCLAcirclegrid2hor.html
// and styleDCLAcircle.css

// this is DCLA numbers:
//             d3.json("alljobtypes.json").then((data)=>{
//                 svgPlot(data);
//             });

// Here using PERCENT dcla jobtypes:

// d3.json("alljobtypesperct.json").then((data) => {
//     svgPlot21(data);
// });

////Dataset = PERCENT = race and ethnicity by job type at museums with 
// larger budgets over $999999 - these percents do not include volunteers 
// except for board job type

d3.json("allracejobtypespercordered.json").then((data) => {
    svgPlot21(data);
});

/////try bringing in data and working with it to get volunteers
// d3.json("racebyjobtype.json").then((data) => {
//   dataWrangling(data);
//   // svgPlot21(data); // called later in the dateWrangling function
// });

// // ---------------------------- Data ----------------------------
// // const dataWrangling = (data) => {
// //   // ----- racebyjobtype -----
// //   console.log(data.length);
  



// // ////=====how to filter out volunteers  
// // var data1 = data.filter((e) => {
// //         	  console.log(e.JOBTYPE)
// //         	 if (e.JOBTYPE !== "2" && e.VOLUNTEER == "2") {
// //               return e;
// //           }
// //             else {
// //             return (e.JOBTYPE == "2")
// //             }
// //         })
// //         console.log(data1)


// //   let reformattedData = data1;
// //   svgPlot21(reformattedData);
  
// // }


let svgPlot21 = (data) => { ////need to call a different svgPlot 
    console.log(data); ////with each chart for multiple charts
    
    
    // var data1 = data.filter((e) => {
    //     	  console.log(e.JOBTYPE)
    //     	 if (e.JOBTYPE !== "2" && e.VOLUNTEER == "2") {
    //           return e;
    //       }
    //         else {
    //         return (e.JOBTYPE == "2")
    //         }
    //     })
    //     console.log(data1)

// filter and count
/////=============
// let return_data = []
//              let test_data = data.filter((e) => {
                
//                 if (e.JOBTYPE !== "2" && e.VOLUNTEER == "2"){ // if artist is not empty
//                     // console.log(data[i].artists.length);
//                     return_data[i] = [data[i]];
//                 } else if (e.JOBTYPE == "2"){ // if artist array is empty
//                     // console.log("I'm here");
//                     // return_data[i] = [data[i].accession_date, "N/A"];
//                     return_data[i] = [data[i]];
//                 }
//                 console.log(return_data);
//                 });

//             let accessionNat = return_data;
            
//             console.log(accessionNat);
//// preprocess the data with array.filter to NOT include empty artists arrays
                // const filtered = data.filter((d)=>{
                //         // return d.artists[0] !=="[]";
                //         return d.artists !==[""];
                //           });
                
                // tutoring attempt 1
                        // console.log(data[0].accession_date);
                        // console.log(data[0].artists[0].nationality);
                        // var return_data = [];
                        // return_data[0] = data[0].accession_date;
                        // return_data[1] = data[0].artists[0].nationality;
                        // console.log(return_data);
                        
                        // return return_data;
                        
                        
                        
//                 const filtered = data.filter((d)=>{
//                         // return d.artists[0] //////THIS WORKS TO FILTER
                        
// // RETURN BOTH ACCESSION DATE AND NAT AND STILL GET THE FULL DATASET
//                         return d.accession_date && d.artists[0]
//                         })
//                         console.log(filtered.length);

   
//               	var newData = filtered;  ////arrays that contain artist data
//               	console.log(newData)
  
//   ////use map function to return nationality
//                 let nested_data = d3.nest()
//                         .key(function(newData) { 
// //////////AGAIN HERE CAN I KEEP THE ACCESSION DATE WITH THE NATIONALITY MAP FUNCTION AND STILL GET THE FULL DATASET?
// ////OR do i get the accession data from within the nationality data?
//                                 // return newData.artists[0].nationality || newData.accession_date;
//                                 return newData.artists[0].nationality;
//                         })
//                         .entries(newData);
//                         console.log(nested_data); //// THIS WORKS TO RETURN NATIONALITY DATA and COUNTS
                    
      //// map is a very useful method in JavaScript to re-arrange arrays
                // it takes a bit to get used to it, but then it’s really helpful for tasks like this
                // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
                
                // The new variable nationalityCount is the result of the map method
                // I’m applying the map method on the nested_data array
                // I can define a arrow function that is applied to every element in the array
                // In parentheses I define the parameters (e,i) which are arbitrary, but work like (d,i) in d3
                // Every element in the array is replace by what I *return* in the function
                // In this case a new object, with the nationality name and the length of the nested array
                
                
                
//                 var nationalityCount = nested_data.map((e,i) => { 
//                     return {nationality: e.key, count: e.values.length};
//                 });
//                 // console.log(nationalityCount[0].count)
//                 // console.log(nationalityCount)  
//                 console.log(nationalityCount.length);
//  /////then sort to order by number
//               // Sort works similar, but the sorting logic is a bit unintuitive
//                 // You have to define to parameters, and a comparison like '>' that returns a boolean
//                 // the ? -1 : 1 is just a very concise ways to write an if else statement
//                 // It’s not necessary to remember this syntax, I look it up, when I need it, too
//                 nationalityCount = nationalityCount.sort((a, b) => (a.count > b.count) ? -1 : 1); // This is to sort the array large to small
//             //   nationalityCount = nationalityCount.sort((a, b) => (a.count > b.count) ? 1 : -1); // small to large

                
//               console.log(nationalityCount);   /////returns the count of each group in order      
  
//   //////dataset too large for AWS so save data from cloud 9 here 
  
//   ////to get max number
//             let nat = nested_data.map((e,i) => { 
//                     return {count: e.values.length}; /////returns count: value
//                 });
//             console.log(nat);  //////just the counts
               
               
//             //   var maxnatct = nat.map(function (art) {
//             //       return art.count;   ////returns just the values
//             //         });
            
//             // console.log(maxnatct);
//             // // d3.max(nat);
            
//             var maxnatctun = nat.map(function (art) {
//                   return art.count;   ////returns just the values
//                     });
            
//             // console.log(maxnatctun);
//             // d3.max(nat);
            
//             let maxnatct = maxnatctun.sort((a, b) => (a > b) ? -1 : 1);
            
//             console.log(maxnatct)
            
//              let maxnatcount = d3.max(maxnatct);
//             console.log(maxnatcount);   //////max number
            


////=============


    // reorder 7 rows and 22 columns    
    const startv = 300; ////vertical
    const rowheight = 55;
    const starth = 620; ////horizontal
    const colwidth = 45;
    const linevstart = 600;

    ////margin
    // var margin = { top: 120, right: 70, bottom: 110, left: 120 };
    var margin = { top: 180, right: 10, bottom: 110, left: 200 };


    // colwidth * 7 
    // rowheight * 22
    var width = starth + colwidth * 22 + margin.right + margin.left;
    var height = startv + rowheight * 7 + margin.bottom;

    let svg21 = d3.select('#svg21')
        .append('svg')
        .attr("width", width)
        .attr("height", height)
        .style("background", "#877c74")

    let g21 = svg21.append('g') ////then append to global g 
    //////this is how to move the chart to the correct position
    // 	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    // const filtered = data.filter((d) => {
    //     return d.dat //////THIS WORKS TO FILTER
    // })
    // console.log(filtered.length);
    // console.log(filtered);

    ////filter percentages    
    const filtered = data.filter((d) => {
        return d.percentdat //////THIS WORKS TO FILTER
    })
    console.log(filtered.length);
    console.log(filtered);

    var newData = filtered; ////arrays that contain artist data

    // returns numbers
    // let nested_data = d3.nest()
    //     .key(function (newData) {
    //         return newData.dat;
    //     })
    //     .entries(newData);
    // //         console.log(nested_data);

    //   return percentages  
    let nested_data = d3.nest()
        .key(function (newData) {
            return newData.percentdat;
        })
        .entries(newData);
    console.log(nested_data);

    // ////return just the numbers and names              
    // var dclajobtypes = nested_data.map((e, i) => {
    //     return { jobtype: e.values[0].jobtype, dat: e.key }
    // });
    // console.log(dclajobtypes)
    // console.log(dclajobtypes.length)
    // // console.log(dclajobtypes[0].dat)

    ////====return just the percent and names                
    var dclaraceethpercent = nested_data.map((e, i) => {
        // return { jobtype: e.values[0].jobtype, percent: e.key }
         return { key: e.values, percent: e.key }

    });

    console.log(dclaraceethpercent)
    console.log(dclaraceethpercent.length)
    // console.log(dclajobpercent[0].percent)

    ////////////\\\\\\\\for numbers
    // /////js string split() method to return a string into an array of substrings
    // var dclajob = dclajobtypes.map((e, i) => {
    //     // console.log(e)
    //     return { dat: e.dat.split(",") } // Here is the split method
    // });
    // // console.log(dclajob)
    // console.log(dclajob.length)
    // //             console.log(data)


    // /////for percent - split array of numbers into each separate component  
    var raceethpercent = dclaraceethpercent.map((e, i) => {
        // console.log(e)
        return { percent: e.percent.split(",") } // Here is the split method
    });
    console.log(raceethpercent)
    console.log(raceethpercent.length)
    //             console.log(data)

    //////////for the separate numbers in the arrays - double for loop 
    let datacircles = [];

    for (let i = 0; i < data.length; i++) {
        let childpercent = data[i].percentdat;
        for (let j = 0; j < childpercent.length; j++) {
            // console.log(childpercent[j]); ////////this gets the separate numbers in each of the arrays
            datacircles.push(childpercent[j]);
        }
    }
    console.log(datacircles)
 var max = d3.max(datacircles)
 console.log(max)

    /////=====heading
    let heading = g21.append('g') //// append text to global
        .append("text")
        .attr("class", "textpink")
        .text('NYC DCLA Grantees: Museum Staff')
        .attr('x', margin.left)
        .attr('y', margin.top / 4)
        .style('font-size', '1.8em');

    let subheading = g21.append('g') //// append text to global
        .append("text")
        .attr("class", "textpink")
        .text('Percent: Staff by Race and Ethnicity')
        .attr('x', margin.left)
        .attr('y', margin.top / 1.75)
        .style('font-size', '1.8em');

    let subheading2 = g21.append('g') //// append text to global
        .append("text")
        .attr("class", "textpink")
        .text('at museums with budgets $999,999+')
        .attr('x', margin.left)
        .attr('y', margin.top / 1.25)
        .style('font-size', '0.8em');

    let subheading3 = g21.append('g') //// append text to global
        .append("text")
        .attr("class", "textpink")
        .text('paid staff + board members: 7,346 people')
        .attr('x', margin.left)
        .attr('y', margin.top /1.04)
        .style('font-size', '0.68em');

    let endnote = g21.append('g') //// append text to global
        .append("text")
        .attr("class", "textpink")
        .text('Data: New York City Department of Cultural Affairs (NYC DCLA)')
        .attr('x', margin.left)
        .attr('y', height - margin.bottom / 2.1)
        .style('font-size', '0.5em');

    let endnote2 = g21.append('g') //// append text to global
        .append("text")
        .attr("class", "textpink")
        .text('8,094 staff at museums; 7,647 are at museums with budgets $999,999+, Board volunteers + 6,768 non-volunteer staff totals 7,346')
        .attr('x', margin.left)
        .attr('y', height - margin.bottom / 3)
        .style('font-size', '0.47em');

    let endnote3 = g21.append('g') //// append text to global
        .append("text")
        .attr("class", "textpink")
        .text('Schonfeld, Roger, Sweeney, Liam. Diversity Survey of the NYC DCLA Grantees, 2015. Ann Arbor, MI: Inter-university Consortium')
        .attr('x', margin.left)
        .attr('y', height - margin.bottom / 5.7)
        .style('font-size', '0.47em');

    let endnote4 = g21.append('g') //// append text to global
        .append("text")
        .attr("class", "textpink")
        .text('for Political and Social Research [distributor], 2017-01-10. https://doi.org/10.3886/ICPSR36606.v2')
        .attr('x', margin.left)
        .attr('y', height - margin.bottom / 30)
        .style('font-size', '0.47em');

    ////====horizontal lines
    let linesh = svg21.append('g')
    linesh.selectAll('line')
        .data(data)
        .enter()
        .append('line')
        .attr("class", "linegrid")
        .attr('x1', linevstart)
        // .attr('x2', linevstart + colwidth * 7)
        .attr('x2', linevstart + colwidth * 22)
        .attr('y1', (d, i) => {
            return i * rowheight + startv;
        })
        .attr('y2', (d, i) => {
            return i * rowheight + startv;
        })
        .attr('stroke', 'pink')
        .attr('stroke.width', 1)
    console.log(data)
    console.log(data[0].percentdat)

    ////====7 vertical lines
    let linesv = svg21.append('g')
    linesv.selectAll('line')
        .data(data[0].percentdat)
        .enter()
        .append('line')
        .attr("class", "linegrid")
        .attr('x1', (d, i) => {
            // return starth+i*colwidth;
            return starth + i * colwidth;
        })
        .attr('x2', (d, i) => {
            return starth + i * colwidth;
        })
        .attr('y1', startv - 23)
        .attr('y2', height - margin.bottom * 1.4)
        .attr('stroke', 'pink')
        .attr('stroke-width', 0.7);


 
////====jobtype labels ===

    let jobtype = svg21.append('g')
    jobtype.selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .attr("class", "textpink")
        .text((d, i) => { return data[i].raceethnicity})
        .attr('x', starth /1.02)
        .attr('y', (d, i) => {
            return i * rowheight + startv ;
        })
        .attr('transform', (d, i) => {
            let a = -32;
            let x = linevstart;
            let y = i * rowheight + startv/0.95;
            return `rotate(${a}, ${x}, ${y})`;
        })
        .style('font-size', '64%')
        .style("text-anchor", "end");

    console.log(data)
    
    console.log(data[0]);
    console.log(data[0].jobtypes);
    let datalabel = data[0].jobtypes
                        
let raceethlable = svg21.append('g')
    raceethlable.selectAll('text')
        .data(datalabel)
        .enter()
        .append('text')
        .attr("class", "textpink")
        .text((d,i) =>  { return d})
        .attr('y', startv - 30)
        .attr('x', (d, i) => {
            return i * colwidth + starth;
        })
        .attr('transform', (d, i) => {
            let a = -70;
            let x = i * colwidth + starth -5;
            let y = startv -30;
            return `rotate(${a}, ${x}, ${y})`;
        })
        .style('font-size', '75%');

    // console.log(data)


    // /////circles, use square root to get the area 
    let radarea = d3.scaleSqrt() ////to get area of circles need square root 
        // .domain([0, (30.47)]) /////largest percent
        .domain([0,d3.max(datacircles)])
        .range([0, 40]);
    console.log(radarea(30.47))

    console.log(datacircles)
    ///////how to wrap the circles into rows
    // https://stackoverflow.com/questions/27105991/how-to-uniformly-distribute-svg-circles-in-d3

    let circles = svg21.append("g") ///// selectAll selects every child in the selection
    circles.selectAll("circles")
        .data(datacircles, (d, i) => {
            return d, i
        })
        .enter()
        .append("g")
        .attr("class", "circlepercent")
        .attr('x', (d, i) => { // for horizontal use diameter for spacing circles 
            // return (i % 7) * colwidth + starth; ////MOVE TO NEXT ROW
            return (i % 22) * colwidth + starth; ////MOVE TO NEXT ROW
        })
        .attr('y', (d, i) => {
            // return (startv + rowheight * parseInt(i / 7));
            return (startv + rowheight * parseInt(i / 22));
        })
        .append("circle")
        .attr("cx", (d, i) => { // for horizontal use diameter for spacing circles 
            // return (i % 7) * colwidth + starth;
            return (i % 22) * colwidth + starth;

        })
        .attr("cy", (d, i) => {
            // return (startv + rowheight * parseInt(i / 7)); ///vertical
            return (startv + rowheight * parseInt(i / 22)); ///vertical

        })
        .attr("r", (d, i) => {
            return radarea(d); //// return circle area

        })
        .style("fill", "yellow")
        .style("stroke", "none")
        .on('mouseenter', (d, i, j) => {
            console.log('hover');
            console.log(d);
            subheading.text(d + '% staff by race and ethnicity');
            d3.select(j[i])
                .style('fill', 'green')
                .style('opacity', '0.6');
        })
        .on('mouseout', (d, i, j) => {
            console.log(d);
            subheading.text((d) => { return "Percent: Staff by race and ethnicity"; });
            d3.select(j[i])
                .style('fill', 'yellow')
                .style('opacity', '0.9');
        });
};
