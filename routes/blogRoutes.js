const express = require('express');
const router = express.Router();
const {
  createBlog,
  getBlogs,
  getSingleBlog,
  deleteBlog
} = require('../controllers/blogController');

const { verifyToken } = require('../middleware/authMiddleware');

router.post('/', verifyToken, createBlog);
router.get('/', getBlogs);
router.get('/:id', getSingleBlog);
router.delete('/:id', verifyToken, deleteBlog);

module.exports = router;