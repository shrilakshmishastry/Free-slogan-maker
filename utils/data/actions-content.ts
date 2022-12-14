export interface actionContentType {
  title: string;
  icon: string;
  description: string
}

export const actionContent: actionContentType[] = [
  {
    title: 'Search',
    icon: require('/images/search.svg'),
    description: 'Simply add a keyword or a term related to your business in the slogan maker search box. Wait for the magic to happen.'
  },
  {
    title: 'Select',
    icon: require('/images/select.svg'),
    description: 'Choose from thousands of options generated by the slogan maker that fit your needs.',
  },
  {
    title: 'Stand out',
    icon: require('/images/standout.svg'),
    description: `Congrats on your new slogan. It's time to win the world!`,
  },
];

export const freeProdcts: actionContentType[] = [
  {
    icon: require('images/privacyPolicy.svg'),
    title: 'Privacy Policy Generator',
    description: 'Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.'
  }, {
    icon: require('images/termsAndCondition.svg'),
    title: 'Terms & Conditions Generator',
    description: 'Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.'
  }, {
    icon: require('images/domainNameGenerator.svg'),
    title: 'Domain Name Generator',
    description: 'Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.'
  }, {
    icon: require('images/invoiceGenerator.svg'),
    title: 'Invoice Generator',
    description: 'Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.'
  }
];