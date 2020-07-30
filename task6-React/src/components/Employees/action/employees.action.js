export const GET_EMPLOYEES_SUCCESS = 'GET_EMPLOYEES_SUCCESS';
export const GET_EMPLOYEES_FAILURE = 'GET_EMPLOYEES_FAILURE';

export const ADD_EMPLOYEES_SUCCESS = 'ADD_EMPLOYEES_SUCCESS';

export const DELETE_EMPLOYEES_SUCCESS = 'DELETE_EMPLOYEES_SUCCESS';



export const employeesSuccess = (employees) => {
    return {
        type: GET_EMPLOYEES_SUCCESS,
        payload: employees
    }
};

export const employeesFailure = (err) => {
    return {
        type: GET_EMPLOYEES_SUCCESS,
        payload: err
    }
};

export const addEmployeesSuccess = (name) => {
    return {
        type: ADD_EMPLOYEES_SUCCESS,
        payload: name
    }
};

export const deleteEmployeesSuccess = (item) => {
    return {
        type: DELETE_EMPLOYEES_SUCCESS,
        payload: item
    }
};

