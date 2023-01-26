document.body.addEventListener("mousemove", e => {
    // creating new element and add it to the DOM
    const newEl = document.createElement('div');
    document.body.append(newEl);

    // generate a random size using math random method
    const size = Math.floor(Math.random() * 100);

    // specifying the size of the div/element
    newEl.style.setProperty("--widthVal", size + "px");
    newEl.style.setProperty("--heightVal", size + "px");

    // specifying the position of the div/elememt
    newEl.style.setProperty("--xVal", e.pageX + "px");
    newEl.style.setProperty("--yVal", e.pageY + "px");

    //  removing the element after a certain time
    setTimeout(() => { newEl.remove()}, 3000);
});