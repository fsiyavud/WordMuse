// eslint-disable-next-line
import React from 'react';
import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_datamuse3 extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;

    // The contents of this data sheet will be loaded by plugin 'Generic JSON'.
    
    item = {};
    this.items.push(item);
    item['word'] = "confuse";
    item['tags'] = ["v","pron:K AH0 N F Y UW1 Z ","ipa_pron:kʌnfjˈuz","f:6.325702"];
    item['score'] = "83152";
    item['defs'] = ["v\tmistake one thing for another","v\tmake unclear, indistinct, or blurred","v\tmake unclear or incomprehensible","v\tbe confusing or perplexing to; cause to be unable to think clearly","v\tcause to feel embarrassment","v\tassemble without order or sense"];
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['word'] = "confound";
    item['tags'] = ["v","pron:K AA0 N F AW1 N D ","ipa_pron:kɑnfˈaʊnd","f:1.915892"];
    item['score'] = "78515";
    item['defs'] = ["v\tmistake one thing for another","v\tbe confusing or perplexing to; cause to be unable to think clearly"];
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['word'] = "obscure";
    item['tags'] = ["v","pron:AH0 B S K Y UH1 R ","ipa_pron:ʌbskjˈʊr","f:17.634577"];
    item['score'] = "76689";
    item['defs'] = ["v\tmake less visible or unclear","v\tmake obscure or unclear","v\tmake difficult to perceive by sight","v\tmake undecipherable or imperceptible by obscuring or concealing","v\tmake unclear, indistinct, or blurred"];
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['word'] = "overshadow";
    item['tags'] = ["v","pron:OW1 V ER0 SH AE1 D OW0 ","ipa_pron:ˈoʊvɝʃˈædoʊ","f:0.862544"];
    item['score'] = "74915";
    item['defs'] = ["v\tcast a shadow upon","v\texceed in importance; outweigh","v\tmake appear small by comparison"];
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['word'] = "darken";
    item['tags'] = ["v","pron:D AA1 R K AH0 N ","ipa_pron:dˈɑrkʌn","f:1.483629"];
    item['score'] = "74252";
    item['defs'] = ["v\tbecome or make darker","v\tmake dark or darker","v\tbecome dark or darker","v\ttarnish or stain"];
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['word'] = "mislead";
    item['tags'] = ["v","pron:M IH0 S L IY1 D ","ipa_pron:mɪsɫˈid","f:1.996197"];
    item['score'] = "65521";
    item['defs'] = ["v\tlead someone in the wrong direction or give someone wrong directions","v\tgive false or misleading information to"];
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['word'] = "dissemble";
    item['tags'] = ["v","pron:D IH0 S EH1 M B AH0 L ","ipa_pron:dɪsˈɛmbʌɫ","f:0.313887"];
    item['score'] = "65520";
    item['defs'] = ["v\thide under a false appearance","v\tbehave unnaturally or affectedly","v\tmake believe with the intent to deceive"];
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['word'] = "distort";
    item['tags'] = ["v","pron:D IH0 S T AO1 R T ","ipa_pron:dɪstˈɔrt","f:4.046260"];
    item['score'] = "65518";
    item['defs'] = ["v\talter the shape of (something) by stress","v\tmake false by mutilation or addition; as of a message or story","v\tform into a spiral shape","v\ttwist and press out of shape","v\taffect as in thought or feeling"];
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['word'] = "elide";
    item['tags'] = ["v","pron:EH1 L AY0 D ","ipa_pron:ˈɛɫaɪd","f:0.144885"];
    item['score'] = "65517";
    item['defs'] = ["v\tleave or strike out"];
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['word'] = "conceal";
    item['tags'] = ["v","pron:K AH0 N S IY1 L ","ipa_pron:kʌnsˈiɫ","f:9.216228"];
    item['score'] = "65516";
    item['defs'] = ["v\thold back; keep from being perceived by others","v\tprevent from being seen or discovered"];
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['word'] = "dissimulate";
    item['tags'] = ["v","pron:D IH0 S IH1 M Y AH0 L EY0 T ","ipa_pron:dɪsˈɪmjʌɫeɪt","f:0.108167"];
    item['score'] = "65515";
    item['defs'] = ["v\thide (feelings) from other people"];
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['word'] = "misdirect";
    item['tags'] = ["v","pron:M IH0 S D IH0 R EH1 K T ","ipa_pron:mɪsdɪrˈɛkt","f:0.084516"];
    item['score'] = "65514";
    item['defs'] = ["v\tput a wrong address on","v\tcorrupt morally or by intemperance or sensuality","v\tlead someone in the wrong direction or give someone wrong directions"];
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['word'] = "misinform";
    item['tags'] = ["v","pron:M IH0 S IH0 N F AO1 R M ","ipa_pron:mɪsɪnfˈɔrm","f:0.050921"];
    item['score'] = "65513";
    item['defs'] = ["v\tgive false or misleading information to"];
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['word'] = "hide";
    item['tags'] = ["v","pron:HH AY1 D ","ipa_pron:hˈaɪd","f:29.040300"];
    item['score'] = "65512";
    item['defs'] = ["v\tprevent from being seen or discovered","v\tbe or go into hiding; keep out of sight, as for protection and safety","v\tcover as if with a shroud","v\tmake undecipherable or imperceptible by obscuring or concealing"];
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['word'] = "misstate";
    item['tags'] = ["v","pron:M IH0 S S T EY1 T ","ipa_pron:mɪsstˈeɪt","f:0.040945"];
    item['score'] = "65511";
    item['defs'] = ["v\tstate something incorrectly"];
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['word'] = "trivialize";
    item['tags'] = ["v","pron:T R IH1 V IY0 AH0 L AY0 Z ","ipa_pron:trˈɪviʌɫaɪz","f:0.243092"];
    item['score'] = "65510";
    item['defs'] = ["v\tmake trivial or insignificant"];
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['word'] = "contrive";
    item['tags'] = ["v","pron:K AH0 N T R AY1 V ","ipa_pron:kʌntrˈaɪv","f:1.149588"];
    item['score'] = "65509";
    item['defs'] = ["v\tcome up with (an idea, plan, explanation, theory, or priciple) after a mental effort","v\tput or send forth","v\tmake or work out a plan for; devise"];
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['word'] = "manipulate";
    item['tags'] = ["v","pron:M AH0 N IH1 P Y AH0 L EY0 T ","ipa_pron:mʌnˈɪpjʌɫeɪt","f:8.090205"];
    item['score'] = "65508";
    item['defs'] = ["v\tinfluence or control shrewdly or deviously","v\ttreat manually, as with massage, for therapeutic purposed","v\thold something in one's hands and move it","v\tcontrol (others or oneself) or influence skillfully, usually to one's advantage","v\tmanipulate in a fraudulent manner","v\tfake or falsify"];
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['word'] = "deceive";
    item['tags'] = ["v","pron:D IH0 S IY1 V ","ipa_pron:dɪsˈiv","f:5.149457"];
    item['score'] = "65507";
    item['defs'] = ["v\tbe false to; be dishonest with","v\tcause someone to believe an untruth"];
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['word'] = "prevaricate";
    item['tags'] = ["v","pron:P R AH0 V EH1 R AH0 K EY0 T ","ipa_pron:prʌvˈɛrʌkeɪt","f:0.084074"];
    item['score'] = "65506";
    item['defs'] = ["v\tbe deliberately ambiguous or unclear in order to mislead or withhold information"];
    item.key = key++;
  }

  
  urlFromOptions(options) {
    const baseUrl = "https://api.datamuse.com/";
    
    let path = options.servicePath || '';
    if (path.length > 0 && path.substr(0, 1) !== '/' && baseUrl.substr(baseUrl.length - 1, 1) !== '/')
      path = '/'+path;
  
    let query = options.query || '';
    if (query.length > 0) {
      const dataSlots = options.dataSlots || {};
      query = "?" + this.expandSlotTemplateString(query, dataSlots);
    }
  
    return baseUrl + path + query; 
  }
  
  // this function's implementation is provided by React Studio.
  _fetchComplete = (err, options) => {
    if (err) {
      console.log('** Web service write failed: ', err, options);
    } else {
      if (this.updateCb) this.updateCb(this);
    }
  }
  
  addItem(item, options) {
    super.addItem(item, options);
    
    const url = this.urlFromOptions(options);
    
    let headers = {};
    headers['Content-Type'] = 'application/json';
  
    const fetchOpts = {
      method: 'POST',
    	headers: headers,
    	body: JSON.stringify(item),
    };
  
    fetch(url, fetchOpts)
      .then((response) => {
        if (response.status >= 400) {
          console.log("** Error sending %s to %s, response: ", fetchOpts.method, url, response);
          throw new Error("Server error: "+response.status);
        }
        return response.json();
      })
      .then((json) => {
        this._fetchComplete(null, options);
      })
      .catch((exc) => {
        this._fetchComplete(exc, options);
      });  
  }
  
  removeItem(item, options) {
    super.removeItem(item, options);
    
    const url = this.urlFromOptions(options);
    
    let headers = {};
    headers['Content-Type'] = 'application/json';
  
    const fetchOpts = {
      method: 'DELETE',
    	headers: headers,
    	body: JSON.stringify(item),
    };
  
    fetch(url, fetchOpts)
      .then((response) => {
        if (response.status >= 400) {
          console.log("** Error sending %s to %s, response: ", fetchOpts.method, url, response);
          throw new Error("Server error: "+response.status);
        }
        return response.json();
      })
      .then((json) => {
        this._fetchComplete(null, options);
      })
      .catch((exc) => {
        this._fetchComplete(exc, options);
      });  
  }
  
  replaceItemByRowIndex(idx, item, options) {
    super.replaceItemByRowIndex(idx, item, options);
    
    const url = this.urlFromOptions(options);
    
    let headers = {};
    headers['Content-Type'] = 'application/json';
  
    const fetchOpts = {
      method: 'PUT',
    	headers: headers,
    	body: JSON.stringify(item),
    };
  
    fetch(url, fetchOpts)
      .then((response) => {
        if (response.status >= 400) {
          console.log("** Error sending %s to %s, response: ", fetchOpts.method, url, response);
          throw new Error("Server error: "+response.status);
        }
        return response.json();
      })
      .then((json) => {
        this._fetchComplete(null, options);
      })
      .catch((exc) => {
        this._fetchComplete(exc, options);
      });  
  }
  

}
