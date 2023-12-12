const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.post('/addUser', (req, res) => {
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Pavithra2611',
  database: 'userdb',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.use(bodyParser.json());

// Endpoint to handle the form submission
app.post('/addUser', (req, res) => {
  const { id, username, password, type } = req.body;

  const sql = 'INSERT INTO usertable (id, name, password, type) VALUES (?, ?, ?, ?)';
  const values = [id, username, password, type];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      res.status(500).send('Error inserting user');
    } else {
      console.log('User inserted successfully');
      res.status(200).send('User inserted successfully');
    }
  });
});

  // Add route for updating a user
  app.put('/updateUser/:id', (req, res) => {
    const userId = req.params.id;
    const { username, password, type } = req.body;
  
    const sql = 'UPDATE usertable SET name=?, password=?, type=? WHERE id=?';
    const values = [username, password, type, userId];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error updating user:', err);
        res.status(500).send('Error updating user');
      } else {
        console.log('User updated successfully');
        res.status(200).send('User updated successfully');
      }
    });
  });
  
  app.delete('/deleteUser/:id', (req, res) => {
    const userId = req.params.id;
  
    const sql = 'DELETE FROM usertable WHERE id = ?';
    const values = [userId];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error deleting user:', err);
        res.status(500).send('Error deleting user');
      } else {
        console.log('User deleted successfully');
        res.status(200).send('User deleted successfully');
      }
    });
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
