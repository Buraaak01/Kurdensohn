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
    Partials.Message, // We want to receive uncached messages!
  ],
});

// ------------------------------ EVENT LISTENER -----------------------------
client.login(process.env.DISCORD_TOKEN);
client.on("ready", () => {
  console.log("Kurdensohn ist ready");
});

let images = [
  "images/Ceto-1.jpeg",
  "images/Ceto-2.jpeg",
  "images/Ceto-3.jpeg",
  "images/Ceto-4.jpeg",
  "images/Ceto-5.jpeg",
];

let tarikId = "560129541465440312"
let burakId = "366280365985234944"

client.on("messageCreate", (message) => {
  if (message.member?.id === tarikId) {
    if (getFiftyFifty()) {
      message.reply({
        files: [
          {
            attachment: images[Math.floor(Math.random() * images.length)],
          },
        ],
      });
    }
  }
  if (message.content.toLowerCase().includes("gay")) {
    message.reply({
      files: [
        {
          attachment: "images/tarik-gut.webp",
        },
      ],
    });
  }
  if (message.member?.roles.cache.find((role) => role.name === "bestie")) {
    message.react("♥");
  }
});


function getFiftyFifty(): boolean {
  return Math.random() < 0.5
}