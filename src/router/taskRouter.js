import express from "express";
import { createTask, deleteTaskById, readTasks, switchTask } from "../model/TaskModel.js";

const router = express.Router();

// router.all("/", (req, res) =>{
//     //this router task all methods
//     console.log("first");
// });


router.get("/", async (req, res) =>{
    //this router task all methods
    // console.log("first");

    const taskList = await readTasks();

    res.json({
        status: 'success',
        message: ' from get method',
        taskList,
    });
});

router.post("/", async (req, res) =>{
    //this router task all methods
  try{
    const result = await createTask(req.body);
    result?._id 
    ?res.json({
        status: "success",
        message: "New task has been added successfully",
      })
    : res.json({
        status: "success",
        message: "unable to add the data",
      });
} catch (error) {
  console.log(error);
}
});

router.patch("/", async (req, res) => {
    //this router task all methods
    try{
    // console.log("req.body");
    const { _id, type} = req.body

    //update data in array
    // loop through the array and find matching _id and update the type


    const result = await switchTaskc(_id, type);

    result?._id
    ? res.json({
        status: "success",
        message: "The task has been switched successfully",
    })
    : res.json({
        status: "error",
        message: "The task did not switched",
        });
        } catch (error) {
            console.log(error);

    res.json({
        status: 'error',
        message: ' the task did not switched',
    });
 }
});

router.delete("/:_id?", async (req, res) =>{
    try{
const {_id} = req.params;
const result = await deleteTaskById(_id);

console.log(result);
result?._id
    ?res.json({
        status: 'sucess',
        message: 'The task has been deleted successfully'
    })
    :res.json({
        status: 'error',
        message: 'The task did not deleted'
        });

    } catch (error) {
        console.log(error);

        res.json({
      status: "error",
      message: "error deleting the task",
        });
    }

});

// router.delete("/", (req, res) =>{
//     //this router task all methods
//     console.log("sdgsdfsdf");
// });


export default router;