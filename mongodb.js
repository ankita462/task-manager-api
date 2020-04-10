//CURD create read update delete

// const mongodb = require('mongodb')
// const MongoClient =mongodb.MongoClient
// const ObjectID=mongodb.ObjectID

const {MongoClient,ObjectID}=require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName ='task-manager'
// const id=new ObjectID()
// console.log(id)
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL,{ useNewUrlParser: true},(error,client)=>{
    if(error) {
        return console.log('Unable to connect to database!')
    }
    const db=client.db(databaseName)

    // db.collection('users').deleteMany({
    //     age:21
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'Claen the house'
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })






















    // db.collection('users').updateOne({
    //     _id:new ObjectID("5e84804fecd8ce25ec7f2efd")
    // }, {
    //     $set: {
    //         name:'Ambika'
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // }) 

    // db.collection('tasks').updateMany({
    //     completed: true
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // }) 











    // db.collection('users').findOne({name:'Kriti'},(error,user)=>{
    //     if(error) {
    //         return console.log('Enable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({age: 19}).toArray((error,users)=>{
    //     console.log(users)
    // })
    // db.collection('users').find({age: 19}).count((error,count)=>{
    //     console.log(count)
    // })



















     //insert
    // db.collection('users').insertOne({
    //     _id:id,
    //     name:'Kriti',
    //     age:22
    // },(error,result)=> {
    //     if(error) {
    //         return console.log('Unable to insert in database')
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('users').insertMany([
    //     {
    //         name : 'Somya',
    //         age:21
    //     },
    //     {
    //         name:'Deeksha',
    //         age:20
    //     }],(error,result)=>{
    //         if(error) {
    //             return console.log('Unable to insert the document')
    //         }
    //             console.log(result.ops)
    // })
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Claen the house',
    //         completed: true
    //     },{
    //         description: 'Study node',
    //         completed: true
    //     },{
    //         description: 'Pot Plants',
    //         completed: false
    //     }
    // ],(error,result) => {
    //     if(error) {
    //         return console.log('Unable to insert the tasks')
    //     }
    //     console.log(result.ops)
    // })
})