<template>
    <div class="m-graphic-heat">
        <div class="heat-box">
            <div class="m-echarts" ref="chart">
                <chart :queryResult="queryResult" :component="component"></chart>
            </div>
        </div>
        <div class="list-box f-cb">
            <div class="item" v-for="item in queryResult.list">
                {{item.name}}：
                <span class="percent">{{item.percent}}</span>
                <span class="changePercent" :class="{'z-rise':item.rise}">{{item.changePercent}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import BMap from 'echarts/extension/bmap/bmap';
    import chart from '../echart/chart';

    export default {
        name:'graphic-heat',
        data(){
            return {}
        },
        props: ['queryResult','component'],
        created(){
            
        },
        mounted(){
            
        },
        methods: {
            
        },
        components:{chart}
    }

</script>
