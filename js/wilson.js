//full data 
d3.csv("data/data.csv").then(function(data){
    var xLabel = "In Poverty (%)";
    var yLabel = "Lacks Healthcare (%)";

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
        .domain([25,50])
        .range([0,width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    //y-axis
    var y = d3.scaleLinear()
        .domain([5,35])
        .range([height,0]);
    svg.append("g")
        .call(d3.axisLeft(y));

    //create a dropdown menu for the other 2 plots
    var opt = ["Age VS Smokers", "Poverty Vs Healthcare", "Income VS Obesity"];
    var dropDown = d3.select("#btn").append('select');
    
    dropDown
    .selectAll('myOptions')
    .data(opt)
    .enter()
    .append('option')
    .text(function (d) { return d;})
    .attr("value", function (d) { return d;})

    //starter plot
    svg.append('g')
    
    svg.append('g')
    .selectAll("text")
    .data(data)
    .enter()
    .append("text")
        .attr("x", function (d) { return x(d.age-.25); })
        .attr("y", function (d) { return y(d.smokes-.15); })
        .text(function(d){ return d.abbr})
        .attr("font-size", "9px")
        .attr("fill", "black");
    
    var circles = svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
        .attr("cx", function (d) { return x(d.age); })
        .attr("cy", function (d) { return y(d.smokes); })
        .attr("r", 10)
        .attr("opacity", ".5")
        .style("fill", "#565051")
        .attr("class", function(d) {return d.abbr})

    circles.on("mouseover", function(d){
        var states = d3.selectAll('circle.' + d.abbr)
            .attr("r",12)
            .style("fill", "#7B241C");
    })

    circles.on("mouseout", function(d){
        d3.select('circle.' + d.abbr)
            .attr("r",10)
            .style("fill", "#565051")
    })
    //update the plot
    function updatePlot(choice){
        d3.select("svg").remove();
        if (choice === "Age VS Smokers"){
            //svg object
            var svg = d3.select("#scatter")
            .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform","translate(" + margin.left + "," + margin.top + ")");

            //x-axis
            var x = d3.scaleLinear()
                .domain([25,50])
                .range([0,width]);
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));

            //y-axis
            var y = d3.scaleLinear()
                .domain([5,35])
                .range([height,0]);
            svg.append("g")
                .call(d3.axisLeft(y));
           
            svg.append("g")
            .selectAll("text")
            .data(data)
            .enter()
            .append("text")
                .attr("x", function (d) { return x(d.age-.25); })
                .attr("y", function (d) { return y(d.smokes-.15); })
                .text(function(d){ return d.abbr})
                .attr("font-size", "9px")
                .attr("fill", "black");

            svg.append("g")
            .selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
                .attr("cx", function (d) { return x(d.age); })
                .attr("cy", function (d) { return y(d.smokes); })
                .attr("r", 10)
                .attr("opacity", ".5")
                .style("fill", "#565051")
                .attr("class", function(d) {return d.abbr});

            xLabel = "Age (Median)";
            yLabel = "Smokers (%)";
        }
        else if(choice === "Poverty Vs Healthcare"){
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
            
            svg.append("g")
                .selectAll("text")
                .data(data)
                .enter()
                .append("text")
                    .attr("x", function (d) { return x(d.poverty-.25); })
                    .attr("y", function (d) { return y(d.healthcare-.15); })
                    .text(function(d){ return d.abbr})
                    .attr("font-size", "9px")
                    .attr("fill", "black");
            
            svg.append("g")
                .selectAll("circle")
                .data(data)
                .enter()
                .append("circle")
                    .attr("cx", function (d) { return x(d.poverty); })
                    .attr("cy", function (d) { return y(d.healthcare); })
                    .attr("r", 10)
                    .attr("opacity", ".5")
                    .style("fill", "#565051")
                    .attr("class", function(d) {return d.abbr});

            xLabel = "In Poverty (%)";
            yLabel = "Lacks Healthcare (%)";
        }
        else if(choice === "Income VS Obesity"){
            //svg object
            var svg = d3.select("#scatter")
            .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform","translate(" + margin.left + "," + margin.top + ")");
            
        //x-axis    
        var x = d3.scaleLinear()
            .domain([35000,80000])
            .range([0,width]);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        //y-axis
        var y = d3.scaleLinear()
            .domain([15,40])
            .range([height,0]);
        svg.append("g")
            .call(d3.axisLeft(y));

            svg.append("g")
                .selectAll("text")
                .data(data)
                .enter()
                .append("text")
                    .attr("x", function (d) { return x(d.income-350); })
                    .attr("y", function (d) { return y(d.obesity-.15); })
                    .text(function(d){ return d.abbr})
                    .attr("font-size", "9px")
                    .attr("fill", "black");

            svg.append("g")
                .selectAll("circle")
                .data(data)
                .enter()
                .append("circle")
                    .attr("cx", function (d) { return x(d.income); })
                    .attr("cy", function (d) { return y(d.obesity); })
                    .attr("r", 10)
                    .attr("opacity", ".5")
                    .style("fill", "#565051")
                    .attr("class", function(d) {return d.abbr});

            xLabel = "Income (Median)";
            yLabel = "Obesity (%)";
        }
        // Add the x Axis
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        svg.append("text")             
            .attr("transform",
                "translate(" + (width/2) + " ," + (height + margin.top + 18) + ")")
            .style("text-anchor", "middle")
            .text(xLabel);

        // Add the y Axis
        svg.append("g")
            .call(d3.axisLeft(y));

        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - margin.left)
            .attr("x",0 - (height / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text(yLabel);
    }

    //dropdown on change
    dropDown.on("change",function(d) {
        var selectedOption = d3.select(this).property("value")
        
        //call the update function
        updatePlot(selectedOption)
    })

})