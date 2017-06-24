<template>
    <div class="m-graphic-table">
        <table class="m-table">
            <thead>
                <tr><th v-for="item in queryResult.head">{{item}}</th></tr>
            </thead>
            <tbody>
                <tr v-for="item in queryResult.data"><td v-for="item2 in item">{{item2}}</td></tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        name:'graphic-table',
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
