<template>
    
</template>

<script>
    import echarts from 'echarts';
    import reflex from './reflex';

    export default {
        name:'chart',
        data(){
            return {}
        },
        props: ['queryResult','component','options'],
        created(){
            
        },
        mounted(){
            let box = this.$parent.$refs.chart;
            if(!box){
                box = this.options.box;
            }

            let myChart = echarts.init(box);
            
            let myChartOptions = reflex.main(this.queryResult,this.component,this.options);
            myChart.setOption(myChartOptions);
        },
        methods: {
            
        }
    }

</script>
