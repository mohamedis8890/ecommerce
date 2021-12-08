import { Send } from "@material-ui/icons";
import styled from "styled-components";
import React from "react";

const Container = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fcf5f5;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 30px;
`;

const InfoContainer = styled.div`
  background-color: white;
  width: 60%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  flex: 8;
  height: 100%;
  border: none;
  padding-left: 10px;
  font-size: 1.5rem;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  height: 100%;
  color: white;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates for your favourite products.</Description>
      <InfoContainer>
        <Input placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </InfoContainer>
    </Container>
  );
};

export default NewsLetter;
