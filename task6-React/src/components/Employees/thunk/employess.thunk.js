import {callAPI} from "../../../common/api/callAPI";
import {
    addEmployeesSuccess,
    deleteEmployeesSuccess,
    employeesFailure,
    employeesSuccess
} from "../action/employees.action";


export const getEmployees = () => {
    return (dispatch) => {
        callAPI()
            .then((response) => {
                const arr = response.data;

                const firstNameArr = arr.map(l => l.first_name);
                const lastNameArr = arr.map(l => l.last_name);

                let fullName = [];

                for (let i = 0; i < firstNameArr.length; i++) {
                    fullName[i] = " " + firstNameArr[i] + " " + lastNameArr[i] + " ";
                }
                dispatch(employeesSuccess(fullName));
            })
            .catch((err) => {
                dispatch(employeesFailure(err));
            });
    };
};

export const addEmployees = (name) => {
    debugger
    return (dispatch) => {
        dispatch(addEmployeesSuccess(name));
    }
};

export const deleteEmployees = (item) => {
    return (dispatch) => {
        dispatch(deleteEmployeesSuccess(item));
    }
};