import mongoose from "mongoose";
const url = "mongodb://localhost:27017/people";

mongoose.connect(url);

const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const People = new mongoose.model("People", peopleSchema);

// People.insertMany([{ name: "Holy shit", age: 53 }, { name: "barath", age: 20 }, { name: "surya", age: 323 }])
// // people.save();

People.find({}).then((res) => {
    res.map((ele) => {
        console.log(ele.name);
    })
}).catch(err => { console.log(err) })

People.deleteOne({ name: "barath" }).then((res) => { console.log(res) })