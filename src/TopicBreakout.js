import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class TopicBreakout extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      field: this.transformPropValue_field((this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_topics'] : '')) || '',
      fieldCopy: this.transformPropValue_fieldCopy((this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_topics'] : '')) || '',
      fieldCopy3: this.transformPropValue_fieldCopy3((this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_topics'] : '')) || '',
      fieldCopy2: this.transformPropValue_fieldCopy2((this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_topics'] : '')) || '',
      fieldCopy4: this.transformPropValue_fieldCopy4((this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_topics'] : '')) || '',
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  textInputChanged_elField = (event) => {
    this.setState({field: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_topics1", event.target.value);
  }
  transformPropValue_field = (input) => {
    // This function modifies the value for property 'text'.
    // There is a variable named 'input' that provides the property value.
    //
    return input.split(",",1)[0].trim();
    //return input;
  }
  
  
  textInputChanged_elFieldCopy = (event) => {
    this.setState({fieldCopy: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_topics2", event.target.value);
  }
  transformPropValue_fieldCopy = (input) => {
    // This function modifies the value for property 'text'.
    // There is a variable named 'input' that provides the property value.
    //
    //return input.split(",",1)[0].trim();
    return input.split(",",2)[1].trim();
  }
  
  
  textInputChanged_elFieldCopy3 = (event) => {
    this.setState({fieldCopy3: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_topics3", event.target.value);
  }
  transformPropValue_fieldCopy3 = (input) => {
    // This function modifies the value for property 'text'.
    // There is a variable named 'input' that provides the property value.
    //
    return input.split(",",3)[2].trim();
  }
  
  
  textInputChanged_elFieldCopy2 = (event) => {
    this.setState({fieldCopy2: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_topics4", event.target.value);
  }
  transformPropValue_fieldCopy2 = (input) => {
    // This function modifies the value for property 'text'.
    // There is a variable named 'input' that provides the property value.
    //
    return input.split(",",4)[3].trim();
  }
  
  
  textInputChanged_elFieldCopy4 = (event) => {
    this.setState({fieldCopy4: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_topics5", event.target.value);
  }
  transformPropValue_fieldCopy4 = (input) => {
    // This function modifies the value for property 'text'.
    // There is a variable named 'input' that provides the property value.
    //
    return input.split(",",5)[4].trim();
  }
  
  
  onClick_elButton = (ev) => {
    let newVal = "0";
    this.props.appActions.updateDataSlot('ds_topic_breakout', newVal);
  
    newVal = "";
    
    transformValue = (input) => {
      // This function modifies the value written to the target data slot.
      // There is a variable named 'input' that provides the input value.
      let strings = [];
      /*
      if (input) {
        let t = input.trim();
        if (t) {
          strings.push(t);
        }
      }
      */
      if (this.props.appActions.dataSlots &&
          this.props.appActions.dataSlots['ds_topics1']) {
        let t = this.props.appActions.dataSlots['ds_topics1'].trim();
        if (t) {
          strings.push(t);
        }
      }
      if (this.props.appActions.dataSlots &&
          this.props.appActions.dataSlots['ds_topics2']) {
        let t = this.props.appActions.dataSlots['ds_topics2'].trim();
        if (t) {
          strings.push(t);
        }
      }
      if (this.props.appActions.dataSlots &&
          this.props.appActions.dataSlots['ds_topics3']) {
        let t = this.props.appActions.dataSlots['ds_topics3'].trim();
        if (t) {
          strings.push(t);
        }
      }
      if (this.props.appActions.dataSlots &&
          this.props.appActions.dataSlots['ds_topics4']) {
        let t = this.props.appActions.dataSlots['ds_topics4'].trim();
        if (t) {
          strings.push(t);
        }
      }
      if (this.props.appActions.dataSlots &&
          this.props.appActions.dataSlots['ds_topics5']) {
        let t = this.props.appActions.dataSlots['ds_topics5'].trim();
        if (t) {
          strings.push(t);
        }
      }
      if (strings.length > 0) {
        return strings.join(',');
      }
      return this.props.appActions.dataSlots['ds_topics'];
      }
    newVal = transformValue(newVal);
    
    this.props.appActions.updateDataSlot('ds_topics', newVal);
  
  }
  
  
  render() {
    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      backgroundColor: 'rgba(246, 246, 246, 0.9000)',
     };
    const style_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    const value_field = this.state.field;
    
    const style_elField = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const value_fieldCopy = this.state.fieldCopy;
    
    const style_elFieldCopy = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const value_fieldCopy3 = this.state.fieldCopy3;
    
    const style_elFieldCopy3 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const value_fieldCopy2 = this.state.fieldCopy2;
    
    const style_elFieldCopy2 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const value_fieldCopy4 = this.state.fieldCopy4;
    
    const style_elFieldCopy4 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elButton = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="TopicBreakout">
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow">
          <div className="elSpacer5">
            <div />
          </div>
          
          <div className="elText">
            <div className="baseFont" style={style_elText}>
              <div>{this.props.locStrings.component1_text_364679}</div>
            </div>
          </div>
          
          <div className="elSpacer">
            <div />
          </div>
          
          <div className="elField">
            <input className="baseFont" style={style_elField} type="text" placeholder={this.props.locStrings.component1_field_112434} onChange={this.textInputChanged_elField} value={value_field !== undefined ? value_field : ''}  />
          </div>
          
          <div className="elSpacer2">
            <div />
          </div>
          
          <div className="elFieldCopy">
            <input className="baseFont" style={style_elFieldCopy} type="text" placeholder={this.props.locStrings.component1_fieldcopy_106712} onChange={this.textInputChanged_elFieldCopy} value={value_fieldCopy !== undefined ? value_fieldCopy : ''}  />
          </div>
          
          <div className="elSpacerCopy">
            <div />
          </div>
          
          <div className="elFieldCopy3">
            <input className="baseFont" style={style_elFieldCopy3} type="text" placeholder={this.props.locStrings.component1_fieldcopy3_108600} onChange={this.textInputChanged_elFieldCopy3} value={value_fieldCopy3 !== undefined ? value_fieldCopy3 : ''}  />
          </div>
          
          <div className="elSpacerCopy3">
            <div />
          </div>
          
          <div className="elFieldCopy2">
            <input className="baseFont" style={style_elFieldCopy2} type="text" placeholder={this.props.locStrings.component1_fieldcopy2_111229} onChange={this.textInputChanged_elFieldCopy2} value={value_fieldCopy2 !== undefined ? value_fieldCopy2 : ''}  />
          </div>
          
          <div className="elSpacerCopy2">
            <div />
          </div>
          
          <div className="elFieldCopy4">
            <input className="baseFont" style={style_elFieldCopy4} type="text" placeholder={this.props.locStrings.component1_fieldcopy4_1001721} onChange={this.textInputChanged_elFieldCopy4} value={value_fieldCopy4 !== undefined ? value_fieldCopy4 : ''}  />
          </div>
          
          <div className="elSpacerCopy4">
            <div />
          </div>
          
          <div className="elSpacer3">
            <div />
          </div>
          
          <div className="elButton">
            <Button className="actionFont" style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.component1_button_703167}
            </Button>
          </div>
          
          <div className="elSpacer4">
            <div />
          </div>
        </div>
        
      </div>
    )
  }
  
}
