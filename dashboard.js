var option={
    chart:{type:'treemap'}, plotOptions: {treemap:{distributed: true}},
    series:[{data:[{x:'Total Sales',y:75}]}],
    backgroundColor:['#f38b4a'],
    dataLabels: {style:{fontSize:'25px',colors:['#F44336']},formatter:function(text,op){return[text,op.value]}}
};
var chart1=new ApexCharts(document.querySelector('#chart1'),option);
var chart2=new ApexCharts(document.querySelector('#chart2'),option);
var chart3=new ApexCharts(document.querySelector('#chart3'),option);
chart1.render();
chart2.render();
chart3.render();



var option1={
    chart:{type:"line"},stroke: {curve: 'smooth'},
    series:[
        {name:"total studetn",data:[55,15,45,35,25]},
        {name:"Class", data:[5,6,4,8,2]}
    ],
    xaxis:{categories:[2015,2016,2017,2018,2019]}
};
var chart=new ApexCharts(document.querySelector("#linecharts1"),option1);
chart.render();

var option2={
    chart:{type:'bar',stacked: false},
    dataLabels: {enabled: false},
    series:[
        {name:"series A",data:[10,30,50,70,90]},
        {name:'Series B', data:[20,40,60,35,100]}
    ],
    xaxis:{categories:[2009,2010,2011,2012,2015]},
    yaxis: {axisTicks: {show: true}},axisBorder:{show: true,color: "#FF1654"},
    opposite: true,xisTicks: {show: true}, axisBorder: {show: true,color: "#247BA0"}
};
var chart=new ApexCharts(document.querySelector("#linecharts2"),option2);
chart.render();

var option3={
    chart:{ type:"area"},color:['#00BAEC'] , dataLabels: {enabled: false},
    series: [{name: "Series 1",data: [[1, 34], [3.8, 43], [5, 31] , [10, 43], [13, 33], [15, 43], [18, 33] , [20, 52]]}],
    xaxis: {type: 'numeric'}
};
var chart1=new ApexCharts(document.querySelector("#linecharts3"),option3);
chart1.render();

var option4={
    chart:{type:'pie'},
    series:[44,13,33,55],
    backgroundColor: ["#0074D9", "#FF4136", "#2ECC40", "#FF851B"],
    labels:["apple","mango",'orange','watermelon'],
    dataLabels:{enabled:false}
};
var chart=new ApexCharts(document.querySelector('#piechart1'),option4);
chart.render();

var option5={
    chart:{type:'pie'},
    series:[35,49,33,55,88],
    labels:["April","May",'June','July',"septembor"],
    dataLabels:{enabled:false}
};
var chart=new ApexCharts(document.querySelector('#piechart2'),option5);
chart.render();

var option5={
    chart:{type:'pie'},
    series:[35,49,33,55,88],
    labels:["April","May",'June','July',"septembor"],
    dataLabels:{enabled:false}
};
var chart=new ApexCharts(document.querySelector('#piechart3'),option5);
chart.render();
