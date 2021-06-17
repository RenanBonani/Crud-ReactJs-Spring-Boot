import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            cpf: '',
            birthday: '',
            email: '',
            phone: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeCpfHandler = this.changeCpfHandler.bind(this);
        this.changeBirthdayHandler = this.changeBirthdayHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({name: employee.name,
                cpf: employee.cpf,
                birthday: employee.birthday,
                email: employee.email,
                phone: employee.phone
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {name: this.state.name, cpf: this.state.cpf, birthday: this.state.birthday, email: this.state.email, phone: this.state.phone};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/employees');
        });
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeCpfHandler= (event) => {
        this.setState({cpf: event.target.value});
    }

    changeBirthdayHandler= (event) => {
        this.setState({birthday: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changePhoneHandler= (event) => {
        this.setState({phone: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Alterar Funcionario</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Nome" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Cpf: </label>
                                            <input placeholder="cpf" name="cpf" className="form-control" 
                                                value={this.state.cpf} onChange={this.changeCpfHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Nascimento: </label>
                                            <input placeholder="Nascimento" name="birthday" className="form-control" 
                                                value={this.state.birthday} onChange={this.changeBirthdayHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email " name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Contato: </label>
                                            <input placeholder="Contato" name="phone" className="form-control" 
                                                value={this.state.phone} onChange={this.changePhoneHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.updateEmployee}>Salvar</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent