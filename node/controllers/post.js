import { db } from "../db.js";
export const post = (req, res) => {
  const { name, address, email, password } = req.body; //user input

  const sql =
    "Insert into crud(name, address, email, password) values(?,?,?,?)"; // sql query..

  //Excuteing query...
  db.query(sql, [name, address, email, password], (err, result) => {
    //checking error...
    if (err) return res.send(err);
    else return res.send({ message: result });
  });
};
