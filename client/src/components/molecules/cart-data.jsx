import palmSugar from "../../assets/palm-sugar.png"
import greenTea from "../../assets/green-tea.png"
import hanamiLatte from "../../assets/hanami-latte.png"
import cleponCoffee from "../../assets/clepon.png"


const cartData =[
    {
        id : 1,
        pict : palmSugar,
        menuTitle : 'Ice Coffee Palm Sugar',
        topping: 'Bubble Tea Gelatin, Mango',
        price: 27000
        
    },
    {
        id : 2,
        pict : greenTea,
        menuTitle : 'Ice Coffee Green Tea',
        topping: 'Green Coconut, Matcha Cantaloupe',
        price: 29000
    },
    {
        id : 3,
        pict : hanamiLatte,
        menuTitle : 'Hanami Latte',
        topping: 'Kiwi Popping Pearl, Bobba Mango',
        price: 23000
    },
    {
        id : 4,
        pict : cleponCoffee,
        menuTitle : 'Clepon Coffee',
        topping: 'Bill Berry Bobba, Strawberry Popping',
        price: 32000
    }
]

export default cartData;