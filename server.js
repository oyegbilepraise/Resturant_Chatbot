const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors({
    origin: '*'
}))
app.use(express.json());
app.use(express.urlencoded({extended: true}))

let array = []

let arr = `Hello Welcome to K Resturant` + "<br>" + "<br>" + 'Kindly select the number to place your order' + "<br>" + "<br>" +
'1. Rice varieties' + "<br>" + '2. Swallow varieties' + "<br>" + '3. Pasta and chicken' + "<br>" + '4. Yam $ Egg' + "<br>" + '5. More...';

botReplies = [
    [],

    ['R1. White Rice, Beans and Chicken' + '<br>' + 'R2. Fried Rice, Jollof and Chicken' + '<br>' + 'R3. Ofada, Plaintain and Chicken' + '<br>' + 'R4. Chips and Chicken' + '<br>' + 'R5. input my request'],

    ['S1. Iyan and Soup + Varieties' + '<br>' + 'S2. Eba and Soup + Varieties' + '<br>' + 'S3. Fufu and Soup + Varieties' + '<br>' + '<br>' + 'S4. Eba and Ogbono Soup' + 'S5. input my request'],

    ['Pasta and Chicken Selected...' + '<br>' + 'P1. Pasta & Chicken Big Size' + '<br>' + 'P2. Pasta & Chicken Medium Size' +'P3. Pasta and Chicken Small size'],

    ['Yam and Egg Ordered, Kindly enter Continue to process your order or cancel to go back'],

    ['6. Ekuru and Ponmo...' + '<br>'  + '7. Indomie and egg' + '<br>' + '8. Shawarma' + '<br>' + '9. Sweet Porridge']
]

app.get('/welcome', (req, res) => {
    res.status(200).json(arr)
})

app.post('/chat', (req, res) => {
    let request  = req.body.req;
        for (let index = 0; index < botReplies.length; index++) {
            if(index == Number(request)){
                let text = botReplies[index]
                array.push(request)
                res.status(200).json(text)
            }
        }

        if(request.toLowerCase() == 'r1'){
            let response = `You Selected White Rice, Beans and Chicken, Enter Continue to complete the Order or Cancel go to back`
            res.status(200).json(response)
        }
        if(request.toLowerCase() == 'r2'){
            let response = `You Selected Fried Rice, Jollof and Chicken, Enter Continue to complete the Order or Cancel go to back`
            res.status(200).json(response)
        }
        if(request.toLowerCase() == 'r3'){
            let response = `You Selected White Ofada, plaintain and Chicken, Enter Continue to complete the Order or Cancel go to back`
            res.status(200).json(response)
        }
        if(request.toLowerCase() == 'r4'){
            let response = `You Selected White Chips and Chicken, Enter Continue to complete the Order or Cancel go to back`
            res.status(200).json(response)
        }
        if(request.toLowerCase() == 's1'){
            let response = 'You selected Iyan, Soup and varieties, Enter Continue to complete the Order or Cancel go to back'
            res.status(200).json(response)
        }
        if(request.toLowerCase() == 's2'){
            let response = 'You selected Eba, Soup and varieties, Enter Continue to complete the Order or Cancel go to back'
            res.status(200).json(response)
        }
        if(request.toLowerCase() == 's3'){
            let response = 'You selected Fufu, Soup and varieties, Enter Continue to complete the Order or Cancel go to back'
            res.status(200).json(response)
        }
        if(request.toLowerCase() == 's4'){
            let response = 'You selected Eba and Ogbono Soup, Enter Continue to complete the Order or Cancel go to back'
            res.status(200).json(response)
        }
        if(request.toLowerCase() == 'p1'){
            let response = 'You selected Pasta & Chicken Big Size, Enter Continue to complete the Order or Cancel go to back'
            res.status(200).json(response)
        }
        if(request.toLowerCase() == 'p2'){
            let response = 'You selected Pasta & Medium Big Size, Enter Continue to complete the Order or Cancel go to back'
            res.status(200).json(response)
        }
        if(request.toLowerCase() == 'p3'){
            let response = 'You selected Pasta & Chicken Small Size, Enter Continue to complete the Order or Cancel go to back'
            res.status(200).json(response)
        }
        if(request.toLowerCase() == 'continue'){
            res.status(200).json('Order SUccesfully Placed. Thanks for Patronising')
        }

        if(request.toLowerCase() == 'back'){
            res.status(200).json('back')
        }
        if(request.toLowerCase() == '6'){
            let response = 'You selected Ekuru & Ponmon, Enter Continue to complete the Order or Cancel go to back'
            res.status(200).json(response)
        }
        if(request.toLowerCase() == '7'){
            let response = 'You selected Indomie & Egg, Enter Continue to complete the Order or Cancel go to back'
            res.status(200).json(response)
        }
        if(request.toLowerCase() == '8'){
            let response = 'You selected Shawarma, Enter Continue to complete the Order or Cancel go to back'
            res.status(200).json(response)
        }
        if(request.toLowerCase() == '9'){
            let response = 'You selected Sweet Porridge, Enter Continue to complete the Order or Cancel go to back'
            res.status(200).json(response)
        }
})

app.listen(3300, () => {
    console.log('App connected success');
})