import { Client, GatewayIntentBits, Partials } from "discord.js";
import "dotenv/config";
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
  partials: [
    Partials.User, // We want to receive uncached users!
    Partials.Message // We want to receive uncached messages!
  ]
});

// ------------------------------ EVENT LISTENER -----------------------------

client.on("ready", () => {
  console.log("Kurdensohn ist ready");
});

client.on("messageCreate", async (message) => {
  isHurensohn(message) && message.reply("Du Hurensohn");
  isUnderage(message) &&
    message.reply(
      "CAUTION⚠️! THIS PERSON IS UNDERAGE. DO NOT, I REPEAT, DO NOT SEND THEM UR PICTURES"
    );
  isBestie(message) && message.react("♥");
});

// ------------------------------ UTIL -----------------------------
function isHurensohn(message) {
  return message.member.roles.cache.find(
    (role) => role.name === "Opfer von Kurdensohn"
  )
    ? true
    : false;
}

function isUnderage(message) {
  return message.member.roles.cache.find(
    (role) => role.id === "1166883388490268682"
  )
    ? true
    : false;
}

function isBestie(message) {
  return message.member.roles.cache.find((role) => role.name === "bestie")
    ? true
    : false;
}

client.login(process.env.TOKEN);
