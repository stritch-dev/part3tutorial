const express = require('express');
const app = express();

let notes = [
  {
    content: 'HTML is easy',
    important: true,
  },
  {
    content: 'Browser can execute only Javascript',
    important: false,
  },
  {
    content: 'The most important methods of HTTP are GET and POST',
    important: true,
  },
];

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
});

app.get('/api/notes', (request, response) => {
  response.json(notes);
});

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

