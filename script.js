/*
 * Global JavaScript for NA Collective website
 * Handles dynamic data rendering for products, music and artists
 * Implements client‑side shopping cart functionality using localStorage
 */

// Data definitions
const products = [
  {
    id: 1,
    name: 'Logo Tee',
    price: 25.0,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    description: 'Comfortable cotton t‑shirt featuring the NA Collective logo.',
  },
  {
    id: 2,
    name: 'Wave Hoodie',
    price: 50.0,
    image: 'https://images.unsplash.com/photo-1585386959984-a4155223163d?auto=format&fit=crop&w=400&q=80',
    description: 'Premium pullover hoodie with wavy pattern and embroidered emblem.',
  },
  {
    id: 3,
    name: 'Vinyl Sticker Pack',
    price: 8.0,
    image: 'https://images.unsplash.com/photo-1604072366595-f4f4d1461e0a?auto=format&fit=crop&w=400&q=80',
    description: 'Set of four high‑quality vinyl stickers to customize your gear.',
  },
  {
    id: 4,
    name: 'Limited Edition Print',
    price: 75.0,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
    description: 'Numbered art print featuring exclusive NA Collective artwork.',
  },
  {
    id: 5,
    name: 'Dad Hat',
    price: 30.0,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80',
    description: 'Classic unstructured cap with stitched logo.',
  },
  {
    id: 6,
    name: 'Cassette Tape',
    price: 12.0,
    image: 'https://images.unsplash.com/photo-1515171060335-54dc5fcd2e46?auto=format&fit=crop&w=400&q=80',
    description: 'Analog cassette of our latest compilation album.',
  },
];

const artists = [
  {
    id: 1,
    name: 'Lunar Echoes',
    role: 'Producer & Visual Artist',
    bio: 'A boundary‑pushing producer blending celestial soundscapes with glitchy beats. Lunar Echoes is known for live A/V performances that sync bespoke visuals with hypnotic bass.',
    image: 'https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=400&q=80',
    links: {
      instagram: '#',
      soundcloud: '#',
      spotify: '#',
    },
  },
  {
    id: 2,
    name: 'Synesthetic',
    role: 'Experimental Composer',
    bio: 'Synesthetic translates colors into frequencies, creating immersive compositions that blur the line between music and painting. Each release arrives with original artwork and an interactive experience.',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
    links: {
      instagram: '#',
      soundcloud: '#',
      spotify: '#',
    },
  },
  {
    id: 3,
    name: 'Bitcrushed Dreams',
    role: 'Chiptune Producer',
    bio: 'Fusing vintage game consoles with modern production techniques, Bitcrushed Dreams crafts nostalgia‑inducing tracks that are equal parts playful and poignant.',
    image: 'https://images.unsplash.com/photo-1514361892635-e3a3a0e82c87?auto=format&fit=crop&w=400&q=80',
    links: {
      instagram: '#',
      soundcloud: '#',
      spotify: '#',
    },
  },
  {
    id: 4,
    name: 'Analog Blossom',
    role: 'Multi‑Instrumentalist',
    bio: 'A sound sculptor combining organic instruments, modular synths and field recordings to tell emotive stories. Their live sets weave jazz, ambient and world influences.',
    image: 'https://images.unsplash.com/photo-1495435229349-e86db7bfa013?auto=format&fit=crop&w=400&q=80',
    links: {
      instagram: '#',
      soundcloud: '#',
      spotify: '#',
    },
  },
  {
    id: 5,
    name: 'Pixel Voyage',
    role: 'Visual Storyteller',
    bio: 'An award‑winning animator and VJ who crafts psychedelic journeys. Pixel Voyage collaborates with musicians to create bespoke visuals for each release and live show.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    links: {
      instagram: '#',
      soundcloud: '#',
      spotify: '#',
    },
  },
];

const musicReleases = [
  {
    id: 1,
    title: 'Nebula Drift',
    artist: 'Lunar Echoes',
    cover: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=400&q=80',
    audio: 'https://file-examples.com/storage/fe30df4bf1b5ee6e29281b9/2017/11/file_example_MP3_700KB.mp3',
    description: 'A lush journey through cosmic pads and rolling percussion, exploring the infinite depths of the universe.',
  },
  {
    id: 2,
    title: 'Chromatic Bloom',
    artist: 'Synesthetic',
    cover: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80',
    audio: 'https://file-examples.com/storage/fe30df4bf1b5ee6e29281b9/2017/11/file_example_MP3_700KB.mp3',
    description: 'An auditory painting where each chord progression corresponds to vibrant hues on a canvas.',
  },
  {
    id: 3,
    title: '8‑Bit Reverie',
    artist: 'Bitcrushed Dreams',
    cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80',
    audio: 'https://file-examples.com/storage/fe30df4bf1b5ee6e29281b9/2017/11/file_example_MP3_700KB.mp3',
    description: 'A nostalgic ode to retro gaming with modern production flair and emotive leads.',
  },
  {
    id: 4,
    title: 'Organic Circuitry',
    artist: 'Analog Blossom',
    cover: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80',
    audio: 'https://file-examples.com/storage/fe30df4bf1b5ee6e29281b9/2017/11/file_example_MP3_700KB.mp3',
    description: 'Blending acoustic instruments with modular synth rhythms for a mesmerizing sonic experience.',
  },
];

// Utility: read cart from localStorage
function getCart() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

// Utility: save cart to localStorage
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Add product to cart
function addToCart(productId) {
  const cart = getCart();
  const item = cart.find((p) => p.id === productId);
  if (item) {
    item.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  saveCart(cart);
  updateCartCount();
  alert('Added to cart');
}

// Update cart badge count
function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cart-count');
  if (!badge) return;
  badge.textContent = count > 0 ? count : '';
}

// Render preview sections on index page
function renderPreviews() {
  const musicPreview = document.getElementById('music-preview');
  if (musicPreview) {
    musicReleases.slice(0, 3).forEach((release) => {
      const card = document.createElement('div');
      card.className = 'bg-white shadow rounded overflow-hidden';
      card.innerHTML = `
        <img src="${release.cover}" alt="${release.title}" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="font-semibold text-lg mb-1">${release.title}</h3>
          <p class="text-sm text-gray-500 mb-2">by ${release.artist}</p>
          <p class="text-sm line-clamp-3 text-gray-700 mb-4">${release.description}</p>
          <a href="music.html" class="text-indigo-600 hover:underline text-sm">Listen</a>
        </div>
      `;
      musicPreview.appendChild(card);
    });
  }
  const merchPreview = document.getElementById('merch-preview');
  if (merchPreview) {
    products.slice(0, 3).forEach((product) => {
      const card = document.createElement('div');
      card.className = 'bg-white shadow rounded overflow-hidden';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover" />
        <div class="p-4 flex flex-col">
          <h3 class="font-semibold text-lg mb-1">${product.name}</h3>
          <p class="text-gray-700 mb-2">$${product.price.toFixed(2)}</p>
          <button onclick="addToCart(${product.id})" class="mt-auto bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded text-sm">Add to Cart</button>
        </div>
      `;
      merchPreview.appendChild(card);
    });
  }
  const artistsPreview = document.getElementById('artists-preview');
  if (artistsPreview) {
    artists.slice(0, 3).forEach((artist) => {
      const card = document.createElement('div');
      card.className = 'bg-white shadow rounded overflow-hidden';
      card.innerHTML = `
        <img src="${artist.image}" alt="${artist.name}" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="font-semibold text-lg mb-1">${artist.name}</h3>
          <p class="text-sm text-gray-500 mb-2">${artist.role}</p>
          <p class="text-sm line-clamp-3 text-gray-700 mb-4">${artist.bio}</p>
          <a href="artists.html" class="text-indigo-600 hover:underline text-sm">Learn more</a>
        </div>
      `;
      artistsPreview.appendChild(card);
    });
  }
}

// Render full products on shop page
function renderProducts() {
  const container = document.getElementById('products-list');
  if (!container) return;
  products.forEach((product) => {
    const card = document.createElement('div');
    card.className = 'bg-white shadow rounded overflow-hidden flex flex-col';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="w-full h-56 object-cover" />
      <div class="p-4 flex flex-col flex-grow">
        <h3 class="font-semibold text-lg mb-1">${product.name}</h3>
        <p class="text-sm text-gray-500 mb-2">${product.description}</p>
        <p class="font-bold text-xl mb-3">$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})" class="mt-auto bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded text-sm">Add to Cart</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Render artists list
function renderArtists() {
  const container = document.getElementById('artists-list');
  if (!container) return;
  artists.forEach((artist) => {
    const card = document.createElement('div');
    card.className = 'bg-white shadow rounded overflow-hidden flex flex-col';
    let socialLinks = '';
    if (artist.links.instagram) {
      socialLinks += `<a href="${artist.links.instagram}" class="text-indigo-600 hover:text-indigo-800 mr-2"><i class="fa-brands fa-instagram"></i></a>`;
    }
    if (artist.links.soundcloud) {
      socialLinks += `<a href="${artist.links.soundcloud}" class="text-indigo-600 hover:text-indigo-800 mr-2"><i class="fa-brands fa-soundcloud"></i></a>`;
    }
    if (artist.links.spotify) {
      socialLinks += `<a href="${artist.links.spotify}" class="text-indigo-600 hover:text-indigo-800"><i class="fa-brands fa-spotify"></i></a>`;
    }
    card.innerHTML = `
      <img src="${artist.image}" alt="${artist.name}" class="w-full h-56 object-cover" />
      <div class="p-4 flex flex-col flex-grow">
        <h3 class="font-semibold text-lg mb-1">${artist.name}</h3>
        <p class="text-sm text-gray-500 mb-2">${artist.role}</p>
        <p class="text-sm text-gray-700 mb-4 flex-grow">${artist.bio}</p>
        <div class="mt-auto flex items-center text-lg">${socialLinks}</div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Render music releases list
function renderMusic() {
  const container = document.getElementById('music-list');
  if (!container) return;
  musicReleases.forEach((release) => {
    const card = document.createElement('div');
    card.className = 'bg-white shadow rounded overflow-hidden flex flex-col';
    card.innerHTML = `
      <img src="${release.cover}" alt="${release.title}" class="w-full h-56 object-cover" />
      <div class="p-4 flex flex-col flex-grow">
        <h3 class="font-semibold text-lg mb-1">${release.title}</h3>
        <p class="text-sm text-gray-500 mb-2">${release.artist}</p>
        <p class="text-sm text-gray-700 mb-4 flex-grow">${release.description}</p>
        <audio controls src="${release.audio}" class="w-full mb-2"></audio>
      </div>
    `;
    container.appendChild(card);
  });
}

// Render cart on cart page
function renderCart() {
  const container = document.getElementById('cart-container');
  if (!container) return;
  const cart = getCart();
  if (cart.length === 0) {
    container.innerHTML = '<p class="text-lg">Your cart is empty. <a href="shop.html" class="text-indigo-600 hover:underline">Shop our merch</a>.</p>';
    return;
  }
  // Build table structure
  let table = document.createElement('div');
  table.className = 'bg-white shadow overflow-hidden rounded';
  let total = 0;
  const rows = cart
    .map((item) => {
      const product = products.find((p) => p.id === item.id);
      const lineTotal = product.price * item.qty;
      total += lineTotal;
      return `
        <div class="grid grid-cols-5 gap-4 items-center border-b px-4 py-3">
          <div class="col-span-2 flex items-center">
            <img src="${product.image}" alt="${product.name}" class="w-16 h-16 object-cover mr-4" />
            <div>
              <p class="font-semibold">${product.name}</p>
              <p class="text-sm text-gray-500">$${product.price.toFixed(2)}</p>
            </div>
          </div>
          <div class="text-center">${item.qty}</div>
          <div class="text-center">$${lineTotal.toFixed(2)}</div>
          <div class="text-right">
            <button
              class="text-red-500 hover:text-red-700 text-sm"
              onclick="removeFromCart(${item.id})"
            >
              Remove
            </button>
          </div>
        </div>
      `;
    })
    .join('');
  table.innerHTML = `
    <div class="grid grid-cols-5 gap-4 font-semibold bg-gray-100 px-4 py-2">
      <div class="col-span-2">Product</div>
      <div class="text-center">Qty</div>
      <div class="text-center">Subtotal</div>
      <div></div>
    </div>
    ${rows}
    <div class="flex justify-end items-center px-4 py-4">
      <p class="text-xl font-bold mr-4">Total: $${total.toFixed(2)}</p>
      <button
        onclick="checkout()"
        class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded"
      >
        Checkout
      </button>
    </div>
  `;
  container.appendChild(table);
}

// Remove item from cart
function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter((item) => item.id !== productId);
  saveCart(cart);
  renderCart();
  updateCartCount();
}

// Checkout: simple confirmation, clears cart
function checkout() {
  if (confirm('This is a demo site. No payment will be processed. Do you want to clear your cart?')) {
    localStorage.removeItem('cart');
    renderCart();
    updateCartCount();
    alert('Thank you for your purchase!');
  }
}

// On document ready, run appropriate functions
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderPreviews();
  renderProducts();
  renderArtists();
  renderMusic();
  renderCart();
});