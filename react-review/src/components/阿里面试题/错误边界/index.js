import React, { useState } from 'react';

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        console.log('---error1---', error);
        // 更新状态，以便下一次渲染将显示后备 UI。
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log('---error2 error---', error);
        console.log('---error2 info---', info);
        // 示例“组件堆栈”：
        //   在 ComponentThatThrows 中（由 App 创建）
        //   在 ErrorBoundary 中（由 APP 创建）
        //   在 div 中（由 APP 创建）
        //   在 App 中
        // logErrorToMyService(error, info.componentStack);
    }

    render() {
        if (this.state.hasError) {
            // 你可以渲染任何自定义后备 UI
            return this.props.fallback;
        }

        return this.props.children;
    }
}

export function Test() {
    const [shouldThrowError, setShouldThrowError] = useState(false);

    if (shouldThrowError) {
        throw new Error('An error has occurred in ComponentWithHook');
    }

    return (
        <button onClick={() => setShouldThrowError(true)}>
            Click to throw an error
        </button>
    );
}
