export type LessonPhrase = {
  serbian: string;
  english: string;
  note: string;
};

export type FoundationLesson = {
  id: string;
  unit: number;
  duration: string;
  title: string;
  pathTitle: string;
  description: string;
  icon: string;
  color: "gold" | "blue" | "coral" | "green";
  goals: Array<{ title: string; detail: string }>;
  teacherNote: string;
  phrases: LessonPhrase[];
  grammar: {
    title: string;
    focus: string;
    explanation: string;
    practiceNote: string;
  };
  check: {
    prompt: string;
    lead: string;
    options: string[];
    answer: string;
    explanation: string;
    wrongFeedback: string;
  };
  builder: {
    prompt: string;
    words: string[];
    answer: string;
    hint: string;
  };
  dialogue: {
    speaker: string;
    avatar: string;
    line: string;
    translation: string;
    options: Array<{ serbian: string; english: string }>;
    answer: string;
    feedback: string;
  };
  recap: string;
  numberReference?: Array<{ number: string; word: string }>;
  pronunciation?: {
    character: string;
    word: string;
    title: string;
    description: string;
    comparison: string;
  };
};

export const foundationLessons: FoundationLesson[] = [
  {
    id: "lesson-2",
    unit: 2,
    duration: "9 MIN",
    title: "Tell someone who you are",
    pathTitle: "Where you are from",
    description: "Ask and answer where someone is from, then keep a first conversation moving.",
    icon: "Ja",
    color: "gold",
    goals: [
      { title: "Ask where someone is from", detail: "Use a friendly everyday question" },
      { title: "Say where you are from", detail: "Answer with ja sam iz..." },
      { title: "Keep the exchange going", detail: "Add A ti? — and you?" },
    ],
    teacherNote:
      "Do not try to memorise every country ending today. Learn ja sam iz + your country as one useful spoken chunk, then notice the pattern as you meet more places.",
    phrases: [
      { serbian: "Odakle si?", english: "Where are you from?", note: "Informal: use it with one person you would call ti." },
      { serbian: "Ja sam iz Engleske.", english: "I am from England.", note: "Swap Engleske for your own country." },
      { serbian: "Ja sam iz Srbije.", english: "I am from Serbia.", note: "A natural short answer to Odakle si?" },
      { serbian: "A ti?", english: "And you?", note: "A tiny phrase that politely returns the question." },
    ],
    grammar: {
      title: "THE USEFUL PATTERN",
      focus: "Ja sam",
      explanation:
        "means “I am.” Serbian often leaves ja out because sam already tells the listener who is speaking, but keeping it at the start makes this early pattern especially clear.",
      practiceNote:
        "Say the pattern with two places you know. Keep iz + place together as one useful spoken chunk for now.",
    },
    check: {
      prompt: "Nikola asks: Odakle si? What does he want to know?",
      lead: "Choose the meaning before you answer in Serbian.",
      options: ["Where are you from?", "What is your name?", "How old are you?"],
      answer: "Where are you from?",
      explanation: "Odakle asks about origin: where someone comes from.",
      wrongFeedback: "Read Nikola’s question again: he is asking for one specific piece of personal information.",
    },
    builder: {
      prompt: "Build: “I am from England.”",
      words: ["Engleske.", "iz", "sam", "Ja"],
      answer: "Ja sam iz Engleske.",
      hint: "Look for a natural order: speaker, state, then origin. The capitalized place word belongs at the end.",
    },
    dialogue: {
      speaker: "Nikola",
      avatar: "N",
      line: "Odakle si?",
      translation: "Where are you from?",
      options: [
        { serbian: "Ja sam iz Engleske. A ti?", english: "I am from England. And you?" },
        { serbian: "Zovem se Emma.", english: "My name is Emma." },
        { serbian: "Hvala, dobro sam.", english: "Thanks, I am well." },
      ],
      answer: "Ja sam iz Engleske. A ti?",
      feedback: "Exactly. You answered the question and invited Nikola to answer too.",
    },
    recap: "Ja sam iz Engleske. A ti?",
  },
  {
    id: "lesson-3",
    unit: 3,
    duration: "10 MIN",
    title: "Be polite and ask for help",
    pathTitle: "Polite essentials",
    description: "Thank someone, say please, and recover gracefully when you do not understand.",
    icon: "♥",
    color: "blue",
    goals: [
      { title: "Use polite basics", detail: "Say hvala and molim naturally" },
      { title: "Say you do not understand", detail: "Keep a conversation from stopping" },
      { title: "Ask for slower speech", detail: "A useful real-life rescue phrase" },
    ],
    teacherNote:
      "A beginner does not need to understand every word. A calm Ne razumem followed by Sporije, molim is far more useful than pretending you followed the conversation.",
    phrases: [
      { serbian: "Hvala.", english: "Thank you.", note: "The everyday way to thank someone." },
      { serbian: "Molim.", english: "Please. / Here you are.", note: "Context gives this short word its polite job." },
      { serbian: "Ne razumem.", english: "I do not understand.", note: "Useful when a sentence goes by too quickly." },
      { serbian: "Sporije, molim.", english: "More slowly, please.", note: "Use this after Ne razumem when someone is speaking fast." },
    ],
    grammar: {
      title: "THE USEFUL PATTERN",
      focus: "Ne razumem",
      explanation:
        "puts ne directly before the verb razumem (“I understand”). This is the core pattern for a simple Serbian negative: ne + verb.",
      practiceNote:
        "Use this pair whenever speech is too fast. It is a complete, polite recovery move — not a sign that you are failing.",
    },
    check: {
      prompt: "A friend explains something in Serbian and you miss it. What is the most useful first reply?",
      lead: "Choose the phrase that honestly keeps the conversation open.",
      options: ["Ne razumem.", "Dobar dan!", "Ja sam iz Srbije."],
      answer: "Ne razumem.",
      explanation: "Ne razumem tells the other person what happened without ending the exchange.",
      wrongFeedback: "Choose the line that tells the listener you did not understand.",
    },
    builder: {
      prompt: "Build: “More slowly, please.”",
      words: ["molim.", "Sporije,"],
      answer: "Sporije, molim.",
      hint: "One word describes the pace; the other makes the request polite. Think about which job comes first.",
    },
    dialogue: {
      speaker: "Nikola",
      avatar: "N",
      line: "Kako se ti zoveš?",
      translation: "What is your name?",
      options: [
        { serbian: "Ne razumem. Sporije, molim.", english: "I do not understand. More slowly, please." },
        { serbian: "Dobro veče.", english: "Good evening." },
        { serbian: "Ovo je knjiga.", english: "This is a book." },
      ],
      answer: "Ne razumem. Sporije, molim.",
      feedback: "Perfect. You have asked for help politely and clearly.",
    },
    recap: "Ne razumem. Sporije, molim.",
  },
  {
    id: "lesson-4",
    unit: 4,
    duration: "11 MIN",
    title: "Name the things around you",
    pathTitle: "Things around you",
    description: "Point to everyday objects and take your first gentle look at Serbian noun gender.",
    icon: "O",
    color: "coral",
    goals: [
      { title: "Point and name objects", detail: "Use ovo je — this is" },
      { title: "Recognise three noun groups", detail: "Masculine, feminine, and neuter" },
      { title: "Use one correctly", detail: "Match jedan, jedna, or jedno" },
    ],
    teacherNote:
      "Treat the gender as part of a noun’s identity, like learning a word together with its meaning. You only need to notice the pattern today; accuracy will grow through repetition.",
    phrases: [
      { serbian: "Ovo je knjiga.", english: "This is a book.", note: "Knjiga is feminine." },
      { serbian: "Ovo je sto.", english: "This is a table.", note: "Sto is masculine." },
      { serbian: "Ovo je pitanje.", english: "This is a question.", note: "Pitanje is neuter." },
      { serbian: "Jedan sto, jedna knjiga, jedno pitanje.", english: "One table, one book, one question.", note: "The word for one changes to match the noun." },
    ],
    grammar: {
      title: "A FIRST LOOK AT GENDER",
      focus: "jedan / jedna / jedno",
      explanation:
        "all mean “one.” Jedan is the masculine form, jedna is feminine, and jedno is neuter — neither masculine nor feminine. Serbian nouns belong to a grammatical gender, so nearby words often change to agree. The ending -a is often feminine, but learn each noun with its own form.",
      practiceNote:
        "Say the three pairs aloud: jedan sto, jedna knjiga, jedno pitanje. The goal today is to notice and recognise the matching form, not to memorise every rule.",
    },
    check: {
      prompt: "Which phrase means “one book”?",
      lead: "Listen for the feminine word paired with knjiga.",
      options: ["Jedan knjiga", "Jedna knjiga", "Jedno knjiga"],
      answer: "Jedna knjiga",
      explanation: "Knjiga is feminine, so it takes jedna.",
      wrongFeedback: "Compare the three forms for “one” with the phrase list, then choose the one that matches knjiga.",
    },
    builder: {
      prompt: "Build: “This is a book.”",
      words: ["knjiga.", "je", "Ovo"],
      answer: "Ovo je knjiga.",
      hint: "This short sentence has three jobs: point, link, then name. Put the pointing word at the beginning.",
    },
    dialogue: {
      speaker: "Nikola",
      avatar: "N",
      line: "Šta je to?",
      translation: "What is that?",
      options: [
        { serbian: "Ovo je knjiga.", english: "This is a book." },
        { serbian: "Imam dvadeset pet godina.", english: "I am twenty-five years old." },
        { serbian: "Hvala, dobro sam.", english: "Thanks, I am well." },
      ],
      answer: "Ovo je knjiga.",
      feedback: "That is the right frame: ovo je + the object you are pointing to.",
    },
    recap: "Ovo je jedna knjiga.",
  },
  {
    id: "lesson-5",
    unit: 5,
    duration: "11 MIN",
    title: "Talk about your family",
    pathTitle: "People close to you",
    description: "Introduce family members and notice how “my” changes with the person you mean.",
    icon: "M",
    color: "green",
    goals: [
      { title: "Introduce family members", detail: "Use ovo je moj / moja..." },
      { title: "Say what family you have", detail: "Use imam — I have" },
      { title: "Notice possessive forms", detail: "Match moj and moja to the noun" },
    ],
    teacherNote:
      "You will hear word endings change often in Serbian. That is normal, not a trap. For now, practise a few complete phrases aloud so the natural combinations start to feel familiar.",
    phrases: [
      { serbian: "Ovo je moja porodica.", english: "This is my family.", note: "Porodica is family." },
      { serbian: "Ovo je moj brat.", english: "This is my brother.", note: "Moj goes with brat." },
      { serbian: "Ovo je moja sestra.", english: "This is my sister.", note: "Moja goes with sestra." },
      { serbian: "Imam brata.", english: "I have a brother.", note: "Learn the whole phrase as a useful family statement." },
    ],
    grammar: {
      title: "THE USEFUL PATTERN",
      focus: "moj / moja",
      explanation:
        "both mean “my.” Moj pairs with brat, while moja pairs with sestra. Serbian asks possessive words to agree with the noun, so keep the pair together as you learn it.",
      practiceNote:
        "Learn each possessive together with a family word: moj brat and moja sestra. That is more useful than trying to memorise a chart alone.",
    },
    check: {
      prompt: "Which sentence says “This is my sister”?",
      lead: "Choose the phrase with sestra and the matching form of “my.”",
      options: ["Ovo je moj sestra.", "Ovo je moja sestra.", "Ovo je moja brat."],
      answer: "Ovo je moja sestra.",
      explanation: "Sestra is feminine, so the matching form is moja.",
      wrongFeedback: "Find the option where the possessive matches the word for sister.",
    },
    builder: {
      prompt: "Build: “I have a brother.”",
      words: ["brata.", "Imam"],
      answer: "Imam brata.",
      hint: "This is a two-part answer: first say that you have someone, then name the family member.",
    },
    dialogue: {
      speaker: "Emma",
      avatar: "E",
      line: "Imaš li brata?",
      translation: "Do you have a brother?",
      options: [
        { serbian: "Da, imam brata.", english: "Yes, I have a brother." },
        { serbian: "Ovo je pitanje.", english: "This is a question." },
        { serbian: "Sporije, molim.", english: "More slowly, please." },
      ],
      answer: "Da, imam brata.",
      feedback: "Exactly. Da begins the yes answer, then you use the complete family phrase.",
    },
    recap: "Ovo je moja porodica.",
  },
  {
    id: "lesson-6",
    unit: 6,
    duration: "12 MIN",
    title: "Use numbers in real life",
    pathTitle: "Numbers and age",
    description: "Recognise the first ten numbers, say your age, and practise a practical question-and-answer.",
    icon: "6",
    color: "gold",
    goals: [
      { title: "Recognise 0–10", detail: "Build a base for prices, times, and phone numbers" },
      { title: "Ask someone’s age", detail: "Use koliko imaš godina?" },
      { title: "Say your age", detail: "Use imam ... godina as one pattern" },
    ],
    teacherNote:
      "Numbers are worth revisiting in small bursts. Say each one aloud, then try reading a clock, a bus number, or a price when you see it. Recognition comes before speed.",
    phrases: [
      { serbian: "Koliko imaš godina?", english: "How old are you?", note: "Use this informal question with someone you call ti." },
      { serbian: "Imam dvadeset pet godina.", english: "I am twenty-five years old.", note: "Serbian literally says “I have twenty-five years.”" },
      { serbian: "Moj broj je...", english: "My number is...", note: "A useful start for giving a phone number." },
      { serbian: "Nula, jedan, dva, tri, četiri, pet.", english: "Zero, one, two, three, four, five.", note: "Practise slowly, then use the number guide below." },
    ],
    grammar: {
      title: "THE USEFUL PATTERN",
      focus: "Imam ... godina",
      explanation:
        "literally means “I have ... years.” English uses “I am” for age; Serbian uses imam, the same verb you met in imam brata (“I have a brother”).",
      practiceNote:
        "Keep the age pattern together as you practise it. Later, change only the number while the rest of the sentence stays in place.",
    },
    check: {
      prompt: "How would you answer: Koliko imaš godina?",
      lead: "Choose the sentence that gives an age.",
      options: ["Imam dvadeset pet godina.", "Ja sam iz Engleske.", "Ovo je moja sestra."],
      answer: "Imam dvadeset pet godina.",
      explanation: "For age in Serbian, use imam + number + godina.",
      wrongFeedback: "Choose the line that contains an age, rather than where someone is from or who is in their family.",
    },
    builder: {
      prompt: "Build: “I am twenty-five years old.”",
      words: ["godina.", "pet", "dvadeset", "Imam"],
      answer: "Imam dvadeset pet godina.",
      hint: "Start with the verb you already met for “I have.” Keep the number together and leave the word for years to the end.",
    },
    dialogue: {
      speaker: "Nikola",
      avatar: "N",
      line: "Koliko imaš godina?",
      translation: "How old are you?",
      options: [
        { serbian: "Imam dvadeset pet godina.", english: "I am twenty-five years old." },
        { serbian: "Ovo je moja porodica.", english: "This is my family." },
        { serbian: "Dobar dan!", english: "Good day!" },
      ],
      answer: "Imam dvadeset pet godina.",
      feedback: "Exactly. This age pattern is different from English, so it is useful to learn it as one complete sentence.",
    },
    recap: "Imam dvadeset pet godina.",
    numberReference: [
      { number: "0", word: "nula" },
      { number: "1", word: "jedan" },
      { number: "2", word: "dva" },
      { number: "3", word: "tri" },
      { number: "4", word: "četiri" },
      { number: "5", word: "pet" },
      { number: "6", word: "šest" },
      { number: "7", word: "sedam" },
      { number: "8", word: "osam" },
      { number: "9", word: "devet" },
      { number: "10", word: "deset" },
    ],
  },
  {
    id: "lesson-7",
    unit: 7,
    duration: "12 MIN",
    title: "Talk about your daily life",
    pathTitle: "Daily life",
    description: "Say where you live, what you do, and a few things you enjoy using useful present-tense verbs.",
    icon: "Ž",
    color: "blue",
    goals: [
      { title: "Say where you live", detail: "Use živim u..." },
      { title: "Talk about what you do", detail: "Use radim and učim" },
      { title: "Share a simple preference", detail: "Use volim — I like" },
    ],
    teacherNote:
      "You do not need a full verb table to begin speaking. Learn a few high-frequency first-person forms as complete tools, then notice the shared ending as you meet more verbs.",
    phrases: [
      { serbian: "Živim u Beogradu.", english: "I live in Belgrade.", note: "Change Beogradu for the place where you live when you are ready." },
      { serbian: "Radim od kuće.", english: "I work from home.", note: "Od kuće is a useful fixed phrase: from home." },
      { serbian: "Učim srpski.", english: "I study Serbian.", note: "Srpski means Serbian when talking about the language." },
      { serbian: "Volim muziku.", english: "I like music.", note: "Use volim before something you like." },
    ],
    grammar: {
      title: "PRESENT-TENSE TOOLS",
      focus: "živim / radim / učim / volim",
      explanation:
        "are all first-person forms: “I live / work / study / like.” Serbian often does not need ja (“I”), because the verb ending already identifies the speaker.",
      practiceNote:
        "Make two true sentences about yourself. Accuracy grows faster when the language connects to your own life.",
    },
    check: {
      prompt: "Which sentence means “I study Serbian”?",
      lead: "Choose the line with the verb for studying.",
      options: ["Učim srpski.", "Volim muziku.", "Radim od kuće."],
      answer: "Učim srpski.",
      explanation: "Učim is the first-person form for studying or learning.",
      wrongFeedback: "Look for the sentence that mentions srpski, the Serbian language.",
    },
    builder: {
      prompt: "Build: “I live in Belgrade.”",
      words: ["Beogradu.", "u", "Živim"],
      answer: "Živim u Beogradu.",
      hint: "Start with the action, then use the short word that introduces a city. The place name comes last.",
    },
    dialogue: {
      speaker: "Nikola",
      avatar: "N",
      line: "Šta radiš?",
      translation: "What do you do?",
      options: [
        { serbian: "Učim srpski.", english: "I study Serbian." },
        { serbian: "Toalet je levo.", english: "The toilet is on the left." },
        { serbian: "Jednu kafu, molim.", english: "One coffee, please." },
      ],
      answer: "Učim srpski.",
      feedback: "Exactly. Učim srpski is a natural short answer when Serbian is what you are studying.",
    },
    recap: "Živim u Beogradu i učim srpski.",
  },
  {
    id: "lesson-8",
    unit: 8,
    duration: "12 MIN",
    title: "Make a simple plan",
    pathTitle: "Time and routines",
    description: "Ask when something happens and give a day or time for a simple routine.",
    icon: "8",
    color: "gold",
    goals: [
      { title: "Ask when", detail: "Use kada? for time and routines" },
      { title: "Say a time", detail: "Use u + time" },
      { title: "Talk about today", detail: "Use danas in a short plan" },
    ],
    teacherNote:
      "Treat time phrases as small reusable blocks. At this stage, being understood matters more than producing a long, perfect sentence.",
    phrases: [
      { serbian: "Danas je ponedeljak.", english: "Today is Monday.", note: "Danas means today." },
      { serbian: "Kada radiš?", english: "When do you work?", note: "Kada asks when something happens." },
      { serbian: "Radim u devet.", english: "I work at nine.", note: "U introduces a time in this short pattern." },
      { serbian: "U osam sati.", english: "At eight o’clock.", note: "Sati is used with a clock time such as eight." },
    ],
    grammar: {
      title: "A USEFUL TIME FRAME",
      focus: "u + time",
      explanation:
        "is a simple way to place an activity at a time: radim u devet (“I work at nine”). Learn it as a whole time frame rather than worrying about every clock expression at once.",
      practiceNote:
        "Say one true time from your routine: when you wake up, work, study, or eat. Keep the sentence short.",
    },
    check: {
      prompt: "What does Kada radiš? ask?",
      lead: "Focus on the question word kada.",
      options: ["When do you work?", "Where do you work?", "Why do you work?"],
      answer: "When do you work?",
      explanation: "Kada is the question word for “when.”",
      wrongFeedback: "Choose the option that asks about time, not place or reason.",
    },
    builder: {
      prompt: "Build: “I work at nine.”",
      words: ["devet.", "u", "Radim"],
      answer: "Radim u devet.",
      hint: "Begin with the activity, use the small time word, then put the number at the end.",
    },
    dialogue: {
      speaker: "Emma",
      avatar: "E",
      line: "Kada radiš?",
      translation: "When do you work?",
      options: [
        { serbian: "Radim u devet.", english: "I work at nine." },
        { serbian: "Imam brata.", english: "I have a brother." },
        { serbian: "Ovo je knjiga.", english: "This is a book." },
      ],
      answer: "Radim u devet.",
      feedback: "Right. You answered a when-question with a clear time.",
    },
    recap: "Danas radim u devet.",
  },
  {
    id: "lesson-9",
    unit: 9,
    duration: "13 MIN",
    title: "Order something politely",
    pathTitle: "Food and ordering",
    description: "Use practical café language to ask for a drink, a meal, and the bill.",
    icon: "☕",
    color: "coral",
    goals: [
      { title: "Order a drink", detail: "Use jednu kafu, molim" },
      { title: "Ask for the bill", detail: "Use račun, molim" },
      { title: "Understand a waiter", detail: "Recognise šta želite?" },
    ],
    teacherNote:
      "Ordering is a great place to use complete memorised chunks. You do not need to master every noun ending before you can have a successful café interaction.",
    phrases: [
      { serbian: "Jednu kafu, molim.", english: "One coffee, please.", note: "A useful complete ordering phrase." },
      { serbian: "Vodu, molim.", english: "Water, please.", note: "Voda becomes vodu in this ordering chunk; learn it together." },
      { serbian: "Račun, molim.", english: "The bill, please.", note: "Use this when you are ready to pay." },
      { serbian: "Šta želite?", english: "What would you like?", note: "A polite form you may hear from a waiter or cashier." },
    ],
    grammar: {
      title: "ORDERING AS A CHUNK",
      focus: "[item], molim",
      explanation:
        "is a short and polite way to order. Some food words change their ending in this situation, so learn the whole phrase first: jednu kafu and vodu.",
      practiceNote:
        "Practise the exact item you would really choose. Substitute only a word you have already learned, and keep molim at the end.",
    },
    check: {
      prompt: "Which phrase asks for the bill?",
      lead: "Choose the phrase you would use when you are ready to pay.",
      options: ["Račun, molim.", "Vodu, molim.", "Šta želite?"],
      answer: "Račun, molim.",
      explanation: "Račun means bill or check in this café context.",
      wrongFeedback: "Think about which phrase you would say after you have finished eating or drinking.",
    },
    builder: {
      prompt: "Build: “One coffee, please.”",
      words: ["molim.", "kafu,", "Jednu"],
      answer: "Jednu kafu, molim.",
      hint: "Start with the quantity, keep it beside the drink, then add the polite word at the end.",
    },
    dialogue: {
      speaker: "Nikola",
      avatar: "N",
      line: "Šta želite?",
      translation: "What would you like?",
      options: [
        { serbian: "Jednu kafu, molim.", english: "One coffee, please." },
        { serbian: "Živim u Beogradu.", english: "I live in Belgrade." },
        { serbian: "Danas je ponedeljak.", english: "Today is Monday." },
      ],
      answer: "Jednu kafu, molim.",
      feedback: "Exactly. This is a complete, polite café order.",
    },
    recap: "Jednu kafu, molim.",
  },
  {
    id: "lesson-10",
    unit: 10,
    duration: "12 MIN",
    title: "Find your way around",
    pathTitle: "Places and directions",
    description: "Ask where something is and understand a few high-value direction words.",
    icon: "↗",
    color: "green",
    goals: [
      { title: "Ask where something is", detail: "Use gde je...?" },
      { title: "Understand simple directions", detail: "Recognise levo and pravo" },
      { title: "Ask about a practical place", detail: "Find the toilet confidently" },
    ],
    teacherNote:
      "Directions are easier if you listen for one useful word at a time. You do not need every detail of the sentence to understand levo, pravo, or blizu.",
    phrases: [
      { serbian: "Gde je toalet?", english: "Where is the toilet?", note: "A practical question worth knowing early." },
      { serbian: "Toalet je levo.", english: "The toilet is on the left.", note: "Levo means left." },
      { serbian: "Pravo.", english: "Straight ahead.", note: "You may hear this as a one-word direction." },
      { serbian: "Blizu je.", english: "It is near.", note: "Blizu means near or close." },
    ],
    grammar: {
      title: "THE QUESTION FRAME",
      focus: "Gde je ...?",
      explanation:
        "means “Where is ...?” Put the place or thing you are looking for after gde je. This one frame works in cafés, stations, shops, and on the street.",
      practiceNote:
        "Point to two places around you and make the question frame aloud. Even a short question is useful when travelling.",
    },
    check: {
      prompt: "What does Gde mean?",
      lead: "Choose the question word used for location.",
      options: ["Where", "When", "Who"],
      answer: "Where",
      explanation: "Gde is the Serbian question word for “where.”",
      wrongFeedback: "Think about the kind of answer a direction question needs.",
    },
    builder: {
      prompt: "Build: “The toilet is on the left.”",
      words: ["levo.", "je", "Toalet"],
      answer: "Toalet je levo.",
      hint: "Name the place first, then connect it to the direction. The direction word closes the sentence.",
    },
    dialogue: {
      speaker: "Emma",
      avatar: "E",
      line: "Gde je toalet?",
      translation: "Where is the toilet?",
      options: [
        { serbian: "Pravo, pa levo.", english: "Straight ahead, then left." },
        { serbian: "Volim muziku.", english: "I like music." },
        { serbian: "Račun, molim.", english: "The bill, please." },
      ],
      answer: "Pravo, pa levo.",
      feedback: "Right. Pravo gives the first direction, then pa (“then”) links the next one.",
    },
    recap: "Toalet je levo.",
  },
  {
    id: "lesson-11",
    unit: 11,
    duration: "13 MIN",
    title: "Talk about likes and plans",
    pathTitle: "Likes and invitations",
    description: "Say what you like, what you do not like, and make a simple friendly plan.",
    icon: "♥",
    color: "blue",
    goals: [
      { title: "Share preferences", detail: "Use volim and ne volim" },
      { title: "Invite someone", detail: "Use hoćeš da..." },
      { title: "Suggest a time", detail: "Use možemo sutra" },
    ],
    teacherNote:
      "A real conversation becomes warmer when you can react with a preference or a simple invitation. Short, familiar phrases are enough to start.",
    phrases: [
      { serbian: "Volim filmove.", english: "I like films.", note: "Filmovi means films or movies." },
      { serbian: "Ne volim kafu.", english: "I do not like coffee.", note: "Put ne before the verb to make it negative." },
      { serbian: "Hoćeš da idemo?", english: "Do you want to go?", note: "A relaxed invitation to do something together." },
      { serbian: "Možemo sutra.", english: "We can tomorrow.", note: "Sutra means tomorrow." },
    ],
    grammar: {
      title: "INVITATION AND RESPONSE",
      focus: "Hoćeš da ...? / Možemo ...",
      explanation:
        "Hoćeš da...? is a very useful way to ask “Do you want to...?” Možemo means “we can,” which makes a simple, low-pressure suggestion or agreement.",
      practiceNote:
        "Start by recognising the whole invitation. You can answer with a short Da, možemo (“Yes, we can”) before making longer plans.",
    },
    check: {
      prompt: "What does Ne volim kafu mean?",
      lead: "Notice where ne appears in the sentence.",
      options: ["I do not like coffee.", "I like coffee.", "Do you want coffee?"],
      answer: "I do not like coffee.",
      explanation: "Ne directly before volim turns “I like” into “I do not like.”",
      wrongFeedback: "Find the option that includes the negative meaning created by ne.",
    },
    builder: {
      prompt: "Build: “I like films.”",
      words: ["filmove.", "Volim"],
      answer: "Volim filmove.",
      hint: "Begin with the verb for liking, then name the thing you enjoy.",
    },
    dialogue: {
      speaker: "Nikola",
      avatar: "N",
      line: "Hoćeš da idemo u bioskop?",
      translation: "Do you want to go to the cinema?",
      options: [
        { serbian: "Da, možemo sutra.", english: "Yes, we can tomorrow." },
        { serbian: "Gde je toalet?", english: "Where is the toilet?" },
        { serbian: "Imam dvadeset pet godina.", english: "I am twenty-five years old." },
      ],
      answer: "Da, možemo sutra.",
      feedback: "Exactly. You accepted the invitation and suggested a time.",
    },
    recap: "Volim filmove. Možemo sutra.",
  },
  {
    id: "lesson-12",
    unit: 12,
    duration: "15 MIN",
    title: "Put your Serbian together",
    pathTitle: "Conversation lab",
    description: "Combine introductions, daily life, practical needs, and friendly small talk in one guided conversation.",
    icon: "✓",
    color: "coral",
    goals: [
      { title: "Introduce yourself naturally", detail: "Use a greeting, name, and a follow-up" },
      { title: "Share a personal detail", detail: "Talk about where you live or what you like" },
      { title: "Handle an everyday moment", detail: "Use the café and direction phrases you know" },
    ],
    teacherNote:
      "This is not a test of perfect grammar. It is a chance to notice how much you can already do by combining short, reliable Serbian phrases.",
    phrases: [
      { serbian: "Zdravo, ja sam Emma.", english: "Hello, I am Emma.", note: "A clear, friendly introduction." },
      { serbian: "Živim u Beogradu.", english: "I live in Belgrade.", note: "Use one true detail to keep the conversation going." },
      { serbian: "Volim filmove.", english: "I like films.", note: "A simple preference opens up small talk." },
      { serbian: "Jednu kafu, molim.", english: "One coffee, please.", note: "Use a practical phrase when the conversation moves to a café." },
    ],
    grammar: {
      title: "BUILDING A CONVERSATION",
      focus: "short sentences + A ti?",
      explanation:
        "A conversation does not need long sentences. Give one clear detail, then use A ti? (“And you?”) to hand the turn back naturally.",
      practiceNote:
        "Choose any two phrases from the course and connect them with i (“and”). Then ask A ti? to invite the other person to speak.",
    },
    check: {
      prompt: "Someone asks: Gde je toalet? Which answer fits?",
      lead: "Choose the response that gives a direction.",
      options: ["Pravo, pa levo.", "Volim muziku.", "Imam brata."],
      answer: "Pravo, pa levo.",
      explanation: "Pravo, pa levo gives a short sequence of directions: straight ahead, then left.",
      wrongFeedback: "Look for the option that tells the person where to go.",
    },
    builder: {
      prompt: "Build: “Hello, I am Emma.”",
      words: ["Emma.", "sam", "ja", "Zdravo,"],
      answer: "Zdravo, ja sam Emma.",
      hint: "Start with the greeting, then introduce the speaker before the name.",
    },
    dialogue: {
      speaker: "Nikola",
      avatar: "N",
      line: "Zdravo! Ja sam Nikola. Drago mi je.",
      translation: "Hello! I am Nikola. Nice to meet you.",
      options: [
        { serbian: "Zdravo, ja sam Emma. Drago mi je.", english: "Hello, I am Emma. Nice to meet you." },
        { serbian: "Račun, molim.", english: "The bill, please." },
        { serbian: "Ne volim kafu.", english: "I do not like coffee." },
      ],
      answer: "Zdravo, ja sam Emma. Drago mi je.",
      feedback: "Perfect. You greeted Nikola, gave your name, and returned the friendly phrase.",
    },
    recap: "Zdravo, ja sam Emma. Živim u Beogradu.",
  },
];

export const nextCourseStage = [
  { unit: 13, title: "A1 review", description: "Spaced review that turns familiar phrases into faster, more confident speech." },
  { unit: 14, title: "Everyday errands", description: "Shopping, transport, appointments, and getting practical help." },
  { unit: 15, title: "Past and future", description: "Begin talking about what happened and what you plan to do next." },
];
