document.addEventListener('DOMContentLoaded', function () {
    var menuBar = document.querySelector('.menu-bar');
    var sidebar = document.querySelector('.sidebar');
    var mainContent = document.querySelector('.main-content');

    menuBar.addEventListener('click', function () {
        toggleSidebar();
    });

    
    var sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            closeSidebar();
        });
    });

    function toggleSidebar() {
        if (sidebar.style.width === '200px') {
            closeSidebar();
        } else {
            openSidebar();
        }
    }

    function openSidebar() {
        sidebar.style.width = '200px';
        mainContent.style.marginLeft = '200px';
    }

    function closeSidebar() {
        sidebar.style.width = '0';
        mainContent.style.marginLeft = '0';
    }
});
