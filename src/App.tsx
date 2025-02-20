import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <div id="title">Hello World</div>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
