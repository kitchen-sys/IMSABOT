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

    // Question Bank (30 questions about Rome)
    questionBank: [
        {
            question: "Who was the first Emperor of Rome?",
            answers: ["Julius Caesar", "Augustus"],
            correct: 1
        },
        {
            question: "What year was Rome traditionally founded?",
            answers: ["753 BCE", "509 BCE"],
            correct: 0
        },
        {
            question: "The Roman military formation was called a:",
            answers: ["Phalanx", "Legion"],
            correct: 1
        },
        {
            question: "Which brothers allegedly founded Rome?",
            answers: ["Romulus and Remus", "Castor and Pollux"],
            correct: 0
        },
        {
            question: "The Roman Senate building was called the:",
            answers: ["Curia", "Forum"],
            correct: 0
        },
        {
            question: "How many men were in a full Roman legion?",
            answers: ["About 5,000", "About 10,000"],
            correct: 0
        },
        {
            question: "The Punic Wars were fought against:",
            answers: ["Carthage", "Greece"],
            correct: 0
        },
        {
            question: "A Roman soldier's standard sword was called a:",
            answers: ["Gladius", "Spatha"],
            correct: 0
        },
        {
            question: "The Roman shield was called a:",
            answers: ["Scutum", "Aspis"],
            correct: 0
        },
        {
            question: "Julius Caesar crossed which river to start the civil war?",
            answers: ["The Rubicon", "The Tiber"],
            correct: 0
        },
        {
            question: "How long did a Roman soldier serve in the legions?",
            answers: ["25 years", "10 years"],
            correct: 0
        },
        {
            question: "The Roman god of war was:",
            answers: ["Mars", "Jupiter"],
            correct: 0
        },
        {
            question: "The Colosseum was built by which dynasty?",
            answers: ["Flavian", "Julio-Claudian"],
            correct: 0
        },
        {
            question: "Hannibal crossed the Alps with:",
            answers: ["Elephants", "Cavalry only"],
            correct: 0
        },
        {
            question: "The Roman Republic ended in:",
            answers: ["27 BCE", "44 BCE"],
            correct: 0
        },
        {
            question: "The chief Roman god was:",
            answers: ["Jupiter", "Mars"],
            correct: 0
        },
        {
            question: "Roman heavy infantry armor was called:",
            answers: ["Lorica Segmentata", "Lorica Hamata"],
            correct: 0
        },
        {
            question: "The Gallic Wars lasted:",
            answers: ["8 years (58-50 BCE)", "5 years"],
            correct: 0
        },
        {
            question: "Caesar was assassinated on:",
            answers: ["The Ides of March (March 15)", "The Kalends of May"],
            correct: 0
        },
        {
            question: "A Roman military unit of 80 men was called a:",
            answers: ["Century", "Cohort"],
            correct: 0
        },
        {
            question: "The Roman goddess of wisdom was:",
            answers: ["Minerva", "Venus"],
            correct: 0
        },
        {
            question: "The Praetorian Guard protected:",
            answers: ["The Emperor", "The Senate"],
            correct: 0
        },
        {
            question: "Roman soldiers built this defensive structure in Britain:",
            answers: ["Hadrian's Wall", "Antonine Wall"],
            correct: 0
        },
        {
            question: "The Roman messenger god was:",
            answers: ["Mercury", "Apollo"],
            correct: 0
        },
        {
            question: "Spartacus led a revolt of:",
            answers: ["Gladiators and slaves", "Gauls"],
            correct: 0
        },
        {
            question: "The Battle of Alesia was won by:",
            answers: ["Julius Caesar", "Vercingetorix"],
            correct: 0
        },
        {
            question: "A Roman centurion commanded:",
            answers: ["About 80 men", "About 500 men"],
            correct: 0
        },
        {
            question: "The Roman standard was called a:",
            answers: ["Aquila (Eagle)", "Vexillum"],
            correct: 0
        },
        {
            question: "The greatest enemy of Rome during the Gallic Wars was:",
            answers: ["Vercingetorix", "Ambiorix"],
            correct: 0
        },
        {
            question: "Roman roads were famous for being:",
            answers: ["Straight and durable", "Wide but poorly maintained"],
            correct: 0
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

    // Update all displays
    updateDisplay() {
        document.getElementById('round').textContent = this.currentRound;
        document.getElementById('health').textContent = this.health;
        document.getElementById('honor').textContent = this.honor;
        document.getElementById('level').textContent = this.level;
        document.getElementById('gold').textContent = this.gold;

        // Update stat bars
        const healthPercent = (this.health / this.maxHealth) * 100;
        document.getElementById('healthFill').style.width = healthPercent + '%';

        const honorPercent = this.honor;
        document.getElementById('honorFill').style.width = honorPercent + '%';

        // Update equipment display
        for (let slot in this.equipment) {
            const item = this.equipment[slot];
            const element = document.getElementById(slot);
            element.textContent = item.name;
            element.className = 'equipment-item ' + item.rarity;
        }
    },

    // Display companions
    displayCompanions() {
        const grid = document.getElementById('companionsGrid');
        grid.innerHTML = '';

        this.companions.forEach(companion => {
            const card = document.createElement('div');
            card.className = 'companion-card';
            card.innerHTML = `
                <div class="companion-name">${companion.name}</div>
                <div class="companion-relationship">Relationship: ${companion.relationship}/100</div>
                <div class="relationship-bar">
                    <div class="relationship-fill" style="width: ${companion.relationship}%"></div>
                </div>
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

    // Generate random questions for battle
    generateQuestions() {
        // Select 3-5 random questions based on round difficulty
        const numQuestions = Math.min(3 + Math.floor(this.currentRound / 5), 5);

        // Shuffle question bank
        const shuffled = [...this.questionBank].sort(() => Math.random() - 0.5);
        this.currentQuestions = shuffled.slice(0, numQuestions);
        this.playerAnswers = new Array(numQuestions).fill(-1);

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

    // Submit answers and resolve battle
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
            }
        });

        this.totalQuestions += this.currentQuestions.length;
        this.correctAnswers += correct;

        const scorePercent = (correct / this.currentQuestions.length) * 100;

        // Hide question panel, show result panel
        document.getElementById('questionPanel').classList.add('hidden');
        document.getElementById('resultPanel').classList.remove('hidden');

        // Resolve battle based on score
        this.resolveBattle(correct, this.currentQuestions.length, scorePercent);
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
                <button class="btn-equip" onclick="game.equipItem('${item.slot}', ${index}, '${item.name}', '${item.rarity}', ${item.power})">
                    Equip
                </button>
            `;

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

        // Track legendary items
        if (rarity === 'legendary' || rarity === 'mythic') {
            this.legendaryItemsFound++;
        }

        this.updateDisplay();

        // Remove the loot item button
        const lootItems = document.getElementById('lootItems');
        lootItems.children[index].querySelector('.btn-equip').textContent = 'Equipped!';
        lootItems.children[index].querySelector('.btn-equip').disabled = true;

        alert(`Equipped ${name}! (${oldItem.name} replaced)`);
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

        // Heal a bit between battles
        this.health = Math.min(this.maxHealth, this.health + 10);

        this.updateDisplay();
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
