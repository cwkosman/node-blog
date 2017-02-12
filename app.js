const app = require('express')();

const posts = [
  {
    id: 1,
    author: 'Chuck',
    title: 'Awesome Sauce',
    body: 'Blog post 1'
  }
];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {posts: posts});
});

app.get('/post/:id', (req, res) => {
  const post = posts.filter((post) => {
    return post.id == req.params.id;
  })[0];

  res.render('post', {
    author: post.author,
    title: post.title,
    body: post.body
  });
});

app.listen(8080);

console.log('listening on port 8080');
