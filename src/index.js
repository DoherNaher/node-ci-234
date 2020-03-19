const  express =require('express');

const app = express();

app.get('/',(req,resp)=>{
    resp.send('Main page')
})
app.get('/item',(req,resp)=>{
    resp.send('Item page')
})
app.listen(process.env.PORT || 3000 ,()=>{
    console.log('Server started')
})