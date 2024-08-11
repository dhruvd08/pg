import express from "express";
import path from "path";
import fs from "fs";

const port = process.port || 3000;

const app = express();
app.use(express.static(path.join(process.cwd() + "/public/")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const msgFilePath = path.join(process.cwd() + "/msg2.json");

app.get("/", (req, res) => {
  const msg = JSON.parse(fs.readFileSync(msgFilePath)).message;
  res.render("index.ejs", { greeting: msg });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
