<template>
    <div class="m-graphic-relation">
        <div class="relation-box">
            <div class="img"><img src="../../assets/img/relation.png"></div>
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
        created(){
            
        },
        mounted(){

        },
        methods: {
            
        },
        components:{chart}
    }

</script>
