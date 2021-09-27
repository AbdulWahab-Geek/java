
            var option={
                chart:{type:"line"},stroke: {curve: 'smooth'},
                series:[
                    {name:"total studetn",data:[55,15,45,35,25]},
                    {name:"Class", data:[5,6,4,8,2]}
                ],
                xaxis:{categories:[2015,2016,2017,2018,2019]}
            };
            var chart=new ApexCharts(document.querySelector("#chart"),option);
            chart.render();


            
            // Second Chart 
            
            var option1={
                chart:{ type:"area"},color:['#00BAEC'] , dataLabels: {enabled: false},
                series: [{name: "Series 1",data: [[1, 34], [3.8, 43], [5, 31] , [10, 43], [13, 33], [15, 43], [18, 33] , [20, 52]]}],
                xaxis: {type: 'numeric'}
            };
            var chart1=new ApexCharts(document.querySelector("#chart1"),option1);
            chart1.render();

            // Third Chart
            
            var option2={
                chart:{type:'line',stacked: false},
                dataLabels: {enabled: false},
                series:[
                    {name:"series A",data:[10,30,50,70,90]},
                    {name:'Series B', data:[20,40,60,35,100]}
                ],
                xaxis:{categories:[2009,2010,2011,2012,2015]},
                yaxis: {axisTicks: {show: true}},axisBorder:{show: true,color: "#FF1654"},
                opposite: true,xisTicks: {show: true}, axisBorder: {show: true,color: "#247BA0"}
            };
            var chart2=new ApexCharts(document.querySelector("#chart2"),option2);
            chart2.render();

        // Fourth Chart

            var option3={
                chart:{type:'treemap'},color:['#52c12C'],
                series:[{data:[{x:"Total Sales (This Month)",y:"100"},{x:"Total Receiveable",y:"200"},{x:"Total Payable",y:"50"},{x:"Sales Order",y:"5"},{x:"Overdue Job",y:"100"}]}],
                legend:{show:false},
                dataLabels:{enabled:true,style:{fontSize:'26px',},
                formatter: function(text,op){return[text,op.value]},
                },
            };
            var chart3=new ApexCharts(document.querySelector("#chart3"),option3);
            chart3.render();

            //Fifth Chart

            var option4={
                chart:{type:"line"},
                series:[
                    {name:"Team A",data: [1, 2, 4, 5, 15, 28, 38, 46]},
                    {name: 'TEAM B',data: [20, 29, 37, 36, 44, 45, 50, 58]},
                    {name: 'TEAM C',data: [10, 19, 17, 36, 44, 45, 20, 38]}
                ],
                xaxis:{categories:[2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]},
                yaxis:[
                    {seriesName:"TEAM A"},
                    {seriesName:"TEAM B"},
                    {seriesName:"TEAM c"},
                ]
            };
            var chart4=new ApexCharts(document.getElementById('chart4'),option4);
            chart4.render();

            //Sixth Chart
            
            var option5={
                chart:{type:'pie'},
                series:[44,13,33,55],
                dataLabels:{enabled:true},
                labels:["apple","mango",'orange','watermelon']
                ,plotOptions:{pie:{size:{donut:{size:'50%'}}}}
            };
            var chart5=new ApexCharts(document.getElementById('chart5'),option5);
            chart5.render();
            
            // Seventh Chart

            var option6={
                chart:{type:'radialBar', height:550},

                series:[84],
                labels:['Progress']
            };
            var chart6=new ApexCharts(document.getElementById('chart6'),option6);
            chart6.render();