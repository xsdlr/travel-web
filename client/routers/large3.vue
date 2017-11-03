<template>
    <div class="g-mn m-scrollbar" ref="container">
        <div class='m-dashRegion'>
            <dashboardCanvas :config="config" :key="index"></dashboardCanvas>
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
                index: 0,
                interval: undefined
            }
        },
        computed: {
          config () {
            return this.configs[this.index]
          },
          query () {
            return this.$route.query
          },
          needSwitch () {
            return this.query.switch === '1'
          },
          switchTimeout () {
            return Number(this.query.time) || 20000
          }
        },
        created(){

        },
        mounted(){
          this.needSwitch && this.switchViews()
        },
        beforeDestroy () {
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = undefined;
            }
        },
        methods: {
            switchViews () {
              this.interval = setInterval(() => {
                this.$nextTick(() => {
                  this.index = this.index < this.configs.length - 1 ? this.index + 1 : 0
                })
              }, this.switchTimeout)
            },
            reload () {
              this.$router.go(0)
            }
        },
        watch: {
          query () {
              this.reload()
          }
        },
        components:{dashboardCanvas}
    }

</script>
