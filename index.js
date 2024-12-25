// const express = require('express');
// const cors = require('cors');
// const app = express();
// app.use(express.json());

// app.use(cors());  // Cấu hình này sẽ cho phép tất cả các nguồn truy cập vào API

// const userRoute = require('./routes/userRoute');
// const loginRoute = require('./routes/loginRoute');

// // Sử dụng route
// app.use('/api', userRoute);
// app.use('/api', loginRoute);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
const express = require("express");
const { createServer } = require("@vercel/node");
const loginRoute = require("./routes/loginRoute");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api", loginRoute);

// Export serverless function
module.exports = createServer(app);
