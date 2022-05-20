import React from 'react'
import styled from 'styled-components'
import arrow from "../img/arrow.svg"

const SecondaryButtonStyled = styled.button`
     border-radius: 6px;
    background: #222;
    white-space: nowrap;
    padding: 12px 30px;
    color: #fff;
    font-size: 19px;
    border:none;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        padding-left: .9rem;
    }
`

function SecondaryButton({name}) {
  return (
    <SecondaryButtonStyled>
        {name}
        <img src={arrow} alt="" />
    </SecondaryButtonStyled>
  )
}

export default SecondaryButton