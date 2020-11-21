import React, { Component } from 'react';
import './App.css';
import Noresult from './Noresult';
import WordListItem from './WordListItem';

// UI framework component imports
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

export default class Arena extends Component {

  // Properties used by this component:
  // visualStateIndex

  constructor(props) {
    super(props);
    
    this.state = {
      field: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_means_text'] : '') || '',
      field: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_means_text'] : '') || '',
      field: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_means_text'] : '') || '',
      field: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_means_text'] : '') || '',
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  // --- Functions for component state index 0 (1 of 4) --- 
  
  textInputChanged_state0_elField612324 = (event) => {
    this.setState({field: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_means_text", event.target.value);
  }
  
  onClick_state0_elButton = (ev) => {
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
     
    /*
      let str = this.props.appActions.dataSlots['ds_means_text'].trim();
      let urljoiner = "?";
      if (str) {
        query_params = query_params + urljoiner + "ml=" + encodeURIComponent(str);
        if (url_joiner = "?") {
          url_joiner = "&";
        }
      }
      str = this.props.appActions.dataSlots['ds_rhy'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rhy=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_aprhy'].trim();
      if (str) {
        query_params = query_params + urljoiner + "apr=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_sou'].trim();
      if (str) {
        query_params = query_params + urljoiner + "sl=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_homophone'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_hom=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_adj'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_jjb=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_noun'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_jja=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_topics'].trim();
      if (str) {
        query_params = query_params + urljoiner + "topics=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_triggers'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_trg=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_antonym'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_ant=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_next'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_bga=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_prev'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_bgb=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_spells'].trim();
      if (str) {
        query_params = query_params + urljoiner + "sp=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_synonym'].trim();
      if (str) {
        query_params = query_params + "&" + "rel_syn=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_category'].trim();
      if (str) {
        query_params = query_params + "&" + "rel_spc=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_category_item'].trim();
      if (str) {
        query_params = query_params + "&" + "rel_gen=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_whole'].trim();
      if (str) {
        query_params = query_params + "&" + "rel_par=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_part'].trim();
      if (str) {
        query_params = query_params + "&" + "rel_com=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_cons'].trim();
      if (str) {
        query_params = query_params + "&" + "rel_cns=" + encodeURIComponent(str);
      }
      */
    }
    if (res.querystring && res.querystring != "words") {
      res.querystring = res.querystring + "&md=dfr&ipa=1";
      this.props.appActions.updateDataSlot("ds_datamuse_query_params", res.querystring);
    }
  
    let newVal = "1";
    this.props.appActions.updateDataSlot('ds_arena_init', newVal);
  
  }
  
  
  onClick_state0_elButton2 = (ev) => {
    let newVal = "1";
    this.props.appActions.updateDataSlot('ds_leftmenu_driver', newVal);
  
  }
  
  
  renderState0() {
    // eslint-disable-next-line
    const dataSheet_datamuse3 = this.props.appActions.getDataSheet('datamuse3');
    const style_state0_elText413992 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    const value_field = (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_means_text'] : '');
    
    const style_state0_elField612324 = {
      display: 'block',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_state0_elButton = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    const style_state0_elButton2 = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    let cssClass_progress = 'circularProgressIndicator';
    if (this.props.appActions.isLoading()) 
      cssClass_progress += ' circularProgressIndicator-active';
    
    
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    
    // Show head item only if list is empty.
    if (this.props.appActions.getDataSheet('datamuse3').items.length < 1) {
      listComps_list['_head'] = <Noresult appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;  // Head item for this list
      items_list.push({key: '_head', _componentId: '_head'});  // A data item to indicate the head item
    }
    
    let filterItems_list = items => {
      // This function filters items for the List / Grid element.
      // There is a variable named 'items' that provides item values.
      this.props.appActions.updateDataSlot("ds_datamuse_count", items.length);
      return items;
    
    }
    items_list = items_list.concat(filterItems_list(this.props.appActions.getDataSheet('datamuse3').items));
    this._state0_elList463682_items = [];
    
    const style_state0_elList463682 = {
      height: 'auto',  // This element is in scroll flow
     };
    
    return (
      <div className="Arena appBg">
        <div className="layoutFlow">
          <div className="state0_elText413992">
            <div className="headlineFont" style={style_state0_elText413992}>
              <div>{this.props.locStrings.arena_text_474530}</div>
            </div>
          </div>
          
          <div className="state0_elField612324">
            <Input className="baseFont" style={style_state0_elField612324} type="text" hint={this.props.locStrings.arena_field_612324} onChange={this.textInputChanged_state0_elField612324} value={value_field !== undefined ? value_field : ''}  />
          </div>
          
          <div className="flowRow flowRow_Arena_state0_elButton_747291">
          <div className="state0_elButton">
            <Button className="actionFont" style={style_state0_elButton}  color="accent" onClick={this.onClick_state0_elButton} >
              {this.props.locStrings.arena_button_747291}
            </Button>
          </div>
          
          </div>
          <div className="state0_elButton2">
            <Button className="actionFont" style={style_state0_elButton2}  color="accent" onClick={this.onClick_state0_elButton2} >
              {this.props.locStrings.arena_button2_238828}
            </Button>
          </div>
          
          <div className="state0_elProgress476510">
            <div>
              <svg className={cssClass_progress}>
                <circle className="circularProgress-animatedPath" style={{stroke: '#0093d5'}} cx="25" cy="25" r="17" fill="none" strokeWidth="3" strokeMiterlimit="10" />
              </svg>
            </div>
          </div>
          
          <div className="hasNestedComps state0_elList463682">
            <ul style={style_state0_elList463682}>
              {items_list.map((row, index) => {
                let itemComp = (row._componentId)
                    ? listComps_list[row._componentId]
                    : <WordListItem appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} dataSheetId={'datamuse3'} dataSheetRow={row} {...{ 'word': row['word'], 'defs': row['defs'], 'tags': row['tags'], }} ref={(el) => {if (el) this._state0_elList463682_items.push(el)}} />;
                return (<li key={row.key}>
                    {itemComp}
                  </li>);
              })}
              <div className="marker" ref={(el)=> this._state0_elList463682_endMarker = el} />
            </ul>
          </div>
        </div>
        
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 4) --- 
  
  textInputChanged_state1_elField612324 = (event) => {
    this.setState({field: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_means_text", event.target.value);
  }
  
  onClick_state1_elButton3 = (ev) => {
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
     
    /*
      let str = this.props.appActions.dataSlots['ds_means_text'].trim();
      let urljoiner = "?";
      if (str) {
        query_params = query_params + urljoiner + "ml=" + encodeURIComponent(str);
        if (url_joiner = "?") {
          url_joiner = "&";
        }
      }
      str = this.props.appActions.dataSlots['ds_rhy'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rhy=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_aprhy'].trim();
      if (str) {
        query_params = query_params + urljoiner + "apr=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_sou'].trim();
      if (str) {
        query_params = query_params + urljoiner + "sl=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_homophone'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_hom=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_adj'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_jjb=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_noun'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_jja=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_topics'].trim();
      if (str) {
        query_params = query_params + urljoiner + "topics=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_triggers'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_trg=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_antonym'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_ant=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_next'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_bga=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_prev'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_bgb=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_spells'].trim();
      if (str) {
        query_params = query_params + urljoiner + "sp=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_synonym'].trim();
      if (str) {
        query_params = query_params + "&" + "rel_syn=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_category'].trim();
      if (str) {
        query_params = query_params + "&" + "rel_spc=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_category_item'].trim();
      if (str) {
        query_params = query_params + "&" + "rel_gen=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_whole'].trim();
      if (str) {
        query_params = query_params + "&" + "rel_par=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_part'].trim();
      if (str) {
        query_params = query_params + "&" + "rel_com=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_cons'].trim();
      if (str) {
        query_params = query_params + "&" + "rel_cns=" + encodeURIComponent(str);
      }
      */
    }
    if (res.querystring && res.querystring != "words") {
      res.querystring = res.querystring + "&md=dfr&ipa=1";
      this.props.appActions.updateDataSlot("ds_datamuse_query_params", res.querystring);
    }
  
    let newVal = "1";
    this.props.appActions.updateDataSlot('ds_arena_init', newVal);
  
  }
  
  
  renderState1() {
    // eslint-disable-next-line
    const dataSheet_datamuse3 = this.props.appActions.getDataSheet('datamuse3');
    const style_state1_elText413992 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    const value_field = (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_means_text'] : '');
    
    const style_state1_elField612324 = {
      display: 'block',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_state1_elButton3 = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    let cssClass_progress = 'circularProgressIndicator';
    if (this.props.appActions.isLoading()) 
      cssClass_progress += ' circularProgressIndicator-active';
    
    
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    
    // Show head item only if list is empty.
    if (this.props.appActions.getDataSheet('datamuse3').items.length < 1) {
      listComps_list['_head'] = <Noresult appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;  // Head item for this list
      items_list.push({key: '_head', _componentId: '_head'});  // A data item to indicate the head item
    }
    
    let filterItems_list = items => {
      // This function filters items for the List / Grid element.
      // There is a variable named 'items' that provides item values.
      this.props.appActions.updateDataSlot("ds_datamuse_count", items.length);
      return items;
    
    }
    items_list = items_list.concat(filterItems_list(this.props.appActions.getDataSheet('datamuse3').items));
    this._state1_elList463682_items = [];
    
    const style_state1_elList463682 = {
      height: 'auto',  // This element is in scroll flow
     };
    
    return (
      <div className="Arena appBg">
        <div className="layoutFlow">
          <div className="state1_elText413992">
            <div className="headlineFont" style={style_state1_elText413992}>
              <div>{this.props.locStrings.arena_text_474530}</div>
            </div>
          </div>
          
          <div className="state1_elField612324">
            <Input className="baseFont" style={style_state1_elField612324} type="text" hint={this.props.locStrings.arena_field_612324} onChange={this.textInputChanged_state1_elField612324} value={value_field !== undefined ? value_field : ''}  />
          </div>
          
          <div className="state1_elButton3">
            <Button className="actionFont" style={style_state1_elButton3}  color="accent" onClick={this.onClick_state1_elButton3} >
              {this.props.locStrings.arena_button3_272515}
            </Button>
          </div>
          
          <div className="state1_elProgress476510">
            <div>
              <svg className={cssClass_progress}>
                <circle className="circularProgress-animatedPath" style={{stroke: '#0093d5'}} cx="25" cy="25" r="17" fill="none" strokeWidth="3" strokeMiterlimit="10" />
              </svg>
            </div>
          </div>
          
          <div className="hasNestedComps state1_elList463682">
            <ul style={style_state1_elList463682}>
              {items_list.map((row, index) => {
                let itemComp = (row._componentId)
                    ? listComps_list[row._componentId]
                    : <WordListItem appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} dataSheetId={'datamuse3'} dataSheetRow={row} {...{ 'word': row['word'], 'defs': row['defs'], 'tags': row['tags'], }} ref={(el) => {if (el) this._state1_elList463682_items.push(el)}} />;
                return (<li key={row.key}>
                    {itemComp}
                  </li>);
              })}
              <div className="marker" ref={(el)=> this._state1_elList463682_endMarker = el} />
            </ul>
          </div>
        </div>
        
      </div>
    )
  }
  
  // --- Functions for component state index 2 (3 of 4) --- 
  
  textInputChanged_state2_elField612324 = (event) => {
    this.setState({field: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_means_text", event.target.value);
  }
  
  onClick_state2_elButton = (ev) => {
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
     
    /*
      let str = this.props.appActions.dataSlots['ds_means_text'].trim();
      let urljoiner = "?";
      if (str) {
        query_params = query_params + urljoiner + "ml=" + encodeURIComponent(str);
        if (url_joiner = "?") {
          url_joiner = "&";
        }
      }
      str = this.props.appActions.dataSlots['ds_rhy'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rhy=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_aprhy'].trim();
      if (str) {
        query_params = query_params + urljoiner + "apr=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_sou'].trim();
      if (str) {
        query_params = query_params + urljoiner + "sl=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_homophone'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_hom=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_adj'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_jjb=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_noun'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_jja=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_topics'].trim();
      if (str) {
        query_params = query_params + urljoiner + "topics=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_triggers'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_trg=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_antonym'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_ant=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_next'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_bga=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_prev'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_bgb=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_spells'].trim();
      if (str) {
        query_params = query_params + urljoiner + "sp=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_synonym'].trim();
      if (str) {
        query_params = query_params + "&" + "rel_syn=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_category'].trim();
      if (str) {
        query_params = query_params + "&" + "rel_spc=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_category_item'].trim();
      if (str) {
        query_params = query_params + "&" + "rel_gen=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_whole'].trim();
      if (str) {
        query_params = query_params + "&" + "rel_par=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_part'].trim();
      if (str) {
        query_params = query_params + "&" + "rel_com=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_cons'].trim();
      if (str) {
        query_params = query_params + "&" + "rel_cns=" + encodeURIComponent(str);
      }
      */
    }
    if (res.querystring && res.querystring != "words") {
      res.querystring = res.querystring + "&md=dfr&ipa=1";
      this.props.appActions.updateDataSlot("ds_datamuse_query_params", res.querystring);
    }
  
    let newVal = "1";
    this.props.appActions.updateDataSlot('ds_arena_init', newVal);
  
  }
  
  
  onClick_state2_elButton2 = (ev) => {
    let newVal = "1";
    this.props.appActions.updateDataSlot('ds_leftmenu_driver', newVal);
  
  }
  
  
  renderState2() {
    // eslint-disable-next-line
    const dataSheet_datamuse3 = this.props.appActions.getDataSheet('datamuse3');
    const style_state2_elText413992 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    const value_field = (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_means_text'] : '');
    
    const style_state2_elField612324 = {
      display: 'block',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_state2_elButton = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    const style_state2_elButton2 = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    let cssClass_progress = 'circularProgressIndicator';
    if (this.props.appActions.isLoading()) 
      cssClass_progress += ' circularProgressIndicator-active';
    
    
    return (
      <div className="Arena appBg">
        <div className="layoutFlow">
          <div className="state2_elText413992">
            <div className="headlineFont" style={style_state2_elText413992}>
              <div>{this.props.locStrings.arena_text_474530}</div>
            </div>
          </div>
          
          <div className="state2_elField612324">
            <Input className="baseFont" style={style_state2_elField612324} type="text" hint={this.props.locStrings.arena_field_612324} onChange={this.textInputChanged_state2_elField612324} value={value_field !== undefined ? value_field : ''}  />
          </div>
          
          <div className="flowRow flowRow_Arena_state2_elButton_797793">
          <div className="state2_elButton">
            <Button className="actionFont" style={style_state2_elButton}  color="accent" onClick={this.onClick_state2_elButton} >
              {this.props.locStrings.arena_button_797793}
            </Button>
          </div>
          
          </div>
          <div className="state2_elButton2">
            <Button className="actionFont" style={style_state2_elButton2}  color="accent" onClick={this.onClick_state2_elButton2} >
              {this.props.locStrings.arena_button2_493324}
            </Button>
          </div>
          
          <div className="state2_elProgress476510">
            <div>
              <svg className={cssClass_progress}>
                <circle className="circularProgress-animatedPath" style={{stroke: '#0093d5'}} cx="25" cy="25" r="17" fill="none" strokeWidth="3" strokeMiterlimit="10" />
              </svg>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
  // --- Functions for component state index 3 (4 of 4) --- 
  
  textInputChanged_state3_elField612324 = (event) => {
    this.setState({field: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_means_text", event.target.value);
  }
  
  onClick_state3_elButton3 = (ev) => {
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
     
    /*
      let str = this.props.appActions.dataSlots['ds_means_text'].trim();
      let urljoiner = "?";
      if (str) {
        query_params = query_params + urljoiner + "ml=" + encodeURIComponent(str);
        if (url_joiner = "?") {
          url_joiner = "&";
        }
      }
      str = this.props.appActions.dataSlots['ds_rhy'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rhy=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_aprhy'].trim();
      if (str) {
        query_params = query_params + urljoiner + "apr=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_sou'].trim();
      if (str) {
        query_params = query_params + urljoiner + "sl=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_homophone'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_hom=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_adj'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_jjb=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_noun'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_jja=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_topics'].trim();
      if (str) {
        query_params = query_params + urljoiner + "topics=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_triggers'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_trg=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_antonym'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_ant=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_next'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_bga=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_prev'].trim();
      if (str) {
        query_params = query_params + urljoiner + "rel_bgb=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_spells'].trim();
      if (str) {
        query_params = query_params + urljoiner + "sp=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_synonym'].trim();
      if (str) {
        query_params = query_params + "&" + "rel_syn=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_category'].trim();
      if (str) {
        query_params = query_params + "&" + "rel_spc=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_category_item'].trim();
      if (str) {
        query_params = query_params + "&" + "rel_gen=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_whole'].trim();
      if (str) {
        query_params = query_params + "&" + "rel_par=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_part'].trim();
      if (str) {
        query_params = query_params + "&" + "rel_com=" + encodeURIComponent(str);
      }
      str = this.props.appActions.dataSlots['ds_cons'].trim();
      if (str) {
        query_params = query_params + "&" + "rel_cns=" + encodeURIComponent(str);
      }
      */
    }
    if (res.querystring && res.querystring != "words") {
      res.querystring = res.querystring + "&md=dfr&ipa=1";
      this.props.appActions.updateDataSlot("ds_datamuse_query_params", res.querystring);
    }
  
    let newVal = "1";
    this.props.appActions.updateDataSlot('ds_arena_init', newVal);
  
  }
  
  
  renderState3() {
    // eslint-disable-next-line
    const dataSheet_datamuse3 = this.props.appActions.getDataSheet('datamuse3');
    const style_state3_elText413992 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    const value_field = (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_means_text'] : '');
    
    const style_state3_elField612324 = {
      display: 'block',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_state3_elButton3 = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    let cssClass_progress = 'circularProgressIndicator';
    if (this.props.appActions.isLoading()) 
      cssClass_progress += ' circularProgressIndicator-active';
    
    
    return (
      <div className="Arena appBg">
        <div className="layoutFlow">
          <div className="state3_elText413992">
            <div className="headlineFont" style={style_state3_elText413992}>
              <div>{this.props.locStrings.arena_text_474530}</div>
            </div>
          </div>
          
          <div className="state3_elField612324">
            <Input className="baseFont" style={style_state3_elField612324} type="text" hint={this.props.locStrings.arena_field_612324} onChange={this.textInputChanged_state3_elField612324} value={value_field !== undefined ? value_field : ''}  />
          </div>
          
          <div className="state3_elButton3">
            <Button className="actionFont" style={style_state3_elButton3}  color="accent" onClick={this.onClick_state3_elButton3} >
              {this.props.locStrings.arena_button3_852657}
            </Button>
          </div>
          
          <div className="state3_elProgress476510">
            <div>
              <svg className={cssClass_progress}>
                <circle className="circularProgress-animatedPath" style={{stroke: '#0093d5'}} cx="25" cy="25" r="17" fill="none" strokeWidth="3" strokeMiterlimit="10" />
              </svg>
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
      case 2:
        return this.renderState2();
      case 3:
        return this.renderState3();
    }
  }
  
}
