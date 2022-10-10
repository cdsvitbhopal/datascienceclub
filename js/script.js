var loader = document.getElementById("preloader");
        function xyz(){
            loader.style.display = "none";
        }
        setTimeout(xyz,5000);

let cursor = document.querySelector('.cursor');

window.onmousemove = (e) =>{
   cursor.style.top = e.pageY + 'px';
   cursor.style.left = e.pageX + 'px';
};


let homeImg = document.querySelector('.home .home-img');


document.querySelectorAll('.navbar a').forEach(link =>{
   link.onmouseenter = () =>{
      document.querySelector('.navbar-img img').src = link.getAttribute('data-src');
   };
   link.onmouseleave= () =>{
      document.querySelector('.navbar-img img').src = 'images/nav-img-1.jpg';
   };
});

let navbar = document.querySelector('.navbar');
let navbarImg = document.querySelector('.navbar-img');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   navbarImg.classList.toggle('active');
};

window.onscroll = () =>{
   navbar.classList.remove('active');
   navbarImg.classList.remove('active');
};
