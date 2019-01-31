import { Card, asset } from "duck-cli";
import React from "react";
import styled from "@emotion/styled";

const CardWrapper = styled.div`
  font-family: "Avenir Next";
  line-height: 1;
  height: 100%;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -999;
  background-image: ${props => `url(${asset(`${props.party}_background.png`)})`};
  background-size: 100% 100%;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SpacedRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NameAndParty = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
`;

const P = styled.p`
  padding: 0;
  margin: 0;
`;

const PartyLabel = props => {
  const font = props.party === "i" ? "serif" : null;
  return <P style={{ transform: "translate(0, 15%)", flex: 1, fontSize: 150, fontFamily: font, opacity: 0.5 }}>{props.party.toUpperCase()}</P>;
}

const Bullets = props => {
  const counts = props.count.split(":").map(c => parseInt(c, 10));
  const bullets = counts.map(c => "•".repeat(c));

  const result = [];
  for (let i = 0; i < bullets.length; i++) {
    result.push(<span key={`${i}`}>{bullets[i]}</span>);
    if (i < bullets.length - 1) {
      result.push(<br key={`${i}.br`} />);
    }
  }

  return (
    <p>
      {result}
    </p>
  )
};

export default props => (
  <Card>
    <CardWrapper>
      <Background party={props.party} />

      <Wrapper>
        <SpacedRow>
          <img src={asset("portrait.png")} width={248} height={248} />
          <NameAndParty>
            <P style={{ fontSize: 34 }}>{props.name}</P>
            <PartyLabel party={props.party} />
          </NameAndParty>
        </SpacedRow>

        <SpacedRow>
          <div style={{ textAlign: 'left', fontSize: 24 }}>
            <p style={{ fontWeight: 'bold' }}>REROLL</p>
            <Bullets count={props.rerolls} />
          </div>

          <div style={{ textAlign: 'center', fontSize: 24 }}>
            <p style={{ fontWeight: 'bold' }}>MAX</p>
            <P style={{ textAlign: 'center', fontSize: 36 }}>{props.party_influence} : {props.opposition_influence}</P>
          </div>

          <div style={{ textAlign: 'right', fontSize: 24 }}>
            <p style={{ fontWeight: 'bold' }}>BLOCK</p>
            <Bullets count={props.blocks} />
          </div>
        </SpacedRow>
      </Wrapper>
    </CardWrapper>
  </Card >
);
