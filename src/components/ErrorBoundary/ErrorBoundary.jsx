import { Component } from 'react';
import { MainErrorScreen } from '../MainErrorScreen/MainErrorScreen';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    const { state: { hasError }, props: { children } } = this;
    if (hasError) {
      return <MainErrorScreen />;
    }

    return children;
  }
}
