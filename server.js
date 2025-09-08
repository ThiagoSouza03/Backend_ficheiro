const app = require("./src/app.js")
const PORT = 3333

app.listen(PORT, ()=>{
    console.log("Está tudo certo aqui na porta " + PORT)
})