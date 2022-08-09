import GoalItem from '../GoalItem/GoalItem';
import './GoalList.css';


function GoalList({
    list,
    deleteHandler
}) {
    return (
        <ul className="goal-list">
            {list.map((item, index) => (
                <GoalItem
                    key={index}
                    id={index}
                    deleteHandler={deleteHandler}
                >
                    {item.text}
                </GoalItem>
            ))}
        </ul>
    );
}

export default GoalList;