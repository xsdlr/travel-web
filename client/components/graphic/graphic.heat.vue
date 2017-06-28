<template>
    <div class="m-frame m-graphic-heat">
        <div class="m-echarts" ref="chart">
            <chart :queryResult="queryResult" :component="component"></chart>
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
