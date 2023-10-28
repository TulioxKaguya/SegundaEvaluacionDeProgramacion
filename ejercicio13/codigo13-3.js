function escapeHTML(text) {
    var replacements = [
        [/&/g, "&amp;"],
        [/"/g, "&quot;"],
        [/</g, "&lt;"],
        [/>/g, "&gt;"]
    ];

    replacements.forEach(function(replace) {
        text = text.replace(replace[0], replace[1]);
    });

    return text;
}
