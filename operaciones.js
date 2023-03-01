const fs = require('fs')

const registrar = (nombre, edad, tipo, color, enfermedad) =>{
    console.log('Registro exitoso')
    const datos = {
        name: nombre,
        age: edad,
        type: tipo,
        color: color,
        sick: enfermedad
    }
    const anterior = fs.readFileSync('citas.json', 'utf8')
    const datosAnteriores = JSON.parse(anterior)
    datosAnteriores.push(datos)
    fs.writeFileSync('citas.json', JSON.stringify(datosAnteriores))

}

const leer = () =>{
    const datos = fs.readFileSync('citas.json', 'utf8')
    /*
    OPCION 1 de imprimir:
    
    JSON.parse(datos).forEach(dato => {
        console.log(dato)
    });
    
    */
    console.log(JSON.parse(datos))
}


module.exports = {registrar, leer}