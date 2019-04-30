// links to index5simplerightline2.html
// NYC DCLA area curators - comparison with those hired in last 5 years
// <!--FILTERED OUT VOLUNTEERS _ PAID CURATORS ONLY  318 paid curators at museums with budgets over 1m-->
// <!--FILTERED OUT LOW BUDGET MUSEUMS so only BUDGETS MORE THAN $999,999: 7647 museums-->
// <!--LINE CHART WORKING file current for line chart curators-->
// <!--NYC DCLA all curators & curators hired since 2010-->
// <!--this index5simplerightline.html moves numbers to right side noting change on right axis-->
// <!--THEN do 2nd chart with percentage increase / decrease all starting from 0 at lhs and % up / down on right-->
// <!--DATA FILTERED SO ONLY MUSEUMS  -->


////NYC DCLA data select 


d3.csv("NYCDCLA1.csv").then((data) => {
	// console.log(data);
	svgPlot(data);
});

var margin = { top: 80, right: 140, bottom: 60, left: 70 };


var width = 420 - margin.left - margin.right; // Use the window's width 
var height = 550 - margin.top - margin.bottom; // Use the window's height
console.log(margin.top)

var color_legend = {
	1: ["American Indian or Alaskan Native & Native Hawaiian or Pacific Islander", "purple"],
	2: ["Asian", "pink"],
	3: ["Black or African American", "green"],
	4: ["Hispanic", "orange"],
	5: ["Two Or More Races", "blue"],
	6: ["white, non-Hispanic", "yellow"],
	7: ["Declined to State", "red"]
}


var svg = d3.select('#svg1')
	.append('svg') ////then append an svg 
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)

var g = svg.append('g') ////then append to global g - so now the div svg is appended
	///note for multiple svgs you need a new g variable so you'd have g1, g2, etc

	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
////the above transform gives the space around the chart


let svgPlot = (data) => { ////need to call a different svgPlot 
	// console.log(data); ////with each chart for multiple charts


	////FILTER the data set to get MUSEUM only
	let museum = data.filter((e) => { ////this loops through and selects museum only within the discipline column
		if (e.DISCIPLINE == "Museum") {
			return e;
		}
	}); // need all of the elements museums, data.DISCIPLINE[i]
	// console.log(museum);
	console.log(museum.length);

	////ADDING
	////FILTER museum to get budget 3,4,5 over $999,999 annual budget 
	let museums = museum.filter((e) => { ////this loops through and selects museum only within the discipline column
		if (e.BUDGET == "3" || e.BUDGET == "4" || e.BUDGET == "5") {
			return e;
		}
	}); // need all of the elements museums, data.DISCIPLINE[i]
	// console.log(museums);
	console.log(museums.length);

	////FILTER museums to get only jobtype curator
	let curatorsmus = museums.filter((e) => { ////use the variable museums and loop through to filter just those staff hired since 2010
		if (e.JOBTYPE == "4") {
			return e;
		}
	});
	// console.log(curator);
	console.log(curatorsmus.length);

	////ADDING
	////FILTER volunteer to get only paid employees
	let curator = curatorsmus.filter((e) => { ////use the variable museums and loop through to filter just those staff hired since 2010
		if (e.VOLUNTEER == "2") {
			return e;
		}
	});
	// console.log(curator);

	////total number of employed curators at museums with budgets over $999,999
	console.log(curator.length);

	////filter museums with large budgets to get last 5 years hired - hired in decade 2010s
	let fiveyrs = museums.filter((e) => { ////use the variable museums and loop through to filter just those staff hired since 2010
		if (e.DECADEHIRED == "2010") {
			return e;
		}
	});
	console.log(fiveyrs);

	////////NOT HIRED in last 5 years, that is hired prior to 2010			
	let notfiveyrs = museums.filter((e) => { ////use the variable museums and loop through to filter just those staff hired since 2010
		if (e.DECADEHIRED !== "2010") {
			return e;
		}
	});
	console.log(notfiveyrs);

	////filter last five years & not volunteer to just get curator not volunteer - these are at large museums only
	let curatorfiveyrs = fiveyrs.filter((e) => { ////use the variable hired in the last five years and loop through fiveyrs to filter by race ethnicity
		if (e.JOBTYPE == "4" && e.VOLUNTEER == "2") {
			return e;
		}
	});

	////number of paid curators hired 2010-15 in museums with budgets over $999,999
	/////132
	console.log(curatorfiveyrs.length);

	/////filter curators NOT HIRED in last 5 years
	let curatornotfiveyrs = notfiveyrs.filter((e) => { ////use the variable hired in the last five years and loop through fiveyrs to filter by race ethnicity
		if (e.JOBTYPE == "4" && e.VOLUNTEER == "2") {
			return e;
		}
	});

	////number of curators working at time of survey hired prior to 2010 paid in large museums
	////186
	console.log(curatornotfiveyrs.length);

	///curators last five years filter by race/ethnicity

	let curatorfiveyr1 = curatorfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "1") {
			return e;
		}
	});
	// console.log(curatorfiveyr1);

	let curatorfiveyr2 = curatorfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "2") {
			return e;
		}
	});
	// console.log(curatorfiveyr2);

	let curatorfiveyr3 = curatorfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "3") {
			return e;
		}
	});
	// console.log(curatorfiveyr3);

	let curatorfiveyr4 = curatorfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "4") {
			return e;
		}
	});
	// console.log(curatorfiveyr4);

	let curatorfiveyr5 = curatorfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "5") {
			return e;
		}
	});
	// console.log(curatorfiveyr5);

	let curatorfiveyr6 = curatorfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "6") {
			return e;
		}
	});
	console.log(curatorfiveyr6);

	let curatorfiveyrundef = curatorfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "-8") {
			return e;
		}
	});
	// console.log(curatorfiveyrundef);

	// curators hired in last 5 years by race/ethnicity
	var ethcuratorgrp = [curatorfiveyr1.length, curatorfiveyr2.length, curatorfiveyr3.length, curatorfiveyr4.length, curatorfiveyr5.length, curatorfiveyr6.length, curatorfiveyrundef.length];

	console.log(ethcuratorgrp);

	///////race/ethnicity 6 only five years: 107
	console.log(curatorfiveyr6.length)
	///////////////\\\\\\\\\\\\

	//////curators hired before 2010 filter by race/ethnicity

	let curatornotfiveyr1 = curatornotfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "1") {
			return e;
		}
	});
	console.log(curatornotfiveyr1);

	let curatornotfiveyr2 = curatornotfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "2") {
			return e;
		}
	});
	console.log(curatornotfiveyr2);

	let curatornotfiveyr3 = curatornotfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "3") {
			return e;
		}
	});
	console.log(curatornotfiveyr3);

	let curatornotfiveyr4 = curatornotfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "4") {
			return e;
		}
	});
	console.log(curatornotfiveyr4);

	let curatornotfiveyr5 = curatornotfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "5") {
			return e;
		}
	});
	console.log(curatornotfiveyr5);

	let curatornotfiveyr6 = curatornotfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "6") {
			return e;
		}
	});
	console.log(curatornotfiveyr6);

	let curatornotfiveyrundef = curatornotfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "-8") {
			return e;
		}
	});
	console.log(curatornotfiveyrundef);

	// curators hired in last 5 years by race/ethnicity
	var ethcuratornotgrp = [curatornotfiveyr1.length, curatornotfiveyr2.length, curatornotfiveyr3.length, curatornotfiveyr4.length, curatornotfiveyr5.length, curatornotfiveyr6.length, curatornotfiveyrundef.length];

	console.log(ethcuratornotgrp);

	///////race/ethnicity 6 not hired in last five years: 163
	console.log(curatornotfiveyr6.length)





	/////TURN TO 2nd chart to check this for job seniority - were these mid / senior levels


	// 	///mid & senior level curators last five years filter by race/ethnicity
	// 		let curatorfiveyrjob = curatorfiveyrs.filter((e)=> {
	// 			if (e.LEVEL=="2" || e.LEVEL=="3")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorfiveyrjob);

	// 		let curatorfiveyrjob1 = curatorfiveyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY=="1")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorfiveyrjob1);

	// 		let curatorfiveyrjob2 = curatorfiveyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY=="2")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorfiveyrjob2);

	// 		let curatorfiveyrjob3 = curatorfiveyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY=="3")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorfiveyrjob3);

	// 		let curatorfiveyrjob4 = curatorfiveyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY=="4")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorfiveyrjob4);

	// 		let curatorfiveyrjob5 = curatorfiveyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY=="5")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorfiveyrjob5);

	// 		let curatorfiveyrjob6 = curatorfiveyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY=="6")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorfiveyrjob6);

	// 		let curatorfiveyrjobundef = curatorfiveyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY=="-8")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorfiveyrjobundef);

	// var ethjobcuratorgrp = [curatorfiveyrjob1.length, curatorfiveyrjob2.length, curatorfiveyrjob3.length, curatorfiveyrjob4.length, curatorfiveyrjob5.length, curatorfiveyrjob6.length, curatorfiveyrjobundef.length];

	// // console.log(ethjobcuratorgrp);



	//////////TURN to 3rd bar chart - data for ALL YEARS


	/////paid curators all years working at large museums filter by race/ethnicity
	let curatorallyr1 = curator.filter((e) => {
		if (e.RACEETHNICITY == "1") {
			return e;
		}
	});
	// console.log(curatorallyr1);

	let curatorallyr2 = curator.filter((e) => {
		if (e.RACEETHNICITY == "2") {
			return e;
		}
	});
	// console.log(curatorallyr2);

	let curatorallyr3 = curator.filter((e) => {
		if (e.RACEETHNICITY == "3") {
			return e;
		}
	});
	// console.log(curatorallyr3);

	let curatorallyr4 = curator.filter((e) => {
		if (e.RACEETHNICITY == "4") {
			return e;
		}
	});
	// console.log(curatorallyr4);

	let curatorallyr5 = curator.filter((e) => {
		if (e.RACEETHNICITY == "5") {
			return e;
		}
	});
	// console.log(curatorallyr5);

	let curatorallyr6 = curator.filter((e) => {
		if (e.RACEETHNICITY == "6") {
			return e;
		}
	});
	console.log(curatorallyr6);

	let curatorallyrundef = curator.filter((e) => {
		if (e.RACEETHNICITY == "-8") {
			return e;
		}
	});
	// console.log(curatorallyrundef);


	var ethcuratorallgrp = [curatorallyr1.length, curatorallyr2.length, curatorallyr3.length, curatorallyr4.length, curatorallyr5.length, curatorallyr6.length, curatorallyrundef.length];

	/////all curators employed at museums with budgets over $999,999
	////318
	console.log(ethcuratorallgrp);
	console.log(curatorallyr6.length);


	////4th chart filter by mid senior level curators

	// 		let curatorallyrjob = curator.filter((e)=> {
	// 			if (e.LEVEL=="2" || e.LEVEL=="3")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorallyrjob);

	// 		let curatorallyrjob1 = curatorallyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY==="1")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorallyrjob1);

	// 		let curatorallyrjob2 = curatorallyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY==="2")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorallyrjob2);

	// 		let curatorallyrjob3 = curatorallyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY==="3")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorallyrjob3);

	// 		let curatorallyrjob4 = curatorallyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY==="4")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorallyrjob4);

	// 		let curatorallyrjob5 = curatorallyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY==="5")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorallyrjob5);

	// 		let curatorallyrjob6 = curatorallyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY==="6")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorallyrjob6);

	// 		let curatorallyrjobundef = curatorallyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY=="-8")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorallyrjobundef);

	// var ethjoballcuratorgrp = [curatorallyrjob1.length, curatorallyrjob2.length, curatorallyrjob3.length, curatorallyrjob4.length, curatorallyrjob5.length, curatorallyrjob6.length, curatorallyrjobundef.length];

	// // console.log(ethjoballcuratorgrp);


	//////////////=============== now group by pairs and draw graph========

	/////group the data into all curators and five years curators 1st bar chart
	/////all years.length data is in ethcuratorallgrp
	/////five years.length data is in ethcuratorgrp
	/////for curators hired 2010-2015
	console.log(ethcuratorgrp);

	var alltot = ethcuratorallgrp.concat(ethcuratorgrp);
	console.log(alltot);

	/////select pairs by race/ethnicity 
	let all1tot1 = alltot.filter((d, i) => {
		{
			return i == 0 || i == 7;
			// return i ==7 || i ==0;
		}
	});
	let all2tot2 = alltot.filter((d, i) => {
		{
			return i == 1 || i == 8;
			// return i ==8 || i ==1;
		}
	});
	let all3tot3 = alltot.filter((d, i) => {
		{
			return i == 2 || i == 9;
			// return i ==9 || i ==2;
		}
	});
	let all4tot4 = alltot.filter((d, i) => {
		{
			return i == 3 || i == 10;
			// return i ==10 || i ==3;
		}
	});
	let all5tot5 = alltot.filter((d, i) => {
		{
			return i == 4 || i == 11;
			// return i ==11 || i ==4;
		}
	});

	let all6tot6 = alltot.filter((d, i) => {
		{
			return i == 5 || i == 12;
			// return i ==12 || i ==5;
		}
	});
	let all7tot7 = alltot.filter((d, i) => {
		{
			return i == 6 || i == 13;
			// return i ==13 || i ==6;
		}
	});

	console.log(all1tot1, all2tot2, all3tot3, all4tot4, all5tot5, all6tot6, all7tot7);

	/////////////\\\\\\\\\\\\\\\\\\\\\new

	/////HIRED PRIOR TO 2010s group the data into all curators and curators hired before 2010 1st bar chart
	/////all years.length data is in ethcuratorallgrp
	/////five years.length data is in ethcuratorgrp
	/////for curators hired 2010-2015
	console.log(ethcuratornotgrp);

	// var alltotnot = ethcuratornotgrp.concat(ethcuratorallgrp);
	var alltotnot = ethcuratorallgrp.concat(ethcuratornotgrp);

	console.log(alltotnot);

	/////select pairs by race/ethnicity 
	let all1tot1not = alltotnot.filter((d, i) => {
		{
			return i == 0 || i == 7;
			// return i ==7 || i ==0;
		}
	});
	let all2tot2not = alltotnot.filter((d, i) => {
		{
			return i == 1 || i == 8;
			// return i ==8 || i ==1;
		}
	});
	let all3tot3not = alltotnot.filter((d, i) => {
		{
			return i == 2 || i == 9;
			// return i ==9 || i ==2;
		}
	});
	let all4tot4not = alltotnot.filter((d, i) => {
		{
			return i == 3 || i == 10;
			// return i ==10 || i ==3;
		}
	});
	let all5tot5not = alltotnot.filter((d, i) => {
		{
			return i == 4 || i == 11;
			// return i ==11 || i ==4;
		}
	});
	let all6tot6not = alltotnot.filter((d, i) => { ////////do I turn  the other way round for the chart slope?
		{
			return i == 5 || i == 12;
			// return i ==12 || i ==5;
		}
	});
	console.log(all6tot6not)
	let all7tot7not = alltotnot.filter((d, i) => {
		{
			return i == 6 || i == 13;
			// return i ==13 || i ==6;
		}
	});

	console.log(all1tot1not, all2tot2not, all3tot3not, all4tot4not, all5tot5not, all6tot6not, all7tot7not);

	let all6tot6notRev = [all6tot6not[1], all6tot6not[0]]
	console.log(all6tot6notRev)


	///////NEW area chart with line for white curators to show number of white hires since 2010
	////white curators total at time of survey
	////white curators hired since 2010 and still hired at time of survey
	/////======
	/////TO GET AREA UNDER curators hired prior to 2010s duplicate 2nd ref to draw straight line
	console.log(alltotnot);

	//////make new array with just the SAME two numbers

	let line6v2 = [alltotnot[12], alltotnot[12]];

	console.log(line6v2)

	/////////////\\\\\\\\\\\\\\\\end of new



	/////find max of the max of the 4 variables and use that for scale
	// 4 variables are ethcuratorgrp, ethjobcuratorgrp, ethcuratorallgrp, ethjoballcuratorgrp
	///here using max of all curators and hired 2010-2015 curators (not including senior & mid positions)
	/////now here using max of all curators and hired 2010-2015 curators (not including senior & mid positions)
	// var max1 = d3.max(ethcuratorgrp);
	var max1 = d3.max(ethcuratornotgrp);
	// var max2 = d3.max(ethjobcuratorgrp);
	var max3 = d3.max(ethcuratorallgrp);
	// var max4 = d3.max(ethjoballcuratorgrp);

	// console.log(max1);

	//all1 = [max1, max2, max3, max4];
	all = [max1, max3];
	console.log(all.length);

	let max = d3.max(all) ////max number in the array
	// console.log(max);

	// console.log(ethcuratornotgrp)


	// The number of datapoints for paired lines
	var n = 2;
	//////

	var xScale = d3.scaleLinear()
		.domain([0, n - 1])
		.range([0, width]); //////only use width here

	console.log(max)
	var yScale = d3.scaleLinear()
		.domain([0 - 18, max + 30]) ///adds some height to axes
		.range([height, 0]);



	/////draw pairs of lines by race/ethnicity

	// 7. d3's line generator - Example
	// var line = d3.line()
	//     .x(function(d, i) { return xScale(i); }) // set the x values for the line generator
	//     .y(function(d) { return yScale(d.y); }) // set the y values for the line generator 
	//     .curve(d3.curveMonotoneX) // apply smoothing to the line
	//.x(function(d) { return x_scale(d[0]); })
	//               .y(function(d) { return y_scale(d[1]); }) ;

	var line = d3.line()
		.x(function (d, i) { // to use “i” in xScale 
			// you have to list d first and then i and separate by comma
			console.log(xScale(i))
			// return width/3-(xScale(i)); 
			return xScale(i);
		})
		.y(function (d, i) {
			// console.log(d)
			// return height-(yScale(d)); 
			return yScale(d);
		});


	// 1 : ["American Indian or Alaskan Native & Native Hawaiian or Pacific Islander", "#f871aa"],
	// 2 : ["Asian", "#9cb749"],
	// 3 : ["Black or African American", "#58f97e"],
	// 4 : ["Hispanic", "#2be6fc"],
	// 5 : ["Two Or More Races", "#fcc42b"],
	// 6 : ["white, non-Hispanic", "#a557fc"],
	// 7 : ["Declined to State", "red"] //no data 

	///////\\\\\\\\\\\\\\\showing one line only
	// let line1 = svg.append("line")
	// let line1 = g.append("path")
	//     			.datum(all1tot1) // 10. Binds data to the line
	//     			// .attr("class", "line") // Assign a class for styling
	//     			.attr('d', function(d,i) {
	//     				return line(d,i)    ////\\here add function in the line generator taking in the 
	//     			})
	//     			.attr('fill', 'none')
	//     			.attr('stroke', '#f871aa')
	//     			.attr('stroke-width', 1.5)
	//     			.attr('shape-rendering', 'crispEdges')
	//     			.on('mouseenter', function(d){
	//                         console.log('hover');
	//                         console.log(d)
	//                         heading.text(d[0]  + ' American Indian or Alaskan Native & Native Hawaiian or Pacific Islander curators; ' + d[1] + ' hired 2010+')
	//                         .attr('font-size', '10px')
	//                         })                            ////// tspan
	//                 .on('mouseout', function(d) {
	//                 		console.log(d)
	//                 	// .transition()
	//                 	// 	.ease(Math.sqrt)
	//                  //       .delay(100)
	//                         heading.text((d) => { return "NYC DCLA Grantees 2015: Museum Curators"; })
	//                         .attr('font-size', '12px')
	//                         .attr("class", "line");
	//                     });
	//  //console.log(line1)

	// let line2 = g.append("path")
	//     			.datum(all2tot2)
	//     			// .attr("class", "line") // Assign a class for styling
	//     			.attr('d', function(d,i) {
	//     				return line(d,i)    ////\\here add function in the line generator taking in the 
	//     			})
	//     			.attr('fill', 'none')
	//     			// .attr('stroke', 'pink')
	//     			.attr('stroke', "#9cb749")
	//     			.attr('stroke-width', 1.5)
	//     			.attr('shape-rendering', 'crispEdges')
	//     			.on('mouseenter', function(d){
	//                         console.log('hover');
	//                         console.log(d)
	//                         heading.text(d[0]  + ' Asian curators; '+ d[1] + ' were hired 2010-2015')
	//     					})   
	//                  .on('mouseout', function(d) {
	//                 		console.log(d)
	//                         heading.text((d) => { return "NYC DCLA Grantees 2015: Museum Curators"; })
	//                         .attr("class", "line"); 
	//                     });
	//  //console.log(line2)

	// let line3 = g.append("path")
	//     			.datum(all3tot3)
	//     			// .attr("class", "line") // Assign a class for styling
	//     			.attr('d', function(d,i) {
	//     				return line(d,i)    ////\\here add function in the line generator taking in the 
	//     			})
	//     			.attr('fill', 'none')
	//     			.attr('stroke', '#58f97e')
	//     			.attr('stroke-width', 1.5)
	//     			.attr('shape-rendering', 'crispEdges')
	//     			.on('mouseenter', function(d){
	//                         console.log('hover');
	//                         console.log(d)
	//                         heading.text(d[0]  + ' Black or African American curators; '+ d[1] + ' were hired 2010-2015')
	//     		     	}) 
	//                  .on('mouseout', function(d) {
	//                 		console.log(d)
	//                         heading.text((d) => { return "NYC DCLA Grantees 2015: Museum Curators"; })
	//                         .attr("class", "line"); 
	//                     });
	//  //console.log(line3)

	// let line4 = g.append("path")
	//     			.datum(all4tot4)
	//     			// .attr("class", "line") // Assign a class for styling
	//     			.attr('d', function(d,i) {
	//     				return line(d,i)    ////\\here add function in the line generator taking in the 
	//     			})
	//     			.attr('fill', 'none')
	//     			.attr('stroke', '#2be6fc')
	//     			.attr('stroke-width', 1.5)
	//     			.attr('shape-rendering', 'crispEdges')
	//     			.on('mouseenter', function(d){
	//                         console.log('hover');
	//                         console.log(d)
	//                         heading.text(d[0]  + ' Hispanic curators; '+ d[1] + ' were hired 2010-2015')
	//     			   }) 
	//                  .on('mouseout', function(d) {
	//                 		console.log(d)
	//                         heading.text((d) => { return "NYC DCLA Grantees 2015: Museum Curators"; })
	//                         .attr("class", "line"); 
	//                     });
	//  //console.log(line4)

	// let line5 = g.append("path")
	//     			.datum(all5tot5)
	//     			// .attr("class", "line") // Assign a class for styling
	//     			.attr('d', function(d,i) {
	//     				return line(d,i)    ////\\here add function in the line generator taking in the 
	//     			})
	//     			.attr('fill', 'none')
	//     			.attr('stroke', '#fcc42b')
	//     			.attr('stroke-width', 1.5)
	//     			.attr('shape-rendering', 'crispEdges')
	//     				.on('mouseenter', function(d){
	//                         console.log('hover');
	//                         console.log(d)
	//                         heading.text(d[0]  + ' curators of two or more races; '+ d[1] + ' were hired 2010-2015')
	//     				}) 
	//                  .on('mouseout', function(d) {
	//                 		console.log(d)
	//                         heading.text((d) => { return "NYC DCLA Grantees 2015: Museum Curators"; })
	//                         .attr("class", "line"); 
	//                     });
	//  //console.log(line5)

	/////////////\\\\\\\\\\\\\\\end of showing one line only
	// area 

	// 724 above used the line generator
	// var line = d3.line()
	// 	.x(function(d,i) { // to use “i” in xScale 
	// 					   // you have to list d first and then i and separate by comma
	// 		console.log(xScale(i))
	// 		return width/3-(xScale(i)); 

	// 	})
	// 	.y(function(d, i) { 
	// 		// console.log(d)
	// 		// return height-(yScale(d)); 
	// 		return yScale(d);
	// 	});


	// var area = d3.area()
	//     .x(function(d) { return x(d.date); })
	//     .y1(function(d) { return y(d.value); })
	//     .y0(y(0));

	var area1 = d3.area() //////can use this twice just call in each of the 2 lines
		.x(function (d, i) { // to use “i” in xScale 
			// you have to list d first and then i and separate by comma
			// console.log(xScale(i))
			return xScale(i);
		})
		.y1(function (d, i) {
			// console.log(d)
			// return height-(yScale(d)); 
			return yScale(d);
		})
		.y0(yScale(0));

	console.log(all6tot6not)

	///////race/ethnicity white - 6
	/////line at top showing increase
	let line6 = g.append("path")
		.datum(all6tot6notRev)
		// .attr("class", "line") // Assign a class for styling
		.attr('d', function (d, i) {
			return line(d, i) ////\\here add function in the line generator taking in the 
		})
		.attr('stroke', 'yellow')
		.attr('stroke-width', 1)
		.on('mouseenter', function (d) {
			console.log('hover');
			console.log(d)
			heading.text(d[0] + ' white curators; ' + d[1] + ' were hired prior to 2010')
		})
		.on('mouseout', function (d) {
			console.log(d)
			heading.text((d) => { return "NYC DCLA Grantees 2015: Museum Curators"; })
				.attr("class", "line");
		});

	let line6_area = g.append("path")
		.datum(all6tot6notRev)
		.attr("fill", "yellow")
		.attr('d', area1(all6tot6notRev))
		.on('mouseenter', function (d) {
			console.log('hover');
			console.log(d)
			heading.text(d[0] + ' white curators; ' + d[1] + ' were hired prior to 2010')
		})
		.on('mouseout', function (d) {
			console.log(d)
			heading.text((d) => { return "NYC DCLA Grantees 2015: Museum Curators"; })
				.attr("class", "line");
		});

	console.log(line6v2)

	/////line at top of area - for area see below
	let line6_2 = g.append("path")
		.datum(line6v2) /////use the new array with the same 2 numbers
		.attr('d', function (d, i) {
			return line(d, i) ////\\here add function in the line generator taking in the 
		})
		.attr('stroke-dasharray', '4')
		.attr('stroke', '#a557fc')
		.attr('stroke-width', 1);

	/////area from y to parallel line   			
	let line6_2area = g.append("path")
		.datum(line6v2) /////use the new array with the same 2 numbers
		.attr("fill-opacity", "0.5")
		.attr('fill', 'orange')
		.attr('d', area1(line6v2)); /////use area 1


	/////no one declined to state so removing this
	//let line7 = g.append("path")
	//   			.datum(all7tot7)
	//   			// .attr("class", "line") // Assign a class for styling
	//   			.attr('d', function(d,i) {
	//   				return line(d,i)    ////\\here add function in the line generator taking in the 
	//   			})
	//   			.attr('fill', 'none')
	//   			.attr('stroke', 'red')
	//   			.attr('stroke-width', 1.5)
	//   			.attr('shape-rendering', 'crispEdges')
	//   				.on('mouseenter', function(d){
	//                       console.log('hover');
	//                       console.log(d)
	//                       heading.text(d[0]  + ' curators who declined to state race/ethnicity of which '+ d[1] + ' were hired since 2010'); 
	//                   });
	//console.log(line7)

	// let line1 = g.append("line")
	//     			.attr("x1", 0)     // x position of the first end of the line
	//     			.attr("y1", 3*100)      // y position of the first end of the line
	//     			.attr("x2", 1000)     // x position of the second end of the line
	//     			.attr("y2", 4*100)
	//     			.attr('fill', 'none')
	//     			.attr('stroke', 'purple')
	//     			.attr('stroke-width', 1.5)
	//     			.attr('shape-rendering', 'crispEdges');
	//  console.log(line1)




	////Call the x axis in a group tag
	///////////\\\\\\\not sure how to change this to g.selectAll('#svg')

	/////////\\\\\\for pair data no xAxis and add right y axis
	// var xAxis =	g.selectAll('#svg1')
	// let xAxis = svg.append("path")
	// 	svg.append("g")
	//     .attr("class", "x axis")
	//     .attr('fill', 'none')
	//     .attr('stroke', 'black')
	//     .attr('stroke-width', 3)
	//     .attr("transform", "translate(0," + height + ")")
	//     .call(d3.axisTop(xScale));
	// .call(d3.axisBottom(xScale)); // Create an axis component with d3.axisBottom


	// 4. Call the y axis in a group tag

	// let yAxis = svg.append("g")
	let yAxis = g.append("g") // just append axis to global space
		.attr("class", "yaxis")
		// .attr('fill', 'none')
		// .attr('stroke', 'black')
		// .attr('stroke-width', 0.3)
		.call(d3.axisLeft(yScale) //call axisLeft to use yScale for axis ticks and scale
			.tickSize(3)
			.ticks("") ///takes out numbers on lh axis
		);



	/////////\\\\\\for pair data add right y axis
	// let yAxisRight = svg.append("g")
	let yaxisRight = g.append("g")
		.attr("class", "yaxis")
		// .attr('fill', 'none')
		// .attr('stroke', 'black')
		// .attr('stroke-width', 0.3)
		.attr("transform", `translate(${width}, 0 )`)
		.call(d3.axisRight(yScale) ///.above move the axis to place that the chart ends - within the margins
			.tickSize(3)
			.ticks(11)
			// .ticks(5)
		);
	console.log(width);
	console.log(margin.top);

	let ytext2 = g.append('g')
		.attr("class", "axistext")
		.append('text')
		.style("fill", "white")
		.text('museum curators => subset: museum curators hired from 2010-2015')
		// .attr('x', 0-width/1.5)
		.attr('x', 0 - margin.left * 5.55)
		// .attr('y', margin.left*2+margin.right*2)
		.attr('y', margin.top * 2 + margin.bottom * 2)
		.attr("transform", "rotate(-90)")
		.attr('font-size', '65%'); // or can do .25in or %

	let chart1 = g.append('g')
		.attr("class", "axistitle")
		.append('text')
		.style("fill", "white")
		.text('white curators')
		.attr('x', 0 - margin.left / 4)
		.attr('y', 0 - margin.top / 15)
		.attr('font-size', '65%');

	let heading = g.append('g') //// append text to global
		.attr("class", "header")
		.append('text')
		.style("fill", "white")
		.text('NYC DCLA Grantees 2015: Museum Curators')
		// .attr('x', -125)
		// .attr('y', -48)
		.attr('x', 0 - margin.left)
		.attr('y', 0 - margin.top / 1.2)
		.attr('font-size', '80%');

	let subhead1 = g.append('g')
		.attr("class", "title1")
		.append('text') /////to site text you can always do negative values to be outside the chart
		.style("fill", "white")
		.text('Out of 7,647 staff at museums with budgets $999,999+, 318 are curators')
		.attr('x', 0 - margin.left)
		.attr('y', 0 - margin.top / 1.9)
		.attr('font-size', '65%');

	let subhead2 = g.append('g')
		.attr("class", "title1sub")
		.append('text')
		.text('132 of those curators were hired between 2010-2015')
		.style("fill", "white")
		.attr('x', 0 - margin.left)
		.attr('y', 0 - margin.top / 3)
		.attr('font-size', '65%');

	let legend = g.append("g")
		.append("text")
		.attr("class", "legend")
		.attr("height", 120)
		.attr("width", 100)
		.attr('transform', 'translate(20,50)')
		.style("font-size", "10px");
	// .call(d3.legend);

	legend.selectAll('rect')
		//.data(d)
		.enter()
		.append("rect")
		.attr("x", width - 65)
		.attr("y", function (d, i) {
			return i * 20;
		})
		.attr("width", 2)
		.attr("height", 5)
		.style("fill", function (d) {
			var color = color_legend[dataset.indexOf(d)][1];
			return color;
		})

	legend.selectAll('text')
		//.data(d)
		.enter()
		.append("text")
		.attr("x", width - 52)
		.attr("y", function (d, i) {
			return i * 20 + 9;
		})
		.text(function (d) {
			var text = color_legend[dataset.indexOf(d)][0];
			return text;
		});

	//////////
	// 12. Appends a circle for each datapoint 

	// svg.selectAll('circle') ////\\circle
	//     .data(all1tot1)
	// 	.enter().append("circle") //Uses the enter().append() method
	//     .attr("class", "dot") // Assign a class for styling
	//     .attr('fill', 'pink')
	//     .attr('stroke', 'pink')
	//     .attr('stroke-width', 1)
	//     .attr("cx", function(d,i) { return xScale(i) })////\\same xScale & 
	//     .attr("cy", function(d,i) { return yScale(i) })////\\same yScale as above
	//     // .attr("cx", function(d,i) { return xScale(i) })////\\same xScale & 
	//     // .attr("cy", function(d,i) { return yScale(d) })////\\same yScale as above
	//     .attr("r", 5)
	//  	.on('mouseenter', function(d){
	//             // console.log('hover');
	//             // console.log(d)
	//             heading.text('Last five years: number of ' + 'curators at all levels: ' + d); 
	//          });



};
