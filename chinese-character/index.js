const dict = require('./dict.js');

const chinesecharacter = {
  dict,
  chars: {
    '&': '&amp;', ' ': '&nbsp;', '"': '&quot;', "'": '&apos;', '“': '&ldquo;', '”': '&rdquo;', '‘': '&lsquo;', '’': '&rsquo;', '·': '&middot;', '©': '&copy;', '↑': '&uarr;', '€': '&euro;', '²': '&sup2;', '½': '&frac12;', '♥': '&hearts;', '©': '&copy;', '®': '&reg;', '™': '&trade;', '«': '&laquo;', '»': '&raquo;', '‹': '&lsaquo;', '›': '&rsaquo;', '§': '&sect;', '¶': '&para;', '•': '&bull;', '·': '&middot;', '…': '&hellip;', '¦': '&brvbar;', '–': '&ndash;', '—': '&mdash;', '¤': '&curren;', '¢': '&cent;', '£': '&pound;', '¥': '&yen;', '€': '&euro;', '<': '&lt;', '>': '&gt;', '≤': '&le;', '≥': '&ge;', '×': '&times;', '÷': '&divide;', '−': '&minus;', '±': '&plusmn;', '≠': '&ne;', '¹': '&sup1;', '²': '&sup2;', '³': '&sup3;', '½': '&frac12;', '¼': '&frac14;', '¾': '&frac34;', '‰': '&permil;', '°': '&deg;', '√': '&radic;', '∞': '&infin;', '←': '&larr;', '↑': '&uarr;', '→': '&rarr;', '↓': '&darr;', '↔': '&harr;', '↵': '&crarr;', '♠': '&spades;', '♣': '&clubs;', '♥': '&hearts;', '♦': '&diams;', '◊': '&loz;', '†': '&dagger;', '‡': '&Dagger;', '¡': '&iexcl;', '¿': '&iquest;', '￠': '&cent;', '£': '&pound;', '¥': '&yen;', '§': '&sect;', '©': '&copy;', '®': '&reg;', '×': '&times;', '÷': '&divide;', Α: '&Alpha;', Β: '&Beta;', Γ: '&Gamma;', Δ: '&Delta;', Ε: '&Epsilon;', Ζ: '&Zeta;', Η: '&Eta;', Θ: '&Theta;', Ι: '&Iota;', Κ: '&Kappa;', Λ: '&Lambda;', Μ: '&Mu;', Ν: '&Nu;', Ξ: '&Xi;', Ο: '&Omicron;', Π: '&Pi;', Ρ: '&Rho;', Σ: '&Sigma;', Τ: '&Tau;', Υ: '&Upsilon;', Φ: '&Phi;', Χ: '&Chi;', Ψ: '&Psi;', Ω: '&Omega;', α: '&alpha;', β: '&beta;', γ: '&gamma;', δ: '&delta;', ε: '&epsilon;', ζ: '&zeta;', η: '&eta;', θ: '&theta;', ι: '&iota;', κ: '&kappa;', λ: '&lambda;', μ: '&mu;', ν: '&nu;', ξ: '&xi;', ο: '&omicron;', π: '&pi;', ρ: '&rho;', ς: '&sigmaf;', σ: '&sigma;', τ: '&tau;', υ: '&upsilon;', φ: '&phi;', χ: '&chi;', ψ: '&psi;', ω: '&omega;', ϑ: '&thetasym;', ϒ: '&upsih;', ϖ: '&piv;', '•': '&bull;', '…': '&hellip;', '′': '&prime;', '″': '&Prime;', '‾': '&oline;', '⁄': '&frasl;', ℘: '&weierp;', ℑ: '&image;', ℜ: '&real;', '™': '&trade;', ℵ: '&alefsym;', '←': '&larr;', '↑': '&uarr;', '→': '&rarr;', '↓': '&darr;', '↔': '&harr;', '↵': '&crarr;', '⇐': '&lArr;', '⇑': '&uArr;', '⇒': '&rArr;', '⇓': '&dArr;', '⇔': '&hArr;', '∀': '&forall;', '∂': '&part;', '∃': '&exist;', '∅': '&empty;', '∇': '&nabla;', '∈': '&isin;', '∉': '&notin;', '∋': '&ni;', '∏': '&prod;', '∑': '&sum;', '−': '&minus;', '∗': '&lowast;', '√': '&radic;', '∝': '&prop;', '∞': '&infin;', '∠': '&ang;', '∧': '&and;', '∨': '&or;', '∩': '&cap;', '∪': '&cup;', '∫': '&int;', '∴': '&there4;', '∼': '&sim;', '≅': '&cong;', '≈': '&asymp;', '≠': '&ne;', '≡': '&equiv;', '≤': '&le;', '≥': '&ge;', '⊂': '&sub;', '⊃': '&sup;', '⊄': '&nsub;', '⊆': '&sube;', '⊇': '&supe;', '⊕': '&oplus;', '⊗': '&otimes;', '⊥': '&perp;', '⋅': '&sdot;', '◊': '&loz;', '♠': '&spades;', '♣': '&clubs;', '♥': '&hearts;', '♦': '&diams;', '¡': '&iexcl;', '¢': '&cent;', '£': '&pound;', '¤': '&curren;', '¥': '&yen;', '¦': '&brvbar;', '§': '&sect;', '¨': '&uml;', '©': '&copy;', ª: '&ordf;', '«': '&laquo;', '¬': '&not;', '®': '&reg;', '¯': '&macr;', '°': '&deg;', '±': '&plusmn;', '²': '&sup2;', '³': '&sup3;', '´': '&acute;', µ: '&micro;',
  },
  first(str) {
    const key = str.substr(0, 1);
    if (this.dict[key]) {
      return this.dict[key][0];
    }
    return '';
  },
  firstAll(str, join) {
    const list = str.split('');
    const result = [];
    let word;
    for (let i = 0; i < list.length; i += 1) {
      word = list[i];
      result.push(this.first(word));
    }
    if (join === false) {
      return result;
    }
    return result.join('');
  },
  firstSort(list, key) {
    const arr = [];
    let word;
    for (let i = 0; i < list.length; i += 1) {
      const obj = {};
      if (key) {
        word = list[i][key];
      } else {
        word = list[i];
      }
      obj.first = this.first(word);
      obj.data = list[i];
      arr.push(obj);
    }
    arr.sort((a, b) => {
      if (a.first > b.first) {
        return 1;
      } if (a.first < b.first) {
        return -1;
      }
      return 0;
    });
    const result = [];
    for (let j = 0; j < arr.length; j += 1) {
      result.push(arr[j].data);
    }
    return result;
  },
  firstGroupSort(list, key) {
    const obj = {};
    let word;
    for (let i = 0; i < list.length; i += 1) {
      if (key) {
        word = this.first(list[i][key]);
      } else {
        word = this.first(list[i]);
      }
      if (obj[word]) {
        obj[word].push(list[i]);
      } else {
        obj[word] = [];
        obj[word].push(list[i]);
      }
    }
    const result = [];
    let o;
    for (const x in obj) {
      o = {};
      o.first = x;
      o.data = obj[x];
      result.push(o);
    }
    result.sort((a, b) => {
      if (a.first > b.first) {
        return 1;
      } if (a.first < b.first) {
        return -1;
      }
      return 0;
    });
    return result;
  },
  pin(str) {
    const key = str.substr(0, 1);
    if (this.dict[key]) {
      return this.dict[key][1];
    }
    return '';
  },
  pinAll(str, join) {
    const list = str.split('');
    const result = [];
    for (let i = 0; i < list.length; i += 1) {
      const word = list[i];
      result.push(this.pin(word));
    }
    if (join === false) {
      return result;
    }
    return result.join('');
  },
  yin(str) {
    const key = str.substr(0, 1);
    if (this.dict[key]) {
      return this.dict[key][3];
    }
    return '';
  },
  yinAll(str, join) {
    const list = str.split('');
    const result = [];
    for (let i = 0; i < list.length; i += 1) {
      const word = list[i];
      result.push(this.yin(word));
    }
    if (join === false) {
      return result;
    }
    return result.join('');
  },
  diao(str) {
    const key = str.substr(0, 1);
    if (this.dict[key]) {
      return this.dict[key][2];
    }
    return '';
  },
  diaoAll(str, join) {
    const list = str.split('');
    const result = [];
    let word;
    for (let i = 0; i < list.length; i += 1) {
      word = list[i];
      result.push(this.diao(word));
    }
    if (join === false) {
      return result;
    }
    return result.join('');
  },
  count(str, punc) {
    let reg;
    if (punc) {
      reg = /[\u4E00-\u9FA5\uf900-\ufa2d\。\，\、\；\：\？\！\“\”\‘\'\╗\╚\┐\└\（\）\…\—\《\》\〈\〉\·\.\%\(\)\[\]\{\}\;\:\"\'\,\?]/ig;
    } else {
      reg = /[\u4E00-\u9FA5\uf900-\ufa2d]/ig;
    }
    const words = str.match(reg);
    let wordcount = 0;
    if (words) {
      wordcount = words.length;
    }
    return wordcount;
  },
  html_encode(str) {
    let value;
    let reg;
    for (const key in this.chars) {
      value = this.chars[key];
      reg = new RegExp(key, 'gi');
      str = str.replace(reg, value);
    }
    return str;
  },
  html_decode(str) {
    let value;
    let reg;
    for (const key in this.chars) {
      value = this.chars[key];
      reg = new RegExp(value, 'gi');
      str = str.replace(reg, key);
    }
    return str;
  },
  string_to_unicode(str) { // \u4e2d\u6587
    return escape(str).replace(/%/g, () => '\\').toLowerCase();
  },
  unicode_to_string(str) { // \u4e2d\u6587
    return unescape(str);
  },
  string_to_unicode10(str) { // &#20013;&#25991;
    return str.replace(/./g, ($0) => {
      let c = $0.charCodeAt(0);
      c = (c == 0x20) ? 0xA0 : c;
      return `&#${c};`;
    });
  },
  unicode10_to_string(str) { // &#20013;&#25991;
    return str.replace(/&#\d{1,};/g, ($0) => {
      const m = $0.match(/\d{1,}/);
      let cc = m[0];
      cc = (cc == 160) ? 32 : cc;
      const c = String.fromCharCode(cc);
      return c;
    });
  },
  string_to_unicode16(str) { // &#x4E2D;&#x6587;
    return str.replace(/[^\u0000-\u00FF]/g, a => escape(a).replace(/(%u)(\w{4})/gi, '&#x$2;'));
  },
  unicode16_to_string(str) { // &#x4E2D;&#x6587;
    return str.replace(/&#x[\d\w]{1,};/g, $0 => unescape($0.replace(/&#x/g, '%u').replace(/;/g, '')));
  },
};

module.exports = chinesecharacter;
