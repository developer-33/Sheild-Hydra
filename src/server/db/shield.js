const db = require('./client')
//     
function createShieldAgent(agent) {
    // Validate the agent object
    if (!agent.name || !agent.role || !agent.status) {
      throw new Error('Invalid agent object');
    }
  
    
    // Add the agent to the shieldAgents array
    shieldAgents.push(agent);
  }

    function getShieldAgents() {
        return shieldAgents;
    }

    module.exports = {
        createShieldAgent,
        getShieldAgents
    };
    