<template>
	<view class="wrap">
		<view class="list" v-for="(item,index) in list" @click="openList(item.id)">
			<view class="list-item">
				<view class="cover-wrap">
					<image :src="item.url"></image>
				</view>
				<view class="text-wrap">
					<view class="title">{{item.title}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						id:1,
						url:"../../static/img/caseWarning/case1.png",
						title:"事故案例",
					},
					{
						id:2,
						url:"../../static/img/caseWarning/case2.png",
						title:"案例视频",
					},
					{
						id:3,
						url:"../../static/img/caseWarning/case3.png",
						title:"大事记",
					},
					{
						id:4,
						url:"../../static/img/caseWarning/case4.png",
						title:"工艺安全",
					},
					{
						id:5,
						url:"../../static/img/caseWarning/case5.png",
						title:"总结上报",
					}
				]
			}
		},
		methods: {
			openList(id){
				if(id==5){
					//打开法律法规列表页
					uni.navigateTo({
					    url: '/pages/caseWarning/caseSub'
					})
				}else{
					//打开安全常识列表页
					uni.navigateTo({
					    url: '/pages/caseWarning/caseList'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	page{
		height:100%;
		background-color: $bg-color;
	}
	.wrap{
		padding:0 15rpx;
		overflow: hidden;
		.list{
			float:left;
			width:50%;
			margin-top: 30rpx;
			.list-item{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			    padding:68rpx 0 60rpx 0;
				margin:0 15rpx;
				border-radius: 10rpx;
				background-color: #ffffff;
				.cover-wrap{
					width:149rpx;
					height:147rpx;
					image{
						width:100%;
						height:100%;
					}
				}
				.text-wrap{
					.title{
						padding:18rpx 0;
						color:#090909;
						font-size: 33rpx;
					}
				}
			}
		}
	}
</style>
