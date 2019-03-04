const chinese = require('./index.js');

function log() {
  for (let i = 0; i < arguments.length; i += 1) {
    console.log(`${arguments[i]}`);
  }
  console.log('');
}


const join = false;
const punc = true;

let inp = '中文';
let str = chinese.string_to_unicode(inp);
log('string_to_unicode', inp, str);

inp = '\u4e2d\u6587';
str = chinese.unicode_to_string(inp);
log('unicode_to_string', inp, str);

inp = '中文';
str = chinese.string_to_unicode10(inp);
log('string_to_unicode10', inp, str);

inp = '&#20013;&#25991;';
str = chinese.unicode10_to_string(inp);
log('unicode10_to_string', inp, str);

inp = '中文';
str = chinese.string_to_unicode16(inp);
log('string_to_unicode16', inp, str);

inp = '&#x4E2D;&#x6587;';
str = chinese.unicode16_to_string(inp);
log('unicode16_to_string', inp, str);

inp = '\'< >"&©±“”';
str = chinese.html_encode(inp);
log('html_encode', inp, str);

inp = '&apos;&lt;&nbsp;&gt;&quot;&amp;&copy;&plusmn;&ldquo;&rdquo;';
str = chinese.html_decode(inp);
log('html_decode', inp, str);

inp = '國家对抗';
str = chinese.first(inp);
log('first', inp, str);

inp = '國家对抗';
str = chinese.firstAll(inp);
log('firstAll', inp, str);

inp = '國家对抗';
str = chinese.firstAll(inp, join);
log('firstAll', inp, str);

inp = '國家对抗';
str = chinese.pin(inp);
log('pin', inp, str);

inp = '國家对抗';
str = chinese.pinAll(inp);
log('pinAll', inp, str);

inp = '國家对抗';
str = chinese.pinAll(inp, join);
log('pinAll', inp, str);

inp = '國家对抗';
str = chinese.yin(inp);
log('yin', inp, str);

inp = '國家对抗';
str = chinese.yinAll(inp);
log('yinAll', inp, str);

inp = '國家对抗';
str = chinese.yinAll(inp, join);
log('yinAll', inp, str);

inp = '國家对抗';
str = chinese.diao(inp);
log('diao', inp, str);

inp = '國家对抗';
str = chinese.diaoAll(inp);
log('diaoAll', inp, str);

inp = '國家对抗';
str = chinese.diaoAll(inp, join);
log('diaoAll', inp, str);

inp = '國家。，、；：？！“”╗╚┐└（）…—《》〈〉·.%()[]{};:"?对抗';
str = chinese.count(inp);
log('count', inp, str);

inp = '國家。，、；：？！“”╗╚┐└（）…—《》〈〉·.%()[]{};:"?对抗';
str = chinese.count(inp, punc);
log('count', inp, str);

inp = [{ title: '世界' }, { title: '你好' }, { title: '时间' }, { title: '白天' }, { title: '宁静' }, { title: '闪电' }];
str = chinese.firstSort(inp, 'title');
log('firstSort', inp, str);

inp = ['世界', '你好', '时间', '白天', '宁静', '闪电'];
str = chinese.firstSort(inp);
log('firstSort', inp, str);

inp = [{ title: '世界' }, { title: '你好' }, { title: '时间' }, { title: '白天' }, { title: '宁静' }, { title: '闪电' }];
str = chinese.firstGroupSort(inp, 'title');
log('firstGroupSort', inp, str);

inp = ['世界', '你好', '时间', '白天', '宁静', '闪电'];
str = chinese.firstGroupSort(inp);
log('firstGroupSort', inp, str);
