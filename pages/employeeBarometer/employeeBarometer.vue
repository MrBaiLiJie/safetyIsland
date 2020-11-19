<template>
	<view>
		<view class="barometer">
			<view class="barometer_title">今日心情</view>
			<view class="barometer_content">
				<view class="barometer_contentListOne">
					<image src="../../static/img/barometer/smiling.png" class="barometer_contentListImg"></image>
					<text class="barometer_contentListText">开心</text>
				</view>
				<view class="barometer_contentListTwo">
					<image src="../../static/img/barometer/general.png" class="barometer_contentListImg"></image>
					<text class="barometer_contentListText">一般</text>
				</view>
				<view class="barometer_contentListTwo">
					<image src="../../static/img/barometer/nothappy.png" class="barometer_contentListImg"></image>
					<text class="barometer_contentListText">难过</text>
				</view>

			</view>
			<view class="barometer_titleTwo">发表文字</view>
			<view class="barometer_text">
				<textarea name="" id="" cols="30" rows="10" placeholder="请输入"></textarea>
			</view>
			<view class="barometer_submit">
				提交
			</view>
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
		background: #f4f4f4;
	}

	.barometer {
		width: 701rpx;
		height: 853rpx;
		background: #FBFDFF;
		border-radius: 20rpx;
		margin: 22rpx auto;
        overflow: hidden;
		.barometer_title {
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #000000;
			margin: 30rpx auto auto 47rpx;
		}

		.barometer_content {
			overflow: hidden;

		}

		.barometer_contentListOne {
			width: 128rpx;
			float: left;
			text-align: center;
			margin:56rpx auto auto 84rpx;
		}
        .barometer_contentListImg{
			width: 126rpx;
			height: 126rpx;
			margin-bottom: 30rpx;
		}
		.barometer_contentListText{
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 400;
			color: #000000;
			
		}
		.barometer_contentListTwo {
			width: 128rpx;
			float: left;
			text-align: center;
			margin:56rpx auto auto 80rpx;
		}
		.barometer_titleTwo{
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #000000;
			margin: 72rpx auto auto 47rpx;
		}
		.barometer_text{
			textarea{
				width: 620rpx;
				height: 175rpx;
				opacity: 0.74;
				background: #f4f4f4;
				margin: 31rpx auto auto 44rpx;
			}
		}
		.barometer_submit{
			width: 475rpx;
			height: 69rpx;
			background: linear-gradient(86deg, #7FD9FE, #46BBFB);
			box-shadow: 0px 5px 21px 0px rgba(54, 174, 249, 0.61);
			border-radius: 30rpx 30rpx 30rpx 30rpx;
			text-align: center;
			line-height: 69rpx;
			font-size: 33rpx;
			font-family: Noto Sans S Chinese;
			font-weight: 500;
			color: #FFFFFF;
			margin: 102rpx auto auto 114rpx;
		}
	}
</style>
