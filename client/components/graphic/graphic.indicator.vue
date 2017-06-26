<template>
    <div class="m-graphic-indicator" :class="{'m-graphic-indicator-1':component.id == 19}">
        <div class="indicator-box" :style="boxStyle" v-for="(item,index) in queryResult.list">
            <h1 :style="getTextStyle(index)">{{item.num}}</h1>
            <div class="name">{{item.name}}</div>
        </div>
    </div>
</template>

<script>
    import consts from '../../utils/consts';

    export default {
        name:'graphic-indicator',
        data(){
            return {
                boxStyle:'',
                textStyle:''
            }
        },
        props: ['queryResult','component'],
        created(){
            this.setStyle();
        },
        methods: {
            setStyle(){
                let length = this.queryResult.list.length;
                this.boxStyle = 'width:' + Math.floor(100 / length) + '%;';
            },
            getTextStyle(index){
                return 'color:' +  consts.INDICATOR_COLORS[index];
            }
        }
    }

</script>
