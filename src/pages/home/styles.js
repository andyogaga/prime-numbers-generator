import styled, { keyframes } from "styled-components";
import { PRI_COLOR, breakpoints, PRI_COLOR_FADED } from "../../utils/constants";

export const slideFadeInUp = keyframes`
from {
  opacity: 0;
  transform: translate3d(0, 70%, 0);
  visibility: visible;
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`;

export const slideInUp = keyframes`
from {
  transform: translate3d(0, 70%, 0);
  visibility: visible;
}

to {
  transform: translate3d(0, 0, 0);
}
`;

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding-bottom: 10vh;
  margin: auto;

  @media screen and ${breakpoints.sm} {
    width: 90%;
  }
  @media screen and ${breakpoints.md} {\
    width: 90%;
  }
`;

export const SearchSection = styled.div`
  padding-top: 16vh;
  width: 100%;
  padding-bottom: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and ${breakpoints.sm} {
    padding-top: 8vh;
    padding-bottom: 8vh;
  }

  @media screen and ${breakpoints.md} {
    padding-top: 10vh;
    padding-bottom: 10vh;
  }
`;

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${slideInUp} 1.2s ease-in;

  @media screen and ${breakpoints.sm} {
    align-self: center;
    margin-left: 0rem;
    margin: 2rem;
    flex-direction: column;
  }
  @media screen and ${breakpoints.md} {
    align-self: center;
    margin-left: 0rem;
    margin: 2rem;
    flex-direction: column;
  }
`;

export const SearchInput = styled.input`
  width: 50%;
  height: 3rem;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border: 1px solid ${PRI_COLOR};
  font-color: ${PRI_COLOR};
  font-size: 1.5rem;
  padding: 0.5rem;
  padding-left: 2rem;
  background-color: #fff;

  @media screen and ${breakpoints.sm} {
    width: 80%;
    align-self: center;
    border-radius: 2rem;
  }
  @media screen and ${breakpoints.md} {
    width: 80%;
    align-self: center;
    border-radius: 2rem;
  }

  &:hover {
    box-shadow: 0 0 0.8rem 0.1rem ${PRI_COLOR_FADED};
  }
`;

export const SearchButton = styled.button`
  width: 15%;
  height: 4rem;
  cursor: pointer;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  border: 1px solid ${PRI_COLOR};
  color: #fff;
  font-weight: bold;
  margin-left: 0rem;
  font-size: 1.4rem;
  padding: 0.5rem;
  padding-left: 0rem;
  background-color: ${PRI_COLOR};

  @media screen and ${breakpoints.sm} {
    width: 40%;
    height: 3rem;
    align-self: center;
    margin-top: 0.5rem;
    border-radius: 2rem;
    font-size: 1rem;
  }
  @media screen and ${breakpoints.md} {
    width: 40%;
    height: 3rem;
    align-self: center;
    margin-top: 0.5rem;
    border-radius: 2rem;
    font-size: 1rem;
  }
`;

export const PrimesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  margin-top: 1.5rem;
  align-items: center;

  @media screen and (min-width: 1030px) {
    margin-top: 1.5rem;
    align-self: center;
  }

  @media screen and ${breakpoints.sm} {
    align-self: center;
    margin-top: 0.5rem;
  }
  @media screen and ${breakpoints.md} {
    align-self: center;
    margin-top: 0.5rem;
  }
`;

export const PrimeCard = styled.div`
  display: flex;
  border: 0.7px solid ${PRI_COLOR};
  border-radius: 0.5rem;
  height: 1.5rem;
  min-width: 1rem;
  padding: 0.3rem;
  margin: 0.5rem;
  align-self: center;
  justify-content: center;
  animation: ${slideInUp} 0.8s linear;
`;

export const PrimeText = styled.p`
  color: ${PRI_COLOR};
  margin: auto;
`;

export const TableCell = styled.td`
  padding: 0.5rem;
  border: 0.4px solid #ddd;
`;

export const Table = styled.table`
  tr:nth-child(even) {
    background-color: #efeff8;
  }
  border-collapse: collapse;
`;

export const EmptyContentText = styled.p`
  font-size: 2rem;
  font-weight: bolder;
  color: ${PRI_COLOR_FADED};
  text-align: center;
`;
