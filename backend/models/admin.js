const db = require('../util/database');

module.exports = class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }


  static fetchAllUsers() {
    return db.execute('SELECT * FROM users');
  }

  static fetchOneUser(id) {
    return db.execute('SELECT * FROM users WHERE id = ?', [id])
  }


  static delete(id) {
    return db.execute('DELETE FROM users WHERE id = ?', [id]);
  }

  static update(id, user){
    return db.execute('UPDATE users SET name = ?,email = ? WHERE id = ? ' , 
    [ user.name, user.email, id ]
    );
  }





};