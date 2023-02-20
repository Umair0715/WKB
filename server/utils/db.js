const mongoose = require('mongoose');

// const DB = process.env.LOCAL_DB;
const DB = process.env.DATABASE_URI;

const connectDB = () => {
   mongoose.connect(DB , {
      useNewUrlParser : true , 
      useUnifiedTopology : true 
   })
   .then(() => console.log('Database connected.'))
   .catch(err => console.log(`Database connection failed. ${err}`))
}
module.exports = connectDB ;