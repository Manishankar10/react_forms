import React, { Component } from 'react'
export default class Form extends Component {
    constructor(props){
        super(props);
        this.state={
        name:'',
      description: '',
    gender:'',qualification:'',allDetails:[],position:'',edit:false
  }
    }
componentDidMount(){
  console.log("Form opened for work");
}
componentWillUnmount(){
  console.log("Tasks completed");
}
    handleChange=(event)=>{
        this.setState({[event.target.name] : event.target.value})
    }
    handleSubmit= (event)=>{
        event.preventDefault();
        const {name, description, gender, qualification, edit, position } = this.state;
        console.log(name, description, gender, qualification);
        var details=this.state.allDetails;
        if(edit ===false){
          details.push({name:name, description:description, gender:gender, qualification:qualification});
        }
        else{
          details[position].name=name;
          details[position].description=description;
          details[position].gender=gender;
          details[position].qualification=qualification;
          
        }
        this.setState({name: '', description:'', gender: 'choose..',qualification:'',allDetails:details,edit:0})

    }
    handleEditor(index){
      let name1=this.state.allDetails[index].name;
      let description1=this.state.allDetails[index].description;
      let gender1=this.state.allDetails[index].gender;
      let qualification1=this.state.allDetails[index].qualification;
      this.setState({
        position : index,
        edit : true,
        name : name1,
        description: description1,
        gender:gender1,
        qualification:qualification1
      });
    }
handleDelete(index){
  var details=this.state.allDetails;
  details.splice(index, 1);
  this.setState({allDetails:details})
}
renderTable() {
  return (
    <div className='tablename'>
      <table className='T1'>
        <thead></thead>
        <tbody>
          <tr>
            <th className='t1'>Name</th>
            <th className='t1'>Description</th>
            <th className='t1'>Gender</th>
            <th className='t1'>Qualification</th>
            <th className='t1'>Button1</th>
            <th className='t1'>Button2</th>
            </tr>
          {this.state.allDetails.map((details, index) => (
          <tr key={index}>
              <td className='t1'>{details.name}</td>
              <td className='t1'>{details.description}</td>
              <td className='t1'>{details.gender}</td>
              <td className='t1'>{details.qualification}</td>
              <td className='t1'>
              <button type="button" onClick={()=>this.handleEditor(index)}>
                Update
              </button>
              </td>
              <td className='t1'>
                <button type="button" onClick={()=>this.handleDelete(index)}>
                  Delete
                </button>
                </td>
                </tr>
              ))}
              <tr></tr>
            </tbody>
          </table>
        </div>
      );
    }
render() {
    return (<div>
      <form 
      onSubmit={this.handleSubmit}>

      <div>
        <label>
            Name:
            <input
            name='name' 
            type="text"
            value={this.state.name}
            onChange={this.handleChange}></input>
        </label>
        </div>
        <div>
            <label>
            Description:
            <textarea
            name='description' 
            type="text"
            value={this.state.description}
            onChange={this.handleChange}></textarea>
        </label>
      </div>
      <div>
        <label>
          Gender:
          <select
          name='gender'
        value={this.state.gender}
        onChange={this.handleChange}>
          <option>choose..</option>
          <option name='Male'>Male</option>
          <option name='Female'>Female</option>
        </select>
        </label>

      </div>
      <div className='buttons'>
        <label>
           Qualification:
           <input
           name='qualification'
           className='boxes'
           value='school'
             type='radio'
             onChange={this.handleChange}
            />School
            <input
           name='qualification'
           className='boxes'
           value='college'
             type='radio'
             onChange={this.handleChange}
            />College
            </label>
      </div>
        <div>
        <button type='submit'>Submit</button>

        </div>

        
      </form>
      {this.renderTable()}
      </div>
    );
  }
}
