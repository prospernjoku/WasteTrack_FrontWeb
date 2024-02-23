import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs';

function VendorAreas() {
    const breadcrumbItems = [{ label: "Assigned Areas" }];
  return (
    <div className='container-fluid'>
        <Breadcrumbs items={breadcrumbItems} />

        <div className="row my-3">
        <div className="col-md-12">
          <div className="table-wrapper table-responsive">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Areas</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((element, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>Lorem ipsum dolor sit amet. Nam ducimus repellendus At voluptatem</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}

export default VendorAreas