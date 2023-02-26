const express = require('express');

const app=express();

app.set('view engine','ejs')
app.use(express.static('public'))


let catgeries= [

                {title:"All"},
                {title:"Music"},
                {title:"Comdey"},
                {title:"Romatic"},
                {title:"Action"},
                {title:"Drama"},
                {title:"Horer"},
                {title:"News"},
                {title:"Reality Show"},
                {title:"Sports"},
                {title:"Bollywood"}
]


let videos=[

    {images:'./images/3.jpg',title:'titele',channel:'channel name'},
    {images:'./images/5.jpg',title:'Movei',channel:'Mru'},
    {images:'./images/3.jpg',title:'Googoel',channel:'snani'},
    {images:'./images/4.jpg',title:'Magahraja',channel:'Mru'},
    {images:'./images/5.jpg',title:'Movei',channel:'Mru'},
    {images:'./images/8.jpg',title:'Movei',channel:'Mru'},
    {images:'./images/6.jpg',title:'Movei',channel:'Mru'},
    {images:'./images/hq720.jpg',title:'Movei',channel:'Mru'},
    {images:'./images/hq721.jpg',title:'Movei',channel:'Mru'}
]
app.get('/',(req,res)=>{
    res.render('home',{catgeries,videos})
})

app.listen(3001,()=>{

    console.log('server is running');
})
