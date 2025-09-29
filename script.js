document.getElementById("searchBtn").addEventListener("click", searchKodepos);

async function searchKodepos() {
  const query = document.getElementById("searchInput").value;
  if (!query) return alert("Isi dulu nama daerah!");

  const url = `https://kodepos.vercel.app/search?q=${encodeURIComponent(query)}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();

    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = ""; // kosongin dulu

    if (data.data && data.data.length > 0) {
      data.data.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.district; // cuma ambil district
        resultContainer.appendChild(li);
      });
    } else {
      resultContainer.innerHTML = "<li>Tidak ditemukan</li>";
    }
  } catch (err) {
    console.error(err);
    alert("Gagal mengambil data");
  }
}
