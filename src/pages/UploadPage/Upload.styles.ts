import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-color: #f5f9ff;
  gap: 50px;
`;

export const Title = styled.h1`
  background: -webkit-linear-gradient(45deg, #11b8fc, #6047ed);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: sans-serif;
  text-align: center;
  margin: 0 25px;
`;

export const DraggerWrapper = styled.div`
  width: 40%;
  padding: 10px;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #11b8fc, #6047ed) border-box;
  border-radius: 7px;
  border: 3px dashed #f5f9ff;
`;
