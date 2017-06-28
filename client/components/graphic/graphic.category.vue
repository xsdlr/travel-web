<template>
    <div class="m-graphic-category">
        <div class="category-box">
            <div class="category-items f-cb">
                <div class="category-item" v-for="item in queryResult.list">
                    <div class="img">
                        <img src="../../assets/img/wallet.png" v-if="item.icon == 'wallet'"/>
                        <img src="../../assets/img/cardQuery.png" v-if="item.icon == 'cardQuery'"/>
                        <img src="../../assets/img/recharge.png" v-if="item.icon == 'recharge'"/>
                        <img src="../../assets/img/campus.png" v-if="item.icon == 'campus'"/>
                        <img src="../../assets/img/medical.png" v-if="item.icon == 'medical'"/>
                        <img src="../../assets/img/service.png" v-if="item.icon == 'service'"/>
                        <img src="../../assets/img/shop.png" v-if="item.icon == 'shop'"/>
                        <img src="../../assets/img/apply.png" v-if="item.icon == 'apply'"/>
                        <img src="../../assets/img/cardCity.png" v-if="item.icon == 'cardCity'"/>
                        <img src="../../assets/img/feedback.png" v-if="item.icon == 'feedback'"/>
                    </div>
                    <div class="name">{{item.name}}</div>
                    <img class="hot" src="../../assets/img/hot.png" :class="{'f-dn':!item.hot}"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name:'graphic-category',
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
