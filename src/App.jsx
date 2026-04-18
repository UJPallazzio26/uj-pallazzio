import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index.jsx";
import NotFound from "./pages/NotFound.jsx";
import RoomDetailPage from "./pages/RoomDetailPage.jsx";
import BusinessRoom from "./pages/BusinessRoom.jsx";
import StandardRoom from "./pages/StandardRoom.jsx";
import LuxuryRoom from "./pages/LuxuryRoom.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/room-details" element={<RoomDetailPage />} />
          <Route path="/rooms/business-class" element={<BusinessRoom />} />
          <Route path="/rooms/standard-class" element={<StandardRoom />} />
          <Route path="/rooms/luxury-class" element={<LuxuryRoom />} />
          <Route path="/rooms/:roomId" element={<RoomDetailPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
