<template>
    <div class="m-graphic-block">
        <div class="blk blk-and f-cb">
            <div class="item"><img src="../../assets/img/and.png"></div>
            <div class="item" v-for="item in queryResult.and">{{item}}%</div>
        </div>
        <div class="blk blk-ios f-cb">
            <div class="item"><img src="../../assets/img/ios.png"></div>
            <div class="item" v-for="item in queryResult.ios">{{item}}%</div>
        </div>
        <div class="blk blk-txt f-cb">
            <div class="item"></div>
            <div class="item">日留存</div>
            <div class="item">周留存</div>
            <div class="item">月留存</div>
        </div>
    </div>
</template>

<script>

    export default {
        name:'graphic-block',
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
