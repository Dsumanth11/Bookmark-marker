// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let formele = document.getElementById("bookmarkForm");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
let listStored=[];
function createListElement(a,b) {
    let listele = document.createElement("li");
    document.getElementById("bookmarksList").appendChild(listele);
    listele.classList.add("pd-5");
    let divcontainer1 = document.createElement("div");
    divcontainer1.classList.add("listitemcontainer", "pt-2", "pl-3", "pb-3");
    listele.appendChild(divcontainer1);
    let h1elel = document.createElement("h1");
    h1elel.classList.add("heading-list");
    divcontainer1.appendChild(h1elel);
    h1elel.textContent = a;
    let anchorTag = document.createElement('a');
    anchorTag.setAttribute("href", b);
    anchorTag.setAttribute("target", "_blank");
    anchorTag.textContent = b;
    divcontainer1.appendChild(anchorTag);
    let linebreak = document.createElement("br");
    divcontainer1.appendChild(linebreak);
    siteUrlInput.value="";
    siteNameInput.value="";
}
let listStoredstring=localStorage.getItem("storedbookmarks");
if(listStoredstring!==null)
{
    listStored=JSON.parse(listStoredstring);
    for (let each_ele of listStored){
        createListElement(each_ele.name,each_ele.url);
    }
}
else{
    console.log(listStoredstring);
}
siteNameInput.addEventListener("change", function() {
    if (siteNameInput.value === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }
});
siteUrlInput.addEventListener("change", function() {
    if (siteUrlInput.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    } 
    else 
    {
        siteUrlErrMsg.textContent = "";
    }
});
formele.addEventListener("submit", function(event) {
    event.preventDefault();
    if (siteNameInput.value !== "" && siteUrlInput.value !== "") {
        let newobj={
            name:siteNameInput.value,
            url:siteUrlInput.value
        };
        listStored.push(newobj);
        localStorage.setItem("storedbookmarks",JSON.stringify(listStored));
        createListElement(siteNameInput.value,siteUrlInput.value);
    } else {
        siteNameErrMsg.textContent = "Required*";
        siteUrlErrMsg.textContent = "Required*";
    }
});