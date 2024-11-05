//Initial state object
const initialState = {
    count = 0
};

//store object
const store = (() => {
    //private variables for state and subscribers
    let state = initialState;
    const subscribers = [];


    //function to get the current state
    function getState(){
        return state
    };

    //function to dispatch actions to modify state
    function dispatch(action) {
    //Switch statements to handle action types(add and subtract)
        switch(action.type) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            default:
                return state;
        }
    }

    //function to ad subscriber call backs 
    function subscribe(callback) {
        subscribers();
    }

    return {
        getState,
        dispatch,
        subscribe,
    };
    
})();