var mini = true;

function toggleSidebar() {
  if (mini) {
    console.log("opening sidebar");
    document.getElementById("sidenav").style.width = "470px"
    this.mini = false;
  } else {
    console.log("closing sidebar");
    document.getElementById("sidenav").style.width = "85px";
    document.getElementById("homePageBody").style.marginLeft = "85px";
    this.mini = true;
  }
}
