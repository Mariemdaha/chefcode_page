const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;

// Serve static files (images, CSS, JS, etc.) from root directory
// This MUST be before any route handlers
app.use(express.static(__dirname));

// Serve HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/features.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'features.html'));
});

app.get('/contact.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

// Catch-all for client-side routing (only for paths without file extensions)
app.get('*', (req, res) => {
  // If the request has a file extension, it should have been handled by static middleware
  // Only serve index.html for routes without extensions (SPA routing)
  if (!path.extname(req.path)) {
    res.sendFile(path.join(__dirname, 'index.html'));
  } else {
    // If we reach here, the file wasn't found by static middleware
    res.status(404).send('File not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});






