import db from "../db/connection.js";
import Joke from "../models/Joke.js";
import joke from "./joke.json" assert { type: "json"};

// fetch("https://v2.jokeapi.dev/joke/Any?safe-mode&amount=10")
// .then((res) => res.json())
// .then((data)=> {
//    seedData(data.jokes) // array of joke objects
// })

async function seedData(){
    let res = await fetch("https://v2.jokeapi.dev/joke/Any?safe-mode&amount=10")
    let data = await res.json()
    console.log(data.jokes)
    await db.dropDatabase()
    await Joke.insertMany(data.jokes)
    db.close()
}

seedData()