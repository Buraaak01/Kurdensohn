import { Client, GatewayIntentBits, Message, Partials } from "discord.js";
import express, { Express, Request, Response, Application } from "express";
import "dotenv/config";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Ping");
});
app.listen(3000, () => console.log('YOOO I am ready dawg'));

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
client.login(process.env.TOKEN);

// ------------------------------ EVENT LISTENER -----------------------------

client.on("ready", () => {
  console.log("Kurdensohn ist ready");
});

let images = [
  "images/Ceto/Ceto-1.jpeg",
  "images/Ceto/Ceto-2.jpeg",
  "images/Ceto/Ceto-3.jpeg",
  "images/Ceto/Ceto-4.jpeg",
  "images/Ceto/Ceto-5.jpeg",
  "images/Ceto/Ceto-6.jpeg",
  "images/Ceto/Ceto-7.jpeg",
  "images/Ceto/Ceto-8.jpeg",
  "images/Ceto/Ceto-9.jpeg",
  "images/Ceto/Ceto-10.jpeg",
  "images/Ceto/Ceto-11.jpeg",
  "images/Ceto/Ceto-12.jpeg",
  "images/Ceto/Ceto-13.jpeg",
];

let tarikId = "560129541465440312";
let burakId = "366280365985234944";

client.on("messageCreate", (message) => {
  if (
    ((message.member?.id === tarikId && get60To40Chance()) ||
      message.content.toLowerCase().includes("ceto")) &&
    !messageContainsGay(message)
  ) {
    message.reply({
      files: [
        {
          attachment: images[Math.floor(Math.random() * images.length)],
        },
      ],
    });
  }
  if (messageContainsGay(message)) {
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

function get60To40Chance(): boolean {
  return Math.random() < 0.6;
}

function messageContainsGay(message: Message<boolean>): boolean {
  return message.content.toLowerCase().includes("gay");
}
