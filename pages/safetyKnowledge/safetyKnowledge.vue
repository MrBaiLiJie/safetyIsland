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
						url:"../../static/img/safetyKnowledge/safetyIcon1.png",
						title:"法律法规",
						text:"法律法规学习法律法规学习"
					},
					{
						id:2,
						url:"../../static/img/safetyKnowledge/safetyIcon2.png",
						title:"安全常识",
						text:"安全常识学习"
					},
					{
						id:3,
						url:"../../static/img/safetyKnowledge/safetyIcon3.png",
						title:"应急标识",
						text:"应急标识学习"
					},
					{
						id:4,
						url:"../../static/img/safetyKnowledge/safetyIcon4.png",
						title:"个体防护",
						text:"个体防护学习"
					}
				]
			}
		},
		methods: {
			openList(id){
				if(id==1){
					//打开法律法规列表页
					uni.navigateTo({
					    url: '/pages/safetyKnowledge/lawsAndRegulations'
					})
				}else if(id==2){
					//打开安全常识列表页
					uni.navigateTo({
					    url: '/pages/safetyKnowledge/safetyCommonSense'
					})
				}else if(id==3){
					//打开应急标识列表页
					uni.navigateTo({
					    url: '/pages/safetyKnowledge/emergencySigns'
					})
				}else if(id==4){
					//打开个体防护列表页
					uni.navigateTo({
					    url: '/pages/safetyKnowledge/personalProtection'
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
