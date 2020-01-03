const ADD_PANEL = 'ADD_PANEL';
const ADD_CARD = 'ADD_CARD';

const initialState = {
  panel: [
    {
      title: 'plan for the month',
      card: [
        { text: 'Learn React.js' },
        { text: 'Cancel appointment' },
        { text: 'Find designer' }
      ]
    }
  ]
};

const panelReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PANEL:
      return {
        ...state,
        panel: action.payload
      };
    case ADD_CARD:
      return {
        ...state
      };
    default:
      return state;
  }
};
export default panelReducer;
