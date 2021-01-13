let express = require('express');
let app = express();
require('dotenv').config();
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use(express.static('client/dist'));
app.use('/api', createProxyMiddleware({ target: 'https://app-hrsei-api.herokuapp.com/api/fec2/hratx/', changeOrigin: true
}));


// headers: {
//   'Authorization': process.env.TOKEN
// }
let port = 3000;



app.listen(port, ()=> {
  console.log(`Listening on ${port}`);
});