<template>
	<view>
		<view class="dataStatistics_content">
			<!-- 班组评分 -->
			<view class="dataStatistics_contentOne">
				<view class="team_score" @tap="openTeamScore()">
					<view>
						<image src="../../static/img/dataStatistics/employee.png"></image>
					</view>
					<text>156</text>
					<text>156</text>
					<text>156</text>
				</view>
				<view class="team_scoreTit">
					<view>班组评分</view>
					<text>红</text>
					<text>黄</text>
					<text>绿</text>
				</view>
			</view>
			<view class="dataStatistics_contentOne">
				<view class="team_score" @tap="openEmployeesScore()">
					<view>
						<image src="../../static/img/dataStatistics/teamScore.png"></image>
					</view>
					<text>1566</text>
					<text>1576</text>
					<text>1586</text>
				</view>
				<view class="team_scoreTit">
					<view>员工评分</view>
					<text>红</text>
					<text>黄</text>
					<text>绿</text>
				</view>
			</view>
			<view class="dataStatistics_contentOne">
				<view class="team_score" @tap="openEmployeesQy()">
					<view>
						<image src="../../static/img/dataStatistics/ygqy.png"></image>
					</view>
					<text>156</text>
					<text>156</text>
					<text>156</text>
				</view>
				<view class="team_scoreTit">
					<view>员工晴雨表</view>
					<text>开心</text>
					<text>一般</text>
					<text>不开心</text>
				</view>
			</view>
		</view>
		<!-- 班组评分排行 -->
		<view class="ec-canvas">
			<view class="ec-canvasTit">班组评分排行</view>
			<view class="legend">
				<view class="ec-canvas_legend">
					<text class="legend_left">红</text>
					<image src="../../static/img/dataStatistics/red.png" class="legend_img"></image>
					<text class="legend_right"> 80 </text>
				</view>
				<view class="ec-canvas_legend">
					<text class="legend_left">黄</text>
					<image src="../../static/img/dataStatistics/yellow.png" class="legend_img"></image>
					<text class="legend_right"> 80-90 </text>
				</view>
				<view class="ec-canvas_legend">
					<text class="legend_left">绿</text>
					<image src="../../static/img/dataStatistics/green.png" class="legend_img"></image>
					<text class="legend_right"> 90-100 </text>
				</view>
			</view>
			<uni-ec-canvas class="uni-ec-canvas" id="uni-ec-canvas" ref="canvas" canvas-id="uni-ec-canvas" :ec="ec"></uni-ec-canvas>
		</view>
		<!-- 员工评分排行 -->
		<view class="ec-canvas">
			<view class="ec-canvasTit">员工评分排行</view>
			<view class="legend">
				<view class="ec-canvas_legend">
					<text class="legend_left">红</text>
					<image src="../../static/img/dataStatistics/red.png" class="legend_img"></image>
					<text class="legend_right"> 80 </text>
				</view>
				<view class="ec-canvas_legend">
					<text class="legend_left">黄</text>
					<image src="../../static/img/dataStatistics/yellow.png" class="legend_img"></image>
					<text class="legend_right"> 80-90 </text>
				</view>
				<view class="ec-canvas_legend">
					<text class="legend_left">绿</text>
					<image src="../../static/img/dataStatistics/green.png" class="legend_img"></image>
					<text class="legend_right"> 90-100 </text>
				</view>
			</view>
			<uni-ec-canvas class="uni-ec-canvas" id="uni-ec-canvas" ref="canvas_yg" canvas-id="uni-ec-canvas" :ec="ecyg"></uni-ec-canvas>
		</view>
		<!-- 员工晴雨表 -->
		<view class="ec-canvas">
			<view class="ec-canvasTit">员工晴雨表</view>
			<uni-ec-canvas class="uni-ec-canvas" id="uni-ec-canvas" ref="canvas_ygqy" canvas-id="uni-ec-canvas" :ec="ecygqy"></uni-ec-canvas>
		</view>
	</view>
</template>

<script>
	import uniEcCanvas from '@/components/uni-ec-canvas/uni-ec-canvas.vue';
	import * as echarts from '@/components/uni-ec-canvas/echarts.js';
	let chart = null;
	export default {
		data() {
			return {
				ec: {
					lazyLoad: true
				},
				ecyg:{
					lazyLoad: true
				},
				ecygqy:{
					lazyLoad: true
				},
				option: {
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					// color: ['#fd4647', '#ffdc14', '#44e37c'],
					legend: {
						// data: ['红<80', '黄80-90', '绿90-100']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '5%',
						containLabel: true
					},
					xAxis: [

						{
							type: 'category',
							axisTick: {
								show: false
							},
							data: ['班组1', '班组二', '班组三', '班组四', '班组五'],
							splitLine: {
								show: false,

							}
						}
					],
					yAxis: [{
							name: '分',
							type: 'value'
						}

					],
					series: {
						name: '',
						type: 'bar',
						itemStyle: {
							normal: {
								label: {
									show: true,
									position: 'top',
									textStyle: {
										color: 'black',
										fontSize: 16
									}
								},
								color: function(params) {
									var index_color = params.data;
									// index_color < 80 ? "#fd4647" : (index_color >= 80 && index_color < 90) ? "#ffdc14" : "#44e37c"
									if (index_color < 80) {
										return '#fd4647';
									} else if (index_color >= 80 && index_color < 90) {
										return '#ffdc14';
									} else if (index_color >= 90 && index_color < 100) {
										return '#44e37c';
									}
								}

							},

						},
						data: [60, 86, 95, 50, 99],
					},
				},
				optionOne :{
				    tooltip: {
				        trigger: 'axis',
				        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
				            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				        }
				    },
				      color:['#fd4647','#ffdc14','#44e37c'],
				    legend: {
				        // data: ['红<80', '黄80-90', '绿90-100']
						data:[]
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        bottom: '5%',
				        containLabel: true
				    },
				    xAxis: [
				        {
				            type: 'category',
				            data: ['班组1', '班组二', '班组三', '班组四', '班组五']
				        }
				    ],
				    yAxis: [
				        {   name: '%',
				            type: 'value'
				        }
				    ],
				    series: [
				
				        {
				            name: '红<80',
				            type: 'bar',
				            stack: '总量',
				            data: [10, 32, 11, 34, 90]
				        },
				        {
				            name: '黄80-90',
				            type: 'bar',
				            stack: '总量',
				            data: [20, 82, 91, 34, 20]
				        },
				        {
				            name: '绿90-100',
				            type: 'bar',
				            stack: '总量',
				            data: [50, 32, 20, 54, 90]
				        },
				       
				    ]
				},
				optionTwo : {
				    tooltip: {
				        trigger: 'item',
				        formatter: '{a} <br/>{b}: {c} ({d}%)'
				    },
					color:['#fd4647','#ffdc14','#44e37c'],
				    legend: {
				        orient: 'vertical',
				        right: 10,
				        top:'35%',
				        'itemWidth':45,
				        'itemHeight':10,
				        data: ['不开心', '一般', '开心'],
				        
				    },
					grid: {
					    left: '0%',
					    right: '4%',
					    bottom: '5%',
					    containLabel: true
					},
				    series: [
				        {
				            name: '',
				            type: 'pie',
				            radius: ['40%', '65%'],
				            avoidLabelOverlap: false,
				            label: {
				                show: false,
				                position: 'center'
				            },
							center:['35%','40%'],
				            emphasis: {
				                label: {
				                    show: true,
				                    fontSize: '30',
				                    fontWeight: 'bold'
				                }
				            },
				            labelLine: {
				                show: false
				            },
				            data: [
				                {value: 335, name: '不开心'},
				                {value: 310, name: '一般'},
				                {value: 234, name: '开心'}
				            ]
				        }
				    ]
				}


			};
		},
		components: {
			uniEcCanvas
		},
		computed: {

		},
		onLoad() {
			this.$refs.canvas.init(this.initChart);   //班组排行
			this.$refs.canvas_yg.init(this.initChart_yg); //员工排行
			this.$refs.canvas_ygqy.init(this.initChart_ygqy)   //员工晴雨
		},
		methods: {
			initChart(canvas, width, height, canvasDpr) {
				console.log(canvas, width, height, canvasDpr)
				chart = echarts.init(canvas, null, {
					width: width,
					height: height,
					devicePixelRatio: canvasDpr
				})
				canvas.setChart(chart)
				chart.setOption(this.option)
				return chart
			},
			initChart_yg(canvas, width, height, canvasDpr) {
				console.log(canvas, width, height, canvasDpr)
				chart = echarts.init(canvas, null, {
					width: width,
					height: height,
					devicePixelRatio: canvasDpr
				})
				canvas.setChart(chart)
				chart.setOption(this.optionOne)
				return chart
			},
			initChart_ygqy(canvas, width, height, canvasDpr) {
				console.log(canvas, width, height, canvasDpr)
				chart = echarts.init(canvas, null, {
					width: width,
					height: height,
					devicePixelRatio: canvasDpr
				})
				canvas.setChart(chart)
				chart.setOption(this.optionTwo)
				return chart
			},
			// 跳转班组评分
			openTeamScore(){
				uni.navigateTo({
					url:'./teamScore'
				})
			},
			// 跳转员工评分
			openEmployeesScore(){
				uni.navigateTo({
					url:'./employeesScore'
				})
			}, 
			// 跳转员工晴雨
			openEmployeesQy(){
				uni.navigateTo({
					url:'./employeesQy'
				})
			}
			
		}
	}
</script>

<style lang="scss">
	@import url("../../common/list_content.css");

	.dataStatistics_content {
		width: 701rpx;
		height: 577rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin: 21rpx auto;

		.dataStatistics_contentOne {
			text {
				width: 118rpx;
				text-align: center;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 300;
				color: #0A0A0A;
			}
		}

		.team_score {
			overflow: hidden;
			height: 115rpx;

			view {
				width: 158rpx;
				float: left;
				margin: 31rpx auto auto 21rpx;
				text-align: center;
			}

			image {
				width: 86rpx;
				height: 84rpx;

			}

			text {
				float: left;
				margin: 60rpx auto auto 46rpx;
			}
		}

		.team_scoreTit {
			overflow: hidden;

			view {
				width: 162rpx;
				float: left;
				margin: 27rpx auto auto 21rpx;
				text-align: center;
			}

			text {
				float: left;
				margin: 27rpx auto auto 46rpx;
			}
		}
	}

	.ec-canvas {
		width: 680rpx;
		height: 800rpx;
		background: #FFFFFF;
		border-radius: 20px;
		margin: 21rpx auto;
		overflow: hidden;
        position: relative;
		.uni-ec-canvas {
			width: 98%;
			height: 84%;
			display: block;
			position: absolute;
			top: 12%;
		}

		.ec-canvasTit {
			font-size: 30rpx;
			font-family: Noto Sans S Chinese;
			font-weight: 400;
			color: #0F0F0F;
			margin: 32rpx auto auto 34rpx;
		}

		.legend {
			overflow: hidden;
            position: absolute;
			top: 10%;
			.ec-canvas_legend {
				overflow: hidden;
				float: left;
				margin-left: 40rpx;
				height: 50rpx;
				line-height: 50rpx;

				.legend_left {
					font-size: 23rpx;
					font-family: PingFang SC;
					font-weight: 400;
					color: #101010;
					float: left;
				}

				.legend_img {
					width: 101rpx;
					height: 49rpx;
					float: left;
				}

				.legend_right {
					font-size: 20rpx;
					font-family: PingFang SC;
					font-weight: 400;
					color: #101010;
					float: left;
				}
			}
		}
	}

	.ec-canvasTwo {
		width: 680rpx;
		height: 640rpx;
		background: #FFFFFF;
		border-radius: 20px;
		margin: 65rpx auto;

		.uni-ec-canvas {
			width: 98%;
			height: 98%;
			display: block;
		}
	}
</style>
