import multer, { Options } from "multer";
import path from "path";
import { Request } from "express";

export default {
  // Configurar o local do armazenamento
  storage: multer.diskStorage({
    destination: path.join(__dirname, "..", "uploads"), // o local
    filename(req, file, callback) {
      // evitando os nomes repetitivos dos arquivos
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
  limits: {
    fileSize: 8 * 1024 * 1024, // 8 MB
  },

  fileFilter: (req, file, cb) => {
    const mimeType = ["image/png", "image/jpeg", "image/jpg"]; // Definir os tipos de arquivos
    if (!mimeType.includes(file.mimetype)) {
      return cb(null, false);
    }
    cb(null, true);
  },
} as Options;
