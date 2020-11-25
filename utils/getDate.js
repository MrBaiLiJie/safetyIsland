export default {
	getDate:function() {
		let date_now = new Date();
		let year = date_now.getFullYear();
		let month = date_now.getMonth() + 1;
		let day = date_now.getDate();
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;
		// console.log(year + '-' + month + '-' + day)
		return year + '-' + month + '-' + day;
	}
}
