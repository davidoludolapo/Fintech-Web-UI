import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
    border-radius: 6px;
    background: #4343db;
    white-space: nowrap;
    padding: 12px 30px;
    color: #fff;
    font-size: 19px;
    border:none;
    cursor: pointer;
    text-decoration: none;
`

function PrimaryButton({name}) {
  return (
    <ButtonStyled>
        {name}
    </ButtonStyled>
  )
}

export default PrimaryButton