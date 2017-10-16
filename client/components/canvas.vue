<template>
    <div class="m-canvas" :style="canvasStyle">
        <div class="box" :style="boxStyle">
            <div class="grid">
                <graphic v-for="(component, index) of config" :key="index" :component="component" :index="index"></graphic>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from '../utils';
    import graphic from './graphic';

    export default {
        data(){
            return {
                ratio:1,
                canvasStyle:'',
                boxStyle:''
            }
        },
        props: {
            config: {
                type: Array
            }
        },
        created(){
            
        },
        mounted(){
            this.resetRatio();

            this.setStyle();
        },
        methods: {
            resetRatio(){
                let container = this.$parent.$refs.container;
                let containerWidth = container.clientWidth - 40;
                let containerHeight = container.clientHeight;
                let widthRatio = containerWidth / 1600;
                let heightRatio = containerHeight / 720;
                this.ratio = widthRatio > heightRatio ? heightRatio : widthRatio;
            },
            setStyle(){
                this.canvasStyle = `
                    width:${1600*this.ratio}px;
                    height:${720*this.ratio}px;
                `
                this.boxStyle = `transform:scale(${this.ratio})`;
            }
        },
        components:{graphic}
    }

</script>
