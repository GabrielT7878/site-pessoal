function rolarSuavemente(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    document.querySelector(event.target.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
    });
}

window.revelar = ScrollReveal({reset:true})

revelar.reveal('.introducao-reveal',
    {
        duration: 1300,
        distance: '90px',
        origin: 'left'
    })
    