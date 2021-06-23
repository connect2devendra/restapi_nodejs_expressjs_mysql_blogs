const dbconn = require("../db/conn");

const getUsers = (req, res) => {

    // Use the connection
    dbconn.query('SELECT * FROM users', (err, rows, fields) => {
        if(err) throw err;
        // console.log('The data from users table are: \n', rows);
        res.json({
            'users': rows,
            'message': "User List"
        });
        dbconn.end();
  });
}

const getUser = (req, res) => {

    const id = req.params.id;

    // Use the connection
    dbconn.query('SELECT * FROM users where id=?',[id], (err, row, fields) => {
        if(err) throw err;
        // console.log('The data from users table are: \n', row);
        res.json({
            'user': row,
            'message': "User Details"
        });
        dbconn.end();
  });
}

const createUser = (req, res) => {

    const {first_name, last_name, username, password, email, mobile} = req.body;

    // Use the connection
    dbconn.query('INSERT INTO users(first_name, last_name, username, password, email, mobile) VALUES (?,?,?,?,?,?)',[first_name, last_name, username, password, email, mobile], (err, row) => {
        if(err) throw err;
        // console.log('The data from users table are: \n', row);
        res.json({
            'user': row,
            'message': "User Details"
        });
        dbconn.end();
  });
}

const updateUser = (req, res) => {

    const id = req.params.id;

    const {first_name, last_name, username, password, email, mobile} = req.body;

    // Use the connection
    dbconn.query('UPDATE users SET first_name=?, last_name=?, username=?, password=?, email=?, mobile=? where id=?', [first_name, last_name, username, password, email, mobile, id], (err, row) => {
        if(err) throw err;
        // console.log('The data from users table are: \n', row);
        res.json({
            'user': row,
            'message': "User updated successfully"
        });
        dbconn.end();
  });
}

const deleteUser = (req, res) => {

    const id = req.params.id;

    // Use the connection
    dbconn.query('DELETE FROM users where id=?', [id], (err, row) => {
        if(err) throw err;
        // console.log('The data from users table are: \n', row);
        res.json({
            'user': row,
            'message': "User deleted successfully"
        });
        dbconn.end();
  });
}

module.exports = {getUsers, getUser, createUser, updateUser, deleteUser};