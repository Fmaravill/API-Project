import Joke from "../models/joke.js";

export const getJokes = async (req, res) => {
    try {
        const joke = await Joke.find();
        res.json(joke);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message});
    }
};

export const getJoke = async (req, res) => {
    try {
        const { id } = req.params;

        const joke = await Joke.findById(id);
        res.json(joke);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message});
    }
};

export const createJoke = async (req, res) => {
    try {
        const joke = new Joke(req.body);
        await joke.save();
        res.status(201).json(joke);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message})
  }
};

export const updateJoke = async (req, res) => {
    const { id } = req.params;
    const joke = await joke.findByIdAndUpdate (id, req.body);
    res.status(200).json(joke);

};

export const deleteJoke = async (req,res) => {
     try {
        const { id } = req.params;
        const Deleted = await Joke.findByIdAndDelete(id);

        if (Deleted)  {
            return res.status(200).send("Joke Deleted!");
        }
        throw new Error("Joke not found");
     } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message})
     }
    };


