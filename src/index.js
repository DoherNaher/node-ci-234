const  express =require('express');

const app = express();

app.get('/',(req,resp)=>{
    resp.send('Hello')
})

app.listen(process.env.PORT || 3000 ,()=>{
    console.log('Server started')
})