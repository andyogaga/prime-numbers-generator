import React, { useState, useEffect, useCallback } from "react";
import {
  Container,
  SearchSection,
  SearchInput,
  SearchButton,
  SearchWrapper,
  PrimeCard,
  PrimesContainer,
  PrimeText,
  TableCell,
  Table,
} from "./styles";
import Loader from "../../components/loader";
import { checkPrimeWithSoE, checkValueIsNumber } from "../../utils/helper";

const Home = () => {
  const [primesLoading, setPrimesLoading] = useState(false);
  const [activePrimes, setActivePrimes] = useState([]);
  const [amountOfPrimes, setAmountOfPrimes] = useState(10);

  const myGetPrimesCallback = useCallback(async () => {
    const generatedPrimes = await checkPrimeWithSoE();
    setActivePrimes(generatedPrimes);
  }, []);

  useEffect(() => {
    myGetPrimesCallback();
  }, [myGetPrimesCallback]);

  return (
    <Container>
      <SearchSection>
        <SearchWrapper>
          <SearchInput
            onChange={(e) => {
              setAmountOfPrimes(e.target.value);
            }}
            placeholder="Enter amount of Primes"
          />
          <SearchButton
            onClick={(e) => {
              if (checkValueIsNumber(amountOfPrimes)) {
                setPrimesLoading(true);
                checkPrimeWithSoE(amountOfPrimes).then((generatedPrimes) => {
                  setActivePrimes(generatedPrimes);
                  setPrimesLoading(false);
                });
              }
            }}
          >
            {primesLoading ? (
              <Loader size="small" color="#fff" />
            ) : (
              "Get Primes"
            )}
          </SearchButton>
        </SearchWrapper>
        <PrimesContainer>
          {activePrimes && activePrimes.length
            ? activePrimes.map((prime, i) => (
                <PrimeCard key={i} data-testid={`prime-view-${prime}`}>
                  <PrimeText>{prime}</PrimeText>
                </PrimeCard>
              ))
            : null}
        </PrimesContainer>
      </SearchSection>

      <Table style={{ width: "100%" }}>
        <thead>
          <tr>
            <TableCell>Primes</TableCell>
            {activePrimes.map((prime) => (
              <TableCell key={prime} style={{ fontWeight: "bold" }}>
                {prime}
              </TableCell>
            ))}
          </tr>
        </thead>

        {activePrimes.map((primeColumn) => {
          return (
            <tbody key={`prime-table-${primeColumn}`}>
              <tr>
                <TableCell style={{ fontWeight: "bold" }}>
                  {primeColumn}
                </TableCell>
                {activePrimes.map((primeCell) => (
                  <TableCell
                    key={`prime-table-${primeCell}-${primeColumn}`}
                    data-testid={`prime-table-${primeCell}-${primeColumn}`}
                  >
                    {primeColumn * primeCell}
                  </TableCell>
                ))}
              </tr>
            </tbody>
          );
        })}
      </Table>
    </Container>
  );
};

export default Home;
