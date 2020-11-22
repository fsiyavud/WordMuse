import React, { Component } from 'react';
import './App.css';
import btn_icon_363158 from './images/btn_icon_363158.png';
import btn_icon_731404 from './images/btn_icon_731404.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class QualifierList extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      fieldCopy: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_means_text'] : '') || '',
      field: '',
      fieldCopy2: '',
      fieldCopy3: '',
      fieldCopy4: '',
      fieldCopy5: '',
      fieldCopy6: '',
      fieldCopy7: '',
      fieldCopy8: '',
      fieldCopy9: '',
      fieldCopy10: '',
      fieldCopy11: '',
      fieldCopy12: '',
      fieldCopy13: '',
      fieldCopy18: '',
      fieldCopy14: '',
      fieldCopy15: '',
      fieldCopy16: '',
      fieldCopy17: '',
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  textInputChanged_elFieldCopy = (event) => {
    this.setState({fieldCopy: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_means_text", event.target.value);
  }
  
  textInputChanged_elField = (event) => {
    this.setState({field: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_rhy", event.target.value);
  }
  
  textInputChanged_elFieldCopy2 = (event) => {
    this.setState({fieldCopy2: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_aprhy", event.target.value);
  }
  
  textInputChanged_elFieldCopy3 = (event) => {
    this.setState({fieldCopy3: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_sou", event.target.value);
  }
  
  textInputChanged_elFieldCopy4 = (event) => {
    this.setState({fieldCopy4: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_homophone", event.target.value);
  }
  
  textInputChanged_elFieldCopy5 = (event) => {
    this.setState({fieldCopy5: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_adj", event.target.value);
  }
  
  textInputChanged_elFieldCopy6 = (event) => {
    this.setState({fieldCopy6: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_noun", event.target.value);
  }
  
  onClick_elIconButton = (ev) => {
    let newVal = "1";
    this.props.appActions.updateDataSlot('ds_topic_breakout', newVal);
  
  }
  
  
  textInputChanged_elFieldCopy7 = (event) => {
    this.setState({fieldCopy7: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_topics", event.target.value);
  }
  
  textInputChanged_elFieldCopy8 = (event) => {
    this.setState({fieldCopy8: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_triggers", event.target.value);
  }
  
  textInputChanged_elFieldCopy9 = (event) => {
    this.setState({fieldCopy9: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_antonym", event.target.value);
  }
  
  textInputChanged_elFieldCopy10 = (event) => {
    this.setState({fieldCopy10: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_next", event.target.value);
  }
  
  textInputChanged_elFieldCopy11 = (event) => {
    this.setState({fieldCopy11: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_prev", event.target.value);
  }
  
  textInputChanged_elFieldCopy12 = (event) => {
    this.setState({fieldCopy12: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_spells", event.target.value);
  }
  
  textInputChanged_elFieldCopy13 = (event) => {
    this.setState({fieldCopy13: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_synonym", event.target.value);
  }
  
  textInputChanged_elFieldCopy18 = (event) => {
    this.setState({fieldCopy18: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_cons", event.target.value);
  }
  
  textInputChanged_elFieldCopy14 = (event) => {
    this.setState({fieldCopy14: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_category", event.target.value);
  }
  
  textInputChanged_elFieldCopy15 = (event) => {
    this.setState({fieldCopy15: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_category_item", event.target.value);
  }
  
  textInputChanged_elFieldCopy16 = (event) => {
    this.setState({fieldCopy16: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_whole", event.target.value);
  }
  
  textInputChanged_elFieldCopy17 = (event) => {
    this.setState({fieldCopy17: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_part", event.target.value);
  }
  
  onClick_elButton = (ev) => {
    // Write your script here
    
    function url_join(component, query_string, joiner, param, ds) {
      let str = component.props.appActions.dataSlots[ds].trim();
      let outcome = {
        querystring:"",
        urljoiner:""
      };
      if (str) {
        outcome.querystring = query_string + joiner + param + encodeURIComponent(str);
        outcome.urljoiner = "&";
      } else {
        outcome.querystring = query_string;
        outcome.urljoiner = joiner;
      }
      return outcome;
    }
    
    let query_params = "words";
    let res = {
      querystring:"",
    }
    if (this.props.appActions.dataSlots) {
      res = url_join(this, query_params, "?", "ml=", 'ds_means_text');
      res = url_join(this, res.querystring, res.urljoiner, "rel_rhy=", 'ds_rhy');
      res = url_join(this, res.querystring, res.urljoiner, "rel_nry=", 'ds_aprhy');
      res = url_join(this, res.querystring, res.urljoiner, "sl=", 'ds_sou');
      res = url_join(this, res.querystring, res.urljoiner, "rel_hom=", 'ds_homophone');
      res = url_join(this, res.querystring, res.urljoiner, "rel_jjb=", 'ds_adj');
      res = url_join(this, res.querystring, res.urljoiner, "rel_jja=", 'ds_noun');
      res = url_join(this, res.querystring, res.urljoiner, "topics=", 'ds_topics');
      res = url_join(this, res.querystring, res.urljoiner, "rel_trg=", 'ds_triggers');
      res = url_join(this, res.querystring, res.urljoiner, "rel_ant=", 'ds_antonym');
      res = url_join(this, res.querystring, res.urljoiner, "rel_bga=", 'ds_next');
      res = url_join(this, res.querystring, res.urljoiner, "rel_bgb=", 'ds_prev');
      res = url_join(this, res.querystring, res.urljoiner, "sp=", 'ds_spells');
      res = url_join(this, res.querystring, res.urljoiner, "rel_syn=", 'ds_synonym');
      res = url_join(this, res.querystring, res.urljoiner, "rel_spc=", 'ds_category');
      res = url_join(this, res.querystring, res.urljoiner, "rel_gen=", 'ds_category_item');
      res = url_join(this, res.querystring, res.urljoiner, "rel_par=", 'ds_whole');
      res = url_join(this, res.querystring, res.urljoiner, "rel_com=", 'ds_part');
      res = url_join(this, res.querystring, res.urljoiner, "rel_cns=", 'ds_cons');
    }
    if (res.querystring && res.querystring !== "words") {
      res.querystring = res.querystring + "&md=dfr&ipa=1";
      this.props.appActions.updateDataSlot("ds_datamuse_query_params", res.querystring);
    }
  
    let newVal = "1";
    this.props.appActions.updateDataSlot('ds_arena_init', newVal);
  
  }
  
  
  onClick_elButtonCopy = (ev) => {
    // Write your script here
    // Perform action 'Clear text' on element all text fields.
    this.setState({
      field: "",
    });
    this.setState({
      fieldCopy: "",
    });
    this.setState({
      fieldCopy2: "",
    });
    this.setState({
      fieldCopy3: "",
    });
    this.setState({
      fieldCopy4: "",
    });
    this.setState({
      fieldCopy5: "",
    });
    this.setState({
      fieldCopy6: "",
    });
    this.setState({
      fieldCopy7: "",
    });
    this.setState({
      fieldCopy8: "",
    });
    this.setState({
      fieldCopy9: "",
    });
    this.setState({
      fieldCopy10: "",
    });
    this.setState({
      fieldCopy11: "",
    });
    this.setState({
      fieldCopy12: "",
    });
    this.setState({
      fieldCopy13: "",
    });
    this.setState({
      fieldCopy14: "",
    });
    this.setState({
      fieldCopy15: "",
    });
    this.setState({
      fieldCopy16: "",
    });
    this.setState({
      fieldCopy17: "",
    });
      
  
  }
  
  
  render() {
    const style_elTextCopy18 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const value_fieldCopy = (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_means_text'] : '');
    
    const style_elFieldCopy = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elTextCopy = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elField = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elTextCopy2 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elFieldCopy2 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elTextCopy3 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elFieldCopy3 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elTextCopy4 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elFieldCopy4 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elTextCopy5 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elFieldCopy5 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elTextCopy6 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elFieldCopy6 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elTextCopy7 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elIconButton = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_363158+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '102.000%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    const style_elFieldCopy7 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elTextCopy8 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elFieldCopy8 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elTextCopy9 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elFieldCopy9 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elTextCopy10 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elFieldCopy10 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elTextCopy11 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elFieldCopy11 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elTextCopy12 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elIconButtonCopy = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_731404+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '102.000%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
     };
    
    const style_elFieldCopy12 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elTextCopy13 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elFieldCopy13 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elTextCopy19 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elFieldCopy18 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elTextCopy14 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elFieldCopy14 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elTextCopy15 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elFieldCopy15 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elTextCopy16 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elFieldCopy16 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elTextCopy17 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elFieldCopy17 = {
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
    
    const style_elButtonCopy = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    const style_elLine = {
      borderTop: '1px solid black',
     };
    
    return (
      <div className="QualifierList appBg">
        <div className="layoutFlow">
          <div className="elTextCopy18">
            <div className="headlineFont" style={style_elTextCopy18}>
              <div>{this.props.locStrings.qualifierlist_textcopy18_953607}</div>
            </div>
          </div>
          
          <div className="flowRow flowRow_QualifierList_elText_801408">
          <div className="elText">
            <div className="actionFont" style={style_elText}>
              <div>{this.props.locStrings.component1_text_801408}</div>
            </div>
          </div>
          
          </div>
          <div className="elFieldCopy">
            <input className="baseFont" style={style_elFieldCopy} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy_599970} onChange={this.textInputChanged_elFieldCopy} value={value_fieldCopy !== undefined ? value_fieldCopy : ''}  />
          </div>
          
          <div className="elSpacer3">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_elTextCopy_52597">
          <div className="elTextCopy">
            <div className="actionFont" style={style_elTextCopy}>
              <div>{this.props.locStrings.qualifierlist_textcopy_52597}</div>
            </div>
          </div>
          
          </div>
          <div className="elField">
            <input className="baseFont" style={style_elField} type="text" placeholder={this.props.locStrings.component1_field_962979} onChange={this.textInputChanged_elField} value={this.state.field}  />
          </div>
          
          <div className="elSpacerCopy">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_elTextCopy2_252438">
          <div className="elTextCopy2">
            <div className="actionFont" style={style_elTextCopy2}>
              <div>{this.props.locStrings.qualifierlist_textcopy2_252438}</div>
            </div>
          </div>
          
          </div>
          <div className="elFieldCopy2">
            <input className="baseFont" style={style_elFieldCopy2} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy2_539160} onChange={this.textInputChanged_elFieldCopy2} value={this.state.fieldCopy2}  />
          </div>
          
          <div className="elSpacerCopy2">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_elTextCopy3_288884">
          <div className="elTextCopy3">
            <div className="actionFont" style={style_elTextCopy3}>
              <div>{this.props.locStrings.qualifierlist_textcopy3_288884}</div>
            </div>
          </div>
          
          </div>
          <div className="elFieldCopy3">
            <input className="baseFont" style={style_elFieldCopy3} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy3_422729} onChange={this.textInputChanged_elFieldCopy3} value={this.state.fieldCopy3}  />
          </div>
          
          <div className="elSpacerCopy3">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_elTextCopy4_418839">
          <div className="elTextCopy4">
            <div className="actionFont" style={style_elTextCopy4}>
              <div>{this.props.locStrings.qualifierlist_textcopy4_418839}</div>
            </div>
          </div>
          
          </div>
          <div className="elFieldCopy4">
            <input className="baseFont" style={style_elFieldCopy4} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy4_368127} onChange={this.textInputChanged_elFieldCopy4} value={this.state.fieldCopy4}  />
          </div>
          
          <div className="elSpacerCopy4">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_elTextCopy5_744557">
          <div className="elTextCopy5">
            <div className="actionFont" style={style_elTextCopy5}>
              <div>{this.props.locStrings.qualifierlist_textcopy5_744557}</div>
            </div>
          </div>
          
          </div>
          <div className="elFieldCopy5">
            <input className="baseFont" style={style_elFieldCopy5} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy5_29868} onChange={this.textInputChanged_elFieldCopy5} value={this.state.fieldCopy5}  />
          </div>
          
          <div className="elSpacerCopy5">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_elTextCopy6_873741">
          <div className="elTextCopy6">
            <div className="actionFont" style={style_elTextCopy6}>
              <div>{this.props.locStrings.qualifierlist_textcopy6_873741}</div>
            </div>
          </div>
          
          </div>
          <div className="elFieldCopy6">
            <input className="baseFont" style={style_elFieldCopy6} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy6_813930} onChange={this.textInputChanged_elFieldCopy6} value={this.state.fieldCopy6}  />
          </div>
          
          <div className="elSpacerCopy6">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_elTextCopy7_485125">
          <div className="elTextCopy7">
            <div className="actionFont" style={style_elTextCopy7}>
              <div>{this.props.locStrings.qualifierlist_textcopy7_485125}</div>
            </div>
          </div>
          
          <div className="elIconButton">
            <button className="actionFont" style={style_elIconButton} onClick={this.onClick_elIconButton}  />
          </div>
          
          </div>
          <div className="elFieldCopy7">
            <input className="baseFont" style={style_elFieldCopy7} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy7_1022150} onChange={this.textInputChanged_elFieldCopy7} value={this.state.fieldCopy7}  />
          </div>
          
          <div className="elSpacerCopy7">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_elTextCopy8_959482">
          <div className="elTextCopy8">
            <div className="actionFont" style={style_elTextCopy8}>
              <div>{this.props.locStrings.qualifierlist_textcopy8_959482}</div>
            </div>
          </div>
          
          </div>
          <div className="elFieldCopy8">
            <input className="baseFont" style={style_elFieldCopy8} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy8_897518} onChange={this.textInputChanged_elFieldCopy8} value={this.state.fieldCopy8}  />
          </div>
          
          <div className="elSpacerCopy8">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_elTextCopy9_995526">
          <div className="elTextCopy9">
            <div className="actionFont" style={style_elTextCopy9}>
              <div>{this.props.locStrings.qualifierlist_textcopy9_995526}</div>
            </div>
          </div>
          
          </div>
          <div className="elFieldCopy9">
            <input className="baseFont" style={style_elFieldCopy9} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy9_130239} onChange={this.textInputChanged_elFieldCopy9} value={this.state.fieldCopy9}  />
          </div>
          
          <div className="elSpacerCopy9">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_elTextCopy10_398832">
          <div className="elTextCopy10">
            <div className="actionFont" style={style_elTextCopy10}>
              <div>{this.props.locStrings.qualifierlist_textcopy10_398832}</div>
            </div>
          </div>
          
          </div>
          <div className="elFieldCopy10">
            <input className="baseFont" style={style_elFieldCopy10} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy10_374562} onChange={this.textInputChanged_elFieldCopy10} value={this.state.fieldCopy10}  />
          </div>
          
          <div className="elSpacerCopy10">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_elTextCopy11_259967">
          <div className="elTextCopy11">
            <div className="actionFont" style={style_elTextCopy11}>
              <div>{this.props.locStrings.qualifierlist_textcopy11_259967}</div>
            </div>
          </div>
          
          </div>
          <div className="elFieldCopy11">
            <input className="baseFont" style={style_elFieldCopy11} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy11_1016408} onChange={this.textInputChanged_elFieldCopy11} value={this.state.fieldCopy11}  />
          </div>
          
          <div className="elSpacerCopy11">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_elTextCopy12_235447">
          <div className="elTextCopy12">
            <div className="actionFont" style={style_elTextCopy12}>
              <div>{this.props.locStrings.qualifierlist_textcopy12_235447}</div>
            </div>
          </div>
          
          <div className="elIconButtonCopy">
            <button className="actionFont" style={style_elIconButtonCopy} />
          </div>
          
          </div>
          <div className="elFieldCopy12">
            <input className="baseFont" style={style_elFieldCopy12} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy12_780023} onChange={this.textInputChanged_elFieldCopy12} value={this.state.fieldCopy12}  />
          </div>
          
          <div className="elSpacerCopy12">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_elTextCopy13_846102">
          <div className="elTextCopy13">
            <div className="actionFont" style={style_elTextCopy13}>
              <div>{this.props.locStrings.qualifierlist_textcopy13_846102}</div>
            </div>
          </div>
          
          </div>
          <div className="elFieldCopy13">
            <input className="baseFont" style={style_elFieldCopy13} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy13_624166} onChange={this.textInputChanged_elFieldCopy13} value={this.state.fieldCopy13}  />
          </div>
          
          <div className="elSpacerCopy13">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_elTextCopy19_610471">
          <div className="elTextCopy19">
            <div className="actionFont" style={style_elTextCopy19}>
              <div>{this.props.locStrings.qualifierlist_textcopy19_610471}</div>
            </div>
          </div>
          
          </div>
          <div className="elFieldCopy18">
            <input className="baseFont" style={style_elFieldCopy18} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy18_98011} onChange={this.textInputChanged_elFieldCopy18} value={this.state.fieldCopy18}  />
          </div>
          
          <div className="elSpacerCopy18">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_elTextCopy14_739580">
          <div className="elTextCopy14">
            <div className="actionFont" style={style_elTextCopy14}>
              <div>{this.props.locStrings.qualifierlist_textcopy14_739580}</div>
            </div>
          </div>
          
          </div>
          <div className="elFieldCopy14">
            <input className="baseFont" style={style_elFieldCopy14} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy14_923486} onChange={this.textInputChanged_elFieldCopy14} value={this.state.fieldCopy14}  />
          </div>
          
          <div className="elSpacerCopy14">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_elTextCopy15_792466">
          <div className="elTextCopy15">
            <div className="actionFont" style={style_elTextCopy15}>
              <div>{this.props.locStrings.qualifierlist_textcopy15_792466}</div>
            </div>
          </div>
          
          </div>
          <div className="elFieldCopy15">
            <input className="baseFont" style={style_elFieldCopy15} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy15_161546} onChange={this.textInputChanged_elFieldCopy15} value={this.state.fieldCopy15}  />
          </div>
          
          <div className="elSpacerCopy15">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_elTextCopy16_585003">
          <div className="elTextCopy16">
            <div className="actionFont" style={style_elTextCopy16}>
              <div>{this.props.locStrings.qualifierlist_textcopy16_585003}</div>
            </div>
          </div>
          
          </div>
          <div className="elFieldCopy16">
            <input className="baseFont" style={style_elFieldCopy16} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy16_499087} onChange={this.textInputChanged_elFieldCopy16} value={this.state.fieldCopy16}  />
          </div>
          
          <div className="elSpacerCopy16">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_elTextCopy17_422400">
          <div className="elTextCopy17">
            <div className="actionFont" style={style_elTextCopy17}>
              <div>{this.props.locStrings.qualifierlist_textcopy17_422400}</div>
            </div>
          </div>
          
          </div>
          <div className="elFieldCopy17">
            <input className="baseFont" style={style_elFieldCopy17} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy17_965377} onChange={this.textInputChanged_elFieldCopy17} value={this.state.fieldCopy17}  />
          </div>
          
          <div className="elSpacerCopy17">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_elButton_977203">
          <div className="elButton">
            <Button className="actionFont" style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.qualifierlist_button_977203}
            </Button>
          </div>
          
          </div>
          <div className="elButtonCopy">
            <Button className="actionFont" style={style_elButtonCopy}  color="accent" onClick={this.onClick_elButtonCopy} >
              {this.props.locStrings.qualifierlist_buttoncopy_824148}
            </Button>
          </div>
          
          <div className="elSpacer">
            <div />
          </div>
          
          <div className="elLine">
            <div style={style_elLine} />
          </div>
          
          <div className="elSpacer2">
            <div />
          </div>
        </div>
        
      </div>
    )
  }
  
}
