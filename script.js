botaoAleterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro");
    nav.classList.toggle("modo-escuro");
    a.classList.toggle("modo-escuro");
    footer.classList.toggle("modo-escuro")
  });