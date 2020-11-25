<template>
	<view>
		<view class="list">
			<image @click="multipleClick()" src="../../static/img/emergencyDrill/MultipleSub.png"></image>
			<view @click="multipleClick()" class="right">
				<view class="title">综合类</view>
				<view class="text">应急演练综合类学习</view>
			</view>
		</view>
		<view class="list">
			<image @click="specialSubClick()" src="../../static/img/emergencyDrill/SpecialSub.png"></image>
			<view @click="specialSubClick()" class="right">
				<view class="title">专项类</view>
				<view class="text">应急演练综合类学习</view>
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
			multipleClick(){
				uni.navigateTo({
				    url: '/pages/emergencyDrill/emergencyMultipleSub'
				})
			},
			specialSubClick(){
				uni.navigateTo({
				    url: '/pages/emergencyDrill/emergencySpecialSub'
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
