const reducer = (state, action) => {
    switch (action.type) {
        case 'input': return {
            task: action.content,
            tasks: state.tasks
        }
        case 'add': return {
            task: state.task,
            tasks: [...state.tasks, action.content]
        }
        case 'remove':
            state.tasks.splice(action.index, 1);
            return {
                task: state.task,
                tasks: [...state.tasks]
            }
        default: throw new Error('Invalid Action');
    }
}

export default reducer;