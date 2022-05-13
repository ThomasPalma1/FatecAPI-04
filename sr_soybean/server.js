const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const models = require("./models");
const { response } = require("express");

require("dotenv").config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT;

let usuario = models.Usuario;
let fazenda = models.Fazenda;
let talhao = models.Talhao;

app.post("/talhao", (req, res) => {
  console.log(req.body);
});


//Ler
app.get('/Talhao', async(req,res)=>{
    let getTalhao = await talhao.findAll({
        raw:true
    })
})



//Criar talhao
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

//Criar fazenda
app.post("/createFazenda", async (req, res) => {
  await fazenda
    .create({
      nomeFazenda: req.body.nome,
      createdAt: new Date(),
      updateAt: new Date(),
    })
    .then(console.log)
    .catch(function (e) {
      console.log(e);
    });
});

//ler talhao

app.get('/readTalhaos', async(req,res)=>{
      let readTalhao = await talhao.findAll({
          raw:true
      })
			.then((talhoes) => {
				return res.json({
					talhoes: talhoes,
					count: talhoes.count,
				});
			})
			.catch((e) => {
				return res.status(400).json({ error: e.message });
			});
  })

//Ler Fazenda
  app.get('/readFazendas', async(req,res)=>{
    let readFazendas = await fazenda.findAll({
        raw:true
    })
    .then((fazendas) => {
      return res.json({
        fazendas: fazendas,
        count: fazendas.count,
      });
    })
    .catch((e) => {
      return res.status(400).json({ error: e.message });
    });
})

// Delete Talhão
app.delete("/deleteTalhao", async(req, res)=>{
    talhao.destroy({
        where:{
          id: req.body.idTalhao,
        }
    }).then(() => {
      console.log("Excluido com sucesso!")
    }).catch((error)=> {
      console.log(error)
    })
})


// Delete Fazendas
app.delete("/deleteFazenda", async(req, res)=>{
  fazenda.destroy({
      where:{
        id: req.body.idFazenda,
      }
  }).then(() => {
    console.log("Excluido com sucesso!")
  }).catch((error)=> {
    console.log(error)
  })
})



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

// app.post("/update", async (req, res) => {
//   let response = await tracking.findOne({
//     where: {}, //passar os parametros
//     include: [{ all: true }],
//   });

//   res.send(JSON.stringify("Os dados foram atualizados com sucesso! :D"));
// });





//Iniciando servidor em uma porta

app.listen(PORT, (req, res) => {
  console.log(`SERVIDOR RODANDO NA ${PORT}`);
});
