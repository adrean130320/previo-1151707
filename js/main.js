const createElement = (tag, name, value) => {
    let element = document.createElement(tag);
    if (name != null) {
        element.classList.add(name);
    }
    if (value != null) {
        element.append(value);
    }
    return element;
}

const app = (id) => {
    let parent = document.getElementById(id);
    if (parent != null) {
        let fragment = new DocumentFragment();
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', "http://demo6497253.mockable.io/noticias");
        xhttp.send();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) { 
                let datos = JSON.parse(this.responseText);
                for(let info of datos){
                    let h1 = createElement("H1", null, `${info.titulo} - ${info.categoria} - ${info.fecha}`);
                    let linkh1 = createElement("A", null, h1);
                    linkh1.setAttribute("href", `notice.html?id=${info.id}`)
                    let div = createElement("DIV", null, linkh1);
                    let des = createElement("P", null, info.descripcion);
                    let det = createElement("P", null, info.detalle);
                    let link = createElement("A", null, "Ver mas");
                    div.append(des);
                    des.append(link);
                    div.append(det);
                    fragment.append(div);
                }
            }
        }
        parent.appendChild(fragment);
    }
}

const deport  = (url, id) =>{
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            let parent = document.getElementById(id);
            let fragment = new DocumentFragment();
            for(let info of datos){
                let des = createElement("P", null, info.titulo);
                let div = createElement("DIV", null, des);
                fragment.append(div);
            }
            parent.append(fragment);
        }
    }
}

const tecnology  = (url, id) =>{
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            let parent = document.getElementById(id);
            let fragment = new DocumentFragment();
            for(let info of datos){
                let des = createElement("P", null, info.titulo);
                let div = createElement("DIV", null, des);
                fragment.append(div);
            }
            parent.append(fragment);
        }
    }
}



