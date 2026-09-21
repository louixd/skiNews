const express = require("express");
const app = express();
let articles = [
  { id: 1, nom: "Présentation des nouveaux skis Faction", categorie: "Freeride" },
  { id: 2, nom: "Découverte des skis K2", categorie: "Freestyle" },
  { id: 3, nom: "Rossignol, une révolution ?", categorie: "Freeride" }
];

// Route de test : GET /
app.get("/", (req, res) => {
  res.json(articles);
});
// GET /produits -> renvoie tout le tableau
app.get("/articles", (req, res) => {
  res.json(articles);
});
// On demarre le serveur sur le port 3000
app.listen(3000, () => {
  console.log("Server sur http://localhost:3000");
}); 
