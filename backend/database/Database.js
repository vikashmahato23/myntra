const mongoose = require('mongoose')
//database
const connectdatabse = ()=>{
    mongoose.connect(process.env.DB_URI, {useNewUrlParser: true,
         useUnifiedTopology:true,
        }).then((data)=>{
        console.log(`Database connected ${data.connection.host}`)
    })

}

module.exports = connectdatabse