const duration = 700;

const menu = [
  {
    title: "The Flying Inn",
    category: "beer",
    items: [
      {
        title: "Hedone",
        price: "99/159",
        content: [
          "Untappd: 3.88",
          "Style: IPA Session",
          "IBU: 40, ABV: 4.5",
          "0,25/04"
        ]
      },
      {
        title: "Scarlet",
        price: "99/159",
        content: [
          "Untappd: 3.91",
          "Style: Sour Fruited",
          "IBU: N/A, ABV: 6.0",
          "0,25/04"
        ]
      },
      {
        title: "Stereogram",
        price: "99/159",
        content: [
          "Untappd: 3.87",
          "Style: Pale Ale New England",
          "IBU: 45, ABV: 5.5",
          "0,25/04"
        ]
      },
      {
        title: "STANCZUK",
        price: "99/159",
        content: [
          "Untappd: 3.65",
          "Style: IPA New England",
          "IBU: 50, ABV: 6.5",
          "0,25/04"
        ]
      },
      {
        title: "Ofelia",
        price: "99/159",
        content: [
          "Untappd: 4.01",
          "Style: Farmhouse Ale",
          "IBU: 30, ABV: 7.4",
          "0,25/04"
        ]
      },
      {
        title: "Lamia",
        price: "99/159",
        content: [
          "Untappd: 3.78",
          "Style: IPA New England",
          "IBU: N/A, ABV: 7.0",
          "0,25/04"
        ]
      }
    ]
  },
  {
    title: "De Brabandere",
    category: "beer",
    items: [
      {
        title: "Petrus Aged Pale",
        price: "79/119",
        content: [
          "Untappd: 3.78",
          "Style: Sour",
          "IBU: 24, ABV: 7.3",
          "0,25/04"
        ]
      }
    ]
  },
  {
    title: "Jungle",
    category: "beer",
    items: [
      {
        title: "Ritual",
        price: "69/109",
        content: ["Untappd: 4.10", "Style: Gose", "IBU: 12, ABV: 5", "0,25/04"]
      }
    ]
  },
  {
    title: "Rebrew",
    category: "food",
    items: [
      {
        title: "Aurora",
        price: "48/75",
        content: [
          "Untappd: 3.87",
          "Style: Stout",
          "IBU: 40, ABV: 5.4",
          "0,25/04"
        ]
      },
      {
        title: "Waka Banana",
        price: "79",
        content: [
          "Untappd: 4.01",
          "Style: IPA Milkshake",
          "IBU: N/A, ABV: 5.5",
          "0,33"
        ]
      }
    ]
  },
  {
    title: "KLB",
    category: "food",
    items: [
      {
        title: "Dope",
        price: "59/89",
        content: [
          "Untappd: 3.98",
          "Style: IPA Milkshake",
          "IBU: 45, ABV: 5.35",
          "0,25/0,4"
        ]
      },
      {
        title: "Dark Side",
        price: "48/75",
        content: [
          "Untappd: 4.47",
          "Style: Munich Dunkel",
          "IBU: 25, ABV: 6",
          "0,25/0,4"
        ]
      }
    ]
  },
  {
    title: "Volta",
    category: "food",
    items: [
      {
        title: "Cometa",
        price: "48/75",
        content: [
          "Untappd: 3.92",
          "Style: IPA American",
          "IBU: 50, ABV: 5.4",
          "0,25/0,4"
        ]
      },
      {
        title: "Pure Evil",
        price: "53/85",
        content: [
          "Untappd: 4.01",
          "Style: IPA New England",
          "IBU: 38, ABV: 6.9",
          "0,25/0,4"
        ]
      },
      {
        title: "Haze Blaze",
        price: "53/85",
        content: [
          "Untappd: 3.79",
          "Style: IPA",
          "IBU: 40, ABV: 6.0",
          "0,25/0,4"
        ]
      }
    ]
  },
  {
    title: "VarVar",
    category: "food",
    items: [
      {
        title: "Blanche De Blacnhe",
        price: "48/75",
        content: [
          "Untappd: 3.51",
          "Style: Witbier",
          "IBU: 13, ABV: 4.8",
          "0,25/0,4"
        ]
      },
      {
        title: "Milk Stout",
        price: "48/75",
        content: [
          "Untappd: 3.80",
          "Style: Stout Milk",
          "IBU: 30, ABV: 6",
          "0,25/0,4"
        ]
      },
      {
        title: "Imperial Stout",
        price: "79/119",
        content: [
          "Untappd: 3.91",
          "Style: Stout Russian Imperial",
          "IBU: 52, ABV: 9.0",
          "0,25/0,4"
        ]
      },
      {
        title: "Captain Salt",
        price: "48/75",
        content: [
          "Untappd: 3.69",
          "Style: Sour Gose",
          "IBU: 10, ABV: 5.0",
          "0,25/0,4"
        ]
      }
    ]
  },
  {
    title: "Gonzo",
    category: "18",
    items: [
      {
        title: "Sour Ananas",
        price: "48/75",
        content: [
          "Untappd: 3.81",
          "Style: Sour",
          "IBU: N/A, ABV: 5.0",
          "0,25/0,4"
        ]
      }
    ]
  },
  {
    title: "Mova",
    category: "18",
    items: [
      {
        title: "Dark Chocolate",
        price: "48/75",
        content: [
          "Untappd: 4.04",
          "Style: Stout",
          "IBU: 25, ABV: 6.4",
          "0,25/0,4"
        ]
      },
      {
        title: "Hercules",
        price: "48/75",
        content: [
          "Untappd: 3.84",
          "Style: Porter",
          "IBU: 25, ABV: 6.4",
          "0,25/0,4"
        ]
      }
    ]
  },
  {
    title: "Underwood",
    category: "18",
    items: [
      {
        title: "Kyiv Lager",
        price: "48/75",
        content: [
          "Untappd: 3.36",
          "Style: Lager",
          "IBU: 21, ABV: 5.1",
          "0,25/0,4"
        ]
      }
    ]
  },
  {
    title: "Black Snake",
    category: "18",
    items: [
      {
        title: "Norge Apricot",
        price: "44/69",
        content: [
          "Untappd: [new]",
          "Style: Farmhouse Ale",
          "IBU: N/A, ABV: 4.8",
          "0,25/0,4"
        ]
      }
    ]
  }
];

const initFilters = [
  {
    title: "Beer",
    icon: `${process.env.PUBLIC_URL}/beer.svg`,
    key: "beer"
  },
  {
    title: "Foor & Drinks",
    icon: `${process.env.PUBLIC_URL}/food.svg`,
    key: "food"
  },
  {
    title: "18+",
    icon: `${process.env.PUBLIC_URL}/18.svg`,
    key: "18"
  }
];

export const loadFilters = () => {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve(initFilters);
    }, duration);
  });
};

export const loadMenu = () => {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve(menu);
    }, duration);
  });
};
