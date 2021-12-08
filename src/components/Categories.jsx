import Category from "./Category";
import React from "react";
import { categories } from "../data";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <Category item={item} />
      ))}
    </Container>
  );
};

export default Categories;
