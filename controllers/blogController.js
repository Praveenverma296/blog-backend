const db = require('../config/db');

exports.createBlog = (req, res) => {
  const { title, content } = req.body;
  const userId = req.user.id;

  db.query(
    "INSERT INTO blogs (title, content, user_id) VALUES (?, ?, ?)",
    [title, content, userId],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json("Blog Created");
    }
  );
};

exports.getBlogs = (req, res) => {
  db.query("SELECT * FROM blogs", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

exports.getSingleBlog = (req, res) => {
  db.query("SELECT * FROM blogs WHERE id = ?", [req.params.id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

exports.deleteBlog = (req, res) => {
  db.query("DELETE FROM blogs WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json("Blog Deleted");
  });
};