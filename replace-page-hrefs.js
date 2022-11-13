
window.addEventListener("load", function(event) {
  if (window.location.protocol == "file:") {
    let linkElems = Array.from(document.getElementsByTagName("a"));
    console.log("linkElems:", linkElems);
    for (linkElem of linkElems) {
      let linkHref = linkElem.href;
      if (linkHref.startsWith("file:") && !linkHref.endsWith(".html")) {
        linkElem.href = `${linkHref}.html`;
      }
    }
  }
});
