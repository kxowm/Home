//Flot Pie Chart Devices
$(function() {

    var data = [{
        label: "iPhone",
        data: 21,
        color: "#d3d3d3",
    }, {
        label: "Samsung",
        data: 3,
        color: "#bababa",
    }, {
        label: "Windows",
        data: 15,
        color: "#79d2c0",
    }, {
        label: "Blackberry",
        data: 52,
        color: "#1ab394",
    }];

    var plotObj = $.plot($("#flot-pie-chart-devices"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

});

//Flot Pie Chart Browsers
$(function() {

    var data = [{
        label: "Chrome",
        data: 21,
        color: "#d3d3d3",
    }, {
        label: "Firefox",
        data: 3,
        color: "#bababa",
    }, {
        label: "IE",
        data: 15,
        color: "#79d2c0",
    }, {
        label: "Safari",
        data: 52,
        color: "#1ab394",
    }];

    var plotObj = $.plot($("#flot-pie-chart-browsers"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

});

//Flot Pie Chart Sources
$(function() {

    var data = [{
        label: "Client 1",
        data: 21,
        color: "#d3d3d3",
    }, {
        label: "Client 2",
        data: 3,
        color: "#bababa",
    }, {
        label: "Client 3",
        data: 15,
        color: "#79d2c0",
    }, {
        label: "Client 4",
        data: 52,
        color: "#1ab394",
    }];

    var plotObj = $.plot($("#flot-pie-chart-sources"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

});


//Flot Pie Chart Carriers
$(function() {

    var data = [{
        label: "Carriers 1",
        data: 21,
        color: "#d3d3d3",
    }, {
        label: "Carriers 2",
        data: 3,
        color: "#bababa",
    }, {
        label: "Carriers 3",
        data: 15,
        color: "#79d2c0",
    }, {
        label: "Carriers 4",
        data: 52,
        color: "#1ab394",
    }];

    var plotObj = $.plot($("#flot-pie-chart-carriers"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

});

//Flot Pie Chart Gender
$(function() {

    var data = [{
        label: "Male",
        data: 50,
        color: "#d3d3d3",
    },{
        label: "Female",
        data: 50,
        color: "#1ab394",
    }];

    var plotObj = $.plot($("#flot-pie-chart-gender"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

});

//Flot Pie Chart Age groups
$(function() {

    var data = [{
        label: "18/24",
        data: 21,
        color: "#d3d3d3",
    }, {
        label: "24/34",
        data: 3,
        color: "#bababa",
    }, {
        label: "35/44",
        data: 15,
        color: "#79d2c0",
    }, {
        label: "45/54",
        data: 37,
        color: "#1ab394",
    }, {
        label: ">55",
        data: 15,
        color: "#79d2c0",
    }];

    var plotObj = $.plot($("#flot-pie-chart-age-groups"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

});

//Flot Pie Chart Spending power
$(function() {

    var data = [{
        label: "High",
        data: 20,
        color: "#d3d3d3",
    }, {
        label: "Medium",
        data: 40,
        color: "#1ab394",
    }, {
        label: "Low",
        data: 40,
        color: "#79d2c0",
    }];

    var plotObj = $.plot($("#flot-pie-chart-spending-power"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

});

//Flot Pie Chart User type
$(function() {

    var data = [{
        label: "Business",
        data: 60,
        color: "#1ab394",
    }, {
        label: "Private",
        data: 40,
        color: "#79d2c0",
    }];

    var plotObj = $.plot($("#flot-pie-chart-user-type"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

});

//Flot Pie Chart Interest
$(function() {

    var data = [{
        label: "Auto",
        data: 21,
        color: "#d3d3d3",
    }, {
        label: "Sports",
        data: 3,
        color: "#bababa",
    }, {
        label: "Health",
        data: 15,
        color: "#79d2c0",
    }, {
        label: "Education",
        data: 37,
        color: "#1ab394",
    }, {
        label: "Other",
        data: 15,
        color: "#79d2c0",
    }];


if ($("#sin-chart").length) {
					var sin = [], cos = [];
					for (var i = 0; i < 16; i += 0.5) {
						sin.push([i, Math.sin(i)]);
						cos.push([i, Math.cos(i)]);
					}

					var plot = $.plot($("#sin-chart"), [{
						data : sin,
						label : "sin(x)"
					}, {
						data : cos,
						label : "cos(x)"
					}], {
						series : {
							lines : {
								show : true
							},
							points : {
								show : true
							}
						},
						grid : {
							hoverable : true,
							clickable : true,
							tickColor : $chrt_border_color,
							borderWidth : 0,
							borderColor : $chrt_border_color,
						},
						tooltip : true,
						tooltipOpts : {
							//content : "Value <b>$x</b> Value <span>$y</span>",
							defaultTheme : false
						},
						colors : [$chrt_second, $chrt_fourth],
						yaxis : {
							min : -1.1,
							max : 1.1
						},
						xaxis : {
							min : 0,
							max : 15
						}
					});

					$("#sin-chart").bind("plotclick", function(event, pos, item) {
						if (item) {
							$("#clickdata").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
							plot.highlight(item.series, item.datapoint);
						}
					});
				}






    var plotObj = $.plot($("#flot-pie-chart-interest"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

});


