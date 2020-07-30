import EmployeesPage from "./EmployeesPage.component";
import {connect} from "react-redux";
import {addEmployees, deleteEmployees, getEmployees} from "./thunk/employess.thunk";

const mapStateToProps = (state) => {
    return {
    employees: state.employeesState.employees,
    }
};

export default connect(mapStateToProps, {getEmployees, addEmployees, deleteEmployees})(EmployeesPage);