import React, { Component } from 'react'

export default class form extends Component {
  constructor (props,){
    super(props);
    this.state = {
      name: "",
      img: "#"
    }
  }
  /*
  async componentDidMount(){
    await this.fetchApi();
  }
  */
  fetchApi = async () => {
      let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`);
      let data = await resp.json();
      
      console.log(data.sprites.front_default);
      this.setState({
        img: data.sprites.front_default        
      });
  }

  handlerName = event => {
    this.setState({
      name: event.target.value
    })
  }

  handlerSubmit = event => {
    let aux = this.state.name;
    console.log(aux);
    event.preventDefault();
    this.fetchApi();
    
  }

  render() {
    //console.log(this.state);
    return (
      <div>
                <div className="card">
          <div className="card-header text-white">
            Search a Pokemon
          </div>
          <div className="card-body text-black">
            <form onSubmit={this.handlerSubmit}>
                <input type="text" placeholder="Type the Pokemon name" value={this.state.name} onChange={this.handlerName}></input>
                <br/>
                <button type="submit" className="btn btn-danger mt-2">Search</button>
            </form>            
          </div>
        </div>
        <img src={this.state.img} alt="" width="200px"/>
      </div>
    )
  }
}

