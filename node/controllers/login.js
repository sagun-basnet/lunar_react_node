import { db } from "../db.js";
export const login = (req, res) => {
  const { email, password } = req.body;

  const sql = "select * from crud";

  db.query(sql, (err, result) => {
    if (err) return res.send(err);

    const compare = result.find(
      (value) => value.email === email && value.password === password
    );

    compare
      ? res.send({ Message: "Login sucessful." })
      : res.send({ Message: "Invalid email or password." });
  });
};
