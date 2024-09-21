export const MOCK_DATA_PHOTO_LIST = [
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 1', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 2', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 3', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 4', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 5', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 6', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 7', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 8', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 9', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 10', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 11', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 12', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 13', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 14', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 15', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 16', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 17', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 18', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/unmma82.jpeg', alt: 'Placeholder Image 19', title: 'Product name is quite long in some cases.' },
  { src: 'https://i.imgur.com/2MM9Jqo.png', alt: 'Placeholder Image 20', title: 'Product name is quite long in some cases.' }
];

export const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const shuffledPhotoList = shuffleArray([...MOCK_DATA_PHOTO_LIST]);
