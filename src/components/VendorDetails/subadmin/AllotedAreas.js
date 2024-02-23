import React from "react";
import TablePagination from "../../Table/TablePagination";

function AllotedAreas() {

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row my-3">
          <div className="col-md-12">
            <div className="table-wrapper table-responsive">
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th>S. No.</th>
                    <th>Area</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(10)].map((element, index) => {
                    return (
                      <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-md-12 mb-4">
                <TablePagination/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AllotedAreas;
