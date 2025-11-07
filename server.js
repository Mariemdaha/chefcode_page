const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;

// Explicitly serve the recourses folder for images
app.use('/recourses', express.static(path.join(__dirname, 'recourses')));

// Serve other static files (CSS, JS, etc.) from root
app.use(express.static(__dirname, {
  index: false, // Don't serve index.html for directory requests
  extensions: ['html', 'js', 'css'] // Only serve these extensions
}));

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

// Serve main.js explicitly
app.get('/main.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'main.js'));
});

// Catch-all for client-side routing (only for paths without file extensions)
app.get('*', (req, res) => {
  // Only serve index.html for routes without extensions (SPA routing)
  if (!path.extname(req.path)) {
    res.sendFile(path.join(__dirname, 'index.html'));
  } else {
    res.status(404).send('File not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

