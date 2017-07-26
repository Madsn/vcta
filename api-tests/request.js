const http = require('http');
const BASE_URL = 'http://localhost:8080'

export default function request(url) {
    return new Promise(resolve => {
        http.get({path: BASE_URL + url, port: 8080}, response => {
            let data = '';
            response.on('data', _data => data += _data);
            response.on('end', () => resolve(data));
        });
    });
}