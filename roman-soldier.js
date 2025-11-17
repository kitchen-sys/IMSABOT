// Roman Soldier RPG Game
const game = {
    // Game State
    currentRound: 1,
    maxRounds: 20,
    health: 100,
    maxHealth: 100,
    honor: 50,
    level: 1,
    experience: 0,
    gold: 100,

    // Stats tracking
    totalQuestions: 0,
    correctAnswers: 0,
    legendaryItemsFound: 0,

    // Current battle state
    currentQuestions: [],
    playerAnswers: [],
    askedQuestions: [], // Track which questions have been asked to prevent repeats

    // Equipment
    equipment: {
        helmet: { name: "Iron Helmet", rarity: "common", power: 5 },
        chest: { name: "Leather Cuirass", rarity: "common", power: 8 },
        legs: { name: "Simple Greaves", rarity: "common", power: 4 },
        weapon: { name: "Gladius", rarity: "common", power: 10 },
        shield: { name: "Wooden Scutum", rarity: "common", power: 6 }
    },

    // Companions
    companions: [
        { name: "Marcus", relationship: 50, bonus: 0 },
        { name: "Gaius", relationship: 50, bonus: 0 },
        { name: "Lucius", relationship: 50, bonus: 0 },
        { name: "Titus", relationship: 50, bonus: 0 }
    ],

    // Horse system
    horse: null,
    horses: [
        {
            name: "Common Mule",
            price: 200,
            bonus: 2,
            description: "A sturdy pack animal. Provides +2% combat bonus and faster movement.",
            speedBonus: 5
        },
        {
            name: "Gallic Warhorse",
            price: 500,
            bonus: 5,
            description: "A powerful Gallic breed. Provides +5% combat bonus and intimidates enemies.",
            speedBonus: 10
        },
        {
            name: "Roman Destrier",
            price: 1000,
            bonus: 10,
            description: "An elite cavalry mount. Provides +10% combat bonus and +5 honor per battle.",
            speedBonus: 15,
            honorBonus: 5
        }
    ],

    // Letters from home
    lettersRead: [],
    letters: [
        {
            title: "From Your Father",
            content: "My dear child,\n\nYour mother and I pray daily to the household gods for your safe return. The farm continues well - we harvested 30 amphorae of wine this season. Your younger brother speaks often of joining the legions like you.\n\nRemember the virtues we taught you: virtus (courage), pietas (duty), and gravitas (dignity). Bring honor to our family name.\n\nYour father sends his blessing.",
            context: "Roman families were close-knit. The 'paterfamilias' (father) held absolute authority, and family honor was paramount. Household gods (Lares) protected the home."
        },
        {
            title: "From Your Sister",
            content: "Dearest brother,\n\nI write with joyful news - I am to be married! Father arranged a match with Marcus Tullius, a merchant of good standing. The dowry has been agreed upon.\n\nI fear I will not see you at the ceremony. Please return safely so you may meet my children someday. The city feels empty without your presence.\n\nMay Mars protect you in battle.",
            context: "Roman women typically married young (age 12-15 for girls, 25-30 for men). Marriages were arranged by fathers to strengthen family alliances and social position."
        },
        {
            title: "From Your Mother",
            content: "My beloved son,\n\nI light incense at the temple of Vesta for you each morning. Your room remains as you left it. I have woven you a new cloak from the finest wool - I will send it with the next supply wagon.\n\nTake care of your health. Eat well, stay dry, and trust in the gods. I await the day you return victorious.\n\nWith a mother's eternal love.",
            context: "Roman mothers had limited legal rights but wielded significant influence through family bonds. Vesta was the goddess of the hearth and home, representing domestic security."
        },
        {
            title: "From A Childhood Friend",
            content: "Greetings, old friend!\n\nMuch has changed since you left for the legions. Lucius opened a tavern near the Forum. Quintus married that baker's daughter (yes, that one!).\n\nWe speak of you often at the baths. Your courage is known even here. When you return, there will be wine and celebration!\n\nThe gods smile upon you, brother.",
            context: "Roman friendships were important social bonds. Men gathered at public baths (thermae) daily to socialize, exercise, and discuss news. These were centers of community life."
        },
        {
            title: "News from Rome",
            content: "To Legionary [Your Name],\n\nOfficial dispatch: The Senate commemorates your legion's victories. Caesar speaks highly of your service. Upon completion of your 25-year term, land in the new province awaits you.\n\nRemember: You fight not just for glory, but for Rome's eternal destiny. The Republic depends on soldiers like you.\n\nBy order of the Senate and People of Rome.",
            context: "After 25 years of service, legionaries received either land grants in newly conquered territories or a cash pension. This created loyalty and helped Romanize conquered regions with veteran settlers."
        }
    ],

    // Stats for achievements
    knowledgeScore: 0, // Total correct answers - visible progress metric

    // Question Bank (50 questions about Rome) with educational explanations and difficulty levels
    questionBank: [
        // EASY QUESTIONS (Rounds 1-7)
        {
            question: "Who was the first Emperor of Rome?",
            answers: ["Julius Caesar", "Augustus"],
            correct: 1,
            difficulty: "easy",
            explanation: "Augustus (formerly Octavian) became the first Roman Emperor in 27 BCE. Julius Caesar was a dictator but never held the title of Emperor. After Caesar's assassination, Augustus rose to power and transformed Rome from a Republic to an Empire."
        },
        {
            question: "What year was Rome traditionally founded?",
            answers: ["753 BCE", "509 BCE"],
            correct: 0,
            difficulty: "easy",
            explanation: "According to legend, Rome was founded in 753 BCE by Romulus, who became its first king. The year 509 BCE marks when Rome became a Republic after overthrowing its last king."
        },
        {
            question: "The Roman military formation was called a:",
            answers: ["Phalanx", "Legion"],
            correct: 1,
            difficulty: "easy",
            explanation: "A Roman legion was a large military unit of about 5,000 soldiers. The phalanx was used by Greeks. Roman legions were more flexible and effective than the rigid Greek phalanx formation."
        },
        {
            question: "Which brothers allegedly founded Rome?",
            answers: ["Romulus and Remus", "Castor and Pollux"],
            correct: 0,
            difficulty: "easy",
            explanation: "According to Roman mythology, twin brothers Romulus and Remus founded Rome. Romulus killed Remus in a dispute and became Rome's first king. Castor and Pollux were different mythological twins."
        },
        {
            question: "The Roman Senate building was called the:",
            answers: ["Curia", "Forum"],
            correct: 0,
            explanation: "The Curia was the meeting house of the Roman Senate. The Forum was the public plaza where the Curia was located, but it wasn't the building itself."
            difficulty: "easy",
        },
        {
            question: "How many men were in a full Roman legion?",
            answers: ["About 5,000", "About 10,000"],
            correct: 0,
            explanation: "A full-strength Roman legion contained approximately 5,000 soldiers (4,800 infantry plus 120 cavalry). This made the legion large enough to be powerful but small enough to move quickly."
        },
            difficulty: "easy",
        {
            question: "The Punic Wars were fought against:",
            answers: ["Carthage", "Greece"],
            correct: 0,
            explanation: "The three Punic Wars (264-146 BCE) were fought between Rome and Carthage, a powerful North African city. The most famous Carthaginian general was Hannibal, who crossed the Alps with elephants to invade Italy."
        },
        {
            difficulty: "easy",
            question: "A Roman soldier's standard sword was called a:",
            answers: ["Gladius", "Spatha"],
            correct: 0,
            explanation: "The gladius was a short sword (about 2 feet long) perfect for close combat. Roman soldiers were trained to thrust with it. The spatha was a longer sword used later by cavalry."
        },
        {
            question: "The Roman shield was called a:",
            difficulty: "easy",
            answers: ["Scutum", "Aspis"],
            correct: 0,
            explanation: "The scutum was the large rectangular shield used by Roman legionaries. It was curved to protect the body and could be used to push enemies. The aspis was a round Greek shield."
        },
        {
            question: "Julius Caesar crossed which river to start the civil war?",
            answers: ["The Rubicon", "The Tiber"],
            difficulty: "easy",
            correct: 0,
            explanation: "In 49 BCE, Caesar crossed the Rubicon River with his army, defying the Senate's order. This act started a civil war. 'Crossing the Rubicon' still means passing a point of no return. The Tiber flows through Rome."
        },
        {
            question: "How long did a Roman soldier serve in the legions?",
            answers: ["25 years", "10 years"],
            correct: 0,
            difficulty: "easy",
            explanation: "Roman legionaries signed up for 25 years of service! After completing their service, they received land or money as a pension. This long service created very experienced, professional soldiers."
        },
        {
            question: "The Roman god of war was:",
            answers: ["Mars", "Jupiter"],
            correct: 0,
            explanation: "Mars was the Roman god of war and the father of Romulus and Remus. Romans believed they were descendants of Mars, making war part of their identity. Jupiter was the king of the gods."
            difficulty: "easy",
        },
        {
            question: "The Colosseum was built by which dynasty?",
            answers: ["Flavian", "Julio-Claudian"],
            correct: 0,
            explanation: "The Flavian dynasty (Vespasian and his sons Titus and Domitian) built the Colosseum starting in 70 CE. It could hold 50,000 spectators for gladiator fights and other events!"
        },
            difficulty: "easy",
        {
            question: "Hannibal crossed the Alps with:",
            answers: ["Elephants", "Cavalry only"],
            correct: 0,
            explanation: "Hannibal famously crossed the Alps with 37 war elephants in 218 BCE to attack Italy. Most elephants died in the mountains, but this bold move shocked Rome and is still studied by military historians today."
        },
        {
            difficulty: "easy",
            question: "The Roman Republic ended in:",
            answers: ["27 BCE", "44 BCE"],
            correct: 0,
            explanation: "The Republic officially ended in 27 BCE when Augustus became the first Emperor. While Caesar was assassinated in 44 BCE, Rome didn't immediately become an empire - there were 17 more years of civil war first."
        },
        {
            question: "The chief Roman god was:",
            difficulty: "easy",
            answers: ["Jupiter", "Mars"],
            correct: 0,
            explanation: "Jupiter was king of the Roman gods, ruling the sky and thunder (like Greek Zeus). Mars was the god of war. Romans swore oaths 'by Jupiter' and built great temples to honor him."
        },
        {
            question: "Roman heavy infantry armor was called:",
            answers: ["Lorica Segmentata", "Lorica Hamata"],
            difficulty: "easy",
            correct: 0,
            explanation: "Lorica Segmentata was the iconic segmented plate armor you see in movies. It was made of iron strips that protected well while allowing movement. Lorica Hamata was chainmail armor."
        },
        {
            question: "The Gallic Wars lasted:",
            answers: ["8 years (58-50 BCE)", "5 years"],
            correct: 0,
            difficulty: "easy",
            explanation: "Julius Caesar's conquest of Gaul took 8 years from 58-50 BCE. He wrote a famous book about these wars called 'Commentarii de Bello Gallico' (Commentaries on the Gallic War) that students still read today!"
        },
        {
            question: "Caesar was assassinated on:",
            answers: ["The Ides of March (March 15)", "The Kalends of May"],
            correct: 0,
            explanation: "Julius Caesar was murdered on March 15, 44 BCE - the 'Ides of March' in the Roman calendar. He was stabbed 23 times by senators who feared he had too much power. Shakespeare made this date famous in his play."
            difficulty: "easy",
        },
        {
            question: "A Roman military unit of 80 men was called a:",
            answers: ["Century", "Cohort"],
            correct: 0,
            explanation: "A century was a unit of about 80 soldiers led by a centurion. Despite the name suggesting 100, centuries typically had 80 men. Six centuries made a cohort, and ten cohorts made a legion."
        },
            difficulty: "easy",
        {
            question: "The Roman goddess of wisdom was:",
            answers: ["Minerva", "Venus"],
            correct: 0,
            explanation: "Minerva was the goddess of wisdom, strategic warfare, and crafts (similar to Greek Athena). Venus was the goddess of love and beauty. Both were important in Roman religion and mythology."
        },
        {
            difficulty: "easy",
            question: "The Praetorian Guard protected:",
            answers: ["The Emperor", "The Senate"],
            correct: 0,
            explanation: "The Praetorian Guard was the Emperor's elite bodyguard unit. They were the only soldiers allowed to be armed in Rome. However, they became so powerful they sometimes assassinated emperors they didn't like!"
        },
        {
            question: "Roman soldiers built this defensive structure in Britain:",
            difficulty: "easy",
            answers: ["Hadrian's Wall", "Antonine Wall"],
            correct: 0,
            explanation: "Hadrian's Wall (built 122 CE) is the most famous, stretching 73 miles across northern England to keep out Scottish tribes. The Antonine Wall was built later and farther north but was abandoned. You can still visit Hadrian's Wall today!"
        },
        {
            question: "The Roman messenger god was:",
            answers: ["Mercury", "Apollo"],
            difficulty: "easy",
            correct: 0,
            explanation: "Mercury was the speedy messenger of the gods, with winged sandals to fly between heaven and earth. He was also the god of commerce and travelers. Apollo was the god of the sun, music, and prophecy."
        },
        {
            question: "Spartacus led a revolt of:",
            answers: ["Gladiators and slaves", "Gauls"],
            correct: 0,
            difficulty: "easy",
            explanation: "In 73 BCE, Spartacus led the largest slave rebellion in Roman history! He and other gladiators escaped and built an army of 70,000 escaped slaves. Though they won many battles, Rome eventually defeated them in 71 BCE."
        },
        {
            question: "The Battle of Alesia was won by:",
            answers: ["Julius Caesar", "Vercingetorix"],
            correct: 0,
            explanation: "In 52 BCE, Caesar won a brilliant victory at Alesia by building two walls - one to trap the Gauls inside, another to protect his army from relief forces. This victory ended major Gallic resistance and made Caesar famous."
            difficulty: "easy",
        },
        {
            question: "A Roman centurion commanded:",
            answers: ["About 80 men", "About 500 men"],
            correct: 0,
            explanation: "Centurions were experienced officers who led a century of about 80 men. They were identified by their distinctive side-to-side helmet crests. Centurions were the backbone of the Roman army's discipline and effectiveness."
        },
        {
            question: "The Roman standard was called a:",
            answers: ["Aquila (Eagle)", "Vexillum"],
            correct: 0,
            explanation: "Each legion carried a sacred golden eagle (aquila) as its standard. Losing your legion's eagle was the ultimate disgrace! Romans would fight to the death to protect it. The vexillum was a smaller flag used by smaller units."
        },
        {
            question: "The greatest enemy of Rome during the Gallic Wars was:",
            answers: ["Vercingetorix", "Ambiorix"],
            correct: 0,
            explanation: "Vercingetorix united the Gallic tribes against Rome in 52 BCE. He was a brilliant leader who nearly defeated Caesar, but was captured at Alesia. After being paraded in Caesar's triumph, he was executed in Rome."
        },
        {
            question: "Roman roads were famous for being:",
            answers: ["Straight and durable", "Wide but poorly maintained"],
            correct: 0,
            difficulty: "easy",
            explanation: "Roman roads were engineering marvels - built straight as arrows with layers of stone, gravel, and pavement. They lasted for centuries! Some Roman roads in Europe are still used today, 2,000 years later. All roads led to Rome!"
        },
        // MEDIUM QUESTIONS (Rounds 8-13)
        {
            question: "What language did educated Romans speak besides Latin?",
            answers: ["Greek", "Egyptian"],
            correct: 0,
            difficulty: "medium",
            explanation: "Greek was the language of culture and education. Elite Romans studied Greek literature, philosophy, and rhetoric. Many Roman writers like Cicero wrote in both Latin and Greek!"
        },
        {
            question: "The Roman bath complex was called:",
            answers: ["Thermae", "Basilica"],
            correct: 0,
            difficulty: "medium",
            explanation: "Thermae were large public bath complexes with hot, warm, and cold pools. Romans bathed daily for hygiene and socializing. Baths also had libraries, exercise areas, and gardens!"
        },
        {
            question: "Roman concrete was made with:",
            answers: ["Volcanic ash", "Crushed marble"],
            correct: 0,
            difficulty: "medium",
            explanation: "Romans mixed volcanic ash (pozzolana) with lime to create incredibly strong concrete that could even set underwater! This is why Roman buildings like the Pantheon still stand 2,000 years later."
        },
        {
            question: "A Roman villa was:",
            answers: ["A country estate", "A city apartment"],
            correct: 0,
            difficulty: "medium",
            explanation: "Villas were luxurious country estates owned by wealthy Romans. They had farms, gardens, baths, and beautiful architecture. City apartments were called 'insulae'."
        },
        {
            question: "The Roman entertainment building for chariot races was:",
            answers: ["Circus Maximus", "Colosseum"],
            correct: 0,
            difficulty: "medium",
            explanation: "The Circus Maximus could hold 250,000 spectators for chariot races! It was the largest entertainment venue ever built. The Colosseum was for gladiator fights and other spectacles."
        },
        {
            question: "Roman numerals use these letters:",
            answers: ["I, V, X, L, C, D, M", "A, B, C, D, E, F, G"],
            correct: 0,
            difficulty: "medium",
            explanation: "Roman numerals use I=1, V=5, X=10, L=50, C=100, D=500, M=1,000. For example, XIV = 14 and MMXXV = 2025. This system was used throughout the Roman Empire!"
        },
        {
            question: "Gauls were Celtic people who lived in:",
            answers: ["Modern France and Belgium", "Modern Greece"],
            correct: 0,
            difficulty: "medium",
            explanation: "The Gauls inhabited most of modern France, Belgium, and parts of Germany. They were divided into many tribes with their own territories. The Romans called this region 'Gallia' (Gaul)."
        },
        {
            question: "Roman legionaries wore this under their armor:",
            answers: ["A red tunic", "A white toga"],
            correct: 0,
            difficulty: "medium",
            explanation: "Legionaries wore a knee-length red wool tunic under their armor. Togas were formal civilian clothing worn by Roman citizens, not soldiers in the field!"
        },
        {
            question: "The Roman unit larger than a century was:",
            answers: ["A Cohort (480 men)", "A Maniple (120 men)"],
            correct: 0,
            difficulty: "medium",
            explanation: "A cohort consisted of 6 centuries (about 480 men). Ten cohorts made a legion. The cohort was the primary tactical unit that could operate independently."
        },
        {
            question: "Romans conquered Britain starting in:",
            answers: ["43 CE under Emperor Claudius", "55 BCE under Julius Caesar"],
            correct: 0,
            difficulty: "medium",
            explanation: "While Caesar invaded Britain twice (55-54 BCE), the real conquest began in 43 CE when Emperor Claudius sent four legions. Britain remained Roman for nearly 400 years!"
        },
        // HARD QUESTIONS (Rounds 14-20)
        {
            question: "The Roman military tactic of surrounding an enemy was called:",
            answers: ["Circumvallation", "Decimation"],
            correct: 0,
            difficulty: "hard",
            explanation: "Circumvallation meant building walls to surround an enemy position. Caesar famously used this at Alesia, building two walls - one facing in, one facing out. Decimation was a punishment where every 10th soldier was executed."
        },
        {
            question: "The crisis of the Third Century saw how many emperors?",
            answers: ["Over 50 emperors in 50 years", "5 emperors"],
            correct: 0,
            difficulty: "hard",
            explanation: "From 235-284 CE, over 50 men claimed to be emperor! Most were assassinated within months. This period of chaos nearly destroyed Rome before Diocletian restored order."
        },
        {
            question: "Roman soldiers carried supplies for how many days?",
            answers: ["16 days worth", "3 days worth"],
            correct: 0,
            difficulty: "hard",
            explanation: "Each legionary carried about 60 pounds of gear including 16 days of rations, armor, weapons, tools, and equipment. They were called 'Marius' mules' after General Marius who required this."
        },
        {
            question: "The Roman testudo formation involved:",
            answers: ["Shields locked overhead and on sides", "Soldiers in a wedge shape"],
            correct: 0,
            difficulty: "hard",
            explanation: "Testudo ('tortoise') had soldiers lock shields overhead and on all sides, creating a protective shell. This defended against arrows and projectiles during sieges. It was nearly impenetrable!"
        },
        {
            question: "Which emperor split the Roman Empire in two?",
            answers: ["Diocletian", "Constantine"],
            correct: 0,
            difficulty: "hard",
            explanation: "Diocletian (284-305 CE) divided the empire into Eastern and Western halves with separate emperors to make it easier to govern and defend. Constantine later reunited it temporarily."
        },
        {
            question: "The Marian Reforms made Roman soldiers:",
            answers: ["Professional paid troops", "Citizen militia only"],
            correct: 0,
            difficulty: "hard",
            explanation: "General Gaius Marius (107 BCE) reformed the army, allowing non-landowners to join as professional paid soldiers. This created the legendary Roman legions that conquered the Mediterranean world!"
        },
        {
            question: "Roman pilum javelins were designed to:",
            answers: ["Bend on impact", "Pierce multiple enemies"],
            correct: 0,
            difficulty: "hard",
            explanation: "The pilum's iron shaft bent when it hit a shield, making the shield unusable and preventing enemies from throwing it back. This clever design gave Romans a huge advantage in battle!"
        },
        {
            question: "The Roman grain dole provided free food to:",
            answers: ["Over 200,000 citizens", "Only soldiers"],
            correct: 0,
            difficulty: "hard",
            explanation: "By Caesar's time, over 320,000 Roman citizens received free grain! Later emperors reduced this to about 200,000. This kept the poor fed and politically stable - 'bread and circuses'!"
        },
        {
            question: "Gaius Julius Caesar was assassinated by:",
            answers: ["A group of 60 senators", "A single assassin"],
            correct: 0,
            difficulty: "hard",
            explanation: "Over 60 senators participated in Caesar's assassination! They stabbed him 23 times on the Senate floor. The conspiracy was led by Brutus and Cassius, who feared Caesar's growing power."
        },
        {
            question: "Roman auxiliary troops were:",
            answers: ["Non-citizen soldiers from provinces", "Retired legionaries"],
            correct: 0,
            difficulty: "hard",
            explanation: "Auxiliaries were non-Roman soldiers from conquered territories. They served 25 years and received Roman citizenship upon retirement. They provided cavalry, archers, and specialized troops legions lacked."
        }
    ],

    // Equipment pools with rarities
    equipmentPools: {
        helmet: {
            common: [
                { name: "Iron Helmet", power: 5 },
                { name: "Bronze Cap", power: 4 },
                { name: "Simple Helm", power: 5 }
            ],
            uncommon: [
                { name: "Reinforced Helmet", power: 8 },
                { name: "Cavalry Helm", power: 9 },
                { name: "Officer's Helmet", power: 8 }
            ],
            rare: [
                { name: "Crested Helmet", power: 12 },
                { name: "Plume Helmet", power: 13 },
                { name: "Decorated Helm", power: 12 }
            ],
            epic: [
                { name: "Centurion's Pride", power: 18 },
                { name: "Praetorian Helm", power: 19 },
                { name: "Tribune's Crown", power: 18 }
            ],
            legendary: [
                { name: "Helmet of Victory", power: 25 },
                { name: "Eagle's Crest", power: 26 },
                { name: "Imperial Guard Helm", power: 25 }
            ],
            mythic: [
                { name: "Mars' War Helm", power: 50 },
                { name: "Scipio's Laurel Crown", power: 52 },
                { name: "Jupiter's Thundercrown", power: 55 },
                { name: "Caesar's Triumph", power: 53 },
                { name: "Romulus' Divine Helm", power: 54 }
            ]
        },
        chest: {
            common: [
                { name: "Leather Cuirass", power: 8 },
                { name: "Hide Armor", power: 7 },
                { name: "Simple Mail", power: 8 }
            ],
            uncommon: [
                { name: "Chainmail Vest", power: 12 },
                { name: "Reinforced Cuirass", power: 13 },
                { name: "Scaled Armor", power: 12 }
            ],
            rare: [
                { name: "Lorica Hamata", power: 18 },
                { name: "Heavy Chainmail", power: 19 },
                { name: "Centurion's Cuirass", power: 18 }
            ],
            epic: [
                { name: "Lorica Segmentata", power: 28 },
                { name: "Praetorian Plate", power: 29 },
                { name: "Tribune's Armor", power: 28 }
            ],
            legendary: [
                { name: "Imperial Cuirass", power: 40 },
                { name: "Eagle Legion Plate", power: 42 },
                { name: "Consul's Protection", power: 41 }
            ]
        },
        legs: {
            common: [
                { name: "Simple Greaves", power: 4 },
                { name: "Leather Leggings", power: 4 },
                { name: "Cloth Wraps", power: 3 }
            ],
            uncommon: [
                { name: "Bronze Greaves", power: 7 },
                { name: "Reinforced Leggings", power: 8 },
                { name: "Soldier's Greaves", power: 7 }
            ],
            rare: [
                { name: "Steel Greaves", power: 11 },
                { name: "Decorated Leg Armor", power: 12 },
                { name: "Officer's Greaves", power: 11 }
            ],
            epic: [
                { name: "Centurion's Greaves", power: 17 },
                { name: "Praetorian Legs", power: 18 },
                { name: "Tribune's Greaves", power: 17 }
            ],
            legendary: [
                { name: "Imperial Greaves", power: 24 },
                { name: "Eagle's Stride", power: 25 },
                { name: "Conqueror's Steps", power: 24 }
            ]
        },
        weapon: {
            common: [
                { name: "Gladius", power: 10 },
                { name: "Short Sword", power: 9 },
                { name: "Infantry Blade", power: 10 }
            ],
            uncommon: [
                { name: "Quality Gladius", power: 15 },
                { name: "Spatha", power: 16 },
                { name: "Officer's Blade", power: 15 }
            ],
            rare: [
                { name: "Forged Gladius", power: 22 },
                { name: "Spanish Sword", power: 23 },
                { name: "Damascus Blade", power: 22 }
            ],
            epic: [
                { name: "Centurion's Gladius", power: 32 },
                { name: "Praetorian Spatha", power: 33 },
                { name: "Tribune's Sword", power: 32 }
            ],
            legendary: [
                { name: "Eagle's Talon", power: 45 },
                { name: "Conqueror's Edge", power: 46 },
                { name: "Imperial Blade", power: 45 }
            ],
            mythic: [
                { name: "Mars' Fury", power: 80 },
                { name: "Scipio's Gladius", power: 82 },
                { name: "Jupiter's Thunderbolt", power: 85 },
                { name: "Caesar's Conquest", power: 83 },
                { name: "Achilles' Wrath", power: 84 }
            ]
        },
        shield: {
            common: [
                { name: "Wooden Scutum", power: 6 },
                { name: "Small Shield", power: 5 },
                { name: "Hide Shield", power: 6 }
            ],
            uncommon: [
                { name: "Reinforced Scutum", power: 10 },
                { name: "Bronze-rimmed Shield", power: 11 },
                { name: "Soldier's Scutum", power: 10 }
            ],
            rare: [
                { name: "Iron-banded Scutum", power: 15 },
                { name: "Decorated Shield", power: 16 },
                { name: "Officer's Scutum", power: 15 }
            ],
            epic: [
                { name: "Centurion's Scutum", power: 22 },
                { name: "Praetorian Shield", power: 23 },
                { name: "Tribune's Defense", power: 22 }
            ],
            legendary: [
                { name: "Eagle's Wing", power: 32 },
                { name: "Imperial Guard Shield", power: 33 },
                { name: "Wall of Rome", power: 32 }
            ]
        }
    },

    // Battle scenarios
    battles: [
        { title: "Skirmish at the Rhine", location: "Rhine River", enemies: "Germanic Tribes" },
        { title: "Ambush in the Forest", location: "Ardennes Forest", enemies: "Belgae Warriors" },
        { title: "Defense of the Camp", location: "Roman Fortification", enemies: "Gallic Raiders" },
        { title: "River Crossing", location: "Saône River", enemies: "Helvetii Tribe" },
        { title: "Battle of the Hills", location: "Gaulish Territory", enemies: "Arverni Warriors" },
        { title: "Siege Preparation", location: "Gallic Oppidum", enemies: "Besieged Gauls" },
        { title: "Cavalry Engagement", location: "Open Plains", enemies: "Gallic Cavalry" },
        { title: "Naval Skirmish", location: "Atlantic Coast", enemies: "Veneti Fleet" },
        { title: "Mountain Pass", location: "Alpine Foothills", enemies: "Mountain Tribes" },
        { title: "Night Raid", location: "Enemy Territory", enemies: "Nervii Warriors" },
        { title: "The Great Battle", location: "Central Gaul", enemies: "United Gallic Army" },
        { title: "Bridge Defense", location: "Strategic Bridge", enemies: "Suebi Invasion" },
        { title: "Foraging Expedition", location: "Countryside", enemies: "Local Militia" },
        { title: "Relief Force", location: "Allied Territory", enemies: "Besieging Army" },
        { title: "Winter Quarters", location: "Northern Gaul", enemies: "Desperate Raiders" },
        { title: "Sacred Grove", location: "Druid Territory", enemies: "Fanatic Defenders" },
        { title: "Coastal Assault", location: "Briton Shore", enemies: "British Warriors" },
        { title: "Final Rebellion", location: "Alesia", enemies: "Vercingetorix's Army" },
        { title: "Mop-Up Operations", location: "Scattered Settlements", enemies: "Remnant Forces" },
        { title: "Triumph Preparation", location: "Road to Rome", enemies: "Final Challenges" }
    ],

    // Initialize game
    startGame() {
        this.currentRound = 1;
        this.health = 100;
        this.honor = 50;
        this.level = 1;
        this.experience = 0;
        this.gold = 100;
        this.totalQuestions = 0;
        this.correctAnswers = 0;
        this.legendaryItemsFound = 0;
        this.knowledgeScore = 0; // Reset knowledge score
        this.askedQuestions = []; // Reset asked questions
        this.horse = null; // Reset horse
        this.lettersRead = []; // Reset letters

        // Reset equipment
        this.equipment = {
            helmet: { name: "Iron Helmet", rarity: "common", power: 5 },
            chest: { name: "Leather Cuirass", rarity: "common", power: 8 },
            legs: { name: "Simple Greaves", rarity: "common", power: 4 },
            weapon: { name: "Gladius", rarity: "common", power: 10 },
            shield: { name: "Wooden Scutum", rarity: "common", power: 6 }
        };

        // Reset companions
        this.companions = [
            { name: "Marcus", relationship: 50, bonus: 0 },
            { name: "Gaius", relationship: 50, bonus: 0 },
            { name: "Lucius", relationship: 50, bonus: 0 },
            { name: "Titus", relationship: 50, bonus: 0 }
        ];

        document.getElementById('startScreen').classList.add('hidden');
        document.getElementById('gameScreen').classList.remove('hidden');

        this.updateDisplay();
        this.displayCompanions();
        this.startBattle();
    },

    // Update all displays (IMPROVEMENT 2 - added XP and Knowledge)
    updateDisplay() {
        document.getElementById('round').textContent = this.currentRound;
        document.getElementById('health').textContent = this.health;
        document.getElementById('honor').textContent = this.honor;
        document.getElementById('level').textContent = this.level;
        document.getElementById('gold').textContent = this.gold;
        document.getElementById('knowledgeScore').textContent = this.knowledgeScore;

        // Update stat bars
        const healthPercent = (this.health / this.maxHealth) * 100;
        document.getElementById('healthFill').style.width = healthPercent + '%';

        const honorPercent = this.honor;
        document.getElementById('honorFill').style.width = honorPercent + '%';

        // Update XP bar (IMPROVEMENT 2)
        const levelThreshold = this.level * 100;
        const xpPercent = (this.experience / levelThreshold) * 100;
        document.getElementById('xpBarFill').style.width = xpPercent + '%';
        document.getElementById('xpText').textContent = `${this.experience}/${levelThreshold} XP`;

        // Update equipment display
        for (let slot in this.equipment) {
            const item = this.equipment[slot];
            const element = document.getElementById(slot);
            element.textContent = item.name;
            element.className = 'equipment-item ' + item.rarity;
        }
    },

    // Display companions (IMPROVEMENT 3 - shows bonuses)
    displayCompanions() {
        const grid = document.getElementById('companionsGrid');
        grid.innerHTML = '';

        this.companions.forEach(companion => {
            // Calculate bonus based on relationship
            const bonus = Math.floor(companion.relationship / 25); // 0-4 bonus
            companion.bonus = bonus;

            let bonusText = '';
            if (bonus > 0) {
                bonusText = `<div style="color: #4dff4d; font-size: 0.9em; margin-top: 5px;">+${bonus}% battle bonus</div>`;
            }

            const card = document.createElement('div');
            card.className = 'companion-card';
            card.innerHTML = `
                <div class="companion-name">${companion.name}</div>
                <div class="companion-relationship">Relationship: ${companion.relationship}/100</div>
                <div class="relationship-bar">
                    <div class="relationship-fill" style="width: ${companion.relationship}%"></div>
                </div>
                ${bonusText}
            `;
            grid.appendChild(card);
        });
    },

    // Start a battle round
    startBattle() {
        const battle = this.battles[this.currentRound - 1];

        document.getElementById('battleTitle').textContent = battle.title;
        document.getElementById('battleLocation').textContent = battle.location;

        const storyText = `
            <p>Your legion has encountered ${battle.enemies} near ${battle.location}. The enemy forces are gathering for battle, and your centurion calls for the legion to form ranks.</p>
            <p>Before the clash of steel, you must prove your worth and knowledge of Roman history. Your performance will determine the outcome of this engagement!</p>
        `;

        document.getElementById('storyText').innerHTML = storyText;

        // Hide other panels and show question panel
        document.getElementById('resultPanel').classList.add('hidden');
        document.getElementById('choicesPanel').classList.add('hidden');
        document.getElementById('questionPanel').classList.remove('hidden');

        // Generate questions for this battle
        this.generateQuestions();
    },

    // Generate random questions for battle (with difficulty scaling and no repeats)
    generateQuestions() {
        //Select 3-5 random questions based on round difficulty
        const numQuestions = Math.min(3 + Math.floor(this.currentRound / 5), 5);

        // Determine difficulty based on round
        let difficulty = "easy";
        if (this.currentRound >= 14) difficulty = "hard";
        else if (this.currentRound >= 8) difficulty = "medium";

        // Filter questions by difficulty and exclude already asked questions
        let availableQuestions = this.questionBank.filter(q => {
            const matchesDifficulty = !q.difficulty || q.difficulty === difficulty;
            const notAsked = !this.askedQuestions.includes(this.questionBank.indexOf(q));
            return matchesDifficulty && notAsked;
        });

        // If not enough questions, include other difficulties
        if (availableQuestions.length < numQuestions) {
            availableQuestions = this.questionBank.filter(q =>
                !this.askedQuestions.includes(this.questionBank.indexOf(q))
            );
        }

        // If all questions asked, reset
        if (availableQuestions.length < numQuestions) {
            this.askedQuestions = [];
            availableQuestions = this.questionBank;
        }

        // Shuffle and select questions
        const shuffled = [...availableQuestions].sort(() => Math.random() - 0.5);
        this.currentQuestions = shuffled.slice(0, numQuestions);
        this.playerAnswers = new Array(numQuestions).fill(-1);

        // Mark questions as asked
        this.currentQuestions.forEach(q => {
            const index = this.questionBank.indexOf(q);
            if (index !== -1 && !this.askedQuestions.includes(index)) {
                this.askedQuestions.push(index);
            }
        });

        // Display questions
        const container = document.getElementById('questionContainer');
        container.innerHTML = '';

        this.currentQuestions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question-item';

            let answersHTML = '';
            q.answers.forEach((answer, ansIndex) => {
                answersHTML += `
                    <div class="answer-option" onclick="game.selectAnswer(${index}, ${ansIndex})">
                        <input type="radio" name="question${index}" id="q${index}a${ansIndex}" value="${ansIndex}">
                        <label for="q${index}a${ansIndex}">${answer}</label>
                    </div>
                `;
            });

            questionDiv.innerHTML = `
                <div class="question-text">Question ${index + 1}: ${q.question}</div>
                ${answersHTML}
            `;

            container.appendChild(questionDiv);
        });
    },

    // Select an answer
    selectAnswer(questionIndex, answerIndex) {
        this.playerAnswers[questionIndex] = answerIndex;

        // Update radio button
        const radio = document.getElementById(`q${questionIndex}a${answerIndex}`);
        radio.checked = true;
    },

    // Submit answers and show feedback (IMPROVEMENT 1)
    submitAnswers() {
        // Check if all questions are answered
        if (this.playerAnswers.includes(-1)) {
            alert('Please answer all questions before entering battle!');
            return;
        }

        // Calculate score
        let correct = 0;
        this.currentQuestions.forEach((q, index) => {
            if (this.playerAnswers[index] === q.correct) {
                correct++;
                this.knowledgeScore++; // Track total knowledge for IMPROVEMENT 2
            }
        });

        this.totalQuestions += this.currentQuestions.length;
        this.correctAnswers += correct;

        const scorePercent = (correct / this.currentQuestions.length) * 100;

        // Show answer feedback BEFORE battle results
        this.showAnswerFeedback(correct, this.currentQuestions.length, scorePercent);
    },

    // Show answer feedback with explanations (IMPROVEMENT 1)
    showAnswerFeedback(correct, total, scorePercent) {
        const container = document.getElementById('questionContainer');
        const submitBtn = document.getElementById('submitAnswers');

        // Hide submit button
        submitBtn.style.display = 'none';

        // Clear and rebuild with feedback
        container.innerHTML = '<h3 style="color: #ffd700; text-align: center; margin-bottom: 20px;">Your Answers - Learn from your performance!</h3>';

        this.currentQuestions.forEach((q, index) => {
            const isCorrect = this.playerAnswers[index] === q.correct;
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question-item';
            questionDiv.style.border = isCorrect ? '3px solid #4dff4d' : '3px solid #dc143c';
            questionDiv.style.background = isCorrect ? 'rgba(77, 255, 77, 0.1)' : 'rgba(220, 20, 60, 0.1)';

            const statusIcon = isCorrect ? '✓' : '✗';
            const statusColor = isCorrect ? '#4dff4d' : '#dc143c';
            const statusText = isCorrect ? 'Correct!' : 'Incorrect';

            let answersHTML = '';
            q.answers.forEach((answer, ansIndex) => {
                const isPlayerChoice = this.playerAnswers[index] === ansIndex;
                const isCorrectAnswer = ansIndex === q.correct;
                let answerClass = '';
                let answerLabel = '';

                if (isCorrectAnswer) {
                    answerClass = 'correct-answer';
                    answerLabel = ' ✓ CORRECT';
                } else if (isPlayerChoice) {
                    answerClass = 'wrong-answer';
                    answerLabel = ' ✗ Your answer';
                }

                answersHTML += `
                    <div class="answer-feedback ${answerClass}">
                        ${answer}${answerLabel}
                    </div>
                `;
            });

            questionDiv.innerHTML = `
                <div class="question-status" style="color: ${statusColor}; font-size: 1.3em; font-weight: bold; margin-bottom: 10px;">
                    ${statusIcon} ${statusText}
                </div>
                <div class="question-text">Question ${index + 1}: ${q.question}</div>
                ${answersHTML}
                <div class="question-explanation">
                    <strong style="color: #ffd700;">📚 Learn:</strong> ${q.explanation}
                </div>
            `;

            container.appendChild(questionDiv);
        });

        // Add continue button
        const continueBtn = document.createElement('button');
        continueBtn.className = 'btn-primary';
        continueBtn.textContent = 'Continue to Battle! ⚔️';
        continueBtn.onclick = () => {
            document.getElementById('questionPanel').classList.add('hidden');
            document.getElementById('resultPanel').classList.remove('hidden');
            submitBtn.style.display = 'block'; // Reset for next round
            this.resolveBattle(correct, total, scorePercent);
        };
        container.appendChild(continueBtn);

        // Scroll to top to see results
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },

    // Resolve battle outcome
    resolveBattle(correct, total, scorePercent) {
        let resultText = `<p><strong>Battle Results:</strong></p>`;
        resultText += `<p>You answered ${correct} out of ${total} questions correctly (${Math.round(scorePercent)}%).</p>`;

        let outcome = '';
        let damage = 0;
        let honorGain = 0;
        let goldGain = 0;
        let expGain = 0;
        let lootQuality = 0;

        if (scorePercent >= 80) {
            outcome = 'Glorious Victory';
            damage = Math.floor(Math.random() * 5);
            honorGain = 10 + Math.floor(Math.random() * 5);
            goldGain = 50 + Math.floor(Math.random() * 30);
            expGain = 30 + Math.floor(Math.random() * 20);
            lootQuality = 3; // Higher chance of good loot
            resultText += `<p><strong style="color: #ffd700;">Glorious Victory!</strong> Your knowledge and skill in battle were exemplary! The enemy is routed!</p>`;
        } else if (scorePercent >= 60) {
            outcome = 'Victory';
            damage = 5 + Math.floor(Math.random() * 10);
            honorGain = 5 + Math.floor(Math.random() * 5);
            goldGain = 30 + Math.floor(Math.random() * 20);
            expGain = 20 + Math.floor(Math.random() * 15);
            lootQuality = 2;
            resultText += `<p><strong style="color: #4dff4d;">Victory!</strong> You fought well and the enemy retreats. Rome is proud!</p>`;
        } else if (scorePercent >= 40) {
            outcome = 'Narrow Victory';
            damage = 10 + Math.floor(Math.random() * 15);
            honorGain = 2 + Math.floor(Math.random() * 3);
            goldGain = 15 + Math.floor(Math.random() * 15);
            expGain = 10 + Math.floor(Math.random() * 10);
            lootQuality = 1;
            resultText += `<p><strong style="color: #ffaa4d;">Narrow Victory.</strong> The battle was hard-fought, but you prevailed. You took significant casualties.</p>`;
        } else {
            outcome = 'Pyrrhic Victory';
            damage = 20 + Math.floor(Math.random() * 20);
            honorGain = -5;
            goldGain = 5 + Math.floor(Math.random() * 10);
            expGain = 5 + Math.floor(Math.random() * 5);
            lootQuality = 0;
            resultText += `<p><strong style="color: #dc143c;">Pyrrhic Victory.</strong> Your lack of knowledge cost many lives. The centurion is displeased.</p>`;
        }

        // Apply companion bonuses (IMPROVEMENT 3)
        const totalCompanionBonus = this.companions.reduce((sum, c) => sum + (c.bonus || 0), 0);
        if (totalCompanionBonus > 0) {
            const damageReduction = Math.floor(damage * (totalCompanionBonus / 100));
            damage = Math.max(0, damage - damageReduction);
            resultText += `<p><strong style="color: #4dff4d;">Companions Help!</strong> Your companions reduced damage by ${damageReduction} (${totalCompanionBonus}% total bonus)</p>`;
        }

        // Apply horse bonuses
        if (this.horse) {
            const horseDamageReduction = Math.floor(damage * (this.horse.bonus / 100));
            damage = Math.max(0, damage - horseDamageReduction);
            resultText += `<p><strong style="color: #ffaa4d;">🐴 ${this.horse.name}!</strong> Your mount reduced damage by ${horseDamageReduction} (${this.horse.bonus}% bonus)</p>`;

            // Roman Destrier gives honor bonus
            if (this.horse.honorBonus) {
                honorGain += this.horse.honorBonus;
                resultText += `<p><strong style="color: #ffd700;">Prestigious Mount!</strong> Your elite horse impresses all (+${this.horse.honorBonus} extra honor)</p>`;
            }
        }

        // Apply results
        this.health = Math.max(0, this.health - damage);
        this.honor = Math.max(0, Math.min(100, this.honor + honorGain));
        this.gold += goldGain;
        this.experience += expGain;

        // Check for level up
        const levelThreshold = this.level * 100;
        if (this.experience >= levelThreshold) {
            this.level++;
            this.maxHealth += 10;
            this.health = Math.min(this.health + 30, this.maxHealth);
            resultText += `<p><strong style="color: #ffd700;">Level Up!</strong> You are now level ${this.level}! Health restored and maximum health increased!</p>`;
        }

        resultText += `<p>Damage taken: ${damage} | Honor ${honorGain >= 0 ? '+' : ''}${honorGain} | Gold +${goldGain} | Experience +${expGain}</p>`;

        // Update companion relationships based on performance
        const relationshipChange = Math.floor(scorePercent / 20) - 2; // -2 to +3
        this.companions.forEach(companion => {
            companion.relationship = Math.max(0, Math.min(100, companion.relationship + relationshipChange));
        });

        if (relationshipChange > 0) {
            resultText += `<p>Your companions are impressed! Relationships improved by ${relationshipChange}.</p>`;
        } else if (relationshipChange < 0) {
            resultText += `<p>Your companions are disappointed. Relationships decreased by ${Math.abs(relationshipChange)}.</p>`;
        }

        // Generate loot
        this.generateLoot(lootQuality);

        document.getElementById('resultText').innerHTML = resultText;
        this.updateDisplay();
        this.displayCompanions();
    },

    // Generate loot based on battle performance
    generateLoot(quality) {
        const lootPanel = document.getElementById('lootPanel');
        const lootItems = document.getElementById('lootItems');

        // Number of items based on quality
        const numItems = 1 + Math.floor(Math.random() * (quality + 1));

        const items = [];
        for (let i = 0; i < numItems; i++) {
            const slot = this.getRandomSlot();
            const rarity = this.rollRarity(slot, quality);
            const item = this.getRandomItem(slot, rarity);

            if (item) {
                items.push({ slot, rarity, ...item });
            }
        }

        if (items.length === 0) {
            lootPanel.classList.add('hidden');
            return;
        }

        lootPanel.classList.remove('hidden');
        lootItems.innerHTML = '';

        items.forEach((item, index) => {
            const lootDiv = document.createElement('div');
            lootDiv.className = 'loot-item';

            lootDiv.innerHTML = `
                <div>
                    <div class="loot-name ${item.rarity}">${item.name}</div>
                    <div class="loot-stats">+${item.power} Power | ${item.rarity.toUpperCase()}</div>
                </div>
                <button class="btn-equip" data-item-index="${index}">
                    Equip
                </button>
            `;

            // Attach event listener properly to avoid apostrophe issues
            const equipBtn = lootDiv.querySelector('.btn-equip');
            equipBtn.addEventListener('click', () => {
                game.equipItem(item.slot, index, item.name, item.rarity, item.power);
            });

            lootItems.appendChild(lootDiv);
        });

        // Store items temporarily for equipping
        this.currentLoot = items;
    },

    // Get random equipment slot
    getRandomSlot() {
        const slots = ['helmet', 'chest', 'legs', 'weapon', 'shield'];
        return slots[Math.floor(Math.random() * slots.length)];
    },

    // Roll for item rarity
    rollRarity(slot, quality) {
        const rand = Math.random();

        // Only helmets and weapons can be mythic
        if ((slot === 'helmet' || slot === 'weapon') && rand < 0.00001) {
            this.legendaryItemsFound++;
            return 'mythic';
        }

        // Quality affects chances
        const qualityBonus = quality * 0.05;

        if (rand < 0.01 + qualityBonus) return 'legendary';
        if (rand < 0.05 + qualityBonus) return 'epic';
        if (rand < 0.15 + qualityBonus) return 'rare';
        if (rand < 0.40 + qualityBonus) return 'uncommon';
        return 'common';
    },

    // Get random item from pool
    getRandomItem(slot, rarity) {
        const pool = this.equipmentPools[slot][rarity];
        if (!pool || pool.length === 0) return null;

        const item = pool[Math.floor(Math.random() * pool.length)];
        return { ...item };
    },

    // Equip an item
    equipItem(slot, index, name, rarity, power) {
        const oldItem = this.equipment[slot];

        this.equipment[slot] = {
            name: name,
            rarity: rarity,
            power: power
        };

        // Track legendary items (only increment if not already tracked)
        if ((rarity === 'legendary' || rarity === 'mythic') && oldItem.rarity !== 'legendary' && oldItem.rarity !== 'mythic') {
            this.legendaryItemsFound++;
        }

        this.updateDisplay();

        // Update the equip button for this item
        const lootItems = document.getElementById('lootItems');
        const button = lootItems.children[index].querySelector('.btn-equip');
        button.textContent = 'Equipped!';
        button.disabled = true;
        button.style.opacity = '0.5';
        button.style.cursor = 'not-allowed';

        // Show feedback
        alert(`Equipped ${name}! (${oldItem.name} replaced)`);
    },

    // Shop System
    showShop() {
        const modal = document.getElementById('shopModal');
        const shopItems = document.getElementById('shopItems');
        const shopGold = document.getElementById('shopGold');

        shopGold.textContent = this.gold;
        modal.classList.remove('hidden');

        // Generate shop items
        shopItems.innerHTML = '';
        const slots = ['helmet', 'chest', 'legs', 'weapon', 'shield'];

        slots.forEach(slot => {
            // Offer items one rarity better than current
            const currentRarity = this.equipment[slot].rarity;
            let targetRarity = 'uncommon';
            let price = 50;

            if (currentRarity === 'uncommon') { targetRarity = 'rare'; price = 150; }
            else if (currentRarity === 'rare') { targetRarity = 'epic'; price = 300; }
            else if (currentRarity === 'epic') { targetRarity = 'legendary'; price = 600; }
            else if (currentRarity === 'legendary') { targetRarity = 'mythic'; price = 1200; }

            const pool = this.equipmentPools[slot][targetRarity];
            if (pool && pool.length > 0) {
                const item = pool[Math.floor(Math.random() * pool.length)];

                const shopItem = document.createElement('div');
                shopItem.className = 'shop-item';
                shopItem.innerHTML = `
                    <div class="shop-item-name ${targetRarity}">${item.name}</div>
                    <div class="shop-item-stats">+${item.power} Power</div>
                    <div class="shop-item-stats">${targetRarity.toUpperCase()}</div>
                    <div class="shop-item-price">${price} Gold</div>
                    <button class="btn-buy" ${this.gold < price ? 'disabled' : ''} data-buy-item>
                        ${this.gold < price ? 'Not Enough Gold' : 'Buy'}
                    </button>
                `;

                // Attach event listener to avoid apostrophe issues
                const buyBtn = shopItem.querySelector('[data-buy-item]');
                if (!buyBtn.disabled) {
                    buyBtn.addEventListener('click', () => {
                        game.buyItem(slot, item.name, targetRarity, item.power, price);
                    });
                }

                shopItems.appendChild(shopItem);
            }
        });
    },

    buyItem(slot, name, rarity, power, price) {
        if (this.gold < price) return;

        this.gold -= price;
        this.equipment[slot] = { name, rarity, power };

        this.updateDisplay();
        alert(`Purchased ${name} for ${price} gold!`);

        // Refresh shop
        this.showShop();
    },

    closeShop() {
        document.getElementById('shopModal').classList.add('hidden');
    },

    // Horse System
    showHorses() {
        const modal = document.getElementById('horseModal');
        const horseItems = document.getElementById('horseItems');
        const horseGold = document.getElementById('horseGold');
        const currentHorseDisplay = document.getElementById('currentHorseDisplay');

        horseGold.textContent = this.gold;
        modal.classList.remove('hidden');

        // Show current horse if any
        if (this.horse) {
            currentHorseDisplay.textContent = `Current Mount: ${this.horse.name} (+${this.horse.bonus}% combat bonus)`;
        } else {
            currentHorseDisplay.textContent = "You are traveling on foot.";
            currentHorseDisplay.style.color = '#888';
        }

        // Generate horse options
        horseItems.innerHTML = '';

        this.horses.forEach((horse, index) => {
            const alreadyOwned = this.horse && this.horse.name === horse.name;
            const canAfford = this.gold >= horse.price;

            const horseItem = document.createElement('div');
            horseItem.className = 'shop-item';
            horseItem.style.border = alreadyOwned ? '3px solid #4dff4d' : '2px solid #8b4513';

            horseItem.innerHTML = `
                <div class="shop-item-name" style="color: ${alreadyOwned ? '#4dff4d' : '#ffd700'};">${horse.name}</div>
                <div class="shop-item-stats">${horse.description}</div>
                <div class="shop-item-stats">Combat: +${horse.bonus}%</div>
                <div class="shop-item-price">${horse.price} Gold</div>
                <button class="btn-buy" ${!canAfford || alreadyOwned ? 'disabled' : ''} data-buy-horse="${index}">
                    ${alreadyOwned ? 'Currently Owned' : !canAfford ? 'Not Enough Gold' : 'Purchase'}
                </button>
            `;

            // Attach event listener
            const buyBtn = horseItem.querySelector('[data-buy-horse]');
            if (!buyBtn.disabled) {
                buyBtn.addEventListener('click', () => {
                    game.buyHorse(index);
                });
            }

            horseItems.appendChild(horseItem);
        });
    },

    buyHorse(index) {
        const horse = this.horses[index];
        if (this.gold < horse.price) return;

        this.gold -= horse.price;
        this.horse = { ...horse };

        this.updateDisplay();
        alert(`Purchased ${horse.name}! Your mount provides a +${horse.bonus}% combat bonus.`);

        // Refresh horse display
        this.showHorses();
    },

    closeHorses() {
        document.getElementById('horseModal').classList.add('hidden');
    },

    // Letters from Home System
    readLetters() {
        const modal = document.getElementById('lettersModal');
        const lettersList = document.getElementById('lettersList');

        modal.classList.remove('hidden');

        // Generate letter options
        lettersList.innerHTML = '';

        // Always show 1-2 new letters per check
        const availableLetters = this.letters.filter((l, index) => !this.lettersRead.includes(index));
        const numNewLetters = Math.min(Math.floor(Math.random() * 2) + 1, availableLetters.length);

        if (this.lettersRead.length < this.letters.length) {
            // Show unread letters
            for (let i = 0; i < numNewLetters && this.lettersRead.length < this.letters.length; i++) {
                const randomIndex = this.letters.findIndex((l, idx) => !this.lettersRead.includes(idx));
                if (randomIndex !== -1) {
                    this.addLetterButton(lettersList, randomIndex, true);
                }
            }
        }

        // Show previously read letters
        this.lettersRead.forEach(index => {
            this.addLetterButton(lettersList, index, false);
        });

        if (this.lettersRead.length === 0 && availableLetters.length === 0) {
            lettersList.innerHTML = '<p style="text-align: center; color: #888;">No letters have arrived yet...</p>';
        }
    },

    addLetterButton(container, index, isNew) {
        const letter = this.letters[index];
        const letterBtn = document.createElement('button');
        letterBtn.className = 'choice-btn';
        letterBtn.style.background = isNew ? 'rgba(77, 255, 77, 0.2)' : 'rgba(139, 69, 19, 0.5)';
        letterBtn.style.border = isNew ? '2px solid #4dff4d' : '2px solid #8b4513';

        letterBtn.innerHTML = `
            ${isNew ? '<span style="color: #4dff4d;">✉️ NEW!</span> ' : ''}
            ${letter.title}
            ${isNew ? '<div style="font-size: 0.9em; margin-top: 5px; color: #4dff4d;">+2 Honor for reading</div>' : ''}
        `;

        letterBtn.onclick = () => this.openLetter(index, isNew);
        container.appendChild(letterBtn);
    },

    openLetter(index, isNew) {
        const letter = this.letters[index];

        // Give honor bonus for new letters
        if (isNew && !this.lettersRead.includes(index)) {
            this.honor = Math.min(100, this.honor + 2);
            this.lettersRead.push(index);
            this.updateDisplay();
        }

        // Show letter detail
        document.getElementById('lettersModal').classList.add('hidden');
        document.getElementById('letterDetailModal').classList.remove('hidden');

        document.getElementById('letterTitle').textContent = letter.title;
        document.getElementById('letterContent').textContent = letter.content;
        document.getElementById('letterContextText').textContent = letter.context;
    },

    closeLetters() {
        document.getElementById('lettersModal').classList.add('hidden');
    },

    closeLetterDetail() {
        document.getElementById('letterDetailModal').classList.add('hidden');
        // Reopen letters list
        this.readLetters();
    },

    // Desertion - Immediate Game Over
    desert() {
        const confirmation = confirm("⚠️ WARNING ⚠️\n\nDesertion from the Roman legion is punishable by DEATH.\n\nIf caught, you will be executed. Even if you escape, you will be branded a criminal, hunted by Rome, and your family will be dishonored.\n\nAre you CERTAIN you wish to abandon your oath to the legion?");

        if (!confirmation) return;

        // Immediate game over
        document.getElementById('gameScreen').classList.add('hidden');
        document.getElementById('endScreen').classList.remove('hidden');

        const endingText = `
            <h3 style="color: #dc143c; text-align: center; margin-bottom: 20px;">⚔️ DESERTER ⚔️</h3>
            <p><strong>You fled the legion under cover of darkness...</strong></p>
            <p>For three days, you ran through Gallic forests, always looking over your shoulder. Every sound made you jump. Every stranger might be a Roman scout.</p>
            <p>On the fourth morning, they found you.</p>
            <p>A patrol of your former legion. Men you once called brothers. Marcus would not meet your eyes. The centurion pronounced the sentence without emotion: "Desertion. Death by decimation."</p>
            <p>You died on your knees in a foreign land, far from home, branded a coward and traitor. Your name was stricken from all records. Your family received nothing - no pension, no land, no honor.</p>
            <p><strong style="color: #dc143c;">Your story ends here, forgotten and dishonored.</strong></p>
        `;

        document.getElementById('endingText').innerHTML = endingText;

        // Show terrible "stats"
        document.getElementById('finalLevel').textContent = this.level;
        document.getElementById('finalHonor').textContent = '0 (DESERTER)';
        document.getElementById('finalGold').textContent = this.gold;
        document.getElementById('finalKnowledge').textContent = this.knowledgeScore;
        document.getElementById('finalCorrect').textContent = this.correctAnswers;
        document.getElementById('finalTotal').textContent = this.totalQuestions;
        document.getElementById('finalLegendary').textContent = this.legendaryItemsFound;

        // Historical truth about desertion
        const historicalTruth = document.querySelector('.historical-truth');
        historicalTruth.innerHTML = `
            <h3>The Historical Truth About Desertion</h3>
            <p><strong>Desertion in the Roman Army:</strong> Desertion was considered one of the most serious crimes in the Roman military. The punishment was severe and unforgiving.</p>

            <p><strong>Punishments:</strong> Deserters faced execution if caught. The method varied - crucifixion, beheading, or being thrown to wild beasts in the arena. Sometimes, the entire unit would be "decimated" - every 10th man executed - to deter future desertions.</p>

            <p><strong>Fustuarium:</strong> Some deserters were beaten to death by their own comrades using clubs and stones. This sent a powerful message about unit loyalty.</p>

            <p><strong>Family Consequences:</strong> Desertion brought shame to the soldier's family. They would receive no pension or land grants. In some cases, family members could be enslaved or executed.</p>

            <p><strong>Why So Harsh?:</strong> Roman military success depended on absolute discipline and loyalty. A single deserter could cause panic and endanger entire legions. The Romans believed harsh punishment was necessary to maintain order in armies operating far from home for years at a time.</p>

            <p><strong>Modern Perspective:</strong> While we can understand soldiers who wanted to escape brutal conditions, desertion undermined the very structure that kept Roman armies effective. It was seen as betraying not just the army, but Rome itself and one's sacred oath.</p>
        `;
    },

    // Companion Theft Mechanic
    checkCompanionTheft() {
        // Check if any companion has very low relationship
        const distrustfulCompanions = this.companions.filter(c => c.relationship < 20);

        if (distrustfulCompanions.length > 0 && Math.random() < 0.3) {
            const thief = distrustfulCompanions[Math.floor(Math.random() * distrustfulCompanions.length)];

            // Steal a random equipped item
            const slots = ['helmet', 'chest', 'legs', 'weapon', 'shield'];
            const stealableSlots = slots.filter(slot => {
                return this.equipment[slot].rarity !== 'common'; // Don't steal common items
            });

            if (stealableSlots.length > 0) {
                const stolenSlot = stealableSlots[Math.floor(Math.random() * stealableSlots.length)];
                const stolenItem = this.equipment[stolenSlot];

                // Replace with common item
                const commonPool = this.equipmentPools[stolenSlot].common;
                const replacement = commonPool[Math.floor(Math.random() * commonPool.length)];
                this.equipment[stolenSlot] = { ...replacement, rarity: 'common' };

                // Show theft message
                alert(`⚠️ ${thief.name} has betrayed you! Due to low trust, they stole your ${stolenItem.name} and fled in the night!`);

                // Remove companion
                this.companions = this.companions.filter(c => c.name !== thief.name);

                this.updateDisplay();
                this.displayCompanions();

                return true;
            }
        }
        return false;
    },

    // Story events for education (IMPROVEMENT 3)
    storyEvents: [
        {
            round: 5,
            title: "Roman Camp Life",
            story: `After several battles, your century rests at camp. Marcus approaches you by the fire, sharing his knowledge of Roman military life.

"Did you know," Marcus begins, "that Roman soldiers aren't just warriors? We build roads, bridges, and fortifications. Every legionary learns engineering skills. Caesar once built a bridge across the Rhine River in just 10 days to show Rome's power!"

He continues: "We're paid 225 denarii per year, and we get bonuses from successful campaigns. After 25 years of service, we'll receive land or money to retire on."`,
            question: "What will you do?",
            choices: [
                {
                    text: "Ask Marcus to teach you engineering skills",
                    result: "Marcus is pleased to share his knowledge! Your bond strengthens.",
                    relationship: "Marcus",
                    change: 10,
                    honorChange: 5
                },
                {
                    text: "Share your wine ration with the group",
                    result: "Your generosity brings the group together. Everyone's spirits lift!",
                    relationship: "all",
                    change: 5,
                    honorChange: 3
                }
            ]
        },
        {
            round: 10,
            title: "Encounter with Gauls",
            story: `During a scouting mission, you encounter a small group of Gallic civilians. Gaius reminds you of an important fact:

"Not all Gauls are our enemies," he says. "Many tribes have allied with Rome. The Aedui tribe has been our friend for years. Caesar's war is against those who resist Roman authority, like Vercingetorix and his coalition."

He adds: "The Gauls are skilled warriors and craftsmen. Their metalwork is excellent - many of our best swords come from Gallic forges. After the conquest, Gaul will become a prosperous Roman province."`,
            question: "How do you treat the civilians?",
            choices: [
                {
                    text: "Treat them with respect and offer safe passage",
                    result: "Gaius approves of your honor. 'This is how Rome wins hearts,' he says.",
                    relationship: "Gaius",
                    change: 15,
                    honorChange: 10
                },
                {
                    text: "Question them about enemy movements, then let them go",
                    result: "A pragmatic choice. You gather useful intelligence.",
                    relationship: "Gaius",
                    change: 5,
                    honorChange: 2
                }
            ]
        },
        {
            round: 15,
            title: "Discussion of Roman Gods",
            story: `As the campaign nears its end, Lucius and Titus discuss religion around the evening fire.

Lucius explains: "Before each battle, we make sacrifices to Mars, the god of war and father of Romulus. We also honor Jupiter, king of the gods. The legion's aquila - our golden eagle standard - is sacred. Losing it would bring terrible disgrace!"

Titus adds: "The Gauls worship their own gods in sacred groves, led by druids. Caesar has been destroying these groves because druids unite the tribes against us. Religion and politics are deeply connected in both cultures."`,
            question: "What's your response?",
            choices: [
                {
                    text: "Pray to Mars for continued victory",
                    result: "The men are inspired by your piety. Traditional Roman values matter.",
                    relationship: "Lucius",
                    change: 10,
                    honorChange: 5
                },
                {
                    text: "Discuss the importance of respecting all beliefs",
                    result: "Titus appreciates your philosophical approach to a complex issue.",
                    relationship: "Titus",
                    change: 12,
                    honorChange: 7
                }
            ]
        }
    ],

    // Check for story events (IMPROVEMENT 3)
    checkStoryEvent() {
        const event = this.storyEvents.find(e => e.round === this.currentRound);
        if (event) {
            this.showStoryEvent(event);
            return true;
        }
        return false;
    },

    // Show story event (IMPROVEMENT 3)
    showStoryEvent(event) {
        document.getElementById('battleTitle').textContent = event.title;
        document.getElementById('battleLocation').textContent = "Camp Event";

        const storyText = `<p>${event.story.replace(/\n\n/g, '</p><p>')}</p>`;
        document.getElementById('storyText').innerHTML = storyText;

        // Hide other panels
        document.getElementById('questionPanel').classList.add('hidden');
        document.getElementById('resultPanel').classList.add('hidden');

        // Show choices
        const choicesPanel = document.getElementById('choicesPanel');
        const choicesDiv = document.getElementById('choices');
        choicesPanel.classList.remove('hidden');
        choicesDiv.innerHTML = '';

        event.choices.forEach((choice, index) => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = choice.text;
            btn.onclick = () => this.resolveStoryChoice(choice);
            choicesDiv.appendChild(btn);
        });
    },

    // Resolve story choice (IMPROVEMENT 3)
    resolveStoryChoice(choice) {
        // Update relationships
        if (choice.relationship === 'all') {
            this.companions.forEach(c => {
                c.relationship = Math.min(100, c.relationship + choice.change);
            });
        } else {
            const companion = this.companions.find(c => c.name === choice.relationship);
            if (companion) {
                companion.relationship = Math.min(100, companion.relationship + choice.change);
            }
        }

        // Update honor
        this.honor = Math.min(100, this.honor + choice.honorChange);

        // Show result
        document.getElementById('choicesPanel').classList.add('hidden');
        document.getElementById('resultPanel').classList.remove('hidden');

        let resultText = `<p><strong style="color: #ffd700;">${choice.result}</strong></p>`;
        resultText += `<p>Honor +${choice.honorChange}</p>`;

        document.getElementById('resultText').innerHTML = resultText;

        this.updateDisplay();
        this.displayCompanions();
    },

    // Next round
    nextRound() {
        // Check if player is dead
        if (this.health <= 0) {
            this.endGame(false);
            return;
        }

        this.currentRound++;

        // Check if campaign is complete
        if (this.currentRound > this.maxRounds) {
            this.endGame(true);
            return;
        }

        // Check for companion theft before continuing
        if (this.checkCompanionTheft()) {
            // Theft occurred, slight delay before next round
            setTimeout(() => {
                this.continueToNextRound();
            }, 1000);
            return;
        }

        this.continueToNextRound();
    },

    continueToNextRound() {
        // Heal a bit between battles
        this.health = Math.min(this.maxHealth, this.health + 10);

        this.updateDisplay();

        // Check for story event first (IMPROVEMENT 3)
        if (this.checkStoryEvent()) {
            return; // Story event will handle progression
        }

        this.startBattle();
    },

    // End game
    endGame(victory) {
        document.getElementById('gameScreen').classList.add('hidden');
        document.getElementById('endScreen').classList.remove('hidden');

        let endingText = '';

        if (victory) {
            endingText = `
                <p><strong>Victory in Gaul!</strong></p>
                <p>After ${this.maxRounds} brutal battles across the Gallic territories, you have emerged victorious! Your legion has conquered the land for Rome, and your name will be remembered in the annals of history.</p>
                <p>Julius Caesar himself commends your bravery, knowledge, and leadership. You return to Rome a hero, laden with spoils and glory!</p>
            `;
        } else {
            endingText = `
                <p><strong>Fallen in Battle</strong></p>
                <p>You fought bravely for Rome, but the wilds of Gaul have claimed you. Your comrades will carry your memory back to the Eternal City.</p>
                <p>Though your campaign ended after ${this.currentRound - 1} battles, your sacrifice will not be forgotten. Roma Invicta!</p>
            `;
        }

        document.getElementById('endingText').innerHTML = endingText;

        // Final stats
        document.getElementById('finalLevel').textContent = this.level;
        document.getElementById('finalHonor').textContent = this.honor;
        document.getElementById('finalGold').textContent = this.gold;
        document.getElementById('finalKnowledge').textContent = this.knowledgeScore;
        document.getElementById('finalCorrect').textContent = this.correctAnswers;
        document.getElementById('finalTotal').textContent = this.totalQuestions;
        document.getElementById('finalLegendary').textContent = this.legendaryItemsFound;

        // Final equipment
        const finalEquip = document.getElementById('finalEquipment');
        finalEquip.innerHTML = '';

        for (let slot in this.equipment) {
            const item = this.equipment[slot];
            const itemDiv = document.createElement('div');
            itemDiv.className = 'final-equipment-item';
            itemDiv.innerHTML = `
                <span>${slot.charAt(0).toUpperCase() + slot.slice(1)}:</span>
                <span class="${item.rarity}">${item.name} (+${item.power})</span>
            `;
            finalEquip.appendChild(itemDiv);
        }
    }
};

// Start when page loads
window.addEventListener('load', () => {
    console.log('Legions of Gaul loaded. Ready to conquer!');
});
