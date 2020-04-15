import React, {Component} from 'react';
import cls from "./Profile.module.css";
import {RootState} from "../../store/store";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

interface IMapStateToProps {
    token: string | null
}

class Profile extends Component<IMapStateToProps> {
    render() {
        if(!this.props.token) return <Redirect to={'/login'}/>

        return (
            <div className={cls.profile}>
                Ясность нашей позиции очевидна: существующая теория предоставляет широкие возможности для направлений
                прогрессивного развития.
                Сделанные на базе интернет-аналитики выводы указаны как претенденты на роль ключевых факторов!
                Следует отметить, что консультация с широким активом играет важную роль в формировании благоприятных перспектив.
                Приятно, граждане, наблюдать, как базовые сценарии поведения пользователей неоднозначны и будут превращены
                в посмешище, хотя само их существование приносит несомненную пользу обществу.
                Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта:
                повышение уровня гражданского сознания прекрасно подходит для реализации глубокомысленных рассуждений.
                Но граница обучения кадров говорит о возможностях благоприятных перспектив.
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        token: state.auth.token
    }
};

export default connect(mapStateToProps)(Profile);