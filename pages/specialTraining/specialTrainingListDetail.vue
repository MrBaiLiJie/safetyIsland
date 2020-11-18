<template>
	<view>
		<view class="specialTrainingListDetail">
			<image src="../../static/img/specialTraining/video.png"></image>

			<view>
				<view class="detailTit">安全培训视频标题</view>
				<view class="detailText">视频安全培训</view>
			</view>
		</view>
		<view class="segmentation"></view>
		<!-- 视频简介 -->
		<view class="detailVideoText">
			<view class="detailVideo_title">
				<view class="detailVideo_div"></view>
				<view class="detailVideo_text">安全培训视频简介</view>
			</view>
			<view class="detailVideo_content">
				课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程。
			</view>
		</view>
		<!-- 课程大纲 -->
		<view class="detailVideoText">
			<view class="detailVideo_title">
				<view class="detailVideo_div"></view>
				<view class="detailVideo_text">课程大纲</view>
			</view>
			<view class="detailVideo_content">
				班组员工三级安全培训。
			</view>
		</view>
		<!-- 课程具体内容 -->
		<view class="detailVideoText">
			<view class="detailVideo_title">
				<view class="detailVideo_div"></view>
				<view class="detailVideo_text">课程大纲</view>
			</view>
			<view class="detailVideo_content">
				课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍 课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍。。
			</view>
		</view>

		<view class="detailButton">
			<image src="../../static/img/specialTraining/yes.png" class="buttonYes"></image>
			<image src="../../static/img/specialTraining/no.png" class="buttonNo"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	page {
		height: 100% !important;
	}

	.specialTrainingListDetail {
		width: 748rpx;
		height: 600rpx;

		image {
			width: 100%;
			height: 402rpx;
		}

		.detailTit {
			margin: 45rpx auto auto 51rpx;
			font-size: 36rpx;
			font-family: PingFang SC;
			font-weight: 300;
			color: #000000;
		}

		.detailText {
			margin: 29rpx auto auto 59rpx;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 300;
			color: #8C8C8C;
		}
	}

	.segmentation {
		width: 100%;
		height: 16rpx;
		background: #f4f4f4;
	}

	.detailVideoText {
		.detailVideo_title {
			margin: 50rpx auto auto 44rpx;
			overflow: hidden;

			.detailVideo_div {
				width: 8rpx;
				height: 30rpx;
				background: #399AF6;
				float: left;
				margin-top: 10rpx;
			}

			.detailVideo_text {
				float: left;
				font-size: 36rpx;
				font-family: PingFang SC;
				font-weight: 300;
				color: #010101;
				margin-left: 12rpx;
			}
		}

		.detailVideo_content {
			margin: 41rpx 60rpx auto 60rpx;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 300;
			color: #818181;
		}
	}

	.detailButton {
		overflow: hidden;
        margin:226rpx auto 67rpx auto;
		.buttonYes {
			width: 252rpx;
			height: 117rpx;
			float: left;
			margin-left: 40rpx;
		}

		.buttonNo {
			width: 252rpx;
			height: 117rpx;
			float: left;
			margin-left: 154rpx;
		}
	}
</style>
