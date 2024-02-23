import React from 'react'
import {FaLongArrowAltLeft,FaLongArrowAltRight} from 'react-icons/fa'

function TablePagination() {
  return (
    <div className="pagination-wrapper mb-2">
    <span><FaLongArrowAltLeft/></span>
    <span>1/10</span>
    <span><FaLongArrowAltRight/></span>
  </div>
  )
}

export default TablePagination