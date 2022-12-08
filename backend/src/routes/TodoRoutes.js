import express from 'express'
import Todo from '../controllers/TodoControllers.js'
const router=express.Router()

//  create new todo for a user
router.post('/:userId',Todo.createTodo)

// update a todo for a user
router.put('/:userId/:todoId',Todo.updateTodo)


// delete a todo for a user
router.delete('/:userId/:todoId',Todo.deleteTodo)

// get a specific  todo for a user
router.get('/:userId/:todoId',Todo.getSingleTodo)

// get a specific  todo for a user
router.get('/:userId',Todo.getAllTodo)

export default router