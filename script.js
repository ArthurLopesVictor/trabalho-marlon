function changeFontSize(action){                      //ACTION PARA MOSTRAR A AÇAO QUE A FUNCTION VAI FZR
    const elements = ['h1','h2','body','p'];        //OQUE VAI AUMENTAR OU DIMINUIR NO SITE
    elements.map(element=>{                          
        
        const selector = document.querySelector(element);                            //MELHORAR O CODIGO PARA NAO USAR DOCUMENTE.QUERYSELECTOR 2 VZS
        let value = getComputedStyle(selector).getPropertyValue('font-size');       //AUMENTAR A FONTE DE FORMA GRADUAL PARA CADA ELEMENTO
        value = value.replace('px', '');                                            
        value = action === 'aumentar' ? parseInt(value) + 1 : parseInt(value) - 1;   //SE FOR AUMENTAR, ELA VAI AUMENTAR 1, CASO NAO, ELA DIMINUI 1
        selector.style.fontSize =  `${value}px`;                                     
    })
}


let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})