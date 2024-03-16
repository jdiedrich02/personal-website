window.addEventListener('scroll', function() {
    var sidebar = document.getElementById('sideBar');
    var scrollY = window.scrollY;
    sidebar.style.marginTop = scrollY + 'px';
});