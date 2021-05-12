import React from "react";

const CountryContext = React.createContext();

class CountryProvider extends React.PureComponent {
  state = {
    data: []
  };
  componentDidMount() {
    fetch("https://varden-api.herokuapp.com/api/states")
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        // console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <CountryContext.Provider value={this.state.data}>
        {this.props.children}
      </CountryContext.Provider>
    );
  }
}

export default CountryProvider;
