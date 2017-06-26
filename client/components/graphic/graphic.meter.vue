<template>
    <div class="m-graphic-meter m-frame">
        <div class="meter-box f-cb">
            <div class="meter-item">
                <div class="m-echarts" ref="chart1">
                    <chart :queryResult="queryResult" :component="component" :options="options1" v-if="options1"></chart>
                </div>
                <p class="name">公交舒适度</p>
            </div>
            <div class="meter-item">
                <div class="m-echarts" ref="chart2">
                    <chart :queryResult="queryResult" :component="component" :options="options2" v-if="options2"></chart>
                </div>
                <p class="name">地铁舒适度</p>
            </div>
        </div>
        <div class="info-box f-cb">
            <div class="info f-cb">
                <p class="t t0">最舒适的线路</p>
                <p v-for="item in queryResult.mostComfort" class="t t1">{{item}}</p>
            </div>
            <div class="info f-cb">
                <p class="t t0">舒适度</p>
                <p v-for="item in queryResult.comfortLevel" class="t t1">{{item}}</p>
            </div>
            <div class="info info-1 f-cb">
                <p class="t t0">最拥挤的线路</p>
                <p v-for="item in queryResult.mostCrowd" class="t t1">{{item}}</p>
            </div>
            <div class="info f-cb">
                <p class="t t0">拥挤度</p>
                <p v-for="item in queryResult.crowdLevel" class="t t1">{{item}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import chart from '../echart/chart';

    export default {
        name:'graphic-meter',
        data(){
            return {
                options1:null,
                options2:null
            }
        },
        props: ['queryResult','component'],
        created(){

        },
        mounted(){
            this.options1 = {
                type:'bus',
                box:this.$refs.chart1
            }
            this.options2 = {
                type:'metro',
                box:this.$refs.chart2
            }
        },
        methods: {
            
        },
        components:{chart}
    }

</script>
