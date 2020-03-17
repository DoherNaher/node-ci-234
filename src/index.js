import express from 'express'

const app = express();

app.get('/',(req,resp)=>{
    resp.send('Hello')
})

app.listen(3001,()=>{
    console.log('Server started')
})