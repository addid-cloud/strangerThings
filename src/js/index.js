function openModal(target) {
    var modal = document.getElementById(target);
    modal.style.display = "block";
}

function closeModal(target) {
    var modal = document.getElementById(target);
    modal.style.display = "none";
}

var buttons = document.querySelectorAll("button[data-target]");
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        var target = this.getAttribute("data-target");
        openModal(target);
    });
});
