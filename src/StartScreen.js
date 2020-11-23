import React, { Component } from 'react';
import './App.css';
import LeftMenu from './LeftMenu';
import Arena from './Arena';
import TopicBreakout from './TopicBreakout';

export default class StartScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
    {
      let dataSheet = this.props.appActions.dataSheets['datamuse3'];
      let serviceOptions = this.props.appActions.serviceOptions_datamuse3;
      if ( !this.props.appActions.dataSheetLoaded['datamuse3']) {
        serviceOptions.servicePath = dataSheet.expandSlotTemplateString("", this.props.appActions.dataSlots);
        this.props.appActions.loadData_dataMuse(dataSheet, serviceOptions, true);
        this.props.appActions.dataSheetLoaded['datamuse3'] = true;
      }
    }
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  render() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      backgroundColor: '#f6f6f6',
     };
    let transformStateValue_elColumns_col0 = (input) => {
      // This function modifies the value for property 'componentStateId'.
      // There is a variable named 'input' that provides the property value.
      //
      let str = "";
      if (this.props.deviceInfo.screenFormatId) {
        str = this.props.deviceInfo.screenFormatId.valueOf();
        if (str) {
          str = str.trim();
        }
        if (str !== "narrow-phone") {
          return 1;
        }
      }
      return 0;
      /*
      var scr = String(this.props.deviceInfo.screenFormatId).valueOf().trim();
      if (scr !== "narrow-phone" && scr !== "undefined") {
        return 1;
      }
      return 0;
      */
    }
    let transformStateValue_elColumns_col1 = (input) => {
      // This function modifies the value for property 'componentStateId'.
      // There is a variable named 'input' that provides the property value.
      //
      //alert(this.props.deviceInfo.screenFormatId);
      /*
      if (!this.props.deviceInfo.screenFormatId) {
        return 0;
      }
      */
      /*
      if (this.props.appActions.dataSlots &&
            this.props.appActions.dataSlots['ds_arena_hide'] === "1") {
        return 4;
      }  */ 
      var scr = String(this.props.deviceInfo.screenFormatId).valueOf().trim();
      if (scr === "narrow-phone") {
        if (!this.props.appActions.dataSlots ||
            this.props.appActions.dataSlots['ds_arena_init'] === "0") {
          return 2;
        }
        return 0;
      } else {
        if (!this.props.appActions.dataSlots ||
            this.props.appActions.dataSlots['ds_arena_init'] === "0") {
          return 3;
        }
        return 1;
      }
      
      //return input;
    }
    const elTopicBreakout = ((val) => { return val === "true" || val == true || val == 1 })((this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_topic_breakout'] : '')) ? (
      <div className="hasNestedComps containerMinHeight elTopicBreakout">
        <TopicBreakout ref={(el)=> this._elTopicBreakout = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
      </div>
     ) : null;
    
    return (
      <div className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="hasNestedComps elColumns">
            <div>
              <div className="col0">
                <LeftMenu {...this.props} visualStateIndex={transformStateValue_elColumns_col0((this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_orientation_dummy'] : ''))} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
              </div>
              <div className="col1">
                <Arena visualStateIndex={transformStateValue_elColumns_col1((this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_orientation_dummy'] : ''))} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="screenFgContainer">
          <div className="foreground">
            { elTopicBreakout }
          </div>
        </div>
      </div>
    )
  }
  
}
