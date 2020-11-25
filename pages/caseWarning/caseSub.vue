<template>
	<view>
		<form>
			<view class="submit-wrap">
				<view class="title">
					<image src="../../static/img/emergencyDrill/history.png"/>
					提交记录
				</view>
				<image @click="openList()" class="submit-arrow" src="../../static/img/emergencyDrill/arrow.png"/>
			</view>
			<view class="content-wrap">
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						综合类标题:
					</view>
					<view class="uni-list-cell-db" >
						<picker mode="selector" @change="bindPickerChange" :value="index" :range="array">
							<view class="uni-input">{{array[index]}}</view>
							<view class="down-arrow">
								<image src="../../static/img/emergencyDrill/down-arrow.png"/>
							</view>
						</picker>
					</view>
				</view>
				<view class="feedback-wrap">
					<view class="describe">
						描述:{{describe}}
					</view>
				</view>
				<view class="line"></view>
				<view class="feedback-wrap">
					<view class="uni-title">反馈内容:</view>
					<view class="uni-textarea">
						<textarea class="textarea" v-model="tempBz" placeholder-style="color:#B1B1B1" placeholder="请输入您的意见和建议"/>
					</view>
				</view>
				<view class="line"></view>
				<view class="feedback-wrap">
					<view class="uni-title">请上传图片:</view>
					<imgUpload :imgArr="imgArray" imgCount="3" ref="imgUpload" url="xxx(上传图片的url)"></imgUpload>
				</view>
				<view class="line"></view>
				<view class="feedback-wrap">
					<view class="uni-title">请上传视频:</view>
					 <easy-upload
					    :dataList="videoList" uploadUrl="http://localhost:3000/upload" :types="category"
					    deleteUrl='http://localhost:3000/upload' :uploadCount="3"
					    @successVideo="successvideo"
					    ></easy-upload>
				</view>
				<view class="feedback-wrap">
					<view class="subBtn-wrap">
						<image @click="submitClick()" class="subBtn" src="../../static/img/sumitBtn.png">
					</view>
				</view>
			</view>
			
		</form>
	</view>
</template>

<script>
	import imgUpload from '@/components/poiuy-uImgUpload/imgUpload.vue';
	export default {
		components: {
			imgUpload
		},
		data() {
			return {
				title: 'picker',
				array: ['消防演练', '安全知识'],
				index: 0,
				tempBz:'',
				imgArray:[],
				head:[{token:"zx6c54asdq89w7eqw6e46ad4"},{sign:'s6d5a4dqwe7q9w87a6'}],  //示范格式 JSON   使用方式header="head"
				config:{
					delIcon: '', //删除图片icon
					resultTip: true, //结果提示
					resultType:'1', //结果展示类型
					loadIcon: '', //加载时的图标
					loadText: ''  //加载时的文字
				},
				videoList: [],
				category: 'video',
				describe:"消防演练"
			}
		},
		methods: {
			bindPickerChange: function(e) {
				console.log('aa')
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			resultUrl(e){
						console.log(e);
						//成功默认为0
						if(e.code==0){
							this.imgArr.push(e.fileVo.fileUrl);
						}
			},
			delImg(e){
				this.imgArr.splice(e,1) //为删除图片数组的下标
			},
			//视频上传成功回调事件
			successvideo(e){
				console.log(e)
			},
			openList(){
				uni.navigateTo({
				    url: '/pages/caseWarning/caseSubList'
				})
			},
			submitClick(){
				console.log("提交")
				console.log(this.array[this.index]);
				console.log(this.tempBz);
				console.log(this.imgArray)
				console.log(this.videoList)
			}
		}
	}
</script>

<style lang="scss">
	page{
		padding-top:20rpx;
		height:100%;
		background-color: $bg-color;
	}
	.submit-wrap{
		margin:0 32rpx;
		padding:0 24rpx 0 32rpx;
		height:78rpx;
		display: flex;
		flex-direction: row;
		/* 垂直居中 */
		align-items: center;
		/* 水平居中 */
		justify-content:space-between;
		background-color: $list-color;
		border-radius: 8rpx;
		.title{
			display: flex;
			color:#151515;
			font-size: 30rpx;
			image{
				margin-right:20rpx;
				width:37rpx;
				height:41rpx;
			}
		}
		.submit-arrow{
			float:right;
			width:17rpx;
			height:30rpx;
		}
	}
	.content-wrap{
		margin:14rpx 32rpx 20rpx 32rpx;
		padding-top:28rpx;
		background-color:$list-color;
		border-radius: 24rpx;
		.uni-list-cell{
			padding:0 50rpx 30rpx 36rpx;
			display: flex;
			.uni-list-cell-left{
				display: flex;
				flex-direction: row;
				/* 垂直居中 */
				align-items: center;
				color:#000000;
				font-size: 30rpx;
			}
			.uni-list-cell-db{
				padding:0 24rpx 0 34rpx;
				display: flex;
				flex:1;
				flex-direction: row;
				/* 垂直居中 */
				align-items: center;
				margin-left: 26rpx;
				border: 1px solid #696969;
				height: 52rpx;
				line-height: 52rpx;
				border-radius: 8rpx;
				picker{
					position: relative;
					width:100%;
					height: 50rpx;
					line-height: 50rpx;
					flex:1;
					.uni-input{
						flex:1;
						color:#888888;
						font-size: 26rpx;
					}
					.down-arrow{
						position: absolute;
						top:-6rpx;
						right:0;
						width:24rpx;
						height:15.5rpx;
						image{
							width:100%;
							height:100%;
						}
					}
				}
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
				width:100%;
				height:172rpx;
				padding: 24rpx 32rpx;
				background: #F6F6F6;
				.textarea{
					width:100%;
					height:100%;
				}
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
			.describe{
				min-height: 190rpx;
				padding: 24rpx 32rpx;
				background: #F6F6F6;
				color:#868686;
				font-size: 26rpx;
			}
		}
	} 
</style>
