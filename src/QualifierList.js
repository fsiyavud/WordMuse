import React, { Component } from 'react';
import './App.css';
import btn_icon_363158 from './images/btn_icon_363158.png';
import btn_icon_731404 from './images/btn_icon_731404.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class QualifierList extends Component {

  // Properties used by this component:
  // visualStateIndex

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
      fieldCopy7: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_topics'] : '') || '',
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
      fieldCopy: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_means_text'] : '') || '',
      field: '',
      fieldCopy2: '',
      fieldCopy3: '',
      fieldCopy4: '',
      fieldCopy5: '',
      fieldCopy6: '',
      fieldCopy7: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_topics'] : '') || '',
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

  componentDidUpdate(prevProps) {
  }

  // --- Functions for component state index 0 (1 of 2) --- 
  
  textInputChanged_state0_elFieldCopy599970 = (event) => {
    this.setState({fieldCopy: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_means_text", event.target.value);
  }
  
  textInputChanged_state0_elField962979 = (event) => {
    this.setState({field: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_rhy", event.target.value);
  }
  
  textInputChanged_state0_elFieldCopy2539160 = (event) => {
    this.setState({fieldCopy2: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_aprhy", event.target.value);
  }
  
  textInputChanged_state0_elFieldCopy3422729 = (event) => {
    this.setState({fieldCopy3: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_sou", event.target.value);
  }
  
  textInputChanged_state0_elFieldCopy4368127 = (event) => {
    this.setState({fieldCopy4: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_homophone", event.target.value);
  }
  
  textInputChanged_state0_elFieldCopy529868 = (event) => {
    this.setState({fieldCopy5: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_adj", event.target.value);
  }
  
  textInputChanged_state0_elFieldCopy6813930 = (event) => {
    this.setState({fieldCopy6: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_noun", event.target.value);
  }
  
  onClick_state0_elIconButton363158 = (ev) => {
    let newVal = "1";
    this.props.appActions.updateDataSlot('ds_topic_breakout', newVal);
  
  
  }
  
  
  textInputChanged_state0_elFieldCopy71022150 = (event) => {
    this.setState({fieldCopy7: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_topics", event.target.value);
  }
  
  textInputChanged_state0_elFieldCopy8897518 = (event) => {
    this.setState({fieldCopy8: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_triggers", event.target.value);
  }
  
  textInputChanged_state0_elFieldCopy9130239 = (event) => {
    this.setState({fieldCopy9: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_antonym", event.target.value);
  }
  
  textInputChanged_state0_elFieldCopy10374562 = (event) => {
    this.setState({fieldCopy10: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_next", event.target.value);
  }
  
  textInputChanged_state0_elFieldCopy111016408 = (event) => {
    this.setState({fieldCopy11: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_prev", event.target.value);
  }
  
  textInputChanged_state0_elFieldCopy12780023 = (event) => {
    this.setState({fieldCopy12: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_spells", event.target.value);
  }
  
  textInputChanged_state0_elFieldCopy13624166 = (event) => {
    this.setState({fieldCopy13: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_synonym", event.target.value);
  }
  
  textInputChanged_state0_elFieldCopy1898011 = (event) => {
    this.setState({fieldCopy18: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_cons", event.target.value);
  }
  
  textInputChanged_state0_elFieldCopy14923486 = (event) => {
    this.setState({fieldCopy14: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_category", event.target.value);
  }
  
  textInputChanged_state0_elFieldCopy15161546 = (event) => {
    this.setState({fieldCopy15: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_category_item", event.target.value);
  }
  
  textInputChanged_state0_elFieldCopy16499087 = (event) => {
    this.setState({fieldCopy16: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_whole", event.target.value);
  }
  
  textInputChanged_state0_elFieldCopy17965377 = (event) => {
    this.setState({fieldCopy17: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_part", event.target.value);
  }
  
  onClick_state0_elButton977203 = (ev) => {
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
  
  
  onClick_state0_elButtonCopy824148 = (ev) => {
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
  
  
  renderState0() {
    const style_state0_elTextCopy18953607 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_state0_elText801408 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const value_fieldCopy = (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_means_text'] : '');
    
    const style_state0_elFieldCopy599970 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state0_elTextCopy52597 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state0_elField962979 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state0_elTextCopy2252438 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state0_elFieldCopy2539160 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state0_elTextCopy3288884 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state0_elFieldCopy3422729 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state0_elTextCopy4418839 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state0_elFieldCopy4368127 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state0_elTextCopy5744557 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state0_elFieldCopy529868 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state0_elTextCopy6873741 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state0_elFieldCopy6813930 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state0_elTextCopy7485125 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state0_elIconButton363158 = {
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
    
    const value_fieldCopy7 = (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_topics'] : '');
    
    const style_state0_elFieldCopy71022150 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state0_elTextCopy8959482 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state0_elFieldCopy8897518 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state0_elTextCopy9995526 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state0_elFieldCopy9130239 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state0_elTextCopy10398832 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state0_elFieldCopy10374562 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state0_elTextCopy11259967 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state0_elFieldCopy111016408 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state0_elTextCopy12235447 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state0_elIconButtonCopy731404 = {
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
    
    const style_state0_elFieldCopy12780023 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state0_elTextCopy13846102 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state0_elFieldCopy13624166 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state0_elTextCopy19610471 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state0_elFieldCopy1898011 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state0_elTextCopy14739580 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state0_elFieldCopy14923486 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state0_elTextCopy15792466 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state0_elFieldCopy15161546 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state0_elTextCopy16585003 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state0_elFieldCopy16499087 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state0_elTextCopy17422400 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state0_elFieldCopy17965377 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_state0_elButton977203 = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    const style_state0_elButtonCopy824148 = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    const style_state0_elLine219922 = {
      borderTop: '1px solid black',
     };
    
    return (
      <div className="QualifierList appBg">
        <div className="layoutFlow">
          <div className="state0_elTextCopy18953607">
            <div className="headlineFont" style={style_state0_elTextCopy18953607}>
              <div>{this.props.locStrings.qualifierlist_textcopy18_953607}</div>
            </div>
          </div>
          
          <div className="flowRow flowRow_QualifierList_state0_elText801408_801408">
          <div className="state0_elText801408">
            <div className="actionFont" style={style_state0_elText801408}>
              <div>{this.props.locStrings.component1_text_801408}</div>
            </div>
          </div>
          
          </div>
          <div className="state0_elFieldCopy599970">
            <input className="baseFont" style={style_state0_elFieldCopy599970} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy_599970} onChange={this.textInputChanged_state0_elFieldCopy599970} value={value_fieldCopy !== undefined ? value_fieldCopy : ''}  />
          </div>
          
          <div className="state0_elSpacer3164289">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state0_elTextCopy52597_52597">
          <div className="state0_elTextCopy52597">
            <div className="actionFont" style={style_state0_elTextCopy52597}>
              <div>{this.props.locStrings.qualifierlist_textcopy_52597}</div>
            </div>
          </div>
          
          </div>
          <div className="state0_elField962979">
            <input className="baseFont" style={style_state0_elField962979} type="text" placeholder={this.props.locStrings.component1_field_962979} onChange={this.textInputChanged_state0_elField962979} value={this.state.field}  />
          </div>
          
          <div className="state0_elSpacerCopy856827">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state0_elTextCopy2252438_252438">
          <div className="state0_elTextCopy2252438">
            <div className="actionFont" style={style_state0_elTextCopy2252438}>
              <div>{this.props.locStrings.qualifierlist_textcopy2_252438}</div>
            </div>
          </div>
          
          </div>
          <div className="state0_elFieldCopy2539160">
            <input className="baseFont" style={style_state0_elFieldCopy2539160} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy2_539160} onChange={this.textInputChanged_state0_elFieldCopy2539160} value={this.state.fieldCopy2}  />
          </div>
          
          <div className="state0_elSpacerCopy2468484">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state0_elTextCopy3288884_288884">
          <div className="state0_elTextCopy3288884">
            <div className="actionFont" style={style_state0_elTextCopy3288884}>
              <div>{this.props.locStrings.qualifierlist_textcopy3_288884}</div>
            </div>
          </div>
          
          </div>
          <div className="state0_elFieldCopy3422729">
            <input className="baseFont" style={style_state0_elFieldCopy3422729} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy3_422729} onChange={this.textInputChanged_state0_elFieldCopy3422729} value={this.state.fieldCopy3}  />
          </div>
          
          <div className="state0_elSpacerCopy3276226">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state0_elTextCopy4418839_418839">
          <div className="state0_elTextCopy4418839">
            <div className="actionFont" style={style_state0_elTextCopy4418839}>
              <div>{this.props.locStrings.qualifierlist_textcopy4_418839}</div>
            </div>
          </div>
          
          </div>
          <div className="state0_elFieldCopy4368127">
            <input className="baseFont" style={style_state0_elFieldCopy4368127} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy4_368127} onChange={this.textInputChanged_state0_elFieldCopy4368127} value={this.state.fieldCopy4}  />
          </div>
          
          <div className="state0_elSpacerCopy4901799">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state0_elTextCopy5744557_744557">
          <div className="state0_elTextCopy5744557">
            <div className="actionFont" style={style_state0_elTextCopy5744557}>
              <div>{this.props.locStrings.qualifierlist_textcopy5_744557}</div>
            </div>
          </div>
          
          </div>
          <div className="state0_elFieldCopy529868">
            <input className="baseFont" style={style_state0_elFieldCopy529868} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy5_29868} onChange={this.textInputChanged_state0_elFieldCopy529868} value={this.state.fieldCopy5}  />
          </div>
          
          <div className="state0_elSpacerCopy5756594">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state0_elTextCopy6873741_873741">
          <div className="state0_elTextCopy6873741">
            <div className="actionFont" style={style_state0_elTextCopy6873741}>
              <div>{this.props.locStrings.qualifierlist_textcopy6_873741}</div>
            </div>
          </div>
          
          </div>
          <div className="state0_elFieldCopy6813930">
            <input className="baseFont" style={style_state0_elFieldCopy6813930} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy6_813930} onChange={this.textInputChanged_state0_elFieldCopy6813930} value={this.state.fieldCopy6}  />
          </div>
          
          <div className="state0_elSpacerCopy6887626">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state0_elTextCopy7485125_485125">
          <div className="state0_elTextCopy7485125">
            <div className="actionFont" style={style_state0_elTextCopy7485125}>
              <div>{this.props.locStrings.qualifierlist_textcopy7_485125}</div>
            </div>
          </div>
          
          <div className="state0_elIconButton363158">
            <button className="actionFont" style={style_state0_elIconButton363158} onClick={this.onClick_state0_elIconButton363158}  />
          </div>
          
          </div>
          <div className="state0_elFieldCopy71022150">
            <input className="baseFont" style={style_state0_elFieldCopy71022150} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy7_1022150} onChange={this.textInputChanged_state0_elFieldCopy71022150} value={value_fieldCopy7 !== undefined ? value_fieldCopy7 : ''}  />
          </div>
          
          <div className="state0_elSpacerCopy7885885">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state0_elTextCopy8959482_959482">
          <div className="state0_elTextCopy8959482">
            <div className="actionFont" style={style_state0_elTextCopy8959482}>
              <div>{this.props.locStrings.qualifierlist_textcopy8_959482}</div>
            </div>
          </div>
          
          </div>
          <div className="state0_elFieldCopy8897518">
            <input className="baseFont" style={style_state0_elFieldCopy8897518} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy8_897518} onChange={this.textInputChanged_state0_elFieldCopy8897518} value={this.state.fieldCopy8}  />
          </div>
          
          <div className="state0_elSpacerCopy8489848">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state0_elTextCopy9995526_995526">
          <div className="state0_elTextCopy9995526">
            <div className="actionFont" style={style_state0_elTextCopy9995526}>
              <div>{this.props.locStrings.qualifierlist_textcopy9_995526}</div>
            </div>
          </div>
          
          </div>
          <div className="state0_elFieldCopy9130239">
            <input className="baseFont" style={style_state0_elFieldCopy9130239} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy9_130239} onChange={this.textInputChanged_state0_elFieldCopy9130239} value={this.state.fieldCopy9}  />
          </div>
          
          <div className="state0_elSpacerCopy9602256">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state0_elTextCopy10398832_398832">
          <div className="state0_elTextCopy10398832">
            <div className="actionFont" style={style_state0_elTextCopy10398832}>
              <div>{this.props.locStrings.qualifierlist_textcopy10_398832}</div>
            </div>
          </div>
          
          </div>
          <div className="state0_elFieldCopy10374562">
            <input className="baseFont" style={style_state0_elFieldCopy10374562} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy10_374562} onChange={this.textInputChanged_state0_elFieldCopy10374562} value={this.state.fieldCopy10}  />
          </div>
          
          <div className="state0_elSpacerCopy10906390">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state0_elTextCopy11259967_259967">
          <div className="state0_elTextCopy11259967">
            <div className="actionFont" style={style_state0_elTextCopy11259967}>
              <div>{this.props.locStrings.qualifierlist_textcopy11_259967}</div>
            </div>
          </div>
          
          </div>
          <div className="state0_elFieldCopy111016408">
            <input className="baseFont" style={style_state0_elFieldCopy111016408} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy11_1016408} onChange={this.textInputChanged_state0_elFieldCopy111016408} value={this.state.fieldCopy11}  />
          </div>
          
          <div className="state0_elSpacerCopy11172424">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state0_elTextCopy12235447_235447">
          <div className="state0_elTextCopy12235447">
            <div className="actionFont" style={style_state0_elTextCopy12235447}>
              <div>{this.props.locStrings.qualifierlist_textcopy12_235447}</div>
            </div>
          </div>
          
          <div className="state0_elIconButtonCopy731404">
            <button className="actionFont" style={style_state0_elIconButtonCopy731404} />
          </div>
          
          </div>
          <div className="state0_elFieldCopy12780023">
            <input className="baseFont" style={style_state0_elFieldCopy12780023} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy12_780023} onChange={this.textInputChanged_state0_elFieldCopy12780023} value={this.state.fieldCopy12}  />
          </div>
          
          <div className="state0_elSpacerCopy1239395">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state0_elTextCopy13846102_846102">
          <div className="state0_elTextCopy13846102">
            <div className="actionFont" style={style_state0_elTextCopy13846102}>
              <div>{this.props.locStrings.qualifierlist_textcopy13_846102}</div>
            </div>
          </div>
          
          </div>
          <div className="state0_elFieldCopy13624166">
            <input className="baseFont" style={style_state0_elFieldCopy13624166} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy13_624166} onChange={this.textInputChanged_state0_elFieldCopy13624166} value={this.state.fieldCopy13}  />
          </div>
          
          <div className="state0_elSpacerCopy13171269">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state0_elTextCopy19610471_610471">
          <div className="state0_elTextCopy19610471">
            <div className="actionFont" style={style_state0_elTextCopy19610471}>
              <div>{this.props.locStrings.qualifierlist_textcopy19_610471}</div>
            </div>
          </div>
          
          </div>
          <div className="state0_elFieldCopy1898011">
            <input className="baseFont" style={style_state0_elFieldCopy1898011} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy18_98011} onChange={this.textInputChanged_state0_elFieldCopy1898011} value={this.state.fieldCopy18}  />
          </div>
          
          <div className="state0_elSpacerCopy1812794">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state0_elTextCopy14739580_739580">
          <div className="state0_elTextCopy14739580">
            <div className="actionFont" style={style_state0_elTextCopy14739580}>
              <div>{this.props.locStrings.qualifierlist_textcopy14_739580}</div>
            </div>
          </div>
          
          </div>
          <div className="state0_elFieldCopy14923486">
            <input className="baseFont" style={style_state0_elFieldCopy14923486} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy14_923486} onChange={this.textInputChanged_state0_elFieldCopy14923486} value={this.state.fieldCopy14}  />
          </div>
          
          <div className="state0_elSpacerCopy14244408">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state0_elTextCopy15792466_792466">
          <div className="state0_elTextCopy15792466">
            <div className="actionFont" style={style_state0_elTextCopy15792466}>
              <div>{this.props.locStrings.qualifierlist_textcopy15_792466}</div>
            </div>
          </div>
          
          </div>
          <div className="state0_elFieldCopy15161546">
            <input className="baseFont" style={style_state0_elFieldCopy15161546} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy15_161546} onChange={this.textInputChanged_state0_elFieldCopy15161546} value={this.state.fieldCopy15}  />
          </div>
          
          <div className="state0_elSpacerCopy1554611">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state0_elTextCopy16585003_585003">
          <div className="state0_elTextCopy16585003">
            <div className="actionFont" style={style_state0_elTextCopy16585003}>
              <div>{this.props.locStrings.qualifierlist_textcopy16_585003}</div>
            </div>
          </div>
          
          </div>
          <div className="state0_elFieldCopy16499087">
            <input className="baseFont" style={style_state0_elFieldCopy16499087} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy16_499087} onChange={this.textInputChanged_state0_elFieldCopy16499087} value={this.state.fieldCopy16}  />
          </div>
          
          <div className="state0_elSpacerCopy16334929">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state0_elTextCopy17422400_422400">
          <div className="state0_elTextCopy17422400">
            <div className="actionFont" style={style_state0_elTextCopy17422400}>
              <div>{this.props.locStrings.qualifierlist_textcopy17_422400}</div>
            </div>
          </div>
          
          </div>
          <div className="state0_elFieldCopy17965377">
            <input className="baseFont" style={style_state0_elFieldCopy17965377} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy17_965377} onChange={this.textInputChanged_state0_elFieldCopy17965377} value={this.state.fieldCopy17}  />
          </div>
          
          <div className="state0_elSpacerCopy17780108">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state0_elButton977203_977203">
          <div className="state0_elButton977203">
            <Button className="actionFont" style={style_state0_elButton977203}  color="accent" onClick={this.onClick_state0_elButton977203} >
              {this.props.locStrings.qualifierlist_button_977203}
            </Button>
          </div>
          
          </div>
          <div className="state0_elButtonCopy824148">
            <Button className="actionFont" style={style_state0_elButtonCopy824148}  color="accent" onClick={this.onClick_state0_elButtonCopy824148} >
              {this.props.locStrings.qualifierlist_buttoncopy_824148}
            </Button>
          </div>
          
          <div className="state0_elSpacer79684">
            <div />
          </div>
          
          <div className="state0_elLine219922">
            <div style={style_state0_elLine219922} />
          </div>
          
          <div className="state0_elSpacer2180654">
            <div />
          </div>
        </div>
        
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 2) --- 
  
  textInputChanged_state1_elFieldCopy599970 = (event) => {
    this.setState({fieldCopy: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_means_text", event.target.value);
  }
  
  textInputChanged_state1_elField962979 = (event) => {
    this.setState({field: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_rhy", event.target.value);
  }
  
  textInputChanged_state1_elFieldCopy2539160 = (event) => {
    this.setState({fieldCopy2: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_aprhy", event.target.value);
  }
  
  textInputChanged_state1_elFieldCopy3422729 = (event) => {
    this.setState({fieldCopy3: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_sou", event.target.value);
  }
  
  textInputChanged_state1_elFieldCopy4368127 = (event) => {
    this.setState({fieldCopy4: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_homophone", event.target.value);
  }
  
  textInputChanged_state1_elFieldCopy529868 = (event) => {
    this.setState({fieldCopy5: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_adj", event.target.value);
  }
  
  textInputChanged_state1_elFieldCopy6813930 = (event) => {
    this.setState({fieldCopy6: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_noun", event.target.value);
  }
  
  onClick_state1_elIconButton363158 = (ev) => {
    let newVal = "1";
    this.props.appActions.updateDataSlot('ds_topic_breakout', newVal);
  
  
  }
  
  
  textInputChanged_state1_elFieldCopy71022150 = (event) => {
    this.setState({fieldCopy7: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_topics", event.target.value);
  }
  
  textInputChanged_state1_elFieldCopy8897518 = (event) => {
    this.setState({fieldCopy8: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_triggers", event.target.value);
  }
  
  textInputChanged_state1_elFieldCopy9130239 = (event) => {
    this.setState({fieldCopy9: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_antonym", event.target.value);
  }
  
  textInputChanged_state1_elFieldCopy10374562 = (event) => {
    this.setState({fieldCopy10: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_next", event.target.value);
  }
  
  textInputChanged_state1_elFieldCopy111016408 = (event) => {
    this.setState({fieldCopy11: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_prev", event.target.value);
  }
  
  textInputChanged_state1_elFieldCopy12780023 = (event) => {
    this.setState({fieldCopy12: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_spells", event.target.value);
  }
  
  textInputChanged_state1_elFieldCopy13624166 = (event) => {
    this.setState({fieldCopy13: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_synonym", event.target.value);
  }
  
  textInputChanged_state1_elFieldCopy1898011 = (event) => {
    this.setState({fieldCopy18: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_cons", event.target.value);
  }
  
  textInputChanged_state1_elFieldCopy14923486 = (event) => {
    this.setState({fieldCopy14: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_category", event.target.value);
  }
  
  textInputChanged_state1_elFieldCopy15161546 = (event) => {
    this.setState({fieldCopy15: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_category_item", event.target.value);
  }
  
  textInputChanged_state1_elFieldCopy16499087 = (event) => {
    this.setState({fieldCopy16: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_whole", event.target.value);
  }
  
  textInputChanged_state1_elFieldCopy17965377 = (event) => {
    this.setState({fieldCopy17: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_part", event.target.value);
  }
  
  onClick_state1_elButton977203 = (ev) => {
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
  
  
  onClick_state1_elButtonCopy824148 = (ev) => {
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
  
  
  renderState1() {
    const style_state1_elTextCopy18953607 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_state1_elText801408 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const value_fieldCopy = (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_means_text'] : '');
    
    const style_state1_elFieldCopy599970 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state1_elTextCopy52597 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state1_elField962979 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state1_elTextCopy2252438 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state1_elFieldCopy2539160 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state1_elTextCopy3288884 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state1_elFieldCopy3422729 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state1_elTextCopy4418839 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state1_elFieldCopy4368127 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state1_elTextCopy5744557 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state1_elFieldCopy529868 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state1_elTextCopy6873741 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state1_elFieldCopy6813930 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state1_elTextCopy7485125 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state1_elIconButton363158 = {
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
    
    const value_fieldCopy7 = (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_topics'] : '');
    
    const style_state1_elFieldCopy71022150 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state1_elTextCopy8959482 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state1_elFieldCopy8897518 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state1_elTextCopy9995526 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state1_elFieldCopy9130239 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state1_elTextCopy10398832 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state1_elFieldCopy10374562 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state1_elTextCopy11259967 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state1_elFieldCopy111016408 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state1_elTextCopy12235447 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state1_elIconButtonCopy731404 = {
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
    
    const style_state1_elFieldCopy12780023 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state1_elTextCopy13846102 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state1_elFieldCopy13624166 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state1_elTextCopy19610471 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state1_elFieldCopy1898011 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state1_elTextCopy14739580 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state1_elFieldCopy14923486 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state1_elTextCopy15792466 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state1_elFieldCopy15161546 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state1_elTextCopy16585003 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state1_elFieldCopy16499087 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state1_elTextCopy17422400 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state1_elFieldCopy17965377 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_state1_elButton977203 = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    const style_state1_elButtonCopy824148 = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    const style_state1_elLine219922 = {
      borderTop: '1px solid black',
     };
    
    return (
      <div className="QualifierList appBg">
        <div className="layoutFlow">
          <div className="state1_elTextCopy18953607">
            <div className="headlineFont" style={style_state1_elTextCopy18953607}>
              <div>{this.props.locStrings.qualifierlist_textcopy18_953607}</div>
            </div>
          </div>
          
          <div className="flowRow flowRow_QualifierList_state1_elText801408_801408">
          <div className="state1_elText801408">
            <div className="actionFont" style={style_state1_elText801408}>
              <div>{this.props.locStrings.component1_text_801408}</div>
            </div>
          </div>
          
          </div>
          <div className="state1_elFieldCopy599970">
            <input className="baseFont" style={style_state1_elFieldCopy599970} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy_599970} onChange={this.textInputChanged_state1_elFieldCopy599970} value={value_fieldCopy !== undefined ? value_fieldCopy : ''}  />
          </div>
          
          <div className="state1_elSpacer3164289">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state1_elTextCopy52597_52597">
          <div className="state1_elTextCopy52597">
            <div className="actionFont" style={style_state1_elTextCopy52597}>
              <div>{this.props.locStrings.qualifierlist_textcopy_52597}</div>
            </div>
          </div>
          
          </div>
          <div className="state1_elField962979">
            <input className="baseFont" style={style_state1_elField962979} type="text" placeholder={this.props.locStrings.component1_field_962979} onChange={this.textInputChanged_state1_elField962979} value={this.state.field}  />
          </div>
          
          <div className="state1_elSpacerCopy856827">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state1_elTextCopy2252438_252438">
          <div className="state1_elTextCopy2252438">
            <div className="actionFont" style={style_state1_elTextCopy2252438}>
              <div>{this.props.locStrings.qualifierlist_textcopy2_252438}</div>
            </div>
          </div>
          
          </div>
          <div className="state1_elFieldCopy2539160">
            <input className="baseFont" style={style_state1_elFieldCopy2539160} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy2_539160} onChange={this.textInputChanged_state1_elFieldCopy2539160} value={this.state.fieldCopy2}  />
          </div>
          
          <div className="state1_elSpacerCopy2468484">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state1_elTextCopy3288884_288884">
          <div className="state1_elTextCopy3288884">
            <div className="actionFont" style={style_state1_elTextCopy3288884}>
              <div>{this.props.locStrings.qualifierlist_textcopy3_288884}</div>
            </div>
          </div>
          
          </div>
          <div className="state1_elFieldCopy3422729">
            <input className="baseFont" style={style_state1_elFieldCopy3422729} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy3_422729} onChange={this.textInputChanged_state1_elFieldCopy3422729} value={this.state.fieldCopy3}  />
          </div>
          
          <div className="state1_elSpacerCopy3276226">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state1_elTextCopy4418839_418839">
          <div className="state1_elTextCopy4418839">
            <div className="actionFont" style={style_state1_elTextCopy4418839}>
              <div>{this.props.locStrings.qualifierlist_textcopy4_418839}</div>
            </div>
          </div>
          
          </div>
          <div className="state1_elFieldCopy4368127">
            <input className="baseFont" style={style_state1_elFieldCopy4368127} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy4_368127} onChange={this.textInputChanged_state1_elFieldCopy4368127} value={this.state.fieldCopy4}  />
          </div>
          
          <div className="state1_elSpacerCopy4901799">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state1_elTextCopy5744557_744557">
          <div className="state1_elTextCopy5744557">
            <div className="actionFont" style={style_state1_elTextCopy5744557}>
              <div>{this.props.locStrings.qualifierlist_textcopy5_744557}</div>
            </div>
          </div>
          
          </div>
          <div className="state1_elFieldCopy529868">
            <input className="baseFont" style={style_state1_elFieldCopy529868} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy5_29868} onChange={this.textInputChanged_state1_elFieldCopy529868} value={this.state.fieldCopy5}  />
          </div>
          
          <div className="state1_elSpacerCopy5756594">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state1_elTextCopy6873741_873741">
          <div className="state1_elTextCopy6873741">
            <div className="actionFont" style={style_state1_elTextCopy6873741}>
              <div>{this.props.locStrings.qualifierlist_textcopy6_873741}</div>
            </div>
          </div>
          
          </div>
          <div className="state1_elFieldCopy6813930">
            <input className="baseFont" style={style_state1_elFieldCopy6813930} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy6_813930} onChange={this.textInputChanged_state1_elFieldCopy6813930} value={this.state.fieldCopy6}  />
          </div>
          
          <div className="state1_elSpacerCopy6887626">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state1_elTextCopy7485125_485125">
          <div className="state1_elTextCopy7485125">
            <div className="actionFont" style={style_state1_elTextCopy7485125}>
              <div>{this.props.locStrings.qualifierlist_textcopy7_485125}</div>
            </div>
          </div>
          
          <div className="state1_elIconButton363158">
            <button className="actionFont" style={style_state1_elIconButton363158} onClick={this.onClick_state1_elIconButton363158}  />
          </div>
          
          </div>
          <div className="state1_elFieldCopy71022150">
            <input className="baseFont" style={style_state1_elFieldCopy71022150} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy7_1022150} onChange={this.textInputChanged_state1_elFieldCopy71022150} value={value_fieldCopy7 !== undefined ? value_fieldCopy7 : ''}  />
          </div>
          
          <div className="state1_elSpacerCopy7885885">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state1_elTextCopy8959482_959482">
          <div className="state1_elTextCopy8959482">
            <div className="actionFont" style={style_state1_elTextCopy8959482}>
              <div>{this.props.locStrings.qualifierlist_textcopy8_959482}</div>
            </div>
          </div>
          
          </div>
          <div className="state1_elFieldCopy8897518">
            <input className="baseFont" style={style_state1_elFieldCopy8897518} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy8_897518} onChange={this.textInputChanged_state1_elFieldCopy8897518} value={this.state.fieldCopy8}  />
          </div>
          
          <div className="state1_elSpacerCopy8489848">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state1_elTextCopy9995526_995526">
          <div className="state1_elTextCopy9995526">
            <div className="actionFont" style={style_state1_elTextCopy9995526}>
              <div>{this.props.locStrings.qualifierlist_textcopy9_995526}</div>
            </div>
          </div>
          
          </div>
          <div className="state1_elFieldCopy9130239">
            <input className="baseFont" style={style_state1_elFieldCopy9130239} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy9_130239} onChange={this.textInputChanged_state1_elFieldCopy9130239} value={this.state.fieldCopy9}  />
          </div>
          
          <div className="state1_elSpacerCopy9602256">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state1_elTextCopy10398832_398832">
          <div className="state1_elTextCopy10398832">
            <div className="actionFont" style={style_state1_elTextCopy10398832}>
              <div>{this.props.locStrings.qualifierlist_textcopy10_398832}</div>
            </div>
          </div>
          
          </div>
          <div className="state1_elFieldCopy10374562">
            <input className="baseFont" style={style_state1_elFieldCopy10374562} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy10_374562} onChange={this.textInputChanged_state1_elFieldCopy10374562} value={this.state.fieldCopy10}  />
          </div>
          
          <div className="state1_elSpacerCopy10906390">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state1_elTextCopy11259967_259967">
          <div className="state1_elTextCopy11259967">
            <div className="actionFont" style={style_state1_elTextCopy11259967}>
              <div>{this.props.locStrings.qualifierlist_textcopy11_259967}</div>
            </div>
          </div>
          
          </div>
          <div className="state1_elFieldCopy111016408">
            <input className="baseFont" style={style_state1_elFieldCopy111016408} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy11_1016408} onChange={this.textInputChanged_state1_elFieldCopy111016408} value={this.state.fieldCopy11}  />
          </div>
          
          <div className="state1_elSpacerCopy11172424">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state1_elTextCopy12235447_235447">
          <div className="state1_elTextCopy12235447">
            <div className="actionFont" style={style_state1_elTextCopy12235447}>
              <div>{this.props.locStrings.qualifierlist_textcopy12_235447}</div>
            </div>
          </div>
          
          <div className="state1_elIconButtonCopy731404">
            <button className="actionFont" style={style_state1_elIconButtonCopy731404} />
          </div>
          
          </div>
          <div className="state1_elFieldCopy12780023">
            <input className="baseFont" style={style_state1_elFieldCopy12780023} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy12_780023} onChange={this.textInputChanged_state1_elFieldCopy12780023} value={this.state.fieldCopy12}  />
          </div>
          
          <div className="state1_elSpacerCopy1239395">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state1_elTextCopy13846102_846102">
          <div className="state1_elTextCopy13846102">
            <div className="actionFont" style={style_state1_elTextCopy13846102}>
              <div>{this.props.locStrings.qualifierlist_textcopy13_846102}</div>
            </div>
          </div>
          
          </div>
          <div className="state1_elFieldCopy13624166">
            <input className="baseFont" style={style_state1_elFieldCopy13624166} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy13_624166} onChange={this.textInputChanged_state1_elFieldCopy13624166} value={this.state.fieldCopy13}  />
          </div>
          
          <div className="state1_elSpacerCopy13171269">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state1_elTextCopy19610471_610471">
          <div className="state1_elTextCopy19610471">
            <div className="actionFont" style={style_state1_elTextCopy19610471}>
              <div>{this.props.locStrings.qualifierlist_textcopy19_610471}</div>
            </div>
          </div>
          
          </div>
          <div className="state1_elFieldCopy1898011">
            <input className="baseFont" style={style_state1_elFieldCopy1898011} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy18_98011} onChange={this.textInputChanged_state1_elFieldCopy1898011} value={this.state.fieldCopy18}  />
          </div>
          
          <div className="state1_elSpacerCopy1812794">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state1_elTextCopy14739580_739580">
          <div className="state1_elTextCopy14739580">
            <div className="actionFont" style={style_state1_elTextCopy14739580}>
              <div>{this.props.locStrings.qualifierlist_textcopy14_739580}</div>
            </div>
          </div>
          
          </div>
          <div className="state1_elFieldCopy14923486">
            <input className="baseFont" style={style_state1_elFieldCopy14923486} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy14_923486} onChange={this.textInputChanged_state1_elFieldCopy14923486} value={this.state.fieldCopy14}  />
          </div>
          
          <div className="state1_elSpacerCopy14244408">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state1_elTextCopy15792466_792466">
          <div className="state1_elTextCopy15792466">
            <div className="actionFont" style={style_state1_elTextCopy15792466}>
              <div>{this.props.locStrings.qualifierlist_textcopy15_792466}</div>
            </div>
          </div>
          
          </div>
          <div className="state1_elFieldCopy15161546">
            <input className="baseFont" style={style_state1_elFieldCopy15161546} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy15_161546} onChange={this.textInputChanged_state1_elFieldCopy15161546} value={this.state.fieldCopy15}  />
          </div>
          
          <div className="state1_elSpacerCopy1554611">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state1_elTextCopy16585003_585003">
          <div className="state1_elTextCopy16585003">
            <div className="actionFont" style={style_state1_elTextCopy16585003}>
              <div>{this.props.locStrings.qualifierlist_textcopy16_585003}</div>
            </div>
          </div>
          
          </div>
          <div className="state1_elFieldCopy16499087">
            <input className="baseFont" style={style_state1_elFieldCopy16499087} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy16_499087} onChange={this.textInputChanged_state1_elFieldCopy16499087} value={this.state.fieldCopy16}  />
          </div>
          
          <div className="state1_elSpacerCopy16334929">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state1_elTextCopy17422400_422400">
          <div className="state1_elTextCopy17422400">
            <div className="actionFont" style={style_state1_elTextCopy17422400}>
              <div>{this.props.locStrings.qualifierlist_textcopy17_422400}</div>
            </div>
          </div>
          
          </div>
          <div className="state1_elFieldCopy17965377">
            <input className="baseFont" style={style_state1_elFieldCopy17965377} type="text" placeholder={this.props.locStrings.qualifierlist_fieldcopy17_965377} onChange={this.textInputChanged_state1_elFieldCopy17965377} value={this.state.fieldCopy17}  />
          </div>
          
          <div className="state1_elSpacerCopy17780108">
            <div />
          </div>
          
          <div className="flowRow flowRow_QualifierList_state1_elButton977203_977203">
          <div className="state1_elButton977203">
            <Button className="actionFont" style={style_state1_elButton977203}  color="accent" onClick={this.onClick_state1_elButton977203} >
              {this.props.locStrings.qualifierlist_button_977203}
            </Button>
          </div>
          
          </div>
          <div className="state1_elButtonCopy824148">
            <Button className="actionFont" style={style_state1_elButtonCopy824148}  color="accent" onClick={this.onClick_state1_elButtonCopy824148} >
              {this.props.locStrings.qualifierlist_buttoncopy_824148}
            </Button>
          </div>
          
          <div className="state1_elSpacer79684">
            <div />
          </div>
          
          <div className="state1_elLine219922">
            <div style={style_state1_elLine219922} />
          </div>
          
          <div className="state1_elSpacer2180654">
            <div />
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
