
function setIframeSrc(e) {
  e.preventDefault();
  let projectIframe = document.getElementById("project-iframe");
  projectIframe.src = e.target.value;
  return false;
}

window.addEventListener("load", function(e) {
  let projectLinkButtons = Array.from(document.getElementsByClassName("project-button"));
  console.log("projectLinkButtons:", projectLinkButtons);

  for (const projectLinkButton of projectLinkButtons) {
    //projectLinkElem.onclick = setIframeSrc;
    projectLinkButton.addEventListener("click", setIframeSrc);
  }
});
