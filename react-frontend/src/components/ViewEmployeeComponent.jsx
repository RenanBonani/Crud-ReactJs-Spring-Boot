import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Detalhes Funcionario</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Funcionarios Nome: </label>
                            <div> { this.state.employee.name }</div>
                        </div>
                        <div className = "row">
                            <label> Funcionario Cpf: </label>
                            <div> { this.state.employee.cpf }</div>
                        </div>
                        <div className = "row">
                            <label> Funcionario Nascimento : </label>
                            <div> { this.state.employee.birthday }</div>
                        </div>
                        <div className = "row">
                            <label> Funcionario Email: </label>
                            <div> { this.state.employee.email }</div>
                        </div>
                        <div className = "row">
                            <label> Funcionario Contato: </label>
                            <div> { this.state.employee.phone }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent