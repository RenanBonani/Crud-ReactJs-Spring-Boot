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

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Detalhes Funcionario</h3>
                    <div className = "card-body ">
                        <div className = "row ">
                            <label> Funcionarios Nome: </label> 
                            <div className = "viewspace"> { this.state.employee.name }</div>
                        </div>
                        <div className = "row">
                            <label> Funcionario Cpf: </label>
                            <div className = "viewspace"> { this.state.employee.cpf }</div>
                        </div>
                        <div className = "row">
                            <label> Funcionario Nascimento : </label>
                            <div className = "viewspace"> { this.state.employee.birthday }</div>
                        </div>
                        <div className = "row">
                            <label> Funcionario Email: </label>
                            <div className = "viewspace"> { this.state.employee.email }</div>
                        </div>
                        <div className = "row">
                            <label> Funcionario Contato: </label>
                            <div className = "viewspace"> { this.state.employee.phone }</div>
                        </div>                        
                    </div>
                    <button className="btn btn-primary" onClick={this.cancel.bind(this)} >Voltar</button>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent