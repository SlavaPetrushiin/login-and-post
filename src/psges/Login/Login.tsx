import React, {Component} from 'react';
import Input from "../../component/ui/Input/Input";
import cls from "./Login.module.css";
import Button from "../../component/ui/Button/Button";
import {connect} from "react-redux";
import {RootState} from "../../store/store";
import {autoLogout, login} from "../../store/auth/auth";
import { Redirect } from 'react-router-dom';

export type IInput = {
    value: string,
    type: string,
    label: string,
    placeholder: string
}

type FormControlsType = {
    name: IInput,
    password: IInput
}

type IState = {
    isFormValid: boolean,
    formControls: FormControlsType
}

interface IMapStateToProps {
    token: string | null
    error: string | null
}

interface IMapDispatchToProps {
    autoLogout: (time: number) => void
    login: (username: string, password: string) => void
}

class Login extends Component<IMapStateToProps & IMapDispatchToProps, IState> {
    state = {
        isFormValid: false,
        formControls: {
            name: {
                value: '',
                type: 'text',
                label: 'Name',
                placeholder: 'Введите имя'
            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                placeholder: 'Введите пароль'
            }
        }
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: keyof FormControlsType) => {
        const formControls = {...this.state.formControls};
        const control = {...formControls[name]};
        control.value = e.currentTarget.value;
        formControls[name] = control;

        this.setState({
            formControls
        })
    };

    handleClickAuth = () => {
        const username = this.state.formControls.name.value;
        const password = this.state.formControls.password.value;
        this.props.login(username, password);
    };

    renderInputs = () => {
        return (Object.keys(this.state.formControls) as Array<keyof FormControlsType>).map((name, index) => {
            let props = this.state.formControls[name];
            return <Input
                key={index}
                {...props}
                onChange={(e) => this.handleChange(e, name)}
            />;
        })
    };

    render() {
        if(this.props.token) return <Redirect to={'/profile'} />

        return (
            <div className={cls.auth}>
                <form onSubmit={this.handleSubmit} className={cls.authForm}>
                    {this.renderInputs()}
                    {this.props.error && <span className={cls.error}>{this.props.error}</span>}
                    <Button text={'Войти'} onClick={this.handleClickAuth}/>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState)  => {
  return {
      token: state.auth.token,
      error: state.auth.authError
  }
};

export default connect<IMapStateToProps, IMapDispatchToProps, {}, RootState>(mapStateToProps, {autoLogout, login})(Login);