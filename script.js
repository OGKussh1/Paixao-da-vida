const inicioNamoro = new Date("2023-12-15T19:40:00");

function atualizarContador() {
  const agora = new Date();
  const diff = agora - inicioNamoro;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById("tempo-texto").textContent =
    `${dias} dias, ${horas}h ${minutos}m ${segundos}s de amor`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

const midias = [
  "1.jpg",
  "ea00e427-af39-4e56-92cb-6ac16c96ac82.jpg",
  "IMG_0907.MP4",
  "IMG_1201.MP4",
  "IMG_1683.MP4",
  "IMG_1685.MP4",
  "IMG_2508.MP4",
  "IMG_20240229_142655.jpg",
  "IMG_20240818_002056.jpg"
];

let index = 0;
let intervalID;

function mostrarMidia() {
  const container = document.getElementById("carrossel-container");
  const atual = midias[index];
  const extensao = atual.split('.').pop().toLowerCase();

  container.innerHTML = "";

  if (["mp4", "mov"].includes(extensao)) {
    const video = document.createElement("video");
    video.src = "imagens/" + atual;
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.className = "midia";
    container.appendChild(video);
  } else if (["jpg", "jpeg", "png", "webp"].includes(extensao)) {
    const img = document.createElement("img");
    img.src = "imagens/" + atual;
    img.alt = "Foto do casal";
    img.className = "midia";
    container.appendChild(img);
  } else {
    index = (index + 1) % midias.length;
    mostrarMidia();
    return;
  }
}

function proxima() {
  index = (index + 1) % midias.length;
  mostrarMidia();
}

function anterior() {
  index = (index - 1 + midias.length) % midias.length;
  mostrarMidia();
}

function iniciarIntervalo() {
  intervalID = setInterval(proxima, 3000);
}

function pausarIntervalo() {
  clearInterval(intervalID);
}

mostrarMidia();
iniciarIntervalo();

let startX = 0;
let endX = 0;

const container = document.getElementById("carrossel-container");

container.addEventListener("touchstart", (e) => {
  pausarIntervalo();
  startX = e.touches[0].clientX;
});

container.addEventListener("touchmove", (e) => {
  endX = e.touches[0].clientX;
});

container.addEventListener("touchend", () => {
  const diffX = endX - startX;

  if (Math.abs(diffX) > 50) {
    if (diffX > 0) {
      anterior();
    } else {
      proxima();
    }
  }
  iniciarIntervalo();
});

function tocarMusica() {
  const player = document.getElementById("ytplayer");
  player.src = "https://www.youtube.com/embed/zgaCZOQCpp8?autoplay=1&mute=0&loop=1&playlist=zgaCZOQCpp8";
  document.getElementById("playMusicBtn").style.display = "none";
}
