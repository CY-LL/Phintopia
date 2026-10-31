// Shared by the homepage and the menu page: drinks, colours, hours and the saved order.

const IMG = "https://static-assets.food-hunter.ca/restaurants/phintopia/images/";
const CAT = {phin:IMG+"menu/phin-coffee.jpg", matcha:IMG+"menu/matcha.jpg", coffee:IMG+"menu/coffee.jpg", seasonal:IMG+"menu/seasonal-favourites.jpg", tea:IMG+"menu/tea-collections.jpg"};

// mood: wake | calm | treat | fresh   base: coffee | tea | other   temp: hot | iced | both (used for ranking only)
const DRINKS = [
 {n:"Phin đen", p:"6.50", d:"Bold black coffee slowly brewed through a Vietnamese phin filter.", m:["wake"], b:"coffee", t:"both", img:CAT.phin, why:"Our purest phin: strong, slow-dripped, no distractions."},
 {n:"Phin đen sữa", p:"7.00", d:"Vietnamese phin coffee balanced with sweet condensed milk.", m:["wake","treat"], b:"coffee", t:"both", img:CAT.phin, why:"The classic Vietnamese wake-up, sweetened with condensed milk."},
 {n:"Cà phê muối", p:"7.50", d:"Bold Vietnamese coffee balanced by a lightly salted finish.", m:["treat","wake"], b:"coffee", t:"iced", img:IMG+"item/ca-phe-muoi.jpg", why:"Salted coffee: sweet, savoury and bold, and the drink people come back for."},
 {n:"Phin bạc xỉu", p:"7.00", d:"A smooth Vietnamese white coffee with a mild, creamy character.", m:["calm","treat"], b:"coffee", t:"both", img:CAT.phin, why:"Phin coffee on its gentlest setting: more milk, soft and mellow."},
 {n:"Espresso", p:"3.50", d:"A concentrated coffee with a bold, full-bodied finish.", m:["wake"], b:"coffee", t:"hot", img:CAT.coffee, why:"Short, intense and over in three sips."},
 {n:"Americano", p:"5.00", d:"Espresso lengthened for a smooth, clean cup.", m:["wake"], b:"coffee", t:"both", img:CAT.coffee, why:"Clean, honest coffee that lasts the whole morning."},
 {n:"Latte", p:"6.50", d:"Espresso and milk with a smooth, creamy finish.", m:["calm","treat"], b:"coffee", t:"both", img:IMG+"item/latte.jpg", why:"Warm, creamy and familiar. The comfort pick."},
 {n:"Cold Brew", p:"6.00", d:"Slow-steeped coffee with a smooth, refreshing finish.", m:["wake","fresh"], b:"coffee", t:"iced", img:CAT.coffee, why:"Smooth caffeine that's cold and steady, never bitter."},
 {n:"Coco Latte", p:"7.00", from:1, d:"A smooth, creamy latte with a gently sweet finish.", m:["treat"], b:"coffee", t:"both", img:CAT.coffee, why:"A gently sweet coconut twist on the latte."},
 {n:"Hazelnut Latte", p:"6.50", from:1, d:"A creamy latte with warm, nutty hazelnut notes.", m:["treat","calm"], b:"coffee", t:"hot", img:CAT.coffee, why:"Warm, nutty and cozy, built for a fall afternoon."},
 {n:"Mocha", p:"6.50", from:1, d:"Espresso and chocolate brought together in a creamy cup.", m:["treat"], b:"coffee", t:"both", img:CAT.coffee, why:"Coffee and chocolate together, so there's no need to choose."},
 {n:"Macchiato", p:"6.50", from:1, d:"Bold espresso softened by a touch of milk.", m:["wake"], b:"coffee", t:"hot", img:CAT.coffee, why:"Espresso's punch with the edge taken off."},
 {n:"Drip Coffee", p:"3.00", from:1, d:"Freshly brewed coffee with a clean, familiar finish.", m:["wake"], b:"coffee", t:"hot", img:CAT.coffee, why:"A familiar, no-fuss cup to start the day."},
 {n:"Matcha Latte", p:"6.75", from:1, d:"Smooth matcha blended into a creamy, balanced latte.", m:["calm","wake"], b:"tea", t:"both", img:CAT.matcha, why:"A calm, focused lift that's earthy and creamy."},
 {n:"Matcha Coconut", p:"7.00", from:1, d:"Smooth matcha with a mellow coconut finish.", m:["fresh","treat"], b:"tea", t:"iced", img:CAT.matcha, why:"Matcha meets coconut for a tropical, mellow cup."},
 {n:"Matcha Rose", p:"7.00", from:1, d:"Earthy matcha lifted by a delicate floral note.", m:["calm"], b:"tea", t:"both", img:CAT.matcha, why:"Earthy matcha with a soft rose finish. Quietly beautiful."},
 {n:"Matcha Strawberry", p:"7.50", d:"Creamy matcha paired with a bright strawberry finish.", m:["treat","fresh"], b:"tea", t:"iced", img:IMG+"item/matcha-strawberry.jpg", why:"Our most photographed drink, with creamy matcha over bright strawberry."},
 {n:"Coco - Ado", p:"8.50", d:"A rich and creamy tropical specialty with a smooth finish.", m:["treat","fresh"], b:"other", t:"iced", img:CAT.seasonal, why:"Rich, creamy and tropical. A dessert you can sip."},
 {n:"Lemonade", p:"6.50", d:"A bright, refreshing drink with a lively citrus finish.", m:["fresh"], b:"other", t:"iced", img:CAT.seasonal, why:"Bright, zesty and simple."},
 {n:"Honey Lemonade", p:"6.50", d:"Bright lemon balanced with the mellow sweetness of honey.", m:["fresh","calm"], b:"other", t:"iced", img:CAT.seasonal, why:"Lemonade rounded out with mellow honey."},
 {n:"Hot Chocolate", p:"5.00", d:"A warm, comforting cocoa drink with a rich, smooth finish.", m:["treat","calm"], b:"other", t:"hot", img:CAT.seasonal, why:"Rich, warm cocoa, the perfect cozy pick."},
 {n:"Honey Chrysanthemum Tea", p:"6.50", d:"A delicate floral tea with a gentle touch of honey.", m:["calm"], b:"tea", t:"hot", img:IMG+"item/honey-chrysanthemum-tea.jpg", why:"Floral, honeyed and soothing, made for unwinding."},
 {n:"Ayurvedic Ginger Fresh", p:"5.50", d:"A warming ginger infusion with a fresh, lively finish.", m:["fresh","wake"], b:"tea", t:"hot", img:CAT.tea, why:"Warming ginger with a lively kick."},
 {n:"Lavender Earl Grey", p:"6.00", d:"Fragrant Earl Grey softened by delicate lavender notes.", m:["calm"], b:"tea", t:"hot", img:CAT.tea, why:"Fragrant Earl Grey softened with lavender."},
 {n:"Jasmine Silver Needles", p:"8.25", from:1, d:"A delicate white tea with an elegant jasmine aroma.", m:["calm"], b:"tea", t:"hot", img:IMG+"item/jasmine-silver-needles.jpg", why:"Elegant white tea, ideal for a slow, quiet pause."},
 {n:"Chamomile Blossom", p:"8.25", from:1, d:"A gentle floral infusion with a soft, calming finish.", m:["calm"], b:"tea", t:"hot", img:CAT.tea, why:"Soft chamomile, the gentlest cup on the menu."},
 {n:"Anxi Tieguanyin", p:"8.25", from:1, d:"A fragrant oolong with a smooth body and floral character.", m:["calm","fresh"], b:"tea", t:"hot", img:CAT.tea, why:"A floral, smooth oolong for the tea-curious."},
 {n:"Blackberry Green Bliss", p:"8.00", from:1, d:"Green tea brightened with a fruity blackberry note.", m:["fresh"], b:"tea", t:"iced", img:CAT.tea, why:"Green tea with a bright blackberry lift."},
 {n:"Oolong", p:"11.50", from:1, d:"A balanced tea with a smooth body and gently roasted finish.", m:["calm"], b:"tea", t:"hot", img:CAT.tea, why:"Gently roasted and balanced, a connoisseur's cup."},
];

// ---- open/closed (America/Toronto) ----
const HOURS = [[8,19],[8,20],[8,20],[8,20],[8,20],[8,20],[8,20]]; // Sun..Sat
const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function nowOttawa(){
  const p = Object.fromEntries(new Intl.DateTimeFormat("en-CA",{timeZone:"America/Toronto",weekday:"short",hour:"numeric",minute:"numeric",hourCycle:"h23"}).formatToParts(new Date()).map(x=>[x.type,x.value]));
  return {day:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(p.weekday), h:+p.hour + +p.minute/60};
}
const fmt = h => (h>12?h-12:h)+(h>=12?" PM":" AM");
const N = nowOttawa(), [o,c] = HOURS[N.day];
const OPEN = N.h>=o && N.h<c;
const nextOpen = N.h<o ? `today at ${fmt(o)}` : `tomorrow at ${fmt(HOURS[(N.day+1)%7][0])}`;

const store = {get(){try{return JSON.parse(localStorage.getItem("phin-pick"))}catch(e){return null}}, set(v){try{localStorage.setItem("phin-pick",JSON.stringify(v))}catch(e){}}};

// bottom-to-top layers [colour, share] for each drink
const POUR = {
 "Macchiato":[["#2a140a",.7],["#efe0cc",.3]], "Drip Coffee":[["#3a1d0e",1]],
 "Phin đen":[["#2a140a",1]], "Phin đen sữa":[["#f3ead8",.28],["#3a1d0e",.72]], "Cà phê muối":[["#3a1d0e",.7],["#e9dcc4",.3]],
 "Phin bạc xỉu":[["#f3ead8",.45],["#9a6a44",.55]], "Espresso":[["#2a140a",.8],["#c58a4a",.2]], "Americano":[["#3a1d0e",1]],
 "Latte":[["#c89a6a",.85],["#f1e4cf",.15]], "Cold Brew":[["#2f170b",1]], "Coco Latte":[["#d2ab80",.8],["#f6efe3",.2]],
 "Hazelnut Latte":[["#b98556",.85],["#f1e4cf",.15]], "Mocha":[["#5b3020",.85],["#efe0cc",.15]],
 "Matcha Latte":[["#f1ece0",.4],["#8db15a",.6]], "Matcha Coconut":[["#f7f2e8",.45],["#8db15a",.55]], "Matcha Rose":[["#f2c9cf",.35],["#8db15a",.65]],
 "Matcha Strawberry":[["#e98a95",.4],["#f3e7e2",.2],["#8db15a",.4]], "Coco - Ado":[["#efe3cf",1]], "Lemonade":[["#f4e27c",1]],
 "Honey Lemonade":[["#efc95a",1]], "Hot Chocolate":[["#5a2f1c",.88],["#f1e4cf",.12]], "Honey Chrysanthemum Tea":[["#e6c35c",1]],
 "Ayurvedic Ginger Fresh":[["#e0b45a",1]], "Lavender Earl Grey":[["#a8673a",1]], "Jasmine Silver Needles":[["#ecd99a",1]],
 "Chamomile Blossom":[["#f0d47a",1]], "Anxi Tieguanyin":[["#d9b45a",1]], "Blackberry Green Bliss":[["#7a3a5c",1]], "Oolong":[["#b9773a",1]],
};

function grad(name){
  let at = 0; const stops = (POUR[name]||[["#3a1d0e",1]]).map(([c,f])=>`${c} ${at}% ${at+=f*88}%`);
  return `linear-gradient(to top, ${stops.join(", ")}, transparent ${at}%)`;
}
const mg = name => `<i class="mg" style="background:${grad(name)}"></i>`;
const money = ds => (ds.some(d=>d.from)?"from ":"") + "$" + ds.reduce((s,d)=>s + +d.p, 0).toFixed(2);
// menu sections, signature phin first
const SECTIONS = [
 {k:"phin", t:"Phin Coffee", s:"Slow-dripped through a Vietnamese phin filter. The heart of Phintopia.", img:CAT.phin,
  items:["Phin đen","Phin đen sữa","Cà phê muối","Phin bạc xỉu"]},
 {k:"coffee", t:"Coffee", s:"Espresso classics and lattes, made smooth.", img:CAT.coffee,
  items:["Espresso","Americano","Latte","Cold Brew","Coco Latte","Hazelnut Latte","Mocha","Macchiato","Drip Coffee"]},
 {k:"matcha", t:"Matcha's Corner", s:"Whisked matcha, creamy and bright.", img:CAT.matcha,
  items:["Matcha Latte","Matcha Coconut","Matcha Rose","Matcha Strawberry"]},
 {k:"tea", t:"Tea Collections", s:"White teas, oolongs and herbal infusions.", img:CAT.tea,
  items:["Jasmine Silver Needles","Anxi Tieguanyin","Oolong","Blackberry Green Bliss","Lavender Earl Grey","Chamomile Blossom","Ayurvedic Ginger Fresh"]},
 {k:"seasonal", t:"Seasonal Favourites", s:"Lemonades, cocoa and tropical specials.", img:CAT.seasonal,
  items:["Coco - Ado","Honey Chrysanthemum Tea","Lemonade","Honey Lemonade","Hot Chocolate"]},
];
const FEATURED = ["Matcha Strawberry","Latte","Honey Chrysanthemum Tea","Cà phê muối","Jasmine Silver Needles"];
const ORDER_URL = "https://www.phintopia.ca/menu"; // live checkout hand-off
const savedNames = ()=>{ const s=store.get(); return s ? [].concat(s) : []; };
