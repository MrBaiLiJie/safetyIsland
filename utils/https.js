module.exports = (param) => {
	var url = param.url;
	var method = param.method;
	var header = param.header || {};
	var filePath = param.imaUrl; //图片
	var data = param.data || {};
	if (method) {
		method = method.toUpperCase();
		const userToken = uni.getStorageSync('TokenKey');
		if (userToken) {
			if (method == "POST") {
				header = {
					"content-type": "application/json;charset=UTF-8",
					token: uni.getStorageSync("TokenKey")
				}
			};
			if (method == "GET") {
				header = {
					"content-type": "application/json",
					token: uni.getStorageSync("TokenKey")
				}
			};
			if (!param.hideLoading) {
				uni.showLoading({
					title: "加载中"
				})
			};
			uni.request({
				url: url,
				method: method || "GET",
				header: header,
				data: data,
				success: (res) => {
					if (res.code && res.code != 200) {
						uni.showModal({
							content: res.msg
						})
						return;
					}
					typeof param.success == "function" && param.success(res.data);
				},
				fail: (err) => {
					uni.showModal({
						content: err.msg
					})
					typeof param.fail == "function" && param.fail(err.data);
				},
				complete: () => {
					// console.log("网络请求complete");
					uni.hideLoading();
					typeof param.complete == "function" && param.complete(err.data);
					return;
				}

			});
			uni.uploadFile({
				url: url,
				filePath: filePath,
				name: 'file',
				success: (uploadFileRes) => {
					resolve(uploadFileRes);
				},

				fail: (err) => {
					reject(err)
				}
			});
		} else {
			console.log("获取不到userToken")
		}

	}
}
