

const coins = 100;

    const mutCoin = document.getElementById('all-coin');
    const reactBtn = document.getElementById('all-react');
    const callBtn = document.getElementById('call-btn');

     reactBtn.addEventListener('click', function (){

    
    });

    callBtn.addEventListener('click', () => {
      if (coins >= 20) {
        coins -= 20; // ২০ কয়েন কাটা
      } else {
        alert('কয়েন যথেষ্ট নয়!');
      }
      updateDisplay();
    });

    function updateDisplay() {
      coinDisplay.textContent = `Coins: ${coins}`;
    }














//-----------------

    function updateDisplay() {
      document.getElementById('all-coin').innerText + coins;
    }

    function addCoins() {
      coins += 20;
      updateDisplay();
    }

    function cutCoins() {
      if (coins >= 20) {
        coins -= 20;
        updateDisplay();
      } else {
        alert("যথেষ্ট কয়েন নেই!");
      }
    }