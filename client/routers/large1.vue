<template>
    <div class="g-mn m-scrollbar" ref="container">
        <div class='m-dashRegion'>
            <dashboardCanvas :config="config"></dashboardCanvas>
        </div>
    </div>
</template>

<script>
    import _ from '../utils';
    import consts from '../utils/consts';
    import dashboardCanvas from '../components/canvas';

    export default {
        data(){
            return {
                config:consts.LARGE1_CONFIG
            }
        },
        created(){
            
        },
        mounted(){

        },
        methods: {
            
        },
        components:{dashboardCanvas}
    }

</script>
