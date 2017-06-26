<template>
    <div class="m-frame m-graphic-map">
        <baidu-map class="map" :center="{lng: 120.2, lat: 30.3}" :zoom="12" enable-traffic='true' ak="Wog9RN3H6TVTPs1IVT6FfKNEEuixUXQL">
            <bm-traffic></bm-traffic>
        </baidu-map>
    </div>
</template>

<script>
    import {BaiduMap} from 'vue-baidu-map';
    import {BmTraffic} from 'vue-baidu-map';

    export default {
        name:'graphic-map',
        data(){
            return {}
        },
        props: ['queryResult','compontent'],
        created(){
            
        },
        mounted(){

        },
        methods: {
            
        },
        components: {BaiduMap,BmTraffic}
    }

</script>
