import fetch from './fetch';
import mockJson from './json';

// const hostIp = 'http://116.62.148.154:8080/odhbase';
const hostIp = 'http://192.168.1.115/screenInterface/';
const mock = false;

export default {

	getQuery(data){
		if(mock){
			return new Promise((resolve, reject) => {
				resolve(mockJson[data.id]);
			});
		}

		const urlMap = {
		  1: 'FeedFlow.php',
      2: 'HospitalCount.php',
      3: 'HospitalizeTime.php',
      4: 'TripMode.php',
      5: 'HospitalRank.php',
      6: 'AgeContrast.php',
      7: 'LeftGraph.php',
      8: 'functionByAge.php',
      9: 'FunctionByWeb.php',
      10: 'FUnctionByMobile.php',
      11: 'TerminalCount.php',
      12: 'FunctionByTime.php',
		  13: 'Functions.php',
		  14: 'TotalFunction.php',
      15: 'Top3.php',
      16: 'FlowCountPerson.php',
      17: 'ThirdPart.php',
      19: 'UserCount.php',
      20: 'UsageCount.php',
      21: 'Retention.php',
      22: 'FunctionRank.php',
      23: 'WalletCount.php',
      26: 'PublicTransportComfort.php',
      27: 'Transportation.php'
    };

		return new Promise((resolve, reject) => {
      const {id} = data || {};
      const url = urlMap[id];
      url ? resolve(url) : reject(`id为${id}的服务请求地址未映射`);
    }).then(url => {
      return fetch(hostIp + url,{
        method:'POST',
        data:{}
      });
    });
	}

}
