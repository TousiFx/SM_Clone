const mongoose = require("mongoose");
const Chat = require("./models/clone.js");

main()
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/clone");
}

let allChats = [
  {
    from: "rohan",
    to: "priya",
    msg: "hey did you finish the assignment yet?",
    created_at: new Date(),
  },
  {
    from: "sneha",
    to: "arjun",
    msg: "let's grab momos after class today",
    created_at: new Date(),
  },
  {
    from: "vikram",
    to: "neha",
    msg: "happy birthday!! party kab de rahi hai?",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
