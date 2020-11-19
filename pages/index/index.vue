<template>
	<view>
		<view :style="{height:statusBarHeight+'px'}"></view>
		<view class="swiper-content">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item class="swiper-item-wrap">
					<view class="swiper-item">
						<image class="swiper-img" src="../../static/index/banner.png"></image>
					</view>
				</swiper-item>
				<swiper-item class="swiper-item-wrap">
					<view class="swiper-item">
						<image class="swiper-img" src="../../static/index/banner.png"></image>
					</view>
				</swiper-item>
				<swiper-item class="swiper-item-wrap">
					<view class="swiper-item">
						<image class="swiper-img" src="../../static/index/banner.png"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="index-wrap">
			<view class="uni-swiper-msg index-news">
				<view class="news-icon">
					<image class="news-icon-img" src="../../static/index/news-tip.png"></image>
				</view>
				<swiper class="swiper " vertical="true" autoplay="false" duration="200" interval="2000">
					<swiper-item class="news-wrap" v-for="(item, index) in msg" :key="index">
						<text class="news-text">消息消息消息消息消息消息消息消息消息消息消息消息
						</text>
						<view class="news-label">NEW</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="index-module">
				<sw-grid :column="5" :gridList="gridList" :border="false" @tapGrid="tapGrid"></sw-grid>
			</view>
			<view class="index-list">
				<view class="index-list-tit">
					<view class="index-list-tit-left">
						<span class="index-list-tit-icon"></span>安全培训
					</view>
					<view class="index-list-tit-right">更多></view>
				</view>
				<view class="safeTrain-list" v-for="item in safeTrainList">
					<view class="list-img">
						<image class="news-icon-img" :src="item.img"></image>
					</view>
					<view class="list-right">
						<view class="list-right-tit">{{item.title}}</view>
						<view class="list-right-text">{{item.text}}</view>
					</view>
				</view>
			</view>
			<view class="index-list">
				<view class="index-list-tit">
					<view class="index-list-tit-left">
						<span class="index-list-tit-icon"></span>事故案例
					</view>
					<view class="index-list-tit-right">更多></view>
				</view>
				<view class="trouble-list">
					<view class="trouble-list-wrap" v-for="item in troubleList">
						<view class="trouble-list-item">
							<view class="list-img">
								<image class="news-icon-img" :src="item.img"></image>
							</view>
							<view class="trouble-list-tit">{{item.title}}</view>
							<view class="trouble-list-text">{{item.text}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import interfacel from '../../utils/interface.js'
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				statusBarHeight: 20,
				gridList: [{
					subList: [{
							src: '/static/index/module1.png',
							name: '专项培训',
							url: "/pages/specialTraining/specialTrainingList",
						},
						{
							src: '/static/index/module2.png',
							name: '案例警示',
							url: "/pages/home/release"
						},
						{
							src: '/static/index/module3.png',
							name: '应急演练',
							url: "/pages/home/release"
						}, {
							src: '/static/index/module4.png',
							name: '安全知识',
							url: "/pages/home/release"
						},
						{
							src: '/static/index/module5.png',
							name: '数据统计',
							url: "/pages/home/release"
						},
						{
							src: '/static/index/module6.png',
							name: '员工晴雨表',
							url: "/pages/home/release",
						},
						{
							src: '/static/index/module7.png',
							name: '关差闭环',
							url: "/pages/home/release"
						},
						{
							src: '/static/index/module8.png',
							name: '安全巡检',
							url: "/pages/home/release"
						}, {
							src: '/static/index/module9.png',
							name: '班前会',
							url: "/pages/home/release"
						},
						{
							src: '/static/index/module10.png',
							name: '安全状态',
							url: "/pages/home/release"
						}
					]
				}],
				safeTrainList: [{
						img: "../../static/index/safe-list.png",
						title: "专项培训专项培训专项培训专项培训1",
						text: "专项培训类学习专项培训类学习专项培训类学习专项培训类学习专项培训类学习"
					}, {
						img: "../../static/index/safe-list.png",
						title: "专项培训2",
						text: "专项培训类学习"
					},
					{
						img: "../../static/index/safe-list.png",
						title: "专项培训3",
						text: "专项培训类学习"
					}
				],
				troubleList: [{
						img: "../../static/index/trouble-list.png",
						title: "事故案例事故案例事故案例事故案例1",
						text: "专项培训类学习专项培训类学习专项培训类学习专项培训类学习专项培训类学习"
					}, {
						img: "../../static/index/trouble-list.png",
						title: "专项培训2",
						text: "专项培训类学习"
					},
					{
						img: "../../static/index/trouble-list.png",
						title: "专项培训3",
						text: "专项培训类学习"
					}
				],
				msg: ['1', '2', '3']
			}
		},
		created() {
			//获取手机系统信息
			const info = uni.getSystemInfoSync()
			//设置状态栏高度
			this.statusBarHeight = info.statusBarHeight
			console.log(info)
		},
		methods: {
			tapGrid(data) {
				console.log(data)
			}
		},
		//tabbar点击触发
		onTabItemTap(e) {
			console.log(e)
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F4F4F4;
	}

	.swiper-content {
		position: relative;
		width: 100%;
		height: 0;
		padding-top: 45.6%;

		.swiper {
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			height: auto;
			background-color: #dedede;

			.swiper-item {
				position: absolute;
				top: 0;
				right: 0;
				left: 0;
				bottom: 0;
				height: auto;

				.swiper-img {
					width: 100%;
					position: absolute;
					top: 0;
					right: 0;
					left: 0;
					bottom: 0;
					height: auto;
				}
			}
		}
	}

	.index-wrap {
		padding: 0 24rpx;
		height: 100%;

		.index-news {
			padding-left: 22rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			/*垂直居中*/
			justify-content: center;
			/*水平居中*/
			margin: 19rpx 4rpx 14rpx 4rpx;
			height: 64rpx;
			background-color: #FFFFFF;
			border-radius: 26rpx;

			.news-icon {
				width: 49rpx;
				height: 41rpx;
				vertical-align: middle;
				align-items: center;

				.news-icon-img {
					width: 49rpx;
					height: 41rpx;
				}
			}

			.news-wrap {
				position: relative;
				margin-left: 21rpx;
				flex: 1;
				display: flex;
				flex-direction: row;
				align-items: center;

				/*垂直居中*/
				.news-text {
					width: 80%;
					@include text-ellipsis-one;
					vertical-align: middle;
					align-items: center;
					color: #111111;
					font-size: 26rpx;
				}

				.news-label {
					position: absolute;
					top: -5rpx;
					left: 75%;
					color: #F40F0F;
					font-size: 18rpx;
				}
			}
		}
	}

	.index-module {
		margin-bottom: 22rpx;
		padding: 0rpx 8rpx 20rpx 8rpx;
		background-color: #ffffff;
		border-radius: 26rpx;
	}

	.index-list {
		padding-bottom: 26rpx;
		margin-bottom: 22rpx;
		background-color: #ffffff;
		border-radius: 26rpx;

		.index-list-tit {
			padding: 36rpx 30rpx 0 30rpx;
			display: flex;
			justify-content: flex-start;

			.index-list-tit-left {
				margin-bottom: 10rpx;
				color: #090909;
				font-size: 30rpx;

				.index-list-tit-icon {
					margin-right: 15rpx;
					display: inline-block;
					vertical-align: middle;
					width: 8rpx;
					height: 30rpx;
					background-color: #399AF6;
				}
			}

			.index-list-tit-right {
				margin-left: auto;
				color: #A2A2A2;
				font-size: 26rpx;
			}
		}

		.safeTrain-list {
			display: flex;
			padding: 30rpx 24rpx;
			border-bottom: 4rpx solid #F3F3F3;

			&:last-child {
				border-bottom: none;
			}

			.list-img {
				width: 307rpx;
				height: 224rpx;
				overflow: hidden;

				.news-icon-img {
					width: 100%;
					height: 100%;
				}
			}

			.list-right {
				padding-left: 50rpx;
				flex: 1;
				overflow: hidden;

				.list-right-tit {
					flex: 1;
					padding: 3rpx 0 12rpx 0;
					color: #090909;
					font-size: 36rpx;
					@include text-ellipsis-one;
				}

				.list-right-text {
					color: #9A9A9A;
					font-size: 28rpx;
					@include text-ellipsis-three();
				}
			}
		}

		.trouble-list {
			padding-bottom: 58rpx;
			width: 100%;
			overflow: hidden;

			.trouble-list-wrap {
				float: left;
				width: 50%;

				.trouble-list-item {
					margin: 36rpx 30rpx 20rpx 30rpx;

					.list-img {
						position: relative;
						width: 100%;
						height: 0;
						padding-top: 93.6%;

						image {
							position: absolute;
							top: 0;
							bottom: 0;
							left: 0;
							right: 0;
							width: 100%;
							height: 100%;
						}
					}

					.trouble-list-tit {
						line-height: 64rpx;
						color: #090909;
						font-size: 36rpx;
						@include text-ellipsis-one;
					}

					.trouble-list-text {
						color: #9A9A9A;
						font-size: 28rpx;
						@include text-ellipsis-one;
					}
				}
			}
		}
	}

	.uni-swiper-msg {

		flex-wrap: nowrap !important;

		display: flex !important;
		.swiper {
			width: 100% !important;

			height: 50upx !important;
		}

	}
</style>
