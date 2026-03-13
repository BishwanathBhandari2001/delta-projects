        //**Schema Validation**/ to write Schema in mongoose
const mongoose = require('mongoose');

main().then(() =>{
    console.log("Server is connected");
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon'); //database created as Amazon 
}

    //Schema Validation using for Design Schem
// const bookSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true, //just like in SQl as Not Null
//     },
//     author: {
//         type: String
//     },
//     price: {
//         type: Number
//     }
// });

    // Model = class. design for Book table
// const Book = mongoose.model("Book", bookSchema);

    //insert Data in table

// const book1 = new Book({title:"Mathematics",author:"madhav rai",price: 712});
     //save data in DB
// book1.save().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

    // this will show : Book Validation Failed (error)
// const book2 = new Book({author:"madhav rai",price: 712});
//     //save data in DB
// book2.save().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

    // it doesnot have any Validation rules so (No Error)
// const book1 = new Book({title:"Social Studies",price: 712});
//     //save data in DB
// book1.save().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

    //mongoose show CAST Error when it unable to parse dt
// const book1 = new Book({title:"Computer-Science",author:"Bhusal ghimire",price: "abcdabcd"});
//     //save data in DB
// book1.save().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

    // Mongose converted into String as Number.
// const book1 = new Book({title:"Computer-Science",author:"Bhusal ghimire",price: "1431"});
//     //save data in DB
// book1.save().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});



    //**Schema Type Options**/
    const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, //just like in SQl as Not Null
        maxLength:20, // maxlength 
    },
    author: {
        type: String
    },
    price: {
        type: Number,
        min: [100, 'Price is less than 100'], // minimun
    },
    discount: {
        type: Number,
        default: 0 //default set
    },
    categories: {
        type: String,
        enum: ["comics","action","fiction"], //enum
    }
});

    // Model = class. design for Book table
const Book = mongoose.model("Book", bookSchema);


    // insert data  for default
// const book1 = new Book({title:"Javascript",price: "455"});
//     //save data in DB
// book1.save().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

    //for max length : after 20 len it shows error
// const book1 = new Book({title:"Chemistry aasasdfadafasl",price: "1431"});
//     //save data in DB
// book1.save().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});


    // for price with manual error msg
// const book1 = new Book({title:"chemistry",price: "50"});
//     //save data in DB
// book1.save().then((res)=>{console.log(res)}).catch((err)=>{console.log(err.errors.price.properties.message)});
        // to see error we have to use it

    // enum gives list and it show among oof these only
// const book1 = new Book({title:"biology",price: "432",categories: "funny"});
//     //save data in DB
// book1.save().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

    //enum
// const book1 = new Book({title:"Biology",price: "455",categories: "fiction"});
//     //save data in DB
// book1.save().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});


    /**********************************************/
    //**Update of Schema Validation Type**/
Book.findByIdAndUpdate('69af2d2d3da663cd1984118c',{price: 799}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});  // while updating mongoose not check Validation

    // for rules check we use Option: {runvalidators:true}
Book.findByIdAndUpdate('69af2d2d3da663cd1984118c',{price: 99},{runValidators:true}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err.errors.price.properties.message)});  //now it show error