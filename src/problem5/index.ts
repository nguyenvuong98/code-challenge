import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import itemRoutes from "./routes/itemRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/mydb";

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

app.use(express.json());
app.use("/items", itemRoutes);

app.listen(PORT, () => {
  console.log('Problem5 started')
  console.log(`Server running at http://localhost:${PORT}`);
});
