import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Outlet />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
