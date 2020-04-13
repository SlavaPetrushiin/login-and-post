import React, {Component} from 'react';
import Input from "../../component/ui/Input/Input";
import cls from "./Login.module.css";
import Button from "../../component/ui/Button/Button";
import {connect} from "react-redux";
import {RootState} from "../../store/store";
import {authError, autoLogout,  updateSession} from "../../store/auth/auth";
import {Dispatch} from "redux";
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
    username: string
    password: number
    session: false
    error: boolean
    errorMessage: string
}

interface IMapDispatchToProps {
    updateSession: (session: boolean) => void
    authError: () => void
    autoLogout: (time: number) => void
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
        if(
            this.state.formControls.name.value === this.props.username
            && Number(this.state.formControls.password.value) === this.props.password
        ){
            const timeSession = 3600;
            const expirationData = new Date(new Date().getTime() + timeSession * 1000).toString();
            localStorage.setItem('session', expirationData);
            this.props.autoLogout(timeSession);
            this.props.updateSession(!this.props.session);
        } else {
            this.props.authError();
        }
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
        if(this.props.session) return <Redirect to={'/profile'} />

        return (
            <div className={cls.auth}>
                <form onSubmit={this.handleSubmit} className={cls.authForm}>
                    {this.renderInputs()}
                    {this.props.error && <span className={cls.error}>{this.props.errorMessage}</span>}
                    <Button text={'Войти'} onClick={this.handleClickAuth}/>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState)  => {
  return {
      password: state.auth.password,
      username: state.auth.username,
      session: state.auth.session,
      error: state.auth.error,
      errorMessage: state.auth.errorMessage
  }
};

export default connect(mapStateToProps, {updateSession, authError, autoLogout})(Login);