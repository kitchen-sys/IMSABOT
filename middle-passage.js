// Middle Passage Game - Historical Educational Experience
// A respectful portrayal of the transatlantic slave trade

class MiddlePassageGame {
    constructor() {
        this.round = 1;
        this.maxRounds = 10;
        this.stats = {
            hope: 100,
            strength: 100,
            spirit: 100,
            days: 0
        };

        this.scenarios = this.createScenarios();
        this.currentScenario = null;
    }

    createScenarios() {
        return [
            {
                // Round 1: The Capture
                title: "The Raid",
                location: "Village in West Africa",
                date: "Spring 1755",
                story: `
                    <p>Your name is Adisa, which means "one who is clear" in your language. You are 19 years old, living in a peaceful farming village near the coast. Your days are filled with helping your family tend crops, learning stories from the elders, and preparing for your upcoming marriage.</p>

                    <p>Tonight, you wake to screams and the smell of smoke. Armed raiders—some from rival kingdoms, working with European slave traders—burst into your home. Your father tries to resist and is struck down. Your mother cries out as you are dragged away, along with dozens of others from your village.</p>

                    <p>Bound with ropes, you are forced to march toward the coast. You don't know it yet, but you will never see your home or family again.</p>
                `,
                historicalNote: "African slavery existed before European contact, but the transatlantic slave trade created unprecedented demand. European traders rarely raided villages themselves; instead, they traded guns and goods with coastal kingdoms who conducted raids inland. This trade disrupted entire regions, fueling warfare and devastation across West and Central Africa.",
                choices: [
                    {
                        text: "Try to remember every detail of home—the faces, the songs, the land—so you never forget who you are.",
                        effects: { hope: -5, spirit: +5, days: 3 },
                        result: "You close your eyes and commit every memory to your heart. Though your body has been captured, you vow that your spirit and your identity remain your own. The memories hurt, but they also give you strength."
                    },
                    {
                        text: "Focus on surviving this moment. Don't think about what you've lost—only what's ahead.",
                        effects: { hope: -10, strength: +5, days: 3 },
                        result: "You force yourself to stop looking back. The pain is too much. You must survive whatever comes next. The emotional numbness helps you endure the march, but something inside feels hollow."
                    },
                    {
                        text: "Watch for any chance to escape, studying your captors' movements and the terrain.",
                        effects: { hope: -5, strength: -5, spirit: +5, days: 3 },
                        result: "You observe everything carefully, looking for weaknesses. But the raiders are experienced, and escape attempts you witness end with brutal beatings or death. Still, you refuse to give up the idea of freedom."
                    }
                ]
            },
            {
                // Round 2: The March
                title: "The Coffle March",
                location: "Interior of West Africa",
                date: "Several Weeks Later",
                story: `
                    <p>You have been walking for weeks, connected to other captives by heavy wooden yokes around your necks. You are given barely enough food and water to survive. The terrain is harsh, and the pace is relentless.</p>

                    <p>Several people have already died—from exhaustion, disease, or punishment for trying to resist. Their bodies are left by the roadside. You pass through villages where people watch in silence, some in pity, some in fear that they might be next.</p>

                    <p>An elderly man ahead of you stumbles and falls. The raiders shout at him to get up, raising their whips.</p>
                `,
                historicalNote: "The forced march to the coast, called a 'coffle,' could last weeks or even months and cover hundreds of miles. Captives were chained or yoked together. Mortality during these marches was high—perhaps 10-15% died before ever reaching the coast. These marches passed through many kingdoms and villages, creating widespread trauma throughout African societies.",
                choices: [
                    {
                        text: "Help the elderly man to his feet, risking punishment yourself.",
                        effects: { hope: -5, strength: -10, spirit: +10 },
                        result: "You and others nearby help lift the man. A raider strikes you across the back with his whip, but the man survives another day. That night, he whispers his thanks and shares his name. In this hell, you've preserved a bit of your humanity."
                    },
                    {
                        text: "Lower your eyes and keep moving, knowing you can't afford to draw attention.",
                        effects: { hope: -10, spirit: -5, days: 7 },
                        result: "You force yourself to look away as the raiders beat the man. He eventually struggles to his feet, but you feel a piece of yourself die inside. Survival comes at a cost."
                    },
                    {
                        text: "Quietly pray for him and for all of you, holding onto your faith.",
                        effects: { hope: +5, strength: -5, spirit: +5, days: 7 },
                        result: "You whisper prayers under your breath—to your ancestors, to the spirits, to any power that might still protect you. The prayers don't stop the suffering, but they remind you that you are still human, still connected to something greater."
                    }
                ]
            },
            {
                // Round 3: The Slave Fort
                title: "The Barracoon",
                location: "Elmina Castle, Gold Coast",
                date: "Two Months After Capture",
                story: `
                    <p>You arrive at a massive stone fortress on the coast—a slave castle where captives are held before being sold to European ships. You are forced into a dark, overcrowded dungeon called a barracoon, with dozens of others packed into a space meant for far fewer.</p>

                    <p>The floor is covered in human waste. The air is thick and suffocating. Disease spreads quickly. Through small windows, you can hear waves crashing and see glimpses of the ocean—a vast expanse of water you never knew existed.</p>

                    <p>You've been here for weeks. Each day, some captives are taken away. You hear they are being examined, branded with hot irons, and sold to the pale-skinned men who arrive on enormous ships.</p>
                `,
                historicalNote: "Slave castles (factories) like Elmina, Cape Coast, and Gorée Island were European trading posts along the African coast. Captives were held in horrific dungeons—sometimes for months—while awaiting sale to ship captains. The castles had luxurious quarters for European traders above, while thousands suffered in dungeons below. Many of these castles still stand today as museums and memorials.",
                choices: [
                    {
                        text: "Try to comfort others around you, sharing what little hope you have left.",
                        effects: { hope: -5, strength: -5, spirit: +10 },
                        result: "You hold the hand of a young girl who won't stop crying. You sing her a song from your childhood, and others join in softly. For a moment, in this darkness, you create light together. The guards shout at you to be quiet, but they cannot silence what you've awakened."
                    },
                    {
                        text: "Withdraw into yourself, using numbness as protection against the horror.",
                        effects: { hope: -15, strength: +5, spirit: -10 },
                        result: "You stare at the wall and let your mind drift away from your body. You barely eat, barely speak. When they come to take you to the ship, you walk like you're in a dream. The pain is distant now, but so is everything else."
                    },
                    {
                        text: "Listen carefully to the different languages around you, trying to communicate and understand what's happening.",
                        effects: { hope: -5, strength: -10, spirit: +5, days: 21 },
                        result: "You realize people here come from many different kingdoms and speak many languages. Slowly, you learn words and phrases, piecing together information. Knowledge is a form of power. You learn that you're being sold to cross the great water to a place they call 'the Americas.'"
                    }
                ]
            },
            {
                // Round 4: The Loading
                title: "Into the Ship",
                location: "Slave Ship 'Brotherhood' - Harbor",
                date: "Three Months After Capture",
                story: `
                    <p>Today you are dragged from the dungeon. Europeans examine you like livestock—checking your teeth, your muscles, your body. A hot iron presses against your skin, marking you with the ship owner's brand. The pain is excruciating, but you refuse to cry out.</p>

                    <p>You are forced into small boats and rowed out to a massive ship anchored in the harbor. The ship is called the 'Brotherhood'—a cruel irony that you will only understand later.</p>

                    <p>The smell hits you first—death, disease, and despair. You are taken below deck into a space so low you cannot stand. Hundreds of people are already there, packed so tightly that there is barely room to breathe. You are shackled to the person next to you and forced to lie on rough wooden planks.</p>

                    <p>This will be your existence for the next two months.</p>
                `,
                historicalNote: "Slave ships were designed to maximize profit by packing as many captives as possible into the hold. The space per person was typically 6 feet long by 16 inches wide—less space than a coffin. Captives were shackled and forced to lie in their own waste. Ships typically carried 300-600 enslaved people, though some carried over 700. The mortality rate during the Middle Passage averaged 15-20%, though some voyages saw 50% or higher death rates.",
                choices: [
                    {
                        text: "Introduce yourself to the person shackled beside you, creating a bond that might help you both survive.",
                        effects: { hope: +5, strength: -5, spirit: +10 },
                        result: "You learn his name is Kofi. He was a farmer, like you. You promise each other that you will survive together, that you will remember each other's names and stories. In this place designed to strip away your humanity, you refuse to be reduced to cargo."
                    },
                    {
                        text: "Try to survey the space and understand the conditions, looking for any advantage.",
                        effects: { hope: -10, strength: -5, spirit: +5, days: 3 },
                        result: "You study everything—the routines of the crew, the weaknesses in the shackles, the patterns of movement. You overhear sailors talking about the journey: two months across the ocean to a place called Charleston. Your mind races with the impossibility of it all."
                    },
                    {
                        text: "Close your eyes and retreat into memories, going somewhere else in your mind.",
                        effects: { hope: -5, strength: +5, spirit: -5, days: 3 },
                        result: "You return to your village in your mind—to the fields, the celebrations, your mother's voice. The physical reality fades as you live in memory. It's a survival mechanism, but you fear you might lose yourself entirely."
                    }
                ]
            },
            {
                // Round 5: The Hell Below Deck
                title: "The Hold",
                location: "Atlantic Ocean - Two Weeks at Sea",
                date: "Mid-1755",
                story: `
                    <p>Time loses meaning in the darkness below deck. You are brought up once or twice a day—shackled in groups—to empty waste buckets and receive a small ration of food: rice, beans, sometimes rotten. Those who refuse to eat are force-fed using painful devices to pry open their mouths.</p>

                    <p>The hold is suffocating. The heat is unbearable. The sounds are worse—crying, praying, the rattling of chains, the groans of the dying. Disease spreads rapidly: dysentery, smallpox, measles. Bodies are removed daily.</p>

                    <p>Yesterday, you heard people whispering about rebellion—about trying to overwhelm the crew when brought on deck. Others warn it's suicide. They outnumber the enslaved, they have weapons, and attempted rebellions always end in brutal reprisals.</p>

                    <p>But the alternative is to accept this fate.</p>
                `,
                historicalNote: "Conditions in the hold were deliberately dehumanizing. Captives were exercised on deck in chains, sometimes forced to 'dance' for the crew's entertainment. Resistance took many forms: refusing to eat (requiring forced feeding), suicide, and rebellion. There were hundreds of documented shipboard revolts during the slave trade, though most failed. Ship captains responded to rebellions with extreme violence—torture, amputation, execution—to terrorize others into submission.",
                choices: [
                    {
                        text: "Join the whispered plans for rebellion, knowing it might mean death but refusing to accept enslavement without resistance.",
                        effects: { hope: +10, strength: -15, spirit: +15 },
                        result: "You join the conspiracy, passing messages in the brief moments on deck. Three days later, the attempt is made. Some captives break their chains and attack the crew, but guns and swords quickly end the uprising. Many are killed. The survivors, including you, are whipped and kept in even worse conditions. But you fought. You resisted. They could not take that."
                    },
                    {
                        text: "Refuse to eat, choosing death over enslavement.",
                        effects: { hope: -20, strength: -25, spirit: +20 },
                        result: "You turn your face away from the food. For days, you refuse. Other captives understand—some have made the same choice. The crew notices and uses the speculum oris, a painful device to force your mouth open and pour food down your throat. They will not let you die and lose their profit. Your resistance is noted, but survival is forced upon you."
                    },
                    {
                        text: "Focus on surviving the voyage, believing you might find a way to freedom once you reach land.",
                        effects: { hope: -5, strength: -10, spirit: -5, days: 14 },
                        result: "You force yourself to eat, to endure, to survive each day. You avoid the rebellions and their brutal consequences. Part of you feels like a coward, but another part knows that survival itself is a form of resistance. You must live to tell this story."
                    }
                ]
            },
            {
                // Round 6: Disease and Death
                title: "The Dying Time",
                location: "Atlantic Ocean - Four Weeks at Sea",
                date: "Summer 1755",
                story: `
                    <p>Disease has swept through the hold like wildfire. Dysentery—the 'bloody flux'—is worst. The stench is overwhelming. People are dying every day now, their bodies thrown overboard without ceremony.</p>

                    <p>Kofi, the man shackled beside you, is burning with fever. He's been sick for three days. He mumbles about his children, his wife. He asks you to remember his name, to remember he existed, to tell his story if you survive.</p>

                    <p>You've managed to avoid the worst illnesses so far, but in these conditions, it's only a matter of time. The crew wears cloth over their faces when they come below deck, afraid of catching what spreads among the cargo.</p>

                    <p>Among the living, a quiet resolve is forming—to remember. To survive. To bear witness.</p>
                `,
                historicalNote: "Disease was the leading cause of death during the Middle Passage. Dysentery, smallpox, measles, and scurvy killed thousands. The close quarters, poor sanitation, and malnutrition created perfect conditions for epidemics. Ship surgeons were primarily concerned with preserving their investment, not providing humane care. Dead bodies were thrown overboard—creating trails of sharks that followed slave ships. An estimated 1.8 million Africans died during Middle Passage voyages between 1525-1866.",
                choices: [
                    {
                        text: "Care for Kofi as best you can, giving him your water ration and holding him as he suffers.",
                        effects: { hope: -10, strength: -15, spirit: +15, days: 7 },
                        result: "You hold Kofi's hand, wipe his fevered brow with your bound hands, and whisper that you will remember him. He dies that night, still shackled to you. You lie next to his body for hours before the crew removes it. You have his name, his story, and you vow to carry it forward."
                    },
                    {
                        text: "Try to stay strong and healthy by conserving your energy and avoiding contact with the sick.",
                        effects: { hope: -15, strength: +5, spirit: -10, days: 7 },
                        result: "You pull away from Kofi, trying to protect yourself. When he reaches for your hand, you pretend to sleep. He dies alone. You survive, but the guilt weighs on you. You wonder what you've become."
                    },
                    {
                        text: "Make a pact with other survivors around you to remember everyone who dies—their names, their villages, their stories.",
                        effects: { hope: +5, strength: -10, spirit: +15, days: 7 },
                        result: "In whispered voices, you and others commit to memory the names and stories of the dying. You become keepers of memory, oral historians of this horror. The crew cannot understand your languages, so they cannot stop this act of resistance—the refusal to let your people be forgotten."
                    }
                ]
            },
            {
                // Round 7: The Storm
                title: "The Tempest",
                location: "Atlantic Ocean - Six Weeks at Sea",
                date: "Late Summer 1755",
                story: `
                    <p>A massive storm strikes. The ship pitches violently. Water pours into the hold through the gratings above. In the darkness, people scream, certain the ship will sink and you'll all drown shackled in the hold.</p>

                    <p>The crew doesn't come down—they're fighting to keep the ship afloat. You are left in darkness as seawater mixes with the filth on the floor. The ship tilts at impossible angles. Cargo breaks loose. People are crushed.</p>

                    <p>For three days, the storm rages. You don't know if you want the ship to survive or sink—death by drowning might be more merciful than what awaits you.</p>

                    <p>When the storm finally passes, the hold is in even worse condition. More bodies to remove. More people broken in body or spirit.</p>
                `,
                historicalNote: "Atlantic storms were deadly for slave ships. The ships were overloaded and poorly maintained, making them vulnerable to rough seas. During storms, captives were left shackled in the hold, unable to escape if the ship sank. Some storms did sink slave ships, drowning everyone aboard. Storms also caused ships to go off course, extending voyages and increasing mortality rates. The famous Zong Massacre of 1781 occurred when a ship's crew threw 133 enslaved Africans overboard during a crisis, prioritizing insurance claims over human life.",
                choices: [
                    {
                        text: "Help those around you stay calm, leading prayers and songs to maintain morale through the terror.",
                        effects: { hope: +10, strength: -10, spirit: +15 },
                        result: "Your voice rises above the storm—singing, praying, calling out reassurance. Others join you. The crew might think you're just making noise, but you're doing something more powerful: maintaining your collective humanity in the face of nature's fury and human cruelty. When the storm passes, you've become a leader among the captives."
                    },
                    {
                        text: "Hold onto your shackles and pray for the ship to sink, choosing death over slavery.",
                        effects: { hope: -15, strength: -5, spirit: +5, days: 3 },
                        result: "With each massive wave, you hope it will be the one that ends this nightmare. But the ship survives. You don't know if you're grateful or devastated. The storm was your chance for escape, even if through death, and it passed you by."
                    },
                    {
                        text: "Focus entirely on survival, bracing yourself against each impact, determined to live.",
                        effects: { hope: -5, strength: +5, spirit: -5, days: 3 },
                        result: "You brace against the wooden boards, protecting your head, breathing when you can. Pure survival instinct takes over. When the storm ends, you're bruised and battered but alive. Some call you lucky. You're not sure."
                    }
                ]
            },
            {
                // Round 8: Broken Spirits
                title: "Despair and Endurance",
                location: "Atlantic Ocean - Seven Weeks at Sea",
                date: "Late Summer 1755",
                story: `
                    <p>The journey continues. The crew estimates you're about halfway to the destination. More than a third of those who started the voyage are dead. The survivors are skeletal, covered in sores, many ill.</p>

                    <p>Some have lost their minds—staring blankly, no longer responding to anything. Others have found inner strength you didn't know was possible, maintaining dignity despite everything.</p>

                    <p>You've changed. The person you were in your village seems like a stranger. You don't know what will be left of you when—if—you reach land.</p>

                    <p>But you're still here. Still breathing. Still Adisa.</p>
                `,
                historicalNote: "The psychological trauma of the Middle Passage was profound and lasting. Captives experienced not just physical suffering but the deliberate destruction of their identity, culture, and humanity. Yet resistance continued in many forms—maintaining languages, sharing stories, preserving music and spiritual practices. This cultural retention would become the foundation for African diaspora cultures in the Americas. The enslaved did not passively accept their fate but actively worked to preserve their humanity and heritage.",
                choices: [
                    {
                        text: "Share stories from home with other survivors, keeping your culture and language alive.",
                        effects: { hope: +10, strength: -5, spirit: +15 },
                        result: "You teach others words from your language. They teach you theirs. You share folktales, songs, prayers. The crew doesn't understand the significance—they think you're just making noise. But you're doing something revolutionary: preserving your culture, refusing to let them erase who you are. These languages, these stories, will survive in the Americas, carried in the hearts of the survivors."
                    },
                    {
                        text: "Retreat into silence, protecting what's left of yourself by withdrawing.",
                        effects: { hope: -10, strength: +5, spirit: -10, days: 7 },
                        result: "You stop speaking. Stop engaging. You build walls around your heart to protect it from further breaking. When you finally reach land, you'll be alive but forever changed—a part of you left behind in the hold of this ship."
                    },
                    {
                        text: "Make a vow to yourself that if you survive, you will find a way to freedom, no matter how long it takes.",
                        effects: { hope: +15, strength: -5, spirit: +15, days: 7 },
                        result: "In the darkness, you make a sacred vow. You will survive this. And you will be free again. You don't know how, you don't know when, but you will not accept enslavement as your permanent fate. This vow becomes your anchor, the thing that keeps you going when everything else says to give up."
                    }
                ]
            },
            {
                // Round 9: Land in Sight
                title: "The New World",
                location: "Approaching Charleston Harbor",
                date: "Fall 1755",
                story: `
                    <p>After nearly eight weeks at sea, word spreads that land has been sighted. The crew's mood improves—they're eager to offload their cargo and collect their pay. For you and the other survivors, the future is terrifying and unknown.</p>

                    <p>You're brought on deck more frequently now—the crew wants to 'fatten up' their cargo before sale. You're given more food and water. Some captives are so weak they can barely walk. Of the 400 people who left Africa on this ship, fewer than 300 survive.</p>

                    <p>You see land—a coastline of green marshes and sandy shores. This place will be called Charleston, South Carolina. You don't yet know that this is the largest port for the slave trade in North America, that nearly 40% of all enslaved Africans brought to the British colonies will come through this harbor.</p>

                    <p>The ship drops anchor. Tomorrow, you will be sold.</p>
                `,
                historicalNote: "Charleston (Charles Towne) was the primary point of entry for enslaved Africans in North America. Between 1670 and 1808, over 200,000 enslaved Africans were brought through Charleston—nearly 40% of all enslaved people imported to the United States. The city's wealth was built on the slave trade and slave labor, particularly rice and indigo plantations. Gadsden's Wharf and other sites in Charleston harbor were where countless families were separated and individuals sold. Today, these sites are being preserved and memorialized.",
                choices: [
                    {
                        text: "Look at the land and vow to learn everything about this new place—knowledge is power and potential freedom.",
                        effects: { hope: +5, strength: -5, spirit: +10 },
                        result: "You study everything—the landscape, the people on the docks, the language you hear shouted. You've survived the Middle Passage. Now you must learn how to survive and resist in this new world. Your mind becomes your greatest weapon."
                    },
                    {
                        text: "Think of your family and home, holding onto who you were before they took you.",
                        effects: { hope: -5, strength: -5, spirit: +15, days: 1 },
                        result: "You close your eyes and remember. Your mother's face. Your father's voice. The sound of home. They tried to take everything from you, but they cannot take your memories. You are still Adisa. You are still the child of your ancestors. And you will carry them forward into whatever comes next."
                    },
                    {
                        text: "Stay close to the others from your ship, knowing that survival will depend on community and connection.",
                        effects: { hope: +10, strength: -5, spirit: +10, days: 1 },
                        result: "You grip the hands of those near you. You've been through hell together. Whatever comes next, you'll face it together. They cannot break your bonds. Community, culture, and connection will be your resistance. This solidarity will become the foundation of African American culture and resistance for generations to come."
                    }
                ]
            },
            {
                // Round 10: The Auction
                title: "The Auction Block",
                location: "Charleston, South Carolina",
                date: "Fall 1755",
                story: `
                    <p>You are taken off the ship and marched through the streets of Charleston to a warehouse near the docks. You see a world you couldn't have imagined—buildings of wood and brick, people with white skin, horses and carriages, a bustling port city built on rice and slavery.</p>

                    <p>You're stripped, examined again by potential buyers. They look at your teeth, your muscles. They speak about you in English—a language you're beginning to understand. They discuss your value in pounds and shillings.</p>

                    <p>The auction begins. One by one, people are sold to planters, merchants, household masters. Families are separated—mothers from children, husbands from wives, siblings scattered. The sounds of grief echo off the warehouse walls.</p>

                    <p>Your turn comes. You stand on the auction block as they bid on your life.</p>

                    <p>This is not the end of your story—but it is the end of this chapter. What comes next will be a life of enslaved labor, but also of resistance, community, and the long fight for freedom that will span generations.</p>
                `,
                historicalNote: "Slave auctions in Charleston took place at multiple sites, including Gadsden's Wharf, Ryan's Mart (later called the 'Slave Mart'), and various warehouses. Enslaved people were sold individually or in 'lots.' Families were routinely separated—one of slavery's cruelest aspects. Newly arrived Africans, called 'saltwater slaves,' were particularly valuable. Some were sold to nearby rice plantations in the lowcountry; others were transported to other colonies. The trauma of the Middle Passage was followed by the trauma of auction and separation, beginning lives of forced labor under chattel slavery.",
                choices: [
                    {
                        text: "Stand tall on the auction block, refusing to show fear or submission, maintaining your dignity.",
                        effects: { hope: +10, strength: +5, spirit: +20 },
                        result: "You stand straight. You look into the eyes of those who bid on you. You are not broken. You are not cattle. You are Adisa, and though they can buy your labor, they cannot buy your soul. The auctioneer mistakes your bearing for strength and you sell for a high price to a rice planter. Your resistance continues."
                    },
                    {
                        text: "Search the crowd desperately for any familiar faces from your ship, hoping to not be separated from all you know.",
                        effects: { hope: -10, strength: -5, spirit: +5, days: 1 },
                        result: "You see a few faces from the ship in the crowd of the enslaved, but the auction scatters you all. You're sold to one plantation, others to different masters. The community you built during the nightmare voyage is broken apart. But you carry their names and stories in your heart. You will find new communities, build new families, and the culture you preserved will continue."
                    },
                    {
                        text: "Lock eyes with one of the potential buyers, trying to communicate your humanity, hoping for a less cruel master.",
                        effects: { hope: -5, strength: -10, spirit: -5, days: 1 },
                        result: "You try to appeal to the humanity of the buyers, but most see only property. You're sold to a man who owns a plantation on the coast. You don't yet know what kind of master he'll be. All you know is that you survived the Middle Passage. You're still alive. And one day, somehow, you will be free."
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
        if (this.round > this.maxRounds) {
            this.endGame();
            return;
        }

        this.currentScenario = this.scenarios[this.round - 1];

        // Update UI
        document.getElementById('round').textContent = this.round;
        document.getElementById('chapterTitle').textContent = this.currentScenario.title;
        document.getElementById('chapterLocation').textContent = this.currentScenario.location;
        document.getElementById('chapterDate').textContent = this.currentScenario.date;
        document.getElementById('storyText').innerHTML = this.currentScenario.story;
        document.getElementById('historicalNote').textContent = this.currentScenario.historicalNote;

        // Update stats
        this.updateStats();

        // Load choices
        this.loadChoices();

        // Hide result panel
        document.getElementById('resultPanel').classList.add('hidden');
        document.getElementById('choicesPanel').classList.remove('hidden');
    }

    loadChoices() {
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = '';

        this.currentScenario.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'choice-btn';
            button.textContent = choice.text;
            button.onclick = () => this.makeChoice(index);
            choicesContainer.appendChild(button);
        });
    }

    makeChoice(choiceIndex) {
        const choice = this.currentScenario.choices[choiceIndex];

        // Apply effects
        if (choice.effects.hope !== undefined) {
            this.stats.hope = Math.max(0, Math.min(100, this.stats.hope + choice.effects.hope));
        }
        if (choice.effects.strength !== undefined) {
            this.stats.strength = Math.max(0, Math.min(100, this.stats.strength + choice.effects.strength));
        }
        if (choice.effects.spirit !== undefined) {
            this.stats.spirit = Math.max(0, Math.min(100, this.stats.spirit + choice.effects.spirit));
        }
        if (choice.effects.days !== undefined) {
            this.stats.days += choice.effects.days;
        }

        // Update stats display
        this.updateStats();

        // Show result
        document.getElementById('resultText').innerHTML = `<p>${choice.result}</p>`;
        document.getElementById('choicesPanel').classList.add('hidden');
        document.getElementById('resultPanel').classList.remove('hidden');
    }

    updateStats() {
        // Update stat values
        document.getElementById('hope').textContent = Math.round(this.stats.hope);
        document.getElementById('strength').textContent = Math.round(this.stats.strength);
        document.getElementById('spirit').textContent = Math.round(this.stats.spirit);
        document.getElementById('days').textContent = this.stats.days;

        // Update stat bars
        document.getElementById('hopeFill').style.width = this.stats.hope + '%';
        document.getElementById('strengthFill').style.width = this.stats.strength + '%';
        document.getElementById('spiritFill').style.width = this.stats.spirit + '%';
    }

    nextRound() {
        this.round++;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.loadRound();
    }

    endGame() {
        document.getElementById('gameScreen').classList.add('hidden');
        document.getElementById('endScreen').classList.remove('hidden');

        // Calculate ending based on stats
        let ending = "";

        const avgStat = (this.stats.hope + this.stats.strength + this.stats.spirit) / 3;

        if (this.stats.spirit >= 70) {
            ending = `
                <p>You survived the Middle Passage with your spirit remarkably intact. Despite everything they did to break you—the capture, the march, the barracoon, the ship, the auction—you maintained your sense of self.</p>

                <p>You stand on the auction block in Charleston, but you are still Adisa. You carry your culture, your memories, your ancestors within you. The planter who buys you sees a strong worker. He doesn't see the rebel he's just purchased.</p>

                <p>Your journey through slavery will continue, but so will your resistance. You will find community with others. You will preserve your language and stories. You will teach your children who they are and where they came from.</p>

                <p>Generations from now, your descendants will be free. They will carry your strength, your spirit, and your refusal to be broken.</p>
            `;
        } else if (avgStat >= 40) {
            ending = `
                <p>You survived the Middle Passage, but you're deeply changed. The person who was taken from their village months ago feels like a distant memory. The trauma of the journey has taken its toll on your body and mind.</p>

                <p>Yet you're still here. Still breathing. Parts of you may be broken, but parts remain unbroken. You've found moments of humanity in the darkest places—shared songs, whispered prayers, hands held in darkness.</p>

                <p>As you're sold at auction in Charleston, you don't know what the future holds. But you know you survived what was designed to kill you. That survival itself is a form of resistance.</p>

                <p>The road ahead will be hard—a life of enslaved labor, of continued trauma and injustice. But you will endure. You will find community. And one day, your descendants will tell your story.</p>
            `;
        } else {
            ending = `
                <p>You survived the Middle Passage physically, but at a terrible cost. The trauma has broken something inside you that may never fully heal. You stand at the auction in Charleston, but you're not fully present—part of you is still in the hold of that ship, or in your village before it all began.</p>

                <p>The enslavers have done what they intended: broken your spirit to make you compliant. But even in this brokenness, even in this darkness, something small remains—a flicker of the person you were.</p>

                <p>Your story is the story of countless thousands who didn't survive intact, who were traumatized beyond measure by the horror of the slave trade. Your suffering was real. Your pain was real.</p>

                <p>And even though you may not feel it now, you still matter. Your life still has value. And generations from now, people will honor your memory and fight to ensure such atrocities never happen again.</p>
            `;
        }

        document.getElementById('endingText').innerHTML = ending;

        // Update final stats
        document.getElementById('finalHope').textContent = Math.round(this.stats.hope);
        document.getElementById('finalStrength').textContent = Math.round(this.stats.strength);
        document.getElementById('finalSpirit').textContent = Math.round(this.stats.spirit);
        document.getElementById('finalDays').textContent = this.stats.days;

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Initialize game when page loads
let game;
window.addEventListener('DOMContentLoaded', () => {
    game = new MiddlePassageGame();
});
