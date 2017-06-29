<template>
    <div class="m-graphic-table">
        <table class="m-table">
            <thead>
                <tr><th v-for="item in queryResult.head">{{item}}</th></tr>
            </thead>
            <tbody>
                <tr v-for="item in queryResult.data">
                    <td v-for="item2 in item">
                    <span class="val">{{item2.value}}</span>
                    <span class="percent" :class="{'z-rise':item2.rise}">{{item2.changePercent}}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        name:'graphic-table2',
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
