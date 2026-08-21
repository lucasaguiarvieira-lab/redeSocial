document.addEventListener("DOMContentLoaded", ()=>{
    //botao curtida
    const likeBtn = document.qurySelector(".left-actions .action-btn:first-child");
if (!likeBtn) return;

const likeSvg = likeBtn.querySelector("svg")
// contador 
let textNode = Array.from(likeBtn.childNodes).find(
  (node) => node.nodeType === node. TEXT_NODE && node.textContent. trim()!==)

   //zerando o contador inicial
   let cont=0;
   
   //atualiza
   (textNode) { textNode.textContent= `0`;}

// coração 
function applyLikedStyle() {
  likeSvg.style.fill = "#ef4444";
  likeSvg.style.stroke = "#ef444";
  likeBtn.style.fill = 







}



















})