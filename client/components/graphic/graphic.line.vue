<template>
    <div class="m-frame">
        <div class="m-echarts" ref="chart">
            <chart :queryResult="queryResult" :component="component"></chart>
        </div>
    </div>
</template>

<script>
    import chart from '../echart/chart';

    export default {
        name:'graphic-line',
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
