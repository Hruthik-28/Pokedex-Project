import { BrowserRouter } from "react-router-dom"
import CustomRoutes from "./routes/CustomRoutes"
function App() {
  return (
    <BrowserRouter>
      <CustomRoutes />
    </BrowserRouter>
  )
}

export default App
