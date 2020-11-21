import React, { Component } from 'react';
import './App.css';
import QualifierList from './QualifierList';
import btn_icon_463612 from './images/btn_icon_463612.png';

export default class LeftMenu extends Component {

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
  
  onClick_state0_elIconButton = (ev) => {
    let newVal = "0";
    this.props.appActions.updateDataSlot('ds_leftmenu_driver', newVal);
  
  }
  
  
  renderState0() {
    let transformVisiblePropValue_qualifierList = (input) => {
      // This function modifies the value for property 'visible'.
      // There is a variable named 'input' that provides the property value.
      //
      var scr = String(this.props.deviceInfo.screenFormatId).valueOf().trim();
      if (scr === "narrow-phone") { 
        if (input === "1") {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
      //return input;
    }
    const state0_elQualifierList929082 = ((val) => { return val === "true" || val == true || val == 1 })(transformVisiblePropValue_qualifierList((this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_leftmenu_driver'] : ''))) ? (
      <div className="hasNestedComps state0_elQualifierList929082">
        <div>
          <QualifierList ref={(el)=> this._state0_elQualifierList929082 = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
        </div>
      </div>
      
     ) : null;
    
    const style_state0_elIconButton = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_463612+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '95.422%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="LeftMenu appBg">
        <div className="layoutFlow">
          { state0_elQualifierList929082 }
        </div>
        
        <div className="foreground">
          <button className="actionFont state0_elIconButton" style={style_state0_elIconButton} onClick={this.onClick_state0_elIconButton}  />
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 2) --- 
  
  renderState1() {
    let transformVisiblePropValue_qualifierList = (input) => {
      // This function modifies the value for property 'visible'.
      // There is a variable named 'input' that provides the property value.
      //
      var scr = String(this.props.deviceInfo.screenFormatId).valueOf().trim();
      if (scr === "narrow-phone") { 
        if (input === "1") {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
      //return input;
    }
    const state1_elQualifierList929082 = ((val) => { return val === "true" || val == true || val == 1 })(transformVisiblePropValue_qualifierList((this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_leftmenu_driver'] : ''))) ? (
      <div className="hasNestedComps state1_elQualifierList929082">
        <div>
          <QualifierList ref={(el)=> this._state1_elQualifierList929082 = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
        </div>
      </div>
      
     ) : null;
    
    return (
      <div className="LeftMenu appBg">
        <div className="layoutFlow">
          { state1_elQualifierList929082 }
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
