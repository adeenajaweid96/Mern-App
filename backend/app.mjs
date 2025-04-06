import express from "express"
// import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import connectToDb from "./db/db.js";

const app = express()

app.use(express.json());

connectToDb();


app.use('/api/auth',userRoutes);

app.listen(5000, () => {
  console.log(`Example app listening on port 5000`)
})