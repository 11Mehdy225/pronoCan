//leffet de background qui change au defilement de la page
window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    var logo = document.querySelector('nav img');
    var scrollPosition = window.scrollY;
    console.log(nav);
    console.log(scrollPosition);
  
  
    if (scrollPosition > 0) {
      nav.style.backgroundColor = 'rgb(254, 254, 254 )';
      nav.style.width='100%';
      nav.style.transition = 'background-color 0.5s ease';
      logo.style.width = '120px';
      logo.style.height = '120px';
      logo.style.transition = 'width 0.5s ease';
    } else {
      nav.style.backgroundColor = 'transparent';
      nav.style.transition = 'background-color 0.5s ease';
      logo.style.width = '250px';
      logo.style.height = '200px';
      logo.style.transition = 'width 0.5s ease';
    }
  });

  const links = document.querySelectorAll("nav li");

  icons.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
  
  links.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });

 