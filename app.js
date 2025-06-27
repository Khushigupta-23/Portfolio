const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index');

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', indexRouter);

// Start server
const PORT = 3000; // Hardcoded port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});