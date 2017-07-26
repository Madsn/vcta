const http = require('http');
const BASE_URL = 'http://localhost:8080'

export default function request(url, options) {
    options = options || {};
    options.path = BASE_URL + url;
    options.port = 8080;
    return new Promise(resolve => {
        http.get(options, response => {
            const { statusCode } = response;
            const contentType = response.headers['content-type'];
            let data = '';
            response.on('data', _data => data += _data);
            response.on('end', () => resolve({data, statusCode, contentType}));
        });
    });
}