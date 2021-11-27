  const btn = document.querySelector('.addDiv');
  const homeworkContainer = document.querySelector('.homeWorkContainer');
  let currentDrag;
   let startX = 0;
   let startY = 0;

  btn.addEventListener("click", function () {
    const newDivItem = createDivElement();
    homeworkContainer.appendChild(newDivItem);
  });

  function getRandom(min, max){
    return Math.ceil(Math.random() * (max - min) + min)
  };

  function createDivElement() {
      const newDiv = document.createElement("div");
      newDiv.classList.add(draggable-div);
      newDiv.style.color = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
      newDiv.style.width = `${getRandom(10, 500)} + px`;
      newDiv.style.height = `${getRandom(10, 500)} + px`;
      newDiv.style.top = `${getRandom(0, window.innerHeight)} + px`;
      newDiv.style.left = `${getRandom(0, window.innerWidth)} + px`;

      div.addEventListener('mousedown', (e) => {
        currentDrag = div;
        startX = e.offsetX;/////позиция курсора в момент нажатия относит ближ род, эта инфа в консоли сли вызвать событие
        startY = e.offsetY;//////?????
      });

      div.addEventListener('mouseup', () => (currentDrag = false));
        return newDiv;
  };
  
    document.addEventListener('mousemove', (e) => {
     if (currentDrag) {
       currentDrag.style.top = e.clientY - startY + 'px';
       currentDrag.style.left = e.clientX - startX + 'px';
     }
   });


  ///DnD более полнове ный процесс,не так часто обновляет и перерисовывает изобр,рывками идет
  