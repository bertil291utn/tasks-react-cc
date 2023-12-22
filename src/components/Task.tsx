
interface TaskProps {
  description: string;
}
const Task: React.FC<TaskProps> = ({ description }) => {
  return <div>{description}</div>
};
export default Task;

