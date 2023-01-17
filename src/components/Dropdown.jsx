import styled from 'styled-components'
import { useState } from 'react'
import { nanoid } from 'nanoid';

const DropDownContainer = styled.div`
    position: ${({ styles }) => styles.position};
    cursor: pointer;
    left: ${({ styles, mobile }) => mobile ? '0' : styles.position === 'absolute' ? '160px' : '0'};
    width: ${({ styles }) => styles.width};
    height: ${({ styles }) => styles.padding};
    div {
    display: flex;
    align-items: center;
    background-color: ${({ styles }) => styles.backgroundColor};
    color: ${({ styles }) => styles.color};
    border-radius: 5px;
    font-size: 0.875rem;
    line-height: 1.43;
    height: 100%;
    padding: ${({ styles }) => styles.padding};
    
    svg {
        margin-left: 10px;
    }
    }
    
    @media screen and (max-width: 576px) {
    div svg {
        margin-left: 5px;
    }
    }
`;

const DropDownList = styled.ul`
    background: #FFFFFF;
    box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
    border-radius: 10px;
    position: absolute;
    top: ${({ styles }) => styles.top};
    width: ${({ styles }) => styles.innerWidth};
    z-index: 1;
    font-size: 1rem;
    line-height: 1.45;
    color: #647196;

    li {
    list-style: none;
    padding: 12px 24px;
    padding-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    &:not(:last-child) {
    border-bottom: 1px solid #3A437420;
    }
    }
`;

const iconCheck = <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1" /></svg>

export default function Dropdown({ items, state, onChange, text, styles, mobile }) {
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen(!isOpen)
    }

    function handleChoice(value) {
        setIsOpen(false)
        onChange(value)
    };

    const options = items.map((option) => {
        return (
            <li onClick={() => handleChoice(option)} key={nanoid()}>
                {option?.label}
                {option?.label === state?.label ? iconCheck : ""}
            </li>
        )
    });

    return (
        <DropDownContainer mobile={mobile} styles={styles} onClick={toggle} role="button" tabIndex='0' >
            <div>
                <span>{text ? text + state?.label : state?.label}</span>
                {
                    isOpen ?
                        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#fff" strokeWidth="2" fill="none" fillRule="evenodd" /></svg>
                        :
                        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4 4-4" stroke="#fff" strokeWidth="2" fill="none" fillRule="evenodd" /></svg>
                }
            </div>
            {isOpen && (
                <DropDownList styles={styles}>
                    {options}
                </DropDownList>
            )}
        </DropDownContainer>
    );
}