const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marquee1 = document.querySelector("ul.line1");
const marquee2 = document.querySelector("ul.line2");
const marquee3 = document.querySelector("ul.line3");

// Line 1
root.style.setProperty("--marquee-elements", marquee1.children.length);

for(let i=0; i<marqueeElementsDisplayed+10; i++) {
  marquee1.appendChild(marquee1.children[i].cloneNode(true));
}

// Line 2
root.style.setProperty("--marquee-elements", marquee2.children.length);

for(let i=0; i<marqueeElementsDisplayed+10; i++) {
  marquee2.appendChild(marquee2.children[i].cloneNode(true));
}

// Line 3
root.style.setProperty("--marquee-elements", marquee3.children.length);

for(let i=0; i<marqueeElementsDisplayed+10; i++) {
  marquee3.appendChild(marquee3.children[i].cloneNode(true));
}