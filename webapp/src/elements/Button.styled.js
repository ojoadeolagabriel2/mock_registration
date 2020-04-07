import styled from 'styled-components'

const ButtonStyled = styled.div`
    user-select: none;
    transition: background 120ms ease-in 0s;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    height: 36px;
    border-radius: 3px;
    color: rgb(235, 87, 87);
    font-size: 14px;
    line-height: 1;
    padding-left: 12px;
    padding-right: 12px;
    font-weight: 500;
    background: rgba(235, 87, 87, 0.06);
    box-shadow: rgba(15, 15, 15, 0.1) 0px 1px 2px, rgba(235, 87, 87, 0.3) 0px 0px 0px 1px inset;
    margin-top: 6px;
    margin-bottom: 12px;
    width: 100%;
    cursor: pointer;
    &:hover {
        background-color: #fef6f3
    }
`;


export default ButtonStyled