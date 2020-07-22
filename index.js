const express = require('http');
const app = express();

const port = 3004;
app.get('/', async(req,res)=>{
  res.write('home page');
  res.end();
})
app.listen(port, ()=>{console.log('server started')});
