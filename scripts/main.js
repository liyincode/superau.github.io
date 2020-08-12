let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World';

let myImg = document.querySelector('img');
myImg.onclick = function() {
    let mySrc = myImg.getAttribute('src');
    if (mySrc === 'images/firefox.png') {
      myImg.setAttribute('src', 'images/chrome.png');
    } else {
      myImg.setAttribute('src', 'images/firefox.png');
    }
}

let myButton = document.querySelector('button');

myButton.onclick = function() {
  setUserName();
};

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storeName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storeName;
}
