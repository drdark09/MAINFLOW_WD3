document.getElementById('menu-icon').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
    } else {
        menu.classList.add('show');
    }
});

// JavaScript for form validation
function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name == "" || email == "" || message == "") {
        alert("All fields must be filled out");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Invalid email address");
        return false;
    }

    return true;
}

// JavaScript for dynamic content update
document.getElementById('shop-now').addEventListener('click', function () {
    alert('Shop Now button clicked! Redirecting to the shop page...');
    // Here you would typically redirect the user to the shop page
    window.location.href = 'shop.html';
});
