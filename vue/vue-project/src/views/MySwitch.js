import { ref } from 'vue'
let flag = ref(true)
const mySwitch = () => {
    const pre_box = document.querySelector('.pre-box')
    const img = document.querySelector("#avatar")
    if (flag.value) {
        pre_box.style.transform = "translateX(100%)"
        pre_box.style.backgroundColor = "#eae5dd"
        img.src = require("../assets/img/1.jpeg")
    }
    else {
        pre_box.style.transform = "translateX(0%)"
        pre_box.style.backgroundColor = "#e9e2dd"
        img.src = require("../assets/img/3.jpg")
    }
    flag.value = !flag.value
}
export default mySwitch  
