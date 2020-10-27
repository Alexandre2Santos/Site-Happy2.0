const Database = require('./db');
const db = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {


//inserir dados na tabela
await saveOrphanage(db, {
        
        lat: "-9.6210271",
        lng: "-35.7068828",
        name: "Lar de meninos",
        about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp:"999998999",
        images: 
        ["https://www.des1gnon.com/wp-content/uploads/2020/03/Pexels-Banco-de-Imagens-gratis-Des1gnON.jpg"
    ].toString(),

    instructions: "venha aqui testar o site",
    opening_hours:"bug e mais bugs",
    opening_on_weekends: "1"

    
    })
    
//consultar dados na tabela
const selectedOrphanage = await db.all("SELECT * FROM orphanage")
console.log(selectedOrphanage)

 //selecionando apenas 1 orfanato
 const orphanages = await db.all('SELECT * FROM orphanages WHERE id = "2"')
 console.log(orphanages)
})
