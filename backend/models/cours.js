const db = require('../util/database');

module.exports = class Cour {
  constructor(title, body, user) {
    this.title = title;
    this.body = body;
    this.user = user;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM cours');
  }

  static fetchOne(id) {
    return db.execute('SELECT * FROM cours WHERE id = ?', [id])
    
  }

  static save(cour) {
    return db.execute(
      'INSERT INTO cours (title, body, user) VALUES (?, ?, ?)',
      [cour.title, cour.body, cour.user]
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM cours WHERE id = ?', [id]);
  }

  static update(id, cour){
    return db.execute('UPDATE cours SET title = ?,body = ? WHERE id = ? ' , 
    [ cour.title, cour.body, id ]
    );
  }

};
