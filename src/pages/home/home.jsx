import React, { useState, useEffect } from "react";
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
import { generatePrimeNumbers, checkValueIsNumber } from "../../utils/helper";

const Home = () => {
  const [primesLoading, setPrimesLoading] = useState(false);
  const [activePrimes, setActivePrimes] = useState([]);
  const [amountOfPrimes, setAmountOfPrimes] = useState(10);

  useEffect(() => {
    const generatedPrimes = generatePrimeNumbers();
    setActivePrimes(generatedPrimes);
  }, []);

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
                const generatedPrimes = generatePrimeNumbers(amountOfPrimes);
                setActivePrimes(generatedPrimes);
                setPrimesLoading(false);
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
                <PrimeCard key={i}>
                  <PrimeText>{prime}</PrimeText>
                </PrimeCard>
              ))
            : null}
        </PrimesContainer>
      </SearchSection>

      <Table style={{ width: "100%" }}>
        <tr>
          <TableCell>Primes</TableCell>
          {activePrimes.map((prime) => (
            <TableCell style={{ fontWeight: "bold" }}>{prime}</TableCell>
          ))}
        </tr>

        {activePrimes.map((primeColumn) => {
          return (
            <tr>
              <TableCell style={{ fontWeight: "bold" }}>
                {primeColumn}
              </TableCell>
              {activePrimes.map((primeCell) => (
                <TableCell>{primeColumn * primeCell}</TableCell>
              ))}
            </tr>
          );
        })}
      </Table>
    </Container>
  );
};

export default Home;
