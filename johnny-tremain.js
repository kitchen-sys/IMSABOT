// Johnny Tremain: A Revolutionary Journey - Game Engine

class JohnnyTremainGame {
    constructor() {
        this.state = {
            round: 0,
            pride: 80,
            humility: 20,
            patriotism: 30,
            skills: 85,
            relationships: {
                'Mr. Lapham': 70,
                'Cilla Lapham': 65,
                'Dove': 20,
                'Rab Silsbee': 0,
                'Paul Revere': 0,
                'Sam Adams': 0,
                'Dr. Warren': 0
            },
            handInjured: false,
            currentJob: 'silversmith apprentice',
            majorEvents: []
        };

        this.chapters = [
            {
                title: "The Silver Shop",
                year: "July 1773",
                story: `You are Johnny Tremain, the most talented apprentice in Mr. Lapham's silver shop on Hancock's Wharf. Your hands can shape silver like few others in Boston. Mr. John Hancock himself has commissioned a sugar basin, and you're determined to create a masterpiece.\n\nBut your pride often gets the better of you. The other apprentices—Dove and Dusty—resent your arrogance. Even kind Cilla Lapham, the master's granddaughter, sometimes finds you insufferable.\n\nToday, Dove made another mistake, and you've berated him harshly in front of everyone.`,
                choices: [
                    {
                        text: "Apologize to Dove and offer to teach him the proper technique",
                        effects: { pride: -10, humility: +15, relationships: { 'Dove': +20 } },
                        result: "You swallow your pride and apologize. Dove is surprised but grateful. You spend time teaching him properly. Mr. Lapham nods approvingly. Perhaps there's strength in kindness."
                    },
                    {
                        text: "Stand by your harsh words—he needs to learn from his mistakes",
                        effects: { pride: +5, humility: -5, relationships: { 'Dove': -10, 'Mr. Lapham': -5 } },
                        result: "You maintain your superior attitude. The other apprentices exchange dark looks. Mr. Lapham sighs, disappointed. Your skill is undeniable, but your character is questionable."
                    },
                    {
                        text: "Ignore the situation and focus on perfecting the sugar basin",
                        effects: { skills: +5, relationships: { 'Dove': -5 } },
                        result: "You bury yourself in your work. The basin takes beautiful shape under your skilled hands. But the tension in the shop remains thick."
                    }
                ]
            },
            {
                title: "The Burned Hand",
                year: "Sunday, July 1773",
                story: `It's the Sabbath, but Mr. Hancock needs his sugar basin completed. You work secretly in the shop. The crucible must be heated perfectly to pour the molten silver for the basin's handle.\n\nBut something is wrong. The crucible has a crack—someone has sabotaged it! As you pour the silver, the crucible breaks. Molten silver splashes across your right hand.\n\nThe pain is unbearable. Your hand—your precious, skilled hand—is horribly burned. Dr. Warren does what he can, but when the bandages finally come off weeks later, the truth is devastating: your thumb has fused to your palm. You'll never work silver again.`,
                choices: [
                    {
                        text: "Rage at the injustice and blame Dove for the cracked crucible",
                        effects: { pride: +10, humility: -10, relationships: { 'Dove': -30, 'Cilla Lapham': -10 } },
                        result: "Your anger consumes you. You're certain Dove cracked the crucible on purpose. You lash out at everyone. Even Cilla, who brings you soup and sits with you, becomes a target of your bitterness."
                    },
                    {
                        text: "Accept what happened and try to find meaning in this tragedy",
                        effects: { pride: -15, humility: +20, patriotism: +5 },
                        result: "Through the haze of pain and loss, you begin to see things differently. Your pride is shattered along with your hand. Perhaps this tragedy has a purpose you don't yet understand."
                    },
                    {
                        text: "Withdraw into yourself, speaking to no one about your fears",
                        effects: { pride: -5, humility: +5, relationships: { 'Cilla Lapham': -5, 'Mr. Lapham': -5 } },
                        result: "You build walls around your heart. The pain isn't just physical—you're mourning the death of who you were. The others try to reach you, but you won't let them in."
                    }
                ]
            },
            {
                title: "Cast Out",
                year: "August 1773",
                story: `You can no longer work as a silversmith. Mr. Lapham's household cannot support an apprentice who cannot work. You must find a new trade, but your crippled hand makes you undesirable to every master craftsman.\n\nYou try merchant Merchant Jonathan Lyte, claiming distant kinship and showing him a silver cup bearing the Lyte family crest—a treasure your mother left you. But Lyte is cruel and powerful. He accuses YOU of stealing the cup from him and has you arrested!\n\nOnly the intervention of Josiah Quincy, a patriot lawyer, saves you from prison. But you're now homeless, jobless, and your pride lies in ashes.`,
                choices: [
                    {
                        text: "Vow revenge against Merchant Lyte for his betrayal",
                        effects: { pride: +5, patriotism: +5, humility: -5 },
                        result: "Anger burns in you. Lyte will pay for his lies and cruelty. This vow gives you purpose, but it's a dark and bitter fuel that drives you forward."
                    },
                    {
                        text: "Let go of the past and focus on survival day by day",
                        effects: { humility: +15, pride: -10, skills: -5 },
                        result: "You release your claim to the Lyte family. Your old life is gone—the silver shop, the dreams, the pride. You're starting from nothing, and perhaps that's where you need to be."
                    },
                    {
                        text: "Seek out Cilla and ask for help, swallowing your pride",
                        effects: { humility: +20, pride: -15, relationships: { 'Cilla Lapham': +20 } },
                        result: "It's the hardest thing you've ever done—admitting you need help. Cilla meets you secretly, bringing food and hope. Her kindness breaks something open inside you."
                    }
                ]
            },
            {
                title: "The Boston Observer",
                year: "September 1773",
                story: `In your wandering, you meet Rab Silsbee, a young printer's apprentice for the Boston Observer newspaper. Rab is everything you're not—calm, confident, mature beyond his years. He doesn't pity your hand or judge your past.\n\nRab gets you a job as a delivery boy for the newspaper. It's humble work, far below what you once were, but it comes with something unexpected: a window into the revolutionary movement brewing in Boston.\n\nThe Observer prints articles critical of British rule. Through this work, you begin to see a world larger than your own misfortune.`,
                choices: [
                    {
                        text: "Embrace your new role and learn everything you can from Rab",
                        effects: { humility: +15, patriotism: +15, skills: +10, relationships: { 'Rab Silsbee': +30 } },
                        result: "Rab becomes more than a friend—he's a mentor and brother. You watch how he carries himself with quiet dignity. You deliver newspapers and absorb ideas about liberty and rights. A new Johnny begins to emerge."
                    },
                    {
                        text: "Do the work but remain focused on your personal grievances",
                        effects: { pride: +5, patriotism: +5, relationships: { 'Rab Silsbee': +10 } },
                        result: "You deliver papers mechanically, still caught in the web of your own suffering. The revolutionary talk is just noise. Your real concern is Merchant Lyte and your ruined hand."
                    },
                    {
                        text: "Use your position to spy and gather information about the city",
                        effects: { skills: +15, patriotism: +10, relationships: { 'Rab Silsbee': +20 } },
                        result: "As a delivery boy, you can go anywhere in Boston without suspicion. You become Rab's eyes and ears, learning the layout of the city, who's who, and what's happening. You're becoming useful again."
                    }
                ]
            },
            {
                title: "Sons of Liberty",
                year: "November 1773",
                story: `Through Rab and the Observer, you're introduced to the inner circle of Boston's patriots. You meet them in secret: Paul Revere the silversmith (once you might have competed with him), Samuel Adams the firebrand, Dr. Joseph Warren, and James Otis.\n\nThey're planning resistance to the Tea Act. British tea ships are coming to Boston Harbor, and the Sons of Liberty will not let that tea be unloaded and taxed. They're recruiting young men for direct action.\n\nYou're invited to join them. For the first time since your accident, you're being asked to be part of something important.`,
                choices: [
                    {
                        text: "Join enthusiastically—embrace the cause of liberty completely",
                        effects: { patriotism: +25, humility: +10, relationships: { 'Rab Silsbee': +15, 'Paul Revere': +20, 'Sam Adams': +20 } },
                        result: "You pledge yourself to the cause. These men see past your crippled hand to your courage and intelligence. You're not just a delivery boy—you're a Son of Liberty. Purpose floods your soul."
                    },
                    {
                        text: "Join cautiously—you're interested but still uncertain",
                        effects: { patriotism: +10, skills: +5, relationships: { 'Rab Silsbee': +10, 'Paul Revere': +10 } },
                        result: "You agree to help but hold something back. The ideas are compelling, but you're not ready to risk everything. You'll participate, but carefully."
                    },
                    {
                        text: "Ask to think about it—this could be dangerous",
                        effects: { pride: -5, patriotism: +5 },
                        result: "You're honest about your hesitation. Rab doesn't pressure you. 'When you're ready,' he says. You're grateful for his understanding, but part of you wonders if you're being a coward."
                    }
                ]
            },
            {
                title: "The Boston Tea Party",
                year: "December 16, 1773",
                story: `The moment has come. Three British ships laden with tea sit in Boston Harbor. Governor Hutchinson refuses to send them back. The Sons of Liberty have made their decision: the tea will not be landed and taxed.\n\nTonight, disguised as Mohawk Indians, dozens of patriots will board those ships and dump every chest of tea into the harbor. Rab is going. He looks at you—will you come?\n\nThis is rebellion. This is the point of no return. Once you do this, you're a revolutionary, a traitor to the Crown. But you're also standing up for something bigger than yourself.`,
                choices: [
                    {
                        text: "Join the Tea Party—dump the tea into Boston Harbor!",
                        effects: { patriotism: +30, pride: -10, humility: +10, relationships: { 'Rab Silsbee': +20, 'Sam Adams': +25 } },
                        result: "You blacken your face and board the ship Dartmouth. Your crippled hand doesn't stop you from swinging the axe and dumping chest after chest of tea. Three hours later, Boston Harbor is a teapot. You've helped make history. You'll never forget this night."
                    },
                    {
                        text: "Stand watch on the wharf—support the action without direct participation",
                        effects: { patriotism: +15, skills: +10, relationships: { 'Rab Silsbee': +10 } },
                        result: "You join the watchers who ensure no one interferes. It's a vital role, and you perform it well. You're part of it, even if you didn't board the ships. When it's done, Rab grips your shoulder in solidarity."
                    },
                    {
                        text: "Stay home—this feels too dangerous and reckless",
                        effects: { patriotism: -10, pride: +5, relationships: { 'Rab Silsbee': -15 } },
                        result: "You don't go. The next morning, you hear the news—they did it! All the tea is destroyed. Rab doesn't shame you, but there's a distance between you now. You chose safety over principle."
                    }
                ]
            },
            {
                title: "British Occupation",
                year: "Summer 1774",
                story: `Britain's response to the Tea Party is swift and brutal. The Intolerable Acts close Boston Harbor. British troops flood the city—redcoats everywhere. General Gage is now military governor. Boston is under occupation.\n\nFood grows scarce. Business dies. The city that was once prosperous now suffers. But the patriot movement doesn't break—it hardens.\n\nYour newspaper delivery routes take you past British encampments. You see everything: their numbers, their movements, their preparations. The Sons of Liberty need this intelligence. But spying is even more dangerous than dumping tea.`,
                choices: [
                    {
                        text: "Actively spy on British forces and report everything to the patriots",
                        effects: { patriotism: +20, skills: +15, relationships: { 'Rab Silsbee': +15, 'Dr. Warren': +25, 'Paul Revere': +15 } },
                        result: "You become one of the most valuable intelligence sources the patriots have. Your innocent appearance as a delivery boy is perfect cover. Dr. Warren relies on your reports. You're fighting the war before it even begins."
                    },
                    {
                        text: "Report what you observe casually, but don't take extra risks",
                        effects: { patriotism: +10, skills: +5, relationships: { 'Dr. Warren': +10 } },
                        result: "You pass along information you naturally gather in your routes, but you don't go out of your way to spy. It's helpful, but you're not risking everything. The patriots appreciate what you provide."
                    },
                    {
                        text: "Keep your head down—focus on survival in occupied Boston",
                        effects: { pride: +5, patriotism: -15, relationships: { 'Rab Silsbee': -10, 'Sam Adams': -15 } },
                        result: "The occupation terrifies you. You do your job but avoid anything that might draw British attention. Some patriots give you disappointed looks. Rab says nothing, but his silence speaks volumes."
                    }
                ]
            },
            {
                title: "Pumpkin's Choice",
                year: "Winter 1774-1775",
                story: `You meet a young British soldier named Pumpkin—simple, kind, and homesick. He's nothing like the threatening redcoats who patrol with bayonets. He just wants to go home to his farm.\n\nPumpkin asks for your help to desert. He'll give you his musket and uniform if you help him escape Boston. The patriots desperately need weapons and intelligence about British uniforms and equipment.\n\nBut if you're caught helping a deserter, you could be hanged. And Pumpkin himself might be caught and executed. What is one life weighed against the cause?`,
                choices: [
                    {
                        text: "Help Pumpkin escape—everyone deserves freedom",
                        effects: { humility: +20, patriotism: +15, skills: +10, relationships: { 'Dr. Warren': +15 } },
                        result: "You arrange Pumpkin's escape. He gives you his musket and uniform as promised, then flees into the night. You hope he makes it home. The musket goes to the patriots. You've learned that liberty isn't just about politics—it's about human dignity."
                    },
                    {
                        text: "Take the musket but refuse to help him escape personally",
                        effects: { patriotism: +10, pride: +5, humility: -10 },
                        result: "You make the transaction—musket and uniform for information on escape routes—but you won't personally risk helping him flee. It's a compromise. Pumpkin looks disappointed but understands. You get what the cause needs."
                    },
                    {
                        text: "Refuse entirely—it's too dangerous and he might be a spy",
                        effects: { pride: +10, patriotism: -5, skills: -5 },
                        result: "You turn Pumpkin away. He could be a British trap. You can't risk it. Later, you hear a soldier named Pumpkin was executed for desertion. The news haunts you. Was he real? Did you doom him?"
                    }
                ]
            },
            {
                title: "War Preparations",
                year: "March 1775",
                story: `Everyone knows war is coming. The only question is when and where. The British are preparing to seize colonial military supplies. The patriots are training minutemen and stockpiling weapons.\n\nDr. Warren organizes a spy network. Paul Revere prepares for a midnight ride to warn the countryside when the British march. Rab has joined the Lexington militia.\n\nYou must choose your role in the coming conflict. Your crippled hand means you can't shoot a musket properly, but there are other ways to serve. What kind of patriot will you be?`,
                choices: [
                    {
                        text: "Join the intelligence network—be Dr. Warren's messenger",
                        effects: { patriotism: +25, skills: +20, relationships: { 'Dr. Warren': +30, 'Paul Revere': +20 } },
                        result: "Dr. Warren clasps your shoulder. 'I need people I can trust with my life,' he says. You become a crucial link in the communication network that will coordinate the colonial response. Your speed and reliability make you invaluable."
                    },
                    {
                        text: "Learn to shoot with your left hand—join the militia",
                        effects: { skills: +25, patriotism: +20, pride: -10, humility: +15, relationships: { 'Rab Silsbee': +25 } },
                        result: "It's incredibly difficult, but you train relentlessly. Rab helps you. Your left hand will never be as skilled as your right once was, but you become competent. You're determined not to be useless when the fighting starts."
                    },
                    {
                        text: "Focus on your newspaper work—information is its own weapon",
                        effects: { patriotism: +10, skills: +10 },
                        result: "You convince yourself that printing and distributing patriot newspapers is vital work. It is—but part of you knows you're avoiding the greater risk. The others don't criticize, but you feel the weight of your choice."
                    }
                ]
            },
            {
                title: "Lexington and Concord",
                year: "April 19, 1775",
                story: `The moment arrives on an April night. British troops are marching to seize military supplies in Concord. Paul Revere rides to warn the countryside. Dr. Warren sends you with urgent messages.\n\nBy dawn, you reach Lexington Green. Seventy-seven minutemen face 700 British regulars. You see Rab among them. Your heart stops.\n\n'Disperse, ye rebels!' the British commander shouts. Then—a shot. No one knows who fired first. Then volley after volley. When the smoke clears, eight colonists lie dead.\n\nRab is wounded. As Dr. Warren works on him, Rab looks at you with clear eyes. 'We did it, Johnny,' he whispers. 'We stood up.' This is the boy who saved you, who taught you what it means to be a man. He slips away as you hold his hand.\n\nThe Revolutionary War has begun. And you—once a proud silversmith's apprentice—have become something you never imagined: a patriot who understands that some causes are worth every sacrifice.`,
                choices: [
                    {
                        text: "Vow to fight in Rab's memory—take up arms for liberty",
                        effects: { patriotism: +30, humility: +20, pride: -15 },
                        result: "Through tears, you make a sacred promise to Rab. You will fight. Your hand may be crippled, but your spirit is not. Dr. Warren sees the steel in your eyes and nods. The Revolution will need people like you—people who understand what they're fighting for."
                    },
                    {
                        text: "Dedicate yourself to the intelligence network—win the war through information",
                        effects: { patriotism: +25, skills: +20 },
                        result: "Rab's death crystallizes your purpose. You can serve best by doing what you do well—gathering and delivering intelligence. Wars are won by bullets, but also by information. You'll be Dr. Warren's shadow, and Rab would approve."
                    },
                    {
                        text: "Let Dr. Warren examine your hand—perhaps it can be healed",
                        effects: { humility: +25, skills: +15, pride: -20 },
                        result: "In your grief, Dr. Warren examines your hand closely. 'Johnny,' he says gently, 'I think I can help this.' Hope—terrifying and wonderful—blooms in your chest. But you know now that whether your hand heals or not, you've already been transformed by your journey from pride to purpose."
                    }
                ]
            }
        ];
    }

    startGame() {
        document.getElementById('startScreen').classList.add('hidden');
        document.getElementById('gameScreen').classList.remove('hidden');
        this.state.round = 0;
        this.loadChapter();
    }

    loadChapter() {
        const chapter = this.chapters[this.state.round];

        document.getElementById('round').textContent = this.state.round + 1;
        document.getElementById('chapterTitle').textContent = chapter.title;
        document.getElementById('chapterYear').textContent = chapter.year;
        document.getElementById('storyText').textContent = chapter.story;

        // Update stats display
        this.updateStatsDisplay();
        this.updateRelationshipsDisplay();

        // Show choices
        const choicesDiv = document.getElementById('choices');
        choicesDiv.innerHTML = '';

        chapter.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'choice-btn';
            button.textContent = choice.text;
            button.onclick = () => this.makeChoice(index);
            choicesDiv.appendChild(button);
        });

        // Hide result panel and show choices
        document.getElementById('resultPanel').classList.add('hidden');
        document.getElementById('choicesPanel').classList.remove('hidden');
    }

    makeChoice(choiceIndex) {
        const chapter = this.chapters[this.state.round];
        const choice = chapter.choices[choiceIndex];

        // Apply effects
        if (choice.effects.pride) this.state.pride = Math.max(0, Math.min(100, this.state.pride + choice.effects.pride));
        if (choice.effects.humility) this.state.humility = Math.max(0, Math.min(100, this.state.humility + choice.effects.humility));
        if (choice.effects.patriotism) this.state.patriotism = Math.max(0, Math.min(100, this.state.patriotism + choice.effects.patriotism));
        if (choice.effects.skills) this.state.skills = Math.max(0, Math.min(100, this.state.skills + choice.effects.skills));

        // Update relationships
        if (choice.effects.relationships) {
            for (let person in choice.effects.relationships) {
                if (this.state.relationships[person] !== undefined) {
                    this.state.relationships[person] = Math.max(0, Math.min(100,
                        this.state.relationships[person] + choice.effects.relationships[person]));
                }
            }
        }

        // Special effects for certain chapters
        if (this.state.round === 1) {
            this.state.handInjured = true;
            this.state.currentJob = 'none';
        } else if (this.state.round === 3) {
            this.state.currentJob = 'delivery boy';
        }

        // Update display
        this.updateStatsDisplay();
        this.updateRelationshipsDisplay();

        // Show result
        document.getElementById('resultText').textContent = choice.result;
        document.getElementById('choicesPanel').classList.add('hidden');
        document.getElementById('resultPanel').classList.remove('hidden');

        // Add to journal
        this.addJournalEntry(chapter.title + ': ' + choice.text);
    }

    nextChapter() {
        this.state.round++;

        if (this.state.round >= this.chapters.length) {
            this.endGame();
        } else {
            this.loadChapter();
        }
    }

    updateStatsDisplay() {
        document.getElementById('pride').textContent = this.state.pride;
        document.getElementById('humility').textContent = this.state.humility;
        document.getElementById('patriotism').textContent = this.state.patriotism;
        document.getElementById('skills').textContent = this.state.skills;

        document.getElementById('prideFill').style.width = this.state.pride + '%';
        document.getElementById('humilityFill').style.width = this.state.humility + '%';
        document.getElementById('patriotismFill').style.width = this.state.patriotism + '%';
        document.getElementById('skillsFill').style.width = this.state.skills + '%';
    }

    updateRelationshipsDisplay() {
        const relDiv = document.getElementById('relationships');
        relDiv.innerHTML = '';

        // Show only relationships that have been established (non-zero)
        for (let person in this.state.relationships) {
            const value = this.state.relationships[person];

            // Skip relationships that haven't been introduced yet (value is 0)
            if (value === 0 && this.state.round < 3 && (person === 'Rab Silsbee' || person === 'Paul Revere' || person === 'Sam Adams' || person === 'Dr. Warren')) {
                continue;
            }

            const item = document.createElement('div');
            item.className = 'relationship-item';

            const name = document.createElement('span');
            name.className = 'person-name';
            name.textContent = person + ':';

            const valSpan = document.createElement('span');
            valSpan.className = 'relationship-value';

            if (value >= 75) valSpan.textContent = 'Close';
            else if (value >= 50) valSpan.textContent = 'Good';
            else if (value >= 25) valSpan.textContent = 'Neutral';
            else if (value >= 0) valSpan.textContent = 'Poor';
            else valSpan.textContent = 'Hostile';

            item.appendChild(name);
            item.appendChild(valSpan);
            relDiv.appendChild(item);
        }
    }

    addJournalEntry(text) {
        const journal = document.getElementById('journalEntries');
        const entry = document.createElement('div');
        entry.className = 'journal-entry';
        entry.textContent = `Chapter ${this.state.round + 1}: ${text}`;
        journal.insertBefore(entry, journal.firstChild);
    }

    endGame() {
        document.getElementById('gameScreen').classList.add('hidden');
        document.getElementById('endScreen').classList.remove('hidden');

        document.getElementById('finalPride').textContent = this.state.pride;
        document.getElementById('finalHumility').textContent = this.state.humility;
        document.getElementById('finalPatriotism').textContent = this.state.patriotism;
        document.getElementById('finalSkills').textContent = this.state.skills;

        // Character assessment
        let assessment = this.getCharacterAssessment();
        document.getElementById('characterAssessment').innerHTML = assessment;

        // End message
        let endMsg = `<p>The shot heard 'round the world has been fired. Rab Silsbee, your friend and mentor, has given his life for liberty.</p>`;
        endMsg += `<p>You began as a prideful apprentice silversmith. Through suffering, loss, and transformation, you've become something far greater—a young man who understands what truly matters.</p>`;
        endMsg += `<p>Your journey mirrors that of a young nation finding its identity through struggle. The real revolution wasn't just against Britain—it was the revolution within your own heart.</p>`;

        document.getElementById('endMessage').innerHTML = endMsg;
    }

    getCharacterAssessment() {
        let assessment = '<h4>Your Character Development:</h4>';

        if (this.state.humility > this.state.pride) {
            assessment += '<p class="assessment-good">You learned humility through your trials. Like Johnny in the novel, you discovered that true strength comes from serving something greater than yourself.</p>';
        } else {
            assessment += '<p class="assessment-warning">Pride still holds you. Your journey was more difficult because you resisted the lessons your suffering tried to teach.</p>';
        }

        if (this.state.patriotism >= 70) {
            assessment += '<p class="assessment-good">You embraced the patriot cause wholeheartedly. You understand that liberty is worth any sacrifice.</p>';
        } else if (this.state.patriotism >= 40) {
            assessment += '<p class="assessment-neutral">You supported the cause but kept some distance. You were a reluctant revolutionary.</p>';
        } else {
            assessment += '<p class="assessment-warning">The cause of liberty never truly captured your heart. You remained focused on personal concerns.</p>';
        }

        if (this.state.skills >= 70) {
            assessment += '<p class="assessment-good">Despite your injured hand, you developed new skills and remained useful. Adaptability became your strength.</p>';
        } else {
            assessment += '<p class="assessment-neutral">Your injury limited you, and you struggled to find new ways to contribute.</p>';
        }

        // Relationship assessment
        if (this.state.relationships['Rab Silsbee'] >= 70) {
            assessment += '<p class="assessment-good">Your friendship with Rab transformed you. He showed you what it means to be a man of principle.</p>';
        }

        return assessment;
    }
}

// Initialize game
const game = new JohnnyTremainGame();
