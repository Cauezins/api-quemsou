const { Deta } = require('deta');
const deta = Deta("b0x5Zhqf4asJ_q7hLTJqdeJjY6kBsR3J9N47NvFMG3jEf");
const db = deta.Base("quemsou_db");

function isValidUser(nome) {
    return db.fetch({ "nome": nome})
      .then(result => [result.items.length, result.items[0]])
      .catch(() => false);
}

async function login(nome, res) {
    const valid = await isValidUser(nome);
    
    if (valid[0] == 1) {
      res.json({
        'status': 'success',
        'user': valid[1].nome,
        'curso': valid[1].curso,
        'bio': valid[1].bio,
        'soft': valid[1].soft,
        'hard': valid[1].hard,
        'trabalhos': valid[1].trabalhos,
        'linkedin': valid[1].linkedin,
        'img': valid[1].img,
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
    login
}