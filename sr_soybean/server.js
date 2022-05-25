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

let custos = models.custos;
let usuario = models.Usuario;
let cultivo = models.cultivo
let fazenda = models.fazenda;
let talhao = models.Talhao;
let produtividade = models.prodestimada;
let registro = models.registro;
let amostra = models.amostras;
let colheita = models.colheita;

app.post('/login', async (req,res)=> {
    let response=await usuario.findOne({
        where:{nome:req.body.name, senha:req.body.password}
    });
    if (response===null){
      console.log(response)
        res.send(JSON.stringify('error'));
    }
    else{
      console.log(response)
        res.send(response)
    }
});

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


//Criar produtividade
app.post("/createProdutividade", async (req, res) => {
  await produtividade
    .create({
      pesoMilGraos: req.body.pesoMilGraos,
      qtdeDezM: req.body.qtdPlantas10m,
      distanciaLinhas: req.body.distanciaLinhas,
      createdAt: new Date(),
      updateAt: new Date(),
    })
    .then(console.log)
    .catch(function (e) {
      console.log(e);
    });
});


//Criar Cultivo
app.post("/createCultivo", async (req, res) => {
  await cultivo
    .create({
     temp_fenologico: req.body.fenologico,
     tipoCultivo: req.body.tipoCultivo,
      createdAt: new Date(),
      updateAt: new Date(),
    })
    .then(console.log)
    .catch(function (e) {
      console.log(e);
    });
});


//Criar Colheita
app.post("/createColheita", async (req, res) => {
  await colheita
    .create({
    sementesColhidas: req.body.sementeColhidas,
    prodReal: req.body.ProdReal,
    perdas:req.body.perdas,
      createdAt: new Date(),
      updateAt: new Date(),
    })
    .then(console.log)
    .catch(function (e) {
      console.log(e);
    });
});



//Criar Amostra
app.post("/createAmostras", async (req, res) => {
  await amostra
    .create({
    pragas: req.body.pragas,
    doencas: req.body.doencas,
    falhaPlantio: req.body.falhaPlantio,
    anotacoes: req.body.anotacoes,
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
      ccri: req.body.ccir,
      createdAt: new Date(),
      updateAt: new Date(),
    })
    .then(console.log)
    .catch(function (e) {
      console.log(e);
    });
});

//Criar custos
app.post("/createCusto", async (req, res) => {
  await custos
    .create({
      maoObra: req.body.maoObra,
      maquinas: req.body.maquinas,
      insumos: req.body.insumos,
      valorSementes: req.body.valorSementes,
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

//Ler Custo
app.get('/readCustos', async(req,res)=>{
  let readCustos = await custos.findAll({
      raw:true
  })
  .then((custos) => {
    return res.json({
      custos: custos,
      count: custos.count,
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

// Delete Custos
app.delete("/deleteCustos", async(req, res)=>{
  custos.destroy({
      where:{
        id: req.body.idCustos,
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