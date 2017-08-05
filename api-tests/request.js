const http = require('http');
const BASE_URL = 'http://localhost:8080'

export default function request(url, options) {
    options = options || {};
    options.path = BASE_URL + url;
    options.port = 8080;
    return new Promise(resolve => {
        http.get(options, response => {
            const { statusCode } = response;
            const headers = {
                'content-type': response.headers['content-type'],
                'location': response.headers['location']
            }
            let data = '';
            response.on('data', _data => data += _data);
            response.on('end', () => resolve({full: response, snapshot: {data, statusCode, headers}}));
        });
    });
}