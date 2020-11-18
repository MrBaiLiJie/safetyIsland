<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	import interfacel from '../../utils/interface.js'
	export default {
		data() {
			return {
				title: '首页'
			}
		},
		onLoad() {
			console.log("首页")
		},
		//tabbar点击触发
		onTabItemTap(e) {
			console.log("shouye")
			console.log(e)
		},
		methods: {

		}
	}
</script>

<style>

</style>
