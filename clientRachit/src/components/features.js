import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import axios from 'axios';

class breadcrumb extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       array : [],
       arrayOriginal :[],
       age : 0 ,
       s1 :"",
       s2:"",
       s3:"",
       s4:"",
       prediction : []
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this._onSelect1 = this._onSelect1.bind(this);
    this._onSelect2 = this._onSelect2.bind(this);
  }

  onSubmit = async (e)=>{
    e.preventDefault();
    console.log("asdas");
    const user = {
      age : this.state.age , 
      s1 : this.state.s1,
      s2 : this.state.s2,
      s3 : this.state.s3,
      s4 : this.state.s4
    };
    let ar = this.state.arrayOriginal;
 
    const f1 = ar.filter((value)=> value.Name === this.state.s1);
    const f2 = ar.filter((value)=> value.Name === this.state.s2);
    const c1 = f2[0].ID;
    const c2 = f1[0].ID;
   const prediction =await  axios.get(`https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[${c2},${c1}]&gender=male&year_of_birth=23&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InJhYy5zcmkyNUBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjU4OTciLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIyMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiOTk5OTk5OTk5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwIjoiUHJlbWl1bSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMTktMTAtMjAiLCJpc3MiOiJodHRwczovL3NhbmRib3gtYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTU3MTU0NTYyMCwibmJmIjoxNTcxNTM4NDIwfQ.3ynOilR-8MmHy4IaGrWYbxY5dTD7BeQEzeZeJ-7D0CQ&format=json&language=en-gb`);
   const arr1 = prediction.data.map((value)=>value.Issue.Name);
  
   console.log(arr1);
   this.setState({prediction : arr1});
  }
  
  onChangeDropdown1(e)
  {
    this.setState({s1:e.target.value});
    console.log("asds");
  }
  onChange(e)
  { 
    this.setState({[e.target.name] : e.target.value});
  }

  _onSelect1(e)
  {
    console.log(e.value);
    this.setState({s1:e.value});
  }
  _onSelect2(e)
  {
    console.log(e.value);
    this.setState({s2:e.value});
  }

  

  async componentDidMount()
  {
   const array = await axios.get("https://sandbox-healthservice.priaid.ch/symptoms?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InJhYy5zcmkyNUBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjU4OTciLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIyMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiOTk5OTk5OTk5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwIjoiUHJlbWl1bSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMTktMTAtMjAiLCJpc3MiOiJodHRwczovL3NhbmRib3gtYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTU3MTU0Njg0OCwibmJmIjoxNTcxNTM5NjQ4fQ.ls-7BSUMWItz7IA0SycJLjnM7jSzbWLqiKd9wfQu3kI&format=json&language=en-gb");
   const arr = array.data;
    let y = arr.map(value => value.Name)   
    this.setState({array : y , arrayOriginal : arr});
  }
    render() {
      const options = this.state.array.map(value=>value);
      const defaultOption = options[0];
        return (
            <section className="breadcrumb breadcrumb_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb_iner text-center">
                <div className="breadcrumb_iner_item">
                  <h2>Disease Predictor</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
        <form onSubmit = {this.onSubmit}>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1"><h3><font color = "white">Age</font></h3></label>
          <input type="number" name="age" value={this.state.age} onChange={this.onChange} className="form-control" id="exampleFormControlInput1" placeholder="Enter Age" />
        </div>
        <label htmlFor="exampleFormControlInput1"><h3><font color = "white">Symptom 1</font></h3></label>
        <Dropdown options={options} onChange={this._onSelect1} value={this.state.s1} placeholder="Select an option" />
        <label htmlFor="exampleFormControlInput1"><h3><font color = "white">Symptom 2</font></h3></label>
        <Dropdown options={options} onChange={this._onSelect2} value={this.state.s2} placeholder="Select an option" />
        <br></br>
        <br></br>
        <button type="submit" class="btn btn-primary">Predict Disease</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
        <button type="button" class="btn btn-danger">Reset</button>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <h2>
            <font color="white">
          {this.state.prediction.map(value=><h3>{value}<br></br></h3>)}
          </font>
          </h2>
        </div>
      </form>
        </div>
      </section>
        )
    }
}

export default breadcrumb;