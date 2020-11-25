<template>
		<view class="content-wrap">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					综合类标题:
				</view>
				<view class="uni-list-cell-db" >
					班组一
				</view>
			</view>
			<view class="line"></view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					类型:
				</view>
				<view class="uni-list-cell-db" >
					用电设备
				</view>
			</view>
			<view class="line"></view>
			<view class="feedback-wrap">
				<view class="uni-title">反馈内容:</view>
				<view class="uni-textarea">
					{{tempBz}}
				</view>
			</view>
			<view class="line"></view>
			<view class="feedback-wrap">
				<view class="uni-title">图片记录:</view>
				<view class="picture-record-list">
					<view class="list-item" v-for="(item,index) in imgRecordList" :key="index">
						<view class="list-item-wrap">
							<image class="list-item-img" :src="item.url"></image>
						</view>
					</view>
				</view>
			</view>
			<view class="line"></view>
			<view class="feedback-wrap">
				<view class="uni-title">视频记录:</view>
				<view class="video-list-wrap">
					<video class="video-list-item"  controls></video>
					<video class="video-list-item"  controls></video>
					<video class="video-list-item"  controls></video>
				</view>
			</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				tempBz:'内容',
				imgRecordList:[
					{
						id:1,
						url:'../../static/index/trouble-list.png'
					},
					{
						id:2,
						url:'../../static/index/trouble-list.png'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	page{
		padding-top:22rpx;
		height:100%;
		background-color: $bg-color;
	}
	.content-wrap{
		margin:14rpx 32rpx 20rpx 32rpx;
		background-color:$list-color;
		border-radius: 24rpx;
		.uni-list-cell{
			padding:28rpx 50rpx 30rpx 36rpx;
			display: flex;
			.uni-list-cell-left{
				width:160rpx;
				color:#000000;
				font-size: 30rpx;
			}
			.uni-list-cell-db{
				flex:1;
				margin-left: 26rpx;
				color:#797979;
				font-size: 30rpx;
			}
		}
		.line{
			width:100%;
			height:1px;
			background-color: #CFCFCF;
		}
		.feedback-wrap{
			padding:0 40rpx 36rpx 38rpx;
			.uni-title{
				padding:26rpx 0 20rpx 0;
				color:#000000;
				font-size: 30rpx;
			}
			.uni-textarea{
				min-height: 190rpx;
				padding: 24rpx 32rpx;
				background: #F6F6F6;
				color:#868686;
				font-size: 26rpx;
			}
			.subBtn-wrap{
				display: flex;
				align-items: center;
				width:100%;
				.subBtn{
					margin:0 auto;
					width:513rpx;
					height:109rpx;
				}
			}
			.picture-record-list{
				margin:0 -8rpx;
				overflow: hidden;
				.list-item{
					padding:0 8rpx;
					float:left;
					width:33.333%;
					.list-item-wrap{
						position: relative;
						height:0;
						padding-top:81%;
						.list-item-img{
							position:absolute;
							top:0;
							left:0;
							right:0;
							bottom:0;
							width:100%;
							height:100%;
						}
					}
					
				}
			}
		}
	} 
</style>
