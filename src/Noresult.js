import React, { Component } from 'react';
import './App.css';

export default class Noresult extends Component {

  // Properties used by this component:
  // visualStateIndex

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

  // --- Functions for component state index 0 (1 of 2) --- 
  
  renderState0() {
    let transformPropValue_text2 = (input) => {
      // This function modifies the value for property 'text'.
      // There is a variable named 'input' that provides the property value.
      //
      return (this.props.appActions.isLoading() || (input && input !== "0")) ?
        "" : "Search did not return any results";
    }
    
    const value_text2 = transformPropValue_text2((this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_datamuse_count'] : ''));
    
    const style_state0_elText2752981 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    return (
      <div className="Noresult">
        <div className="layoutFlow">
          <div className="state0_elText2752981">
            <div className="baseFont" style={style_state0_elText2752981}>
              <div>{value_text2 !== undefined ? value_text2 : (<span className="propValueMissing">{this.props.locStrings.comp1_text2_752981}</span>)}</div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 2) --- 
  
  renderState1() {
    let transformPropValue_text2 = (input) => {
      // This function modifies the value for property 'text'.
      // There is a variable named 'input' that provides the property value.
      //
      return (this.props.appActions.isLoading() || (input && input !== "0")) ?
        "" : "Search did not return any results";
    }
    
    const value_text2 = transformPropValue_text2((this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_datamuse_count'] : ''));
    
    const style_state1_elText2752981 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    return (
      <div className="Noresult">
        <div className="layoutFlow">
          <div className="state1_elText2752981">
            <div className="baseFont" style={style_state1_elText2752981}>
              <div>{value_text2 !== undefined ? value_text2 : (<span className="propValueMissing">{this.props.locStrings.comp1_text2_752981}</span>)}</div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
  
  render() {
    switch (parseInt((this.state && this.state.visualStateIndexOverride !== undefined) ? this.state.visualStateIndexOverride : this.props.visualStateIndex, 10)) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
    }
  }
  
}
