<template>
	<view>
		<view class="changePassword">
			<view class="old_password">
				<input type="text" placeholder="原始密码" placeholder-style="font-size: 30rpx;font-family: PingFang SC;font-weight: 300;color: #ADADAD;">
			</view>
			<view class="new_password">
				<input type="text" placeholder="新密码" placeholder-style="font-size: 30rpx;font-family: PingFang SC;font-weight: 300;color: #ADADAD;">
			</view>
            <view class="change">
				确定
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

	.changePassword {
		width: 700rpx;
		height: 449rpx;
		background: #FFFFFF;
		border-radius: 16rpx;
		margin: 22rpx auto;

		.old_password {
			width: 509rpx;
			height: 89rpx;
			border: 2rpx solid #B7B7B7;
			float: left;
            margin: 57rpx auto auto 97rpx;
			input {
				margin-left: 31rpx;
				height: 100%;
			}
		}

		.new_password {
			width: 509rpx;
			height: 89rpx;
			border: 2rpx solid #B7B7B7;
			float: left;
            margin: 38rpx auto auto 97rpx;
			input {
				margin-left: 31rpx;
				height: 100%;
			}
		}

		.change{
			width: 345rpx;
			height: 75rpx;
			line-height: 75rpx;
			text-align: center;
			font-size: 33rpx;
			font-family: PingFang SC;
			font-weight: 300;
			color: #1E1E1E;
			background: #EEEEEE;
			border-radius: 36rpx;
			float: left;
			margin: 65rpx auto auto 179rpx;
		}
	}
</style>
