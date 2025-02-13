export const slotMachine = {
  calculateStatus: function () {
    // TODO: check for three similar symbols and update 'win'-boolean
    if (this.slots[1] === this.slots[2] && this.slots[0] === this.slots[1]) {
      this.win = true;
    } else {
      this.win = false;
    }
  },
  getRandomSymbol: function () {
    const pos = Math.floor(Math.random() * this.symbols.length);
    return pos;
  },
  reset: function () {
    this.slots = [];
    this.win = true;
  },
  symbols: ["♠", "♥", "♣", "♦"],
  slots: [],
  slotsAmount: 3,
  spin: function () {
    for (let i = 0; i < this.slotsAmount; i++) {
      this.slots.push(this.getRandomSymbol());
    }
  },
  win: true,
};
