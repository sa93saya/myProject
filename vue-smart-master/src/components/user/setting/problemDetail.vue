<template>
	<div>
		<publicHead :title="msg"></publicHead>
		<div class="detail">
			<h5 v-text="details[cur].title"></h5>
			<p v-text="details[cur].desc"></p>
		</div>
	</div>
</template>

<script>
	import publicHead from '../../common/publicHeader'
	export default {
		data() {
			return {
				iconRight: require('../../../assets/common/arrow_right.png'),
				msg: '常见问题详情',
				cur: this.$route.params.id || 0,
				details: [
					{
						title: '1. 如何添加智能网关?',
						desc: '在首页的"点击添加网关"处进行添加确认, 然后选择要添加的家庭网关.'
					},
					{
						title: '2. 什么是情境模式?',
						desc: '情境模式可以在"情境联动"中进行设定, 可设置定时开启/关闭智能设备,如插座、灯、窗帘、智能电视等. 灯光全开模式、灯光全关模式为系统固定模式, 不能更改. 可自行添加自己熟悉的情境模式.'
					},
					{
						title: '3. 什么是设备联动?',
						desc: '设备联动可以在"情境联动"中进行设定, 比如, 当把门窗传感器安装在门上, 把智能灯通电. 可以设定启动条件: "如果"门窗传感器打开, 设定执行任务: "就"等打开. 设定好之后保存联动设置. 这样当门打开时, 灯就会自动打开.'
					},
					// {
					// 	title: '4. 什么是设备安防?',
					// 	desc: '设备安防可以在安防模块设置定时"外出布防"、"在家布防"、"撤防", 设备安防对应"场景联动"中的外出安防和在家安防.'
					// },
					{
						title: '5. 设备离线怎么办?',
						desc: '如果出现"设备离线"提示, 可能因为当前网络环境比较差或者设备断电导致. 如果设备通过WIFI连接, 请尝试以下操作: (1) 设备是否连接电源; (2) 路由器是否连接外网; (3) 尝试断电重启设备; (4) 如果路由器更换密码, 请尝试重置设备.'
					},
					{
						title: '6. 怎样共享设备?',
						desc: '首先在"我的"里面点击"共享设备"图标,然后"共享设备"页面点击按钮"新增共享设备",输入对方账号(手机号), 即可与对方一起享受智能生活.'
					}
				]
			}
		},
		components: {
			publicHead
		},
		mounted(){

		}
	}
</script>

<style scoped>
	.detail {
		margin-top: .8rem;
	}
	.detail h5 {
		font-size: .9rem;
		text-align: left;
		padding: .8rem .8rem .4rem .8rem;
	}
	.detail p {
		width: 96%;
		font-size: .8rem;
		line-height: 1.3rem;
		text-align: left;
		margin: auto;
	}
</style>