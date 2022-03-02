document.addEventListener("DOMContentLoaded", () => {
  let counter = document.querySelector("#counter");
  const plus = document.querySelector("#plus");
  const minus = document.querySelector("#minus");
  const heart = document.querySelector("#heart");
  const likes = document.getElementsByClassName("likes")[0];
  const form = document.getElementById("comment-form");
  let comments = document.querySelector(".comments");
  const pauseButton = document.querySelector("#pause");

  let sec = 0;
  let timer;

  clock();

  function clock() {
    timer = setInterval(() => {
      sec++;
      counter.innerHTML = sec;
    }, 1000);
  }

  plus.addEventListener("click", () => {
    sec += 1;
    counter.innerHTML = sec;
  });

  minus.addEventListener("click", () => {
    sec -= 1;
    counter.innerHTML = sec;
  });

  heart.addEventListener("click", () => {
    logLikes();
  });

  function logLikes() {
    const li = document.createElement("li");
    likes.appendChild(li);
    li.textContent = sec;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    leaveComment(e.target.commentInput.value);
  });

  function leaveComment(comment) {
    const li2 = document.createElement("li");
    li2.innerText = comment;
    comments.append(li2);
  }

  let pause = false;

  pauseButton.addEventListener("click", togglePause);

  function togglePause() {
    pause = !pause;
    if (pause) {
      clearInterval(timer);
      pauseButton.innerText = "resume";
      plus.disabled = true;
      minus.disabled = true;
      heart.disabled = true;
      document.querySelector("#submit").disabled = true;
    } else {
      clock();
      pauseButton.innerText = "pause";
      plus.disabled = false;
      minus.disabled = false;
      heart.disabled = false;
      document.querySelector("#submit").disabled = false;
    }
  }
}); //code ends
