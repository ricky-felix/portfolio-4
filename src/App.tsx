import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Snowfall from "react-snowfall";

import Index from "./pages/Index";
import KIPIConference from "./pages/KIPIConference";
import GiveAGift from "./pages/GiveAGift";
import BottledMoments from "./pages/BottledMoments";
import NiamodProperties from "./pages/NiamodProperties";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
	<QueryClientProvider client={queryClient}>
		<TooltipProvider>
			<div className="fixed inset-0 pointer-events-none z-[9999]">
				<Snowfall color="#bae6fd" radius={[1.0, 4.0]} />
			</div>
			<Toaster />
			<Sonner />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="/work/kipi-conference" element={<KIPIConference />} />
					<Route path="/work/give-a-gift" element={<GiveAGift />} />
					<Route path="/work/bottled-moments" element={<BottledMoments />} />
					<Route
						path="/work/niamod-properties"
						element={<NiamodProperties />}
					/>
					{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</TooltipProvider>
	</QueryClientProvider>
);

export default App;
