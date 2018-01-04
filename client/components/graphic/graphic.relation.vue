<template>
    <div class="m-graphic-relation">
        <div :class="relationBoxClass">
            <div v-if="needBackground" class="img"><img src="../../assets/img/relation.png"></div>
            <div class="m-echarts" ref="chart">
                <chart :queryResult="queryResult" :component="component"></chart>
            </div>
        </div>
    </div>
</template>

<script>
    import chart from '../echart/chart';

    export default {
        name:'graphic-relation',
        data(){
            return {}
        },
        props: ['queryResult','component'],
        computed: {
          needBackground () {
            return this.component.needBackground
          },
          relationBoxClass () {
            return {
              'relation-box': true,
              'no-background': !this.needBackground,
              'background': this.needBackground
            }
          }
        },
        created(){
            
        },
        mounted(){

        },
        methods: {
            
        },
        components:{chart}
    }

</script>
