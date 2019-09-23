import React from 'react';
import styled from 'styled-components';
import Colors from 'constants/Colors';

const Table = styled.table`
  background-color: ${Colors.white};
  border: none;
  width: 100%;
  tr {
    display: grid;
    grid-template-columns: auto 20% 20%;
    grid-gap: 10px;
    border-bottom: 1px solid ${Colors.lightGrey};
    padding: 30px;
    &.alt {
      background-color: #f9f9fa;
      border-top: 1px solid ${Colors.lightGrey};
    }
    td:first-child {
      text-align: left;
      display: flex;
      align-items: center;
      * {
        margin-right: 10px;
      }
    }
  }
  tbody {
    tr {
      &:hover {
        background-color: #f9f9fa;
      }
    }
    tr:last-child {
      border: none;
    }
  }
  td {
    text-align: right;
    * {
      margin: 0;
    }
  }
  thead {
    color: ${Colors.blueGrey};
    tr {
      padding: 20px 30px;
    }
  }
  tbody {
    color: #42526e;
  }
  span {
    color: ${Colors.blueGrey};
    font-size: 0.9rem;
  }
`;
export default function(props) {
  return <Table>{props.children}</Table>;
}
