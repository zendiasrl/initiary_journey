// server.js
const express = require('express');
const app = express();
const port = 3000;

// Define a test API route
app.get('/api/test', (req, res) => {
  const testData = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ];
  res.json(testData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});