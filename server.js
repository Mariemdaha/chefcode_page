const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;

// Serve static files from the current directory (images, CSS, JS, etc.)
app.use(express.static(path.join(__dirname), {
  // Don't serve index.html for static file requests
  index: false
}));

// Serve HTML files
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

// Handle all other routes by serving index.html (for client-side routing)
app.get('*', (req, res) => {
  // Only serve index.html if it's not a file request (no extension)
  if (!path.extname(req.path)) {
    res.sendFile(path.join(__dirname, 'index.html'));
  } else {
    res.status(404).send('File not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



