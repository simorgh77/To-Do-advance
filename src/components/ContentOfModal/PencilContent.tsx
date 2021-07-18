import React, { ChangeEvent } from "react";
import { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import DataPicker from "react-datepicker";
interface ITask {
  TaskName: string;
  Priority: string;
  Status: string;
  Deadline: Date;
  TaskDetail: string;
  id: Date;
}
interface ITable {
  AddTask: ITask[];
  setAddTask: Function;
  EditId: Date | undefined;
  setEditId: Function;
  TemporaryTaskName: string;
  setTemporaryTaskName: Function;
  TemporaryPriority: string;
  setTemporaryPriority: Function;
  TemporaryStatus: string;
  setTemporaryStatus: Function;
  TemporaryDeadline: Date;
  setTemporaryDeadline: Function;
  TemporaryTaskDetail: string;
  setTemporaryTaskDetail: Function;
  setEditShow:Function
}

const Content: React.FC<ITable> = ({
  AddTask,
  setAddTask,
  EditId,
  setEditId,
  TemporaryTaskName,
  setTemporaryTaskName,
  TemporaryPriority,
  setTemporaryPriority,
  TemporaryStatus,
  setTemporaryStatus,
  TemporaryDeadline,
  setTemporaryDeadline,
  TemporaryTaskDetail,
  setTemporaryTaskDetail,
  setEditShow
}) => {

  const  NewTask=(e:React.FormEvent)=> {
    e.preventDefault()
    AddTask.map((item)=>{

      if(item.id==EditId){
       item.TaskName= TemporaryTaskName
       item.Priority= TemporaryPriority
       item.Status= TemporaryStatus
       item.Deadline= TemporaryDeadline
       item.TaskDetail= TemporaryTaskDetail
      }
    })
    setAddTask([...AddTask])
    setEditShow(false)
    }
  
  return (
    <div>
      {AddTask.map(
        (item) =>
          item.id == EditId && (
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="form">
                  <Form.Label></Form.Label>
                </Form.Group>
                <Form.Control
                  type="text"
                  defaultValue={item.TaskName}
                  onChange={(e) => setTemporaryTaskName(e.target.value)}
                />

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>Priority</Form.Label>
                      <Form.Control
                        as="select"
                        defaultValue={item.Priority}
                        onChange={(e) => setTemporaryPriority(e.target.value)}
                      >
                        <option value="high">high</option>
                        <option value="medium">medium</option>
                        <option value="low">low</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Status</Form.Label>
                      <Form.Control
                        as="select"
                        defaultValue={item.Status}
                        onChange={(e) => setTemporaryStatus(e.target.value)}
                      >
                        <option value="To do" selected>
                          To do
                        </option>
                        <option value="Doing" selected>
                          Doing
                        </option>
                        <option value="Done" selected>
                          Done
                        </option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      Deadline
                      <DataPicker
                      className='date_picker'
                        selected={TemporaryDeadline}
                        onChange={(date) => setTemporaryDeadline(date) }
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      defaultValue={item.TaskDetail}
                      onChange={(e) => setTemporaryTaskDetail(e.target.value)}
                    />
                  </Form.Group>
                </Form.Group>
              </Form.Row>
              <Button
                variant="primary"
                type="submit"
                className="w-100"
                onClick={NewTask}
              >
                تایید
              </Button>
            </Form>
          )
      )}
    </div>
  );
};

export default Content;
