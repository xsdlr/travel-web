<template>
    <div class="m-graphic-area">
        <div class="img">
            <img src="">
        </div>
        <div class="flex">
            <div class="item" v-for="item of queryResult.list">
                <p class="">{{item.name}}</p>
                <div class="line">
                    <div class="person man">{{item.manNum}}</div>
                    <div class="person woman">{{item.womanNum}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name:'graphic-area',
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
