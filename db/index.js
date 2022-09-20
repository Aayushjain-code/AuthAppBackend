const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/auth-app')
.then(()=>{
    console.log('our db is connected')
})
.catch(err=>console.log(err));
