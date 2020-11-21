import React, { Component } from 'react';
import './App.css';
import Rating from 'react-rating';

export default class WordListItem extends Component {

  // Properties used by this component:
  // word, defs, tags

  constructor(props) {
    super(props);
    
    this.state = {
      elText2_visible: false,
      elText3_visible: false,
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  onClick_elText = (ev) => {
    this.setState({elText2_visible: !this.state.elText2_visible});
  
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
    let transformPropValue_text2 = (input) => {
      // This function modifies the value for property 'text'.
      // There is a variable named 'input' that provides the property value.
      //
      //return input;
      let tags = input;
      //alert(input);
      let defs = "";
      if (tags) {
        for (let tag of tags) {
          //alert(tag);
          defs = defs + tag + "\n";
        }
      }
      return defs;
    }
    
    const value_text2 = transformPropValue_text2(this.props.defs);
    
    const style_elText2 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const elText2 = this.state.elText2_visible ? (
      <div className="elText2">
        <div className="actionFont" style={style_elText2}>
          <div>{value_text2 !== undefined ? value_text2 : (<span className="propValueMissing">{this.props.locStrings.wordlistitem_text2_834320}</span>)}</div>
        </div>
      </div>
      
     ) : null;
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
      textAlign: 'right',
     };
    const elText3 = this.state.elText3_visible ? (
      <div className="elText3">
        <div className="systemFontRegular" style={style_elText3}>
          <div>{value_text3 !== undefined ? value_text3 : (<span className="propValueMissing">{this.props.locStrings.wordlistitem_text3_91978}</span>)}</div>
        </div>
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
          
          { elText2 }
          <div className="flowRow flowRow_WordListItem_elText3_91978">
          { elText3 }
          </div>
        </div>
        
      </div>
    )
  }
  
}
