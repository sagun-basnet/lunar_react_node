import sql from "mysql2";

export const db = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "lunarcrud",
});

//testing database connection...
// db.connect((err) => {
//   if (err) return console.log(err);
//   else console.log("Connected");
// });
