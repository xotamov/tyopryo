let products = [
    {
        name: "yogurt",
        type: "milk",
        price: 8000
    },
    {
        name: "apple",
        type: "fruit",
        price: 10000
    },
    {
        name: "vodka",
        type: "alcohol",
        price: 74000
    },
    {
        name: "tvorog",
        type: "milk",
        price: 12000
    },
    {
        name: "smetana",
        type: "milk",
        price: 10000
    },
    {
        name: "banana",
        type: "fruit",
        price: 28000
    },
    {
        name: "juice",
        type: "fruit",
        price: 15000
    },
    {
        name: "konyak",
        type: "alcohol",
        price: 100000
    }
]


let categories = [
    {
        type: "milk",
        count: 0,
        arr: []
    },
    {
        type: "fruit",
        count: 0,
        arr: []
    },
    {
        type: "alcohol",
        count: 0,
        arr: []
    }
]
let total = products.reduce((a,b) => a+b.price, 0)
let discount = prompt('1-100%')

for(let product of products){
    for(let category of categories){
        if(product.type === category.type){
            category.count++
            category.arr.push(product.name)
            let all = product.price -(discount * product.price / 100)
            console.log(
                `
                name:${product.type}
                price${product.price}
                sale:${all} - ${discount}%
                `
            );
        }
    }
}


// product.total = 0
// for(let product of products){
//     for(let category of categories){
//         if(products.type === categories.type){
//         products.push(total)
//         }
//     }
// }
// console.log(total);

// for(let product of products){
//      product.price
//     for(let category of categories){
//      if (product.type === category.type) {
//         category.total +=   
//         category.arr.push()
//     }
// }
// }
// console.log(categories);

