// ========== ELEMENTS ==========
const addToCartBtn = document.getElementById('add-to-cart');
const cartSection = document.getElementById('cart');
const checkoutSection = document.getElementById('checkout');
const confirmationSection = document.getElementById('confirmation');
const goToCheckoutBtn = document.getElementById('go-to-checkout');
const closeCartBtn = document.getElementById('close-cart');
const backToCartBtn = document.getElementById('back-to-cart');
const checkoutForm = document.getElementById('checkout-form');
const backToSiteBtn = document.getElementById('back-to-site');

const openVideoBtn = document.getElementById('open-video');
const videoModal = document.getElementById('video-modal');
const closeVideoBtn = document.getElementById('close-video');
const daveVideo = document.getElementById('dave-video');

// ========== HELPERS ==========
function hideAllSpecialSections() {
  cartSection.classList.add('hidden');
  checkoutSection.classList.add('hidden');
  confirmationSection.classList.add('hidden');
}

function showSection(section) {
  hideAllSpecialSections();
  section.classList.remove('hidden');
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
// ========== CART ==========
let toastTimer;

addToCartBtn.addEventListener('click', () => {
  const toast = document.getElementById('toast');
  toast.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('hidden');
  }, 1600);
});

document.getElementById('view-cart').addEventListener('click', () => {
  showSection(cartSection);
});

closeCartBtn.addEventListener('click', () => {
  hideAllSpecialSections();
});

goToCheckoutBtn.addEventListener('click', () => {
  showSection(checkoutSection);
});

backToCartBtn.addEventListener('click', () => {
  showSection(cartSection);
});

// ========== CHECKOUT (FAKE) ==========
checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault(); // stop real form submit
  showSection(confirmationSection);
});

backToSiteBtn.addEventListener('click', () => {
  hideAllSpecialSections();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========== VIDEO MODAL ==========
openVideoBtn.addEventListener('click', () => {
  videoModal.classList.remove('hidden');
  // try to autoplay
  daveVideo.currentTime = 0;
  const playPromise = daveVideo.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // autoplay blocked – user can press play manually
    });
  }
});

closeVideoBtn.addEventListener('click', () => {
  daveVideo.pause();
  videoModal.classList.add('hidden');
});

// close modal if user taps the dark background
videoModal.addEventListener('click', (e) => {
  if (e.target === videoModal) {
    daveVideo.pause();
    videoModal.classList.add('hidden');
  }
});