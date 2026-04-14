const db = require('../config/db');

exports.addComment = (req, res) => {
  const { comment, blog_id } = req.body;
  const userId = req.user.id;

  db.query(
    "INSERT INTO comments (comment, user_id, blog_id) VALUES (?, ?, ?)",
    [comment, userId, blog_id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json("Comment Added");
    }
  );
};

exports.getComments = (req, res) => {
  db.query(
    "SELECT * FROM comments WHERE blog_id = ?",
    [req.params.blog_id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
};