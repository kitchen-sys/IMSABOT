// John Hancock's Trading Empire - Game Engine

class TradingGame {
    constructor() {
        this.state = {
            round: 0,
            year: 1765,
            money: 10000,
            reputation: 75,
            ships: 3,
            startingMoney: 10000,
            inventory: {
                tea: 10,
                rum: 15,
                whaleOil: 5,
                textiles: 8,
                furniture: 3
            },
            prices: {
                tea: 50,
                rum: 30,
                whaleOil: 80,
                textiles: 60,
                furniture: 100
            },
            basePrices: {
                tea: 50,
                rum: 30,
                whaleOil: 80,
                textiles: 60,
                furniture: 100
            },
            priceMultipliers: {
                tea: 1.0,
                rum: 1.0,
                whaleOil: 1.0,
                textiles: 1.0,
                furniture: 1.0
            }
        };

        this.events = [
            {
                year: 1765,
                title: "The Stamp Act Crisis",
                description: "Parliament has passed the Stamp Act, requiring colonists to pay a tax on every piece of printed paper. Colonial protests are growing, and merchants are organizing boycotts of British goods. The economy is tense.",
                economicImpact: "British goods (textiles, tea) see reduced demand. Colonial products (rum, furniture) prices rise as colonists support local trade. Smuggling becomes more profitable.",
                multipliers: { tea: 0.8, textiles: 0.75, rum: 1.3, furniture: 1.2, whaleOil: 1.1 }
            },
            {
                year: 1766,
                title: "Stamp Act Repealed - Trade Boom!",
                description: "Victory! Parliament has repealed the Stamp Act after colonial resistance. Trade restrictions are easing, and there's optimism in the air. Markets are recovering strongly.",
                economicImpact: "All markets surge! British goods flood back into ports. This is an excellent time to buy low and sell high.",
                multipliers: { tea: 1.4, textiles: 1.5, rum: 1.3, furniture: 1.2, whaleOil: 1.4 }
            },
            {
                year: 1767,
                title: "Townshend Acts Imposed",
                description: "New taxes on glass, lead, paints, paper, and tea! The Townshend Acts impose duties on imported goods. Boston merchants are furious. Another boycott of British goods is being organized.",
                economicImpact: "Tea and textile prices drop due to boycotts. Local manufacturing increases. Smuggling operations become highly profitable but risky.",
                multipliers: { tea: 0.6, textiles: 0.7, rum: 1.4, furniture: 1.3, whaleOil: 1.2 }
            },
            {
                year: 1768,
                title: "The Liberty Incident - Your Ship Seized!",
                description: "Disaster! British customs officials have seized your sloop Liberty on suspicion of smuggling Madeira wine. A riot has broken out in Boston. This is personal now. Your reputation among patriots soars, but you've lost cargo.",
                economicImpact: "You lose 20% of your current inventory due to seizure! However, your reputation with colonists increases significantly. Smuggling becomes more dangerous but necessary.",
                multipliers: { tea: 0.5, textiles: 0.6, rum: 1.6, furniture: 1.4, whaleOil: 1.3 },
                specialEffect: (state) => {
                    for (let good in state.inventory) {
                        state.inventory[good] = Math.floor(state.inventory[good] * 0.8);
                    }
                    state.reputation = Math.min(100, state.reputation + 10);
                    game.addLog("British customs seized 20% of your inventory!", "loss");
                    game.addLog("Your reputation among colonists increased!", "profit");
                }
            },
            {
                year: 1770,
                title: "Boston Massacre",
                description: "Tragedy in King Street! British soldiers fired into a crowd, killing five colonists. Anti-British sentiment is at an all-time high. Samuel Adams is calling for resistance. The city is in turmoil.",
                economicImpact: "British goods are nearly impossible to sell legally. Colonial products surge in demand. Military tensions disrupt some shipping routes.",
                multipliers: { tea: 0.4, textiles: 0.5, rum: 1.7, furniture: 1.5, whaleOil: 1.1 }
            },
            {
                year: 1773,
                title: "Tea Act Passed",
                description: "Parliament grants the British East India Company a monopoly on tea sales in the colonies. This undercuts local merchants like yourself! Anger is building. Meetings are being held at Old South Meeting House.",
                economicImpact: "Tea prices collapse as cheap British tea floods the market. Other goods remain stable. Smuggling tea from Dutch sources becomes very profitable.",
                multipliers: { tea: 0.3, textiles: 1.0, rum: 1.5, furniture: 1.3, whaleOil: 1.2 }
            },
            {
                year: 1773,
                title: "Boston Tea Party",
                description: "Last night, patriots disguised as Mohawks dumped 342 chests of British tea into Boston Harbor! You may have participated... The city erupts in celebration, but British retaliation is certain.",
                economicImpact: "Tea becomes scarce and expensive! Britain will surely respond. All trade becomes uncertain. Smart merchants stockpile goods now.",
                multipliers: { tea: 2.0, textiles: 1.2, rum: 1.6, furniture: 1.4, whaleOil: 1.5 }
            },
            {
                year: 1774,
                title: "The Intolerable Acts - Port Closure!",
                description: "Parliament's revenge! The Boston Port Act closes Boston Harbor until the tea is paid for. No ships in or out! Your fleet sits idle. The economy is strangled. Other colonies send supplies overland.",
                economicImpact: "Massive disruption! Prices become extremely volatile. Goods in your warehouse gain value, but you can only sell locally. Expenses continue.",
                multipliers: { tea: 1.8, textiles: 1.6, rum: 0.9, furniture: 1.7, whaleOil: 1.9 },
                specialEffect: (state) => {
                    state.money -= 500;
                    game.addLog("Port closure costs you £500 in expenses!", "loss");
                }
            },
            {
                year: 1774,
                title: "First Continental Congress",
                description: "Delegates from twelve colonies meet in Philadelphia to coordinate resistance. You've been elected to represent Massachusetts! The colonies are uniting. War seems inevitable, but there's still hope for reconciliation.",
                economicImpact: "Political uncertainty affects all markets. Some goods needed for potential military preparation increase in value.",
                multipliers: { tea: 1.5, textiles: 1.4, rum: 1.3, furniture: 1.2, whaleOil: 1.6 }
            },
            {
                year: 1775,
                title: "Lexington and Concord - War Begins!",
                description: "The shot heard 'round the world! British troops marched to seize colonial weapons. Minutemen fought back at Lexington and Concord. The Revolution has begun! Your business empire must now support the cause of liberty.",
                economicImpact: "Normal trade ends. Your wealth will help fund the Revolution. Military supplies are desperately needed. History is being made!",
                multipliers: { tea: 1.0, textiles: 2.0, rum: 1.8, furniture: 1.1, whaleOil: 2.5 }
            }
        ];

        this.priceUpdateInterval = null;
        this.updateFrequency = 3000; // Update prices every 3 seconds
    }

    startGame() {
        document.getElementById('startScreen').classList.add('hidden');
        document.getElementById('gameScreen').classList.remove('hidden');
        this.advanceRound();
        this.startPriceUpdates();
    }

    advanceRound() {
        if (this.state.round >= 10) {
            this.endGame();
            return;
        }

        this.state.round++;
        const event = this.events[this.state.round - 1];
        this.state.year = event.year;

        // Apply event multipliers
        this.state.priceMultipliers = { ...event.multipliers };
        this.updatePrices();

        // Apply special effects
        if (event.specialEffect) {
            event.specialEffect(this.state);
        }

        // Update UI
        this.updateDisplay();
        document.getElementById('eventTitle').textContent = event.title;
        document.getElementById('eventDescription').textContent = event.description;
        document.getElementById('economicImpact').innerHTML = `<strong>Economic Impact:</strong> ${event.economicImpact}`;

        this.addLog(`--- ${event.year}: ${event.title} ---`, "warning");
    }

    startPriceUpdates() {
        // Clear any existing interval
        if (this.priceUpdateInterval) {
            clearInterval(this.priceUpdateInterval);
        }

        // Start real-time price updates
        this.priceUpdateInterval = setInterval(() => {
            this.updatePrices();
            this.updatePriceDisplay();
        }, this.updateFrequency);
    }

    updatePrices() {
        // Update prices based on base prices, event multipliers, and random fluctuations
        for (let good in this.state.prices) {
            const basePrice = this.state.basePrices[good];
            const multiplier = this.state.priceMultipliers[good] || 1.0;
            const randomFluctuation = 0.9 + Math.random() * 0.2; // ±10% random variation

            this.state.prices[good] = Math.round(basePrice * multiplier * randomFluctuation);
        }
    }

    updateDisplay() {
        document.getElementById('round').textContent = this.state.round;
        document.getElementById('year').textContent = this.state.year;
        document.getElementById('money').textContent = `£${this.state.money.toLocaleString()}`;
        document.getElementById('reputation').textContent = this.state.reputation;
        document.getElementById('ships').textContent = this.state.ships;

        // Update inventory
        for (let good in this.state.inventory) {
            document.getElementById(`${good}Qty`).textContent = this.state.inventory[good];
        }

        this.updatePriceDisplay();
    }

    updatePriceDisplay() {
        const goods = ['tea', 'rum', 'whaleOil', 'textiles', 'furniture'];

        goods.forEach(good => {
            const priceElement = document.getElementById(`${good}PriceValue`);
            const trendElement = document.getElementById(`${good}Trend`);
            const oldPrice = parseInt(priceElement.textContent);
            const newPrice = this.state.prices[good];

            priceElement.textContent = newPrice;

            // Update trend indicator
            if (newPrice > oldPrice) {
                trendElement.textContent = '▲';
                trendElement.className = 'trend up';
            } else if (newPrice < oldPrice) {
                trendElement.textContent = '▼';
                trendElement.className = 'trend down';
            } else {
                trendElement.textContent = '●';
                trendElement.className = 'trend';
            }
        });

        // Pulse indicator
        const pulseElement = document.getElementById('priceUpdate');
        pulseElement.textContent = '●';
        setTimeout(() => {
            pulseElement.textContent = '';
        }, 500);
    }

    showTradeDialog(type) {
        const modal = document.getElementById('tradeModal');
        const title = document.getElementById('tradeModalTitle');
        const optionsContainer = document.getElementById('tradeOptions');

        title.textContent = type === 'buy' ? 'Buy Goods' : 'Sell Goods';
        optionsContainer.innerHTML = '';

        const goods = ['tea', 'rum', 'whaleOil', 'textiles', 'furniture'];
        const goodNames = {
            tea: 'Tea',
            rum: 'Rum',
            whaleOil: 'Whale Oil',
            textiles: 'Textiles',
            furniture: 'Furniture'
        };

        goods.forEach(good => {
            const price = this.state.prices[good];
            const inventory = this.state.inventory[good];
            const maxBuy = Math.floor(this.state.money / price);
            const maxSell = inventory;

            const optionDiv = document.createElement('div');
            optionDiv.className = 'trade-option';
            optionDiv.innerHTML = `
                <h4>${goodNames[good]}</h4>
                <p>Current Price: £${price} | In Stock: ${inventory}</p>
                ${type === 'buy' ? `<p>Can afford: ${maxBuy} units</p>` : `<p>Can sell: ${maxSell} units</p>`}
                <div class="trade-controls">
                    <input type="number" id="qty_${good}" min="1" max="${type === 'buy' ? maxBuy : maxSell}" value="1">
                    <button onclick="game.executeTrade('${type}', '${good}')">${type === 'buy' ? 'Buy' : 'Sell'}</button>
                </div>
            `;
            optionsContainer.appendChild(optionDiv);
        });

        modal.classList.remove('hidden');
    }

    executeTrade(type, good) {
        const qtyInput = document.getElementById(`qty_${good}`);
        const qty = parseInt(qtyInput.value) || 0;

        if (qty <= 0) {
            this.addLog("Invalid quantity!", "loss");
            return;
        }

        const price = this.state.prices[good];
        const totalCost = price * qty;

        if (type === 'buy') {
            if (this.state.money < totalCost) {
                this.addLog("Not enough money!", "loss");
                return;
            }
            this.state.money -= totalCost;
            this.state.inventory[good] += qty;
            this.addLog(`Bought ${qty} ${good} for £${totalCost.toLocaleString()}`, "profit");
        } else {
            if (this.state.inventory[good] < qty) {
                this.addLog("Not enough inventory!", "loss");
                return;
            }
            this.state.money += totalCost;
            this.state.inventory[good] -= qty;
            this.addLog(`Sold ${qty} ${good} for £${totalCost.toLocaleString()}`, "profit");
        }

        this.updateDisplay();
    }

    showSmuggleDialog() {
        const modal = document.getElementById('smuggleModal');
        const optionsContainer = document.getElementById('smuggleOptions');
        optionsContainer.innerHTML = '';

        const smuggleOptions = [
            {
                name: 'Dutch Tea',
                good: 'tea',
                qty: 20,
                cost: 600,
                profit: 1200,
                risk: 30,
                description: 'Smuggle tea from Dutch merchants. High profit margin!'
            },
            {
                name: 'French Textiles',
                good: 'textiles',
                qty: 15,
                cost: 700,
                profit: 1000,
                risk: 25,
                description: 'Import French textiles without paying duties.'
            },
            {
                name: 'Caribbean Rum',
                good: 'rum',
                qty: 30,
                cost: 500,
                profit: 900,
                risk: 20,
                description: 'Avoid molasses tax by smuggling rum directly.'
            }
        ];

        smuggleOptions.forEach(option => {
            if (this.state.money < option.cost) return; // Can't afford

            const optionDiv = document.createElement('div');
            optionDiv.className = 'smuggle-option';
            optionDiv.innerHTML = `
                <h4>${option.name}</h4>
                <p>${option.description}</p>
                <p><strong>Cost:</strong> £${option.cost} | <strong>Potential Profit:</strong> £${option.profit}</p>
                <p><strong>Risk of Capture:</strong> ${option.risk}%</p>
                <button onclick="game.executeSmuggle(${JSON.stringify(option).replace(/"/g, '&quot;')})" class="btn-action">
                    Attempt Smuggling
                </button>
            `;
            optionsContainer.appendChild(optionDiv);
        });

        if (optionsContainer.children.length === 0) {
            optionsContainer.innerHTML = '<p>You need more money to attempt smuggling operations.</p>';
        }

        modal.classList.remove('hidden');
    }

    executeSmuggle(option) {
        this.state.money -= option.cost;

        const caught = Math.random() * 100 < option.risk;

        if (caught) {
            // Caught by British customs!
            const fine = Math.floor(option.cost * 1.5);
            this.state.money -= fine;
            this.state.reputation = Math.max(0, this.state.reputation - 10);
            this.addLog(`CAUGHT! British customs fined you £${fine}. Reputation decreased!`, "loss");
        } else {
            // Success!
            this.state.inventory[option.good] += option.qty;
            const actualProfit = option.profit - option.cost;
            this.state.reputation = Math.min(100, this.state.reputation + 3);
            this.addLog(`Smuggling success! Gained ${option.qty} ${option.good}. Profit: £${actualProfit}. Reputation +3!`, "profit");
        }

        this.updateDisplay();
        this.closeModal();
    }

    showShipDialog() {
        const cost = 2000;
        if (this.state.money < cost) {
            this.addLog("Not enough money to buy a ship! Need £2,000.", "loss");
            return;
        }

        if (confirm(`Buy a new ship for £${cost}? This will increase your trading capacity and reputation.`)) {
            this.state.money -= cost;
            this.state.ships++;
            this.state.reputation = Math.min(100, this.state.reputation + 5);
            this.addLog(`Purchased a new ship! Fleet size: ${this.state.ships}. Reputation +5!`, "profit");
            this.updateDisplay();
        }
    }

    closeModal() {
        document.getElementById('tradeModal').classList.add('hidden');
        document.getElementById('smuggleModal').classList.add('hidden');
    }

    addLog(message, type = '') {
        const logMessages = document.getElementById('logMessages');
        const entry = document.createElement('div');
        entry.className = `log-entry ${type}`;
        entry.textContent = message;
        logMessages.insertBefore(entry, logMessages.firstChild);

        // Keep only last 50 messages
        while (logMessages.children.length > 50) {
            logMessages.removeChild(logMessages.lastChild);
        }
    }

    endGame() {
        // Stop price updates
        if (this.priceUpdateInterval) {
            clearInterval(this.priceUpdateInterval);
        }

        // Calculate final score
        const inventoryValue = Object.keys(this.state.inventory).reduce((sum, good) => {
            return sum + (this.state.inventory[good] * this.state.prices[good]);
        }, 0);

        const totalWealth = this.state.money + inventoryValue;
        const profit = totalWealth - this.state.startingMoney;

        // Show end screen
        document.getElementById('gameScreen').classList.add('hidden');
        document.getElementById('endScreen').classList.remove('hidden');

        document.getElementById('finalMoney').textContent = `£${this.state.money.toLocaleString()}`;
        document.getElementById('finalReputation').textContent = `${this.state.reputation}%`;
        document.getElementById('finalShips').textContent = this.state.ships;
        document.getElementById('totalProfit').textContent = `£${profit.toLocaleString()}`;

        let message = `<p>The Revolutionary War has begun! Your business empire has helped pave the way for American independence.</p>`;

        if (profit > 50000) {
            message += `<p><strong>Outstanding Success!</strong> Your brilliant trading made you one of the wealthiest patriots. Your fortune will help fund the Revolution and secure liberty!</p>`;
        } else if (profit > 20000) {
            message += `<p><strong>Great Success!</strong> You've built a strong business and maintained your reputation. Your wealth will support the cause of independence!</p>`;
        } else if (profit > 0) {
            message += `<p><strong>Modest Success.</strong> You navigated the turbulent times and made a profit. Every contribution to the cause matters!</p>`;
        } else {
            message += `<p><strong>Challenging Times.</strong> The road to revolution was costly, but your patriotism and sacrifice will be remembered!</p>`;
        }

        if (this.state.reputation > 80) {
            message += `<p>Your outstanding reputation among colonists makes you a hero of the Revolution!</p>`;
        }

        message += `<p class="warning">⚠️ Historical Note: The real John Hancock became President of the Continental Congress and was the first to sign the Declaration of Independence with his famous large signature!</p>`;

        document.getElementById('endMessage').innerHTML = message;
    }
}

// Initialize game
const game = new TradingGame();

// Close modals when clicking outside
window.onclick = function(event) {
    const tradeModal = document.getElementById('tradeModal');
    const smuggleModal = document.getElementById('smuggleModal');

    if (event.target === tradeModal) {
        game.closeModal();
    }
    if (event.target === smuggleModal) {
        game.closeModal();
    }
}
