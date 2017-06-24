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
        props: ['queryResult','component'],
        created(){
            
        },
        mounted(){
            let box = this.$parent.$refs.chart;

            let myChart = echarts.init(box);
            
            let options = reflex.main(this.queryResult,this.component);
            myChart.setOption(options);
        },
        methods: {
            
        }
    }

</script>
