import React, { Component } from 'react';
import './App.css';

export default class MeaningListItem extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  render() {
    const style_elText2 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };

      const value_text2 = this.props.item;
    
    return (
      <div className="MeaningListItem">
        <div className="layoutFlow">
          <div className="elText2">
            <div className="actionFont" style={style_elText2}>
              <div>{value_text2}</div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
}
