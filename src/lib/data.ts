

export const HERO_VIDEO:VIDEO =
    {
      title: 'Camera Work Reel',
      url: 'https://player.vimeo.com/video/189345383',
      slug: 'work-reel',
      description:''
    }


export type VIDEO = {
  url:string;
  title:string;
  slug:string;
  description:string
  tags?:string []
}

export const VIDEOS:VIDEO[] = [
  {
    title: 'Floating Gold',
    url: 'https://www.youtube.com/embed/-YjpTv3uRpk',
    slug: 'floating-gold',
    description:'',
    tags: ['featured'],
  },
  {
    title: 'Ley de Vida',
    url: 'https://player.vimeo.com/video/391041714',
    slug: 'ley-de-vida',
    tags: ['featured'],
    description:''
  },
  {
    title: 'Lolly in Marseille',
    url: 'https://player.vimeo.com/video/130638595',
    slug: 'lolly-in-marseille',
    tags: ['featured'],
    description:''
  },
  {
    title: 'Rapha Randonnee',
    url: 'https://player.vimeo.com/video/112388320',
    slug: 'rapha-randonnee',
    tags: ['featured'],
    description:''
  },
  {
    title: 'Alberto goes to Rio',
    url: 'https://player.vimeo.com/video/95965548',
    slug: 'alberto-goes-to-rio',
    tags: ['featured'],
    description:''
  },
  {
    title: 'Shave Club',
    url: 'https://www.youtube.com/embed/OGcPXI-cnyQ',
    slug: 'shave-club',
    tags: ['featured'],
    description:''
  },
  {
    title: 'Anti Privacy Paradise',
    url: 'https://www.youtube.com/embed/q_GBw1Eescs',
    slug: 'anti-privacy-paradise',
    tags: ['featured'],
    description:''
  }
  ,
  //active
   {
    slug: 'wbikes',
    tags: ['active'],
    url: 'https://www.youtube.com/watch?v=1MMO4xqBFH4',
    title: 'W Hotel-How to ride a Fixie',
    description: 'promo video',
  },
  {
    slug: 'hunt',
    tags: ['active'],
    url: 'https://vimeo.com/43598611',
    title: 'The Hunt',
    description: 'Race event promo',
  },
   {
    slug: 'alps',
    tags: ['active'],
    url: 'https://vimeo.com/60491350',
    title: 'Mountainbiking in Alps',
    description: 'adventure video',
  },
  {
    slug: 'spin',
    tags: ['active'],
    url: 'https://vimeo.com/65005670',
    title: 'Ted James Design Encounter',
    description: 'promo video',
  },
   {
    slug: 'cmwc',
    tags: ['active'],
    url: 'https://vimeo.com/43601635',
    title: 'Tokyo Fixed at CMWC Warsaw',
    description: 'promo film',
  },
   {
    slug: 'sofb',
    tags: ['active'],
    url: 'https://vimeo.com/59020660',
    title: 'SOFB at Eurobike',
    description: 'sport editorial',
  },
   {
    slug: 'rapha',
    tags: ['active'],
    url: 'https://www.youtube.com/watch?v=U00O1y6KMWM',
    title: 'Rapha Randonnees',
    description: 'promo film',
  },
   {
    slug: 'cstop',
    tags: ['active'],
    url: 'https://vimeo.com/23073621',
    title: 'Cant Stop',
    description: 'Bicycle Film Festival submission',
  },

   {
    slug: 'vans',
    tags: ['active'],
    url: 'www.youtube.com/embed/Ni9GXYlwIuQ',
    title: 'Vans trick bike by Fixed Gear London',
    description: 'promo video',
  },

   {
    slug: '8bar',
    tags: ['active'],
    url: 'https://vimeo.com/187879317',
    title: '8bar Crit Berlin',
    description: 'event promo video',
  },
   {
    slug: 'cinelli',
    tags: ['enterprise'],
    url: 'https://vimeo.com/59688400',
    title: 'Cinelli at Eurobike',
    description: 'brand presentation',
  },
   {
    slug: 'absolut',
    tags: ['creative'],
    url: 'https://vimeo.com/29361900',
    title: 'ABSOLUT BLANK',
    description: 'street art project',
  },
   {
    slug: 'play',
    tags: ['creative'],
    url: 'https://www.youtube.com/watch?v=2UfYENNwuJc',
    title: 'Playstation 3 - The Essex Guide',
    description: 'promo video',
  },
   {
    slug: 'gophr',
    tags: ['active'],
    url: 'https://www.youtube.com/watch?v=qhBYVMPym5U',
    title: 'Gophr',
    description: 'promo video',
  },
   {
    slug: 'surg',
    tags: ['enterprise'],
    url: 'https://vimeo.com/41498895',
    title: 'Surgery PR',
    description: 'event film',
  },
   {
    slug: 'dface',
    tags: ['creative'],
    url: 'https://vimeo.com/28637772',
    title: 'DFace for Channel 4',
    description: 'promo film',
  },
  {
    slug: 'total',
    tags: ['active'],
    url: 'https://www.youtube.com/watch?v=o3B2a9c0dnU',
    title: 'Total Bikes ',
    description: 'promo video',
  },

  {
    slug: 'shave',
    tags: ['creative'],
    url: 'https://www.youtube.com/watch?v=OGcPXI-cnyQ',
    title: 'City of Lost Beards',
    description: 'promo film',
  },

  {
    slug: 'pizza',
    tags: ['enterprise'],
    url: 'https://vimeo.com/117762414',
    title: 'Pizza Luxe',
    description: 'campaign film',
  },

   {
    slug: 'delooze',
    tags: ['creative'],
    url: 'https://www.youtube.com/watch?v=CI5FHPclYUk',
    title: 'DeLooze - Moon of Awe',
    description: 'music video',
  },
   {
    slug: 'hender',
    tags: ['corporate'],
    url: 'https://vimeo.com/69131602',
    title: 'Henderson for LYXOR',
    description: 'portfolio profile video',
  },
   {
    slug: 'jamaica',
    tags: ['corporate'],
    url: 'https://www.youtube.com/watch?v=LOCJxAaWZpU',
    title: 'fDi On Location - Jamaica',
    description: 'editorial video',
  },
   {
    slug: 'AmnestyIan',
    tags: ['corporate'],
    url: 'https://vimeo.com/30380750',
    title: 'Amnesty International ',
    description: 'Write for Letters film with Ian Hislop',
  },
   {
    slug: 'AmnestyMA',
    tags: ['corporate'],
    url: 'https://vimeo.com/39756184',
    title: 'Amnesty International ',
    description: 'event promo',
  },
   {
    slug: 'nsa',
    tags: ['corporate'],
    url: 'https://www.youtube.com/watch?v=q_GBw1Eescs',
    title: 'Anti-Privacy Paradise - RT',
    description: 'investigative journalism',
  },


  {
    slug: 'sus',
    tags: ['corporate'],
    url: 'https://www.youtube.com/watch?v=U3FAlByYnoE',
    title: 'The Guardian - Suistainable Living',
    description: 'documentary',
  },

   {
    slug: 'stlucia',
    tags: ['corporate'],
    url: 'https://www.youtube.com/watch?v=H5Q7iYggxTA',
    title: 'fDi On Location St Lucia',
    description: 'editorial video',
  },
   {
    slug: 'shuttle',
    tags: ['creative'],
    url: 'https://www.youtube.com/watch?v=xZIJ2h0q-SI',
    title: 'Marco Shuttle - Back here',
    description: 'music video',
  },
   {
    slug: 'amy',
    tags: ['creative'],
    url: 'https://vimeo.com/112661207',
    title: 'Tears dry on their own - BSL',
    description: 'sign language music video',
  },
   {
    slug: 'ventsa',
    tags: ['creative'],
    url: 'https://vimeo.com/24608727',
    title: 'Ventsa for Street Summer',
    description: 'Film for Channel 4',
  },
   {
    slug: 'selfies',
    tags: ['creative'],
    url: 'https://www.youtube.com/watch?v=K63llxnfVNc',
    title: '#Thinkfluencer Selfies',
    description: 'The Guardian satire editorial',
  },
   {
    slug: 'astana',
    tags: ['corporate'],
    url: 'https://www.youtube.com/watch?v=Nuc-Vu2VEtU',
    title: 'fDi On Location Astana',
    description: 'editorial video',
  },

   {
    slug: 'gemma',
    tags: ['creative'],
    url: 'https://vimeo.com/195389082',
    title: '24 Cloudy Head',
    description: 'fashion promo',
  },
   {
    slug: 'kinetica',
    tags: ['creative'],
    url: 'https://vimeo.com/61072872',
    title: 'Kinetica Art Fair',
    description: 'event promo',
  },
   {
    slug: 'desigual',
    tags: ['enterprise'],
    url: 'https://vimeo.com/31080786',
    title: 'Desigual',
    description: 'event video',
  },

  {
    slug: 'delia',
    tags: ['creative'],
    url: 'https://www.youtube.com/watch?v=x7Ey6mmmhwE',
    title: 'Psycho Delia',
    description: 'music video',
  },

  {
    slug: 'malta',
    tags: ['corporate'],
    url: 'https://www.pwmnet.com/Video/(videoid)/5231975970001?bcpid=3676506382001&bckey=AQ~~,AAAACwWK8QE~,-Mpjyq9fWG7mxYiW0i6uOy0JgWBoylFo&bclid=86670935001&bctid=5105944668001',
    title: 'PMW FT Malta',
    description: 'financial editorial',
  },
   {
    slug: 'tinder',
    tags: ['corporate'],
    url: 'https://www.youtube.com/watch?v=mBOSJI3glZA',
    title: 'Tinder Story, BBC Newsnight',
    description: 'journalism',
  },
   {
    slug: 'solar',
    tags: ['corporate'],
    url: 'https://www.youtube.com/watch?v=0npogdP6zVI',
    title: 'George Osbourne surprise',
    description: 'journalism',
  },
 {
    slug: 'rak',
    tags: ['corporate'],
    url: 'https://www.youtube.com/watch?v=5PwF7X34KFc',
    title: 'fDi On Location Ras Al Khaimah',
    description: 'editorial video',
  },
 {
    slug: 'grub',
    tags: ['enterprise'],
    url: 'https://vimeo.com/107447009',
    title: 'Grub Club',
    description: 'campaign film',
  },
  {
    slug: 'togethera',
    tags: ['enterprise'],
    url: 'https://vimeo.com/126697860',
    title: 'Togethera',
    description: 'campaign film',
  },
   {
    slug: 'eat17',
    tags: ['enterprise'],
    url: 'https://vimeo.com/118113899',
    title: 'Eat 17 Bacon jam',
    description: 'campaign film',
  },
  {
    slug: 'polo',
    tags: ['enterprise'],
    url: 'https://vimeo.com/76032895',
    title: 'Polo&Bike at Euroibike',
    description: 'event video',
  },
   {
    slug: 'superga',
    tags: ['enterprise'],
    url: 'https://vimeo.com/45225364',
    title: 'House of Holland per Superga',
    description: 'event video',
  },
   {
    title: 'Wayv',
    slug: 'wayv',
    tags: ['enterprise'],
    url: 'https://vimeo.com/109733256',
    description: 'product launch campaign film',
  },
  {
    slug: 'samba',
    tags: ['enterprise'],
    url: 'https://vimeo.com/103739882',
    title: 'Samba Swirl',
    description: 'campaign film',
  },
   {
    slug: 'white party',
    tags: ['enterprise'],
    url: 'https://vimeo.com/200902014',
    title: 'White Party',
    description: 'event video',
  },
   {
    slug: 'astar',
    tags: ['enterprise'],
    url: 'https://vimeo.com/104382752',
    title: 'A Star Pets',
    description: 'campaign film',
  },
   {
    slug: 'farm',
    tags: ['enterprise'],
    url: 'https://vimeo.com/100492308',
    title: 'Farm Drop',
    description: 'campaign film',
  },
   {
    slug: 'blind',
    tags: ['enterprise'],
    url: 'https://vimeo.com/96539449',
    title: 'Eye Bridge',
    description: 'campaign film',
  }


];
