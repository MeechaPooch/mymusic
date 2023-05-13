let list = `https://www.youtube.com/watch?v=gipmwFkvoxE
https://open.spotify.com/track/0SLB2YoD1z2tPcREzIHYYA
https://open.spotify.com/track/2GQia0YdSaFinMOz9koAXu
https://open.spotify.com/track/35jSlvMH0uMVED796ayeOa
https://open.spotify.com/track/0JBhtS8zMP6QZFdSCzRjUa
https://open.spotify.com/track/5jTEWDfM9CQO7twh9a299R
https://open.spotify.com/track/6DQdSxAihGualboMJt2vcg
https://open.spotify.com/track/0M5mc0uvZnPaL2EnglZ2nC
https://open.spotify.com/track/5W5U9yMUZ1xAeSv1ZPI1Dl
https://open.spotify.com/track/7iMoiefzB14mQcorP3lJQo
https://open.spotify.com/track/2nQbDh10fRDZCDqtyvZxY8
https://open.spotify.com/track/3E6igQIAHESP10GL6Gvjje`
let names = `
A Teenager in Love
Anymore
When I Dance With You
Simple and Sure
Laid
Heart in Your Heartache
Young Adult Fiction
Even in Dreams
Higher Than the Stars
Say No to Love
Gothenburg Handshake (demo)
Until the Sun Explodes`


list = list.trim().split('\n')
names = names.trim().split('\n')
elemList = document.getElementById('list')

for(let i=0; i<list.length; i++) {
elemList.append(makeSongElem(list[i],names[i]))
}

function makeSongElem(url,name) {
    let elem = document.createElement('div')
    elem.classList.add('songDiv')
    let link = document.createElement('a')
    link.classList.add('songLink')
    elem.appendChild(link)
    link.innerText = name;
    link.href = url
    return elem;
}


function resizeGap() {
    let START_GAP = 0
    const STEP_GAP = 0.1;

    let gap = START_GAP
    elemList.style.gap = `${gap}px`
    // while(elemList.offsetHeight < window.innerHeight) {
    for(let i=0; i<100000; i++) {
    if(!(document.body.offsetHeight < window.innerHeight - 0)) {break;}
        gap+=STEP_GAP
        elemList.style.gap = `${gap}px` 
    } 
    gap-=STEP_GAP
    elemList.style.gap = `${gap}px` 
}
resizeGap()
window.onresize = resizeGap