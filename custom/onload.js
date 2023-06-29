
var aTags = document.getElementsByClassName("text-12 is-uppercase css-1ljy35v");
var searchText = "Develop with LayerZeroDevelop with LayerZero";

function addIDAttr(element) {
  element.setAttribute("id", "messageButton")
}


function addClass(element) {
  var classes = element.getAttribute("class")
  var newClasses = `${classes} connectButton`
  element.setAttribute("class", newClasses)
  // found.addEventListener("click", test)

}

function findElementbyClassNameAndText(className, text) {
  var aTags = document.getElementsByClassName(className);
  var current;
  var found;
  for (var i = 0; i < aTags.length; i++) {
      current = aTags[i]
      
      current.removeAttribute("href")
      console.log(current.textContent)
  
    if (current.textContent == text) {
      found = current
      break;
    }
  }
  return found

}

function addAttributes(className, searchText, addID) {
  var found = findElementbyClassNameAndText(className, searchText)
  console.log(found)
  if (found) {
    addClass(found)
    console.log("Class Added")
    if (addID) {
      addIDAttr(found)
      console.log("ID Added")
    }
  }
  
}

addAttributes("text-12 is-uppercase css-1ljy35v", "Get EligibleGet Eligible")
addAttributes("text-12 is-uppercase css-1tdlgsp", "Connect WalletConnect WalletConnect Wallet", addID=true)
