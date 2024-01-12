const db = require('./client')

function createHydraAgent(agent) {
    // Validate the agent object
    if (!agent.name || !agent.role || !agent.status) {
      throw new Error('Invalid agent object');
    }
  
    // Add the agent to the hydraAgents array
    hydraAgents.push(agent);
  }

  module.exports = {
        createHydraAgent
};
