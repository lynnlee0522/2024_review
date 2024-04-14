const layoutTree = {
    "root": [
        {
            "id": "Container_1",
            "type": "container"
        },
        {
            "id": "Chart_1",
            "type": "chart"
        }
    ],
    "Container_1": [
        {
            "id": "Chart_2",
            "type": "chart"
        },
        {
            "id": "Container_2",
            "type": "container"
        },
    ],
    "Container_2": [
        {
            "id": "Chart_3",
            "type": "chart"
        }
    ]
}

const tree = {
    "root": [
        {
            "id": "Container_1",
            "type": "container",
            "children": [
                {
                    "id": "Chart_2",
                    "type": "chart"
                },
                {
                    "id": "Container_2",
                    "type": "container",
                    "children": [
                        {
                            "id": "Chart_3",
                            "type": "chart"
                        }
                    ]
                },
            ]
        },
        {
            "id": "Chart_1",
            "type": "chart"
        }
    ]
}

const buildTree = (source, nodeId) => {
    const nodes = source[nodeId]
    if (!nodes) return
    let tree = []
    tree = nodes?.map(node => {
        const children = buildTree(source, node.id)
        if (children?.length) {
            node.children = children
        }
        return node
    })

    return tree
}

const newTree = { 'root': buildTree(layoutTree, 'root') }


const flatten = (tree) => {
    const newTree = {}

    const flat = (nodes, parentId) => {
        const arr = nodes?.map(item => {
            const { children, ...rest } = item
            if (children) {
                flat(item.children, item.id)
            }
            return { ...rest }
        })

        newTree[parentId] = arr
    }

    flat(tree['root'], 'root')

    return newTree
}

const result = flatten(tree)

