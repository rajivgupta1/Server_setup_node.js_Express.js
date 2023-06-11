//model does the queries

import TaskSchema from "./TaskSchema.js";

//  Create data indb

export const createTask = (taskObj) =>{
    return TaskSchema(taskObj).save();
};
export const readTasks = () =>{
    return TaskSchema.find();
};

//_id as an string
export const switchTask = (_id, type) => {
    return TaskSchema.findByIdAndUpdate(_id, { type });
  };

// delete data
export const deleteTaskById = (_id) =>{
    return TaskSchema.findByIdAndDelete(_id);
};