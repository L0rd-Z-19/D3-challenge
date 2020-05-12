// full data 
d3.csv("/data/data.csv").then(function(data){

//Plot the data!!!!
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;
//svg object
var svg = d3.select("#scatter")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform","translate(" + margin.left + "," + margin.top + ")");
//x-axis
var x = d3.scaleLinear()
    .domain([0,22])
    .range([0,width]);
svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));
//y-axis
var y = d3.scaleLinear()
    .domain([0,26])
    .range([height,0]);
svg.append("g")
    .call(d3.axisLeft(y));

//add the data
svg.append('g')
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
        .attr("cx", function (d) { return x(d.poverty); })
        .attr("cy", function (d) { return y(d.healthcare); })
        .attr("r", 7)
        .attr("opacity", ".8")
        .style("fill", "#565051")

svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text(function(d){ return d.abbr})
        .attr("x", function (d) { return x(d.poverty); })
        .attr("y", function (d) { return y(d.healthcare); })
        .style("fill", "white");
})