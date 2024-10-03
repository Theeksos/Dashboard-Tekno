const bcrypt = require('bcrypt');
const fs = require('fs');

const hashPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  
  fs.writeFileSync('hashedPassword.txt', hashedPassword);
  console.log('Hashed password written to hashedPassword.txt');
};

const passwordToHash = '123';

hashPassword(passwordToHash);
