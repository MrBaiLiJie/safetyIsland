<template>
	<view>
		<view class="messageList">
			<view class="messageList_title">系统消息</view>
			<view class="messageList_time">2020-11-24</view>
			<view class="messageList_content">
				<text>消息消息消息消息消息消息消息消息消息消消息消息消息消息消息消息消息消息消息消息消消息消息消息</text>
				
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
	@import url("../../common/list_content.css");

	.messageList {
		width: 700rpx;
		// height: 301rpx;
		background: #FFFFFF;
		border-radius: 16rpx;
		margin: 16rpx auto;
        overflow: hidden;
		.messageList_title {
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 400;
			color: #010101;
			margin: 31rpx auto auto 37rpx;
		}

		.messageList_time {
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 400;
			color: #BABABA;
			margin: 17rpx auto auto 39rpx;
		}

		.messageList_content {
			width: 622rpx;
			// height: 145rpx;
			background: #f4f4f4;
			text-indent:50rpx;
			margin: 20rpx auto;
			overflow: hidden;
			padding: 23rpx 46rpx 24rpx 12rpx;
			text{
				font-size: 27rpx;
				font-family: PingFang SC;
				font-weight: 400;
				color: #BABABA;
			}
		}
	}
</style>
