<template>
	<view>
		<text>{{title}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				"title":"我的"
			}
		},
		onLoad() {
			console.log("我的")
		},
		//tabbar点击触发
		onTabItemTap(e) {
			console.log("wode")
			console.log(e)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
