const mongoose = require('mongoose');
const Chat = require('./models/chat');

//mongoose connection
main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// Data insertion
const allChats = [
    {from: "raju",
     to: "mohit",
     msg: "kese ho yaar!!",
     created_at: new Date(),
    },
    {from: "sagar",
     to: "sunil",
     msg: "where are u bro",
     created_at: new Date(),
    },
    {from: "manish",
     to: "manoj",
     msg: "final date came so prepare well",
     created_at: new Date(),
    },
    {from: "rajesh",
     to: "bikash",
     msg: "dipak will join our party or not ?",
     created_at: new Date(),
    },
    {from: "sabina",
     to: "balen",
     msg: "congratulations for PM post.",
     created_at: new Date(),
    },
    {from: "priya",
     to: "amrita",
     msg: "when wil u come here ?",
     created_at: new Date(),
    },
    {from: "krishna",
     to: "satyabhama",
     msg: "looking very beautiful , such a wonderful women.",
     created_at: new Date(),
    },
];

// insert many
Chat.insertMany(allChats);
