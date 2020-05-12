//full data 
d3.csv("/data/data.csv").then(function(data){

    //Plot the data!!!!
    var margin = {top: 10, right: 30, bottom: 30, left: 60},
        width = 690 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;
    //svg object
    var svg = d3.select("#scatter")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform","translate(" + margin.left + "," + margin.top + ")");


    //x-axis
    var x = d3.scaleLinear()
        .domain([0,25])
        .range([0,width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    //y-axis
    var y = d3.scaleLinear()
        .domain([0,30])
        .range([height,0]);
    svg.append("g")
        .call(d3.axisLeft(y));

//
//
//
    // //GET THE DATA
//
//
//

    // Add the x Axis
    svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

    svg.append("text")             
    .attr("transform",
        "translate(" + (width/2) + " ," + (height + margin.top + 18) + ")")
    .style("text-anchor", "middle")
    .text("In Poverty (%)");

    svg.append("text")             
    .attr("transform",
        "translate(" + (width/6) + " ," + (height + margin.top + 18) + ")")
    .style("text-anchor", "middle")
    .text("Age (Median)");

    svg.append("text")             
    .attr("transform",
        "translate(" + (width/1.2) + " ," + (height + margin.top + 18) + ")")
    .style("text-anchor", "middle")
    .text("Household Income (Median)");
    
    // Add the y Axis
    svg.append("g")
    .call(d3.axisLeft(y));

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Lacks Healthcare (%)");
        
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x",200 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Obese (%)");
    
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x",-200 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Smokes (%)");
})