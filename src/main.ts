import { SapphireClient } from "@sapphire/framework"

const client = new SapphireClient();

client.login(process.env.DISCORD_TOKEN);