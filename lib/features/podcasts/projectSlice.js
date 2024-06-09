const { createSlice } = require("@reduxjs/toolkit");

const projectSlice = createSlice({
    name: "project",
    initialState: {
        projects: [],
        id : '',
        title:'Project Name'
    },
    reducers: {
        addProject: (state, action) => {
            state.projects.push(action.payload);
        },
        setId : (state, action) => {
            state.id = action.payload
        },
        setTitle: (state, action) => {
            state.title = action.payload
        },

    },
}); 

export const { addProject, setId, setTitle } = projectSlice.actions;

export default projectSlice.reducer;
