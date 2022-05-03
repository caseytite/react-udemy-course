import useHttp from "../../hooks/useHttp";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import { REACT_APP_FIREBASE_DATABASE_URL as DB } from "../../env";
const NewTask = (props) => {
  const { isLoading, error, sendReq } = useHttp();

  const createTask = (taskText, tasksData) => {
    const generatedId = tasksData.name;
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    sendReq(
      {
        url: DB,
        method: "POST",
        body: { text: taskText },
        headers: {
          "Content-Type": "application/json",
        },
      },
      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
