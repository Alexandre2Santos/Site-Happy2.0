const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  //inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-9.6210271",
    lng: "-35.7300828",
    name: "Lar dos meninos",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "82999999999",
    images: [
      "https://images.unsplash.com/photo-1517502547957-d2916b52c46d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",

      "https://images.unsplash.com/photo-1553323855-cc1abf1930d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
    ].toString(),
    instructions: "Sita-se a vontade e traga amor e paciência",
    opening_hours: "bug e mais bugs",
    open_on_weekends: "0",
  });
  //consultar dados da tabela.
  //const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  //console.log(selectedOrphanages)

  //consultar apenas 1 orfanato
  //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
  //console.log(orphanage)
  //deletar dados da tabela

  //console.log(await db.run("DELETE FROM orphanages"))
});
