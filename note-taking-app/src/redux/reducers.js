
const initialState = {
    notes: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_NOTE':
        return {
          ...state,
          notes: [...state.notes, action.payload],
        };
      case 'DELETE_NOTE':
        return {
          ...state,
          notes: state.notes.filter((note) => note.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  