/* =========================================================
   WEDDING INVITATION SCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


  /* =========================================================
     ELEMENTS
  ========================================================= */

  const openingScreen =
    document.querySelector(".opening-screen");

  const openButton =
    document.getElementById("openInvitation");

  const weddingMusic =
    document.getElementById("weddingMusic");

  const countdown =
    document.getElementById("countdown");

  const details =
    document.getElementById("details");

  const venue =
    document.getElementById("venue");


  /* =========================================================
     KEEP INVITATION HIDDEN INITIALLY
     
     Before clicking:
     Only the opening page is visible.
     
     The CSS handles the hiding of:
     Hero
     Countdown
     Details
     Venue
  ========================================================= */

  document.body.classList.remove("invitation-open");


  /* =========================================================
     OPEN INVITATION
     
     After clicking:
     All invitation sections become visible.
     
     No inline display changes are used,
     so the original CSS styling remains untouched.
  ========================================================= */

  if (openButton) {

    openButton.addEventListener("click", function () {


      /* -----------------------------------------------------
         START MUSIC
      ----------------------------------------------------- */

      if (weddingMusic) {

        weddingMusic.volume = 0.35;

        weddingMusic.play().catch(function () {
          // Browser may block autoplay
        });

      }


      /* -----------------------------------------------------
         SHOW COMPLETE INVITATION
         
         CSS changes:
         body.invitation-open
         makes all invitation sections visible.
      ----------------------------------------------------- */

      document.body.classList.add(
        "invitation-open"
      );


      /* -----------------------------------------------------
         HIDE OPENING PAGE
      ----------------------------------------------------- */

      if (openingScreen) {

        openingScreen.classList.add(
          "opening-hidden"
        );

      }


      /* -----------------------------------------------------
         REMOVE OPENING PAGE AFTER FADE
      ===================================================== */

      setTimeout(function () {

        if (openingScreen) {

          openingScreen.style.display = "none";

        }

        /* Start invitation from the top */

        window.scrollTo({
          top: 0,
          behavior: "auto"
        });

      }, 800);

    });

  }


  /* =========================================================
     HERO → COUNTDOWN
     
     "Click for Details"
  ========================================================= */

  const heroScroll =
    document.querySelector(".hero-scroll-hint");


  if (heroScroll && countdown) {

    heroScroll.addEventListener(
      "click",
      function () {

        countdown.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  }


  /* =========================================================
     COUNTDOWN
     
     Wedding:
     18 October 2026
     10:30 AM
     India Standard Time
  ========================================================= */

  const weddingDate =
    new Date(
      "2026-10-18T10:30:00+05:30"
    ).getTime();


  const days =
    document.getElementById("days");

  const hours =
    document.getElementById("hours");

  const minutes =
    document.getElementById("minutes");

  const seconds =
    document.getElementById("seconds");


  function updateCountdown() {

    const now =
      new Date().getTime();

    const difference =
      weddingDate - now;


    /* -----------------------------------------------------
       Wedding date has arrived
    ----------------------------------------------------- */

    if (difference <= 0) {

      if (days) {
        days.textContent = "00";
      }

      if (hours) {
        hours.textContent = "00";
      }

      if (minutes) {
        minutes.textContent = "00";
      }

      if (seconds) {
        seconds.textContent = "00";
      }

      return;

    }


    /* -----------------------------------------------------
       Calculate remaining time
    ----------------------------------------------------- */

    const remainingDays =
      Math.floor(
        difference /
        (1000 * 60 * 60 * 24)
      );


    const remainingHours =
      Math.floor(
        (
          difference %
          (1000 * 60 * 60 * 24)
        ) /
        (1000 * 60 * 60)
      );


    const remainingMinutes =
      Math.floor(
        (
          difference %
          (1000 * 60 * 60)
        ) /
        (1000 * 60)
      );


    const remainingSeconds =
      Math.floor(
        (
          difference %
          (1000 * 60)
        ) /
        1000
      );


    /* -----------------------------------------------------
       Display countdown
    ----------------------------------------------------- */

    if (days) {

      days.textContent =
        String(
          remainingDays
        ).padStart(2, "0");

    }


    if (hours) {

      hours.textContent =
        String(
          remainingHours
        ).padStart(2, "0");

    }


    if (minutes) {

      minutes.textContent =
        String(
          remainingMinutes
        ).padStart(2, "0");

    }


    if (seconds) {

      seconds.textContent =
        String(
          remainingSeconds
        ).padStart(2, "0");

    }

  }


  /* =========================================================
     START COUNTDOWN
  ========================================================= */

  updateCountdown();


  /* =========================================================
     UPDATE COUNTDOWN EVERY SECOND
  ========================================================= */

  setInterval(
    updateCountdown,
    1000
  );


  /* =========================================================
     COUNTDOWN → SAVE THE DATE
     
     "More Details Await"
  ========================================================= */

  const scrollHints =
    document.querySelectorAll(
      ".scroll-hint"
    );


  if (
    scrollHints[0] &&
    details
  ) {

    scrollHints[0].addEventListener(
      "click",
      function () {

        details.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  }


  /* =========================================================
     SAVE THE DATE → VENUE
     
     "Find Your Way There"
  ========================================================= */

  if (
    scrollHints[1] &&
    venue
  ) {

    scrollHints[1].addEventListener(
      "click",
      function () {

        venue.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  }


  /* =========================================================
     MAKE SCROLL HINTS CLICKABLE
  ========================================================= */

  if (heroScroll) {

    heroScroll.style.cursor =
      "pointer";

  }


  scrollHints.forEach(
    function (hint) {

      hint.style.cursor =
        "pointer";

    }
  );


});