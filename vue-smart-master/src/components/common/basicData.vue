<template>
	<div class="attributes">
        <div class="basic flex">
            <div class="weather">
                <span>16</span>℃
            </div>
            <div class="city">
                <p>北京市.海淀区  多云</p>
                <p>室外湿度 30%<span></span>室外PM 100</p>
            </div>
        </div>
        <div class="temperature flex" v-if="user">
            <div>室内温度 24℃</div>
            <span></span>
            <div>室内湿度 60%</div>
            <span></span>
            <div>室内PM 40</div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
	export default {
		data(){
			return {
				
			}
        },
        computed: {
            // ...mapState(['user','eqUl', 'nodata'])
            ...mapState(['user', 'nodata'])
        },
	}
</script>

<style scoped>
    .temperature {
        font-size: .9rem;
    }
	.weather {
        position: relative;
        top: -.8rem;
    }
    .weather span {
        font-size: 4rem;
    }
	.attributes {
        color: #fff;
        padding: 0 1rem;
    }
    .attributes .basic {
        height: 3.8rem;
    }
    .attributes .city {
        text-align: left;
        margin-left: .8rem;
    }
    .attributes .city p {
        font-size: .9rem;
        line-height: 1.6rem;
    }
    .city span {
        border-left: 1px solid #fff;
        margin: 0 .8rem;
    }
    .temperature span {
        display: inline-block;
        border-left: 1px solid #fff;
        margin: 0 .8rem;
    }
</style>