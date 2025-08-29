





  //    document.getElementById('call-btn').addEventListener('click', function (){
  //  const coins = 100;
  //      if (coins >= 20) {
  //       coins -= 20;
  //       return;
  //     } else {
  //       alert('recharge korun');
  //     }
    
    
  //   });

//     callBtn.addEventListener('click', () => {
//       if (coins >= 20) {
//         coins -= 20; // ২০ কয়েন কাটা
//       } else {
//         alert('কয়েন যথেষ্ট নয়!');
//       }
//       updateDisplay();
//     });

//     function updateDisplay() {
//       coinDisplay.textContent = `Coins: ${coins}`;
//     }














// //-----------------

    function coin() {
      document.getElementById('all-coin').innerText + coins;
 }


document.getElementsByClassName(love).addEventListener("click",


    function addCoins() {

      const coins = 100;
      
      coins += 20;
      addCoins();
    })

    function cutCoins() {
      if (coins >= 20) {
        coins -= 20;
        cutCoins();
      } else {
        alert("sorry");
      }
    }