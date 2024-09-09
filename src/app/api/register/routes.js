const express = require ('express');
const app = express();
const port = 5000;
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
app.use(cors());
app.use(express.json());


const prisma = new PrismaClient();
app.get("/api", (req, res) => {
    res.send('test');
});

app.get("/api/registuser", async (req, res) => {
    const registuser = await prisma.user.findMany();
    res.send(registuser);
});

// from register form

app.post("/api/registuser", async (req, res) => {
    const registeruser = req.body;

    const regist = await prisma.user.create({
        data: {
            username: registeruser.username,
            email: registeruser.email,
            password: registeruser.password
        }
    });
    res.send({
        data: regist,

        status: "User register Successfully",

    });
})
app.listen(port, () => {
    console.log(`Express server running on http://localhost:${port}`);
  });