const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from the "public" folder
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Express server is running at http://localhost:3000`);
});
