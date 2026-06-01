import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught hydration or rendering error:", error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-[#0C0C0C] text-[#F8FAFC] px-6 font-sans">
          <div className="max-w-md w-full border-2 border-red-950 bg-black/60 backdrop-blur-xl p-8 rounded-2xl text-center shadow-2xl relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-red-900/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="w-16 h-16 bg-red-950/40 border border-red-800/50 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500 text-3xl font-light">
              !
            </div>
            
            <h1 className="text-2xl font-bold tracking-tight mb-2 text-white font-sans">
              System Restitution Required
            </h1>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              A rendering discrepancy or hydration exception was intercepted. The A-ONE Ascend engine has isolated the failure.
            </p>
            
            <div className="text-left bg-zinc-900/60 border border-zinc-800 rounded-lg p-3 mb-6 overflow-x-auto text-xs text-red-400 font-mono max-h-32">
              {this.state.error?.toString() || "Unknown Hydration Exception"}
            </div>

            <button
              onClick={this.handleReload}
              className="w-full py-3 px-6 rounded-full font-medium transition-all duration-300 relative group overflow-hidden"
              style={{
                background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
                boxShadow: "4px 4px 12px #7721B1 inset",
                outline: "2px solid white",
                outlineOffset: "-3px"
              }}
            >
              <span className="relative z-10 text-white select-none">Reinitialize Engine</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
