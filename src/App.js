import React, { useEffect, useState } from 'react'
import MergeSort from './Variables/MergeSort.json'

function App() {
  const [search, setSearch] = useState()
  const [date, setDate] = useState()

  useEffect(()=>{
    if(search){
      setDate(undefined)
    }else if(date){
      setSearch(undefined)
    }
  },[date,search])
  

  return (
    <div>

      <div style={{ textAlign: "center" }}>
        <input placeholder='search' onChange={(e) => setSearch(e.target.value)}></input>
        <button>Search</button>
      </div>

      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" onClick={(e) => setSearch("Associate")}>Associate</a>
          <a class="dropdown-item" onClick={(e) => setSearch("React")}>React</a>
          <a class="dropdown-item" onClick={(e) => setSearch("Angular")}>Angular</a>
          <a class="dropdown-item" onClick={(e) => setDate("01")}>Jan</a>
          <a class="dropdown-item" onClick={(e) => setDate("2021")}>2021</a>
        </div>
      </div>

      <table style={{ width: "100%" }}>
        <tr>
          <th>SNO</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Skills</th>
        </tr>
        {
          !date &&
          <>
            {
              MergeSort.filter(record => {
                if (!search) {
                  return record
                } else if (record.name.toLowerCase().includes(search.toLowerCase())) {
                  return record
                } else if (record.skills.toLowerCase().includes(search.toLowerCase())) {
                  return record
                } else if (record.designation.toLowerCase().includes(search.toLowerCase())) {
                  return record
                }
              }).map(record =>

                <tr>
                  <td>{record.sno}</td>
                  <td>{record.name}</td>
                  <td>{record.designation}</td>
                  <td>{record.skills}</td>
                </tr>
              )
            }
          </>}

          {
          date &&
          <>
            {
              MergeSort.filter(record => {
                if(!date){
                  return record
                }else{
                  var value =record.date
                  if(value.slice(3,5)==date){
                    return record
                  }else if(value.slice(6,10)==date){
                    return record
                  }
                }
              }).map(record =>

                <tr>
                  <td>{record.sno}</td>
                  <td>{record.name}</td>
                  <td>{record.designation}</td>
                  <td>{record.skills}</td>
                </tr>
              )
            }
          </>}


      </table>




    </div>
  )
}

export default App