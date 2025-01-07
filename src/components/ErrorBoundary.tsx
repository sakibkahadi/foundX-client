"use client";
import { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props); //super use korsi karon super  use kore parent class a props pathate parbo. mane errorboundary hosse ekta child class of component class so eikhan  jehetu child er props pathabo tai super use korbo
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render(): ReactNode {
    if (this.state.hasError) {
      this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
