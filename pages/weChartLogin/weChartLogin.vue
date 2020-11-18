<template>
	<view class="login">
		<button class="loginWx" open-type="getUserInfo" @getuserinfo="getUserInfo">一键登录</button>
		<button class="goback">取消登录</button>
		<button open-type=""></button>
	</view>

</template>

<script>
	import {
		// mapState,  
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				code: '', //微信临时登录凭证
			}
		},
		onLoad: function() {
			uni.login({
				success: (res) => {
					if (res.errMsg == "login:ok") {
						this.code = res.code;
					} else {
						uni.showToast({
							title: '系统异常，请联系管理员!'
						})
					}
				}
			})
		},
		created() {
			console.log(this.$store)
		},
		methods: {
			...mapMutations(['login']),
			//微信授权登录
			getUserInfo(e) {
				let that = this;
				var setting = this.getSetting();
				setting.then(function(isAuth) {
					console.log('是否已经授权', isAuth);
					if (isAuth) {
						console.log('用户信息', e);
						 //微信头像//微信名称 
						let eData = JSON.parse(e.detail.rawData);
						uni.request({
							header: {
								'content-type': 'application/x-www-form-urlencoded'
							},
							url: '', 
							method: 'POST', 
							data: '', 
							success: function(res) {
								console.log(res);
								if (res.data.Success) {
									that.login(res.data); 
									uni.switchTab({
										
									})
								} else {
									uni.showToast({
										title: '授权登录失败！',
										mask: true,
										icon: 'none'
									})
								}


							}

						})
					} else {
						uni.showToast({
							title: '授权失败，请确认授权已开启',
							mask: true,
							icon: 'none'
						})
					}
				});
			},
			//获取用户的当前设置
			getSetting() {
				return new Promise(function(resolve, reject) {
					uni.getSetting({
						success: function(res) {
							if (res.authSetting['scope.userInfo']) {
								resolve(true);
							} else {
								resolve(false);
							}
						}
					})
				}).catch((e) => {
					console.log(e)
				});;
			},
		},


	}
</script>

<style>
	.login {
		width: 750rpx;
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.goback {
		width: 90%;
		background: #eee;
		color: #333;
		margin-bottom: 24rpx;
	}

	.loginWx {
		width: 90%;
		background: #04BE02;
		margin-bottom: 24rpx;
	}
</style>
