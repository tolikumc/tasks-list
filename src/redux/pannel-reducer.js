const ADD_PANEL = 'ADD_PANEL';
const ADD_CARD = 'ADD_CARD';
const REORDER_CARD = 'REORDER_CARD';
const DELETE_PANEL = 'DELETE_PANEL';

const initialState = {
  panel: [
    {
      title: 'plan for the month',
      cards: ['Learn React.js', 'Cancel appointment', 'Find designer']
    },
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
        panel: [...state.panel, { title: action.payload, cards: [] }]
      };
    case DELETE_PANEL:
      return {
        ...state,
        panel: state.panel.filter((_, idx) => action.payload !== idx)
      };
    case ADD_CARD:
      return {
        ...state,
        panel: state.panel.map((item, index) => {
          if (action.payload.panelIdx === index) {
            return {
              ...item,
              cards: [...item.cards, action.payload.text]
            };
          }
          return item;
        })
      };
    case REORDER_CARD:
      //TODO need think about better decision and fix bug
      return {
        ...state,
        panel: state.panel.map((item, idx) => {
          if (action.payload.panelIdx === idx) {
            const [removed] = item.cards.splice(action.payload.sourceIndex, 1);
            item.cards.splice(action.payload.destinationIndex, 0, removed);
            return item;
          }
          return item;
        })
      };
    default:
      return state;
  }
};
export default panelReducer;

export const addPanelAC = name => ({
  type: ADD_PANEL,
  payload: name
});

export const addCardAC = (panelIdx, text) => ({
  type: ADD_CARD,
  payload: { panelIdx, text }
});

export const deletePanelAC = panelIdx => ({
  type: DELETE_PANEL,
  payload: panelIdx
});

export const reorderCardAC = ({ panelIdx, sourceIndex, destinationIndex }) => ({
  type: REORDER_CARD,
  payload: { panelIdx, sourceIndex, destinationIndex }
});
