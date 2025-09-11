const app = require("./src/app.js")
const PORT = 30000

app.listen(PORT, ()=>{
    console.log("Está tudo certo aqui na porta " + PORT)
})