<template>
    <div class="m-frame m-graphic-heat">
        <div class="m-echarts" ref="chart">
            <chart :queryResult="queryResult" :component="component"></chart>
        </div>
    </div>
</template>

<script>
    import chart from '../echart/chart';
    require('echarts/extension/bmap/bmap');

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
