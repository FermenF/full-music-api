const express = require('express');
const Scraper = require('@yimura/scraper').default;

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("hello word");
});

app.get('/getListOfVideos', (req, res) => {
  try {
    const { song, artist } = req.query;
    const youtube = new Scraper();

    youtube.search(`${ song } ${ artist }`).then(results => {
      res.send(results.videos);
    });
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`Server Listen ${port}`);
});

