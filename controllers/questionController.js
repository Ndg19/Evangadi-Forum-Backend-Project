import { v4 as uuidv4 } from "uuid";
import db from "../config/dbConfig.js";
import jwt from "jsonwebtoken";

// ================== GET all questions ==================
export const getAllQuestions = async (req, res) => {
  try {
    const [questions] = await db.query(
      `SELECT q.question_id, q.title, q.description, q.tag, q.created_at, q.updated_at, 
              u.username, u.email 
       FROM questions q 
       JOIN users u ON q.user_id = u.user_id 
       ORDER BY q.created_at DESC`
    );

    res.status(200).json({ message: "All questions retrieved", questions });
  } catch (err) {
    console.error("Get All Questions Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

