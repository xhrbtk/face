 



function delegate(element, eventType, selector, fn){
    element.addEventListener(eventType, e=> {
        let el = e.target
        while(!e.matches(selector)){
            if(el = element){
                el = null
                break
            }
            el = el.parentNode
        }
        el && fn.apply(el, e, el)
    })
    return element
}