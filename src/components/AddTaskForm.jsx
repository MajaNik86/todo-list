import React from "react";
import  Button  from "react-bootstrap/Button";

const AddTaskForm =({newTask,setNewTask,addTask})=>{
    return (
        <>
        {/* add task */}
        <div className="row">
          <div className="col">
            <input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="form-control form-control-lg" />
          </div>
          <div className="col-auto">
            <Button 
              onClick={addTask}
               size="sm" type="button"
              variant="success">
              Add Task
            </Button>
          </div>
        </div>
      </>
    )
}
export default AddTaskForm;