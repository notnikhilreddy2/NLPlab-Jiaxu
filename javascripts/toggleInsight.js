function toggleInsight(button) {
    var insight = button.nextElementSibling;
    if (insight.style.display === "none") {
        insight.style.display = "block";
    } else {
        insight.style.display = "none";
    }
}
