// Placeholder/default content for normal cells. Personal memories can replace
// these generated titles and captions by adding entries to specialCells below.
const titleSeeds = [
  "Cupcake Comet",
  "Ribbon Moon",
  "Wish Lantern",
  "Starlit Stair",
  "Candy Cloud",
  "Glitter Gate",
  "Dream Orchard",
  "Moonbeam Bridge",
  "Velvet Galaxy",
  "Birthday Bazaar"
];

const captionSeeds = [
  "A tiny sparkle hums a happy tune just for Anvika.",
  "The path smells like vanilla frosting and fresh wishes.",
  "A friendly star points toward the next birthday surprise.",
  "Confetti drifts through the air like soft little spells.",
  "A candle flame dances and asks you to keep going.",
  "The sky unwraps another secret with a golden bow.",
  "Magic footsteps glow gently under your shoes.",
  "A pocket-sized parade cheers from the clouds.",
  "The universe saves its brightest grin for this moment.",
  "Every step feels like opening one more gift."
];

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
  5: {
    type: "boost",
    title: "Sprinkle Rocket",
    caption: "A frosting rocket appears and offers a glittery shortcut.",
    move: 4
  },
  9: {
    type: "quiz",
    title: "The Candle Riddle",
    caption: "A wise candle asks a warm-up birthday question.",
    question: "What do you make before blowing out birthday candles?",
    options: ["A wish", "A sandwich", "A snowball"],
    answerIndex: 0,
    correctMove: 5,
    wrongMove: 1,
    correctText: "The candle glows brighter. Your wish knows the way.",
    wrongText: "The candle giggles kindly and nudges you ahead."
  },
  14: {
    type: "detour",
    title: "Marshmallow Maze",
    caption: "The soft walls bounce you onto a silly side path.",
    move: -3
  },
  18: {
    type: "boost",
    title: "Balloon Lift",
    caption: "A bundle of rainbow balloons lifts the journey higher.",
    move: 6
  },
  23: {
    type: "quiz",
    title: "Star Bakery Test",
    caption: "The cosmic baker guards a tray of moon muffins.",
    question: "Which treat usually wears candles on a birthday?",
    options: ["Cake", "Soup", "Popcorn"],
    answerIndex: 0,
    correctMove: 6,
    wrongMove: 2,
    correctText: "The baker bows and sends you forward with extra sprinkles.",
    wrongText: "The baker shares a muffin and points to the next step."
  },
  29: {
    type: "detour",
    title: "Giggle Gravity",
    caption: "A burst of laughter flips the map upside down for a moment.",
    move: -4
  },
  34: {
    type: "boost",
    title: "Gift-Wrap Glide",
    caption: "A silky ribbon becomes a slide across the stars.",
    move: 7
  },
  41: {
    type: "quiz",
    title: "Moon Music Quiz",
    caption: "A moon harp will play if you know the birthday sound.",
    question: "What do friends often sing at a birthday party?",
    options: ["Happy Birthday", "Rain Forecast", "Alphabet Backwards"],
    answerIndex: 0,
    correctMove: 5,
    wrongMove: 1,
    correctText: "The harp sings along and the path sparkles open.",
    wrongText: "A shy note floats away, but it still carries you onward."
  },
  47: {
    type: "detour",
    title: "Sleepy Stardust",
    caption: "A cozy cloud asks for one slow twirl before moving on.",
    move: -5
  },
  52: {
    type: "boost",
    title: "Cupcake Carousel",
    caption: "Frosted ponies circle faster and faster into a shortcut.",
    move: 8
  },
  59: {
    type: "quiz",
    title: "The Ribbon Oracle",
    caption: "The ribbon oracle shimmers with one playful question.",
    question: "What do you open after someone gives you a wrapped surprise?",
    options: ["A present", "A puddle", "A window only"],
    answerIndex: 0,
    correctMove: 6,
    wrongMove: 2,
    correctText: "The bow unties itself and reveals a glowing trail.",
    wrongText: "The ribbon curls into a smile and lets you try again later."
  },
  66: {
    type: "detour",
    title: "Jellybean Junction",
    caption: "The jellybean road wiggles and sends you around the scenic loop.",
    move: -6
  },
  72: {
    type: "boost",
    title: "Aurora Crown",
    caption: "A crown of northern lights lands softly and grants a leap.",
    move: 9
  },
  79: {
    type: "quiz",
    title: "Wishkeeper's Gate",
    caption: "The gate opens for brave hearts and careful listeners.",
    question: "What is the final step of a perfect birthday wish?",
    options: ["Believe in it", "Forget it instantly", "Hide the cake"],
    answerIndex: 0,
    correctMove: 7,
    wrongMove: 1,
    correctText: "The gate swings wide. Belief makes excellent wings.",
    wrongText: "The gate stays gentle and gives you a smaller path."
  },
  87: {
    type: "detour",
    title: "Twinkle Tangle",
    caption: "A knot of stars needs untangling before the finale.",
    move: -7
  },
  92: {
    type: "boost",
    title: "Birthday Supernova",
    caption: "A brilliant bloom of birthday magic hurls you toward the finish.",
    move: 10
  },
  97: {
    type: "quiz",
    title: "Final Wish Trial",
    caption: "One last question shines in the doorway of step one hundred.",
    question: "What makes a birthday adventure truly magical?",
    options: ["Love and laughter", "Counting socks", "A silent toaster"],
    answerIndex: 0,
    correctMove: 4,
    wrongMove: 1,
    correctText: "The whole AnvikaVerse answers with light.",
    wrongText: "The door smiles. Even small steps count."
  }
};

export const cells = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;
  const special = specialCells[id] ?? {};
  const isSpecial = Boolean(specialCells[id]);
  const paddedId = String(id).padStart(3, "0");

  return {
    id,
    type: "normal",
    title: `${titleSeeds[index % titleSeeds.length]} ${id}`,
    caption: captionSeeds[index % captionSeeds.length],
    image: `/images/step-${paddedId}.png`,
    visualTheme: visualSeeds[index % visualSeeds.length],
    usesGeneratedArt: !isSpecial,
    // specialCells is spread last, so it overrides generated defaults above.
    ...special
  };
});

export const finalCellId = 100;
