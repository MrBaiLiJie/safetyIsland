<template>
	<view class="wrap">
		<!-- <view class="cover-img">
			<video class="video-width" id="myVideo" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"
			    controls></video>
		</view> -->
		<view class="cover-pdf" @click="openPdf()">
			打开pdf文件
		</view>
		<view class="cover-content">
			<view class="title">生活日常法律法规</view>
			<view class="content">
				<view class="type">法律法规</view>
				<view class="time">发布时间：2020-11-20</view>
			</view>
		</view>
		<view class="line"></view>
		<view class="infor-wrap">
			<view class="title">
				<view class="label"></view>内容简介
			</view>
			<view class="text">法律法规法律法规法律法规法律法规法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法规法律法律法规</view>
		</view>
		<view class="btn-wrap">
			<view class="btn">
				<image src="../../static/img/confirmBtn.png"></image>
			</view>
			<view class="btn">
				<image src="../../static/img/cancelBtn.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods:{
			openPdf(){
				console.log('pdf');
				uni.downloadFile({
				  url: 'https://example.com/somefile.pdf',
				  success: function (res) {
				    var filePath = res.tempFilePath;
				    uni.openDocument({
				      filePath: filePath,
				      success: function (res) {
				        console.log('打开文档成功');
				      }
				    });
				  }
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		height:100%;
	}
	.wrap{
		position: relative;
		height:100%;
		.cover-pdf{
			padding:12rpx 50rpx;
		}
		.cover-img{
			.video-width{
				width:100%;
			}
		}
		.cover-content{
			padding:10rpx 50rpx 46rpx 50rpx;
			.title{
				padding:10rpx 0;
				color:#000000;
				font-size:36rpx;
			}
			.content{
				display: flex;
				justify-content: flex-end ;
				.type{
					color:#8C8C8C;
					font-size:30rpx ;
				}
				.time{
					margin-left:auto;
					color:#8C8C8C;
					font-size: 24rpx;
				}
			}
		}
		.line{
			width:100%;
			height:15rpx;
			background-color: #F3F3F3;
		}
		.infor-wrap{
			padding:32rpx 36rpx;
			.title{
				padding-left: 16rpx;
				color:#010101;
				font-size: 36rpx;
				vertical-align: middle;
				.label{
					margin-right:12rpx;
					display: inline-block;
					vertical-align: middle;
					width:8rpx;
					height:30rpx;
					background-color: #399AF6;
				}
			}
			.text{
				padding-top: 50rpx;
				color:#8C8C8C;
				font-size: 30rpx;
				text-indent: 2em;
			}
		}
		.btn-wrap{
			padding:0 50rpx;
			display: flex;
			justify-content: space-between;
			.btn{
				width:252rpx;
				height:117rpx;
				image{
					width: 100%;
					height:100%;
				}
			}
		}
	}
</style>
