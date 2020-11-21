import React, { Component } from 'react';
import LocalizedStrings from 'react-localization';
// eslint-disable-next-line
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
// eslint-disable-next-line
import * as util from 'util';
import './App.css';
import StartScreen from './StartScreen.js';
import DataSheet_localizationSheet from './DataSheet_localizationSheet.js';
import DataSheet_datamuse3 from './DataSheet_datamuse3.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.dataSheets = {};
    this.dataSheets['localizationSheet'] = new DataSheet_localizationSheet('localizationSheet', this.dataSheetDidUpdate);
    this.dataSheets['datamuse3'] = new DataSheet_datamuse3('datamuse3', this.dataSheetDidUpdate);
    this.dataSheetLoaded = {};

    this.dataSlots = {};
    this.dataSlots['ds_activeLang'] = "en";
    this.dataSlots['ds_orientation_dummy'] = "0";
    this.dataSlots['ds_leftmenu_driver'] = "0";
    this.dataSlots['ds_means_text'] = "";
    this.dataSlots['ds_rhy'] = "";
    this.dataSlots['ds_aprhy'] = "";
    this.dataSlots['ds_sou'] = "";
    this.dataSlots['ds_homophone'] = "";
    this.dataSlots['ds_adj'] = "";
    this.dataSlots['ds_noun'] = "";
    this.dataSlots['ds_topics'] = "";
    this.dataSlots['ds_triggers'] = "";
    this.dataSlots['ds_antonym'] = "";
    this.dataSlots['ds_next'] = "";
    this.dataSlots['ds_prev'] = "";
    this.dataSlots['ds_spells'] = "";
    this.dataSlots['ds_synonym'] = "";
    this.dataSlots['ds_category'] = "";
    this.dataSlots['ds_category_item'] = "";
    this.dataSlots['ds_whole'] = "";
    this.dataSlots['ds_part'] = "";
    this.dataSlots['ds_cons'] = "";
    this.dataSlots['ds_datamuse_query_params'] = "words?ml=freedom";
    this.dataSlots['ds_arena_init'] = "0";
    this.dataSlots['ds_datamuse_count'] = "0";

    this.updateLocalizationFromDataSheet(this.dataSheets['localizationSheet']);


    this.serviceOptions_datamuse3 = {
      dataSlots: this.dataSlots,
      servicePath: "",
      query: "",
    };
    this.dataSheets['datamuse3'].appActions = this;
    this.dataSheets['datamuse3'].dataSlots = this.dataSlots;
    

    this.state = {
      screenTransitionForward: true,
    }

  }

  windowDidResize = () => {
    let w = window.innerWidth;
    let formatId;
    if (w < 576) formatId = 'narrow-phone';
    else if (w < 768) formatId = 'wide-phone';
    else if (w < 1024) formatId = 'narrow-tablet';
    else formatId = 'wide-tablet';
    if (formatId !== this.state.screenFormatId) {
      this.setState({screenFormatId: formatId});
    }
  }

  componentDidMount() {
    this.windowDidResize();
    window.addEventListener('resize', this.windowDidResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowDidResize);
  }

  isLoading() {
    return this.state.loading;
  }

  goToScreen = (screenId, props) => {
    // This method is the default implementation and could be customized by a navigation plugin.
    this.props.history.push('/'+screenId, {...props, appActions: null, locStrings: null, dataSheets: null});
    window.scrollTo(0, 0);
  }

  goBack = () => {
    // This method is the default implementation and could be customized by a navigation plugin.
    this.props.history.goBack();
  }

  getDataSheet = (sheetId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    return this.dataSheets[sheetId];
  }

  addToDataSheet = (sheetId, newRow, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && newRow) {
      sheet.addItem(newRow, this['serviceOptions_'+sheetId] || {});
    }
    this.setState({});
  }

  updateInDataSheet = (sheetId, row, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.replaceItemByKey(row.key, row, this['serviceOptions_'+sheetId] || {});
      this.setState({});
    }
  }

  removeFromDataSheet = (sheetId, row) => {
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.removeItem(row, this['serviceOptions_'+sheetId] || {});
    }
    this.setState({});
  }

  updateDataSlot = (slotId, value, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    if (value === this.dataSlots[slotId])
      return;

    this.dataSlots[slotId] = value;

    if (slotId === 'ds_activeLang') {
      this.locStrings.setLanguage(value);
    }

    if (slotId === 'ds_datamuse_query_params') {
      this.serviceOptions_datamuse3.servicePath = value;
      this.loadData_dataMuse(this.dataSheets['datamuse3'], this.serviceOptions_datamuse3, true);
    }
    this.setState({});
  }

  dataSheetDidUpdate = (dataSheet) => {
    // This method is the default implementation and could be customized by a state management plugin.
    this.setState({});
  }

  updateLocalizationFromDataSheet = (dataSheet) => {
    const stringsObj = dataSheet.getStringsByLanguage();
    if (stringsObj && Object.keys(stringsObj).length > 0) {
      this.locStrings = new LocalizedStrings(stringsObj);
    } else {
      this.locStrings = new LocalizedStrings({en: {}});
    }
    this.locStrings.setLanguage(this.dataSlots['ds_activeLang']);
  }

  loadData_dataMuse = (dataSheet, options, firstLoad) => {
    // This method was written by data plugin 'Generic JSON'.
    this.setState({loading: true});
    
    // clear any placeholder data before load
    if (firstLoad) {
    	dataSheet.items = [];
    }
    
    const fetchComplete = (err) => {
      if (err) {
        // This error handling comes from React Studio
        // and currently doesn't do anything useful.
        console.error('** Web service load failed: ', err);
      } else {
      }
      this.setState({loading: false});
    }
    
    const url = dataSheet.urlFromOptions(options);  // this method was written by the web service plugin
    
    const fetchOpts = {
      method: 'GET',
      headers: {},
    };
    
    fetch(url, fetchOpts)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server error: "+response.status);
        }
        return response.json();
      })
      .then((json) => {
        dataSheet.loadFromJson(json);
        fetchComplete(null, options);
      })
      .catch((exc) => {
        fetchComplete(exc, options);
      });
  }

  render() {
    let makeElementForScreen = (screenId, baseProps, atTop, forward) => {
      let screenProps = {
        ...baseProps,
        atTopOfScreenStack: atTop,
        transitionForward: forward,
        appActions: this,
        dataSheets: this.dataSheets,
        locStrings: this.locStrings,
        deviceInfo: {
          screenFormatId: this.state.screenFormatId
        },
        'ds_activeLang': this.dataSlots['ds_activeLang'],
        'ds_orientation_dummy': this.dataSlots['ds_orientation_dummy'],
        'ds_leftmenu_driver': this.dataSlots['ds_leftmenu_driver'],
        'ds_means_text': this.dataSlots['ds_means_text'],
        'ds_rhy': this.dataSlots['ds_rhy'],
        'ds_aprhy': this.dataSlots['ds_aprhy'],
        'ds_sou': this.dataSlots['ds_sou'],
        'ds_homophone': this.dataSlots['ds_homophone'],
        'ds_adj': this.dataSlots['ds_adj'],
        'ds_noun': this.dataSlots['ds_noun'],
        'ds_topics': this.dataSlots['ds_topics'],
        'ds_triggers': this.dataSlots['ds_triggers'],
        'ds_antonym': this.dataSlots['ds_antonym'],
        'ds_next': this.dataSlots['ds_next'],
        'ds_prev': this.dataSlots['ds_prev'],
        'ds_spells': this.dataSlots['ds_spells'],
        'ds_synonym': this.dataSlots['ds_synonym'],
        'ds_category': this.dataSlots['ds_category'],
        'ds_category_item': this.dataSlots['ds_category_item'],
        'ds_whole': this.dataSlots['ds_whole'],
        'ds_part': this.dataSlots['ds_part'],
        'ds_cons': this.dataSlots['ds_cons'],
        'ds_datamuse_query_params': this.dataSlots['ds_datamuse_query_params'],
        'ds_arena_init': this.dataSlots['ds_arena_init'],
        'ds_datamuse_count': this.dataSlots['ds_datamuse_count'],
      };
      switch (screenId) {
        default:
          return null;
        case 'start':
          return (<StartScreen {...screenProps} />)
      }
    }

    return (
      <div className="App">
        <Switch>
          <Route path="/" render={(props) => makeElementForScreen('start', props.location.state, true, true)} exact />
          <Route path="/start" render={(props) => {
            return makeElementForScreen('start', props.location.state, true, true);
          }} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App)
