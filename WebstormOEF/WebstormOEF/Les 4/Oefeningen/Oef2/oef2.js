function ByTagName(node, search)
{
    let array = [];
    for (let element of node.childNodes) {
        if (element.nodeName === search.toUpperCase()){
            array.push(element);
        }
    }
    return array;
}
console.log(ByTagName(document.body, "h1"));
