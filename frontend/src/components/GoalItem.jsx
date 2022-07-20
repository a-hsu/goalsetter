import { useDispatch } from "react-redux"
import { deleteGoal } from "../features/goals/goalSlice"

function GoalItem({ goal }) {
    const dispatch = useDispatch()
    return (
        <div className="goal">
            <div>{new Date(goal.createdAt).toLocaleDateString("en-US")}</div>
            <h2>{goal.text}</h2>
            {/* <button className="update">Update Goal</button> */}
            <button
                onClick={() => dispatch(deleteGoal(goal._id))}
                className="close"
            >
                Delete Goal
            </button>
        </div>
    )
}
export default GoalItem
