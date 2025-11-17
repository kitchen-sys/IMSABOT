// Rivers of Fortune: French Fur Trade Game Engine

class FurTradeGame {
    constructor() {
        this.state = {
            round: 0,
            year: 1735,
            furs: 25,
            french: 60,
            native: 50,
            threat: 20,
            inventory: {
                beaver: 10,
                otter: 5,
                deerskin: 10,
                tradeGoods: 20
            },
            tribalRelations: {
                'Shawnee': 50,
                'Miami': 50,
                'Delaware': 50,
                'Huron': 60
            },
            majorEvents: [],
            reputation: 'honorable'
        };

        this.chapters = [
            {
                title: "First Journey into La Belle Rivière",
                year: 1735,
                story: `Your canoe glides down the Ohio River, surrounded by endless forests teeming with game. You are one of the coureurs des bois, leaving Montreal with trade goods to seek fortune in the rich lands the French call La Belle Rivière.\n\nYou arrive at a Shawnee village along the river. The people watch cautiously as you beach your canoe. An elder approaches. In the French style, you would simply begin negotiating trade. But you've heard that Native customs demand patience, ceremony, and respect.\n\nYour first impression will set the tone for all future dealings.`,
                choices: [
                    {
                        text: "Present gifts first and ask permission to trade, following their customs",
                        effects: { native: +15, furs: -2, relationships: { 'Shawnee': +20 } },
                        result: "You offer tobacco and cloth as gifts before speaking of trade. The elder's stern face softens. He invites you to sit and share food. 'The French show respect,' he says. 'The English show only greed.' You have made a good beginning."
                    },
                    {
                        text: "Immediately display your trade goods to show what you offer",
                        effects: { native: -10, furs: +3, relationships: { 'Shawnee': -10 } },
                        result: "You spread out kettles, knives, and cloth. The Shawnee exchange glances. 'Like all Europeans,' an elder mutters, 'you see only trade, not people.' They will deal with you, but without warmth. You have gained trade but lost trust."
                    },
                    {
                        text: "Learn some Shawnee words and attempt to speak their language",
                        effects: { native: +20, french: -5, relationships: { 'Shawnee': +30 } },
                        result: "Your Shawnee is clumsy, and they laugh—but it's warm laughter, not mockery. 'You try to walk our path,' a warrior says approvingly. 'We will teach you our words, and trade with you as brothers.' This approach takes time, but builds deep trust."
                    }
                ]
            },
            {
                title: "The Beaver Moon",
                year: 1737,
                story: `Two years of trading have taught you the rhythms of the Ohio Territory. During the Beaver Moon (November), when pelts are thickest, you meet Miami hunters at a portage between rivers.\n\nThey have magnificent beaver pelts—more than you've seen in one place. But they want more than your trade goods. They want French muskets and powder. The French Crown restricts gun sales to trusted allies only, fearing weapons could reach enemies.\n\nThe Miami watch you intently. British traders, they say, sell guns freely. Will the French do the same, or will you prove French promises hollow?`,
                choices: [
                    {
                        text: "Trade muskets despite regulations—their alliance is worth the risk",
                        effects: { furs: +15, native: +20, french: -20, threat: +10, relationships: { 'Miami': +35 }, inventory: { beaver: +10 } },
                        result: "You provide four muskets and powder. The Miami are overjoyed. 'The French treat us as equals!' Word spreads—you are a trader who keeps promises. But you've violated Crown regulations and armed potential combatants. This could have consequences."
                    },
                    {
                        text: "Refuse guns but offer premium prices for their furs in other goods",
                        effects: { furs: +5, native: -15, french: +15, relationships: { 'Miami': -10 }, inventory: { beaver: +5 } },
                        result: "You apologize, explaining French law. You offer extra kettles, blankets, and tools as compensation. The Miami accept, disappointed. 'The British have no such rules,' their leader notes coldly. You've kept French honor but damaged Native trust."
                    },
                    {
                        text: "Promise to petition authorities for special gun-trading permission",
                        effects: { native: +5, french: +10, relationships: { 'Miami': +10 } },
                        result: "You make a sincere promise to seek official permission to trade weapons. The Miami appreciate your honesty. 'We will wait one season,' they say. 'But if the British offer guns first, we will not wait longer.' You've bought time, but now must deliver."
                    }
                ]
            },
            {
                title: "The British Arrive",
                year: 1740,
                story: `At a Delaware village where you've traded for years, you find something disturbing: British traders from Pennsylvania. They have more goods than you, cheaper prices, and abundant rum.\n\nThe Delaware chief, Shingas, calls you to his longhouse. 'I welcome both French and British,' he says carefully. 'But the British offer better prices. Why should we remain loyal to France?'\n\nYou notice the British traders watching this conversation. Your response will be reported back to their colonies.`,
                choices: [
                    {
                        text: "Warn that British seek to take their land, not just trade",
                        effects: { native: +15, threat: +15, french: +10, relationships: { 'Delaware': +20 } },
                        result: "You speak truth: 'British colonists clear forests for farms. French traders need the forests standing and the game thriving. We are partners; they see you as obstacles.' Shingas nods slowly. 'Your words match what we have seen in the East.' The British traders glare at you with open hostility."
                    },
                    {
                        text: "Match British prices by trading your goods at a loss",
                        effects: { furs: -5, native: +10, french: -5, relationships: { 'Delaware': +15 } },
                        result: "You cannot match their volume, but you lower your prices to compete. The Delaware appreciate your effort to keep their business. However, you're barely breaking even now, and word reaches French authorities that you're undercutting proper pricing. The British smirk—they can afford this game longer than you."
                    },
                    {
                        text: "Emphasize quality and long friendship over cheaper British goods",
                        effects: { native: +5, french: +5, relationships: { 'Delaware': +5 } },
                        result: "You remind Shingas of years of fair dealing, quality goods, and French respect for Native sovereignty. 'These things matter,' he agrees. 'But my people also need kettles and blankets. We will trade with both.' It's an honest answer. The competition has begun."
                    }
                ]
            },
            {
                title: "The Huron Alliance",
                year: 1743,
                story: `Your Huron contacts from the Great Lakes ask you to join a major council. Representatives from Huron, Ottawa, and Potawatomi nations gather to discuss the British threat and reaffirm the old French alliance.\n\nA Huron elder addresses you: 'Since Champlain's time, we have fought beside French fathers against the Iroquois and British. But our young men see British goods flowing like rivers. They ask: what does French friendship bring us besides war?'\n\nThis is a critical moment. The Huron-French alliance is the foundation of New France's Native policy.`,
                choices: [
                    {
                        text: "Promise French military support and better trade terms",
                        effects: { native: +25, french: +15, furs: +10, threat: +5, relationships: { 'Huron': +40 } },
                        result: "You pledge that French soldiers will defend Huron lands, and you personally commit to better prices and more reliable trade. The council erupts in approval. 'This is why we call the French our brothers!' A wampum belt is presented to you—a sacred token of renewed alliance. You've strengthened the crucial French-Huron bond."
                    },
                    {
                        text: "Speak honestly about French limitations but emphasize shared enemies",
                        effects: { native: +15, french: +10, relationships: { 'Huron': +20 } },
                        result: "You don't make promises you can't keep. Instead, you remind them of shared history and common threats: 'The British and Iroquois still threaten both our peoples. Separately, we fall. Together, we stand.' Your honesty is respected. The alliance holds, though some younger warriors look skeptical."
                    },
                    {
                        text: "Suggest they maintain neutrality and trade with both powers",
                        effects: { native: -15, french: -25, threat: +20, relationships: { 'Huron': -30 } },
                        result: "You suggest pragmatic neutrality. The council falls silent, then erupts in anger. 'After a century of friendship, you ask us to abandon our French brothers?' Elders who trusted you look betrayed. You've seriously damaged France's oldest and most important alliance. Word of this will reach Montreal."
                    }
                ]
            },
            {
                title: "The Treaty of Lancaster",
                year: 1744,
                story: `News travels slowly but surely through the wilderness. You learn that the British have signed a treaty at Lancaster with the Iroquois Confederacy. In exchange for trade goods, the Iroquois have ceded their claimed Ohio Valley lands to Britain.\n\nThere's one problem: the Shawnee, Delaware, Miami, and other nations actually living in Ohio were not consulted. The Iroquois sold land they didn't truly control, and the British accepted it.\n\nA Delaware war chief, Shingas, confronts you at your trading post. 'Where does France stand? Do you recognize this false treaty?'`,
                choices: [
                    {
                        text: "Denounce the treaty and declare French support for Ohio tribes",
                        effects: { native: +30, french: +10, threat: +25, relationships: { 'Delaware': +40, 'Shawnee': +30, 'Miami': +25 } },
                        result: "You declare the Treaty of Lancaster a fraud. 'France recognizes the sovereignty of those who actually live on and hunt these lands,' you proclaim. Warriors cheer. You've won tremendous Native support, but you've also drawn a clear line against Britain. The path to war grows shorter."
                    },
                    {
                        text: "Suggest the tribes negotiate directly with British to clarify ownership",
                        effects: { native: -10, french: -15, threat: +10, relationships: { 'Delaware': -15 } },
                        result: "You counsel negotiation and legal clarity. Shingas looks at you with disappointment. 'You tell us to beg the British to recognize our own lands? Where is French support?' You've tried to be diplomatic, but you've appeared weak. The tribes wonder if France will truly back them."
                    },
                    {
                        text: "Privately assure support while avoiding public declaration",
                        effects: { native: +10, french: +5, threat: +10, relationships: { 'Delaware': +15 } },
                        result: "You tell Shingas privately that France stands with the Ohio tribes, but you avoid public statements that might provoke immediate conflict. It's a careful middle path. Shingas accepts this for now—'Actions will speak louder than words,' he says. You've bought time but made a promise you'll need to keep."
                    }
                ]
            },
            {
                title: "Fort Building",
                year: 1749,
                story: `French officials arrive in Ohio with soldiers and engineers. They plan to build a chain of forts from Lake Erie to the Ohio River, including a major fort at the Forks of the Ohio (where the Allegheny and Monongahela rivers meet).\n\nYou're asked to help negotiate with local tribes for permission. The Miami chief, La Demoiselle (Old Britain), is skeptical: 'Traders we welcome. But soldiers and forts? This speaks of possession, not partnership.'\n\nThe French commander makes clear: these forts will be built with or without Native consent. He wants your help to ensure it happens peacefully.`,
                choices: [
                    {
                        text: "Advocate for tribal consent and joint French-Native fort design",
                        effects: { native: +20, french: -10, threat: +15, relationships: { 'Miami': +25, 'Shawnee': +20 } },
                        result: "You push back against the commander's unilateral approach. You propose forts designed to protect both French and Native interests, with tribal input on locations. The commander is annoyed but accepts your counsel. Tribes agree to several forts, seeing them as protection against British expansion. Your influence has kept the peace."
                    },
                    {
                        text: "Support French military plans as necessary to counter British threat",
                        effects: { native: -15, french: +20, threat: +20, relationships: { 'Miami': -20 } },
                        result: "You argue that British expansion demands a military response. La Demoiselle responds bitterly: 'You sound like conquerors, not brothers.' Some tribes begin to reconsider the French alliance. The forts are built, but resentment grows. You've chosen French interests over Native partnership."
                    },
                    {
                        text: "Negotiate limited forts with clear guarantees of tribal sovereignty",
                        effects: { native: +15, french: +10, threat: +15, relationships: { 'Miami': +20, 'Shawnee': +15 } },
                        result: "You broker a compromise: France may build strategic forts, but must formally recognize tribal land ownership and sovereignty. Written guarantees are made. It's not perfect for anyone, but it maintains the alliance while strengthening French military position. Both sides trust your fair dealing."
                    }
                ]
            },
            {
                title: "Pickawillany Massacre",
                year: 1752,
                story: `Disaster strikes. The Miami chief La Demoiselle, who had recently allied with British traders at his village Pickawillany, is killed in a brutal raid by French-allied Ottawa and Ojibwa warriors led by Charles Langlade.\n\nThe raid was meant to punish British collaboration, but its brutality shocks many Ohio tribes. La Demoiselle was killed, possibly ritually cannibalized, and British traders were captured.\n\nYou arrive at a Shawnee council called to discuss this event. Many warriors are angry: 'Is this French justice? Murder and terror against those who trade with both sides?' The British are using this incident to portray French as savage and treacherous.`,
                choices: [
                    {
                        text: "Condemn the raid's brutality while defending French interests",
                        effects: { native: +10, french: -15, threat: +10, relationships: { 'Shawnee': +15, 'Miami': +10 } },
                        result: "You speak carefully: 'The raid's brutality was wrong. But La Demoiselle had broken faith with his French allies to serve British interests. There were grievances, though this response went too far.' Your honesty and moral clarity impress the council. They appreciate that you don't blindly defend French actions."
                    },
                    {
                        text: "Fully defend the raid as justified punishment for British collaboration",
                        effects: { native: -25, french: +20, threat: +25, relationships: { 'Shawnee': -30, 'Miami': -35, 'Delaware': -20 } },
                        result: "You argue that La Demoiselle was a traitor who got what he deserved. The council erupts in outrage. 'You threaten all of us!' warriors shout. 'We cannot choose our own trading partners?' You've severely damaged French credibility. Many tribes now see the French as dangerous masters, not partners."
                    },
                    {
                        text: "Express personal disgust and promise to report concerns to French authorities",
                        effects: { native: +20, french: -10, threat: +5, relationships: { 'Shawnee': +25, 'Miami': +20, 'Delaware': +15 } },
                        result: "You make clear this raid does not represent your values or, you believe, true French policy. You promise to report tribal concerns to Montreal and advocate for those responsible to be punished. Your personal honor and courage to speak against your own people earns deep respect."
                    }
                ]
            },
            {
                title: "The Ohio Company",
                year: 1753,
                story: `British activity intensifies. The Ohio Company has received a grant of 200,000 acres and is actively surveying and selling Ohio lands. British settlers are beginning to cross the mountains.\n\nMeanwhile, France has appointed a new, aggressive governor: Marquis Duquesne. He sends troops to complete the chain of forts and expel all British traders from Ohio.\n\nYou're caught in the middle. Your trading relationships span both French and Native communities. A French officer orders you to report any British traders you encounter and cease all contact with British-allied tribes. A Delaware chief asks if you'll abandon them if they don't choose sides.`,
                choices: [
                    {
                        text: "Maintain your trading relationships with all tribes regardless of politics",
                        effects: { native: +25, french: -20, threat: +15, relationships: { 'Delaware': +30, 'Shawnee': +25, 'Miami': +20 } },
                        result: "You tell the French officer you're a trader, not a soldier, and will continue honorable trade with all peoples. You tell the Delaware you won't abandon old friends. The officer threatens to revoke your trading license. The tribes, however, trust you more than ever. You've chosen principle over politics."
                    },
                    {
                        text: "Follow French orders and cut ties with pro-British factions",
                        effects: { native: -20, french: +25, threat: +20, relationships: { 'Delaware': -25, 'Miami': -15 } },
                        result: "You comply with French military orders, refusing to trade with tribes that deal with British. Your French superiors commend your loyalty. But Native leaders see you as just another tool of French policy. Relationships built over years crumble. 'You were different,' a Delaware elder says sadly. 'We were wrong.'"
                    },
                    {
                        text: "Propose you serve as mediator between French and undecided tribes",
                        effects: { native: +15, french: +15, threat: +10, relationships: { 'Delaware': +20, 'Shawnee': +15 } },
                        result: "You argue that your relationships make you valuable as a bridge, not a divider. The French officer is skeptical but agrees—intelligence and diplomacy have value. The tribes appreciate your continued engagement. You're trying to prevent war, even as it becomes increasingly inevitable."
                    }
                ]
            },
            {
                title: "Washington's Mission",
                year: "Winter 1753-1754",
                story: `A young Virginia major named George Washington arrives at Fort Le Boeuf with a letter from Virginia's governor. He demands French forces withdraw from Ohio, claiming it as British territory.\n\nYou're present when Washington meets with French commander Legardeur de Saint-Pierre. The commander is polite but firm: 'I will forward your letter to the governor in Montreal, but I will not withdraw. These lands belong to the King of France.'\n\nAfter the meeting, Washington asks you about winter routes back to Virginia. You could help him—he's just a messenger—or refuse. Meanwhile, French officers discuss sending troops to the Forks of the Ohio before the British can build there.`,
                choices: [
                    {
                        text: "Help Washington with route information—he's just a messenger",
                        effects: { native: +5, french: -15, threat: +20, relationships: { 'Delaware': +10 } },
                        result: "You provide Washington with basic route information and advice about winter travel. He thanks you courteously. Later, French officers hear of this and question your loyalty. 'He came to threaten us, and you help him?' You argue that basic hospitality isn't treason, but you've raised suspicions."
                    },
                    {
                        text: "Refuse and report his questions to French commanders",
                        effects: { native: -5, french: +20, threat: +15 },
                        result: "You refuse Washington's requests and report his questions to French officers. They commend your vigilance. Washington departs, struggling through harsh winter conditions. He'll make it back, but your refusal has clearly signaled where you stand. There's no middle ground anymore."
                    },
                    {
                        text: "Give minimal help while warning him war is coming",
                        effects: { native: +5, french: -5, threat: +25 },
                        result: "You provide only basic public knowledge but speak frankly: 'Major, your governor's claims and our king's claims cannot both be true. This will be decided by war, not letters.' Washington nods grimly. 'I fear you're right.' You've maintained personal honor while acknowledging reality. Both sides now prepare for conflict."
                    }
                ]
            },
            {
                title: "The Forks of the Ohio",
                year: "May 1754",
                story: `Events move rapidly. The British began building a fort at the Forks of the Ohio, but French forces under Claude-Pierre Pécaudy de Contrecœur arrived with superior numbers and ejected them. Now French soldiers construct Fort Duquesne at this strategic location.\n\nMeanwhile, young Major Washington has returned with Virginia militia. On May 28, Washington's force attacks a small French patrol led by Joseph Coulon de Jumonville. The French officer is killed—Washington claims it was a battle; the French call it assassination during a diplomatic mission.\n\nHalf King, the Seneca leader, and other Native warriors participated in the attack. The French demand Native allies help them respond. You're asked to carry messages encouraging Shawnee and Delaware warriors to join a punitive expedition against Washington.\n\nThis is it—the beginning of what will become the French and Indian War. What role will you play?`,
                choices: [
                    {
                        text: "Support French military action—Washington must answer for Jumonville's death",
                        effects: { native: +15, french: +30, threat: +30, relationships: { 'Shawnee': +20, 'Delaware': +15, 'Huron': +25 } },
                        result: "You rally support for the French cause. Warriors from multiple tribes join French forces. In July, they surround Washington at his hastily built Fort Necessity. After a day's battle, Washington surrenders. You've helped France win the first engagement of the war. The conflict that will reshape North America has begun—and you've chosen your side."
                    },
                    {
                        text: "Encourage Native neutrality—this is a fight between European powers",
                        effects: { native: +20, french: -30, threat: +20, relationships: { 'Shawnee': +15, 'Delaware': +20, 'Miami': +15 } },
                        result: "You tell tribal leaders this is a French-British dispute that will bring only suffering to Native peoples caught in the middle. Some warriors heed your advice and stay home. French officers are furious—'Traitor! You undermine French interests!' Your trading license is revoked. But you've tried to protect Native communities from a devastating war."
                    },
                    {
                        text: "Stand with your Native allies in whatever choice they make",
                        effects: { native: +25, french: -10, threat: +25, relationships: { 'Shawnee': +30, 'Delaware': +25, 'Miami': +20 } },
                        result: "You tell the tribes you'll respect their decision—you won't manipulate them for French purposes. Different tribes make different choices; some fight, some stay neutral. French authorities consider you unreliable, but Native leaders deeply respect your honoring their sovereignty. As war breaks out across the frontier, you've maintained the trust and friendships built over two decades."
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
        document.getElementById('year').textContent = chapter.year;
        document.getElementById('chapterTitle').textContent = chapter.title;
        document.getElementById('chapterYear').textContent = chapter.year;
        document.getElementById('storyText').textContent = chapter.story;

        // Update stats display
        this.updateStatsDisplay();
        this.updateRelationshipsDisplay();
        this.updateInventoryDisplay();

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
        if (choice.effects.furs) this.state.furs = Math.max(0, this.state.furs + choice.effects.furs);
        if (choice.effects.french) this.state.french = Math.max(0, Math.min(100, this.state.french + choice.effects.french));
        if (choice.effects.native) this.state.native = Math.max(0, Math.min(100, this.state.native + choice.effects.native));
        if (choice.effects.threat) this.state.threat = Math.max(0, Math.min(100, this.state.threat + choice.effects.threat));

        // Update tribal relationships
        if (choice.effects.relationships) {
            for (let tribe in choice.effects.relationships) {
                if (this.state.tribalRelations[tribe] !== undefined) {
                    this.state.tribalRelations[tribe] = Math.max(0, Math.min(100,
                        this.state.tribalRelations[tribe] + choice.effects.relationships[tribe]));
                }
            }
        }

        // Update inventory
        if (choice.effects.inventory) {
            for (let item in choice.effects.inventory) {
                if (this.state.inventory[item] !== undefined) {
                    this.state.inventory[item] = Math.max(0, this.state.inventory[item] + choice.effects.inventory[item]);
                }
            }
        }

        // Update display
        this.updateStatsDisplay();
        this.updateRelationshipsDisplay();
        this.updateInventoryDisplay();

        // Show result
        document.getElementById('resultText').textContent = choice.result;
        document.getElementById('choicesPanel').classList.add('hidden');
        document.getElementById('resultPanel').classList.remove('hidden');

        // Add to journal
        this.addJournalEntry(choice.text);
    }

    nextChapter() {
        this.state.round++;
        this.state.year = this.chapters[this.state.round]?.year || this.state.year;

        if (this.state.round >= this.chapters.length) {
            this.endGame();
        } else {
            this.loadChapter();
        }
    }

    updateStatsDisplay() {
        document.getElementById('furs').textContent = this.state.furs;
        document.getElementById('french').textContent = this.state.french;
        document.getElementById('native').textContent = this.state.native;
        document.getElementById('threat').textContent = this.state.threat;

        document.getElementById('frenchFill').style.width = this.state.french + '%';
        document.getElementById('nativeFill').style.width = this.state.native + '%';
        document.getElementById('threatFill').style.width = this.state.threat + '%';
    }

    updateInventoryDisplay() {
        document.getElementById('beaverQty').textContent = this.state.inventory.beaver;
        document.getElementById('otterQty').textContent = this.state.inventory.otter;
        document.getElementById('deerskinQty').textContent = this.state.inventory.deerskin;
        document.getElementById('tradeGoodsQty').textContent = this.state.inventory.tradeGoods;
    }

    updateRelationshipsDisplay() {
        const relDiv = document.getElementById('relationships');
        relDiv.innerHTML = '';

        for (let tribe in this.state.tribalRelations) {
            const value = this.state.tribalRelations[tribe];

            const item = document.createElement('div');
            item.className = 'relationship-item';

            const name = document.createElement('span');
            name.className = 'tribe-name';
            name.textContent = tribe + ':';

            const valSpan = document.createElement('span');
            valSpan.className = 'relationship-value';

            if (value >= 75) valSpan.textContent = 'Allied';
            else if (value >= 60) valSpan.textContent = 'Friendly';
            else if (value >= 40) valSpan.textContent = 'Neutral';
            else if (value >= 25) valSpan.textContent = 'Wary';
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
        entry.textContent = `Year ${this.state.year}: ${text}`;
        journal.insertBefore(entry, journal.firstChild);
    }

    showVocabulary() {
        document.getElementById('vocabularyModal').classList.remove('hidden');
    }

    closeModal() {
        document.getElementById('vocabularyModal').classList.add('hidden');
    }

    endGame() {
        document.getElementById('gameScreen').classList.add('hidden');
        document.getElementById('endScreen').classList.remove('hidden');

        document.getElementById('finalFurs').textContent = this.state.furs;
        document.getElementById('finalFrench').textContent = this.state.french + '%';
        document.getElementById('finalNative').textContent = this.state.native + '%';
        document.getElementById('finalThreat').textContent = this.state.threat + '%';

        // Legacy assessment
        let assessment = this.getLegacyAssessment();
        document.getElementById('legacyAssessment').innerHTML = assessment;

        // End message
        let endMsg = `<p>The French and Indian War has begun. George Washington's attack on Jumonville's patrol and France's response at Fort Necessity are the opening shots of a conflict that will last nine years and reshape North America.</p>`;
        endMsg += `<p>You arrived in Ohio as a simple fur trader seeking fortune. Through two decades, you navigated the complex relationships between French colonial ambitions, British expansion, and Native American sovereignty.</p>`;
        endMsg += `<p>The war ahead will determine not just which European power controls the continent, but the fate of the Native peoples who have lived here for countless generations.</p>`;

        document.getElementById('endMessage').innerHTML = endMsg;
    }

    getLegacyAssessment() {
        let assessment = '<h4>Your Legacy as a Trader:</h4>';

        // Native Trust assessment
        if (this.state.native >= 75) {
            assessment += '<p class="assessment-good">✓ You earned deep trust among Native peoples by respecting their sovereignty, learning their customs, and treating them as equals. This trust will be remembered.</p>';
        } else if (this.state.native >= 50) {
            assessment += '<p class="assessment-neutral">~ You maintained generally positive relationships with Native tribes, though your commitment to French interests sometimes complicated these bonds.</p>';
        } else {
            assessment += '<p class="assessment-warning">✗ Native peoples saw you primarily as a tool of French colonial policy rather than a trustworthy partner. Opportunities for genuine friendship were lost.</p>';
        }

        // French Honor assessment
        if (this.state.french >= 75) {
            assessment += '<p class="assessment-good">✓ You served French interests loyally and maintained your honor among colonial authorities. Your reports and actions supported New France\'s position in Ohio.</p>';
        } else if (this.state.french >= 40) {
            assessment += '<p class="assessment-neutral">~ Your relationship with French authorities was complicated. You sometimes prioritized personal principles or Native relationships over strict French policy.</p>';
        } else {
            assessment += '<p class="assessment-warning">✗ French authorities view you as unreliable or even disloyal. Your actions often contradicted colonial policy and undermined French interests.</p>';
        }

        // Balance assessment
        if (this.state.native >= 60 && this.state.french >= 60) {
            assessment += '<p class="assessment-good">✓ <strong>The Bridge Builder:</strong> You successfully maintained both French loyalty and Native trust—a rare achievement. You represented the best possibility of French-Native partnership.</p>';
        } else if (Math.abs(this.state.native - this.state.french) > 40) {
            assessment += '<p class="assessment-neutral">~ You chose a clear side, earning trust from one group while sacrificing relationships with the other. This clarity brought its own kind of honor.</p>';
        }

        // Economic success
        if (this.state.furs >= 40) {
            assessment += '<p class="assessment-good">✓ You prospered as a trader, accumulating significant wealth through shrewd dealing and good relationships.</p>';
        } else if (this.state.furs >= 20) {
            assessment += '<p class="assessment-neutral">~ You maintained a modest trading operation, though principles sometimes took priority over profit.</p>';
        } else {
            assessment += '<p class="assessment-warning">✗ Your trading business struggled. Whether from poor decisions or sacrifices for higher principles, you did not prosper economically.</p>';
        }

        // Tribal relationships
        let alliedTribes = [];
        let hostileTribes = [];
        for (let tribe in this.state.tribalRelations) {
            if (this.state.tribalRelations[tribe] >= 75) alliedTribes.push(tribe);
            if (this.state.tribalRelations[tribe] <= 30) hostileTribes.push(tribe);
        }

        if (alliedTribes.length >= 3) {
            assessment += `<p class="assessment-good">✓ <strong>Strong Alliances:</strong> You built strong bonds with ${alliedTribes.join(', ')}. These relationships will matter greatly in the coming war.</p>`;
        }

        if (hostileTribes.length >= 2) {
            assessment += `<p class="assessment-warning">✗ Your relationships with ${hostileTribes.join(', ')} deteriorated badly. These tribes may become enemies in the conflict ahead.</p>`;
        }

        // Final reflection
        assessment += '<br><p><em>The fur trade era is ending. The age of war has begun. The choices you made as a trader helped shape the alliances that will determine the war\'s outcome—and the future of this land.</em></p>';

        return assessment;
    }
}

// Initialize game
const game = new FurTradeGame();
