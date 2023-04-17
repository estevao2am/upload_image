import express from "express";
import { routes } from "./routes";
import path from "path";

const app = express();
app.use(express.json());
app.use(routes);

// Routa Render Images
app.use("/images", express.static(path.join(__dirname, "uploads")));

app.listen(3333, () => console.log("Server is running in port 3333 🚀"));
