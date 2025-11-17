// Paul Revere's Midnight Ride - Game Engine

class MidnightRideGame {
    constructor() {
        this.state = {
            round: 0,
            time: "9:00 PM",
            warnings: 0,
            risk: "Low",
            success: 0,
            companions: [],
            visitedLocations: [],
            currentLocation: "boston",
            captured: false,
            missionComplete: false,
            choices: [] // Track player choices
        };

        this.rounds = [
            {
                round: 1,
                time: "9:00 PM",
                location: "Boston - Your Home",
                emoji: "🏠",
                title: "The Warning Arrives",
                story: "Dr. Joseph Warren's urgent message has just arrived: British regulars are preparing to march tonight to Lexington and Concord! They plan to arrest Samuel Adams and John Hancock, and seize the colonial militia's weapons stores. You must act quickly, but carefully. How do you prepare?",
                choices: [
                    {
                        text: "Rush immediately to get your boots and coat - every second counts!",
                        consequence: "You leave quickly but forget some supplies. Speed is crucial tonight.",
                        effects: { success: 5, risk: "Medium" },
                        logMessage: "Departed swiftly with minimal preparation",
                        logType: "warning"
                    },
                    {
                        text: "Take a few minutes to gather riding gear and alert your family",
                        consequence: "You're well prepared and your family knows your mission. A wise choice.",
                        effects: { success: 10, risk: "Low" },
                        logMessage: "Prepared thoroughly for the journey ahead",
                        logType: "success"
                    },
                    {
                        text: "Send word to William Dawes and coordinate a dual warning system",
                        consequence: "Excellent strategy! Dawes will take the land route while you go by sea. Redundancy increases success.",
                        effects: { success: 15, risk: "Low", companion: "William Dawes (separate route)" },
                        logMessage: "Coordinated with William Dawes for backup route",
                        logType: "success"
                    }
                ]
            },
            {
                round: 2,
                time: "9:30 PM",
                location: "Old North Church",
                emoji: "⛪",
                title: "The Signal",
                story: "You've reached the Old North Church where sexton Robert Newman awaits. The signal lanterns must be hung in the steeple to warn the Charlestown patriots across the river about the British route. The famous code: 'One if by land, two if by sea.' British soldiers are patrolling nearby.",
                choices: [
                    {
                        text: "Signal 'One if by land' - British are marching over Boston Neck",
                        consequence: "The signal is wrong! British are crossing the Charles River by boat. Confusion spreads in Charlestown.",
                        effects: { success: -10, risk: "High" },
                        logMessage: "Sent incorrect signal - one lantern",
                        logType: "danger"
                    },
                    {
                        text: "Signal 'Two if by sea' - British are crossing the Charles by boat",
                        consequence: "Perfect! Two lanterns shine in the steeple. Charlestown patriots now know the British route!",
                        effects: { success: 15, warnings: 1, risk: "Medium" },
                        logMessage: "Successfully signaled: Two if by sea!",
                        logType: "success"
                    },
                    {
                        text: "Wait and verify British movements before signaling",
                        consequence: "Your caution delays the warning. Every minute counts! But you're certain of accuracy.",
                        effects: { success: 5, risk: "Medium" },
                        logMessage: "Delayed signal for verification",
                        logType: "warning"
                    }
                ]
            },
            {
                round: 3,
                time: "10:00 PM",
                location: "Charles River Crossing",
                emoji: "🚣",
                title: "Crossing the Charles",
                story: "Two friends row you across the Charles River toward Charlestown in a small boat. The night is clear, and the moon reflects off the water. The British warship HMS Somerset patrols the river. You can see its massive silhouette in the darkness. One wrong move could alert the crew.",
                choices: [
                    {
                        text: "Row quickly and directly - speed is essential!",
                        consequence: "Your splashing oars catch attention! A British sailor calls out, but you're too far to identify. Heart pounding, you make it across.",
                        effects: { success: 5, risk: "High" },
                        logMessage: "Nearly detected during river crossing",
                        logType: "danger"
                    },
                    {
                        text: "Row quietly, staying in the moon shadow of the Somerset",
                        consequence: "Brilliant! Using the warship's own shadow for cover, you slip past undetected.",
                        effects: { success: 15, risk: "Low" },
                        logMessage: "Crossed river stealthily in ship's shadow",
                        logType: "success"
                    },
                    {
                        text: "Wait for the tide to change and make crossing easier",
                        consequence: "The tide helps, but precious time is lost. The British march continues while you wait.",
                        effects: { success: 0, risk: "Low" },
                        logMessage: "Waited for tide - time lost",
                        logType: "warning"
                    }
                ]
            },
            {
                round: 4,
                time: "10:15 PM",
                location: "Charlestown",
                emoji: "🐴",
                title: "A Horse for the Ride",
                story: "You've reached Charlestown! The local patriots, warned by the lantern signal, are ready to help. They offer you 'Brown Beauty,' a powerful horse owned by Deacon John Larkin. Some suggest warning local militia leaders before you ride. What's your priority?",
                choices: [
                    {
                        text: "Mount Brown Beauty immediately and ride for Lexington",
                        consequence: "You're off! The fastest horse in Charlestown carries you into the night. The wind whips past as you gallop.",
                        effects: { success: 10, risk: "Medium", location: "charlestown" },
                        logMessage: "Mounted Brown Beauty and departed swiftly",
                        logType: "success"
                    },
                    {
                        text: "Take 10 minutes to brief Charlestown militia leaders first",
                        consequence: "The militia is now organized and ready. Your warning multiplies as they spread the word locally. Time well spent.",
                        effects: { success: 15, warnings: 2, risk: "Low", location: "charlestown" },
                        logMessage: "Organized Charlestown militia before departing",
                        logType: "success"
                    },
                    {
                        text: "Request additional riders to multiply the warning",
                        consequence: "Three local riders volunteer! Now multiple messengers ride to different towns. Excellent thinking!",
                        effects: { success: 20, warnings: 3, companion: "Charlestown riders", risk: "Low", location: "charlestown" },
                        logMessage: "Recruited additional riders to spread warning",
                        logType: "success"
                    }
                ]
            },
            {
                round: 5,
                time: "10:45 PM",
                location: "The Countryside",
                emoji: "🌙",
                title: "The Midnight Ride Begins",
                story: "You're racing through the countryside under the April moon. Every farm, every house must be warned. You approach a fork in the road: the main road through Medford is faster but more exposed. The back roads are safer but slower. British patrols could be anywhere.",
                choices: [
                    {
                        text: "Take the main road through Medford - speed is crucial!",
                        consequence: "You thunder through Medford, shouting warnings at every door: 'The regulars are coming out!' Shutters open, alarm spreads!",
                        effects: { success: 15, warnings: 5, risk: "High", location: "medford" },
                        logMessage: "Warned Medford on main road",
                        logType: "success"
                    },
                    {
                        text: "Use the back roads, warning isolated farms",
                        consequence: "Slower progress, but farmers and minutemen in the countryside are now alerted. No town is an island.",
                        effects: { success: 10, warnings: 3, risk: "Low" },
                        logMessage: "Warned countryside farms via back roads",
                        logType: "success"
                    },
                    {
                        text: "Split the difference - main road but stop at key houses only",
                        consequence: "A balanced approach. You warn militia captains and local leaders who can spread the alarm efficiently.",
                        effects: { success: 12, warnings: 4, risk: "Medium" },
                        logMessage: "Warned key militia leaders strategically",
                        logType: "success"
                    }
                ]
            },
            {
                round: 6,
                time: "11:15 PM",
                location: "Near Lexington",
                emoji: "⚠️",
                title: "British Patrol Spotted!",
                story: "Suddenly, you see them ahead - two mounted British officers blocking the road! They're part of a patrol sent to intercept messengers like you. Your horse slows as they move to surround you. One officer shouts 'Halt in the King's name!' Your heart races. What do you do?",
                choices: [
                    {
                        text: "Spur your horse and try to outrun them!",
                        consequence: "Brown Beauty is fast! You veer off the road into a field. The officers give chase but you know this terrain better. You escape, but they know someone is warning the countryside now.",
                        effects: { success: 10, risk: "Very High" },
                        logMessage: "Evaded British patrol by speed!",
                        logType: "success"
                    },
                    {
                        text: "Turn around and take an alternate route",
                        consequence: "Smart thinking! You retreat and circle around via a farm road. The patrol waits on the main road while you bypass them completely.",
                        effects: { success: 15, risk: "Medium" },
                        logMessage: "Avoided patrol by alternate route",
                        logType: "success"
                    },
                    {
                        text: "Approach slowly and try to talk your way through",
                        consequence: "Risky! They're suspicious and ask questions. You claim to be a farmer heading home, but they're not convinced. They detain you briefly before you break away!",
                        effects: { success: 0, risk: "Very High" },
                        logMessage: "Detained briefly by British patrol",
                        logType: "danger"
                    }
                ]
            },
            {
                round: 7,
                time: "11:45 PM",
                location: "Lexington Approaches",
                emoji: "🏘️",
                title: "The Road to Lexington",
                story: "You're approaching Lexington where Samuel Adams and John Hancock are staying at Reverend Jonas Clarke's house. The town militia is scattered - about 80 minutemen live here. Captain John Parker's leadership will be crucial. How do you make your warning count?",
                choices: [
                    {
                        text: "Ride straight to Clarke's house to warn Adams and Hancock",
                        consequence: "You reach the house and pound on the door. The sergeant guards are wary, but they let you in. Adams and Hancock are warned - primary mission accomplished!",
                        effects: { success: 25, warnings: 2, risk: "Medium" },
                        logMessage: "Successfully warned Adams and Hancock!",
                        logType: "success"
                    },
                    {
                        text: "First wake Captain Parker and gather the militia on the Common",
                        consequence: "Captain Parker orders the drum beat! Minutemen rush from their homes with muskets. The militia forms up on the Lexington Green, ready to face the British.",
                        effects: { success: 20, warnings: 3, risk: "Medium", companion: "Lexington Militia" },
                        logMessage: "Assembled Lexington militia under Captain Parker",
                        logType: "success"
                    },
                    {
                        text: "Quickly warn both - Adams/Hancock first, then the militia",
                        consequence: "Racing between locations, you ensure both the VIPs and the militia are warned. Thorough but exhausting!",
                        effects: { success: 30, warnings: 5, risk: "High", location: "lexington" },
                        logMessage: "Warned both leaders and militia in Lexington",
                        logType: "success"
                    }
                ]
            },
            {
                round: 8,
                time: "12:30 AM",
                location: "Lexington",
                emoji: "🤝",
                title: "Two More Riders",
                story: "As you prepare to ride to Concord, two other messengers arrive: William Dawes (who took the land route) and a young doctor named Samuel Prescott (who lives in Concord). Prescott knows every back road and farm between here and Concord. The three of you could ride together or split up.",
                choices: [
                    {
                        text: "Ride together - three riders are better than one!",
                        consequence: "The three of you gallop toward Concord, stopping to warn houses along the way. Strength in numbers!",
                        effects: { success: 15, warnings: 4, companion: "William Dawes, Samuel Prescott", risk: "Medium" },
                        logMessage: "Riding toward Concord with Dawes and Prescott",
                        logType: "success"
                    },
                    {
                        text: "Split up to warn more territory - you take the main road",
                        consequence: "Good strategy! Three separate routes mean more warnings. You head for Concord on the main road while they take alternate paths.",
                        effects: { success: 20, warnings: 6, risk: "High" },
                        logMessage: "Split up to maximize warning coverage",
                        logType: "success"
                    },
                    {
                        text: "Let Prescott lead - he knows Concord best",
                        consequence: "Wise choice! Prescott knows every shortcut. You follow his lead, warning farms efficiently as you ride.",
                        effects: { success: 18, warnings: 5, companion: "Samuel Prescott (leading)", risk: "Low" },
                        logMessage: "Following Prescott's local knowledge",
                        logType: "success"
                    }
                ]
            },
            {
                round: 9,
                time: "1:00 AM",
                location: "Between Lexington and Concord",
                emoji: "🚨",
                title: "Ambush!",
                story: "Disaster! You ride into a trap - four British officers emerge from the shadows! They were waiting for messengers. 'Stop! If you go an inch further, you are a dead man!' one shouts. Prescott and Dawes react instantly - Prescott jumps his horse over a stone wall and escapes! Dawes turns back. You're surrounded. This is the moment.",
                choices: [
                    {
                        text: "Try to break through like Prescott did!",
                        consequence: "You spur your horse toward a gap, but the officers are ready. They grab Brown Beauty's reins. You're captured, but your mission was not in vain - Prescott escaped and will warn Concord!",
                        effects: { success: -5, risk: "Captured" },
                        logMessage: "Captured by British patrol near Lincoln",
                        logType: "danger",
                        captured: true
                    },
                    {
                        text: "Surrender but loudly proclaim the alarm is already spread",
                        consequence: "'I have alarmed the country all the way up!' you declare. 'Five hundred men are assembled!' You're caught, but your defiant words worry the officers. The psychological war continues.",
                        effects: { success: 10, risk: "Captured" },
                        logMessage: "Captured but warned British of assembled militia",
                        logType: "warning",
                        captured: true
                    },
                    {
                        text: "Stall and negotiate while Prescott gets away",
                        consequence: "You talk and delay, giving Prescott precious time to reach Concord. The officers grow impatient with your stories, but Prescott is now too far ahead to catch.",
                        effects: { success: 15, risk: "Captured" },
                        logMessage: "Sacrificed freedom to ensure Prescott reached Concord",
                        logType: "success",
                        captured: true
                    }
                ]
            },
            {
                round: 10,
                time: "Dawn - April 19, 1775",
                location: "Lexington Green",
                emoji: "🌅",
                title: "The Shot Heard 'Round the World",
                story: "The British patrol eventually released you (without your horse) after hearing gunfire ahead. You make your way back toward Lexington on foot. At dawn, you witness history: British regulars face Captain Parker's militia on Lexington Green. 'Stand your ground!' Parker orders. 'Don't fire unless fired upon, but if they mean to have a war, let it begin here!' A shot rings out. Then volleys. Eight militiamen fall. The American Revolution has begun. Your midnight ride saved Adams and Hancock, assembled the militia, and alerted the countryside. The weapons at Concord are being moved to safety even now, thanks to Prescott's warning.",
                choices: [
                    {
                        text: "Rush to help the wounded militiamen",
                        consequence: "You aid the fallen patriots as the British march toward Concord. Your ride saved countless lives by preparing the countryside. The price of liberty has begun.",
                        effects: { success: 10, warnings: 2 },
                        logMessage: "Tended to wounded at Lexington Green",
                        logType: "success"
                    },
                    {
                        text: "Follow the British column toward Concord to observe",
                        consequence: "You shadow the British forces. At Concord, the militia is ready - warned by Prescott! The 'shot heard round the world' at North Bridge sends the British retreating. Your mission was a complete success!",
                        effects: { success: 20, warnings: 3 },
                        logMessage: "Witnessed the British retreat from Concord",
                        logType: "success",
                        missionComplete: true
                    },
                    {
                        text: "Return to Boston to report to Dr. Warren and the patriots",
                        consequence: "You bring news of the day's events to the patriot leaders. War has begun, but the colonies are ready - because riders like you sounded the alarm. History will remember this night.",
                        effects: { success: 15, warnings: 2 },
                        logMessage: "Reported to patriot leadership in Boston",
                        logType: "success",
                        missionComplete: true
                    }
                ]
            }
        ];
    }

    startGame() {
        document.getElementById('startScreen').classList.add('hidden');
        document.getElementById('gameScreen').classList.remove('hidden');
        this.loadRound();
    }

    loadRound() {
        this.state.round++;

        if (this.state.round > 10) {
            this.endGame();
            return;
        }

        const roundData = this.rounds[this.state.round - 1];

        // Update state
        this.state.time = roundData.time;

        // Update UI
        document.getElementById('round').textContent = this.state.round;
        document.getElementById('time').textContent = this.state.time;
        document.getElementById('locationTitle').textContent = roundData.location;
        document.getElementById('storyImage').textContent = roundData.emoji;

        // Update story
        const storyHTML = `
            <h3>${roundData.title}</h3>
            <p>${roundData.story}</p>
        `;
        document.getElementById('storyText').innerHTML = storyHTML;

        // Hide consequence from previous round
        document.getElementById('consequence').classList.add('hidden');

        // Load choices
        this.loadChoices(roundData.choices);

        // Update location on map
        if (roundData.location) {
            this.updateMap(this.state.currentLocation);
        }

        // Add log entry
        this.addLog(`Round ${this.state.round}: ${roundData.title}`, 'warning');
    }

    loadChoices(choices) {
        const container = document.getElementById('choicesContainer');
        container.innerHTML = '';

        choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'choice-button';
            button.textContent = choice.text;
            button.onclick = () => this.makeChoice(index);
            container.appendChild(button);
        });
    }

    makeChoice(choiceIndex) {
        const roundData = this.rounds[this.state.round - 1];
        const choice = roundData.choices[choiceIndex];

        // Store choice
        this.state.choices.push({
            round: this.state.round,
            choice: choice.text
        });

        // Apply effects
        if (choice.effects.success) {
            this.state.success += choice.effects.success;
        }
        if (choice.effects.warnings) {
            this.state.warnings += choice.effects.warnings;
        }
        if (choice.effects.risk) {
            this.state.risk = choice.effects.risk;
        }
        if (choice.effects.companion) {
            this.state.companions.push(choice.effects.companion);
        }
        if (choice.effects.location) {
            this.state.currentLocation = choice.effects.location;
            this.state.visitedLocations.push(choice.effects.location);
        }
        if (choice.captured) {
            this.state.captured = true;
        }
        if (choice.missionComplete) {
            this.state.missionComplete = true;
        }

        // Show consequence
        const consequenceDiv = document.getElementById('consequence');
        consequenceDiv.textContent = choice.consequence;
        consequenceDiv.classList.remove('hidden', 'success', 'warning', 'danger');

        if (choice.logType === 'success') {
            consequenceDiv.classList.add('success');
        } else if (choice.logType === 'warning') {
            consequenceDiv.classList.add('warning');
        } else if (choice.logType === 'danger') {
            consequenceDiv.classList.add('danger');
        }

        // Add to log
        this.addLog(choice.logMessage, choice.logType);

        // Update display
        this.updateDisplay();

        // Disable all choice buttons and add continue button
        const container = document.getElementById('choicesContainer');
        const buttons = container.querySelectorAll('.choice-button');
        buttons.forEach(btn => btn.disabled = true);

        // Add continue button
        const continueBtn = document.createElement('button');
        continueBtn.className = 'btn-primary';
        continueBtn.textContent = this.state.round < 10 ? 'Continue Your Ride →' : 'See the Dawn →';
        continueBtn.style.marginTop = '20px';
        continueBtn.onclick = () => this.loadRound();
        container.appendChild(continueBtn);
    }

    updateDisplay() {
        document.getElementById('warnings').textContent = this.state.warnings;
        document.getElementById('risk').textContent = this.state.risk;
        document.getElementById('success').textContent = Math.max(0, Math.min(100, this.state.success));

        // Update companions
        this.updateCompanions();
    }

    updateCompanions() {
        const container = document.getElementById('companionsList');
        if (this.state.companions.length === 0) {
            container.innerHTML = '<div class="companion">Riding alone...</div>';
        } else {
            container.innerHTML = '';
            this.state.companions.forEach(companion => {
                const div = document.createElement('div');
                div.className = 'companion active';
                div.textContent = companion;
                container.appendChild(div);
            });
        }
    }

    updateMap(location) {
        const mapPoints = document.querySelectorAll('.map-point');

        mapPoints.forEach(point => {
            const loc = point.getAttribute('data-location');

            if (loc === location) {
                point.classList.add('current');
                point.classList.remove('visited');
            } else if (this.state.visitedLocations.includes(loc)) {
                point.classList.add('visited');
                point.classList.remove('current');
            }
        });
    }

    addLog(message, type = '') {
        const logMessages = document.getElementById('logMessages');
        const entry = document.createElement('div');
        entry.className = `log-entry ${type}`;
        entry.textContent = message;
        logMessages.insertBefore(entry, logMessages.firstChild);

        // Keep only last 30 messages
        while (logMessages.children.length > 30) {
            logMessages.removeChild(logMessages.lastChild);
        }
    }

    endGame() {
        // Hide game screen
        document.getElementById('gameScreen').classList.add('hidden');
        document.getElementById('endScreen').classList.remove('hidden');

        // Calculate final stats
        const finalSuccess = Math.max(0, Math.min(100, this.state.success));

        // Update end screen
        document.getElementById('finalWarnings').textContent = this.state.warnings;
        document.getElementById('finalSuccess').textContent = finalSuccess + '%';
        document.getElementById('finalTime').textContent = this.state.time;
        document.getElementById('finalCompanions').textContent = this.state.companions.length;

        // Generate end message
        let message = '';

        if (finalSuccess >= 80) {
            message += '<p><strong>🌟 Outstanding Success! 🌟</strong></p>';
            message += '<p>Your midnight ride was legendary! You warned the countryside, saved Adams and Hancock, and prepared the militia for battle. The British regulars found an aroused and ready people. Your courage and quick thinking changed the course of history!</p>';
        } else if (finalSuccess >= 60) {
            message += '<p><strong>⭐ Great Success! ⭐</strong></p>';
            message += '<p>Your ride accomplished its mission! The warnings spread throughout the countryside, and the militia assembled to face the British. Though the journey was perilous, your determination ensured the patriots were ready for the coming conflict.</p>';
        } else if (finalSuccess >= 40) {
            message += '<p><strong>✓ Mission Accomplished</strong></p>';
            message += '<p>Despite challenges and obstacles, you managed to warn key leaders and militia. The countryside was alerted, and the cause of liberty advanced. Every patriot\'s contribution matters, and yours was vital!</p>';
        } else {
            message += '<p><strong>The Ride Continues</strong></p>';
            message += '<p>Your journey was difficult, and not everything went as planned. However, you were not alone - other riders like William Dawes and Samuel Prescott carried the warning forward. The spirit of liberty cannot be stopped by any single setback!</p>';
        }

        if (this.state.captured) {
            message += '<p><strong>⚔️ Captured but Unbowed:</strong> Though British patrol captured you, your mission succeeded. The warnings you spread could not be unspoken, the militia you roused could not be dispersed. Your sacrifice bought time for liberty!</p>';
        }

        if (this.state.warnings >= 15) {
            message += '<p><strong>🔔 Master Messenger:</strong> You warned an exceptional number of towns and individuals. Your thorough approach ensured the alarm spread far and wide!</p>';
        }

        if (this.state.companions.length >= 3) {
            message += '<p><strong>🤝 United We Stand:</strong> You rallied multiple riders to the cause. By coordinating with others, you multiplied the impact of the warning!</p>';
        }

        if (this.state.missionComplete) {
            message += '<p><strong>🏆 Complete Victory:</strong> Adams and Hancock escaped, the militia was ready, and the weapons at Concord were saved. Your mission was a complete success!</p>';
        }

        message += '<p class="historical-note" style="margin-top: 20px; padding: 15px; background: rgba(139, 105, 20, 0.2); border-left: 3px solid #daa520; border-radius: 5px;">⚠️ The events of April 18-19, 1775, marked the beginning of the American Revolutionary War. Paul Revere\'s midnight ride, along with the rides of William Dawes and Samuel Prescott, ensured that the colonial militia was prepared to face the British regulars at Lexington and Concord. These "embattled farmers" fired the "shot heard \'round the world," beginning America\'s fight for independence.</p>';

        document.getElementById('endMessage').innerHTML = message;
    }
}

// Initialize game
const game = new MidnightRideGame();
