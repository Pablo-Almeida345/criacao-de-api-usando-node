import express from "express"; 

const app = express();
const PORT = 3000;
const arrResponse =[{name: "Pablo", sobrenome:"Almeida"}, {name: "Davi", sobrenome:"Almeida"}] 

app.get("/", (req, res) => {
    res.json(arrResponse)
})

app.listen(PORT, () => {
    console.log(`O servidor esta rodando na porta ${PORT}`)
})