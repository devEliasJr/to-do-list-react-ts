//CSS
import "./TaskList.sass";

//Interfaces
import { ITask } from "../interfaces/Task";

interface Props {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask): void;
}

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className="task">
            <div className="details">
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className="actions">
              <i
                className="bi bi-pencil"
                onClick={() => {
                  handleEdit(task);
                }}
              ></i>
              <i
                className="bi bi-trash"
                onClick={() => {
                  handleDelete(task.id);
                }}
              ></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não tem Tarefas</p>
      )}
    </>
  );
};

export default TaskList;
