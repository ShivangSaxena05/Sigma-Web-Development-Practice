let channel_name= prompt("Enter your channel name : ")
let Enter_Titleofvideo  = prompt("Enter your Video Title : ")
let views_in_video = prompt("Enter the number of views on your video : ")
let Enter_timings = prompt("Enter the timings of video (min/sec) : ")
let thumbnail=prompt("Enter the link of the thumbnail : ")
let time=prompt("Enter the how old your video is : ")
function views(){
    if((views_in_video>=1000) && (views_in_video<10000)){
        views_in_video= (views_in_video.toString().slice(0,1)+"K")
    }
    else if((views_in_video>=10000) && (views_in_video<100000)){
        views_in_video= (views_in_video.toString().slice(0,2)+"K")
    }
    else if((views_in_video>=100000) && (views_in_video<1000000)){
        views_in_video= (views_in_video.toString().slice(0,3)+"K")
    }
    else if((views_in_video>=1000000) && (views_in_video<10000000)){
        views_in_video= (views_in_video.toString().slice(0,1)+"M")
    }
    else if((views_in_video>=10000000) && (views_in_video<100000000)){
        views_in_video= (views_in_video.toString().slice(0,2)+"M")
    }
    return views_in_video
}
let g = (views(views_in_video))
console.log("hello")
document.querySelector(".images").src=thumbnail
document.querySelector(".title").innerText=Enter_Titleofvideo
document.querySelector(".channel").innerText=channel_name
document.querySelector(".time_line").innerText=Enter_timings
document.querySelector(".view").innerText=g
document.querySelector(".time").innerText=time