// Washington's French and Indian War - Game Engine

class WarGame {
    constructor() {
        this.state = {
            round: 0,
            troops: 100,
            supplies: 100,
            morale: 75,
            reputation: 50,
            battlesWon: 0,
            decisionsAwaitingInput: false
        };

        this.events = [
            {
                period: "Winter 1753",
                title: "Mission to Fort Le Boeuf",
                description: "Governor Dinwiddie has ordered you to deliver a message to the French commander at Fort Le Boeuf, demanding their withdrawal from the Ohio Valley. You must journey through 500 miles of wilderness in winter with a small party.",
                situation: "The journey is treacherous. Heavy snow, freezing temperatures, and hostile territory await. Your guide, Christopher Gist, warns of French-allied Native Americans in the area.",
                intelligence: {
                    enemyForces: "French garrison",
                    terrain: "Frozen wilderness",
                    weather: "Heavy snow",
                    nativeRelations: "Tense"
                },
                decisions: [
                    {
                        text: "Take the direct route through dangerous territory",
                        outcome: "You push through hostile territory. Several men suffer frostbite, but you arrive quickly and impress the Governor with your determination.",
                        effects: { troops: -10, supplies: -15, morale: -10, reputation: 15 }
                    },
                    {
                        text: "Take a longer, safer route with Native guides",
                        outcome: "Your diplomacy with the Half-King's people proves valuable. The journey takes longer but your party arrives intact with valuable intelligence.",
                        effects: { troops: 0, supplies: -10, morale: 5, reputation: 10 }
                    },
                    {
                        text: "Wait for better weather before departing",
                        outcome: "While safer, the delay frustrates Governor Dinwiddie. You arrive safely but the French have reinforced their position.",
                        effects: { troops: 0, supplies: -5, morale: 10, reputation: -5 }
                    }
                ]
            },
            {
                period: "Spring 1754",
                title: "Skirmish at Jumonville Glen",
                description: "French forces are approaching your position. With your Virginia militia and Native allies led by Half-King, you've located a French reconnaissance party of 35 men camped in a rocky glen.",
                situation: "This could be the opening shots of war. Half-King urges an immediate attack at dawn. Your men are inexperienced but eager. The French are unaware of your presence.",
                intelligence: {
                    enemyForces: "35 French soldiers",
                    terrain: "Rocky glen",
                    weather: "Misty dawn",
                    nativeRelations: "Allied"
                },
                decisions: [
                    {
                        text: "Launch a surprise attack at dawn",
                        outcome: "Your forces attack at dawn. The battle is swift and deadly. French commander Jumonville is killed. Victory, but the French will call this an assassination. War is now inevitable.",
                        effects: { troops: -5, supplies: -10, morale: 15, reputation: 20 },
                        special: (state) => { state.battlesWon++; }
                    },
                    {
                        text: "Demand their surrender before attacking",
                        outcome: "Your warning allows some French to escape and warn Fort Duquesne. The battle is harder and your inexperienced men take casualties, but you've acted honorably.",
                        effects: { troops: -15, supplies: -10, morale: 5, reputation: 10 },
                        special: (state) => { state.battlesWon++; }
                    },
                    {
                        text: "Shadow them and gather intelligence",
                        outcome: "You follow the French party but they discover your presence and flee to Fort Duquesne. A wasted opportunity, and Half-King questions your leadership.",
                        effects: { troops: 0, supplies: -15, morale: -10, reputation: -10 }
                    }
                ]
            },
            {
                period: "Summer 1754",
                title: "Battle of Fort Necessity",
                description: "After Jumonville Glen, you've built Fort Necessity in the Great Meadows. Now, 600 French soldiers and 100 Native allies under Louis Coulon de Villiers are attacking. You have only 400 poorly trained militia in a hastily built fort.",
                situation: "Heavy rain turns the fort into a muddy disaster. Your swivel guns are useless. French sharpshooters fire from the tree line. Your men are exhausted, wet, and running low on ammunition.",
                intelligence: {
                    enemyForces: "700 French & Natives",
                    terrain: "Waterlogged fort",
                    weather: "Torrential rain",
                    nativeRelations: "Enemies"
                },
                decisions: [
                    {
                        text: "Fight to the last man - never surrender!",
                        outcome: "Your courage is admirable but foolish. You lose most of your command. The survivors barely escape through the wilderness. A devastating defeat.",
                        effects: { troops: -60, supplies: -40, morale: -30, reputation: -20 }
                    },
                    {
                        text: "Negotiate terms of surrender",
                        outcome: "You negotiate withdrawal with honors of war. However, the document you sign (in French) admits to 'assassinating' Jumonville. A controversial surrender, but you save your men.",
                        effects: { troops: -20, supplies: -30, morale: -15, reputation: -5 }
                    },
                    {
                        text: "Attempt a nighttime retreat",
                        outcome: "Under cover of darkness and rain, you attempt escape. Some men make it out, but many are caught. A disorganized retreat causes heavy losses.",
                        effects: { troops: -50, supplies: -35, morale: -25, reputation: -15 }
                    }
                ]
            },
            {
                period: "Summer 1755",
                title: "Braddock's Expedition",
                description: "General Edward Braddock has arrived from England with 1,000 regulars. You serve as his aide-de-camp, advising him on wilderness warfare. His mission: capture Fort Duquesne. But Braddock dismisses your warnings about fighting European-style in the wilderness.",
                situation: "July 9th: Your column of 1,300 men is crossing the Monongahela River, just 10 miles from Fort Duquesne. French and Native forces are preparing an ambush. Braddock ignores your advice about flanking scouts.",
                intelligence: {
                    enemyForces: "900 French & Natives",
                    terrain: "Dense forest",
                    weather: "Hot summer day",
                    nativeRelations: "Enemy ambush"
                },
                decisions: [
                    {
                        text: "Beg Braddock to send flanking parties into the woods",
                        outcome: "Braddock refuses, calling it cowardice. When the ambush comes, British regulars stand in formation and are slaughtered. You have two horses shot from under you but survive. Braddock is mortally wounded.",
                        effects: { troops: -40, supplies: -30, morale: -20, reputation: 25 }
                    },
                    {
                        text: "Lead Virginia militia to fight from cover",
                        outcome: "You order your Virginians to fight Indian-style from behind trees. While Braddock's regulars are destroyed, your men hold the flanks. Your courage under fire becomes legendary.",
                        effects: { troops: -35, supplies: -30, morale: -10, reputation: 35 }
                    },
                    {
                        text: "Organize a fighting retreat to save the wounded",
                        outcome: "As the battle turns to disaster, you rally men to cover the retreat. You save many lives, including General Braddock before he dies. Your leadership in defeat earns respect.",
                        effects: { troops: -30, supplies: -25, morale: -5, reputation: 30 }
                    }
                ]
            },
            {
                period: "Fall 1755",
                title: "Defense of the Virginia Frontier",
                description: "After Braddock's defeat, the Virginia frontier is exposed. French-allied Native war parties are raiding settlements. You've been appointed Colonel and commander of the Virginia Regiment - but you have only 300 men to defend 350 miles of frontier.",
                situation: "Settlers are fleeing their homes. Requests for help flood in from dozens of locations. You cannot be everywhere at once. The House of Burgesses demands results but provides little support.",
                intelligence: {
                    enemyForces: "Multiple raiding parties",
                    terrain: "Scattered settlements",
                    weather: "Autumn storms",
                    nativeRelations: "Hostile raids"
                },
                decisions: [
                    {
                        text: "Build a chain of small forts across the frontier",
                        outcome: "You establish Fort Loudoun and a network of smaller forts. It's a defensive strategy that limits raids, though you cannot stop them all. Settlers appreciate the protection.",
                        effects: { troops: -10, supplies: -25, morale: -5, reputation: 15 }
                    },
                    {
                        text: "Form mobile ranger companies to pursue raiders",
                        outcome: "Your rangers learn to fight like their Native enemies. Some success, but the frontier is too vast. Several ranger companies are ambushed and destroyed.",
                        effects: { troops: -25, supplies: -20, morale: -15, reputation: 10 }
                    },
                    {
                        text: "Focus defenses on the most populated areas",
                        outcome: "You save the most lives by concentrating forces, but outlying settlements are abandoned. Politically unpopular, but tactically sound given your resources.",
                        effects: { troops: -5, supplies: -15, morale: -10, reputation: 5 }
                    }
                ]
            },
            {
                period: "1756",
                title: "The Struggle Continues",
                description: "The war grinds on. Raids continue along the frontier. Your Virginia Regiment is undermanned, underpaid, and under-supplied. Many men desert. You've petitioned the Governor repeatedly for resources, but Virginia's commitment wavers.",
                situation: "Your regiment is at half strength. Morale is low - men haven't been paid in months. Meanwhile, you hear the French are planning a major offensive. You need to rebuild your force.",
                intelligence: {
                    enemyForces: "French buildup",
                    terrain: "Frontier forts",
                    weather: "Harsh winter ahead",
                    nativeRelations: "Still hostile"
                },
                decisions: [
                    {
                        text: "Institute strict discipline to prevent further desertions",
                        outcome: "You enforce harsh punishments for desertion, including flogging. Desertions drop but morale suffers. Your men fear you but don't love you.",
                        effects: { troops: 5, supplies: -10, morale: -15, reputation: 5 }
                    },
                    {
                        text: "Travel to Williamsburg to personally petition for support",
                        outcome: "Your impassioned speech to the House of Burgesses wins you new recruits and some supplies. Your political skills are growing, though you dislike playing politics.",
                        effects: { troops: 20, supplies: 15, morale: 5, reputation: 15 }
                    },
                    {
                        text: "Focus on training the men you have",
                        outcome: "You transform your regiment through relentless drill and discipline. Fewer men, but they're becoming professional soldiers. Quality over quantity.",
                        effects: { troops: -5, supplies: -5, morale: 15, reputation: 10 }
                    }
                ]
            },
            {
                period: "1757",
                title: "A Year of Preparation",
                description: "The new British commander, Lord Loudoun, has arrived. Major campaigns are planned for 1758. You've spent the year training your Virginia Regiment to professional standards, studying military texts, and preparing for the offensive.",
                situation: "Your reputation as a commander has grown. Your regiment is now considered among the best colonial troops. British regulars are finally learning to respect colonial soldiers - largely because of you.",
                intelligence: {
                    enemyForces: "French at Fort Duquesne",
                    terrain: "Training grounds",
                    weather: "All seasons",
                    nativeRelations: "Some Native allies secured"
                },
                decisions: [
                    {
                        text: "Volunteer your regiment for the most dangerous assignments",
                        outcome: "Your eagerness for combat impresses British commanders. Your men gain experience in several skirmishes. Some casualties, but your reputation for courage grows.",
                        effects: { troops: -10, supplies: -15, morale: 10, reputation: 20 }
                    },
                    {
                        text: "Continue intensive training and preparation",
                        outcome: "By year's end, your Virginia Regiment can perform complex maneuvers and handle any weapon. British officers are astonished by your men's professionalism.",
                        effects: { troops: 5, supplies: -10, morale: 20, reputation: 15 }
                    },
                    {
                        text: "Focus on building alliances with Native tribes",
                        outcome: "You cultivate relationships with Cherokee and Catawba scouts. Their knowledge of French movements will prove invaluable in the coming campaign.",
                        effects: { troops: 10, supplies: -20, morale: 5, reputation: 15 }
                    }
                ]
            },
            {
                period: "Spring 1758",
                title: "The Forbes Expedition Begins",
                description: "Brigadier General John Forbes is launching a new campaign against Fort Duquesne. Unlike Braddock, Forbes values your counsel. He plans to build a road as he advances, ensuring supply lines - slow but methodical.",
                situation: "You advocate for using Braddock's old road, arguing speed is essential. Forbes insists on cutting a new road through Pennsylvania. It's frustrating, but you bite your tongue and do your duty.",
                intelligence: {
                    enemyForces: "Fort Duquesne garrison",
                    terrain: "Appalachian wilderness",
                    weather: "Spring rains",
                    nativeRelations: "Improving"
                },
                decisions: [
                    {
                        text: "Accept Forbes' plan and support road-building",
                        outcome: "You suppress your frustration and help build Forbes' road. Your professionalism is noted. The methodical approach avoids Braddock's mistakes.",
                        effects: { troops: 5, supplies: -20, morale: 5, reputation: 10 }
                    },
                    {
                        text: "Loudly argue for using Braddock's road",
                        outcome: "Your arguments create tension with Forbes and Pennsylvania authorities. You're technically insubordinate, but some agree with you. Forbes' plan proceeds anyway.",
                        effects: { troops: 0, supplies: -10, morale: -5, reputation: -5 }
                    },
                    {
                        text: "Lead advance scouts to gather intelligence",
                        outcome: "You volunteer for dangerous reconnaissance missions. Your scouts discover the French are weakening, their Native allies abandoning them. Crucial intelligence!",
                        effects: { troops: -5, supplies: -15, morale: 10, reputation: 20 }
                    }
                ]
            },
            {
                period: "Fall 1758",
                title: "The Advance on Fort Duquesne",
                description: "Forbes' army is finally approaching Fort Duquesne. Your scouts report the French garrison is weak - many of their Native allies have made peace with the British. But Forbes is ill and progress is slow.",
                situation: "Major Grant leads an unauthorized reconnaissance in force and is defeated. You're ordered to support the assault on Fort Duquesne. This time, unlike 1754, you have superior forces.",
                intelligence: {
                    enemyForces: "Weakened garrison",
                    terrain: "Familiar ground",
                    weather: "Cold November",
                    nativeRelations: "French allies deserting"
                },
                decisions: [
                    {
                        text: "Urge an immediate rapid advance",
                        outcome: "You convince Forbes to move quickly before winter. Your Virginia troops lead the advance. You're eager to redeem the defeat of 1754.",
                        effects: { troops: -5, supplies: -15, morale: 15, reputation: 15 }
                    },
                    {
                        text: "Proceed cautiously with full reconnaissance",
                        outcome: "You've learned from past mistakes. Your careful scouts map every approach. When you advance, you're fully prepared.",
                        effects: { troops: 0, supplies: -20, morale: 10, reputation: 10 }
                    },
                    {
                        text: "Send Native allies to negotiate French surrender",
                        outcome: "Your Native scouts offer the French a chance to withdraw. They refuse, but the negotiations reveal just how weak they are.",
                        effects: { troops: 0, supplies: -10, morale: 5, reputation: 15 }
                    }
                ]
            },
            {
                period: "November 1758",
                title: "Victory at Fort Duquesne",
                description: "November 25, 1758: As Forbes' army approaches, the French abandon and destroy Fort Duquesne rather than face defeat. You are among the first to enter the smoking ruins. After four years of war, the Ohio Valley is British!",
                situation: "The fort is destroyed, but the strategic position is secured. Forbes orders construction of Fort Pitt on the site. Your Virginia Regiment has served with honor. Your military education is complete.",
                intelligence: {
                    enemyForces: "Fled to Canada",
                    terrain: "Conquered territory",
                    weather: "Early winter",
                    nativeRelations: "Making peace"
                },
                decisions: [
                    {
                        text: "Lead your men in a victory celebration",
                        outcome: "You've waited four years for this moment. Your men celebrate their triumph. You've redeemed the defeats of 1754. The Ohio Valley is won!",
                        effects: { troops: 5, supplies: 0, morale: 25, reputation: 20 },
                        special: (state) => { state.battlesWon++; }
                    },
                    {
                        text: "Begin immediate construction of fortifications",
                        outcome: "Ever the professional, you set your men to work building Fort Pitt. There's no time for celebration - the position must be secured.",
                        effects: { troops: 0, supplies: -15, morale: 10, reputation: 15 },
                        special: (state) => { state.battlesWon++; }
                    },
                    {
                        text: "Meet with Native leaders to secure peace",
                        outcome: "You understand victory is incomplete without peace with the Native tribes. Your diplomacy secures treaties and shows wisdom beyond your years.",
                        effects: { troops: 0, supplies: -10, morale: 15, reputation: 25 },
                        special: (state) => { state.battlesWon++; }
                    }
                ]
            }
        ];
    }

    startGame() {
        document.getElementById('startScreen').classList.add('hidden');
        document.getElementById('gameScreen').classList.remove('hidden');
        this.state.round = 0;
        this.nextRound();
    }

    nextRound() {
        if (this.state.round >= this.events.length) {
            this.endGame();
            return;
        }

        const event = this.events[this.state.round];

        // Update display
        document.getElementById('round').textContent = this.state.round + 1;
        document.getElementById('period').textContent = event.period;
        document.getElementById('eventTitle').textContent = event.title;
        document.getElementById('eventDescription').textContent = event.description;
        document.getElementById('situationReport').innerHTML = `<strong>Situation:</strong> ${event.situation}`;

        // Update intelligence
        document.getElementById('enemyForces').textContent = event.intelligence.enemyForces;
        document.getElementById('terrain').textContent = event.intelligence.terrain;
        document.getElementById('weather').textContent = event.intelligence.weather;
        document.getElementById('nativeRelations').textContent = event.intelligence.nativeRelations;

        // Update stats
        this.updateStats();

        // Create decision buttons
        const buttonContainer = document.getElementById('decisionButtons');
        buttonContainer.innerHTML = '';

        event.decisions.forEach((decision, index) => {
            const button = document.createElement('button');
            button.className = 'btn-decision';
            button.textContent = decision.text;
            button.onclick = () => this.makeDecision(index);
            buttonContainer.appendChild(button);
        });

        this.addLog(`Turn ${this.state.round + 1}: ${event.title}`, 'event');
    }

    makeDecision(decisionIndex) {
        const event = this.events[this.state.round];
        const decision = event.decisions[decisionIndex];

        // Apply effects
        this.state.troops = Math.max(0, this.state.troops + (decision.effects.troops || 0));
        this.state.supplies = Math.max(0, this.state.supplies + (decision.effects.supplies || 0));
        this.state.morale = Math.max(0, Math.min(100, this.state.morale + (decision.effects.morale || 0)));
        this.state.reputation = Math.max(0, Math.min(100, this.state.reputation + (decision.effects.reputation || 0)));

        // Apply special effects
        if (decision.special) {
            decision.special(this.state);
        }

        // Show outcome
        this.addLog(decision.outcome, 'outcome');

        // Show effects
        if (decision.effects.troops) {
            this.addLog(`Troops: ${decision.effects.troops > 0 ? '+' : ''}${decision.effects.troops}`,
                       decision.effects.troops > 0 ? 'gain' : 'loss');
        }
        if (decision.effects.supplies) {
            this.addLog(`Supplies: ${decision.effects.supplies > 0 ? '+' : ''}${decision.effects.supplies}`,
                       decision.effects.supplies > 0 ? 'gain' : 'loss');
        }
        if (decision.effects.morale) {
            this.addLog(`Morale: ${decision.effects.morale > 0 ? '+' : ''}${decision.effects.morale}%`,
                       decision.effects.morale > 0 ? 'gain' : 'loss');
        }
        if (decision.effects.reputation) {
            this.addLog(`Reputation: ${decision.effects.reputation > 0 ? '+' : ''}${decision.effects.reputation}`,
                       decision.effects.reputation > 0 ? 'gain' : 'loss');
        }

        // Update display
        this.updateStats();

        // Check for game over
        if (this.state.troops <= 0 || this.state.morale <= 0) {
            this.gameOver();
            return;
        }

        // Advance round
        this.state.round++;

        // Show continue button
        const buttonContainer = document.getElementById('decisionButtons');
        buttonContainer.innerHTML = '<button class="btn-advance" onclick="game.nextRound()">Continue to Next Turn →</button>';
    }

    updateStats() {
        document.getElementById('troops').textContent = Math.round(this.state.troops);
        document.getElementById('supplies').textContent = Math.round(this.state.supplies);
        document.getElementById('morale').textContent = Math.round(this.state.morale);
        document.getElementById('reputation').textContent = Math.round(this.state.reputation);

        // Color coding for morale
        const moraleElement = document.querySelector('.stat.morale .stat-value');
        if (this.state.morale < 30) {
            moraleElement.style.color = '#c41e3a';
        } else if (this.state.morale < 60) {
            moraleElement.style.color = '#ff8c00';
        } else {
            moraleElement.style.color = '#2d5016';
        }
    }

    addLog(message, type = 'normal') {
        const logContainer = document.getElementById('logMessages');
        const entry = document.createElement('div');
        entry.className = `log-entry log-${type}`;
        entry.textContent = message;
        logContainer.insertBefore(entry, logContainer.firstChild);

        // Keep only last 20 entries
        while (logContainer.children.length > 20) {
            logContainer.removeChild(logContainer.lastChild);
        }
    }

    gameOver() {
        document.getElementById('gameScreen').classList.add('hidden');
        document.getElementById('endScreen').classList.remove('hidden');

        document.getElementById('endTitle').textContent = 'Campaign Failed';
        document.getElementById('endMessage').innerHTML = `
            <p>Your campaign has ended in defeat. Your forces have been destroyed or your command has collapsed.</p>
            <p>History remembers that George Washington learned from his early defeats to become one of history's greatest commanders.</p>
        `;

        document.getElementById('finalTroops').textContent = Math.round(this.state.troops);
        document.getElementById('finalMorale').textContent = Math.round(this.state.morale) + '%';
        document.getElementById('finalReputation').textContent = Math.round(this.state.reputation);
        document.getElementById('battlesWon').textContent = this.state.battlesWon;
        document.getElementById('finalGrade').textContent = 'F - Defeated';

        document.getElementById('historicalContext').textContent =
            "In reality, Washington survived his early defeats and learned valuable lessons that would serve him well as Commander-in-Chief of the Continental Army during the American Revolution.";
    }

    endGame() {
        document.getElementById('gameScreen').classList.add('hidden');
        document.getElementById('endScreen').classList.remove('hidden');

        // Calculate grade
        let score = this.state.troops + this.state.morale + this.state.reputation + (this.state.battlesWon * 20);
        let grade, message;

        if (score >= 300) {
            grade = 'A - Legendary Commander';
            message = 'Outstanding! Your brilliant leadership during the French and Indian War has made you a colonial hero. Your reputation will serve you well in the years to come.';
        } else if (score >= 250) {
            grade = 'B - Skilled Commander';
            message = 'Well done! You navigated the challenges of wilderness warfare with skill. Your experience will prove invaluable in future conflicts.';
        } else if (score >= 200) {
            grade = 'C - Competent Officer';
            message = 'You completed your service with honor. While not without setbacks, you gained valuable military experience.';
        } else {
            grade = 'D - Struggling Commander';
            message = 'Your campaign was difficult, with heavy losses. However, you survived and learned hard lessons about warfare.';
        }

        document.getElementById('endTitle').textContent = 'Campaign Complete!';
        document.getElementById('endMessage').innerHTML = `<p>${message}</p>`;

        document.getElementById('finalTroops').textContent = Math.round(this.state.troops);
        document.getElementById('finalMorale').textContent = Math.round(this.state.morale) + '%';
        document.getElementById('finalReputation').textContent = Math.round(this.state.reputation);
        document.getElementById('battlesWon').textContent = this.state.battlesWon;
        document.getElementById('finalGrade').textContent = grade;

        document.getElementById('historicalContext').textContent =
            "George Washington's experiences in the French and Indian War shaped him into the leader who would command the Continental Army during the American Revolution. His early defeats taught him humility, patience, and the importance of strategic retreat. His successes gave him confidence and fame. By 1775, he was the natural choice to lead America's fight for independence.";
    }
}

// Initialize game
const game = new WarGame();
