function openMenu() {
    var x = document.getElementById("content");
    const y = document.getElementsByClassName("left-arrow"); // Removed the dot
    if (x.classList.contains("expanded")) {
        x.classList.remove("expanded");
        if (y.length > 0) { // Make sure element exists
            y[0].style.display = "block";
        }
    } else {
        x.classList.add("expanded");
        if (y.length > 0) { // If you want to show it again when expanded
            y[0].style.display = "none";
        }
    }
}

function setting() {
    const x = document.getElementsByClassName("headerRes");
    if (x.length > 0) { // Make sure element exists
        const element = x[0]; // Target the first matching element
        if (element.style.display === "flex") {
            element.style.height = "10%";
            // element.style.display = "none";
        } else {
            element.style.height = "100%";
            element.style.display = "flex";
        }
    }
}



const scrollContainer = document.querySelector('.songs');
const leftButton = document.querySelector('.scroll-btn.left');
// const rightButton = document.querySelector('.scroll-btn.right');

function scrollLeftBtn() {
    console.log('Scrolling left');
  scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRightBtn() {
  scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
}

scrollContainer.addEventListener('scroll', () => {
    if (scrollContainer.scrollLeft > 0) {
      leftButton.classList.add('show-left'); // Show left button when not at start
    } 
    else {
      leftButton.classList.remove('show-left'); // Hide left button when at start
    }
  });



  let currentSong = null;
  let currentIndex = -1;
  const songs = document.querySelectorAll(".source");
  
  // Function to play a song
  function playSong(element) {
      const index = Array.from(songs).indexOf(element);
      currentIndex = index;
  
      const sourceImage = element.querySelector("img").src;
      document.querySelector("#target").innerHTML = `<img src="${sourceImage}" alt="Song Image" />`; 
      document.querySelector("#TarFootImg").innerHTML = `<img src="${sourceImage}" alt="Song Image" />`; 
  
      const songname = element.querySelector("p").textContent;
      document.querySelector("#TarSongName").innerHTML = `<p>${songname}</p>`;
      document.querySelector("#TarFootTxt").innerHTML = `<p>${songname}</p>`;
  
      if (currentSong && currentSong !== element.querySelector(".mySong")) {
          currentSong.pause();
          currentSong.currentTime = 0;
      }
  
      const hold = element.querySelector(".mySong");
      currentSong = hold;
      hold.currentTime = 0;
      hold.play();
  
      // Show footer when a song plays
      document.querySelector(".footer").style.display = "flex";
  
      const progressBar = document.getElementById("progress-bar");
      const currentTimeDisplay = document.getElementById("current-time");
      const totalTimeDisplay = document.getElementById("total-time");
  
      progressBar.style.width = "0%";
  
      hold.addEventListener("loadedmetadata", () => {
          const totalMinutes = Math.floor(hold.duration / 60);
          const totalSeconds = Math.floor(hold.duration % 60);
          totalTimeDisplay.textContent = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;
      });
  
      hold.addEventListener("timeupdate", () => {
          const progress = (hold.currentTime / hold.duration) * 100;
          progressBar.style.width = `${progress}%`;
  
          const currentMinutes = Math.floor(hold.currentTime / 60);
          const currentSeconds = Math.floor(hold.currentTime % 60);
          currentTimeDisplay.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
  
          if (!totalTimeDisplay.textContent || totalTimeDisplay.textContent === '0:00') {
              const totalMinutes = Math.floor(hold.duration / 60);
              const totalSeconds = Math.floor(hold.duration % 60);
              totalTimeDisplay.textContent = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;
          }
      });
  }
  
  // Function to stop or resume the current song
  function stopSong(x) {
      if (currentSong) {
          if (currentSong.paused) {
              currentSong.play();
              x.classList.remove("fa-circle-play");
              x.classList.add("fa-circle-pause");
          } else {
              currentSong.pause();
              x.classList.remove("fa-circle-pause");
              x.classList.add("fa-circle-play");
          }
      }
  }

  
  // Function to seek within the current song
  function seek(event) {
      if (currentSong) {
          const progressBar = document.querySelector(".footer-process-bar");
          const clickPosition = event.offsetX / progressBar.offsetWidth;
          currentSong.currentTime = clickPosition * currentSong.duration;
      }
  }
  
  // Function to play the next song
  function nextSong() {
      if (currentIndex < songs.length - 1) {
          playSong(songs[currentIndex + 1]);
      }
  }
  
  // Function to play the previous song
  function previousSong() {
      if (currentIndex > 0) {
          playSong(songs[currentIndex - 1]);
      }
  }

  



