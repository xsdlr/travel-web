<template>
    <div class="m-graphic-text">
        {{queryResult.userName}}用户在{{queryResult.timeStr}}挂了内科<br>
        <span class="wrd">在web端挂号，使用了健康出行</span>
    </div>
</template>

<script>

    export default {
        name:'graphic-text',
        data(){
            return {
                text:''
            }
        },
        props: ['queryResult','component'],
        created(){
            // let queryResult = this.queryResult;
            // this.text = queryResult.userName + '用户在' + queryResult.timeStr + '挂了内科<span class="wrd">在web端挂号，使用了健康出行</span>';
            // window.client = queryResult.client;
        },
        mounted(){

        },
        methods: {
            
        }
    }

</script>
