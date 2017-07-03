<template>
    <div class="m-graphic-category">
        <div class="category-box">
            <div class="category-items f-cb">
                <div class="category-item" v-for="item in queryResult.list" @click="toggleSelect(item)">
                    <div class="img {item.icon}">
                        <img src="../../assets/img/wallet.png" v-if="item.icon == 'wallet' && !item.selected"/>
                        <img src="../../assets/img/cardQuery.png" v-if="item.icon == 'cardQuery' && !item.selected"/>
                        <img src="../../assets/img/recharge.png" v-if="item.icon == 'recharge' && !item.selected"/>
                        <img src="../../assets/img/campus.png" v-if="item.icon == 'campus' && !item.selected"/>
                        <img src="../../assets/img/medical.png" v-if="item.icon == 'medical' && !item.selected"/>
                        <img src="../../assets/img/service.png" v-if="item.icon == 'service' && !item.selected"/>
                        <img src="../../assets/img/shop.png" v-if="item.icon == 'shop' && !item.selected"/>
                        <img src="../../assets/img/apply.png" v-if="item.icon == 'apply' && !item.selected"/>
                        <img src="../../assets/img/cardCity.png" v-if="item.icon == 'cardCity' && !item.selected"/>
                        <img src="../../assets/img/feedback.png" v-if="item.icon == 'feedback' && !item.selected"/>

                        <img src="../../assets/img/wallet_active.png" v-if="item.icon == 'wallet' && item.selected"/>
                        <img src="../../assets/img/cardQuery_active.png" v-if="item.icon == 'cardQuery' && item.selected"/>
                        <img src="../../assets/img/recharge_active.png" v-if="item.icon == 'recharge' && item.selected"/>
                        <img src="../../assets/img/campus_active.png" v-if="item.icon == 'campus' && item.selected"/>
                        <img src="../../assets/img/medical_active.png" v-if="item.icon == 'medical' && item.selected"/>
                        <img src="../../assets/img/service_active.png" v-if="item.icon == 'service' && item.selected"/>
                        <img src="../../assets/img/shop_active.png" v-if="item.icon == 'shop' && item.selected"/>
                        <img src="../../assets/img/apply_active.png" v-if="item.icon == 'apply' && item.selected"/>
                        <img src="../../assets/img/cardCity_active.png" v-if="item.icon == 'cardCity' && item.selected"/>
                        <img src="../../assets/img/feedback_active.png" v-if="item.icon == 'feedback' && item.selected"/>
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
            toggleSelect(item){
                this.$router.push({ name:item.link })
            }
        }
    }

</script>
