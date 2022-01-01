const mongoose = require('mongoose');

const connect = async ()=>{

try{
const conn  = await mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
console.log('data base connected: '+conn.connection.host);
}
catch(error){
    console.error(error)
}

}
module.exports= connect;