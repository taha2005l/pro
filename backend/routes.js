const express = require("express");
const router = express.Router();
const postController = require("./controllers/postController"); // Assuming this file exists
const commentController = require("./controllers/commentController"); // Assuming this file exists

// Route for getting all posts
router.get("/", postController.getPosts);

// Route for getting a single post by ID
router.get("/:id", postController.getPostById);

// Route for creating a new post
router.post("/", postController.createPost);

// Route for getting comments for a specific post
router.get("/:id/comments", commentController.getComments);

// Route for adding a new comment to a post
router.post("/:id/comments", commentController.createComment);

module.exports = router;
