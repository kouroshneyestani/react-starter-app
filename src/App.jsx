import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Header from "./components/Header";
import AppRoutes from "./routes";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Header />
                <AppRoutes />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
