// config da box view
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");
var box10 = document.getElementById("box10");



// adiciona um evento de clique a cada célula da tabela
var cells = document.getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function() {
    // verifica qual número foi clicado e imprime o número correspondente
    if (this.innerHTML === "13") {
      box1.innerHTML = "1";
    } else if (this.innerHTML === "14") {
      box1.innerHTML = "2";
    } else if (this.innerHTML === "15") {
      box1.innerHTML = "3";
    } else if (this.innerHTML === "16") {
      box1.innerHTML = "4";
    }

    else if (this.innerHTML === "NNNN") {
        box2.innerHTML = "1";
      } else if (this.innerHTML === "CCCC") {
        box2.innerHTML = "2";
      } else if (this.innerHTML === "TTTT") {
        box2.innerHTML = "3";
      } else if (this.innerHTML === "JLPS") {
        box2.innerHTML = "4";
      }

      else if (this.innerHTML === "a") {
        box3.innerHTML = "1";
      } else if (this.innerHTML === "b") {
        box3.innerHTML = "2";
      } else if (this.innerHTML === "c") {
        box3.innerHTML = "3";
      } else if (this.innerHTML === "d") {
        box3.innerHTML = "4";
      }

      else if (this.innerHTML === "18") {
        box4.innerHTML = "1";
      } else if (this.innerHTML === "19") {
        box4.innerHTML = "2";
      } else if (this.innerHTML === "20") {
        box4.innerHTML = "3";
      } else if (this.innerHTML === "26") {
        box4.innerHTML = "4";
      }

      else if (this.innerHTML === "SPHS") {
        box5.innerHTML = "1";
      } else if (this.innerHTML === "SMCS") {
        box5.innerHTML = "2";
      } else if (this.innerHTML === "TBMT") {
        box5.innerHTML = "3";
      } else if (this.innerHTML === "SLPS") {
        box5.innerHTML = "4";
      }

      else if (this.innerHTML === "u") {
        box6.innerHTML = "1";
      } else if (this.innerHTML === "x") {
        box6.innerHTML = "2";
      } else if (this.innerHTML === "v") {
        box6.innerHTML = "3";
      } else if (this.innerHTML === "z") {
        box6.innerHTML = "4";
      }

      else if (this.innerHTML === "19 ") {
        box7.innerHTML = "1";
      } else if (this.innerHTML === "20 ") {
        box7.innerHTML = "2";
      } else if (this.innerHTML === "21") {
        box7.innerHTML = "3";
      } else if (this.innerHTML === "22") {
        box7.innerHTML = "4";
      }

      else if (this.innerHTML === "ZHNA") {
        box8.innerHTML = "1";
      } else if (this.innerHTML === "NOPQ") {
        box8.innerHTML = "2";
      } else if (this.innerHTML === "BCDE") {
        box8.innerHTML = "3";
      } else if (this.innerHTML === "TUVX") {
        box8.innerHTML = "4";
      }

      else if (this.innerHTML === "i") {
        box9.innerHTML = "1";
      } else if (this.innerHTML === "j") {
        box9.innerHTML = "2";
      } else if (this.innerHTML === "s") {
        box9.innerHTML = "3";
      } else if (this.innerHTML === "t") {
        box9.innerHTML = "4";
      }

      else if (this.innerHTML === "30") {
        box10.innerHTML = "1";
      } else if (this.innerHTML === "50") {
        box10.innerHTML = "2";
      } else if (this.innerHTML === "35") {
        box10.innerHTML = "3";
      } else if (this.innerHTML === "40") {
        box10.innerHTML = "4";
      }
    else {
        
      
    }
  });
}


// verificar caixas

function verificarBoxes() {

  // Verifique os valores de cada box e defina a cor de fundo de acordo
  if (box1.innerHTML == "3") {
    box1.style.backgroundColor = "#19bd76";
    box1.style.border = "none"
  } else {
    box1.style.backgroundColor = "#e21b1b";
    box1.style.border = "none"
  }

  if (box2.innerHTML == "4") {
    box2.style.backgroundColor = "#19bd76";
    box2.style.border = "none"
  } else {
    box2.style.backgroundColor = "#e21b1b";
    box2.style.border = "none"
  }

  if (box3.innerHTML == "1") {
    box3.style.backgroundColor = "#19bd76";
    box3.style.border = "none"
  } else {
    box3.style.backgroundColor = "#e21b1b";
    box3.style.border = "none"
  }

  if (box4.innerHTML == "2") {
    box4.style.backgroundColor = "#19bd76";
    box4.style.border = "none"
  } else {
    box4.style.backgroundColor = "#e21b1b";
    box4.style.border = "none"
  }

  if (box5.innerHTML == "3") {
    box5.style.backgroundColor = "#19bd76";
    box5.style.border = "none"
  } else {
    box5.style.backgroundColor = "#e21b1b";
    box5.style.border = "none"
  }

  if (box6.innerHTML == "4") {
    box6.style.backgroundColor = "#19bd76";
    box6.style.border = "none"
  } else {
    box6.style.backgroundColor = "#e21b1b";
    box6.style.border = "none"
  }

  if (box7.innerHTML == "3") {
    box7.style.backgroundColor = "#19bd76";
    box7.style.border = "none"
  } else {
    box7.style.backgroundColor = "#e21b1b";
    box7.style.border = "none"
  }

  if (box8.innerHTML == "1") {
    box8.style.backgroundColor = "#19bd76";
    box8.style.border = "none"
  } else {
    box8.style.backgroundColor = "#e21b1b";
    box8.style.border = "none"
  }

  if (box9.innerHTML == "2") {
    box9.style.backgroundColor = "#19bd76";
    box9.style.border = "none"
  } else {
    box9.style.backgroundColor = "#e21b1b";
    box9.style.border = "none"
  }

  if (box10.innerHTML == "1") {
    box10.style.backgroundColor = "#19bd76";
    box10.style.border = "none"
  } else {
    box10.style.backgroundColor = "#e21b1b";
    box10.style.border = "none"
 
  }

  document.getElementById("btnEnviarPDF").style.display = "block";
}






// gera pdf
function gerarPDF() {
  
  const doc = new jsPDF();
  
  doc.setFontSize(20);
  doc.text(20, 20, 'Examinando');


  doc.save('arquivo.pdf');
}

