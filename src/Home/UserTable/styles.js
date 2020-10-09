import styled from "styled-components";

export const Container = styled.div`
  margin: 30px;
  position: relative;

  tr th {
    text-align: center;
  }
  button:not(:first-child) {
    margin-left: 10px;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255,255,255,.8);
  height: 30vh;
  width: 30vw;
  position: absolute;
  right: calc(50% - 15vw);
  bottom: calc(50% - 15vh);
  border-radius: 5px;
`;
