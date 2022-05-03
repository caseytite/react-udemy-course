import React, { useState, useEffect } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/useHttp";
import { REACT_APP_FIREBASE_DATABASE_URL as DB } from "./env";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleData = (tasksOBJ) => {
    const loadedTasks = [];
    for (const key in tasksOBJ) {
      loadedTasks.push({ key, id: key, text: tasksOBJ[key].text });
    }
    setTasks(loadedTasks);
  };

  const { isLoading, error, sendReq } = useHttp(
    { url: DB, method: "GET" },
    handleData
  );

  useEffect(() => {
    sendReq();
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={sendReq}
      />
    </React.Fragment>
  );
}

export default App;
