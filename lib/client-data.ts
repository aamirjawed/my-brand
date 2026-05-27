export interface ClientPartner {
  id: string;
  name: string;
  logoSrc: string; // local path under /public
}

export const CLIENT_PARTNERS: ClientPartner[] = [
  { id: "google",              name: "Google",               logoSrc: "/images/clients/google.png"              },
  { id: "flipkart",            name: "Flipkart",             logoSrc: "/images/clients/flipkart.png"            },
  { id: "ola",                 name: "Ola",                  logoSrc: "/images/clients/ola.png"                 },
  { id: "zomato",              name: "Zomato",               logoSrc: "/images/clients/zomato.png"              },
  { id: "swiggy",              name: "Swiggy",               logoSrc: "/images/clients/swiggy.png"              },
  { id: "blinkit",             name: "Blinkit",              logoSrc: "/images/clients/blinkit.png"             },
  { id: "zepto",               name: "Zepto",                logoSrc: "/images/clients/zepto.png"               },
  { id: "croma",               name: "Croma",                logoSrc: "/images/clients/croma.png"               },
  { id: "times-of-india",      name: "Times of India",       logoSrc: "/images/clients/times-of-india.png"      },
  { id: "magicpin",            name: "Magicpin",             logoSrc: "/images/clients/magicpin.png"            },
  { id: "stanza-living",       name: "Stanza Living",        logoSrc: "/images/clients/stanza-living.png"       },
  { id: "mygate",              name: "MyGate",               logoSrc: "/images/clients/mygate.png"              },
  { id: "dreamcast",           name: "Dreamcast",            logoSrc: "/images/clients/dreamcast.png"           },
  { id: "wellness-forever",    name: "Wellness Forever",     logoSrc: "/images/clients/wellness-forever.png"    },
  { id: "enrich",              name: "Enrich Salons",        logoSrc: "/images/clients/enrich.svg"              },
  { id: "enerparc",            name: "Enerparc",             logoSrc: "/images/clients/enerparc.png"            },
  { id: "samoh",               name: "Samoh",                logoSrc: "/images/clients/samoh.png"               },
  { id: "biguine",             name: "Biguine",              logoSrc: "/images/clients/biguine.svg"             },
  { id: "countertops-gallery", name: "Countertops Gallery",  logoSrc: "/images/clients/countertops-gallery.png" },
  { id: "showpass-events",     name: "ShowPass Events",      logoSrc: "/images/clients/showpass-events.png"     },
  { id: "eventflow-systems",   name: "EventFlow",            logoSrc: "/images/clients/eventflow-systems.svg"   }
];
