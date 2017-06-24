<style lang="less">
    @import "./styles/index.less";
</style>

<template>
    <div class="g-app" :class="{'g-app-large':theme=='black'}" id="app">

        <div class="g-hd">
            <div class="m-hd">
                <div class="f-fl logo">
                    <img src="./assets/img/logo.png"/>
                    <div class="label">
                        <p class="ln">惠民城市</p>
                        <p class="ln1">城市计算的践行者（杭州市民卡）</p>
                    </div>
                </div>
                <div class="f-fr" :class="{'f-dn':theme=='black'}">
                    <div class="opt f-cb">
                        <div class="f-bg item message">消息</div>
                        <div class="f-bg item opera">操作</div>
                        <div class="f-bg item fullscreen" v-on:click="onFullScreen('enter')">全屏</div>
                    </div>
                    <div class="user">
                        当前用户：11111111111
                    </div>
                </div>
            </div>
        </div>

        <router-view></router-view>

        <div class="g-ft">
            <div class="m-ft">
                <div class="line">版权所有：2003-2017&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;杭州市民卡有限公司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;服务热线：96225</div>
                <div class="line">增值电信业务经营许可证：浙B2-20110464</div>
            </div>
        </div>

    </div>
</template>

<script>
    import _ from './utils';
    import consts from './utils/consts';

    export default {
        data(){
            return {
                theme:'white'
            }   
        },
        created(){
            let route = this.$route;
            if(consts.BLACK_THEME.indexOf(route.name) > -1){
                this.theme = 'black';
            }
        },
        mounted() {

        },
        methods: {
            onFullScreen(type){
                _.toggleFullScreen(document.body,type);
            }
        },
    }
</script>