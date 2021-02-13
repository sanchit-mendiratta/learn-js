(function () {
    function querySelectorAll(selector) {
        var parts = selector.split(" ");
        //.class
        return parts.reduce((parent, part) => select(parent, part), [document]);

    }

    function select(parents, part) {
        return parents.map(parent => {
            if (part.startsWith("#")) return [parent.getElementById(part.slice(1))];
            else if (part.startsWith('.')) return Array.from(parent.getElementsByClassName(part.slice(1)));
            else return parent.getElementsByTagName(part);
        }).flat(); //[[],[]] => [...]
    }

    document.querySelectorAll = querySelectorAll;

})();
