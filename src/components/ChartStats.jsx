import React from "react";
import styled from "styled-components";
import { BsArrowRightShort } from "react-icons/bs";

const ChartStatsStyled = styled.div`
  background-color: #f9f9f9;
  border-radius: 7px;
  max-height: 19rem;
  padding: 2rem;
  width: 260px;
  box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
  h4 {
    font-size: 1.1rem;
    color: var(--purple-primary);
    margin-bottom: 10px;
  }
  p {
    color: black;
    background-color: #e0efff;
    padding: 20px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    height: 10px;
    width: 10px;
    margin-bottom: 39px;

    line-height: 1;
    font-size: 16px;
  }

  h3 {
    color: black;
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 39px;
    line-height: 1.5;
  }

  .action {
    display: flex;
    align-items: center;

    button {
      border-radius: 6px;
      background: #333;
      white-space: nowrap;
      padding: 0.6rem 0.5rem;
      color: #fff;
      font-size: 14px;
      border: none;
      cursor: pointer;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;

      .arrow {
        padding-left: 0.9rem;
        transition: all 0.2s ease-in-out;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &:hover {
        transition: all 0.2s ease-in-out;

        .arrow {
          padding-left: 1.3rem;
          transition: all 0.2s ease-in-out;
        }
      }
    }
  }
`;

function ChartStats({ icon, amount, desc, button }) {
  return (
    <>
      <ChartStatsStyled>
        <p>
          <b>{icon}</b>
        </p>
        <h4>{amount}</h4>
        <h3>{desc}</h3>
        <div className="action">
          <button>
            {button}
            <div className="arrow">
              <BsArrowRightShort />
            </div>
          </button>
          <h3 className="action-desc"></h3>
        </div>
      </ChartStatsStyled>
    </>
  );
}

export default ChartStats;
