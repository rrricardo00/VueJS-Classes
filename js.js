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


// const vm = new Vue({
//     el: "#app",
//     data: {
//         titulo: "Lorem ipsum título",
//         conteudo: "Esse é conteúdo",
//         lado: 5,
//         comprou: true,
//         color: "#ffff00",
//         color2: "#ff0033",
//         href: "https://www.google.com"

//     }
// })


//DIRETIVAS => codigos que permitem interação entre js e html (tempalte language) - v-if, v-show, v-else, models
//PARA INPUT => v-model
//PARA ADD JS e add valores a atributos na tag => usar v-bind ou apenas : (dois pontos) v-bind:style="backgroundColor: red"; v-bind:href="ValorVue"

const v = new Vue({
    el: "#app",
    data: {
        verdade: false
    }
})