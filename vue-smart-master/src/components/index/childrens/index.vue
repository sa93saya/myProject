<template>
	<div class="equipment">
        <div class="add" @click="addUrl" v-if="!this.$store.state.data">
            <span class="add-symbol">+</span><span class="add-tip">点击添加网关</span>
        </div>
        <div v-if="this.$store.state.data" class="equipment-list">
            <div class="pull-left single" v-for="(item,index) in eqUl">
                <div class="area" :data-cur="index">
                    <router-link :to="{ path: '/sersor', query: { cur: index }}" :style="'backgroundImage:url('+ more +')'"></router-link>
                    <img :src="item.online == 0 ? item.offSrc : item.onSrc" alt="">
                    <!-- <img src="../../../assets/index/socket_pre.png" alt=""> -->
                    <p class="equipment-name">{{ item.name }}</p>
                    <p class="status">{{ item.des }}</p>
                </div>
            </div>
        </div> 
        <!-- <div v-if="!user" class="add">
                <router-link to="/login"><span class="add-tip">请先点击<u>登录</u></span></router-link>
        </div>-->
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
	export default {
		data(){
			return {
                eqUl:[{name:'温度传感器',des:'444',onSrc:'../../../assets/index/socket_pre.png',online:1},
                {name:'湿度传感器',des:'9011',offSrc:'../assets/index/Temperature_humidity_nor.png',online:0},
                {name:'智能电表',des:'9011',onSrc:'../../../assets/index/socket_pre.png',online:1}],
                more: require('../../../assets/common/more.png'),
			}
		},
        computed: {
            // ...mapState(['user','eqUl', 'nodata'])
            ...mapState(['user', 'nodata','data'])
        },
		methods: {
            ...mapMutations(['isLogin', 'getToken', 'getListen', 'getSend', 'getSdkEqMsg','isgetDevices']),
            addUrl(){
                if(!this.$store.state.user) {
                    this.$router.push('/login');
                    return;
                }
                this.$router.push('/add');
            }
        },
        created(){
            this.isLogin();
            this.isgetDevices();
            if(82437){
                // if(!this.$store.socketObj){
                //     this.getToken();
                // }else{
                //     this.getListen();
                //     this.getSend(); 
                //     this.getSdkEqMsg();
                // }
                // $("#no_login_shadow").css("display","block");
            }
        }
	}
</script>

<style scoped>
	.equipment {
        padding-left: 4.4rem;
    }
    .equipment .equipment-list {
        height: 54vh;
        position: relative;
        top: 1.015rem;
        left: -.3rem;
        overflow-y: auto;
    }
    .equipment .add{
        width: calc(100% - 5.1rem);
        height: 6rem;
        line-height: 6rem;
        background: rgba(255,255,255,.9);
        position: absolute;
        top: 1rem;
        border-radius: 6px;
    }
    .equipment .add .add-symbol{
        font-size: 1.5rem;
        margin-right: .4rem;
    }
    .equipment .add .add-tip{
        position: relative;
        top: -.13rem;
    }
    .single {
        width: 46%;
        margin-bottom: .6rem;
        padding: 0 .3rem;
    }
    .single .area {
        font-size: .8rem;
        background: rgba(255,255,255, .9);
        border-radius: 8px;
        padding: 1.2rem 0;
        position: relative;
    }
    .single .area a {
        display: block;
        width: 1.3rem;
        height: 1.3rem;
        position: absolute;
        right: .6rem;
        top: .2rem;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }
    .single .area img {
        height: 2rem;
    }
    .single .equipment-name {
        margin-top: .5rem;
        margin-bottom: .3rem;
    }
    .single .status {
        font-size: .7rem;
        color: #999;
    }
</style>