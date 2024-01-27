const express = require('express');
const hydraRouter = express.Router();
const { requireUser, requireAdmin } = require("./utils");

const { getAllHydraAgents, 
    createHydraAgent } 
    = require('../db/hydra');

hydraRouter.get("/", async (req, res, next) => {
  try{
    const octopus = await getAllHydraAgents();
    res.send(octopus);
  }catch (error) {
    throw error;  
  }  
  })



  module.exports = hydraRouter;