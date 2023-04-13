import mongoose from "mongoose";
import chalk from "chalk";

const MONGODDB_URI =
process.env.PROD_MONGODB || "mongodb://127.0.0.1:27017/jokes-api"

// this is for model.findByIdAndUpdate method, specifically so that {new: true} is the default
mongoose.set("returnOriginal", false);

mongoose
.connect(MONGODDB_URI)
.catch((error) =>
console.log("error conneting to MongoDB:", error.message)
);

mongoose.connection.on("disconnected", () =>
console.log(chalk.bold("Disconnected from MongoDB!"))
);

mongoose.connection.on("error", (error) =>
console.log(chalk.red(`MongoDB connection error: ${error}`))
);

export default mongoose.connection;

