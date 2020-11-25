<template>
	<view>
		<!-- <page-meta>
			<navigation-bar />
		</page-meta>
		<view>
			<view class="status_bar">
				<view class="status_barBack">
					<image src="../../static/img/barometer/back.png" mode="" class="back"></image>
				</view>
				<view class="status_barTit"> 员工晴雨表 </view>
				<view class="status_barEditor" @tap="openEditor()">
					<image src="../../static/img/barometer/editor_new.png" mode="" class="editor"></image>
				</view>
			</view>

		</view> -->
		<view class="submit-wrap"  @tap="openEditor()">
			<view class="title">
				<image src="../../static/img/emergencyDrill/history.png"/>
				提交记录
			</view>
			<image class="submit-arrow" src="../../static/img/emergencyDrill/arrow.png"/>
		</view>
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
			<view class="common_submit" @tap="openList()">
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
		},
		methods:{
			openEditor(){
				uni.navigateTo({
					url:'./employeeBarometerEditor'
				})
			},
			openList(){
				uni.navigateTo({
					url:'./employeeBarometerList'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import url("../../common/list_content.css");
    .submit-wrap{
    	margin:20rpx 32rpx;
    	padding:0 24rpx 0 32rpx;
    	height:78rpx;
    	display: flex;
    	flex-direction: row;
    	/* 垂直居中 */
    	align-items: center;
    	/* 水平居中 */
    	justify-content:space-between;
    	background-color: $list-color;
    	border-radius: 8rpx;
    	.title{
    		display: flex;
    		color:#151515;
    		font-size: 30rpx;
    		image{
    			margin-right:20rpx;
    			width:37rpx;
    			height:41rpx;
    		}
    	}
    	.submit-arrow{
    		float:right;
    		width:17rpx;
    		height:30rpx;
    	}
    }
	.status_bar {
		height: 100rpx;
		width: 100%;
		background-color: #FFFFFF;
		line-height: 139rpx;
        // overflow: hidden;
		.status_barBack{
			float: left;
			margin-left: 27rpx;
			.back{
				width: 17rpx;
				height: 30rpx;
			}
		}
		.status_barTit {
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 300;
			color: #000000;
			float: left;
			margin-left: 235rpx;
			
		}
		.status_barEditor{
			float: left;
			margin-left: 176rpx;
		}
		.editor {
			width: 36rpx;
			height: 44rpx;
		}
	}
	.top_view {
		height: var(--status-bar-height);
		width: 100%;
		position: fixed;
		background-color: #F8F8F8;
		top: 0;
		z-index: 999;
	}

	// .status_bar {
	// 	height: var(--status-bar-height);
	// 	width: 100%;
	// 	background: #FFFFFF;
	// }

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
			margin: 56rpx auto auto 84rpx;
		}

		.barometer_contentListImg {
			width: 126rpx;
			height: 126rpx;
			margin-bottom: 30rpx;
		}

		.barometer_contentListText {
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 400;
			color: #000000;

		}

		.barometer_contentListTwo {
			width: 128rpx;
			float: left;
			text-align: center;
			margin: 56rpx auto auto 80rpx;
		}

		.barometer_titleTwo {
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #000000;
			margin: 72rpx auto auto 47rpx;
		}

		.barometer_text {
			    width: 620rpx;
			    height: 175rpx;
			    margin: 31rpx auto auto 41rpx;
			    background: #f4f4f4;
				overflow: hidden;
			textarea {
				width: 97%;
				height: 97%;
				opacity: 0.74;
				margin: 24rpx auto auto 32rpx;
			}
		}

		.common_submit {
			margin: 102rpx auto auto 114rpx;
		}
	}
</style>
