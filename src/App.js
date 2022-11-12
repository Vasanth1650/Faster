import React, { useState } from 'react'
import Header from './NavBar/Header'
import mergeSort from './Variables/MergeSort.json'

function App() {
  const [date, setDate] = useState()
  const [designation, setDesignation] = useState()
  const [skills, setSkills] = useState()
  const [month, setMonth] = useState()
  const [year, setYear] = useState()
  const [search, setSearch] = useState()

  return (
    <div>
      <Header />
      <div style={{ marginLeft: "5%", display: "flex" }}>
        <div class="form-group" style={{ width: "10%", paddingTop: "10%" }}>
          <label for="exampleFormControlSelect1">Date</label>
          <select class="form-control" id="exampleFormControlSelect1" onChange={(e) => setDate(e.target.value)}>
            <option></option>
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
            <option>05</option>
            <option>06</option>
            <option>07</option>
            <option>08</option>
            <option>09</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
          </select>
        </div>

        <div class="form-group" style={{ width: "10%", paddingTop: "10%", marginLeft: "5%" }}>
          <label for="exampleFormControlSelect1">Month</label>
          <select class="form-control" id="exampleFormControlSelect1" onChange={(e) => setMonth(e.target.value)}>
            <option></option>
            <option value="01">Jan</option>
            <option value="02">Feb</option>
            <option value="03">Mar</option>
            <option value="04">Apr</option>
            <option value="05">May</option>
            <option value="06">Jun</option>
            <option value="07">Jul</option>
            <option value="08">Aug</option>
            <option value="09">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
        </div>

        <div class="form-group" style={{ width: "10%", paddingTop: "10%", marginLeft: "5%" }}>
          <label for="exampleFormControlSelect1">Year</label>
          <select class="form-control" id="exampleFormControlSelect1" onChange={(e) => setYear(e.target.value)}>
            <option></option>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
          </select>
        </div>

        <div class="form-group" style={{ width: "10%", paddingTop: "10%", marginLeft: "5%" }}>
          <label for="exampleFormControlSelect1">Designation</label>
          <select class="form-control" id="exampleFormControlSelect1" onChange={(e) => setDesignation(e.target.value)}>
            <option></option>
            <option>Associate</option>
            <option>Consultant</option>
            <option>Manager</option>
            <option>Supervisor</option>
            <option>Traniner</option>
          </select>
        </div>

        <div class="form-group" style={{ width: "10%", paddingTop: "10%", marginLeft: "5%" }}>
          <label for="exampleFormControlSelect1">Skills</label>
          <select class="form-control" id="exampleFormControlSelect1" onChange={(e) => setSkills(e.target.value)}>
            <option></option>
            <option>C++</option>
            <option>React</option>
            <option>Angular</option>
            <option>Jquery</option>
            <option>Html</option>
          </select>
        </div>

        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)} aria-label="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
        </form>


      </div>
      <div style={{ textAlign: "center", paddingTop: "50px" }}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Designation</th>
              <th scope="col">Skills</th>
              <th scope="col">Joined Date</th>
            </tr>
          </thead>
          {
            !search &&
            <tbody>
              {
                mergeSort.filter(value => {
                  if (date && date == value.date.slice(0, 2) && !designation && !skills && !month && !year) {
                    return value
                  } else if (!date && designation == value.designation && !skills && !month && !year) {
                    return value
                  } else if (!date && !designation && skills == value.skills && !month && !year) {
                    return value
                  } else if (!date && !designation && !skills && month == value.date.slice(3, 5) && !year) {
                    return value
                  } else if (!date && !designation && !skills && !month && year == value.date.slice(6, 10)) {
                    return value
                  } else if (!date && !designation && !skills && !month && !year) {
                    return value
                  }
                }).map(value =>
                  <tr>
                    <th scope="row">{value.sno}</th>
                    <td>{value.name}</td>
                    <td>{value.designation}</td>
                    <td>{value.skills}</td>
                    <td>{value.date}</td>
                  </tr>
                )
              }


            </tbody>}



            {
            search &&
            <tbody>
              {
                mergeSort.filter(value => {
                  if(value.name.toLocaleLowerCase().includes(search.toLowerCase())){
                      return value
                  }else if(value.designation.toLocaleLowerCase().includes(search.toLowerCase())){
                      return value
                  }else if(value.skills.toLocaleLowerCase().includes(search.toLowerCase())){
                      return value
                  }else if(value.sno.toLocaleLowerCase().includes(search.toLowerCase())){
                    return value
                  }
                }).map(value =>
                  <tr>
                    <th scope="row">{value.sno}</th>
                    <td>{value.name}</td>
                    <td>{value.designation}</td>
                    <td>{value.skills}</td>
                    <td>{value.date}</td>
                  </tr>
                )
              }


            </tbody>}
        </table>
      </div>
    </div>
  )
}

export default App