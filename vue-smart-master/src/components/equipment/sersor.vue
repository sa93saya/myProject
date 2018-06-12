<template>
	<div>
		<publicHead :title="this.$store.state.sersorName" :setting="setting"></publicHead>
		<!-- <img class="banner" :src="banner" alt=""> -->
		<div id="myChart" class="banner"></div>
		<div class="equipment-type">
			<p>设备型号: 987b1869e4944218</p>
		</div>
		<ul class="abnormal">
			<li>气体异常: 2018-01-17 10:52:16</li>
			<li>气体异常: 2018-01-17 10:52:16</li>
			<li>气体异常: 2018-01-17 10:52:16</li>
			<li>气体异常: 2018-01-17 10:52:16</li>
			<li>气体异常: 2018-01-17 10:52:16</li>
		</ul>
	</div>
</template>

<script>
	// 引入基本模板
	let echarts = require('echarts/lib/echarts')
	// 引入柱状图组件
	require('echarts/lib/chart/bar')
	// 引入提示框和title组件
	require('echarts/lib/component/tooltip')
	require('echarts/lib/component/title')
	import publicHead from '../common/publicHeader'
	import { mapState, mapMutations } from 'vuex'
	export default {
		data(){
			return {
				setting: require('../../assets/common/setting.png')
			}
		},
		components: {
			publicHead
		},
		computed: {
			// ...mapState(['sersorName']),
			banner(){
				// return require('../../assets/equipment/sersor/'+this.$store.state.curShort+'.jpg')
				return require('../../assets/equipment/sersor/'+4307+'.jpg')
			}
		},
		methods: {
			// ...mapMutations(['sersorInit'])
			drawLine(){
        // 基于准备好的dom，初始化echarts实例
        	let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        	myChart.setOption({
            // title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["0","1","2","3","4","5"]
            },
            yAxis: {},
            series: [{
                name: 'temp',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
		},
		created(){
			let cur = this.$route.query.cur;
			let data = this.$store.state.eqUl[cur];
			// this.sersorInit(data);
		},
		mounted(){
			this.drawLine();
		}
	}
</script>

<style scoped>
	/* .banner {
		width: 100%;
	} */
	.banner {
		width: 100%;
		height: 300px;
	}
	.equipment-type {
		width: 94%;
		margin: auto;
		margin-top: .6rem;
		font-size: .9rem;
		text-align: left;
		color: #444;
		border-bottom: 1px solid #dedede;
		padding-bottom: .6rem;
	}
	.abnormal {
		width: 92%;
		margin: auto;
		font-size: .8rem;
		text-align: left;
	}
	.abnormal li {
		margin-top: .8rem;
	}
</style>