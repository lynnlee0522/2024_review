const source = [
    {
        "id": 1,
        "pid": 0,
        "name": "body"
    },
    {
        "id": 2,
        "pid": 1,
        "name": "title"
    },
    {
        "id": 3,
        "pid": 2,
        "name": "div"
    }
]

const tree = [{
    id: 1,
    pid: 0,
    name: "body",
    children: [{
        id: 2,
        pid: 1,
        name: "title",
        children: [{
            id: 3,
            pid: 2,
            name: "div"
        }]
    }]
}]

const buildTree = (nodes, parentId) => {
    const tree = []

    nodes?.filter(node => node.pid === parentId)?.map(node => {
        const children = buildTree(nodes, node.id)
        if (children.length) {
            node.children = children
        }
        tree.push(node)
    })

    return tree
}
const newTree = buildTree(source, 0)


const flattenTree = (tree) => {
    const result = []

    const flatten = (node) => {
        const { children, ...rest } = node
        result.push(rest)

        if (children) {
            children.map(child => flatten(child))
        }
    }

    tree.map(node => flatten(node))

    return result
}

const newSource = flattenTree(tree)
console.log("-newSource-", newSource);


