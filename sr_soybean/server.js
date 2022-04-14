const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const models = require("./models");
const { response } = require("express");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

let usuario = models.Usuario;
let fazenda = models.Fazenda;
let talhao = models.Talhao;

app.post("/talhao", (req, res) => {
  console.log(req.body);
});

//Criar
app.post("/createTalhao", async (req, res) => {
  await talhao
    .create({
      nomeCampo: req.body.nome,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      areaPlantada: req.body.areaTalhao,
      createdAt: new Date(),
      updateAt: new Date(),
    })
    .then(console.log)
    .catch(function (e) {
      console.log(e);
    });
});

// //Ler
// app.get('/read', async(req,res)=>{
//     let read = await usuario.findAll({
//         raw:true
//     })

//     console.log(read)
// })

// //Edit
// app.get('/update', async(req, res)=>{
//     let update = await usuario.findByPk(1).then((response)=>{
//         response.nome = 'teste1Edit';
//         response.senha = 'senhaTeste1Edit';
//         response.save();
//     })
// })

// //Delete
// app.get("/delete", async(req, res)=>{
//     usuario.destroy({
//         where:{
//             id:1
//         }
//     })
// })

//Update

app.post("/update", async (req, res) => {
  let response = await tracking.findOne({
    where: {}, //passar os parametros
    include: [{ all: true }],
  });

  res.send(JSON.stringify("Os dados foram atualizados com sucesso! :D"));
});

app.listen(port, (req, res) => {
  console.log("SERVIDOR RODANDO");
});
