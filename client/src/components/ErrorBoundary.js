import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false,
        };
    }

    static getDerivedStateFromError(error) {
        return { isError: true };
    }

    render() {
        return (
            <div>{this.state.isError ? <h1>Something went wrong</h1> : this.props.children}</div>
        );
    }
}

export default ErrorBoundary;
