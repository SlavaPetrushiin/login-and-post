import React from "react";
import cls from "./Button.module.css";

interface IProps {
    text: string
    onClick: () => void
}

const Button = (props: IProps) => {
    const classes = [
        cls.button
    ];


    return (
        <div>
            <button
                className={cls.button}
                onClick={props.onClick}
            >
                <span>
                    {props.text}
                </span>
            </button>
        </div>
    )
};

export default Button;