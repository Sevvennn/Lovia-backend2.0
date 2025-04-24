const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const pool = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");
const errorHandling = require("./middlewares/errorHandler.js");

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
// 例如： app.use('/api/users', require('./routes/userRoutes'));
app.use("/api", userRoutes);
// Error handling middleware
app.use(errorHandling);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Testing POSTGRES Connection
app.get("/", async (req, res) => {
  const result = await pool.query("SELECT current_database()");
  res.send(`The database name is : ${result.rows[0].current_database}`);
});

// Server running
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
