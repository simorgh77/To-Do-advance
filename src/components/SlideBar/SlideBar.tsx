import React from "react";
import { HiOutlineFilter } from "react-icons/hi";
import { Form, Col } from "react-bootstrap";
import "./Slidebar.css";
interface ITask {
  TaskName: string;
  Priority: string;
  Status: string;
  Deadline: Date;
  TaskDetail: string;
  id: Date;
}
interface ISlidebar {
  sliderState: boolean;
  setsliderState: Function;
  FilterPriority: string;
  setFilterPriority: Function;
  FilterStatus: string;
  setFilterStatus: Function;
  FilterDeadline: string;
  setFilterDeadline: Function;
  AddTask: ITask[];
  setAddTask: Function;
}
const SlideBar: React.FC<ISlidebar> = ({
  sliderState,
  setsliderState,
  AddTask,
  setAddTask,
  FilterPriority,
  setFilterPriority,
  FilterStatus,
  setFilterStatus,
  FilterDeadline,
  setFilterDeadline,
}) => {
  return (
    <>
      <div className="slidebar" data-aos="fade-left">
        <div className="d-flex justify-content-around pt-3 
        text-white border-bottom align-items-center">
          <HiOutlineFilter
            style={{
              fontSize: "2.5rem",
              padding: "8px",
              backgroundColor: "purple",
              borderRadius: "2rem",
              color: "white",
            }}
          ></HiOutlineFilter>
          <div>
            <p className="text-dark">
              My To-Do Tasks
              <p>Filters</p>
            </p>
          </div>
        </div>

        <div className="filters mt-2">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Control
              as="select"
              onClick={(e: React.FormEvent) =>
                setFilterPriority((e.target as HTMLInputElement).value)
              }
            >
              <option value="All">All</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Control
              as="select"
              onClick={(e: React.FormEvent) =>
                setFilterStatus((e.target as HTMLInputElement).value)
              }
            >
              <option value="All">All</option>
              <option value="To do">To do</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Control
              as="select"
              onClick={(e: React.FormEvent) =>
                setFilterDeadline((e.target as HTMLInputElement).value)
              }
            >
              <option value="All">All</option>
              <option value="Overdue">Overdue</option>
              <option value="For today">For today</option>
              <option value="For the future">For the future</option>
            </Form.Control>
          </Form.Group>
        </div>
      </div>
      <div className="whole_body" onClick={() => setsliderState(false)}></div>
    </>
  );
};
export default SlideBar;
