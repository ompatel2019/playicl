function showAnswer() {
    const answerElements = document.getElementsByClassName('answer-1');
    for (let i = 0; i < answerElements.length; i++) {
      answerElements[i].classList.toggle('hidden');
    }
  }

  function showAnswer2() {
    const answerElements = document.getElementsByClassName('answer-2');
    for (let i = 0; i < answerElements.length; i++) {
      answerElements[i].classList.toggle('hidden');
    }
  }

  function showAnswer3() {
    const answerElements = document.getElementsByClassName('answer-3');
    for (let i = 0; i < answerElements.length; i++) {
      answerElements[i].classList.toggle('hidden');
    }
  }

  function showAnswer4() {
    const answerElements = document.getElementsByClassName('answer-4');
    for (let i = 0; i < answerElements.length; i++) {
      answerElements[i].classList.toggle('hidden');
    }
  }

  function showAnswer5() {
    const answerElements = document.getElementsByClassName('answer-5');
    for (let i = 0; i < answerElements.length; i++) {
      answerElements[i].classList.toggle('hidden');
    }
  }



  function countdownTimer() {
    const countdownDate = new Date("September 4, 2024 19:00:00").getTime();

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".countdown").innerHTML = "We're live!";
        }
    }, 1000);
}

countdownTimer();

function toggleJuniors() {
  // Hide both seniors sections and show both juniors sections
  document.getElementById('senior1').classList.add('hidden');
  document.getElementById('senior2').classList.add('hidden');
  document.getElementById('junior1').classList.remove('hidden');
  document.getElementById('junior2').classList.remove('hidden');

  document.getElementById('JuniorBtn').classList.add('bg-black', 'text-white');
  document.getElementById('JuniorBtn').classList.remove('bg-white', 'text-black');
  document.getElementById('SeniorBtn').classList.add('bg-white', 'text-black');
  document.getElementById('SeniorBtn').classList.remove('bg-black', 'text-white');
}

function toggleSeniors() {
  // Hide both juniors sections and show both seniors sections
  document.getElementById('junior1').classList.add('hidden');
  document.getElementById('junior2').classList.add('hidden');
  document.getElementById('senior1').classList.remove('hidden');
  document.getElementById('senior2').classList.remove('hidden');
  
  document.getElementById('SeniorBtn').classList.add('bg-black', 'text-white');
  document.getElementById('SeniorBtn').classList.remove('bg-white', 'text-black');
  document.getElementById('JuniorBtn').classList.add('bg-white', 'text-black');
  document.getElementById('JuniorBtn').classList.remove('bg-black', 'text-white');
}

