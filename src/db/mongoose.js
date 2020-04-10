const mongoose = require ('mongoose')
const validator=require('validator')


mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
})



// const me=new User ({
//     name:'Ankita   ',
//     email:'   ANKITA@gmail.com  ',
//     password:'ankita123 '
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error! ',error)
// })



// const task=new Tasks({
//     description:'Learn Monngoose'
// })

// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log('Error! ',error)
// })