const db = require('./client')
//     
const shieldAgents = []



const createShieldAgent = async({ name = 'Agent Name', role, status,image_path }) => {
  try {
      const { rows: [agent] } = await db.query(`
      INSERT INTO shieldAgents(name, role, status, image_path)
      VALUES($1, $2, $3, $4)
      ON CONFLICT (name) DO NOTHING
      RETURNING *`, [name, role, status, image_path]);

      return agent;
  } catch (err) {
      throw err;
  }
}

const getShieldAgents = async () => {
  try {
    const { rows: agent } = await db.query(`SELECT * FROM shieldAgents`);
    if(!agent) {
      return
    }
    return agent;
  } catch (err) {
    throw err;
  }
}

    module.exports = {
        createShieldAgent,
        getShieldAgents
    };
    