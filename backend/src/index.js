const express = require("express");
const Discord = require("discord.js");
const { MongoClient } = require("mongodb");
const path = require("path");
const Levels = require("discord-xp");
const cors = require("cors");
require("dotenv/config");
const port = process.env.PORT;
const token = process.env.TOKEN;
const dburi = process.env.DBURI;
const db_name = process.env.DB_NAME;

let app = express();
app.use(cors());
const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS],
});

Levels.setURL(dburi);

const db_client = new MongoClient(dburi);

const get_commands = async () => {
  await db_client.connect();
  const db = db_client.db(db_name);
  const collection = db.collection("clients");

  const commands_found = await collection
    .find({ client_id: client.user.id })
    .toArray();

  return commands_found;
};

/* 
HTTP response status codes

200: OK
204: No Content
401: Unauthorized
403: Forbidden
404: Not Found
500: Internal Server Error
502: Bad Gateway

*/

client.on("ready", () => {
  console.log("Ready!");
});

app.get("/api/commands/", async (req, res) => {
  const client_array = await get_commands()
    .catch(console.error)
    .finally(() => db_client.close());
  res.send({ status: 200, commands: client_array[0].commands });
});

app.get("/api/users/", (req, res) => {
  let users = 0;
  client.guilds.cache.forEach((g) => {
    users += g.memberCount;
  });
  res.send({ status: 200, size: users });
  return;
});

app.get("/api/guild/:id/", (req, res) => {
  const guildID = req.params.id;
  const guildInfo = client.guilds.cache.get(guildID);
  const returnInfo = {
    status: 200,
    results: [guildInfo],
  };
  res.send(returnInfo);
  return;
});

app.get("/api/guilds/", (req, res) => {
  const guilds = client.guilds.cache.size;
  res.send({ status: 200, size: guilds });
  return;
});

app.get("/api/lb/:id", async (req, res) => {
  const guildID = req.params.id;
  const rawLeaderboard = await Levels.fetchLeaderboard(guildID, 50);
  if (rawLeaderboard.length < 1) {
    res.send({ status: 204, message: "No content." });
  } else {
    const leaderboard = await Levels.computeLeaderboard(
      client,
      rawLeaderboard,
      true
    );

    const returnInfo = {
      status: 200,
      results: [leaderboard],
    };
    res.send(returnInfo);
  }
});

client.login(token);

app.use(express.static(path.join(__dirname, "../../frontend/build")));
app.use(
  express.static(path.join(__dirname, "../../frontend/public/robots.txt"))
);
app.get("/robots.txt", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/public/robots.txt"));
});
app.get(/.*/, (req, res) =>
  res.sendFile(path.join(path.join(__dirname, "../../frontend/build")))
);

app.listen(port);
