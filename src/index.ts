import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const app: Express = express();
dotenv.config();

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    console.log(`Listening on port ${port}`);
    res.send("Hello World!");
});

app.listen(port);
