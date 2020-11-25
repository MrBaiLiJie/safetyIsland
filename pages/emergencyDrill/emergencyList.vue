<template>
	<view>
		<view class="list-wrap" v-for="(item,index) in list" @click="openDetail(item.id)">
			<view class="list-text">
				<view class="title">
					{{item.title}}
				</view>
				<view class="time">{{item.time}}</view>
			</view>
			<image @click="openDetail(item.id)" class="submit-arrow" src="../../static/img/emergencyDrill/arrow.png"/>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						title:"应急演练1",
						time:"2020-11-20",
						id:1,
					},
					{
						title:"应急演练2",
						time:"2020-11-20",
						id:2,
					},
					{
						title:"应急演练3",
						time:"2020-11-20",
						id:3,
					},
					{
						title:"应急演练4",
						time:"2020-11-20",
						id:4,
					},
					{
						title:"应急演练5",
						time:"2020-11-20",
						id:5,
					}
				]
			}
		},
		methods: {
			openDetail(id){
				uni.navigateTo({
				    url: '/pages/emergencyDrill/emergencyDetail'
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		padding-top:22rpx;
		height:100%;
		background-color: $bg-color;
	}
	.list-wrap{
		margin:0 25rpx;
		padding:0 30rpx 0 42rpx;
		height:92rpx;
		display: flex;
		flex-direction: row;
		/* 垂直居中 */
		align-items: center;
		/* 水平居中 */
		justify-content:space-between;
		background-color: $list-color;
		border-bottom:2px solid rgba(207, 207, 207, 0.36);
		&:first-child{
			border-top-left-radius:20rpx;
			border-top-right-radius:20rpx;
		}
		&:last-child{
			border-bottom-left-radius:20rpx;
			border-bottom-right-radius:20rpx;
			border-bottom: none;
		}
		.list-text{
			display: flex;
			justify-content: flex-end;
			flex:1;
			.title{
				width: 400rpx;
				@include text-ellipsis-one;
				color:#151515;
				font-size: 30rpx;
			}
			.time{
				margin-left:auto;
				width:160rpx;
				margin-right: 30rpx;
				font-size: 26rpx;
				color:#BCBCBC;
			}
		}
		.submit-arrow{
			width:17rpx;
			height:30rpx;
		}
	}
</style>
