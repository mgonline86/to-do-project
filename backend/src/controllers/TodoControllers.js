import todoDB from "../database/db.js";

export default class Todo {
  static createTodo = async (req, res) => {
    // get user Id
    let { userId } = req.params;
    const { title, desc } = req.body;
    try {
      if (title && desc && userId) {
        await todoDB.create({ title, desc, userId });
        res.status(201).json("post created successfully");
      } else {
        res.status(400).json("please fill all required data ");
      }
    } catch (error) {
      res.status(400).json("something went wrong");
    }
  };

  // update todo
  static updateTodo = async (req, res) => {
    let { userId, todoId } = req.params;
    const { title, desc } = req.body;
    try {
      // check that todo is available
      const singleTodo = await todoDB.findOne({ _id: todoId });
      if (singleTodo.userId != userId) {
        res.status(400).json("we can not update this post");
      } else {
          
          if (!title || !desc || !userId) {
              res.status(400).json("please fill all required data ");
            }
            await todoDB.findOneAndUpdate({ _id: todoId }, { title, desc, userId });
            res.status(201).json("post updated successfully");
        }
    } catch (error) {
      res.status(400).json("something went wrong");
    }
  };

  static deleteTodo = async (req, res) => {
    let { userId, todoId } = req.params;
    try {
      // check that todo is available
      const singleTodo = await todoDB.findOne({ _id: todoId });
      if (singleTodo["userId"] != userId) {
        res.status(400).json("we can not delete this post");
      } else {
          
          await todoDB.findByIdAndDelete({ _id: todoId });
          res.status(201).json("post deleted successfully");
        }
        } catch (error) {
      res.status(400).json("something went wrong");
    }
  };

  static getSingleTodo = async (req, res) => {
    let { userId, todoId } = req.params;
    try {
      const singleTodo = await todoDB.findOne({ _id: todoId, userId });
      res.status(200).json(singleTodo);
    } catch (error) {
      res.status(400).json("something went wrong");
    }
  };

  static getAllTodo = async (req, res) => {
    let { userId } = req.params;
    try {
      const allTodo = await todoDB
        .find({ userId: userId })
        .sort({ createdAt: 1 });
      res.status(200).json(allTodo);
    } catch (error) {
      res.status(400).json("something went wrong");
    }
  };
}
