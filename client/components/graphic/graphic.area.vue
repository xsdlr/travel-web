<template>
    <div class="m-graphic-area">
        <div class="img">
            <img src="../../assets/img/area.png">
        </div>
        <div class="flex">
            <div class="item" v-for="item of queryResult.list">
                <p class="">{{item.name}}</p>
                <div class="line">
                    <div class="f-bg person man">{{item.manNum}}</div>
                    <div class="f-bg person woman">{{item.womanNum}}</div>
                </div>
            </div>
        </div>
        <div class="points">
            <div class="point point1 animation"></div>
            <div class="point point2"></div>
            <div class="point point3"></div>
            <div class="point point4"></div>
        </div>
    </div>
</template>

<script>

    export default {
        name:'graphic-area',
        data(){
            return {}
        },
        props: ['queryResult','component'],
        created(){
            
        },
        mounted(){

        },
        methods: {
            
        }
    }

</script>
