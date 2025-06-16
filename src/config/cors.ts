import { CorsOptions } from "cors";

export const corsConfig: CorsOptions = {
  origin: function (origin, callback) {
    console.log(origin);
    if (origin === "http://localhost:5173") {
      console.log("Permitir Conexión");
      callback(null, true);
    } else {
      console.log("Denegar Conexión");
      callback(new Error("Error de CORS"));
    }
  },
};
