function byTagName (node , string){
    let array = [];

    function searchelement(element){
        //checks if the name of the node is equal to given name in form of a string
        if (element.nodeName === string.toUpperCase()){
            array.push(element)
        }
        //check if the given node has childnodes that are of type 1
        //if it has continue searching for more
        for (let child of element.childNodes){
            if (child.nodeType === 1){ //node types look below
                searchelement(child);
            }
        }

    }


    searchelement(node)
    return array;

}

console.log(byTagName(document.body, "h1"));

/*
Node Types

In the context of the DOM (Document Object Model), the node type refers to the classification of a node within the DOM tree. Each node in the DOM tree can be of a specific type, and the type determines the role and properties of that node. The `nodeType` property is an integer that represents the type of a node.

    Here are the most common node types in the DOM:

    1. **Element Node (Node.ELEMENT_NODE or 1):**
- Represents an element in the HTML document, such as `<div>`, `<p>`, `<span>`, etc.
- These nodes have properties like `nodeName`, `nodeType`, `attributes`, `childNodes`, etc.

2. **Attribute Node (Node.ATTRIBUTE_NODE or 2):**
- Represents an attribute of an element, such as `id`, `class`, `href`, etc.
- Attribute nodes are rarely used directly and are typically accessed through the `attributes` property of an element node.

3. **Text Node (Node.TEXT_NODE or 3):**
- Represents the textual content inside an element.
- For example, the text "Hello, World!" inside a `<p>` element would be represented by a text node.
- Text nodes have properties like `nodeValue`, `textContent`, `parentNode`, etc.

4. **Comment Node (Node.COMMENT_NODE or 8):**
- Represents a comment in the HTML document, such as `<!-- This is a comment -->`.
- Comment nodes have properties like `nodeValue`, `textContent`, `parentNode`, etc.

5. **Document Node (Node.DOCUMENT_NODE or 9):**
- Represents the entire HTML document.
- It's the root of the DOM tree and contains all other nodes as its children.
- The `document` object in JavaScript represents the document node.

6. **Document Type Node (Node.DOCUMENT_TYPE_NODE or 10):**
- Represents the document type declaration, such as `<!DOCTYPE html>`.
- This node typically appears at the beginning of an HTML document and specifies the document type.

*/