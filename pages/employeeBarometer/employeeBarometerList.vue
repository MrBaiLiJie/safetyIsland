<template>
	<view>
		<!-- 搜索 -->
		<view class="listHead">
			<view class="listHead_search">
				<input type="text" maxlength=12 cursor=5 placeholder="请输入搜索内容" placeholder-style="margin-left:37rpx">
				<image src="../../static/img/barometer/search.png"></image>
			</view>
			<view class="listHead_time">
				<picker mode="date" :value="date" @change="changeDate" @cancel="cancelSelect">
					<text>{{date}}</text>
					<image src="../../static/img/barometer/down.png"></image>
				</picker>

			</view>
		</view>

		<view class="list_content">
			<view class="list_content_title">班组1</view>
			<view class="segmentation"></view> <!-- 分割 -->
			<view class="list_content_div">
				<view class="list_content_divList">
					<text>张三</text>
					<image class="smilingOn" src="../../static/img/barometer/smilingOn.png"></image>
					<image class="submit-arrow" src="../../static/img/emergencyDrill/arrow.png" />
				</view>
				<view class="list_content_divList">
					<text>张三</text>
					<image class="smilingOn" src="../../static/img/barometer/nothappyOn.png"></image>
					<image class="submit-arrow" src="../../static/img/emergencyDrill/arrow.png" />
				</view>
				<view class="list_content_divList">
					<text>张三</text>
					<image class="smilingOn" src="../../static/img/barometer/generalOn.png"></image>
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
		height: 442rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin: 15rpx auto;
        overflow: hidden;
		.list_content_title {
			// width: 100%;
			height: 85rpx;
			background: #FBFDFF;
			line-height: 85rpx;
			border-radius: 20rpx 20rpx 0 0; //左上角，右上角，右下角，左下角
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 400;
			color: #1B1B1B;
			margin: 31rpx auto auto 40rpx;
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
					margin: 28rpx auto auto 40rpx;
				}

				.smilingOn {
					width: 59rpx;
					height: 59rpx;
					float: left;
					margin: 13rpx auto auto 443rpx;
				}

				.submit-arrow {
					width: 17rpx;
					height: 30rpx;
					float: left;
					margin: 27rpx auto auto 36rpx;
				}
			}

		}
	}
</style>
