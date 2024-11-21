document.getElementById("copy-btn").addEventListener("click", function () {
    const code = document.getElementById("code-block").innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied to clipboard!");
    }).catch(err => {
        alert("Failed to copy code: " + err);
    });
});
