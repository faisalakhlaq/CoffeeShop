var eventUtility = {
    addEvent: function (htmlObject, type, fn) {
        if (typeof addEventListener !== "undefined") {
            htmlObject.addEventListener(type, fn, false);
        }
        else if (typeof attachEvent !== "undefined") {
            htmlObject.attachEvent("on" + type, fn);
        }
        else {
            htmlObject["on" + type] = fn;
        }
    },

    getTarget: function (event) {
        if (typeof event.target !== "undefined") {
            return event.target;
        } else {
            return event.srcElement;
        }
    }
};