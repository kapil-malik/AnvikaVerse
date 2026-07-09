// Placeholder/default content for normal cells. Personal memories can replace
// these generated titles and captions by adding entries to specialCells below.
const titleSeeds = [
  "Laddu Comet",
  "Golu Moon",
  "Dhuchu Stardust",
  "Anvika Ji’s Stairway",
  "Motu Magic Cloud",
  "Gabdullu Gate",
  "Pengullu Parade",
  "Gabdeddy Galaxy",
  "Gabdaflu Bazaar",
  "Finchy Lantern",
  "Fusceshwar Bridge",
  "Reesu Bhai Signal",
  "Root’s Secret Path",
  "Shaw’s Shortcut",
  "Ross Pivot Portal",
  "Joey Snack Cloud",
  "Rachel Ribbon Road",
  "Sheldon’s Logic Stair",
  "Bernadette Sparkle Lab",
  "Phil’s Happy Detour",
  "Cam & Mitch Moonwalk",
  "Michael’s Mischief Office",
  "Jim’s Prank Portal",
  "Wanda’s Wish Bubble",
  "Percy’s Sea-Star Step",
  "BTS Glow Stage",
  "Rookie City Lights"
];

const captionSeeds = [
  "Somewhere in AnvikaVerse, Laddu gets a tiny power-up and pretends it was planned.",
  "Golu energy fills the path with extra birthday sparkle.",
  "Dhuchu walks in like the main character and the clouds politely make way.",
  "Anvika ji has arrived. The universe adjusts its timetable respectfully.",
  "Motu magic activates: one cute step forward, zero explanations required.",
  "Gabdullu waves from the side quest and offers suspiciously wise advice.",
  "Pengullu starts a tiny parade because apparently this step needed drama.",
  "Gabdeddy guards the portal with full soft-toy seriousness.",
  "Gabdaflu sneezes confetti and declares the journey officially blessed.",
  "Finchy spots a clue, looks important, and refuses to elaborate.",
  "Fusceshwar opens a very serious-looking shortcut to somewhere silly.",
  "Reesu bhai sends a signal: proceed carefully, but with style.",
  "Root whispers that the Machine has approved this birthday mission.",
  "Shaw says this is definitely not emotional, then secretly helps anyway.",
  "Ross shouts ‘pivot’ and somehow the path actually turns.",
  "Joey finds snacks in the middle of the universe. Naturally.",
  "Rachel adds sparkle, confidence, and excellent hair energy to the route.",
  "Sheldon calculates the probability of birthday greatness. It is very high.",
  "Bernadette says something tiny and powerful enough to move the stars.",
  "Phil turns this step into a cheerful family adventure, obviously.",
  "Cam and Mitch approve the drama level of this magical crossing.",
  "Michael creates chaos in the office and somehow calls it leadership.",
  "Jim looks at the camera, launches a tiny prank portal, and the journey continues.",
  "Wanda bends reality just enough to add one more birthday surprise.",
  "Percy hears distant waves and prepares for a very casual heroic moment.",
  "A BTS-style glow fills the stage, and the next step gets its own fan chant.",
  "The Rookie squad marks this area safe for birthday exploration."
];

if (titleSeeds.length !== captionSeeds.length) {
  throw new Error("titleSeeds and captionSeeds must stay paired 1-to-1.");
}

const visualSeeds = [
  "birthday",
  "school",
  "garden",
  "beach",
  "chess",
  "movies",
  "books",
  "space",
  "music",
  "math"
];

// Use specialCells to personalize important steps for Anvika with custom
// boosts, detours, quizzes, titles, captions, and movement.
const specialCells = {
  7: {
    type: "boost",
    title: "Ginger Ale and Romance Cake",
    caption: "A fizzy movie-night portal opens with ginger ale, Britannia Romance fruit cake, and the exact right sitcom mood.",
    move: 5,
    image: "/images/step-007.png"
  },
  10: {
    type: "quiz",
    title: "Harry Potter Fun Trivia",
    caption: "A dramatic Lockhart-shaped sparkle enters the room, hair perfectly arranged and facts only partly attached.",
    question: "Which Harry Potter character still makes Anvika and Papa laugh on the bed?",
    options: ["Hagrid", "Gilderoy Lockhart", "Argus Filch", "Professor Sprout"],
    answerIndex: 1,
    correctMove: 6,
    wrongMove: 1,
    correctText: "Correct. Ten points for ridiculous confidence and excellent memory.",
    wrongText: "Close enough for a giggle. Lockhart is still posing nearby.",
    image: "/images/step-010.png"
  },
  14: {
    type: "detour",
    title: "The Lunch Box Hider",
    caption: "A tiny school mystery appears, complete with one missing lunch box and a very over-serious investigation.",
    move: -2,
    image: "/images/step-014.png"
  },
  18: {
    type: "boost",
    title: "Harry Potter Begins",
    caption: "By age 8, all seven books had been conquered. The bookshelf opens like Platform 9 and three-quarters.",
    move: 6,
    image: "/images/step-018.png"
  },
  21: {
    type: "quiz",
    title: "Harry Potter Serious Trivia",
    caption: "A trivia card appears with suspiciously many werewolves and one very funny private ranking system.",
    question: "Who is the second most important werewolf in AnvikaVerse Harry Potter trivia?",
    options: ["Fenrir Greyback", "Remus Lupin", "Sirius Black", "Bill Weasley"],
    answerIndex: 1,
    correctMove: 5,
    wrongMove: 1,
    correctText: "Correct. Remus Lupin accepts this unusual promotion.",
    wrongText: "A fair guess. The trivia deck is still howling softly.",
    image: "/images/step-021.png"
  },
  24: {
    type: "detour",
    title: "The Sharp Bone Hugs",
    caption: "Daddy offers a hug, but the cheekbones arrive first. The path pauses for soft padding and laughter.",
    move: -3,
    image: "/images/step-024.png"
  },
  27: {
    type: "boost",
    title: "Game-a-thon Win",
    caption: "Nine games, two to three hours, and soft toy champions reporting for duty. The marathon board glows.",
    move: 7,
    image: "/images/step-027.png"
  },
  30: {
    type: "quiz",
    title: "Childhood Rhyme",
    caption: "A tiny bedtime chorus pops up with one gloriously silly missing word.",
    question: "Congratulations, and celebrations, and precipitation and...",
    options: ["Body lotion", "Loose motion", "Birthday potion", "Cloudy commotion"],
    answerIndex: 0,
    correctMove: 4,
    wrongMove: 1,
    correctText: "Perfect. The rhyme still has excellent nonsense engineering.",
    wrongText: "The rhyme wobbles, but it keeps singing kindly.",
    image: "/images/step-030.png"
  },
  33: {
    type: "detour",
    title: "Sigma Sigma Boy",
    caption: "A certain song starts playing in the distance. Anvika gives it one royal eye-roll and redirects the playlist.",
    move: -2,
    image: "/images/step-033.png"
  },
  36: {
    type: "quiz",
    title: "Grown Up Rhyme",
    caption: "The bedtime ritual has evolved, as all great nonsense poetry must.",
    question: "Harmon, Kardon, Pigeon...",
    options: ["Nutri Choice", "Cheesecake", "Bourbon", "Cinnamon"],
    answerIndex: 2,
    correctMove: 5,
    wrongMove: 1,
    correctText: "Correct. The rhyme bows with grown-up silliness.",
    wrongText: "Almost. The bedtime rhyme adjusts its pillow and tries again.",
    image: "/images/step-036.png"
  },
  39: {
    type: "detour",
    title: "No Screen",
    caption: "The screen-time timer appears wearing a tiny crown. It is strict, but not unkind.",
    move: -3,
    image: "/images/step-039.png"
  },
  42: {
    type: "boost",
    title: "Mommy-Daughter Cooking",
    caption: "Dumplings, pad thai, sushi, and brave kitchen experiments form a delicious shortcut.",
    move: 6,
    image: "/images/step-042.png"
  },
  45: {
    type: "quiz",
    title: "Forbidden Webseries",
    caption: "The streaming shelf whispers dramatically about age ratings and patience.",
    question: "Which web series has Anvika not watched yet because it is still forbidden territory?",
    options: ["Young Sheldon", "Modern Family", "The Office", "Friends"],
    answerIndex: 3,
    correctMove: 5,
    wrongMove: 1,
    correctText: "Correct. The age rating guard reluctantly salutes.",
    wrongText: "A gentle miss. The forbidden couch is still reserved.",
    image: "/images/step-045.png"
  },
  49: {
    type: "detour",
    title: "Finish Your Food",
    caption: "A vegetable checkpoint appears. It is tiny, polite, and surprisingly determined.",
    move: -2,
    image: "/images/step-049.png"
  },
  52: {
    type: "boost",
    title: "Chatter With Friends",
    caption: "Aaranya, Ridhisha, Antara, and the friend-circuit light up. The path speeds up just to keep pace.",
    move: 4,
    image: "/images/step-052.png"
  },
  55: {
    type: "quiz",
    title: "Classy Drive Playlist",
    caption: "The car playlist puts on sunglasses and asks one very classy question.",
    question: "Which song is not included in the classy drive playlist?",
    options: ["Mission Impossible Theme", "James Bond Theme", "Don Theme", "Bella Ciao"],
    answerIndex: 3,
    correctMove: 6,
    wrongMove: 1,
    correctText: "Correct. Bella Ciao takes the silly exit ramp.",
    wrongText: "The playlist stays classy and gives you another beat.",
    image: "/images/step-055.png"
  },
  58: {
    type: "detour",
    title: "Naughty Gabdaflu",
    caption: "Gabdaflu dashes across the building, completes mysterious nonsense, and returns looking completely innocent.",
    move: -3,
    image: "/images/step-058.png"
  },
  61: {
    type: "boost",
    title: "Jai Shri Hari",
    caption: "A calm bright step for prayers, Gayatri sadhana, and Mahishasur Mardini Stotram. The path becomes steady and golden.",
    move: 7,
    image: "/images/step-061.png"
  },
  64: {
    type: "quiz",
    title: "First Maths Concept",
    caption: "A triangle appears, slightly confused to have arrived before triangles were officially introduced.",
    question: "What was the first maths concept Anvika learned as a private joke?",
    options: ["Addition", "Subtraction", "Calculus", "Pythagoras Theorem"],
    answerIndex: 3,
    correctMove: 7,
    wrongMove: 1,
    correctText: "Correct. A-squared plus b-squared opens the shortcut.",
    wrongText: "The triangle smiles. It knows it arrived early.",
    image: "/images/step-064.png"
  },
  67: {
    type: "detour",
    title: "Gabdeddy's Leisure Bath",
    caption: "A five-foot teddy enters the laundry saga. Hours pass, and somehow Gabdeddy looks even more adventurous.",
    move: -4,
    image: "/images/step-067.png"
  },
  70: {
    type: "boost",
    title: "AMC Class Rescheduled",
    caption: "The online maths class magically shifts away. A tiny holiday parade marches across the calendar.",
    move: 5,
    image: "/images/step-070.png"
  },
  73: {
    type: "quiz",
    title: "Uday and Majnu",
    caption: "Welcome movie trivia arrives wearing sunglasses and carrying maximum private-joke energy.",
    question: "What is Anil Kapoor's name in the Welcome movie, according to your private joke?",
    options: ["Majnu Bhai", "Sagar", "Majju Bhai", "Munna Hai Munna"],
    answerIndex: 3,
    correctMove: 6,
    wrongMove: 1,
    correctText: "Correct. Munna Hai Munna gets a full dramatic entrance.",
    wrongText: "The joke laughs anyway and lets you keep moving.",
    image: "/images/step-073.png"
  },
  76: {
    type: "detour",
    title: "Newton's Calculus",
    caption: "A calculus book peeks out. Anvika gently closes it before Newton can start explaining limits.",
    move: -4,
    image: "/images/step-076.png"
  },
  79: {
    type: "boost",
    title: "Khopdi Tod De",
    caption: "The Hera Pheri parody beat drops, and Anvika's dance energy turns the floor into a shortcut.",
    move: 6,
    image: "/images/step-079.png"
  },
  82: {
    type: "detour",
    title: "Wrong Hai Wrong Hai!",
    caption: "The old abacus-class echo appears, much smaller now. It says its line, then politely moves aside.",
    move: -2,
    image: "/images/step-082.png"
  },
  87: {
    type: "detour",
    title: "Chess-mate",
    caption: "Anvika is a strong player, but Daddy's chess luck is annoyingly smug today. The board requests a rematch.",
    move: -3,
    image: "/images/step-087.png"
  },
  90: {
    type: "boost",
    title: "Daddy-Daughter Cakes",
    caption: "Lotus biscoff cheesecake and mango cheesecake appear like weekend trophies. The cake fork points forward.",
    move: 4,
    image: "/images/step-090.png"
  },
  96: {
    type: "boost",
    title: "Daddy-Daughter Games",
    caption: "MS Word cards, sticker paper, flash cards, and entire homemade worlds return for the final stretch.",
    move: 5,
    image: "/images/step-096.png"
  }
};

export const cells = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;
  const special = specialCells[id] ?? {};
  const isSpecial = Boolean(specialCells[id]);
  const paddedId = String(id).padStart(3, "0");
  const seedIndex = index % titleSeeds.length;

  return {
    id,
    type: "normal",
    title: `${titleSeeds[seedIndex]} ${id}`,
    caption: captionSeeds[seedIndex],
    image: `/images/step-${paddedId}.png`,
    visualTheme: visualSeeds[index % visualSeeds.length],
    usesGeneratedArt: !isSpecial,
    // specialCells is spread last, so it overrides generated defaults above.
    ...special
  };
});

export const finalCellId = 100;
