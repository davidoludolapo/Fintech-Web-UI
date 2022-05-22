import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import ChartStats from "./ChartStats";
import chart from "../img/chart.svg";
import AnimatedButton from "./AnimatedButton";
import {BsShieldCheck} from "react-icons/bs"
import {BiLockAlt} from "react-icons/bi"
import {GiFlexibleStar} from "react-icons/gi"
import {FiTarget} from "react-icons/fi"
import { Bounce, Slide } from "react-reveal";

const ChartStyled = styled.section`
  .chart-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 1347px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .chart-left {
      width: 80%;
      @media screen and (max-width: 1347px) {
        width: 100%;
      }
      .stats {
        img {
          box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
          border-radius: 62px;
          width: 100%;
        }
        .stats-money {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          padding-bottom: 1.3rem;
          justify-content: space-between;
        }
      }
    }
    .chart-right {
      padding-left: 2rem;
      p {
        padding: 1.3rem 0;
      }
    }
  }
`;

function ChartSection() {
  return (
    <ChartStyled>
      <InnerLayout>
        <div className="chart-container">
          <div className="chart-left">
            <div className="stats">
              <div className="stats-money">
                <ChartStats icon={<BsShieldCheck/>} amount={"Automated Savings"} button={"Go"} desc={" Lorem ipsum dolor sit, amet consectetur"}/>
                <ChartStats icon={<BiLockAlt/>} amount={"Fixed Savings"} button={"Go"} desc={" Lorem ipsum dolor sit, amet consectetur"}/>
                <ChartStats icon={<FiTarget/>} amount={"Goal Oriented Savings"} button={"Go"} desc={" Lorem ipsum dolor sit, amet consectetur"}/>
                <ChartStats icon={<GiFlexibleStar/>} amount={"Flexible Savings"} button={"Go"} desc={"Lorem ipsum dolor sit, amet consectetur"}/>
              </div>
              
            </div>
          </div>
          <div className="chart-right">
            <h2 className="secondary-heading">
             Lorem ipsum dolor sit amet consectetur 
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
              maxime natus, perferendis harum facere eligendi consequatur ab
              libero dignissimos. Laborum inventore eveniet atque error ea?
            </p>
            <Slide right>
            <AnimatedButton name={"Learn More"} />

            </Slide>
          </div>
        </div>
      </InnerLayout>
    </ChartStyled>
  );
}

export default ChartSection;
