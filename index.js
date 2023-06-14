const express = require("express");
const app = express();
const port = 5000;

//recipes data
const recipes = require("./data/recipe.json");

//chef data
const chefs = require("./data/chef.json");

const cors = require("cors");

const corsConfig = {
  origin: "*",
  Credentials: true,
  methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
};
app.use(cors(corsConfig));

//recipes route
app.get("/", (req, res) => {
  res.send(recipes);
});
app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.get("/recipe/:id", (req, res) => {
  const id = req.params.id;
  const recipeId =
    recipes?.recipes.find((recipe) => recipe.recipe_id == id) || {};
  res.send(recipeId);
});

//chef route
app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const chefId = chefs?.chefs.find((chef) => chef.id == id) || {};
  res.send(chefId);
});

app.get("/recipes/chef/:id", (req, res) => {
  const id = req.params.id;
  const chefAllRecipes =
    recipes?.recipes.filter((recipe) => recipe.chef_id == id) || {};
  console.log(chefAllRecipes, "inside server");
  res.send(chefAllRecipes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
