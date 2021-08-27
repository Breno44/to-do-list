import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "../Button/index";
import "./styles.css";

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

  const handleBackPage = () => {
    history.goBack();
  };

  return (
    <>
      <div className="back-button-container" onClick={handleBackPage}>
        <Button>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          praesentium voluptates ab officiis iste quis!
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
