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
  if(message.member.roles.cache.find((role) => role.id === "1166879584457855067")) {
      await message.reply("Du Hurensohn");
    }
  
  if(message.member.roles.cache.find((role) => role.id === "1166883388490268682")){
    await message.reply(
        "CAUTION⚠️! THIS PERSON IS UNDERAGE. DO NOT, I REPEAT, DO NOT SEND THEM UR PICTURES"
    );
  }
  if(message.member.roles.cache.find((role) => role.name === "bestie")){
  await message.react("♥");
  }

});


client.login(process.env.TOKEN);
