import express from "express"
import { services } from "../data/beautyServices.js";

const router = express.Router();

router.get("/", (request, response) => {

    response.json(services);
  });

  export default router