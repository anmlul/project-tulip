function enterSite() {
    document.getElementById('overlay').style.display = 'none';
    const main = document.getElementById('main-content');
    main.style.display = 'block';
    main.style.animation = 'fadeIn 1.5s ease-in';
}
