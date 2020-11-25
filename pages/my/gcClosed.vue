<template>
	<view>
		<view class="gc_close">
			<view class="close_time">
				<picker mode="date" :value="date" @change="changeDate" @cancel="cancelSelect">
					<text class="text">{{date}}</text>
					<image src="../../static/img/barometer/down.png"></image>
				</picker>
			</view>
			<view class="close_type">
				<picker mode="selector" :value="index" :range="typeArr" @change="changeType" @cancel="cancelSelectType">
					<text class="text">{{typeArr[index]}}</text>
					<image src="../../static/img/barometer/down.png"></image>
				</picker>
			</view>
		</view>
		<view class="gc_closeContent">
			<view class="gc_closeContent_title">应急演练问题</view>
			<view class="segmentation"></view> <!-- //分割线 -->
			<view class="question">
				<text>问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容</text>
			</view>
			<view class="submit_content">
				<text class="submit_people">提交人:张三</text>
				<text class="submit_time">2020-11-25</text>
			</view>
			<view class="to_reply" @tap="openGcClosedNext()">待回复</view>
		</view>
	</view>
</template>

<script>
	import utilsGet from '@/utils/getDate.js';
	export default {
		data() {
			return {
				date: utilsGet.getDate(),
				index: 0,
				typeArr: ['待回复', '待确认', '待关闭']
			};
		},
		onLoad() {},
		methods: {
			changeDate: function(e) {
				this.date = e.detail.value
			},
			cancelSelect(e) {
				console.log("取消选择");
			},
			changeType: function(e) {
				console.log(e)
				this.index = e.detail.value
			},
			cancelSelectType(e) {
				console.log("取消选择");
			},
			openGcClosedNext(){
				uni.navigateTo({
					url:'./gcClosedNext'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import url("../../common/list_content.css");

	.gc_close {
		background-color: #ffffff;
		overflow: hidden;

		.close_time {
			width: 207rpx;
			height: 50rpx;
			border: 2rpx solid #838383;
			overflow: hidden;
			// margin: 16rpx auto;
			border-radius: 25rpx;
			background: #EBEBEB;
			float: left;
			margin: 44rpx auto auto 41rpx;

			text {
				// width: 132rpx;
				font-size: 23rpx;
				font-family: PingFang SC;
				font-weight: 300;
				color: #949494;
				float: left;
				margin: 12rpx auto 13rpx 23rpx;
			}

			image {
				width: 14rpx;
				height: 10rpx;
				float: right;
				margin: 20rpx 13rpx auto auto;
			}
		}

		.close_type {
			width: 166rpx;
			height: 50rpx;
			border: 2rpx solid #838383;
			overflow: hidden;
			// margin: 16rpx auto;
			border-radius: 25rpx;
			background: #EBEBEB;
			float: right;
			margin: 44rpx 33rpx 13rpx auto;

			text {
				// width: 132rpx;
				font-size: 23rpx;
				font-family: PingFang SC;
				font-weight: 300;
				color: #949494;
				float: left;
				margin: 12rpx auto auto 33rpx;
			}

			image {
				width: 14rpx;
				height: 10rpx;
				float: right;
				margin: 20rpx 25rpx auto auto;
			}
		}
	}

	.gc_closeContent {
		width: 684rpx;
		// height: 388px;
		background: #FFFFFF;
		border-radius: 23rpx;
		overflow: hidden;
		margin: 16rpx auto;
		.gc_closeContent_title {
			height: 78rpx;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 400;
			color: #000000;
			line-height: 78rpx;
			margin-left: 41rpx;
		}

		.segmentation {
			width: 100%;
			height: 7rpx;
			background: rgba(207, 207, 207, 0.22);
		}

		.question {
			width: 598rpx;
			font-size: 24rpx;
			font-family: PingFang SC;
			font-weight: 300;
			color: #7C7C7C;
			text-indent: 50rpx;
			margin: 23rpx auto;
		}

		.submit_content {
             overflow: hidden;
			 margin-top: 16rpx;
			.submit_people,
			.submit_time {
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 300;
				color: #8C8C8C;
			}
			.submit_people{
				float: left;
				margin: 0rpx auto auto 44rpx;
			}
			.submit_time{
				float: right;
				margin: 4rpx 50rpx auto auto;
			}
		}

		.to_reply {
			width: 166rpx;
			height: 50rpx;
			background: #EBEBEB;
			border-radius: 25rpx;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 300;
			color: #7B7B7B;
			text-align: center;
			line-height: 50rpx;
			float: left;
			margin: 47rpx auto 32rpx 41rpx;
		}
	}
</style>
