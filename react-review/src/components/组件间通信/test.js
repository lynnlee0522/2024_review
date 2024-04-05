/*
已知：有一棵通过数组的形式组织的组件树，要求转换为树形的数据结构进行渲染。如下所示 layoutTree，组件的父子层级关系通过 id 关联，root 为根节点
比如下述例子中，从 root 开始，其 children 为 Container_1 和 Chart_1，由于 Container_1 是容器组件（type=container），所以需要递归的遍历渲染
此时在 layoutTree 中查到 Container_1 的 children 为 Chart_2 和 Container_2，重复按上述步骤进行递归遍历
结果：要求构建出一棵树形结构的组件树返回
*/

// interface PageLayoutTree {
//     [componentId: string]: LayoutConfig[];
// }
// interface LayoutConfig {
//     id: string;
//     type: 'container' | 'chart'
// }

// 输入


export default function ReducerHookDemo() {
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

    function renderLayoutTree(layoutTree, nodeId) {
        const node = layoutTree[nodeId];
        if (!node) {
            return null;
        }

        const children = node.map(child => {
            if (child.type === 'chart') {
                return child
            }
            const childNode = renderLayoutTree(layoutTree, child.id);
            return childNode;
        });

        return {
            id: nodeId,
            type: 'container',
            children,
        };
    }

    const renderableComponentTree = renderLayoutTree(layoutTree, 'root');
    console.log(renderableComponentTree);




    return (
        <div>
            haha
        </div>
    )
}





