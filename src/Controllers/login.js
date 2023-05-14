const { Deta } = require('deta');
const deta = Deta("b0x5Zhqf4asJ_q7hLTJqdeJjY6kBsR3J9N47NvFMG3jEf");
const db = deta.Base("quemsou_db");

function isValidUser(username, password) {
    return db.fetch({ "email": username, "senha":password })
      .then(result => [result.items.length > 0, result.items[0]])
      .catch(() => false);
}

async function login(username, password, res) {
    const valid = await isValidUser(username, password);
    if (valid[0]) {
      res.json({
        'status': 'success',
        'msg': 'Login efetuado com sucesso!',
        'user': valid[1].email,
        'key': valid[1].key
      });
    } else {
      res.json({
        'status': 'error',
        'msg': 'usuario ou senha inválido!'
      });
    }
  }

module.exports = {
    login,
    isValidUser
}