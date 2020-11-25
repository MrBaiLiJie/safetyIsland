<template>
	<view>
		<view class="list_content_div">
			<view class="list_content_divList">
				<text>姓名</text>
				<text class="smilingOn">张三</text>
			</view>
			<view class="list_content_divList">
				<text>性别</text>
				<text class="smilingOn">男</text>
			</view>
			<view class="list_content_divList">
				<text>身份证号</text>
				<text class="smilingOn">370282164982613</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	@import url("../../common/list_content.css");

	.list_content_div {
		width: 701rpx;
		margin: 18rpx auto;
		background: #FFFFFF;
		overflow: hidden;
        border-radius: 20rpx;
		.list_content_divList {
			overflow: hidden;
			height: 97rpx;
			border-bottom: 2rpx solid rgba(207, 207, 207, 0.22);

			text {
				float: left;
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 400;
				color: #1B1B1B;
				margin: 28rpx auto auto 40rpx;
			}

			.smilingOn {
				float: right;
				margin: 33rpx 62rpx auto auto;
				color: #9F9F9F;
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 300;
			}

			.submit-arrow {
				width: 17rpx;
				height: 30rpx;
				float: left;
				margin: 27rpx auto auto 36rpx;
			}
		}

	}
</style>
