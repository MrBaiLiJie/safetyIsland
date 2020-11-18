<template>
	<view class="view">
		<view class="uni-tab-bar">
			<swiper class="ct_tab" :current="current">
				<swiper-item :class="{ 'ct_active': index == current }" v-for="(item, index) in safeTrainingList" :key="index"
				 class="ct_item" @click="clickCtTab(index)">
					<text v-text="item.name" class="tabText"></text>
				</swiper-item>
			</swiper>
			
		</view>
		<view class="tabContent">
			<view class="tabContentList" v-for="(itemOne, indexOne) in tabContentList" :key="indexOne">
				<view class="leftImg">
					<image :src="itemOne.image"></image>
				</view>
				<view class="rightText">
					<view class="title">{{itemOne.name}}</view>
					<view class="text">{{itemOne.title}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				safeTrainingList: [ // 选项卡列表
					{
						name: "安全培训1",
					},
					{
						name: "安全培训2",
					},
					{
						name: "安全培训3",
					},
					{
						name: "安全培训4",
					},
					{
						name: "安全培训5",
					},
					{
						name: "安全培训6",
					}
				],
				tabContentList: [
					{
						name: "安全培训安全培训安全培训1",
						title: "安全培训1学习学习学习学习学习学习学习学习学习学习学习学习学习学习学习学习学习学习学习学习学习学习学习学习学习学习学习学习学习学习",
						image: "../../static/img/specialTraining/list1.png"
					},
				]
			}
		},
		methods: {
			clickCtTab(ctCur) {
				this.current = ctCur
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100% !important;
	}
	.view{
		height: 100%;
	}
	.ct_tab {
		width: 698rpx;
		height: 150rpx;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 300;
		color: #555555;

		.ct_item {
			width: 129rpx;
			display: block;
			margin-top: 67rpx;
		}

		swiper {
			width: 100%;
		}

		swiper-item {
			width: 150rpx !important;
		}
	}

	.ct_item:nth-child(1) {
		margin-left: 41rpx;
	}

	.ct_item:nth-child(n+2) {
		padding-left: 47rpx;
	}

	.ct_active {
		color: #007AFF;
		text {
			// border-bottom: 2rpx solid #399AF6;
			color: #399AF6;
			font-size: 33rpx;
			position: relative;
		}
	}

	.ct_active text:after {
		position: absolute;
		content: '';
		width: 47rpx;
		height: 5rpx;
		left: 0;
		right: 0;
		bottom: -13rpx;
		margin: auto;
		background: #399AF6;
	}
	.tabContent{
		height: 100%;
		background: #f4f4f4;
		.tabContentList{
			width: 686rpx;
			height: 307rpx;
			background: #FFFFFF;
			border-radius: 20rpx;
			float: left;
			margin: 21rpx 32rpx 21rpx 32rpx;
			.leftImg{
				height: 238rpx;
				width: 279rpx;
				float: left;
				margin: 39rpx auto 30rpx 40rpx;
				image{
					width: 100%;
					height:100%;
				}	
			}
			.rightText{
				width: 279rpx;
				float: left;
				margin: 45rpx auto 30rpx 40rpx;
				.title{
					width: 100%;
					font-size: 36rpx;
					font-family: PingFang SC;
					font-weight: 300;
					color: #090909;
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
				}
				.text{
					width: 100%;
					margin-top: 24rpx;
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: 300;
					color: #9A9A9A;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 4;
					overflow: hidden;
				}
			}
			
		}
	}
</style>
