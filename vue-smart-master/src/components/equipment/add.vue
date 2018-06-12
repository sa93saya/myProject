<template>
	<div>
		<publicHead :title="msg"></publicHead>
		<div class="host">
			<img :src="hostPic" alt="">
		</div>
		<div class="instructions">
			<p>1、请将网关连接电源。</p><p>2、用网线把路由器的LAN口和网关的LAN口相连。</p>
			<input type="text" :value="curName" ref="router" style="visibility:hidden;"/>
			<!-- 3、扫描网关底部贴有的二维码。 -->
		</div>
		<div class="footer">
			<div class="is-agree"><img :src="[ isAgree ? agree : unagree ]" alt="" @click="toggle">已确定上述操作</div>
			<button class="btn-add-equip" :style="'opacity:'+ curOpacity" @click="add">添加网关</button>
		</div>
	</div>
</template>

<script>
	import publicHead from '../common/publicHeader'
	import { mapState, mapMutations, mapGetters } from 'vuex'
	export default {
		data(){
			return {
				msg: '添加网关',
				agree: require('../../assets/common/choose.png'),
				unagree: require('../../assets/common/not_choose.png'),
				hostPic: require('../../assets/equipment/homehost@3x.png'),
				isAgree: false
			}
		},
		computed: {
			...mapState(['houseManagerList']),
			curName(){
				return '/index/'+this.$store.state.houseManagerList.name;
			},
			curOpacity(){
				return this.isAgree ? 1 : .5;
			},
			
		},
		components: {
			publicHead
		},
		methods: {
			...mapMutations(['initHouseList','getDevices']),
			// ...mapMutations(['modifyStatus', 'toLogin']),
			// goto(){
			// 	let _this = this;
			// 	let username = _this.$refs.username.value;
			// 	let password = _this.$refs.password.value;
			// 	_this.toLogin({user: username, password: password});
			// }
			toggle(){
				this.isAgree = !this.isAgree;
			},
			add(){
				if(this.isAgree){
					// this.$router.push('addEquip')
					let _this = this;
					let macAddress = '10.108.218.120';
					_this.getDevices({mac: macAddress});
				}
			}
		},
        created(){
			this.initHouseList();
		}
	}
</script>

<style scoped>
	.host {
		padding: .9rem 0;
		border-bottom: 1px solid #f2f2f2;
	}
	.instructions {
		padding: 1.4rem;
	}
	.instructions p {
		font-size: .9rem;
		text-align: left;
	}
	.footer {
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		padding-bottom: 1.2rem;
	}
	.footer .is-agree {
		font-size: .9rem;
	}
	.footer .is-agree img {
		width: 1.2rem;
		margin-right: .4rem;
		position: relative;
		top: .23rem
	}
	.footer .btn-add-equip {
		width: 92%;
		height: 2.6rem;
		line-height: 2.6rem;
		font-size: 1rem;
		text-align: center;
		color: #fff;
		background-color: #ff9c00;
		border: none;
		border-radius: 6px;
		margin: auto;
		margin-top: 1.2rem;
	}
</style>