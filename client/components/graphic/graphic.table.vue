<template>
    <div class="m-frame">
        <div class="m-echarts" ref="chart">
            <chart :queryResult="tableData" :component="component"></chart>
        </div>
    </div>
</template>

<script>
  import chart from '../echart/chart'
  import {keys, isEmpty, sortBy} from 'lodash'
    export default {
        name:'graphic-table',
        computed: {
          tableData () {
            const {terminal} = this.queryResult.data;
            const dataMap = (data) => {
              return data.map(object => {
                const key = keys(object)[0];
                return [key, object[key] || 0]
              }).filter(arr => !isEmpty(arr))
            };
            const data = sortBy(dataMap(terminal), ([key, value]) => value);
            return {
              terminal: {
                types: data.map(arr => arr[0]),
                values: data.map(arr => arr[1])
              }
            }
          }
        },
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
