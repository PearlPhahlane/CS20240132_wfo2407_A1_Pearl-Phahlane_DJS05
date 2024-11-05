//Initial state object
const initialState = {
    count : 0
};

//store object
const store = (() => {
    //private variables for state and subscribers
    let state = initialState;
    const subscribers = [];


    //function to get the current state
    function getState(){
        return state;
    };

    //function to dispatch actions to modify state
    function dispatch(action) {
    //Switch statements to handle action types(add and subtract)
        switch(action.type) {
            case 'ADD':
                state ={ count: state.count + 1};
                break;
            case 'SUBTRACT':
                state = { count: state.count -1 };
                break;
            case 'RESET':
                state = initialState;
                break;
            default:
                return state;
        }
    }

    //function to add subscriber callbacks 
    function subscribe(callback) {
        subscribers();
    }

    return {
        getState,
        dispatch,
        subscribe,
    };
    
})();