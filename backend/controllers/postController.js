const db = require("../models/db");

// Function to get all posts
exports.getPosts = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM posts");
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).send("Error fetching posts");
  }
};

// Function to get a single post by ID
exports.getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query("SELECT * FROM posts WHERE id = $1", [id]);
    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]);
    } else {
      res.status(404).send("Post not found");
    }
  } catch (error) {
    res.status(500).send("Error fetching post");
  }
};

// Function to create a new post
exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    await db.query("INSERT INTO posts (title, content) VALUES ($1, $2)", [title, content]);
    res.status(201).send("Post created");
  } catch (error) {
    res.status(500).send("Error creating post");
  }
};
