const artists = [
  {
    name: "Charlotte De Witte",
    genre: "techno",
    country: "Belgium",
  },
  {
    name: "Thousand Foot Crutch",
    genre: "metal",
    country: "USA",
  },
  {
    name: "Eminem",
    genre: "hip-hop",
    country: "USA",
  },
];

for (const artist of artists) {
  console.log(`${artist.name} from ${artist.country}`);
}

const newArtist = {
  name: "Fleetwood Mac",
  genre: "rock",
  country: "USA",
};
artists.push(newArtist);
for (const artist of artists) {
  console.log(`${artist.name} from ${artist.country}`);
}
