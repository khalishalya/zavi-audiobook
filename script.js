// Screen Navigation
function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active");
  });
  document.getElementById(screenId).classList.add("active");

  // Pause audio when leaving audiobook screen
  if (screenId !== "audiobook") {
    const audio = document.getElementById("audioPlayer");
    audio.pause();
    updatePlayButton(false);
  }

  // Reset flipbook to first page when entering
  if (screenId === "flipbook") {
    currentPage = 1;
    updateFlipbook();
  }
}

// ==================== AUDIOBOOK PLAYER ====================

const audio = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const progressBar = document.getElementById("progressBar");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const playingIndicator = document.getElementById("playingIndicator");

let isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
}

audio.addEventListener("play", () => {
  isPlaying = true;
  updatePlayButton(true);
});


audio.addEventListener("pause", () => {
  isPlaying = false;
  updatePlayButton(false);
});

function updatePlayButton(playing) {
  const icon = playBtn.querySelector("i");
  if (playing) {
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
    playingIndicator.classList.add("active");
  } else {
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
    playingIndicator.classList.remove("active");
  }
}

audio.addEventListener("loadedmetadata", () => {
  durationEl.textContent = formatTime(audio.duration);
  progressBar.max = audio.duration;
  progressBar.value = audio.currentTime;
});

audio.addEventListener("durationchange", () => {
  if (!isNaN(audio.duration) && audio.duration > 0) {
    durationEl.textContent = formatTime(audio.duration);
    progressBar.max = audio.duration;
  }
});

audio.addEventListener("timeupdate", () => {
  progressBar.value = audio.currentTime;
  currentTimeEl.textContent = formatTime(audio.currentTime);

  if (!isNaN(audio.duration) && audio.duration > 0) {
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.background = `linear-gradient(to right, var(--color-brand) ${percent}%, #cbd5e1 ${percent}%)`;
  }
});

progressBar.addEventListener("input", () => {
  audio.currentTime = progressBar.value;
});

progressBar.addEventListener("change", () => {
  audio.currentTime = progressBar.value;
});

function skip(seconds) {
  audio.currentTime = Math.max(
    0,
    Math.min(audio.duration, audio.currentTime + seconds),
  );
}

function changeSpeed() {
  const speed = document.getElementById("speedSelect").value;
  audio.playbackRate = parseFloat(speed);
}

function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

// ==================== FLIPBOOK ====================

const pages = document.querySelectorAll(".page");
const totalPages = pages.length;
let currentPage = 1;

document.getElementById("totalPages").textContent = totalPages;

pages.forEach((page) => {
  const image = page.querySelector("img");
  if (!image) return;

  image.addEventListener("error", () => markMissingPage(page));
});

let isFlipping = false;
const flipSound = document.getElementById("flipSound");

function getPagesPerView() {
  return window.innerWidth <= 900 ? 1 : 2;
}

function updateFlipbook() {
  const pagesPerView = getPagesPerView();
  const leftPage = currentPage;
  const rightPage =
    pagesPerView === 2 && currentPage + 1 <= totalPages
      ? currentPage + 1
      : null;

  pages.forEach((page, index) => {
    page.classList.remove("active", "left", "right");
    const pageNum = index + 1;
    if (pageNum === leftPage) {
      page.classList.add("active", "left");
    }
    if (pageNum === rightPage) {
      page.classList.add("active", "right");
    }
    if (page.classList.contains("active")) {
      ensurePageImage(page);
    }
  });

  const pageLabel = rightPage ? `${leftPage}-${rightPage}` : `${leftPage}`;
  document.getElementById("currentPage").textContent = pageLabel;
  document.getElementById("prevBtn").disabled = currentPage <= 1 || isFlipping;
  document.getElementById("nextBtn").disabled =
    (pagesPerView === 2 ? currentPage + 1 >= totalPages : currentPage >= totalPages) || isFlipping;
}

function markMissingPage(page) {
  page.classList.add("missing-page");
  page.textContent = `Halaman ${page.dataset.page} belum tersedia.`;
}

function ensurePageImage(page) {
  const image = page.querySelector("img");
  if (!image) return;

  if (image.complete && image.naturalWidth === 0) {
    markMissingPage(page);
  }
}

function playPageFlipSound() {
  if (!flipSound) return;
  if (!flipSound.paused) {
    flipSound.currentTime = 0;
  }
  flipSound.play().catch(() => {
    // Ignore if playback is blocked before user interaction
  });
}

function nextPage() {
  if (isFlipping || currentPage >= totalPages) return;
  const pagesPerView = getPagesPerView();
  const pageEl =
    pagesPerView === 2
      ? document.querySelector(".page.right")
      : document.querySelector(".page.active");
  if (!pageEl) return;

  isFlipping = true;
  pageEl.classList.add("flipping-next");
  playPageFlipSound();

  pageEl.addEventListener(
    "animationend",
    () => {
      pageEl.classList.remove("flipping-next");
      if (pagesPerView === 1) {
        currentPage = Math.min(totalPages, currentPage + 1);
      } else {
        currentPage =
          currentPage + 2 <= totalPages ? currentPage + 2 : totalPages;
      }
      isFlipping = false;
      updateFlipbook();
    },
    { once: true },
  );
}

function prevPage() {
  if (isFlipping || currentPage <= 1) return;
  const pagesPerView = getPagesPerView();
  const pageEl =
    pagesPerView === 2
      ? document.querySelector(".page.left")
      : document.querySelector(".page.active");
  if (!pageEl) return;

  isFlipping = true;
  pageEl.classList.add("flipping-prev");
  playPageFlipSound();

  pageEl.addEventListener(
    "animationend",
    () => {
      pageEl.classList.remove("flipping-prev");
      if (pagesPerView === 1) {
        currentPage = Math.max(1, currentPage - 1);
      } else {
        currentPage = currentPage - 2 >= 1 ? currentPage - 2 : 1;
      }
      isFlipping = false;
      updateFlipbook();
    },
    { once: true },
  );
}

window.addEventListener("resize", updateFlipbook);

// Initialize flipbook
updateFlipbook();

// Keyboard navigation for flipbook
document.addEventListener("keydown", (e) => {
  const flipbookScreen = document.getElementById("flipbook");
  if (flipbookScreen.classList.contains("active")) {
    if (e.key === "ArrowRight") nextPage();
    if (e.key === "ArrowLeft") prevPage();
  }
});

// Touch/Swipe support for flipbook
let touchStartX = 0;
let touchEndX = 0;

document.getElementById("book").addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.getElementById("book").addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      nextPage(); // Swipe left = next
    } else {
      prevPage(); // Swipe right = prev
    }
  }
}

// ==================== PDF MODAL ====================

function openPdfModal(pdfPath, pdfTitle) {
  const modal = document.getElementById("pdfModal");
  const iframe = document.getElementById("pdfIframe");
  const downloadLink = document.getElementById("downloadLink");
  const modalTitle = document.getElementById("modalTitle");

  // Set the PDF URL in iframe
  iframe.src = pdfPath;

  // Set the download link
  downloadLink.href = pdfPath;
  downloadLink.download = pdfPath.split("/").pop();

  // Set modal title
  modalTitle.textContent = pdfTitle;

  // Show modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePdfModal() {
  const modal = document.getElementById("pdfModal");
  const iframe = document.getElementById("pdfIframe");

  // Hide modal
  modal.classList.remove("active");
  document.body.style.overflow = "auto";

  // Clear iframe src
  iframe.src = "";
}

// Close modal when clicking outside
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("pdfModal");
  if (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closePdfModal();
      }
    });
  }
});

// Close modal with ESC key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closePdfModal();
  }
});
