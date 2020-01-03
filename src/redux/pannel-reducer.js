const ADD_PANEL = 'ADD_PANEL';
const ADD_CARD = 'ADD_CARD';

const initialState = {
  panel: [
    {
      title: 'plan for the month',
      cards: ['Learn React.js', 'Cancel appointment', 'Find designer']
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
        ...state,
        panel: state.panel.map((item, index) => {
          if (action.payload.idx === index) {
            return {
              ...item,
              cards: [...item.cards, action.payload.text]
            };
          }
          return item;
        })
      };
    default:
      return state;
  }
};
export default panelReducer;
