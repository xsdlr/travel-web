<template>
    <div class="m-graphic-list">
        <div class="line f-cb" v-for="item in queryResult.list">
            <div class="txt">{{item.text}}</div>
            <div class="u-btn u-btn-1" v-for="item2 in item.functionList">{{item2}}</div>
        </div>
    </div>
</template>

<script>

    export default {
        name:'graphic-list',
        data(){
            return {}
        },
        props: ['queryResult','compontent'],
        created(){
            
        },
        mounted(){

        },
        methods: {
            
        }
    }

</script>
