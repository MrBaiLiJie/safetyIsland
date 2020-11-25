<template>
	<view>
		<view class="list">
			<image @click="teamSubClick()" src="../../static/img/safetyInspection/teamSub.png"></image>
			<view @click="teamSubClick()" class="right">
				<view class="title">班组安全巡检</view>
				<view class="text">安全巡检反馈</view>
			</view>
		</view>
		<view class="list">
			<image @click="staffSubClick()" src="../../static/img/safetyInspection/staffSub.png"></image>
			<view @click="staffSubClick()" class="right">
				<view class="title">员工安全巡检</view>
				<view class="text">安全巡检反馈</view>
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
		methods:{
			teamSubClick(){
				uni.navigateTo({
				    url: '/pages/safetyInspection/teamSub'
				})
			},
			staffSubClick(){
				uni.navigateTo({
				    url: '/pages/safetyInspection/staffSub'
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		height:100%;
		background-color: $bg-color;
	}
	.list{
		margin:0 30rpx;
		padding:80rpx 84rpx 86rpx 78rpx;
		display: flex;
		margin-top: 20rpx;
		background-color: $list-color;
		border-radius: 20rpx;
		image{
			width:150rpx;
			height:148rpx;
		}
		.right{
			padding-top:10rpx;
			padding-left:110rpx;
			flex:1;
			.title{
				color:#090909;
				font-size: 32rpx;
				font-weight: 400;
			}
			.text{
				padding:16rpx 0;
				font-size: 28rpx;
				color:#9A9A9A;
			}
		}
	}
</style>
