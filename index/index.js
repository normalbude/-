window.onload = function () {
    let map = new AMap.Map("container", {
        zoom: 20, //设置地图显⽰的缩放级别
        // center: [107.40, 33.42] //设置地图中⼼点坐标
    });
    // 创建⼀个 Marker 实例：（标记点）
    /*let marker = new AMap.Marker({
        position: new AMap.LngLat(108.40, 34.42), // 经纬度对象，也可以是经纬度构成的⼀维数组[116.39, 39.9]
        title: "位置标题"
    });
    // 将创建的点标记添加到已有的地图实例：
    map.add(marker);*/

    let leftChart = echarts.init(document.getElementById('left1'));
    let optionLeft = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
        },
        series: [
            {
                name: '2021',
                type: 'bar',
                data: [18203, 23489, 29034, 104970, 131744, 630230]
            },
            {
                name: '2022',
                type: 'bar',
                data: [19325, 23438, 31000, 121594, 134141, 681807]
            }
        ]
    };
    leftChart.setOption(optionLeft);

    let leftChart0 = echarts.init(document.getElementById('left2'));
    let optionLeft0 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },/*
        toolbox: {
            feature: {
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },*/
        legend: {
            data: ['Evaporation', 'Precipitation', 'Temperature']
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'Precipitation',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value} ml'
                }
            },
            {
                type: 'value',
                name: 'Temperature',
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                    formatter: '{value} °C'
                }
            }
        ],
        series: [
            {
                name: 'Evaporation',
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' ml';
                    }
                },
                data: [
                    2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
                ]
            },
            {
                name: 'Precipitation',
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' ml';
                    }
                },
                data: [
                    2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
                ]
            },
            {
                name: 'Temperature',
                type: 'line',
                yAxisIndex: 1,
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' °C';
                    }
                },
                data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
        ]
    }

    leftChart0.setOption(optionLeft0);

    let rightChart = echarts.init(document.getElementById('right1'))
    let optionRight = {
        angleAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        radiusAxis: {},
        polar: {},
        series: [
            {
                type: 'bar',
                data: [1, 2, 3, 4, 3, 5, 1],
                coordinateSystem: 'polar',
                name: 'A',
                stack: 'a',
                emphasis: {
                    focus: 'series'
                }
            },
            {
                type: 'bar',
                data: [2, 4, 6, 1, 3, 2, 1],
                coordinateSystem: 'polar',
                name: 'B',
                stack: 'a',
                emphasis: {
                    focus: 'series'
                }
            },
            {
                type: 'bar',
                data: [1, 2, 3, 4, 1, 2, 5],
                coordinateSystem: 'polar',
                name: 'C',
                stack: 'a',
                emphasis: {
                    focus: 'series'
                }
            }
        ],
        legend: {
            show: true,
            data: ['A', 'B', 'C']
        }
    };
    rightChart.setOption(optionRight)

    let rightChart0 = echarts.init(document.getElementById('right2'))
    let optionRight0 = {
        title: {
            text: 'Referer of a Website',
            subtext: 'Fake Data',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    rightChart0.setOption(optionRight0)
}
