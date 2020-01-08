import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: null,
    errorInfo: null
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <img
            style={styles}
            src="https://static.collectui.com/shots/2799566/oops-something-went-wrong-large"
            alt="fallback-ui"
          />
          <details>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

const styles = {
  position: "absolute",
  top: "25%",
  left: "25%"
};

export default ErrorBoundary;
