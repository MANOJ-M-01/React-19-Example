interface Props {
  id: number;
  title: string;
  completed: boolean;
  onStatusChange: (id: number) => void;
  onDelete: (id: number) => void;
}

const List = ({ id, title, completed, onStatusChange, onDelete }: Props) => {
  console.log("List Component Rendered");

  return (
    <div className="list-item">
      <button onClick={() => onDelete(id)}>❌</button>
      <button onClick={() => onStatusChange(id)}>✍️</button>
      <h2
        onClick={() => onStatusChange(id)}
        className={
          completed ? "list-status-completed" : "list-status-not-completed"
        }
      >
        {title}
      </h2>
    </div>
  );
};

export default List;
