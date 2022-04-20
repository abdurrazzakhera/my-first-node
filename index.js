const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Node js World");
});

const users = [
  { id: 1, name: "hira", email: "hira@gmail.com", phone: "01633760202" },
  { id: 2, name: "razzak", email: "razzak@yehoo.com", phone: "01732576600" },
  { id: 3, name: "kona", email: "kona@gmail.com", phone: "01888144917" },
  { id: 4, name: "Abdur", email: "abdur@yeahoo.com", phone: "01768317405" },
  { id: 5, name: "Joshim", email: "joshim@hotmail.com", phone: "01688724990" },
  { id: 6, name: "Samin", email: "samin@gmail.com", phone: "01780263470" },
  { id: 7, name: "Siful", email: "siful@yahoo.com", phone: "01782301057" },
  { id: 8, name: "sazzat", email: "sazzat@hotmail.com", phone: "01833760202" },
];

app.get("/users", (req, res) => {
  console.log("query", req.query);
  if (req.query.name) {
    const search = req.query.name;
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.post("/user", (req, res) => {
  console.log("body", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log("listenig Port", port);
});
