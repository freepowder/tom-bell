

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
 ]


