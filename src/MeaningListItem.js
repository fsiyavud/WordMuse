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
    
    return (
      <div className="MeaningListItem">
        <div className="layoutFlow">
          <div className="elText2">
            <div className="actionFont" style={style_elText2}>
              <div>{this.props.locStrings.comp1_text2_424117}</div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
}
