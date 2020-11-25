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
				<text class="editorNameOne">证书:</text>
				<text class="editorNameTwo">三级安全证书</text>
			</view>
			<view>
				<text class="editorNameOne">安全积分:</text>
				<text class="editorNameTwo">10</text>
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
</style>
