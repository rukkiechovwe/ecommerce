import styled from "styled-components";

// export const Container = styled.div`
//   width: 90%;
//   margin: 0 auto;
//   color: #222;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
// `;
export const Container = styled.div`
  padding: 2rem 2rem 3rem;
  color: #222;
  display:flex;
  flex-direction:row;
  justify-content: center;
  flex-wrap: wrap;
  ::after {
    content: "";
    flex: auto;
    @media (min-width: 400px) {
      padding: 2rem 1rem 3rem;
      justify-content: space-between;
    }
`;
