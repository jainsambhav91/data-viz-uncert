function click42(cv42){
                if(cv4.checked){
                    document.getElementById("cv12").checked = false;
                    document.getElementById("cv22").checked = false;
                    document.getElementById("cv32").checked = false;
                    // display("check");
                var x = -5;
                var y = 0;
                
                for(var i=1; i<=data[1]['preTot']; i++){
                
                var color = "";
                var clas = "";
                if(i < data[1]['postYes']){ color = "#ffa124";  clas = 'postYes4'; }else if(i< data[1]['postYes'] + data[1]['postNo']){ color = "#35b9ed";  clas = 'postNo4'; }else if(i< data[1]['postYes'] + data[1]['postNo'] + data[1]['postDk']){ color = "#ffb8f2"; clas = 'postDk4';}else if(i<= data[1]['postYes'] + data[1]['postNo'] + data[1]['postDk'] + data[1]['allDk']){color = "#ffebfc"; clas = 'allDk4';};
                    if(y%50 == 0){
                        x+=5;
                        y=0;
                        d3.select('#visual2')
                            .append('rect')
                            .attr("class", clas)
                            .attr('x', x + 20)
                            .attr('y', y + 150)
                            .attr('width', 5)
                            .attr('height', 5)
                            .attr('fill', color)
                            .attr('stroke', 'white')
                            .attr('stroke-width', 1);
                        y+=5;    
                    }else{    
                   d3.select('#visual2')
                            .append('rect')
                            .attr("class", clas)
                            .attr('x', x + 20)
                            .attr('y', y + 150)
                            .attr('width', 5)
                            .attr('height', 5)
                            .attr('fill', color)
                            .attr('stroke', 'white')
                            .attr('stroke-width', 1);
                    y+=5;
                    }
                }
                
            d3.selectAll(".postYes4")
            .on("mouseover", function(){
                div.transition()		
                .style("opacity", 1);
                div.html("<span style='font-size: 10px; color: white; text-anchor: middle; text-align: center; '>" + " " + "<b>" + data[1]['postYes'] + "</b>" + " responded 'yes' " + "</span>")	
                                        .style("left", (d3.event.pageX) - 100 + "px")		
                                        .style("top", (d3.event.pageY) - 30 + "px");
                
            })
            .on("mouseout", function() {
                div.transition()		
                .duration(0)		
                .style("opacity", 0);	
                });
           
           
            d3.selectAll(".postNo4")
            .on("mouseover", function(){
                div.transition()		
                .style("opacity", 1);
                div.html("<span style='font-size: 10px; color: white; text-anchor: middle; text-align: center; '>" + " " + "<b>" + data[1]['postNo'] + "</b>" + " responded 'no' " + "</span>")	
                                        .style("left", (d3.event.pageX) - 100 + "px")		
                                        .style("top", (d3.event.pageY) - 30 + "px");
                
            })
            .on("mouseout", function() {
                div.transition()		
                .duration(0)		
                .style("opacity", 0);	
                });
            
            d3.selectAll(".postDk4")
            .on("mouseover", function(){
                div.transition()		
                .style("opacity", 1);
                div.html("<span style='font-size: 10px; color: white; text-anchor: middle; text-align: center; '>" + " " + "<b>" + data[1]['postDk'] + "</b>" + " responded 'don't know' " + "</span>")	
                                        .style("left", (d3.event.pageX) - 100 + "px")		
                                        .style("top", (d3.event.pageY) - 30 + "px");
                
            })
            .on("mouseout", function() {
                div.transition()		
                .duration(0)		
                .style("opacity", 0);	
                }); 
            
            
            
            d3.selectAll(".allDk4")
            .on("mouseover", function(){
                div.transition()		
                .style("opacity", 1);
                div.html("<span style='font-size: 10px; color: white; text-anchor: middle; text-align: center; '>" + " " + "<b>" + data[1]['allDk'] + "</b>" + " may have responded 'don't know' " + "</span>")	
                                        .style("left", (d3.event.pageX) - 100 + "px")		
                                        .style("top", (d3.event.pageY) - 30 + "px");
                
            })
            .on("mouseout", function() {
                div.transition()		
                .duration(0)		
                .style("opacity", 0);	
                });     
                     
                
          }else{
                    // display("not checked");
                    baseVisualPost2(150);
                }
            }