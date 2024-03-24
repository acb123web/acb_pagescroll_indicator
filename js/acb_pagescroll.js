const scrollProgresselement = document.querySelector("#scroll-progress");

var span = document.createElement('span');
scrollProgresselement.appendChild(span);
const scrollP = document.querySelector("span");
scrollP.innerHTML = "0%";



function scrollProgress(){
  const Totalheightofwebpage = document.body.scrollHeight;
  const currentdistancefromTop = document.documentElement.scrollTop;
  const windowheight = document.documentElement.clientHeight;


  /*we are getting percentage here*/
  const scrolledPercentage = (currentdistancefromTop / (Totalheightofwebpage - windowheight))*100;

  /*appending percentage to progress bar indicator*/
  scrollProgresselement.style.width = Math.round(scrolledPercentage) + '%';
  scrollP.innerHTML = scrollProgresselement.style.width;

}

document.addEventListener("scroll", scrollProgress);
