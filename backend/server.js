
import express from 'express'
import connectDb from './Config/connectDb.js';
import routes from "./Routes/routes.js";
import cors from 'cors'
import bodyParser from 'body-parser';
const app = express();
connectDb()

const port = 8080;


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1", routes);

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
