const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/personDB")


const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Not bad"
})

const pineapple = new Fruit({
  name: "pineapple",
  rating: 10,
  review: "Good shit"
})

pineapple.save();

fruit.save();


const personSchema = new mongoose.Schema({
  name: String,
  height: Number,
  Sex: String,
  favoriteFruit: fruitSchema
})

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Jacky",
  rating: 188,
  Sex: "Male"
  favouriteFruit: pineapple
})

person.save();

Person.find(function(err,people){
  if(err){
    console.log("Hello");
    console.log(err);
  }else{
    console.log("World");
    console.log(people);
  }
})

Fruit.deleteOne({id: "624df740237b571125d35684"},function(err){
  console.log("no error");
});
