<template>
    <div class="m-dashbox" :style="dashboxStyle">
        <div class='u-resize' :class="{'u-resize-small':component.box.inner}">
            <div class='resize-topLeft'></div>
            <div class='resize-topRight'></div>
            <div class='resize-bottomRight'></div>
            <div class='resize-bottomLeft'></div>
        </div>
        <div class="m-graphic">
            <h2 class="f-bg" :class="{'f-dn':!component.name}">{{component.name}}</h2>
            <graphic-area v-if="queryResult && component.type === 'area'" :queryResult="queryResult" :component="component"/>
            <graphic-text v-if="queryResult && component.type === 'text'" :queryResult="queryResult" :component="component"/>
            <graphic-table v-if="queryResult && component.type === 'table'" :queryResult="queryResult" :component="component"/>
            <graphic-table2 v-if="queryResult && component.type === 'table2'" :queryResult="queryResult" :component="component"/>
            <graphic-line v-if="queryResult && component.type === 'line'" :queryResult="queryResult" :component="component"/>
            <graphic-pie v-if="queryResult && component.type === 'pie'" :queryResult="queryResult" :component="component"/>
            <graphic-map v-if="queryResult && component.type === 'map'" :queryResult="queryResult" :component="component"/>
            <graphic-indicator v-if="queryResult && component.type === 'indicator'" :queryResult="queryResult" :component="component"/>
            <graphic-list v-if="queryResult && component.type === 'list'" :queryResult="queryResult" :component="component"/>
            <graphic-meter v-if="queryResult && component.type === 'meter'" :queryResult="queryResult" :component="component"/>
            <graphic-heat v-if="queryResult && component.type === 'heat'" :queryResult="queryResult" :component="component"/>
            <graphic-relation v-if="queryResult && component.type === 'relation'" :queryResult="queryResult" :component="component"/>
            <graphic-category v-if="queryResult && component.type === 'category'" :queryResult="queryResult" :component="component"/>
            <graphic-block v-if="queryResult && component.type === 'block'" :queryResult="queryResult" :component="component"/>
        </div>
    </div>
</template>

<script>
    import _ from '../utils';
    import consts from '../utils/consts';
    import service from '../utils/service';
    import graphicArea from './graphic/graphic.area';
    import graphicText from './graphic/graphic.text';
    import graphicTable from './graphic/graphic.table';
    import graphicTable2 from './graphic/graphic.table2';
    import graphicLine from './graphic/graphic.line';
    import graphicPie from './graphic/graphic.pie';
    import graphicMap from './graphic/graphic.map';
    import graphicIndicator from './graphic/graphic.indicator';
    import graphicList from './graphic/graphic.list';
    import graphicMeter from './graphic/graphic.meter';
    import graphicHeat from './graphic/graphic.heat';
    import graphicRelation from './graphic/graphic.relation';
    import graphicCategory from './graphic/graphic.category';
    import graphicBlock from './graphic/graphic.block';
    
    export default {
        data(){
            return {
                dashboxStyle:'',
                queryResult:null
            }
        },
        props: ['component','index'],
        created(){
            //初始化dashbox高宽及位置信息
            this.dashboxStyle = this.initDashboxStyle();

            //请求数据
            if(this.component.noNeedQuery){
                this.queryResult = {};
            }else{
                this.fetchQuery();
//                if(this.component.loop){
                    setInterval(() => {
                        this.fetchQuery();
                    },2000)
//                }
            }
        },
        mounted(){

        },
        methods: {
            initDashboxStyle(){
                let region = this.component.box.region;
                let gridSize = consts.GRIDSIZE;

                let width = region.width * gridSize;
                let height = region.height * gridSize;
                let style = `z-index:${this.index};left:${region.left * gridSize}px;top:${region.top * gridSize}px;width:${width}px;height:${height}px`;
                return style;
            },

            fetchQuery(){
                service.getQuery({
                    id:this.component.id
                }).then(queryResult => {
                    this.queryResult = queryResult;
                })
            }
        },
        components:{graphicArea,graphicText,graphicTable,graphicTable2,graphicLine,graphicPie,graphicMap,graphicIndicator,graphicList,graphicMeter,graphicHeat,graphicRelation,graphicCategory,graphicBlock}
    }

</script>