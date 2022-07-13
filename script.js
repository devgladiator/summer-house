const moduleControl = document.querySelector('.house-module-control');
const clearBtn = document.querySelector('.clear-module')

clearBtn.addEventListener('click', () => {
    const houseModuleSet = document.querySelector('.current-model > .img-module-set');
    houseModuleSet.innerHTML = '';

} )


moduleControl.addEventListener('click', e => {
    e.preventDefault;
    if(e.target.classList.contains('house-module-item')) {
        const imgSrc = e.target.src;
        const moduleDesign = document.createElement('img');
        moduleDesign.src = imgSrc;
        checkWidth(moduleDesign);
    }
})

function checkWidth (newModule) {
    const houseModuleSet = document.querySelector('.current-model > .img-module-set');
    const moduleWidth = houseModuleSet.clientWidth;
    const moduleSet = houseModuleSet.children;
    const newModuleWidth = newModule.width;
    let moduleSetWidth = 0;
    for (let i = 0; i < moduleSet.length; i++) {
        const item = moduleSet[i];
        moduleSetWidth += item.clientWidth
    }
    const moduleDesignWidth = moduleSetWidth + newModuleWidth;
    if(moduleWidth < moduleDesignWidth) {
        alert("you can't add this module!");

        // display infoBlock
        // const alertBlock = document.createElement('div');
        // alertBlock.setAttribute('class', 'info-block');
        // alertBlock.innerHTML = "You can't add this block";
        // const wrapper = document.querySelector('.model-wrapper');
        // wrapper.appendChild(alertBlock);
        // setTimeout(() => {
        //     const infoBlock = wrapper.querySelector('.info-block');
        //     infoBlock.remove();
        // }, 3000);
        // end infoblock
    } else {
        houseModuleSet.appendChild(newModule);
    }
}