import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Outlet />
        <Footer />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
