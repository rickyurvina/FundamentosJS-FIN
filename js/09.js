// Operaciones en los arreglos
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// Añadir elementos al array
// tecnologias.push('GraphQL') // Añade al final del array
// tecnologias.unshift('GraphQL2') // Añade al inicio del array

// // const nuevoArreglo = [...tecnologias, 'GraphQL', 'VueJs']
const nuevoArreglo = ['GraphQL3', ...tecnologias]

// // Eliminar elementos del array
// tecnologias.pop() // Elimina del final
// tecnologias.shift() // Elimina del inicio
// tecnologias.splice(2, 3) // Elimina de una posición en especifica

// const nuevoArray = tecnologias.filter( function(tech) {
//     console.log(tech)
// })

// Reemplazar del array
// tecnologias[0] = 'GraphQL'

const nuevoArray = tecnologias.map( function(tech) {
    if(tech === 'HTML') {
        return 'GraphQL'
    } else {
        return tech
    }
})

console.table(tecnologias)
console.table(nuevoArreglo)