import "dotenv/config";
import app from "./src/app";
import mongoose from "mongoose";

const PORT = process.env.PORT || 3001;

const { DB_USER, DB_PASSWORD, DB_SERVER, DB_NAME } = process.env;

mongoose
  .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_SERVER}/${DB_NAME}?retryWrites=true&w=majority`)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀  Server ready at ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("F en el chat: Error in the connection");
    console.error(error);
  });
