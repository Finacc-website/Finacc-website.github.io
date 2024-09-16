document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("login-page").classList.add("hidden");
    document.getElementById("selection-page").classList.remove("hidden");
});
 
document.getElementById("proceed-declaration").addEventListener("click", function() {
    document.getElementById("selection-page").classList.add("hidden");
    document.getElementById("declaration-panel").classList.remove("hidden");
});
 
document.getElementById("declaration-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Declaración completada (Simulación).");
});

