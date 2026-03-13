        //create connection to mongodb with mongoose
const mongoose = require('mongoose');

main().then(() =>{
    console.log("Server is connected");
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

    //Schema for collection
const UserSchema = new mongoose.Schema({
    name: String,
    address: String,
    age: Number,
});

//Model= clas. name alway Capital Letter & no Plural name
const User = mongoose.model("User", UserSchema);//"User=table
// const Employee = mongoose.model("Employee", UserSchema);

    //InsertOne data at a time
// const user1 = new User({
//     name: "Bishwanath",
//     address: "sahodwa,nepal",
//     age: 24,
// });
// const user2 = new User({name:"kasi",address:"nepal",age:32});

    //save entry in DB & it returns Promise (result,response)
// user1.save();
// user2.save().then( (res) =>{
//     console.log(res);
// })
// .catch( (err) =>{
//     console.log(err);
// });

    //insertMany. it returns Promises
// User.insertMany([
//     {name:"ram",address:"janakpur",age:42},
//     {name:"gopal",address:"pipara",age:23},
//     {name:"shiva",address:"hardiya",age:34},
// ]).then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

        //find() . it return only query Not return Promise
// User.find().then((res) =>{
//     console.log(res); 
//     // console.log(res[0]);console.log(res[0].name);
// }).catch((err) => {
//     console.log(err);
// });

// User.find({age: {$gt: 34}}).then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});
// User.find({_id: "69af08766dd6ebf154d50dc6"}).then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});

         //findOne()
// User.findOne().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

        // findById()
// User.findById("69af08766dd6ebf154d50dc4").then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

    // UpdateOne()
// User.updateOne({name: "gopal"}, {age: 42}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

    //UpdateMany()
// User.updateMany({age: {$eq: 42}} , {age: 55}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

        //findOneAndUpdate()
// User.findOneAndUpdate({age: 24},{age:49}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

        //findByIdAndUpdate()
// User.findByIdAndUpdate('69af05455d63f79a9e18bcc6',{age:98}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

    // DeleteOne
// User.deleteOne({age:98}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

        //DeleteMany()
// User.deleteMany({age:55}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

//findOneAndDelete()
User.findOneAndDelete({age:34}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

        //findByIdAndDelete()
// User.findByIdAndDelete('69af05455d63f79a9e18bcc6',{age:98}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
