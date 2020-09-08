import React, { FunctionComponent, useState, useEffect, MouseEvent } from 'react';
import styled from 'styled-components';
import Seat from '../Seat'

const StyledTable = styled.table`
  position: absolute;
  margin: 0;
  padding: 5px;
  width: 100%;
  height: 100%;
  background-color: #171219;
`

const Cinema: FunctionComponent = () => {
  const [horizontalSize, setHorizontalSize] = useState<number>(10);
  const [verticalSize, setVerticalSize] = useState<number>(10);
  const [seats, setSeats] = useState<{ [id: string] : boolean }>({});

  const handleSeatClick = (_: MouseEvent, id: string) => {
    setSeats((seats) => {
      let newSeats = { ... seats };
      newSeats[id] = !newSeats[id];
      return newSeats;
    });
  }

  useEffect(() => {
    setSeats((seats) => {
      let newSeats = {};
      for(let x = 0; x < horizontalSize; x++) {
        for(let y = 0; y < verticalSize; y++) {
          newSeats[x + ',' + y] = true;
        }
      }

      for (const [key, value] of Object.entries(seats)) {
        if (key in newSeats) {
          newSeats[key] = value;
        }
      }

      return newSeats;
    });
  }, [horizontalSize, verticalSize])


  return (
    <>
    <StyledTable>
      <tbody>
      {
        Array(verticalSize).fill(1).map((_, y) =>
        <tr>
          {
            Array(horizontalSize).fill(1).map((_, x) =>
            <td>
              <Seat key={x + ',' + y} id={x + ',' + y} isASeat={seats[x + ',' + y]} clickHandler={handleSeatClick}></Seat>
            </td>
            )
          }
        </tr>
        )
      }
      </tbody>

    </StyledTable>

    </>
  );
}


export default Cinema;
