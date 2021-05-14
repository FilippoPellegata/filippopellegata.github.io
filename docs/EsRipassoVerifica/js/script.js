function Disegna() {
  var myCanvas = document.getElementById("myCanvas");
  var ctx = myCanvas.getContext("2d");
  // semicerchio sotto
  ctx.beginPath();
  ctx.fillStyle = "rgb(0, 0, 255)";
  ctx.arc(75, 75, 20, 1 * Math.PI, 0 * Math.PI, true);
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.closePath();

  // semicerchio sopra
  ctx.beginPath();
  ctx.fillStyle = "rgb(0, 0, 255)";
  ctx.arc(175, 75, 20, 0 * Math.PI, 1 * Math.PI, true);
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "rgb(0, 0, 255)";
  ctx.stroke();
  ctx.closePath();

  // semicerchio sinistra
  ctx.beginPath();
  ctx.fillStyle = "rgb(0, 0, 255)";
  ctx.arc(75, 175, 20, 1.5 * Math.PI, 0.5 * Math.PI, true);
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "rgb(0, 0, 255)";
  ctx.stroke();
  ctx.closePath();

  // semicerchio a destra
  ctx.beginPath();
  ctx.fillStyle = "rgb(0, 0, 255)";
  ctx.arc(175, 175, 20, 0.5 * Math.PI, 1.5 * Math.PI, true);
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "rgb(0, 0, 255)";
  ctx.stroke();
  ctx.closePath();

  // cerchio
  ctx.beginPath();
  ctx.fillStyle = "rgb(0, 0, 255)";
  ctx.arc(20, 175, 20, 0, 2 * Math.PI, true);
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "rgb(0, 0, 255)";
  ctx.stroke();
  ctx.closePath();

  // quadrato
  ctx.beginPath();
  ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
  ctx.fillRect(250, 250, 20, 20);
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "rgb(0, 0, 255)";
  ctx.stroke();
  ctx.closePath();

  // piano cartesiano
  var c = document.getElementById("myCanvas");
  const Ox = c.width / 2;
  const Oy = c.height / 2;
  const u = 20;
  var ctx = c.getContext("2d");
  ctx.strokeStyle = "rgba(120,120,120,0.5)";
  ctx.fillStyle = "rgba(120,120,120,0.5)";
  ctx.moveTo(Ox + 50, 20);
  ctx.lineTo(Ox + 50 + u, 20);
  ctx.moveTo(20, Oy);
  ctx.lineTo(c.width - 20, Oy);
  ctx.moveTo(c.width - 20, Oy - 4);
  ctx.lineTo(c.width - 20, Oy + 4);
  ctx.lineTo(c.width - 12, Oy);
  ctx.lineTo(c.width - 20, Oy - 4);
  ctx.moveTo(Ox, 20);
  ctx.lineTo(Ox, c.height - 20);
  ctx.moveTo(Ox - 4, 20);
  ctx.lineTo(Ox + 4, 20);
  ctx.lineTo(Ox, 12);
  ctx.lineTo(Ox - 4, 20);
  ctx.stroke();
  ctx.fill();
  ctx.fillStyle = "rgb(0,0,0)";

  ctx.fillText("x", c.width - 20, Oy + 10);
  ctx.fillText("y", Ox + 5, 20);
  ctx.fillText("O", Ox + 2, Oy + 10);
  ctx.fillText("u", Ox + 50 + u / 2, 30);

  ctx.translate(Ox, Oy);
}

function submit() {
  var doc = new jsPDF();
  var imgData =
    "data:image/jpeg;base64,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";

  // impostare il font del PDF
  doc.setFont("Arial");

  doc.text(75, 20, "Prova PDF");

  var nome = document.getElementById("nome").value;
  doc.text(20, 30, "Il nome e': " + nome);

  var cognome = document.getElementById("cognome").value;
  doc.text(20, 30, "Il cognome e': " + cognome);
  doc.addImage(imgData, "JPEG", 20, 80, 180, 160);
  doc.addPage();

  doc.save("provaPDF.pdf");
}
