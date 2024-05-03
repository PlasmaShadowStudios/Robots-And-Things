var express = require("express");
var router = express.Router();

/* GET updates. */
router.get("/updates", async function (req, res, next) {
  const url = "https://discord.com/api/v8/channels/736250834534400110/messages";
  const headers = {
    Authorization: `${process.env.TOKEN}`,
  };
  const response = await fetch(url, { headers })
    .then(async (res) => {
      return await res.json();
    })
    .catch((e) => {
      console.warn(e);
    });

  res.status(200).json(response);
});

module.exports = router;
