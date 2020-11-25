<template>
	<view>
		<view class="integral">
			<view class="integral_time">
				<picker mode="date" :value="date" @change="changeDate" @cancel="cancelSelect">
					<text>{{date}}</text>
					<image src="../../static/img/barometer/down.png"></image>
				</picker>
			</view>
			<view class="integralRecord">
				<view class="integralRecord_all">积分总数:66</view>
				<view class="segmentation"></view> <!-- 分割 -->
				<view class="integralRecord_list">
					<view class="list_content">
						<text class="list_title">扣分</text>
						<text class="list_why">因扣分原因扣分原因扣分原因扣分原因扣分扣</text>
					</view>
					<view class="list_content">
						<text class="list_title">-6积分</text>
						<text class="list_time">2020-11-24</text>
					</view>
				</view>
				<view class="integralRecord_list">
					<view class="list_content">
						<text class="list_title">加分</text>
						<text class="list_why">加分</text>
					</view>
					<view class="list_content">
						<text class="list_title">+9积分</text>
						<text class="list_time">2020-11-23</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import utilsGet  from '@/utils/getDate.js';
	export default {
		data() {
			return {
				date: utilsGet.getDate()
			};
		},
		onLoad() {
		},
		methods: {
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

	.integral {
		.integral_time {
			width: 690rpx;
			height: 61rpx;
			border: 2rpx solid #838383;
			overflow: hidden;
			margin: 16rpx auto;

			text {
				// width: 132rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 300;
				color: #949494;
				float: left;
				margin: 14rpx auto auto 258rpx;
			}

			image {
				width: 28rpx;
				height: 18rpx;
				float: right;
				margin: 20rpx 35rpx auto auto;
			}
		}

		.integralRecord {
			width: 700rpx;
			// height: 674px;
			background: #FFFFFF;
			border-radius: 16px;
            margin: 21rpx auto;
			.segmentation {
				width: 100%;
				height: 7rpx;
				background: rgba(207, 207, 207, 0.22);
			}

			.integralRecord_all {
				width: 100%;
				height: 100rpx;
				line-height: 100rpx;
				margin-left: 38rpx;
				font-size: 33rpx;
				font-family: PingFang SC;
				font-weight: 400;
				color: #000000;
			}

			.integralRecord_list {
				// height: 87rpx;
				border-bottom: 2rpx solid #CFCFCF;
				.list_content {
					overflow: hidden;
                    // margin-bottom: 14rpx;
					.list_title {
						font-size: 30rpx;
						font-family: PingFang SC;
						font-weight: 400;
						color: #121212;
						float: left;
						margin: 14rpx auto 14rpx 36rpx;
					}

					.list_why {
						width: 549rpx;
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 300;
						color: #717171;
						float: right;
						margin: 18rpx 38rpx 14rpx auto;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}

					.list_time {
						font-size: 30rpx;
						font-family: PingFang SC;
						font-weight: 400;
						color: #121212;
						float: right;
						margin: 14rpx 38rpx 14rpx auto;
					}
				}
			}
			.integralRecord_list:last-child {
				border: none;
			}


		}
	}
</style>
