window.onload = function ()
{ 
    var designLabel = document.getElementById("design_label");
    designLabel.value = "This is Design 1";
}
(function () {

    eventUtility.addEvent(document, "click", function (evt) {
        var target = eventUtility.getTarget(evt);

        if (target.name === "sofa_color") {
            alert("You have chosen " + target.value);
        }
        else if (target.name === "design_button") {
            var designLabel = document.getElementById("design_label");
            designLabel.value = "This is " + (target.textContent);
            var designItemImage = document.getElementById("sofa_image");
            if (target.className === "design-1") {
                designItemImage.setAttribute("src", "sofa1.jpg");
            }
            else if (target.className === "design-2") {
                designItemImage.setAttribute("src", "sofa2.jpg");
            }
            else if (target.className === "design-3") {
                designItemImage.setAttribute("src", "sofa3.jpg");
            }
        }
        else if (target.name === "submit_button") {
            alert("Your request was submitted");
        }
    });
} ());