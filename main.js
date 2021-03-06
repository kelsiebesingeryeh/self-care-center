var messageArea = document.querySelector('.random-text');
var icon = document.querySelector('.icon');
var receiveMessageButton = document.querySelector('.receive-message');
var removeMessageButton = document.querySelector('#remove-message-button');
var radioButtons = document.getElementsByName('message');

var affirmations = [
  'I don’t sweat the small stuff.',
  'I can. I will. End of story.',
  'I feed my spirit. I train my body. I focus my mind. It’s my time.',
  'I am in charge of how I feel and today I am choosing happiness.',
  'I am my own superhero.',
  'I am enough.',
  'I have the power to create change.',
  'I can do all the things.',
  'When you really want it, you are unstoppable.',
  'My past is not a reflection of my future.',
  'I will succeed today.',
  'I’m allowed to make mistakes; they don’t make up my whole story.',
  'I know exactly what to do to achieve success.',
  'I can absolutely do anything I put my mind to.',
  'My contributions to the world are valuable.'
];

var mantras = [
  'Everything happens right on schedule.',
  'Remember who you are.',
  'It will get done.',
  'Love the life you have.',
  'You are a smart, powerful woman. You’ve got this.',
  'Inhale, exhale.',
  'Expect nothing and appreciate everything.',
  'Be a warrior, not a worrier.',
  'Don’t give up. Great things take time.',
  'Confidence is something you create within yourself by believing in who you are.',
  'Find a way or make one.',
  'All progress takes place outside your comfort zone.',
  'Life doesn’t get easier you just get stronger.',
  'How beautiful is it to stay silent when someone expects you to be enraged.',
  'If it doesn’t challenge you, it won’t change you.'
];

receiveMessageButton.addEventListener('click', revealMessage);
receiveMessageButton.addEventListener('click', show(removeMessageButton));
removeMessageButton.addEventListener('click', removeMessageAlert);
removeMessageButton.addEventListener('click', removeMessage);

function generateRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function revealMessage() {
  event.preventDefault();
  var affirmationsIndex = generateRandomIndex(affirmations);
  var mantrasIndex = generateRandomIndex(mantras);
  hide(icon);

  if (radioButtons[0].checked) {
    setMessage(affirmations[affirmationsIndex]);
  } else if (radioButtons[1].checked) {
    setMessage(mantras[mantrasIndex]);
  }
}

function setMessage(message) {
  messageArea.innerText = message;
}

function removeMessageAlert() {
  alert("We're sorry you didn't like this message. This message has been removed.");
  removeMessageFromList(affirmations);
  removeMessageFromList(mantras);
}

function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
    element.classList.remove('hidden')
}

function removeMessage() {
  setMessage("");
  hide(removeMessageButton);
  show(icon);
}

function removeMessageFromList(message) {
  for (var i = 0; i < message.length; i++) {
    if (messageArea.innerText === message[i]) {
      message.splice(i, 1);
    }
  }
}
