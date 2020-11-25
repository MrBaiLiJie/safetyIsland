<template>
	<view class="wrap">
		<view class="list" v-for="(item,index) in list" @click="openDetail(item.id)">
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
						url:"../../static/img/safetyKnowledge/safetyKnowledge.png",
						title:"法律法规法律法规法律法规法律法规",
						text:"法律法规学习法律法规学习"
					},
					{
						id:2,
						url:"../../static/img/safetyKnowledge/safetyKnowledge.png",
						title:"法律法规法律法规法律法规法律法规",
						text:"法律法规学习法律法规学习"
					},
					{
						id:3,
						url:"../../static/img/safetyKnowledge/safetyKnowledge.png",
						title:"法律法规法律法规法律法规法律法规",
						text:"法律法规学习法律法规学习"
					},
					{
						id:4,
						url:"../../static/img/safetyKnowledge/safetyKnowledge.png",
						title:"法律法规法律法规法律法规法律法规",
						text:"法律法规学习法律法规学习"
					}
				]
			}
		},
		onLoad(){
			//动态设置标题
			uni.setNavigationBarTitle({
			    title: '新的标题'
			});
		},
		methods: {
			openDetail(id){
				uni.navigateTo({
				    url: '/pages/caseWarning/caseWarnDetail'
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
	.wrap{
		padding:0 20rpx;
		overflow: hidden;
		.list{
			float:left;
			width:50%;
			margin-top: 24rpx;
			.list-item{
				margin:0 15rpx;
				border-radius: 10rpx;
				overflow: hidden;
				.cover-wrap{
					position: relative;
					width:100%;
					height:0;
					padding-top:73.6%;
					image{
						position: absolute;
						top:0;
						left:0;
						right:0;
						bottom:0;
						width:100%;
						height:100%;
					}
				}
				.text-wrap{
					padding:20rpx 30rpx 66rpx 30rpx;
					background-color: #ffffff;
					.title{
						color:#000000;
						font-size: 30rpx;
						@include text-ellipsis-one;
					}
				}
			}
		}
	}
</style>
