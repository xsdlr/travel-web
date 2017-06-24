import fetch from './fetch';
import mockJson from './json';

const hostIp = 'http://116.62.148.154:8080/odhbase';
const mock = true;

export default {

	getQuery(data){
		if(mock){
			return new Promise((resolve, reject) => {
				resolve(mockJson[data.id]);
			});
		}
		
		return fetch(hostIp + '/rest/temp/json/' + data.id,{
			method:'GET'
		});
	}

}
