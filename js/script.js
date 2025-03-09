document.getElementById("audioInput").addEventListener("change", function (t) {
  const e = t.target.files[0];
  if (!e) return;
  const n = new Audio();
  (n.src = URL.createObjectURL(e)),
    (n.onloadedmetadata = function () {
      const t = Math.round(1e3 * n.duration),
        e = document.getElementById("durationOutput");
      (e.innerText = `looptime: ${t}`),
        e.classList.remove("hide"),
        e.setAttribute("data-duration", t);
    });
}),
  document
    .getElementById("durationOutput")
    .addEventListener("click", function () {
      const t = this.getAttribute("data-duration");
      t &&
        navigator.clipboard
          .writeText(t)
          .then(() => alert("Copied to clipboard!"))
          .catch((t) => console.error("Failed to copy:", t));
    });

function showLoopTab() {
  document.getElementById("__loop-tab").classList.remove("tab-hidden");
  document.getElementById("audio-tab").classList.add("clicked");

  document.getElementById("__size-tab").classList.add("tab-hidden");
  document.getElementById("size-tab").classList.remove("clicked");
}

function showSizeTab() {
  document.getElementById("__loop-tab").classList.add("tab-hidden");
  document.getElementById("audio-tab").classList.remove("clicked");

  document.getElementById("__size-tab").classList.remove("tab-hidden");
  document.getElementById("size-tab").classList.add("clicked");
}

function calculateSize() {
  let headsRow = parseInt(document.getElementById("headsRow").value) || 0;
  let headsColumn = parseInt(document.getElementById("headsColumn").value) || 0;
  let headHeight = parseInt(document.getElementById("headHeight").value) || 0;

  if (headsRow <= 0 || headsColumn <= 0 || headHeight <= 0) {
    document.getElementById("output").innerHTML = "Please enter correct numbers!";
    return;
  }

  let totalWidth = headsRow * 164;
  let totalHeight = (headsColumn * headHeight) + 380;

  let totalWidthHD = totalWidth * 2;
  let totalHeightHD = totalHeight * 2;

  document.getElementById("output").innerHTML = `
        Total Size: <b>${totalWidth}px × ${totalHeight}px</b> <br>
        HD Size: <b>${totalWidthHD}px × ${totalHeightHD}px</b>
    `;
}
