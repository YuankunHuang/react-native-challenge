const fruitList = [
  "Apple",
  "Apricots",
  "Avocado",
  "Banana",
  "Blackberries",
  "Blackcurrant",
  "Blueberries",
  "Breadfruit",
  "Cantaloupe",
  "Carambola",
  "Cherimoya",
  "Cherries",
  "Clementine",
  "Coconut Meat",
  "Cranberries",
  "Custard-Apple",
  "Date Fruit",
  "Durian",
  "Elderberries",
  "Feijoa",
  "Figs",
  "Gooseberries",
  "Grapefruit",
  "Grapes",
  "Guava",
  "Honeydew Melon",
  "Jackfruit",
  "Java-Plum",
  "Jujube Fruit",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Longan",
  "Loquat",
  "Lychee",
  "Mandarin",
  "Mango",
  "Mangosteen",
  "Mulberries",
  "Nectarine",
  "Olives",
  "Orange",
  "Papaya",
  "Passion Fruit",
  "Peaches",
  "Pear",
  "Pineapple",
  "Pitanga",
  "Plantain",
  "Plums",
  "Pomegranate",
  "Prickly Pear",
  "Prunes",
  "Pummelo",
  "Quince",
  "Raspberries",
  "Rhubarb",
  "Rose-Apple",
  "Sapodilla",
  "Soursop",
  "Strawberries",
  "Sugar-Apple",
  "Tamarind",
  "Tangerine",
  "Watermelon",
];

const vegetableList = [
  "Amaranth Leaves",
  "Arrowroot",
  "Artichoke",
  "Arugula",
  "Asparagus",
  "Bamboo Shoots",
  "Beans, Green",
  "Beets",
  "Belgian Endive",
  "Bitter Melon*",
  "Bok Choy",
  "Broadbeans (Fava Beans)",
  "Broccoli",
  "Broccoli Rabe",
  "Brussel Sprouts",
  "Cabbage, Green",
  "Cabbage, Red",
  "Carrot",
  "Cassava (Yuca Root)",
  "Cauliflower",
  "Celeriac (Celery Root)",
  "Celery",
  "Chayote*",
  "Chicory (Curly Endive)",
  "Collards",
  "Corn",
  "Crookneck",
  "Cucumber",
  "Daikon",
  "Dandelion Greens",
  "Edamame, Soybeans",
  "Eggplant",
  "Fennel",
  "Fiddleheads",
  "Ginger Root",
  "Horseradish",
  "Jicama",
  "Kale",
  "Kohlrabi",
  "Leeks",
  "Lettuce, Iceberg",
  "Lettuce, Leaf",
  "Lettuce, Romaine",
  "Mushrooms",
  "Mustard Greens",
  "Okra",
  "Onion (Red)",
  "Onions",
  "Parsnip",
  "Peas, Green",
  "Pepper, Green",
  "Pepper, Sweet Red",
  "Potato, Red",
  "Potato, White",
  "Potato, Yellow",
  "Pumpkin",
  "Radicchio",
  "Radishes",
  "Rutabaga",
  "Salsify (Oysterplant)",
  "Shallots",
  "Snow Peas",
  "Sorrel (Dock)",
  "Spaghetti Squash",
  "Spinach",
  "Squash, Butternut",
  "Sugar Snap Peas",
  "Sweet Potato",
  "Swiss Chard",
  "Tomatillo",
  "Tomato",
  "Turnip",
  "Watercress",
  "Yam Root",
  "Zucchini",
];

const seafoodList = [
  "Sablefish",
  "Salmon",
  "Sardine",
  "Scallop",
  "Scrod",
  "Sea bass",
  "Patagonian toothfish",
  "Sea trout ",
  "Sea urchin ",
  "Shad",
  "Shellfish",
  "Shrimp",
  "Skate",
  "Smoked fish ",
  "Snow crab ",
  "Soft-shell crab ",
  "Sole",
  "Lobster",
  "Squid",
  "Stone crab ",
  "Striped bass ",
  "Sturgeon",
  "Sunfish",
  "Surimi ",
  "Swordfish",
];
const gibberishSet = [
  "Frisaba el sobre decia, y plaza, deste cuarenombre dellorí de años; era. Frisaba caza. Quierencia, deja enta que podader quebran madrugar destro aco y los velarte, no de años",
  "Von den Anblich lieber: Ich jedem und fragen der Mann nich bitt nicht einzugehen. Merkt, sagt: Wenn von den Türhüter Mann vom Lande nich seinere",
  "Who would bear to othe law's the shuffles, and, by of so love, and end this he wills bear the in thing afterprises this quieturns off that undiscorns of delay, those bodkin? ",
  "To discorns off that pith that patience the dothe whose the what pause. To be with the under to suffer thus man's we haveller 'tis them? To beart-ache the rub; for thers tural contumely, and naturn no more; ",
];

function generateData(list, baseID) {
  const gibberish =
    gibberishSet[Math.floor(Math.random() * gibberishSet.length)];
  return list.map((name, i) => ({
    id: baseID + i,
    name: name,
    description: `This is ${name}. It is awesome. ` + gibberish,
    timestamp: randomTimeStamp(),
  }));
}

function randomTimeStamp() {
  const lo = +new Date(2010, 0, 1);
  const hi = +new Date();

  return Math.floor(Math.random() * (hi - lo) + lo);
}

export const fruitData = generateData(fruitList, 100);
export const vegetableData = generateData(vegetableList, 200);
export const seafoodData = generateData(seafoodList, 300);
