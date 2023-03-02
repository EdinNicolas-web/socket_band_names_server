const { io } = require("../index");

//Socket messages
io.on("connection", (client) => {
  console.log("Client connected");

  client.on("disconnect", () => {
    console.log("Client Disconnected");
  });

  client.on("message", (payload) => {
    console.log("Message!!!", payload);
  });

  io.emit("message", { admin: "New messaje" });
});
