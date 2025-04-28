import React from 'react';

type ErrorBoundaryProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode; // кастомный fallback UI
};

type ErrorBoundaryState = {
  hasError: boolean;
  info: React.ErrorInfo;
  errorMessage?: string;
  errorStack?: string;
};

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, info: {} as React.ErrorInfo }; // Инициализация info как пустого объекта
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true, info: {} as React.ErrorInfo };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Логирование ошибки
    this.setState({
      errorMessage: error.message,
      errorStack: error.stack,
      info: errorInfo,
    });
  }

  render() {
    const { hasError, errorMessage, errorStack, info } = this.state;

    if (hasError) {
      // Проверка fallback
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div>
          <h2>Что-то пошло не так...</h2>
          <pre>{errorMessage}</pre>
          <pre>{errorStack}</pre>
          <pre>{JSON.stringify(info, null, 2)}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}
