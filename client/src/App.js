import { useContext } from "react";
import PublicRoutes from "./routes/public.routes";
import PrivateRoutes from "./routes/private.routes";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const { auth } = useContext(AuthContext)
  console.log(auth)

  return auth ? <PrivateRoutes /> : <PublicRoutes />

}

export default App;
