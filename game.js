        class VirtualPet {
            constructor() {
                this.hunger = 100;
                this.happiness = 100;
                this.energy = 100;
                this.health = 100;
                this.age = 0;
                this.name = 'Buddy';
                this.emoji = '🐶';
                this.isPlaying = false;
                this.isSleeping = false;
                
                this.startGameLoop();
                this.updateDisplay();
            }

            feedPet() {
                if (this.hunger >= 100) {
                    this.showMessage("I'm already full! 😋");
                    return;
                }
                
                this.hunger = Math.min(100, this.hunger + 30);
                this.happiness = Math.min(100, this.happiness + 10);
                this.showMessage("Yummy! Thanks for the food! 🍎✨");
                this.makeHappy();
                this.updateDisplay();
            }

            playWithPet() {
                if (this.energy < 20) {
                    this.showMessage("I'm too tired to play... 😴");
                    return;
                }
                
                if (this.isSleeping) {
                    this.showMessage("Shhh... I'm sleeping! 💤");
                    return;
                }

                this.happiness = Math.min(100, this.happiness + 25);
                this.energy = Math.max(0, this.energy - 20);
                this.hunger = Math.max(0, this.hunger - 10);
                this.showMessage("Wheee! That was so much fun! 🎾🌟");
                this.makeHappy();
                this.updateDisplay();
            }

            petSleep() {
                if (this.isSleeping) {
                    this.showMessage("I'm already sleeping peacefully... 😴💤");
                    return;
                }
                
                this.isSleeping = true;
                this.showMessage("Time for a nap... Sweet dreams! 🌙");
                document.getElementById('petEmoji').classList.add('sleeping');
                
                setTimeout(() => {
                    this.energy = Math.min(100, this.energy + 40);
                    this.health = Math.min(100, this.health + 15);
                    this.happiness = Math.min(100, this.happiness + 10);
                    this.isSleeping = false;
                    document.getElementById('petEmoji').classList.remove('sleeping');
                    this.showMessage("I feel so refreshed after that nap! ✨");
                    this.updateDisplay();
                }, 3000);
            }

            healPet() {
                if (this.health >= 100) {
                    this.showMessage("I'm perfectly healthy! No medicine needed! 💪");
                    return;
                }
                
                this.health = Math.min(100, this.health + 50);
                this.happiness = Math.max(0, this.happiness - 5);
                this.showMessage("The medicine tastes yucky but I feel better! 💊✨");
                this.updateDisplay();
            }

            makeHappy() {
                const petEl = document.getElementById('petEmoji');
                petEl.classList.add('happy');
                setTimeout(() => {
                    petEl.classList.remove('happy');
                }, 2000);
            }

            showMessage(message) {
                document.getElementById('statusMessage').textContent = message;
            }

            updateDisplay() {
                document.getElementById('hungerBar').style.width = this.hunger + '%';
                document.getElementById('happinessBar').style.width = this.happiness + '%';
                document.getElementById('energyBar').style.width = this.energy + '%';
                document.getElementById('healthBar').style.width = this.health + '%';

                document.getElementById('hungerValue').textContent = Math.round(this.hunger);
                document.getElementById('happinessValue').textContent = Math.round(this.happiness);
                document.getElementById('energyValue').textContent = Math.round(this.energy);
                document.getElementById('healthValue').textContent = Math.round(this.health);

                document.getElementById('petAge').textContent = this.age + ' days';
            }

            startGameLoop() {
                setInterval(() => {
                    if (!this.isSleeping) {
                        this.hunger = Math.max(0, this.hunger - 0.5);
                        this.happiness = Math.max(0, this.happiness - 0.3);
                        this.energy = Math.max(0, this.energy - 0.2);
                        
                        if (this.hunger < 20 || this.happiness < 20) {
                            this.health = Math.max(0, this.health - 0.5);
                        }
                    }
                    
                    this.updateDisplay();
                }, 1000);

                setInterval(() => {
                    this.age++;
                    this.updateDisplay();
                    
                    if (this.age % 5 === 0) {
                        this.showMessage(`🎉 Happy ${this.age}th day birthday! 🎂`);
                    }
                }, 30000);
            }
        }

        let pet;

        window.onload = function() {
            pet = new VirtualPet();
        };

        function feedPet() {
            pet.feedPet();
        }

        function playWithPet() {
            pet.playWithPet();
        }

        function petSleep() {
            pet.petSleep();
        }

        function healPet() {
            pet.healPet();
        }

