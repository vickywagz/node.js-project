const app = require('./app');
const db = require('./config/db')
const UserModel = require('./model/user_model')

const port = 300;

app.get('/',(req,res)=>{
    res.send("Hello World1")
});

app.listen(port,()=>{
    console.log(`Server Listeningon port http://localhost:${port}`);
});