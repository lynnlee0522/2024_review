const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

class Card {
  constructor() {
    this.card = []
    this.cardTable = []
    this.clientCard = {}
  }

  // 洗牌
  shuffle() {
    let removedValues = this.card.splice(0, 3);
    this.cardTable = removedValues
  }

  sprintCard(num) {
    const suit = ['♣️', '♦️', '♠️', '♥️'];
    const number = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

    return suit[num % 4] + number[Math.floor(num / 4)]
  }

  shuffleArray() {
    let array = Array.from({ length: 52 }, (_, index) => index);
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.card = array;
  }

  init() {
    this.shuffleArray();
    this.cardTable = []
    this.clientCard = {}
  }

  // 发用户牌
  licensing(size) {
    this.init();
    for (let i = 0; i < size; i++) {
      let removedValues = this.card.splice(0, 2);
      this.clientCard[i] = removedValues
    }
  }

  turn() {
    let removedValues = this.card.splice(0, 1);
    this.cardTable = [...this.cardTable, ...removedValues]
  }

  river() {
    this.turn()
  }

  getClientCard(idx) {
    return {
      clientCard: this.clientCard?.[idx]?.map(item => this.sprintCard(item)),
    }
  }

  getCard() {
    return {
      cardTable: this.cardTable?.map(item => this.sprintCard(item)),
    }
  }
}

let card = undefined
const handleMessage = (msg, size) => {
  const message = msg.toString('utf8');

  switch (message) {
    case 'start': {
      card.licensing(size);
      break
    }

    case 'shuffle': {
      card.shuffle();
      break
    }

    case 'turn':
      card.turn();
      break;

    case 'river':
      card.river();
      break;

    default:
      break;
  }
}

const handleSend = (msg, idx) => {
  const message = msg.toString('utf8');
  const sendMsg = {
    step: message,
    ...card.getClientCard(idx),
    ...card.getCard(),
  }

  console.log("-sendMsg-", sendMsg);
  return JSON.stringify(sendMsg)
}

wss.on('connection', function connection(ws) {
  console.log('A new client connected');
  card = new Card();

  ws.on('message', (msg) => {
    handleMessage(msg, wss.clients.size);
    let timer = 0
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        const sendMsg = handleSend(msg, timer++)
        client.send(sendMsg);
      }
    });
  });

  ws.on('close', function close() {
    console.log('Client disconnected');
  });
});