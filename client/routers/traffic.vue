<template>
    <div class="g-mn">
        <div class="g-nav">
            <div class="m-nav">
                <div class="links">
                    <div class="item">首页</div>
                    <div class="item item-active">公共交通</div>
                    <div class="item">卡分析</div>
                    <div class="item">区域计算</div>
                    <div class="item">报表</div>
                    <div class="item">人群计算</div>
                    <div class="item">工具</div>
                    <div class="item" v-on:click="onFullScreen('leave')">退出全屏</div>
                </div>
            </div>
        </div>
        <div class="g-sd" :class="{'z-close':close}">
            <div class="m-slider">
                <img src="../assets/img/slider.png" @click="close = !close">
            </div>
            <div class="m-choice">
                <div class="group" :class="{'z-open':choice.open}" v-for="choice in choiceArr">
                    <h4 class="f-bg" :class="choice.className" @click="choice.open = !choice.open">{{choice.name}}</h4>
                    <div class="items">
                        <div class="item" v-for="item in choice.items" :class="{'item-active':item.active}" @click="changeActive(item)">{{item.title}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="g-mnc" :class="{'z-close':close}">
            <div class="m-mdl m-filter">
                <div class="item">
                    <div class="ttl">日期</div>
                    <div class="subs">
                        <label><input type="radio" name="date">周末</label>
                        <label><input type="radio" name="date">工作日</label>
                        <label><input type="radio" name="date">国庆</label>
                    </div>
                </div>
                <div class="item">
                    <div class="ttl">时间</div>
                    <div class="subs">
                        <label><input type="radio" name="time">6:00~10:00</label>
                        <label><input type="radio" name="time">11:00~13:00</label>
                        <label><input type="radio" name="time">17:00~19:00</label>
                        <label><input type="radio" name="time">20:00~24:00</label>
                    </div>
                </div>
                <div class="item">
                    <div class="ttl">关注点</div>
                    <div class="subs">
                        <label><input type="radio" name="follow">近江</label>
                        <label><input type="radio" name="follow">东站</label>
                        <label><input type="radio" name="follow">武林</label>
                    </div>
                </div>
            </div>

            <div class="m-mdl" style="margin:20px;height:300px;text-align:center;">
                图表区域
            </div>

        </div>
    </div>
</template>

<script>
    import _ from '../utils';
    import consts from '../utils/consts';

    export default {
        data(){
            return {
                choiceArr:consts.choiceArr,
                close:false
            }   
        },
        created(){
            
        },
        mounted(){

        },
        methods: {
            onFullScreen(type){
                _.toggleFullScreen(document.body,type);
            },
            changeActive(item){
                let data = this.$data;
                data.choiceArr.forEach(choice => {
                    choice.items.forEach(item => {
                        item.active = false;
                    })
                })
                item.active = true;
            }
        },
    }
</script>