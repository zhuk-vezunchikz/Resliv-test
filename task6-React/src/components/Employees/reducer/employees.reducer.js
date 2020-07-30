import {
    ADD_EMPLOYEES_SUCCESS,
    DELETE_EMPLOYEES_SUCCESS,
    GET_EMPLOYEES_FAILURE,
    GET_EMPLOYEES_SUCCESS
} from "../action/employees.action";

const initialState = {
    employees: [],
    err: null
};

const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EMPLOYEES_SUCCESS:
            return {
                ...state,
                employees: action.payload,
            };

        case GET_EMPLOYEES_FAILURE:
            return {
                ...state,
                err: action.payload,
            };
        case ADD_EMPLOYEES_SUCCESS:
            const newArr = state.employees.slice();
            newArr.push(action.payload);
            return {
                ...state,
                employees: newArr,
            };

            case DELETE_EMPLOYEES_SUCCESS:
            const newArray = state.employees.filter(function(item) {
                return item !== action.payload;
            });
            return {
                ...state,
                employees: newArray,
            };

        default:
            return state;
    }
};

export default employeesReducer;