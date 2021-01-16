document.querySelector("#cube").addEventListener('click',function ()
{
 if (document.querySelector("#cube").style.animation.includes("pause")) {
  (document.querySelector("#cube").style.animation = "cubeRotation 2s linear infinite")
 } else {
  (document.querySelector("#cube").style.animation = "pause")
 }
}  )

