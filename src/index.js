const  express =require('express');

const app = express();

app.get('/',(req,resp)=>{
    resp.send('Hello')
})

app.listen(3001,'0.0.0.0',()=>{
    console.log('Server started')
})