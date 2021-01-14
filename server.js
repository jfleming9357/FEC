let express = require('express');
let app = express();
var proxy = require('express-http-proxy');
require('dotenv').config();
// const { createProxyMiddleware } = require('http-proxy-middleware');

app.use('/proxy', proxy('https://app-hrsei-api.herokuapp.com/', {
  proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
    // you can update headers
    proxyReqOpts.headers['Authorization'] = `${process.env.TOKEN}`;
    // you can change the method
    return proxyReqOpts;
  }
}));
app.use(express.static('client/dist'));



let port = 3000;

app.listen(port, ()=> {
  console.log(`Listening on ${port}`);
});



// const onProxyReq = function(proxyReq, req, res) {
//   proxyReq.setHeader('Authorization', process.env.TOKEN);
// };
//app.use('/api', createProxyMiddleware({ target: 'https://app-hrsei-api.herokuapp.com/api/fec2/hratx/', changeOrigin: true}));