<template>
    <div class="g-mn m-scrollbar" ref="container">
        <div class='m-dashRegion'>
            <dashboardCanvas :config="config" v-bind:key="index"></dashboardCanvas>
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
                configs: [
                    consts.LARGE3_CONFIG,
                    consts.LARGE4_CONFIG
                ],
                index: 0
            }
        },
        computed: {
          config () {
            return this.configs[this.index]
          }
        },
        created(){
            
        },
        mounted(){
          setInterval(() => {
            this.$nextTick(() => {
              this.index = this.index < this.configs.length - 1 ? this.index + 1 : 0
            })
          }, 20000)
        },
        methods: {
            
        },
        components:{dashboardCanvas}
    }

</script>
