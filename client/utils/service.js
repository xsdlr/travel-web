import fetch from './fetch';
import mockJson from './json';
import md5 from 'blueimp-md5';

// const hostIp = 'http://116.62.148.154:8080/odhbase';
const hostIp = 'http://192.168.23.95:6009/';
const mock = false;

export default {

	getQuery(data){
		if(mock){
			return new Promise((resolve, reject) => {
				resolve(mockJson[data.id]);
			});
		}

		let urlMap = {
		  13: 'Functions.php',
		  14: 'TotalFunction.php',
      15: 'Top3.php',
      16: 'FlowCountPerson.php',
      17: 'ThirdPart.php',
      19: 'UserCount.php',
      20: 'UsageCount.php',
      21: 'Retention.php'
    };

		return fetch(hostIp + urlMap[data.id],{
			method:'POST',
      data:{
			  signature:md5('Change after installation' + '1.0' + JSON.stringify({}) +  '2017'),
        ver:'1.0',
        ts:'2017',
        reqData:{}
      }
		});
	}

}
