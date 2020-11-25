<template>
	<view>
		<view class="editorContent">
			<view class="editorName">
				<text class="editorNameOne">姓名:</text>
				<text class="editorNameTwo">张三</text>
			</view>
			<view class="editorName">
				<text class="editorNameOne">工号:</text>
				<text class="editorNameTwo">1111111</text>
			</view>
			<view class="editorName">
				<text class="editorNameOne">所属班组:</text>
				<text class="editorNameTwo">22222222</text>
			</view>
			<view class="editorName">
				<text class="editorNameOne">心情:</text>
				<text class="editorNameTwo">不开心</text>
			</view>
			<view>
				<text class="editorNameOne">时间:</text>
				<text class="editorNameTwo">2020-11-20</text>
			</view>
		</view>
		<view class="editorReply">
			<view class="reply_content">内容:</view>
			<view class="textarea">
				<textarea name="" id="" cols="30" rows="10" placeholder="请输入内容"></textarea>
			</view>
            <view class="reply_content">沟通记录:</view>
            <view class="textarea">
            	<textarea name="" id="" cols="30" rows="10" placeholder="请输入内容"></textarea>
            </view>
			<view class="common_submit">
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
	@import url("../../common/list_content.css");
	.editorContent {
		width: 705rpx;
		// height: 498rpx;
		background: #FBFDFF;
		border-radius: 30rpx;
		margin: 21rpx auto auto auto;

		view {
			height: 107rpx;
			line-height: 107rpx;

			text {
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 300;
			}

			.editorNameOne {
				color: #2D2D2D;
				margin-left: 46rpx;
			}

			.editorNameTwo {
				color: #797979;
				margin-left: 16rpx;
			}
		}

		.editorName {
			border-bottom: 2rpx solid rgba(207, 207, 207, 0.22);
		}
	}

	.editorReply {
		width: 705rpx;
		// height: 743rpx;
		background: #FBFDFF;
		border-radius: 30rpx;
		margin: 6rpx auto 60rpx auto;
		overflow: hidden;

		.reply_content {
			margin: 26rpx auto auto 51rpx;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 400;
			color: #474747;
		}

		.textarea {
			width: 616rpx;
			height: 190rpx;
			background: #F1F1F1;
			margin: 35rpx auto;
			padding: 24rpx 32rpx;
			textarea{
				width: 97%;
				height: 97%;
			}
		}
		.common_submit {
			margin: 40rpx auto 40rpx 114rpx;
		}
	}
</style>
