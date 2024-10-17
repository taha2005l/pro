const db = require("../models/db");

// Function to get all comments for a post
exports.getComments = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query("SELECT * FROM comments WHERE post_id = $1", [id]);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).send("Error fetching comments");
  }
};

// Function to add a new comment to a post
exports.createComment = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  try {
    await db.query("INSERT INTO comments (post_id, content) VALUES ($1, $2)", [id, content]);
    res.status(201).send("Comment created");
  } catch (error) {
    res.status(500).send("Error creating comment");
  }
};
