<template>
	<view>
		<view class="imgupload__tip">* 最多上传{{uploadCount}}个视频(<label> {{dataList.length}}
			</label>/{{uploadCount}})</view>
		<view class="upload">
			<block class="video-list"  v-for="(upload,index) in uploads" :key="index">
				<view class="uplode-file">
					<image v-if="types == 'image'" class="uploade-img" :src="upload" :data-src="upload" @tap="previewImage"></image>
					<image v-if="types == 'image'" class="clear-one-icon" :src="clearIcon" @tap="delImage(index)"></image>
					<video v-if="types == 'video'" class="uploade-img" :src="upload" controls>
						<view class="del-wrap">
							<image v-if="types == 'video'" class="clear-one-icon" src="../../static/img/emergencyDrill/del.png" @tap="delImage(index)"></image>
						</view>
					</video>
				</view>
			</block>
			<view v-if="uploads.length < uploadCount" :class="uploadIcon ? 'uploader-icon' : 'uploader-input-box'">
				<view v-if="!uploadIcon" class="uploader-input" @tap="chooseUploads"></view>
				<image v-else class="image-cion" :src="uploadIcon" @tap="chooseUploads"></image>
			</view>
		</view>
		<button type="primary" v-if="types == 'image'" @tap="upload">上传</button>
	</view>
</template>

<script>
	export default{
		props: {
			types: {
				type: String,
				default: 'image'
			},
			dataList: {
				type: Array,
				default: function() {
					return []
				}
			},
			clearIcon: {
				type: String,
				default: 'http://img1.imgtn.bdimg.com/it/u=451604666,2295832001&fm=26&gp=0.jpg'
			},
			uploadIcon: {
				type: String,
				default: ''
			},
			uploadUrl: {
				type: String,
				default: ''
			},
			deleteUrl: {
				type: String,
				default: ''
			},
			uploadCount: {
				type: Number,
				default: 3
			},
			//上传图片大小 默认3M
			upload_max: {
				type: Number,
				default: 3
			}
		},
		data(){
			return {
				//上传的图片地址
				uploadImages: [],
				//展示的图片地址
				uploads: [],
				// 超出限制数组
				exceeded_list: [],
			}
		},
		watch:{
			dataList:{
				handler(val){
					this.uploads = val;
				},
				immediate: true
			}
		},
		methods:{
			previewImage (e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.dataList
				})
			},
			chooseUploads(){
				switch (this.types){
					case 'image': 
						uni.chooseImage({
							count: this.uploadCount - this.uploads.length, //默认9
							sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
							sourceType: ['album', 'camera'], //从相册选择
							success: (res) => {
								for(let i = 0; i< res.tempFiles.length; i++){
									if(Math.ceil(res.tempFiles[i].size / 1024) < this.upload_max * 1024){
										this.uploads.push(res.tempFiles[i].path)
										this.uploadImages.push(res.tempFiles[i].path)
									}else {
										this.exceeded_list.push(i === 0 ? 1 : i + 1);
										uni.showModal({
											title: '提示',
											content: `第${[...new Set(this.exceeded_list)].join(',')}张图片超出限制${this.upload_max}MB,已过滤`
										});
									}
								}
							},
							fail: (err) => {
								uni.showModal({
									content: JSON.stringify(err)
								});
							}
						});
					break;
					case 'video' :
						uni.chooseVideo({
							sourceType: ['camera', 'album'],
							success: (res) => {
								if(Math.ceil(res.size / 1024) < this.upload_max * 1024){
									this.uploads.push(res.tempFilePath)
									uni.uploadFile({
										url: this.uploadUrl, //仅为示例，非真实的接口地址
										filePath: res.tempFilePath,
										name: 'file',
										//请求参数
										formData: {
											'user': 'test'
										},
										success: (uploadFileRes) => {
											this.$emit('successVideo',uploadFileRes)
										}
									});
								}else {
									uni.showModal({
										title: '提示',
										content: `第${[...new Set(this.exceeded_list)].join(',')}张视频超出限制${this.upload_max}MB,已过滤`
									});
								}
							},
							fail: (err) => {
								uni.showModal({
									content: JSON.stringify(err)
								});
							}
						});
					break;
				}
			},
			delImage(index){
				//第一个是判断app或者h5的 第二个是判断小程序的
				if(this.uploads[index].substring(0,4) !== 'http' || this.uploads[index].substring(0,11) == 'http://tmp/'){
					this.uploads.splice(index,1)
					return;
				};
				if(!this.deleteUrl) {
					uni.showModal({
						content: '请填写删除接口'
					});
					return;
				};
				uni.request({
					url: this.deleteUrl,
					method: 'DELETE',
					data: {
						image: this.dataList[index]
					},
					success: res => {
						if(res.data.status == 1) {
							uni.showToast({
								title: '删除成功'
							})
							this.uploads.splice(index,1)
						}
					},
				});
			},
			upload(){
				if(!this.uploadUrl) {
					uni.showModal({
						content: '请填写上传接口'
					});
					return;
				};
				for (let i of this.uploadImages) {
					uni.uploadFile({
						url: this.uploadUrl, //仅为示例，非真实的接口地址
						filePath: i,
						name: 'file',
						//请求参数
						formData: {
							'user': 'test'
						},
						success: (uploadFileRes) => {
							this.$emit('successImage',uploadFileRes)
						}
					});
				}
			}
		}
	}
</script>

<style scoped>
	.upload {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.video-list{
		
	}
	.uplode-file {
		margin-right: 1.8%;
		margin-bottom: 16rpx;
		width:31.5%;
		height:200rpx;
		box-sizing: border-box;
		position: relative;
		border-radius: 10rpx;
	}
	.uploade-img {
		position: relative;
		display: block;
		width:100%;
		height:200rpx;
		box-sizing: border-box;
		border-radius: 10rpx;
	}
	.clear-one{
		position: absolute;
		top: -10rpx;
		right: 0;
	}
	.del-wrap{
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0;
		right: 0;
		width: 48rpx;
		height: 48rpx;
		z-index: 999;
		background: rgba(0, 0, 0, .3);
		color: #ececec;
		border-bottom-left-radius: 30rpx;
	}
	.clear-one-icon{
		width:16px;
		height:16px;
	}
	.uploader-input-box {
		position: relative;
		width:31.5%;
		height:200rpx;
		box-sizing: border-box;
		border: 2px dotted #dadada;
		border-radius: 10rpx;
	}
	.uploader-input-box:before,
	.uploader-input-box:after {
		content: " ";
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		background-color: #949494;
	}
	.uploader-input-box:before {
		width: 7upx;
		height: 56upx;
		border-radius: 4px;
	}
	.uploader-input-box:after {
		width: 56upx;
		height: 7upx;
		border-radius: 4px;
	}
	.uploader-input-box:active {
		border-color: #999999;
	}
	.uploader-input-box:active:before,
	.uploader-input-box:active:after {
		background-color: #999999;
	}
	.uploader-input {
		position: absolute;
		z-index: 1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
	}
	.uploader-icon{
		position: relative;
		margin:10upx;
		width: 208upx;
		height: 208upx;
	}
	.uploader-icon .image-cion{
		width: 100%;
		height: 100%;
	}
	.imgupload__tip {
		font-size: 24rpx;
		color: #FF0000;
		margin: -10rpx auto 20rpx auto;
	}
	
	.imgupload__tip>label {
		color: #009100;
	}
</style>
