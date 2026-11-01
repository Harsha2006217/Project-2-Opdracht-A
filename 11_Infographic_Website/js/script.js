/* ============================================================
   JAVASCRIPT INFOGRAPHIC BEROEPSROL - PROJECT 2
   Harsha Kanaparthi, sprint 2 (week 38-39, september 2026)

   Klein gehouden met opzet: de infographic is een document dat
   iedereen moet kunnen lezen. Dit script doet twee dingen:
   1. Een terug-naar-boven-knop tonen zodra je ver scrollt
      (de infographic is lang op mobiel).
   2. In de console een korte log schrijven dat de pagina geladen
      is, zodat ik bij het testen zeker weet dat het script draait.

   Net als in project 1: geen cookies, geen localStorage, geen
   gegevens naar een server. Alles blijft in jouw browser.
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {

  /* ---------- 1. TERUG-NAAR-BOVEN-KNOP ---------- */
  var topKnop = document.getElementById("top-button");
  if (topKnop) {
    /* window.scrollY is hoeveel pixels je van boven af bent;
       pas na 400 pixel heeft de knop nut */
    window.addEventListener("scroll", function () {
      if (window.scrollY > 400) {
        topKnop.classList.add("zichtbaar");
      } else {
        topKnop.classList.remove("zichtbaar");
      }
    });

    /* Rustig naar boven scrollen met behavior "smooth" */
    topKnop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- 2. LOG VOOR MIJZELF BIJ HET TESTEN ---------- */
  /* console.log is alleen zichtbaar in de DevTools van de
     browser; een bezoeker ziet er niets van */
  console.log("Infographic beroepsrol geladen - project 2, Harsha Kanaparthi");
});
