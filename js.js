// const v = new Vue({
//     el: "#app",
//     data: {
//         nome: 'Ricardo',
//         message: 'tooltip'
//     }
// })


// var app4 = new Vue({
//     el: '#app-4',
//     data: {
//         todos: ['Learn JavaScript', 'Learn Vue', 'Build something awesome']
//     }
// 

// const vm2 = new Vue({
//     el: "#app",
//     data: {
//         preco: 2600,
//         total: 0
//     }
    
// })


//Virtual dom (em vue - tag Vnode - objetoi javascript que simula o dom atual
//TEMPLATE - double mustache {{}} - funciona calculos e ternarios


const vm = new Vue({
    el: "#app",
    data: {
        titulo: "Lorem ipsum título",
        conteudo: "Esse é conteúdo",
        lado: 5,
        comprou: true
    }
})


//DIRETIVAS - codigos que permitem interação entre js e html (tempalte language) - v-if, v-show, v-else, models