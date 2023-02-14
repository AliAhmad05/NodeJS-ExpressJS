exports.getPosts = (req, res) => {
  //res.send('Hello world from Node JS routes folder')
  res.json({
      posts: [
          { title: 'First post' },
          { title: 'Second Post' }
      ],
  })
}

//module.exports = { getPosts }
