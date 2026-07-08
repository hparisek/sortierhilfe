// Gangfolge 60487-17
// Wird von index.html automatisch geladen
// Erzeugt zwei Buttons: "60487-17 Standard" und "60487-17 Adam"

const GANGFOLGE_17_ROUTE = [
  ["Galvanistr.","16"],["Galvanistr.","14"],["Galvanistr.","12"],["Galvanistr.","10"],["Galvanistr.","8"],
  ["Galvanistr.","5"],["Galvanistr.","7"],["Galvanistr.","9"],
  ["Galvanistr.","11"],["Galvanistr.","13"],["Galvanistr.","15"],["Galvanistr.","17"],["Galvanistr.","19"],["Galvanistr.","21"],
  ["Voltastr.","70"],
  ["Packstation","203"],["Voltastr.","72"],
  ["Ohmstr.","55"],["Ohmstr.","53"],
  ["Ohmstr.","50"],["Ohmstr.","52"],
  ["Ohmstr.","54"],["Ohmstr.","56"],
  ["Voltastr.","78"],
  ["Ohmstr.","61"],["Ohmstr.","63"],
  ["Voltastr.","80"],["Voltastr.","82"],
  ["Ohmstr.","65"],["Ohmstr.","67"],
  ["An der Dammheide","8"],["An der Dammheide","6"],
  ["Voltastr.","84"],
  ["Franklinstr.","61-63"],
  ["Franklinstr.","62"],["Franklinstr.","65"],
  ["Solmsstr.","83-91"],
  ["Franklinstr.","64"],["Franklinstr.","66"],
  ["Solmsstr.","77"],["Solmsstr.","79"],["Solmsstr.","81"],
  ["Solmsstr.","70"],["Solmsstr.","75"],
  ["Solmsstr.","73"],
  ["An der Dammheide","5"],["An der Dammheide","3"],
  ["Solmsstr.","71"],
  ["An der Dammheide","10"],
  ["Solmsstr.","58d"],["Solmsstr.","56"],["Solmsstr.","58"],["Solmsstr.","58a"],["Solmsstr.","58b"],["Solmsstr.","58c"],
  ["Solmsstr.","64"],["Solmsstr.","54"],["Solmsstr.","52"],
  ["Solmsstr.","46"],["Solmsstr.","44"],["Solmsstr.","41"],["Solmsstr.","42"],
  ["Solmsstr.","27-37"],
  ["Solmsstr.","40"],["Solmsstr.","38"],
  ["Packstation","227"],
  ["Solmsstr.","25"],["Solmsstr.","23"],
  ["Solmsstr.","21"],["Solmsstr.","19"],
  ["Solmsstr.","9"],["Solmsstr.","7"],["Solmsstr.","5"],["Solmsstr.","3"],["Solmsstr.","1a"],["Solmsstr.","1"],
  ["Solmsstr.","10a"],["Solmsstr.","14a"],["Solmsstr.","14"],["Solmsstr.","12"],["Solmsstr.","10"],
  ["Solmsstr.","2"],["Solmsstr.","4"],
  ["Solmsstr.","6"],["Solmsstr.","6a"],
  ["Solmsstr.","8"],["Solmsstr.","18"],
  ["Solmsstr.","22"],["Solmsstr.","20"],
  ["Galvanistr.","34"],["Galvanistr.","31"],
  ["Galvanistr.","32"],["Galvanistr.","30"],
  ["Galvanistr.","29"],["Galvanistr.","28"],
  ["Galvanistr.","22"],["Galvanistr.","24"],
  ["Ohmstr.","37"],["Ohmstr.","35"],["Ohmstr.","46"],["Ohmstr.","44"],
  ["Ohmstr.","33"],["Ohmstr.","31"],["Ohmstr.","29"],["Ohmstr.","30"],["Ohmstr.","27"],
  ["Pfingstbrunnenstr.","29"],["Pfingstbrunnenstr.","31"],["Pfingstbrunnenstr.","33"],["Pfingstbrunnenstr.","35"],
  ["Pfingstbrunnenstr.","48"],["Pfingstbrunnenstr.","46"],["Pfingstbrunnenstr.","44"],["Pfingstbrunnenstr.","42"],["Pfingstbrunnenstr.","40"],["Pfingstbrunnenstr.","36"],
  ["Ohmstr.","21"],["Ohmstr.","20"],["Ohmstr.","18"],["Ohmstr.","19"],
  ["Ohmstr.","16"],["Ohmstr.","16a"],
  ["Ohmstr.","14"],["Ohmstr.","17"],["Ohmstr.","15"],["Ohmstr.","13"],["Ohmstr.","10"],["Ohmstr.","12"],
  ["Kreuznacher Str.","37"],["Kreuznacher Str.","38"],["Kreuznacher Str.","39"],["Kreuznacher Str.","40"],["Kreuznacher Str.","41"],["Kreuznacher Str.","43"],["Kreuznacher Str.","44"],
  ["Kreuznacher Str.","45"],["Kreuznacher Str.","45a"],["Kreuznacher Str.","46"],["Kreuznacher Str.","47"],["Kreuznacher Str.","48"],["Kreuznacher Str.","49"],["Kreuznacher Str.","50"],["Kreuznacher Str.","51-52"],
  ["Kuhwaldstr.","61"],["Kuhwaldstr.","60"],["Kuhwaldstr.","64"],["Kuhwaldstr.","68"],
  ["Kreuznacher Str.","35"],["Kreuznacher Str.","33"],["Kreuznacher Str.","32"],["Kreuznacher Str.","30"]
];

const GANGFOLGE_17_ADAM_FIRST = [["Franklinstr.","61-63"],["Voltastr.","84"],["Solmsstr.","27-37"]];

const GANGFOLGE_17_ALIASES = {
  "galvanistrasse":"Galvanistr.","galvanistr":"Galvanistr.",
  "voltastrasse":"Voltastr.","voltastr":"Voltastr.",
  "ohmstrasse":"Ohmstr.","ohmstr":"Ohmstr.",
  "franklinstrasse":"Franklinstr.","franklinstr":"Franklinstr.",
  "solmsstrasse":"Solmsstr.","solmsstr":"Solmsstr.",
  "sonnenstrasse":"Solmsstr.","sonnenstr":"Solmsstr.","sonnstrasse":"Solmsstr.",
  "solmstrasse":"Solmsstr.","salmsstrasse":"Solmsstr.",
  "an der dammheide":"An der Dammheide","dammheide":"An der Dammheide",
  "pfingstbrunnenstrasse":"Pfingstbrunnenstr.","pfingstbrunnenstr":"Pfingstbrunnenstr.",
  "kreuznacher strasse":"Kreuznacher Str.","kreuznacher str":"Kreuznacher Str.",
  "kuhwaldstrasse":"Kuhwaldstr.","kuhwaldstr":"Kuhwaldstr.",
  "packstation":"Packstation"
};

// Wird von der App registriert
if(typeof registerGangfolge === 'function') {
  // Standard
  registerGangfolge({
    name: '60487-17 Standard',
    route: GANGFOLGE_17_ROUTE,
    aliases: GANGFOLGE_17_ALIASES
  });
  // Adam: die ersten drei Adressen vorne, Rest ohne diese drei
  const adamSkip = new Set(GANGFOLGE_17_ADAM_FIRST.map(([s,h])=>s+'|'+h.toLowerCase()));
  const adamRoute = [
    ...GANGFOLGE_17_ADAM_FIRST,
    ...GANGFOLGE_17_ROUTE.filter(([s,h])=>!adamSkip.has(s+'|'+h.toLowerCase()))
  ];
  registerGangfolge({
    name: '60487-17 Adam',
    route: adamRoute,
    aliases: GANGFOLGE_17_ALIASES
  });
}
