const { createServer } = require("http");

const app = require("./src/app");
const { APP_CONFIG } = require("./src/config");
const { connectDB } = require("./src/utils/db.util");

const port = APP_CONFIG.PORT;
const server = createServer(app);

connectDB().then(() => {
  server.listen(port, () => console.log(`Server is up and running at ${port}`));
});
