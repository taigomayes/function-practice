const HighLightBox = (id) => {

    document.querySelectorAll("#main > div").forEach(el=>{
        el.style.background = '#fff'
    })

    document.querySelector('#'+id).style.background = '#999'
}

