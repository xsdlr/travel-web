<template>
    <div class="m-graphic-text">
        {{resRegistration.userName}}用户在{{resRegistration.timeStr}}挂了{{resRegistration.hospital}}的{{resRegistration.department}}<br>
        <span class="wrd">{{resJKCX.userName}}用户在{{resJKCX.timeStr}}使用了健康出行</span>
    </div>
</template>

<script>
    import { take, takeRight } from 'lodash'
    import utils from '../../utils'

    export default {
        name:'graphic-text',
        data(){
            return {
                text:''
            }
        },
        computed: {
          resJKCX () {
            const {userName, timeStr} = this.queryResult.resJKCX;
            return {
              userName: `${take(userName, 6).join('')}****${takeRight(userName, 4).join('')}`,
              timeStr: utils.format(timeStr, 'yyyy年MM月dd日HH:mm:ss')
            }
          },
          resRegistration () {
            const {department, hospital, timeStr, userName} = this.queryResult.resRegistration;
            return {
              department,
              hospital,
              userName: `${take(userName, 6).join('')}****${takeRight(userName, 4).join('')}`,
              timeStr: utils.format(timeStr, 'yyyy年MM月dd日HH:mm:ss')
            }
          }
        },
        props: ['queryResult','component'],
        created(){
            // let queryResult = this.queryResult;
            // this.text = queryResult.userName + '用户在' + queryResult.timeStr + '挂了内科<span class="wrd">在web端挂号，使用了健康出行</span>';
            // window.client = queryResult.client;
        },
        mounted(){

        },
        methods: {
            
        }
    }

</script>
