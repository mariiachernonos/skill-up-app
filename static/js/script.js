function getSummary(filepath) {
    fetch(filepath)
        .then((res) => res.text())
        .then((text) => {
            summary = document.getElementById("summary-p").innerHTML = text;
            summary.innerHTML = text;
            console.log('success')
            return true;
        })
        .catch((e) => console.error(e));
}