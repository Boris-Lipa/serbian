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
  {
    id: "lesson-13",
    unit: 13,
    duration: "12 MIN",
    title: "Share contact details",
    pathTitle: "Names and contact details",
    description: "Ask for a surname and give simple personal details such as an address or phone number.",
    icon: "#",
    color: "gold",
    goals: [
      { title: "Ask for a surname", detail: "Use kako se prezivaš?" },
      { title: "Give an address", detail: "Use moja adresa je..." },
      { title: "Give a number", detail: "Use moj broj telefona je..." },
    ],
    teacherNote: "Personal details are best learned as complete, calm phrases. Pause naturally before the information that changes: the surname, address, or number.",
    phrases: [
      { serbian: "Kako se prezivaš?", english: "What is your surname?", note: "Prezime is a surname or family name." },
      { serbian: "Prezivam se Smith.", english: "My surname is Smith.", note: "Replace Smith with the surname you want to practise." },
      { serbian: "Moja adresa je...", english: "My address is...", note: "Adresa is feminine, so it uses moja." },
      { serbian: "Moj broj telefona je...", english: "My phone number is...", note: "Say the digits slowly, one group at a time." },
    ],
    grammar: {
      title: "DETAILS AS FIXED FRAMES",
      focus: "moja ... je / moj ... je",
      explanation: "Both frames mean “my ... is.” Moja goes with adresa, while moj goes with broj. Learn the noun together with the matching form of “my.”",
      practiceNote: "Say the frame, then pause before your own information. That gives you time to think without losing the sentence.",
    },
    check: {
      prompt: "What does Kako se prezivaš? ask for?",
      lead: "Choose the personal detail this question is asking about.",
      options: ["A surname", "An address", "An age"],
      answer: "A surname",
      explanation: "Prezivaš comes from prezivati se, used for saying what one’s surname is.",
      wrongFeedback: "Look for the option connected to the word prezime, meaning surname.",
    },
    builder: {
      prompt: "Build: “My address is...”",
      words: ["je...", "adresa", "Moja"],
      answer: "Moja adresa je...",
      hint: "Begin with the form of “my” that matches adresa, then place the verb before the detail you will add.",
    },
    dialogue: {
      speaker: "Nikola",
      avatar: "N",
      line: "Kako se prezivaš?",
      translation: "What is your surname?",
      options: [
        { serbian: "Prezivam se Smith.", english: "My surname is Smith." },
        { serbian: "Učim srpski.", english: "I study Serbian." },
        { serbian: "Račun, molim.", english: "The bill, please." },
      ],
      answer: "Prezivam se Smith.",
      feedback: "Exactly. You answered with the phrase used for giving your surname.",
    },
    recap: "Moja adresa je...",
  },
  {
    id: "lesson-14",
    unit: 14,
    duration: "13 MIN",
    title: "Ask about prices",
    pathTitle: "Shopping and prices",
    description: "Ask how much something costs, understand a simple price, and react when it is too expensive.",
    icon: "₫",
    color: "green",
    goals: [
      { title: "Ask the price", detail: "Use koliko košta?" },
      { title: "Understand a price", detail: "Listen for košta and dinara" },
      { title: "React simply", detail: "Say preskupo je or u redu je" },
    ],
    teacherNote: "Prices can sound fast. First catch the number, then the word dinara. It is completely fine to ask someone to repeat the price more slowly.",
    phrases: [
      { serbian: "Koliko košta?", english: "How much does it cost?", note: "Use it when the thing is obvious from context or pointing." },
      { serbian: "Košta petsto dinara.", english: "It costs five hundred dinars.", note: "Dinar is Serbia’s currency; dinara is used with this price." },
      { serbian: "Preskupo je.", english: "It is too expensive.", note: "Preskupo means too expensive." },
      { serbian: "U redu je.", english: "It is okay.", note: "A relaxed way to say that something is fine." },
    ],
    grammar: {
      title: "TALKING ABOUT COST",
      focus: "Košta + price",
      explanation: "Košta means “it costs.” Serbian can leave out the thing being discussed when both people can see it or already know what it is.",
      practiceNote: "Point to an imaginary item, ask Koliko košta?, then answer with any number you know. The goal is to get used to the rhythm.",
    },
    check: {
      prompt: "Which phrase means “It is too expensive”?",
      lead: "Choose the reaction you would use when a price is higher than expected.",
      options: ["Preskupo je.", "U redu je.", "Koliko košta?"],
      answer: "Preskupo je.",
      explanation: "Preskupo combines the idea of “too” with “expensive.”",
      wrongFeedback: "Choose the phrase that reacts to a high price, rather than asking for or accepting one.",
    },
    builder: {
      prompt: "Build: “It costs five hundred dinars.”",
      words: ["dinara.", "petsto", "Košta"],
      answer: "Košta petsto dinara.",
      hint: "Start with the word for “it costs,” keep the number together, and put the currency word last.",
    },
    dialogue: {
      speaker: "Emma",
      avatar: "E",
      line: "Koliko košta?",
      translation: "How much does it cost?",
      options: [
        { serbian: "Košta petsto dinara.", english: "It costs five hundred dinars." },
        { serbian: "Gde je toalet?", english: "Where is the toilet?" },
        { serbian: "Volim filmove.", english: "I like films." },
      ],
      answer: "Košta petsto dinara.",
      feedback: "Right. You answered with a simple price in dinars.",
    },
    recap: "Koliko košta? Košta petsto dinara.",
  },
  {
    id: "lesson-15",
    unit: 15,
    duration: "13 MIN",
    title: "Use simple transport language",
    pathTitle: "Transport and travel",
    description: "Find a bus station, ask when a bus leaves, and buy a ticket politely.",
    icon: "B",
    color: "blue",
    goals: [
      { title: "Find a station", detail: "Ask gde je autobuska stanica?" },
      { title: "Buy a ticket", detail: "Use jednu kartu, molim" },
      { title: "Ask about departure", detail: "Use kada polazi autobus?" },
    ],
    teacherNote: "Travel conversations reward short, direct questions. Say the key noun clearly — stanica, karta, autobus — and let the other person help with the details.",
    phrases: [
      { serbian: "Gde je autobuska stanica?", english: "Where is the bus station?", note: "Autobuska stanica is a bus station." },
      { serbian: "Jednu kartu, molim.", english: "One ticket, please.", note: "Kartu is the useful ordering form for a ticket." },
      { serbian: "Kada polazi autobus?", english: "When does the bus leave?", note: "Polazi means leaves or departs." },
      { serbian: "Autobus polazi u deset.", english: "The bus leaves at ten.", note: "Listen for the time after u." },
    ],
    grammar: {
      title: "A DEPARTURE QUESTION",
      focus: "Kada polazi ...?",
      explanation: "Kada asks when, and polazi means departs. Put the thing that is leaving after the verb: Kada polazi autobus?",
      practiceNote: "Swap autobus for a train only after you have learned the new word. Keep the question frame unchanged while practising.",
    },
    check: {
      prompt: "Which sentence tells you when the bus leaves?",
      lead: "Choose the statement that includes a departure time.",
      options: ["Autobus polazi u deset.", "Gde je autobuska stanica?", "Jednu kartu, molim."],
      answer: "Autobus polazi u deset.",
      explanation: "Autobus polazi says the bus is leaving, and u deset gives the time.",
      wrongFeedback: "Look for the option with both the bus and a clock time.",
    },
    builder: {
      prompt: "Build: “One ticket, please.”",
      words: ["molim.", "kartu,", "Jednu"],
      answer: "Jednu kartu, molim.",
      hint: "Use the same polite ordering rhythm as with coffee: quantity, item, then molim.",
    },
    dialogue: {
      speaker: "Nikola",
      avatar: "N",
      line: "Kada polazi autobus?",
      translation: "When does the bus leave?",
      options: [
        { serbian: "Autobus polazi u deset.", english: "The bus leaves at ten." },
        { serbian: "Moja adresa je...", english: "My address is..." },
        { serbian: "Ne volim kafu.", english: "I do not like coffee." },
      ],
      answer: "Autobus polazi u deset.",
      feedback: "Exactly. You gave a clear answer with the departure time.",
    },
    recap: "Jednu kartu, molim.",
  },
  {
    id: "lesson-16",
    unit: 16,
    duration: "13 MIN",
    title: "Describe your home",
    pathTitle: "Home and rooms",
    description: "Name a few rooms and features of a home using simple, useful descriptions.",
    icon: "⌂",
    color: "coral",
    goals: [
      { title: "Introduce your home", detail: "Use ovo je moj stan" },
      { title: "Describe a room", detail: "Use je + a simple adjective" },
      { title: "Talk about a feature", detail: "Use imam for what your home has" },
    ],
    teacherNote: "Descriptions become manageable when you make one small statement at a time. Name the room first, then add one useful detail.",
    phrases: [
      { serbian: "Ovo je moj stan.", english: "This is my apartment.", note: "Stan means apartment or flat." },
      { serbian: "Kuhinja je mala.", english: "The kitchen is small.", note: "Mala agrees with the feminine word kuhinja." },
      { serbian: "U kupatilu je tuš.", english: "There is a shower in the bathroom.", note: "Learn u kupatilu as a useful room phrase." },
      { serbian: "Imam balkon.", english: "I have a balcony.", note: "Use imam again for something your home has." },
    ],
    grammar: {
      title: "ONE ROOM, ONE DETAIL",
      focus: "[room] je [description]",
      explanation: "Use the room as the topic, then je (“is”), then a simple description. Serbian adjectives change with the noun, so learn the whole pair: kuhinja je mala.",
      practiceNote: "Describe one room you know with just one detail. A short accurate sentence is a good foundation for longer descriptions later.",
    },
    check: {
      prompt: "Which sentence means “The kitchen is small”?",
      lead: "Look for kuhinja and the matching description.",
      options: ["Kuhinja je mala.", "U kupatilu je tuš.", "Imam balkon."],
      answer: "Kuhinja je mala.",
      explanation: "Kuhinja is kitchen and mala means small in this feminine form.",
      wrongFeedback: "Choose the option that names the kitchen and gives it a size.",
    },
    builder: {
      prompt: "Build: “I have a balcony.”",
      words: ["balkon.", "Imam"],
      answer: "Imam balkon.",
      hint: "Start with the action for having, then add the feature your home has.",
    },
    dialogue: {
      speaker: "Emma",
      avatar: "E",
      line: "Imaš li balkon?",
      translation: "Do you have a balcony?",
      options: [
        { serbian: "Da, imam balkon.", english: "Yes, I have a balcony." },
        { serbian: "Autobus polazi u deset.", english: "The bus leaves at ten." },
        { serbian: "Preskupo je.", english: "It is too expensive." },
      ],
      answer: "Da, imam balkon.",
      feedback: "Right. Da opens the answer, then imam balkon gives the detail.",
    },
    recap: "Ovo je moj stan. Imam balkon.",
  },
  {
    id: "lesson-17",
    unit: 17,
    duration: "14 MIN",
    title: "Describe people you know",
    pathTitle: "People and descriptions",
    description: "Say a few basic things about a person’s appearance and use simple adjective forms.",
    icon: "☺",
    color: "green",
    goals: [
      { title: "Describe a woman", detail: "Use visoka and mlada" },
      { title: "Describe a man", detail: "Use mlad" },
      { title: "Mention a feature", detail: "Use ima + hair description" },
    ],
    teacherNote: "Serbian descriptions change their ending more often than English ones. Start with a few truthful, respectful phrases and learn each adjective together with the person it describes.",
    phrases: [
      { serbian: "Moja sestra je visoka.", english: "My sister is tall.", note: "Visoka is the feminine form used with sestra." },
      { serbian: "Moj brat je mlad.", english: "My brother is young.", note: "Mlad is the masculine form used with brat." },
      { serbian: "Ima plavu kosu.", english: "He/She has blonde hair.", note: "Serbian can omit he or she when it is clear from context." },
      { serbian: "On je moj prijatelj.", english: "He is my friend.", note: "On means he; prijatelj means friend." },
    ],
    grammar: {
      title: "DESCRIPTION MATCHES THE PERSON",
      focus: "visok / visoka / mlad / mlada",
      explanation: "These adjectives change to agree with the person described. Visoka and mlada are feminine; visok and mlad are masculine. Learn the adjective with a person-word at first.",
      practiceNote: "Choose one person you know and make just one kind, simple description. Do not try to memorise every adjective ending today.",
    },
    check: {
      prompt: "Which phrase describes a sister as tall?",
      lead: "Choose the sentence with sestra and the feminine adjective form.",
      options: ["Moja sestra je visoka.", "Moj brat je mlad.", "On je moj prijatelj."],
      answer: "Moja sestra je visoka.",
      explanation: "Sestra is feminine, so it uses the feminine form visoka.",
      wrongFeedback: "Look for the option that contains sestra and a description of height.",
    },
    builder: {
      prompt: "Build: “My brother is young.”",
      words: ["mlad.", "je", "brat", "Moj"],
      answer: "Moj brat je mlad.",
      hint: "Start with the possessive and person, connect them with je, then finish with the description.",
    },
    dialogue: {
      speaker: "Nikola",
      avatar: "N",
      line: "Kakva je tvoja sestra?",
      translation: "What is your sister like?",
      options: [
        { serbian: "Visoka je i mlada.", english: "She is tall and young." },
        { serbian: "Jednu kartu, molim.", english: "One ticket, please." },
        { serbian: "Banka radi do četiri.", english: "The bank is open until four." },
      ],
      answer: "Visoka je i mlada.",
      feedback: "Exactly. Both descriptions use the feminine form because they describe sestra.",
    },
    recap: "Moja sestra je visoka.",
  },
  {
    id: "lesson-18",
    unit: 18,
    duration: "13 MIN",
    title: "Talk about the weather",
    pathTitle: "Weather and clothes",
    description: "Describe simple weather and say what you need for it.",
    icon: "☀",
    color: "gold",
    goals: [
      { title: "Describe today’s weather", detail: "Use hladno je or sunčano je" },
      { title: "Understand rain", detail: "Recognise pada kiša" },
      { title: "Say what you need", detail: "Use treba mi..." },
    ],
    teacherNote: "Weather phrases are wonderfully reusable because they do not need a person as the subject. Learn them as small observations you can say straight away.",
    phrases: [
      { serbian: "Danas je hladno.", english: "Today it is cold.", note: "Hladno describes cold weather." },
      { serbian: "Pada kiša.", english: "It is raining.", note: "Literally, rain is falling." },
      { serbian: "Treba mi jakna.", english: "I need a jacket.", note: "Treba mi is a useful chunk for “I need.”" },
      { serbian: "Sunčano je.", english: "It is sunny.", note: "Sunčano describes sunny weather." },
    ],
    grammar: {
      title: "SAYING WHAT YOU NEED",
      focus: "Treba mi ...",
      explanation: "Treba mi is the everyday pattern for “I need ...” Mi is the form that means “to me” here, but learn the full phrase as one useful unit.",
      practiceNote: "Look around and name one useful thing you need today. Keep the phrase short and concrete.",
    },
    check: {
      prompt: "What does Pada kiša mean?",
      lead: "Choose the weather situation this phrase describes.",
      options: ["It is raining.", "It is sunny.", "It is snowing."],
      answer: "It is raining.",
      explanation: "Kiša means rain, and pada describes it falling.",
      wrongFeedback: "Look for the option connected to rain, not sunshine or snow.",
    },
    builder: {
      prompt: "Build: “I need a jacket.”",
      words: ["jakna.", "mi", "Treba"],
      answer: "Treba mi jakna.",
      hint: "Keep the two-word need frame together, then add the item you need.",
    },
    dialogue: {
      speaker: "Nikola",
      avatar: "N",
      line: "Kakvo je vreme?",
      translation: "What is the weather like?",
      options: [
        { serbian: "Hladno je.", english: "It is cold." },
        { serbian: "Moja adresa je...", english: "My address is..." },
        { serbian: "Učim srpski.", english: "I study Serbian." },
      ],
      answer: "Hladno je.",
      feedback: "Right. Hladno je is a simple weather answer for “It is cold.”",
    },
    recap: "Danas je hladno. Treba mi jakna.",
  },
  {
    id: "lesson-19",
    unit: 19,
    duration: "13 MIN",
    title: "Ask for basic help",
    pathTitle: "Health and help",
    description: "Use a few essential phrases to say you feel unwell, need help, or are looking for a pharmacy.",
    icon: "+",
    color: "coral",
    goals: [
      { title: "Say you feel unwell", detail: "Use ne osećam se dobro" },
      { title: "Name a simple problem", detail: "Use boli me glava" },
      { title: "Ask for help", detail: "Use treba mi pomoć" },
    ],
    teacherNote: "These are communication phrases, not medical advice. In a serious or urgent situation, seek local professional help; the goal here is simply to make your need clear.",
    phrases: [
      { serbian: "Ne osećam se dobro.", english: "I do not feel well.", note: "A calm general way to say you feel unwell." },
      { serbian: "Boli me glava.", english: "My head hurts.", note: "Literally, “the head hurts me.”" },
      { serbian: "Gde je apoteka?", english: "Where is the pharmacy?", note: "Apoteka means pharmacy." },
      { serbian: "Treba mi pomoć.", english: "I need help.", note: "Pomoć means help; this uses the need pattern from Unit 18." },
    ],
    grammar: {
      title: "A SIMPLE PROBLEM FRAME",
      focus: "Boli me ...",
      explanation: "Boli means “hurts,” and me means “me.” The thing that hurts comes first: boli me glava. Learn it as a ready-to-use pattern for basic communication.",
      practiceNote: "Use these phrases only for clear, simple needs. If you do not understand a response, return to Ne razumem and ask for slower speech.",
    },
    check: {
      prompt: "Which phrase says “My head hurts”?",
      lead: "Choose the line that includes glava, meaning head.",
      options: ["Boli me glava.", "Treba mi pomoć.", "Gde je apoteka?"],
      answer: "Boli me glava.",
      explanation: "Glava is head, and boli me forms the basic “hurts me” pattern.",
      wrongFeedback: "Look for the option that names a body part rather than a place or a general need.",
    },
    builder: {
      prompt: "Build: “I need help.”",
      words: ["pomoć.", "mi", "Treba"],
      answer: "Treba mi pomoć.",
      hint: "Use the need frame you already know, then add the word for help.",
    },
    dialogue: {
      speaker: "Emma",
      avatar: "E",
      line: "Kako se osećaš?",
      translation: "How do you feel?",
      options: [
        { serbian: "Ne osećam se dobro.", english: "I do not feel well." },
        { serbian: "Autobus polazi u deset.", english: "The bus leaves at ten." },
        { serbian: "Volim muziku.", english: "I like music." },
      ],
      answer: "Ne osećam se dobro.",
      feedback: "Exactly. This is a clear, general answer when you are not feeling well.",
    },
    recap: "Treba mi pomoć.",
  },
  {
    id: "lesson-20",
    unit: 20,
    duration: "13 MIN",
    title: "Handle everyday errands",
    pathTitle: "Opening hours and errands",
    description: "Ask whether a place is open and understand a basic opening-hours answer.",
    icon: "□",
    color: "blue",
    goals: [
      { title: "Ask about opening hours", detail: "Use kada radi...?" },
      { title: "Understand until", detail: "Listen for do + time" },
      { title: "Ask if a place is open", detail: "Use da li je... otvorena?" },
    ],
    teacherNote: "For errands, a short question plus a time is enough. Listen for the number first, then for do, which tells you how long a place stays open.",
    phrases: [
      { serbian: "Kada radi banka?", english: "When is the bank open?", note: "Literally, “When does the bank work?”" },
      { serbian: "Banka radi do četiri.", english: "The bank is open until four.", note: "Do means until in this time pattern." },
      { serbian: "Da li je pošta otvorena?", english: "Is the post office open?", note: "Pošta is post office; otvorena agrees with it." },
      { serbian: "Zatvoreno je.", english: "It is closed.", note: "A useful sign or spoken answer when a place is not open." },
    ],
    grammar: {
      title: "OPEN UNTIL A TIME",
      focus: "radi do + time",
      explanation: "Radi means “is open” or literally “works” for a business. Do introduces the closing time: banka radi do četiri.",
      practiceNote: "Practise the time frame with a shop or place you know. You only need one familiar place and one number to make it useful.",
    },
    check: {
      prompt: "What does Zatvoreno je mean?",
      lead: "Choose what you would learn from a closed-door sign.",
      options: ["It is closed.", "It is open.", "It is expensive."],
      answer: "It is closed.",
      explanation: "Zatvoreno describes a place that is closed.",
      wrongFeedback: "Think about the status of a shop or office that you cannot enter.",
    },
    builder: {
      prompt: "Build: “The bank is open until four.”",
      words: ["četiri.", "do", "radi", "Banka"],
      answer: "Banka radi do četiri.",
      hint: "Name the place, say that it is open, then use the word for “until” before the closing time.",
    },
    dialogue: {
      speaker: "Nikola",
      avatar: "N",
      line: "Da li je pošta otvorena?",
      translation: "Is the post office open?",
      options: [
        { serbian: "Da, otvorena je.", english: "Yes, it is open." },
        { serbian: "Pada kiša.", english: "It is raining." },
        { serbian: "Prezivam se Smith.", english: "My surname is Smith." },
      ],
      answer: "Da, otvorena je.",
      feedback: "Right. Da answers yes, and otvorena je matches the feminine word pošta.",
    },
    recap: "Banka radi do četiri.",
  },
  {
    id: "lesson-21",
    unit: 21,
    duration: "14 MIN",
    title: "Talk about yesterday",
    pathTitle: "A first look at the past",
    description: "Use a few past-time phrases to say where you were and what you did yesterday.",
    icon: "←",
    color: "gold",
    goals: [
      { title: "Place something yesterday", detail: "Use juče" },
      { title: "Say where you were", detail: "Use bila sam / bio sam" },
      { title: "Say what you did", detail: "Use a simple past form" },
    ],
    teacherNote: "Past forms show the speaker’s gender in Serbian. This lesson uses the feminine forms for Emma; a male speaker uses bio instead of bila and učio instead of učila.",
    phrases: [
      { serbian: "Juče sam bila kod kuće.", english: "Yesterday I was at home. (female speaker)", note: "A male speaker says bio instead of bila." },
      { serbian: "Juče sam učila srpski.", english: "Yesterday I studied Serbian. (female speaker)", note: "A male speaker says učio instead of učila." },
      { serbian: "Bilo je lepo.", english: "It was nice.", note: "A handy, gender-neutral reaction about an experience." },
      { serbian: "Šta si radila?", english: "What did you do? (asking a woman)", note: "Use radila when speaking to a woman; radila changes to radio for a man." },
    ],
    grammar: {
      title: "PAST-TIME SIGNALS",
      focus: "sam + past form",
      explanation: "A simple Serbian past statement often uses sam with a past form. The past form changes for a female or male speaker: bila/bio, učila/učio.",
      practiceNote: "Do not try to build every past verb from scratch. Start with juče plus one complete sentence about yourself.",
    },
    check: {
      prompt: "What does Juče mean?",
      lead: "Choose the time word that points to the day before today.",
      options: ["Yesterday", "Tomorrow", "Today"],
      answer: "Yesterday",
      explanation: "Juče is yesterday; sutra is tomorrow and danas is today.",
      wrongFeedback: "Choose the day that comes immediately before today.",
    },
    builder: {
      prompt: "Build: “It was nice.”",
      words: ["lepo.", "je", "Bilo"],
      answer: "Bilo je lepo.",
      hint: "This is a short past reaction: begin with “it was,” connect it with je, then add the description.",
    },
    dialogue: {
      speaker: "Nikola",
      avatar: "N",
      line: "Šta si radila juče?",
      translation: "What did you do yesterday? (asking a woman)",
      options: [
        { serbian: "Učila sam srpski.", english: "I studied Serbian. (female speaker)" },
        { serbian: "Sutra ću učiti srpski.", english: "I will study Serbian tomorrow." },
        { serbian: "Toalet je levo.", english: "The toilet is on the left." },
      ],
      answer: "Učila sam srpski.",
      feedback: "Exactly. This is a feminine past form for a completed activity yesterday.",
    },
    recap: "Juče sam učila srpski.",
  },
  {
    id: "lesson-22",
    unit: 22,
    duration: "14 MIN",
    title: "Make a plan for tomorrow",
    pathTitle: "A first look at the future",
    description: "Use a few natural future phrases for plans, invitations, and seeing someone tomorrow.",
    icon: "→",
    color: "green",
    goals: [
      { title: "Talk about tomorrow", detail: "Use sutra" },
      { title: "Make a future plan", detail: "Use ću + verb" },
      { title: "Arrange to meet", detail: "Use vidimo se sutra" },
    ],
    teacherNote: "Future Serbian has several useful patterns. Start with the most common, natural phrases here; the important thing is being able to make and understand a simple plan.",
    phrases: [
      { serbian: "Sutra ću učiti srpski.", english: "Tomorrow I will study Serbian.", note: "Ću is a small future marker used here with učiti." },
      { serbian: "Ići ćemo u grad.", english: "We will go into town.", note: "Ići ćemo is a future form for “we will go.”" },
      { serbian: "Hoćeš li doći?", english: "Will you come?", note: "A friendly question about a future plan." },
      { serbian: "Vidimo se sutra.", english: "See you tomorrow.", note: "Literally, “We see each other tomorrow.”" },
    ],
    grammar: {
      title: "A SMALL FUTURE MARKER",
      focus: "ću + verb",
      explanation: "In Sutra ću učiti srpski, ću signals the future and učiti names the activity. Learn the complete phrase before worrying about all future forms.",
      practiceNote: "Make one realistic plan for tomorrow. Keep sutra at the start and use a verb phrase you have practised.",
    },
    check: {
      prompt: "Which phrase means “See you tomorrow”?",
      lead: "Choose the friendly goodbye that includes sutra.",
      options: ["Vidimo se sutra.", "Juče sam bila kod kuće.", "Kada radiš?"],
      answer: "Vidimo se sutra.",
      explanation: "Vidimo se is the everyday phrase for “see you,” and sutra means tomorrow.",
      wrongFeedback: "Look for the friendly goodbye that includes the word for tomorrow.",
    },
    builder: {
      prompt: "Build: “Tomorrow I will study Serbian.”",
      words: ["srpski.", "učiti", "ću", "Sutra"],
      answer: "Sutra ću učiti srpski.",
      hint: "Start with the time word, keep the small future marker next to the activity, then name the language.",
    },
    dialogue: {
      speaker: "Emma",
      avatar: "E",
      line: "Hoćeš li doći sutra?",
      translation: "Will you come tomorrow?",
      options: [
        { serbian: "Da, doći ću.", english: "Yes, I will come." },
        { serbian: "Bilo je lepo.", english: "It was nice." },
        { serbian: "Koliko košta?", english: "How much does it cost?" },
      ],
      answer: "Da, doći ću.",
      feedback: "Right. You accepted the future plan with a natural short answer.",
    },
    recap: "Vidimo se sutra.",
  },
  {
    id: "lesson-23",
    unit: 23,
    duration: "14 MIN",
    title: "Connect your ideas",
    pathTitle: "A simple longer sentence",
    description: "Link familiar phrases with and, but, because, first, and then to say a little more.",
    icon: "&",
    color: "blue",
    goals: [
      { title: "Add another idea", detail: "Use i — and" },
      { title: "Contrast two ideas", detail: "Use ali — but" },
      { title: "Give a simple reason", detail: "Use jer — because" },
    ],
    teacherNote: "Longer speech does not mean harder grammar. Two short ideas joined well are more useful than one long sentence you cannot control.",
    phrases: [
      { serbian: "Volim kafu, ali ne volim čaj.", english: "I like coffee, but I do not like tea.", note: "Ali means but and joins contrasting ideas." },
      { serbian: "Učim srpski jer živim u Beogradu.", english: "I study Serbian because I live in Belgrade.", note: "Jer means because." },
      { serbian: "Prvo radim, onda učim.", english: "First I work, then I study.", note: "Prvo means first; onda means then." },
      { serbian: "Posle idem kući.", english: "Later I go home.", note: "Posle means later or afterwards." },
    ],
    grammar: {
      title: "SMALL CONNECTORS, BIGGER IDEAS",
      focus: "i / ali / jer / onda",
      explanation: "These short words link the simple sentences you already know. I adds, ali contrasts, jer gives a reason, and onda moves the story forward.",
      practiceNote: "Join two true phrases you already know with i or ali. You do not need new vocabulary to make your Serbian sound more connected.",
    },
    check: {
      prompt: "What does ali mean in Volim kafu, ali ne volim čaj?",
      lead: "Choose the connector that contrasts the two preferences.",
      options: ["But", "And", "Because"],
      answer: "But",
      explanation: "Ali introduces a contrast: liking one thing but not another.",
      wrongFeedback: "Choose the connector that signals a contrast between two ideas.",
    },
    builder: {
      prompt: "Build: “First I work, then I study.”",
      words: ["učim.", "onda", "radim,", "Prvo"],
      answer: "Prvo radim, onda učim.",
      hint: "Start with the first activity, then use the connector that moves you to the second activity.",
    },
    dialogue: {
      speaker: "Nikola",
      avatar: "N",
      line: "Zašto učiš srpski?",
      translation: "Why do you study Serbian?",
      options: [
        { serbian: "Jer živim u Beogradu.", english: "Because I live in Belgrade." },
        { serbian: "Zatvoreno je.", english: "It is closed." },
        { serbian: "Treba mi jakna.", english: "I need a jacket." },
      ],
      answer: "Jer živim u Beogradu.",
      feedback: "Exactly. Jer gives a concise reason that directly answers Zašto? (“Why?”).",
    },
    recap: "Prvo radim, onda učim.",
  },
  {
    id: "lesson-24",
    unit: 24,
    duration: "16 MIN",
    title: "Use Serbian in a real day",
    pathTitle: "A1 conversation capstone",
    description: "Bring greetings, personal details, errands, plans, and repair phrases together in a final guided A1 conversation.",
    icon: "★",
    color: "coral",
    goals: [
      { title: "Start and maintain a chat", detail: "Greet, introduce yourself, and return a question" },
      { title: "Handle an everyday need", detail: "Order, ask for a place, or ask for help" },
      { title: "Close with a plan", detail: "Use a simple future phrase or goodbye" },
    ],
    teacherNote: "This capstone is about choosing the right phrase at the right moment. Speak slowly, use the repair phrases when needed, and let familiar chunks carry the conversation.",
    phrases: [
      { serbian: "Zdravo, zovem se Emma i živim u Beogradu.", english: "Hello, my name is Emma and I live in Belgrade.", note: "A friendly introduction with one personal detail." },
      { serbian: "Danas radim do četiri, ali sutra mogu.", english: "Today I work until four, but tomorrow I can.", note: "A practical way to explain when you are free." },
      { serbian: "Ne razumem. Možete li da ponovite?", english: "I do not understand. Can you repeat?", note: "A polite rescue phrase when something is unclear." },
      { serbian: "Vidimo se sutra.", english: "See you tomorrow.", note: "A simple, warm way to close the conversation." },
    ],
    grammar: {
      title: "A CONVERSATION HAS TURNS",
      focus: "detail + question + response",
      explanation: "Use one detail about yourself, then ask or answer one clear question. The A1 goal is not a perfect speech — it is keeping a helpful exchange moving.",
      practiceNote: "Make a four-line mini conversation using only phrases you know: greet, share one detail, ask one question, and say goodbye.",
    },
    check: {
      prompt: "Someone says something too quickly. Which reply keeps the conversation going?",
      lead: "Choose the phrase that asks for clarification politely.",
      options: ["Ne razumem. Možete li da ponovite?", "Preskupo je.", "Moj brat je mlad."],
      answer: "Ne razumem. Možete li da ponovite?",
      explanation: "This response clearly says you did not understand and politely asks the person to repeat.",
      wrongFeedback: "Choose the option that says you did not understand and asks for a repeat.",
    },
    builder: {
      prompt: "Build: “See you tomorrow.”",
      words: ["sutra.", "se", "Vidimo"],
      answer: "Vidimo se sutra.",
      hint: "Keep the two-word goodbye together, then add the time word at the end.",
    },
    dialogue: {
      speaker: "Nikola",
      avatar: "N",
      line: "Zdravo! Kako si?",
      translation: "Hello! How are you?",
      options: [
        { serbian: "Dobro sam, hvala. A ti?", english: "I am well, thank you. And you?" },
        { serbian: "Banka radi do četiri.", english: "The bank is open until four." },
        { serbian: "Juče sam bila kod kuće.", english: "Yesterday I was at home." },
      ],
      answer: "Dobro sam, hvala. A ti?",
      feedback: "Perfect. You answered the greeting warmly and gave Nikola a turn to respond.",
    },
    recap: "Zdravo! Dobro sam, hvala. Vidimo se sutra.",
  },
];

export const nextCourseStage = [
  { unit: 25, title: "A2 daily situations", description: "Broader conversations about travel, shopping, work, and local life." },
  { unit: 26, title: "A2 storytelling", description: "More past and future language for experiences, plans, and opinions." },
  { unit: 27, title: "Fluency practice", description: "Longer listening, guided role-plays, and confidence-building review." },
];
