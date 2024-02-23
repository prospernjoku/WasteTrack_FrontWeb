import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Breadcrumbs({ items }) {
  return (
    <div className="row breadcrumb-row">
      <div className="col-md-12">
        <ul className="breadcrumb-ul">
          {items.map((item, index) => (
            <li
              key={index}
              className={`text-capitalize ${index === items.length - 1 ? "active" : ""}`}
            >
              <span className="angle-icon">
                <FaAngleRight className="mb-1 fs-12" />
              </span>
              {index === items.length - 1 ? (
                <span >{item?.label} </span>
              ) :  (
                item?.url ? <Link to={item.url}>{item.label} </Link> : <p className="mb-0 gray-color">{item.label}</p>
              ) }
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;
