<template>
    
</template>

<script>
    import echarts from 'echarts';
    import reflex from './reflex';

    export default {
        name:'chart',
        data(){
            return {
              myChart: undefined
            }
        },
        props: ['queryResult','component','options'],
        created(){
            
        },
        mounted(){
            this.draw();
        },
        methods: {
            draw () {
              let box = this.$parent.$refs.chart;
              if(!box){
                box = this.options.box;
              }
                if (!this.myChart) {
                  this.myChart = echarts.init(box);
                }
              let myChartOptions = reflex.main(this.queryResult,this.component,this.options);
              if(this.component.id == 25){
                setTimeout(() => {
                  this.myChart.setOption(myChartOptions);
                },600)
              }else{
                this.myChart.setOption(myChartOptions);
              }
            }
        },
      watch: {
        queryResult () {
          this.draw();
        }
      }
    }

</script>
