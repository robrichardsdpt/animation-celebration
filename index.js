document.querySelector("#cube").addEventListener('click',function ()
{
 if (document.querySelector("#cube").style.animation.includes("pause")) {
  (document.querySelector("#cube").style.animation = "cubeRotation 2s linear infinite")
 } else {
  (document.querySelector("#cube").style.animation = "pause")
 }
}  )


document.querySelector(".image").addEventListener('click',function ()
{
  (document.querySelector(".image").style.animation = "desaturate 4s linear forwards")
}  )
