<template>
	<view>
		<view class="list_content">
			<view class="list_content_title">
				<image src="../../static/img/dataStatistics/smile.png"></image>
				<text class="title_left">班组1开心总数</text>
				<text class="title_right">156</text>
			</view>
			<view class="segmentation"></view> <!-- 分割 -->
			<view class="list_content_div">
				<view class="list_content_divList">
					<text>李四</text>
					<text class="smilingOn">56</text>
				</view>
				<view class="list_content_divList">
					<text>刘二</text>
					<text class="smilingOn">56</text>
				</view>
				<view class="list_content_divList">
					<text>张三</text>
					<text class="smilingOn">5666</text>
				</view>
			</view>
		</view>
		<view class="list_content">
			<view class="list_content_title">
				<image src="../../static/img/dataStatistics/general.png"></image>
				<text class="title_left">班组2一般总数</text>
				<text class="title_right">56</text>
			</view>
			<view class="segmentation"></view> <!-- 分割 -->
			<view class="list_content_div">
				<view class="list_content_divList">
					<text>李四</text>
					<text class="smilingOn">6</text>
				</view>
				<view class="list_content_divList">
					<text>刘二</text>
					<text class="smilingOn">5</text>
				</view>
				<view class="list_content_divList">
					<text>张三</text>
					<text class="smilingOn">666</text>
				</view>
			</view>
		</view>
		<view class="list_content">
			<view class="list_content_title">
				<image src="../../static/img/dataStatistics/nosmile.png"></image>
				<text class="title_left">班组3不开心总数</text>
				<text class="title_right">16</text>
			</view>
			<view class="segmentation"></view> <!-- 分割 -->
			<view class="list_content_div">
				<view class="list_content_divList">
					<text>李四</text>
					<text class="smilingOn">6</text>
				</view>
				<view class="list_content_divList">
					<text>刘二</text>
					<text class="smilingOn">56</text>
				</view>
				<view class="list_content_divList">
					<text>张三</text>
					<text class="smilingOn">566</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				date: ''
			};
		},
		onLoad() {
			this.getDate()
		},
		methods: {
			getDate() {
				let date_now = new Date();
				console.log(date_now)
				let year = date_now.getFullYear();
				let month = date_now.getMonth() + 1;
				let day = date_now.getDate();
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				// console.log(year + '-' + month + '-' + day)
				this.date = year + '-' + month + '-' + day
				// return year + '-' + month + '-' + day;

			},
			changeDate: function(e) {
				this.date = e.detail.value
			},
			cancelSelect(e) {
				console.log("取消选择");
			}

		}
	}
</script>

<style lang="scss">
	@import url("../../common/list_content.css");

	.listHead {
		width: 703rpx;
		margin: 14rpx auto auto 26rpx;
		display: flex;
		justify-content: space-between;

		.listHead_search {
			width: 471rpx;
			height: 66rpx;
			position: relative;

			input {
				width: 100%;
				height: 100%;
				background: #FBFDFF;
				border-radius: 30rpx;
			}

			image {
				width: 91rpx;
				height: 46rpx;
				position: absolute;
				top: 12rpx;
				right: 13rpx;
			}

		}

		.listHead_time {
			width: 211rpx;
			height: 61rpx;
			border: 1rpx solid #838383;
			overflow: hidden;

			text {
				width: 132rpx;
				font-size: 22rpx;
				font-family: PingFang SC;
				font-weight: 300;
				color: #949494;
				float: left;
				margin: 17rpx auto 20rpx 17rpx;
			}

			image {
				width: 28rpx;
				height: 18rpx;
				float: left;
				margin: 20rpx auto 20rpx 24rpx;
			}
		}
	}

	.list_content {
		width: 701rpx;
		// height: 442rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin: 18rpx auto;
        overflow: hidden;
		.list_content_title {
			// width: 100%;
			height: 119rpx;
			background: #FBFDFF;
			// line-height: 95rpx;
			border-radius: 20rpx 20rpx 0 0; //左上角，右上角，右下角，左下角
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 400;
			// margin: 41rpx auto auto 40rpx;
			overflow: hidden;

			image {
				width: 61rpx;
				height: 61rpx;
				float: left;
				margin: 32rpx auto auto 31rpx;
			}

			.title_left {
                float: left;
				color: #050505;
				margin: 44rpx auto auto 26rpx;
			}

			.title_right {
				float: right;
				color: #5F5F5F;
				margin: 47rpx 56rpx auto auto;
			}
		}

		.segmentation {
			width: 100%;
			height: 7rpx;
			background: rgba(207, 207, 207, 0.22);
		}

		.list_content_div {
			// margin-top: 7rpx;
			background: #FFFFFF;
			overflow: hidden;

			.list_content_divList {
				overflow: hidden;
				height: 91rpx;
				border-bottom: 2rpx solid rgba(207, 207, 207, 0.22);

				text {
					float: left;
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: 300;
					color: #5F5F5F;
					margin: 28rpx auto auto 40rpx;
				}

				.smilingOn {
					// width: 59rpx;
					height: 59rpx;
					float: right;
					margin: 29rpx 59rpx auto auto;
				}
			}

		}
	}
</style>
