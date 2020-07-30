import React from "react";

class EmployeesPage extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            employees: this.props.employees,
        };
    }

    componentDidMount() {
        this.props.getEmployees();
    }

    deleteEmployees =(item) => {
        this.props.deleteEmployees(item);
    }

    addNewEmployees = (value) => {
        this.props.addEmployees(value);
    };

    getEmployeesNames(fullName) {

        const list = fullName.map((item) => {
            return (
                <div key={item}>
                    <div>
                        {item}
                    </div>
                    <button onClick={() => this.deleteEmployees(item)}>
                        Удалить
                    </button>
                </div>
            )
        })

        return list;
    };


    render() {



        return (
            <>
                <div>
                    {this.getEmployeesNames(this.props.employees)}
                </div>
                <form>
                    <button type="button" onClick={() => {
                        const valueName = document.getElementById("inputName");
                        this.addNewEmployees(valueName.value);
                    }}>Добавить сотрудника</button>
                    <input id="inputName"/>
                </form>

            </>
        )
    }
}

export default EmployeesPage;