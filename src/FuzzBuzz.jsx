import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import './fuzz.css'; 

class FizzBuzz extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 0,
      itemsPerPage: 10,
    };
  }

  render() {
    const { currentPage, itemsPerPage } = this.state;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const rows = [];

    for (let i = startIndex + 1; i <= endIndex && i <= 40; i++) {
      let output = '';

      if (i % 3 === 0) {
        output += 'Fizz';
      }

      if (i % 5 === 0) {
        output += 'Buzz';
      }

      rows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{output || i}</td>
        </tr>
      );
    }

    return (
      <div className="fizzbuzz-container">
        <h2>FizzBuzz Table</h2>
        <table className="fizzbuzz-table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>

        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={Math.ceil(40 / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    );
  }
}

export default FizzBuzz;
