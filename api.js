import express from "express";

const app = express();
const PORT = 3000;



app.listen(PORT, () => {
    console.log(`O servidor esta rodando na porta ${PORT}`)
})