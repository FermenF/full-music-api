const express = require('express');
const Scraper = require('@yimura/scraper').default;

const app = express();
const port = 3000;

app.get('/getListOfVideos', async (req, res)  => {
  try {
    const { song, artist } = req.query;
    const youtube = new Scraper();

    await youtube.search(`${ song } ${ artist }`).then(results => {
      res.send(results.videos);
    });
  } catch (error) {
    res.send(error);
  }
});


app.get('/download-video', async (req, res) => {

});

app.listen(port, () => {
  console.log(`Server On Listen ${port}`);
});
