<template>
    <div class="m-graphic-text">
        {{text}}
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
        props: ['queryResult','compontent'],
        created(){
            let queryResult = this.queryResult;
            this.text = queryResult.userName + '用户在' + queryResult.timeStr + '挂了内科在web端挂号，使用了健康出行'
        },
        mounted(){

        },
        methods: {
            
        }
    }

</script>
