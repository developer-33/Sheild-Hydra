const db = require('./client');
const { createUser } = require('./users');
const { createShieldAgent } = require('./shield');
const { createHydraAgent } = require('./hydra');

const users = [
  {
    name: 'Emily Johnson',
    email: 'emily@example.com',
    password: 'securepass',
  },
  {
    name: 'Liu Wei',
    email: 'liu@example.com',
    password: 'strongpass',
  },
  {
    name: 'Isabella García',
    email: 'bella@example.com',
    password: 'pass1234',
  },
  {
    name: 'Mohammed Ahmed',
    email: 'mohammed@example.com',
    password: 'mysecretpassword',
  },
  {
    name: 'John Smith',
    email: 'john@example.com',
    password: 'password123',
  },
  // Add more user objects as needed
];  
const shieldAgents = [
  {
    name: 'Phil Coulson',
    role: 'Director',
    status: 'Active',
    Image_path:'https://imagekit.io/dashboard/media-library/detail/659f577b88c257da33052605'
  },
  {
    name: 'Melinda May',
    role: 'Field Agent',
    status: 'Active',
    Image_path: "https://imagekit.io/dashboard/media-library/detail/659f577b88c257da33052323"
  },
  {
    name: 'Daisy Johnson',
    role: 'Field Agent',
    status: 'Active',
    Image_path:'https://imagekit.io/dashboard/media-library/detail/659f577b88c257da330526f7'
  
  },
  {
    name: 'Leo Fitz',
    role: 'Scientist',
    status: 'Active',
    Image_path:'https://imagekit.io/dashboard/media-library/detail/659f577b88c257da330526f7'
  },
  {
    name: 'Jemma Simmons',
    role: 'Scientist',
    status: 'Active',
    Image_path:'https://imagekit.io/dashboard/media-library/detail/659f577b88c257da33052613'
  },
 {
    name: 'Bobbi Morse',
    role: 'Field Agent',
    status: 'Active',
    Image_path:'#'
 },
 {
    name: 'Lance Hunter',
    role: 'Field Agent',
    status: 'Active',
    Image_path:'https://imagekit.io/dashboard/media-library/detail/659f577b88c257da3305252e'
 },
  {
    name: 'Alphonso Mackenzie',
    role: 'Mechanic',
    status: 'Active',
    Image_path:'#'
  },
  // Add more agent objects as needed
];
const hydraAgents = [
  {
    name: 'Grant Ward',
    role: 'Field Agent',
    status: 'Deceased',
  },
  {
    name: 'John Garrett',
    role: 'Field Agent',
    status: 'Deceased',
  },
  {
    name: 'Daniel Whitehall',
    role: 'Scientist',
    status: 'Deceased',
  },
  {
    name: 'Sunil Bakshi',
    role: 'Field Agent',
    status: 'Deceased',
  },
  {
    name: 'Gideon Malick',
    role: 'Leader',
    status: 'Deceased',
  },
  {
    name: 'Hive',
    role: 'Parasitic Inhuman',
    status: 'Deceased',
  },
  // Add more agent objects as needed
];

const dropTables = async () => {
    try {
        await db.query(`
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS shieldAgents;
        DROP TABLE IF EXISTS hydraAgents;
        `)

    }

    catch(err) {
        throw err;
    }
}

const createTables = async () => {
    try{
        await db.query(`
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) DEFAULT 'name',
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        )`
      )
   await db.query(`
        CREATE TABLE shieldAgents(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            role VARCHAR(255) NOT NULL,
            status VARCHAR(255) NOT NULL,
            image_path VARCHAR(255) NOT NULL
        )`
      )
    await db.query(`
          CREATE TABLE hydraAgents(
              id SERIAL PRIMARY KEY,
              name VARCHAR(255) NOT NULL,
              role VARCHAR(255) NOT NULL,
              status VARCHAR(255) NOT NULL
             
             
          )`
        )
    }
    catch(err) {
        throw err;
    }
}

const insertUsers = async () => {
  try {
    for (const user of users) {
      await createUser({name: user.name, email: user.email, password: user.password});
    }
    console.log('Seed data inserted successfully.');
  } catch (error) {
    console.error('Error inserting seed data:', error);
  }
};
const insertShieldAgents = async () => {
    try {
        for (const agent of shieldAgents) {
            await createShieldAgent({
              name: agent.name,
               role: agent.role, 
               status: agent.status});
        }
        console.log('Seed data inserted successfully.');
    } catch (error) {
        console.error('Error inserting seed data:', error);
    }
};

const insertHydraAgents = async () => {
    try {
        for (const agent of hydraAgents) {
            await createHydraAgent({
              name: agent.name, 
              role: agent.role, 
              status: agent.status});
        }
        console.log('Seed data inserted successfully.');
    } catch (error) {
        console.error('Error inserting seed data:', error);
    }
};
const seedDatabse = async () => {
    try {
        db.connect();
        await dropTables();
        await createTables();
        await insertUsers();
        await insertShieldAgents();
        await insertHydraAgents();
    }
    catch (err) {
        throw err;
    }
    finally {
        db.end()
    }
}

seedDatabse()
