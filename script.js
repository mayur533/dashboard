function changeContent(content) {
  switch (content) {
    case "home":
      document.getElementById("topWindow").textContent = content + " page";
      break;
    case "notebook":
      document.getElementById("topWindow").textContent = content + " page";
      break;
    case "book":
      document.getElementById("topWindow").textContent = content + " page";
      break;
    case "meet":
      document.getElementById("topWindow").textContent = content + " page";
      break;
    case "assignment":
      document.getElementById("topWindow").textContent = content + " page";
      break;
    case "test":
      document.getElementById("topWindow").textContent = content + " page";
      break;
    case "profile":
      document.getElementById("topWindow").textContent = content + " page";
      break;
    default:
      document.getElementById("topWindow").textContent = "Invalid Option";
  }
}
