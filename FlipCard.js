import React from "react";
import styled from "styled-components";

const MyCard = () => {
  return (
    <StyledCard>
      <div className="box-inner">
        <div className="box-front">
          <h2>Front Side</h2>
        </div>
        <div className="box-back">
          <h2>Back Side</h2>
        </div>
      </div>
    </StyledCard>
  );
};
const StyledCard = styled.div`
          background-color: transparent;
          width: 220px;
          height: 300px;
          border: 1px solid #eeeeee;
          perspective: 1000px;
        }
        .box-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.5s;
          transform-style: preserve-3d;
        }
        &:hover .box-inner {
          transform: rotateY(180deg);
        }
        .box-front,
        .box-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }
        .box-front {
          background-color: #cccccc;
          color: #111111;
        }
        .box-back {
          background-color: #8ebf42;
          color: #eeeeee;
          transform: rotateY(180deg);
  `;
