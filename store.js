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

        //Notify all subscribers of all state changes
        subscribers.forEach(callback => callback());
    }

    //function to add subscriber callbacks 
    function subscribe(callback) {
        //add callback to subscribers
        subscribers.push(callback)
    }

    return {
        getState,
        dispatch,
        subscribe,
    };
    
})();

//Scenario testing 

function Scenario1Test() {
    console.log(store.getState());
};

function Scenario2Test() {
    store.dispatch( { type: "ADD" });
    store.dispatch( { type: "ADD" });
    store.getState();
    console.log(store.getState())
};

function Scenario3Test() {
    store.dispatch( { type: "SUBTRACT" });
    console.log(store.getState());

}

function Scenario4Test() {
    store.dispatch( { type: "RESET" });
    console.log(store.getState());
}

Scenario1Test();
Scenario2Test();
Scenario3Test();
Scenario4Test();