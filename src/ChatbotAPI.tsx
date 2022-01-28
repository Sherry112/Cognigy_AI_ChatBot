import { SocketClient } from "@cognigy/socket-client";
const token : string = process.env.REACT_APP_TOKEN!; 
const API = {
  GetChatbotResponse: async (message: any) => {
    return new Promise(async function (resolve, reject) {
      const client = new SocketClient(
        "https://endpoint-trial.cognigy.ai",
        token,
        {
          forceWebsockets: true,
        }
      );
      await client.connect();
      client.sendMessage(message);
      client.on("output", (output: { text: string; data: string; }) => {
        console.log("Text: " + output.text + "   Data: " + output.data);
        if (output.text != undefined) resolve(" " + output.text);
      });
    });
  },
};

export default API;
