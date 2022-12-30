import React from "react";
import  Button from "react-bootstrap/Button";

const UpdateForm =({updateData,changeTask,cancelUpdate,updateTask})=>{
    return ( <>
        <div className="row">
          <div className="col">
            <input
              value={updateData && updateData.title}
              onChange={(e) => changeTask(e)}
              className="form-control form-control-lg"></input>
          </div>
          <div className="col-auto">
            <Button
              onClick={updateTask}
              className="btn btn-lg btn-success mr-20">Update</Button>
            <Button
              onClick={cancelUpdate}
              variant="warning">Cancel</Button>
          </div>
        </div>
      </>
    )
}
export default UpdateForm;