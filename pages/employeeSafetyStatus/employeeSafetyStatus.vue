<template>
	<view>
		<!-- 搜索 -->
		<view class="listHead">
			<view class="listHead_search">
				<input type="text" maxlength=12 cursor=5 placeholder="请输入搜索内容" placeholder-style="margin-left:37rpx">
				<image src="../../static/img/barometer/search.png"></image>
			</view>
		</view>

		<view class="list_content">
			<view class="list_content_title">班组1</view>
			<view class="segmentation"></view> <!-- 分割 -->
			<view class="list_content_div">
				<view class="list_content_divList" @tap="openDetail()">
					<text>张三</text>
					<view>安全状态:黄</view>
					<image class="submit-arrow" src="../../static/img/emergencyDrill/arrow.png" />
				</view>
				<view class="list_content_divList">
					<text>张三</text>
					<view>安全状态:绿</view>
					<image class="submit-arrow" src="../../static/img/emergencyDrill/arrow.png" />
				</view>
				<view class="list_content_divList">
					<text>张三</text>
					<view>安全状态:绿</view>
					<image class="submit-arrow" src="../../static/img/emergencyDrill/arrow.png" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		onLoad() {
		},
		methods: {
           openDetail(){
			   uni.navigateTo({
			   	url:'./employeeSafetyStatusDetail'
			   })
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
			width: 692rpx;
			height: 66rpx;
			position: relative;
			background: #FBFDFF;
			border-radius: 30rpx;
			top: 19rpx;
			input {
				width: 100%;
				height: 100%;
				position: absolute;
				left: 3%;
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
		margin: 15rpx auto;

		.list_content_title {
			// width: 100%;
			height: 95rpx;
			background: #FBFDFF;
			line-height: 95rpx;
			border-radius: 20rpx 20rpx 0 0; //左上角，右上角，右下角，左下角
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 400;
			color: #1B1B1B;
			margin: 41rpx auto auto 40rpx;
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
				height: 81rpx;
				border-bottom: 2rpx solid rgba(207, 207, 207, 0.22);

				text {
					float: left;
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: 300;
					color: #5F5F5F;
					margin: 26rpx auto auto 40rpx;
				}
                view{
                	font-size: 26rpx;
                	font-family: PingFang SC;
                	font-weight: 300;
                	color: #A4A4A4;
                	float: left;
                	margin: 26rpx auto auto 353rpx;
                }
				.submit-arrow {
					width: 17rpx;
					height: 30rpx;
					float: left;
					margin: 29rpx auto auto 50rpx;
				}
			}

		}
	}
</style>
