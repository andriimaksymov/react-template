import { useState } from 'react';
import { ComponentMeta } from '@storybook/react';

import Combobox, { ComboboxItem } from './Combobox';
import Stack from '../Stack';

const top100Films = [
  { key: 'The Shawshank Redemption', value: '1994' },
  { key: 'The Godfather', value: '1972' },
  { key: 'The Godfather: Part II', value: '1974' },
  { key: 'The Dark Knight', value: '2008' },
  { key: '12 Angry Men', value: '1957' },
  { key: "Schindler's List", value: '1993' },
  { key: 'Pulp Fiction', value: '1994' },
  {
    key: 'The Lord of the Rings: The Return of the King',
    value: '2003',
  },
  { key: 'The Good, the Bad and the Ugly', value: '1966' },
  { key: 'Fight Club', value: '1999' },
  {
    key: 'The Lord of the Rings: The Fellowship of the Ring',
    value: '2001',
  },
  {
    key: 'Star Wars: Episode V - The Empire Strikes Back',
    value: '1980',
  },
  { key: 'Forrest Gump', value: '1994' },
  { key: 'Inception', value: 2010 },
  {
    key: 'The Lord of the Rings: The Two Towers',
    value: 2002,
  },
  { key: "One Flew Over the Cuckoo's Nest", value: 1975 },
  { key: 'Goodfellas', value: 1990 },
  { key: 'The Matrix', value: 1999 },
  { key: 'Seven Samurai', value: 1954 },
  {
    key: 'Star Wars: Episode IV - A New Hope',
    value: 1977,
  },
  { key: 'City of God', value: 2002 },
  { key: 'Se7en', value: 1995 },
  { key: 'The Silence of the Lambs', value: 1991 },
  { key: "It's a Wonderful Life", value: 1946 },
  { key: 'Life Is Beautiful', value: 1997 },
  { key: 'The Usual Suspects', value: 1995 },
  { key: 'Léon: The Professional', value: 1994 },
  { key: 'Spirited Away', value: 2001 },
  { key: 'Saving Private Ryan', value: 1998 },
  { key: 'Once Upon a Time in the West', value: 1968 },
  { key: 'American History X', value: 1998 },
  { key: 'Interstellar', value: 2014 },
  { key: 'Casablanca', value: 1942 },
  { key: 'City Lights', value: 1931 },
  { key: 'Psycho', value: 1960 },
  { key: 'The Green Mile', value: 1999 },
  { key: 'The Intouchables', value: 2011 },
  { key: 'Modern Times', value: 1936 },
  { key: 'Raiders of the Lost Ark', value: 1981 },
  { key: 'Rear Window', value: 1954 },
  { key: 'The Pianist', value: 2002 },
  { key: 'The Departed', value: 2006 },
  { key: 'Terminator 2: Judgment Day', value: 1991 },
  { key: 'Back to the Future', value: 1985 },
  { key: 'Whiplash', value: 2014 },
  { key: 'Gladiator', value: 2000 },
  { key: 'Memento', value: 2000 },
  { key: 'The Prestige', value: 2006 },
  { key: 'The Lion King', value: 1994 },
  { key: 'Apocalypse Now', value: 1979 },
  { key: 'Alien', value: 1979 },
  { key: 'Sunset Boulevard', value: 1950 },
  {
    key: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    value: 1964,
  },
  { key: 'The Great Dictator', value: 1940 },
  { key: 'Cinema Paradiso', value: 1988 },
  { key: 'The Lives of Others', value: 2006 },
  { key: 'Grave of the Fireflies', value: 1988 },
  { key: 'Paths of Glory', value: 1957 },
  { key: 'Django Unchained', value: 2012 },
  { key: 'The Shining', value: 1980 },
  { key: 'WALL·E', value: 2008 },
  { key: 'American Beauty', value: 1999 },
  { key: 'The Dark Knight Rises', value: 2012 },
  { key: 'Princess Mononoke', value: 1997 },
  { key: 'Aliens', value: 1986 },
  { key: 'Oldboy', value: 2003 },
  { key: 'Once Upon a Time in America', value: 1984 },
  { key: 'Witness for the Prosecution', value: 1957 },
  { key: 'Das Boot', value: 1981 },
  { key: 'Citizen Kane', value: 1941 },
  { key: 'North by Northwest', value: 1959 },
  { key: 'Vertigo', value: 1958 },
  {
    key: 'Star Wars: Episode VI - Return of the Jedi',
    value: 1983,
  },
  { key: 'Reservoir Dogs', value: 1992 },
  { key: 'Braveheart', value: 1995 },
  { key: 'M', value: 1931 },
  { key: 'Requiem for a Dream', value: 2000 },
  { key: 'Amélie', value: 2001 },
  { key: 'A Clockwork Orange', value: 1971 },
  { key: 'Like Stars on Earth', value: 2007 },
  { key: 'Taxi Driver', value: 1976 },
  { key: 'Lawrence of Arabia', value: 1962 },
  { key: 'Double Indemnity', value: 1944 },
  {
    key: 'Eternal Sunshine of the Spotless Mind',
    value: 2004,
  },
  { key: 'Amadeus', value: 1984 },
  { key: 'To Kill a Mockingbird', value: 1962 },
  { key: 'Toy Story 3', value: 2010 },
  { key: 'Logan', value: 2017 },
  { key: 'Full Metal Jacket', value: 1987 },
  { key: 'Dangal', value: 2016 },
  { key: 'The Sting', value: 1973 },
  { key: '2001: A Space Odyssey', value: 1968 },
  { key: "Singin' in the Rain", value: 1952 },
  { key: 'Toy Story', value: 1995 },
  { key: 'Bicycle Thieves', value: 1948 },
  { key: 'The Kid', value: 1921 },
  { key: 'Inglourious Basterds', value: 2009 },
  { key: 'Snatch', value: 2000 },
  { key: '3 Idiots', value: 2009 },
  { key: 'Monty Python and the Holy Grail', value: 1975 },
];

export default {
  title: 'Components/UI/Combobox',
  component: Combobox,
  argTypes: {
    items: {
      defaultValue: top100Films
    }
  }
} as ComponentMeta<typeof Combobox>;

export const Basic = (args: typeof Combobox) => (
  <Stack justify="center">
    <Combobox
      {...args}
      placeholder="Select"
    />
  </Stack>
);

export const SearchInput = (args: typeof Combobox) => {
  const [comboboxItems, setComboboxItems] = useState<Array<ComboboxItem>>(top100Films);

  const handleChangeValue = (value: string) => {
    setComboboxItems(top100Films.filter((i) => i.value.toString().includes(value)));
  };

  return (
    <Stack justify="center">
      <Combobox
        {...args}
        onInputChange={handleChangeValue}
        items={comboboxItems}
        placeholder="Select"
      />
    </Stack>
  )
};