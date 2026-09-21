const express = require("express");
const app = express();
app.use(express.json()); // permet de lire req.body en JSON
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
// POST /produits -> ajoute un produit envoye dans le corps de la requete
app.post("/articles", (req, res) => {
  if (!req.body.nom) {                          // donnee obligatoire manquante
    return res.status(400).json({ erreur: "Le nom est obligatoire" });
  }
  const nouveau = {
    id: articles.length + 1,
    nom: req.body.nom,
    categorie: req.body.categorie
  };
  articles.push(nouveau);                       // on ajoute au tableau
  res.status(201).json(nouveau);                // 201 = cree
});