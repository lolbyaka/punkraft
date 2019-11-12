import uuid from 'uuid';

const duration = 700;

const menu = [
  {
    title: 'The Flying Inn',
    category: 'beer',
    id: uuid(),
    items: [
      {
        title: 'Hedone',
        price: '99/159',
        content: [
          'Untappd: 3.88',
          'Style: IPA Session',
          'IBU: 40, ABV: 4.5',
          '0,25/04',
        ],
        id: uuid(),
      },
      {
        title: 'Scarlet',
        price: '99/159',
        content: [
          'Untappd: 3.91',
          'Style: Sour Fruited',
          'IBU: N/A, ABV: 6.0',
          '0,25/04',
        ],
        id: uuid(),
      },
      {
        title: 'Stereogram',
        price: '99/159',
        content: [
          'Untappd: 3.87',
          'Style: Pale Ale New England',
          'IBU: 45, ABV: 5.5',
          '0,25/04',
        ],
        id: uuid(),
      },
      {
        title: 'STANCZUK',
        price: '99/159',
        content: [
          'Untappd: 3.65',
          'Style: IPA New England',
          'IBU: 50, ABV: 6.5',
          '0,25/04',
        ],
        id: uuid(),
      },
      {
        title: 'Ofelia',
        price: '99/159',
        content: [
          'Untappd: 4.01',
          'Style: Farmhouse Ale',
          'IBU: 30, ABV: 7.4',
          '0,25/04',
        ],
        id: uuid(),
      },
      {
        title: 'Lamia',
        price: '99/159',
        content: [
          'Untappd: 3.78',
          'Style: IPA New England',
          'IBU: N/A, ABV: 7.0',
          '0,25/04',
        ],
        id: uuid(),
      },
    ],
  },
  {
    title: 'De Brabandere',
    category: 'beer',
    id: uuid(),
    items: [
      {
        title: 'Petrus Aged Pale',
        price: '79/119',
        content: [
          'Untappd: 3.78',
          'Style: Sour',
          'IBU: 24, ABV: 7.3',
          '0,25/04',
        ],
        id: uuid(),
      },
    ],
  },
  {
    title: 'Jungle',
    category: 'beer',
    id: uuid(),
    items: [
      {
        title: 'Ritual',
        price: '69/109',
        content: [
          'Untappd: 4.10',
          'Style: Gose',
          'IBU: 12, ABV: 5',
          '0,25/04',
        ],
        id: uuid(),
      },
    ],
  },
  {
    title: 'Rebrew',
    category: 'food',
    id: uuid(),
    items: [
      {
        title: 'Aurora',
        price: '48/75',
        content: [
          'Untappd: 3.87',
          'Style: Stout',
          'IBU: 40, ABV: 5.4',
          '0,25/04',
        ],
        id: uuid(),
      },
      {
        title: 'Waka Banana',
        price: '79',
        content: [
          'Untappd: 4.01',
          'Style: IPA Milkshake',
          'IBU: N/A, ABV: 5.5',
          '0,33',
        ],
        id: uuid(),
      },
    ],
  },
  {
    title: 'KLB',
    category: 'food',
    id: uuid(),
    items: [
      {
        title: 'Dope',
        price: '59/89',
        content: [
          'Untappd: 3.98',
          'Style: IPA Milkshake',
          'IBU: 45, ABV: 5.35',
          '0,25/0,4',
        ],
        id: uuid(),
      },
      {
        title: 'Dark Side',
        price: '48/75',
        content: [
          'Untappd: 4.47',
          'Style: Munich Dunkel',
          'IBU: 25, ABV: 6',
          '0,25/0,4',
        ],
        id: uuid(),
      },
    ],
  },
  {
    title: 'Volta',
    category: 'food',
    id: uuid(),
    items: [
      {
        title: 'Cometa',
        price: '48/75',
        content: [
          'Untappd: 3.92',
          'Style: IPA American',
          'IBU: 50, ABV: 5.4',
          '0,25/0,4',
        ],
        id: uuid(),
      },
      {
        title: 'Pure Evil',
        price: '53/85',
        content: [
          'Untappd: 4.01',
          'Style: IPA New England',
          'IBU: 38, ABV: 6.9',
          '0,25/0,4',
        ],
        id: uuid(),
      },
      {
        title: 'Haze Blaze',
        price: '53/85',
        content: [
          'Untappd: 3.79',
          'Style: IPA',
          'IBU: 40, ABV: 6.0',
          '0,25/0,4',
        ],
        id: uuid(),
      },
    ],
  },
  {
    title: 'VarVar',
    category: 'food',
    id: uuid(),
    items: [
      {
        title: 'Blanche De Blacnhe',
        price: '48/75',
        content: [
          'Untappd: 3.51',
          'Style: Witbier',
          'IBU: 13, ABV: 4.8',
          '0,25/0,4',
        ],
        id: uuid(),
      },
      {
        title: 'Milk Stout',
        price: '48/75',
        content: [
          'Untappd: 3.80',
          'Style: Stout Milk',
          'IBU: 30, ABV: 6',
          '0,25/0,4',
        ],
        id: uuid(),
      },
      {
        title: 'Imperial Stout',
        price: '79/119',
        content: [
          'Untappd: 3.91',
          'Style: Stout Russian Imperial',
          'IBU: 52, ABV: 9.0',
          '0,25/0,4',
        ],
        id: uuid(),
      },
      {
        title: 'Captain Salt',
        price: '48/75',
        content: [
          'Untappd: 3.69',
          'Style: Sour Gose',
          'IBU: 10, ABV: 5.0',
          '0,25/0,4',
        ],
        id: uuid(),
      },
    ],
  },
  {
    title: 'Gonzo',
    category: '18',
    id: uuid(),
    items: [
      {
        title: 'Sour Ananas',
        price: '48/75',
        content: [
          'Untappd: 3.81',
          'Style: Sour',
          'IBU: N/A, ABV: 5.0',
          '0,25/0,4',
        ],
        id: uuid(),
      },
    ],
  },
  {
    title: 'Mova',
    category: '18',
    id: uuid(),
    items: [
      {
        title: 'Dark Chocolate',
        price: '48/75',
        content: [
          'Untappd: 4.04',
          'Style: Stout',
          'IBU: 25, ABV: 6.4',
          '0,25/0,4',
        ],
        id: uuid(),
      },
      {
        title: 'Hercules',
        price: '48/75',
        content: [
          'Untappd: 3.84',
          'Style: Porter',
          'IBU: 25, ABV: 6.4',
          '0,25/0,4',
        ],
        id: uuid(),
      },
    ],
  },
  {
    title: 'Underwood',
    category: '18',
    id: uuid(),
    items: [
      {
        title: 'Kyiv Lager',
        price: '48/75',
        content: [
          'Untappd: 3.36',
          'Style: Lager',
          'IBU: 21, ABV: 5.1',
          '0,25/0,4',
        ],
        id: uuid(),
      },
    ],
  },
  {
    title: 'Black Snake',
    category: '18',
    id: uuid(),
    items: [
      {
        title: 'Norge Apricot',
        price: '44/69',
        content: [
          'Untappd: [new]',
          'Style: Farmhouse Ale',
          'IBU: N/A, ABV: 4.8',
          '0,25/0,4',
        ],
        id: uuid(),
      },
    ],
  },
];

const initFilters = [
  {
    title: 'Beer',
    icon: `${process.env.PUBLIC_URL}/beer.svg`,
    key: 'beer',
  },
  {
    title: 'Foor & Drinks',
    icon: `${process.env.PUBLIC_URL}/food.svg`,
    key: 'food',
  },
  {
    title: '18+',
    icon: `${process.env.PUBLIC_URL}/18.svg`,
    key: '18',
  },
];

export const loadFilters = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(initFilters);
    }, duration);
  });

export const loadMenu = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(menu);
    }, duration);
  });
