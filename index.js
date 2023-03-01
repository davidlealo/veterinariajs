const {registrar, leer} = require('./operaciones')

const argumentos = process.argv.slice(2)

const operacion = argumentos[0]
const nombre = argumentos[1]
const edad = argumentos[2]
const tipo = argumentos[3]
const color = argumentos[4]
const enfermedad = argumentos[5]

if(operacion === "registrar"){
    registrar(nombre, edad, tipo, color, enfermedad)
    }
    if(operacion === "leer"){
    leer()
    }