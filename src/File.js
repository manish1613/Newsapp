import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
var moment = require('moment');
let yourdate = '2021-01-02T07:57:45.121Z';

const obj = [
  {
    name: "manish",
    age: 18
  },
  {
    name: "Rahul",
    age: 18
  },
  {
    name: "Arpit",
    age: 18
  },
  {
    name: "Bhavesh",
    age: 18
  },
  {
    name: "Keshav",
    age: 18
  },
]
let cnt = 1;
obj.forEach((value) => {
  value.id = cnt;
  cnt++;
})






export default function () {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(obj);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      }
      );
      setUsers(tempUser);
    }
    else {
      
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }

  }

  const handleDelete=(id)=>{
    console.log(id)
  }

  console.log(users)
  return (
    <>
      {/* Pagination in React JS using React-Paginet Package */}
      <div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={(e) => { console.log(e.selected + 1) }}
          marginPagesDisplayed={3}
          //pageRangeDisplayed={5}
          pageCount={16}
          previousLabel="< previous"
          containerClassName="pagination justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          activeClassName="active"
          activeLinkClassName="active"
          disabledClassName="d-none"
        />
      </div>

      {/* Modificatin in date Using Moment Package */}
      {
        moment(yourdate).format('MM/DD/YYYY')
      }

      {/* Check Box in React JS */}
      <br />
      <input type="checkbox" className='ms-2'
        name="allSelect"
        checked={users.filter((user) => user?.isChecked !== true).length < 1}
        onChange={handleChange} />
      <label>All Selcect</label>
      {
        users.map((value) => {
          return <>
            <br />
            <input type="checkbox" className='ms-2' name={value.name} checked={value?.isChecked || false} onChange={handleChange}/>
            <label>{value.name}</label>
            <button className='mx-3' onClick={()=>{handleDelete(value.id)}}>Delete</button>
          </>
        })
      }

    </>
  )
}
