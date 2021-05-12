import React from 'react';
import CategoryContext from './categoryContext';


class CategoryProvider extends React.PureComponent {
  state = {
    category: []
  }

  componentDidMount() {
    let category = window.localStorage.getItem('category');
    if(category === null){
      
    }
    const _this = this;
    fetch("https://varden-api.herokuapp.com/api/category")
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        _this.setState({
          category: data.data
        }, () => console.log(_this.state.category));
      })
      .catch(err => {
        console.log(err);
      });
  }
  render(){
    return(
      <CategoryContext.Provider value={this.state.category}>
      {this.props.children}
      </CategoryContext.Provider>
    )
  }
}

export default CategoryProvider;