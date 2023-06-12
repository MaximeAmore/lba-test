const axios = require("axios");
const https = require("https");
const cors = require("cors");
const express = require("express");
/**
 * Format de la réponse JSON
 * [
 *   {
 *     "nom": "Nom 1",
 *   },
 *   {
 *     "nom": "Nom 2",
 *   }
 * ]
 */
(async function () {
  const app = express();

  app.use(cors())
  app.set('view engine', 'html');
  app.get("/data", async (req, res) => {
    
  const organismes = await getOrgamismesData();

  return res.json(
    organismes.map(({ nom }) => {
      return { nom }
    }),
  );
});

  app.listen(5000, () => console.log(`Server ready and listening on port ${5000}`));
})();

async function getOrgamismesData() {
  try {
    return axios.get("https://mocki.io/v1/cbbd831b-199c-4e48-b426-1ce8ddbf1aa5").then((response) => response.data);
  } catch (e) {
    console.error(e);
  }
}

// TODO: repair
const getData3 = async (callback) => {
  const res = await https.get("https://mocki.io/v1/cbbd831b-199c-4e48-b426-1ce8ddbf1aa5")
  return res.body
};
