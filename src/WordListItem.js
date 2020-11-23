import React, { Component } from 'react';
import './App.css';
import Rating from 'react-rating';
import MeaningListItem from './MeaningListItem';

export default class WordListItem extends Component {

  // Properties used by this component:
  // word, tags, defs

  constructor(props) {
    super(props);
    
    this.state = {
      elText3_visible: false,
      elList_visible: false,
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  onClick_elText = (ev) => {
    this.setState({elList_visible: !this.state.elList_visible});
  
    this.setState({elText3_visible: !this.state.elText3_visible});
  
  }
  
  
  valueChanged_elRating = (rating) => {
    this.setState({rating: rating});
  }
  
  render() {
    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      backgroundColor: '#d3d2d4',
      padding: '5.0px',
     };
    
    const value_text = this.props.word;
    
    const style_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    let transformPropValue_rating_value = (input) => {
      // This function modifies the value for property 'text'.
      // There is a variable named 'input' that provides the property value.
      //
      //let tags = JSON.parse(input);
      let tags = input;
      //["v","pron:D IH0 S EH1 M B AH0 L ","ipa_pron:dɪsˈɛmbʌɫ","f:0.313887"]
      let rating = 0;
      if (tags) {
        for (let tag of tags) {
          if (tag.startsWith("f:")) {
            let freq = tag.split(":")[1];
            rating = Math.log10(freq)+3;
            if (rating > 5) {
              rating = 5;
            } else if (rating < 0) {
              rating = 0;
            }
            break;
          }
        }
      }
      return rating;
    }
    const style_elRating = {
      pointerEvents: 'auto',
     };
    let transformPropValue_text3 = (input) => {
      // This function modifies the value for property 'text'.
      // There is a variable named 'input' that provides the property value.
      //
      //return input;
      let tags = input;
      //["v","pron:D IH0 S EH1 M B AH0 L ","ipa_pron:dɪsˈɛmbʌɫ","f:0.313887"]
      let ipa_pron = "";
      if (tags) {
        for (let tag of tags) {
          if (tag.startsWith("ipa_pron:")) {
            ipa_pron = tag.split(":")[1];
            break;
          }
        }
      }
      return ipa_pron;
    }
    
    const value_text3 = transformPropValue_text3(this.props.tags);
    
    const style_elText3 = {
      fontSize: 16.1,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    const elText3 = this.state.elText3_visible ? (
      <div className="elText3">
        <div className="systemFontRegular" style={style_elText3}>
          <div>{value_text3 !== undefined ? value_text3 : (<span className="propValueMissing">{this.props.locStrings.wordlistitem_text3_91978}</span>)}</div>
        </div>
      </div>
      
     ) : null;
    let transformPropValue_list = (input) => {
      // This function modifies the value for property 'itemsArray'.
      // There is a variable named 'input' that provides the property value.
      //
      if (!input || input.length == 0) {
        return input;
      }
      let defs = input;
      let meaningArray = [];
      for (let def of defs) {
        if (!def || !def.trim()) {
          continue;
        }
        let m = {
          item:""
        };
        m.item = def;
        meaningArray.push(m);
      }
      return meaningArray;
    }
    
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    if (Array.isArray(transformPropValue_list(this.props.defs))) {
        items_list = items_list.concat(transformPropValue_list(this.props.defs));
    } else if (transformPropValue_list(this.props.defs)) {
        items_list.push(transformPropValue_list(this.props.defs));
    }
    this._elList_items = [];
    
    const style_elList = {
      height: 'auto',  // This element is in scroll flow
     };
    const elList = this.state.elList_visible ? (
      <div className="hasNestedComps elList">
        <ul style={style_elList}>
          {items_list.map((row, index) => {
            let itemComp = (row._componentId)
                ? listComps_list[row._componentId]
                : <MeaningListItem appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} {...{'item': row['item'], }} ref={(el) => {if (el) this._elList_items.push(el)}} />;
            return (<li key={row.key}>
                {itemComp}
              </li>);
          })}
          <div className="marker" ref={(el)=> this._elList_endMarker = el} />
        </ul>
      </div>
      
     ) : null;
    
    return (
      <div className="WordListItem">
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow">
          <div className="flowRow flowRow_WordListItem_elText_1014341">
          <div className="elText">
            <div className="baseFont" style={style_elText} onClick={this.onClick_elText} >
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.component1_text_1014341}</span>)}</div>
            </div>
          </div>
          
          </div>
          <div className="elRating">
            <div style={style_elRating}>
              <Rating readonly={true} start={0} stop={5} initialRating={parseInt(transformPropValue_rating_value(this.props.tags))} onChange={this.valueChanged_elRating} fullSymbol={<div style={{fontSize:18, width:20, height:20}}>★</div>} emptySymbol={<div style={{fontSize:17, width:20, height:20}}>☆</div>} />
            </div>
          </div>
          
          { elText3 }
          <div className="elSpacer">
            <div />
          </div>
          
          { elList }
        </div>
        
      </div>
    )
  }
  
}
