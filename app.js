
const bars = document.querySelectorAll('.list .load_bar')
const barsBase = document.querySelectorAll('.list .load_bar_base')

let currentBar = 0;
let previous = null;
let currentBarWidth = 0;



const progressTimer = () => {
    bars.forEach((bar, index) => {

        // apply animation for certain nodes
        if (currentBar === index) {

            bar.style.animation = 'progressAnim 4s ease-out forwards'
            currentBarWidth = bar.offsetWidth;

            // set previous node
            previous = index;
        }  
    })

    // console.log(currentBarWidth);
}

setInterval(progressTimer, 0)

// changing currentIndex logic
bars.forEach((bar, index) => {
    bar.addEventListener('animationend', () => {

        // reset animation when it finishes
        bar.style.animation = ''

        if (bars.length - 1 === index) {
            currentBar = 0
        } else {
            currentBar++;
        }

        changeContent(currentBar);
    })
})

// clicking index logic
const navItems = document.querySelectorAll('.list .link')

navItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        
        bars.forEach((bar, i) => {

            if (index !== i) {
                bar.style.animation = ''

                // clear
                clearInterval(progressTimer)

                // set index as clicked
                currentBar = index

                // set new interval
                setInterval(progressTimer, 0)
            }
        })

        changeContent(currentBar)
    })
})