export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const subpages = {
  tittle: 'Lorem Ipsum',
  url: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do 1 <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-2',
    title: 'Things to do 2 <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-3',
    title: 'Things to do 3 <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column 4',
    icon: 'question',
  },
  {
    id: 'column-5',
    listId: 'list-2',
    title: 'Strange column 5',
    icon: 'question',
  },
  {
    id: 'column-6',
    listId: 'list-2',
    title: 'Strange column 6',
    icon: 'question',
  },
  {
    id: 'column-7',
    listId: 'list-3',
    title: 'Strange column 7',
    icon: 'question',
  },
  {
    id: 'column-8',
    listId: 'list-3',
    title: 'Strange column 8',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
  {
    id: 'card-7',
    columnId: 'column-4',
    title: 'Cyberpunk 2077',
  },
  {
    id: 'card-8',
    columnId: 'column-4',
    title: 'Cyberpunk 2077',
  },
];

const initialStoreData = {
  app: { ...pageContents },
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
