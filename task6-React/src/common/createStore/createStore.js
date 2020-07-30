import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import employeesReducer from "../../components/Employees/reducer/employees.reducer";

const reducer = combineReducers({
    employeesState: employeesReducer,
});

export default function configureStore (preloadedState) {
    const store = createStore(
        reducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunk))
    );

    return store;
}