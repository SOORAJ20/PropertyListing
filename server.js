const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');


dotenv.config();
const db=process.env.DB_CONNECT;

mongoose.Promise=global.Promise;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true },function(err){
    if(err){
        console.error("Error! "+err);
    }else{
        console.log("connection to db: success!");
    }
});

const port=3000;
app.use(express.static(path.join(__dirname,'dist/prop')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());


const listapi=require('./server/routes/listingapi');
app.use('/api/listings',listapi);

const userapi=require('./server/routes/userapi');
app.use('/api/users',userapi);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/prop/index.html'));
})

app.listen(port,function(){
    console.log("server running on local host: "+port);
})