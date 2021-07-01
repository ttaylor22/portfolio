import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']

export const Button = ({ children, type, onClick, buttonStyle, buttonSize, pathTo }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <a href={pathTo} className='btn-mobile' download="Mr. Taylor's Resume.pdf">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick} type={type}>
                {children}
            </button>
        </a>
    )

}