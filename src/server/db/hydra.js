const db = require('./client')
const hydraAgents = []
const createHydraAgent = async({ name = 'Agent Name', role, status }) => {
  try {
      const { rows: [agent] } = await db.query(`
      INSERT INTO hydraAgents(name, role, status)
      VALUES($1, $2, $3)
      ON CONFLICT (name) DO NOTHING
      RETURNING *`, [name, role, status]);

      return agent;
  } catch (err) {
      throw err;
  }
}


  const getAllHydraAgents = async () => {
    try {
      const { rows } = await db.query(
        `SELECT * FROM hydraAgents`
        );
    
      return rows;
    } catch (err) {
      throw err;
    }
  }



  module.exports = {
        createHydraAgent,
        getAllHydraAgents
};
