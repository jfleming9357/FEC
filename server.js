let express = require('express');
let app = express();

app.use(express.static('client/dist'));

let port = 3000;
app.listen(port, ()=> {
  console.log(`Listening on ${port}`);
});