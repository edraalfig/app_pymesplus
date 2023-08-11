import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login1 } from "../pages/Login1";
import { Inicio } from "../pages/Inicio";
import { Files } from "../pages/Files";
import { Upload } from "../pages/Upload";
import { Process } from "../pages/Process";
import { PrivateRoute } from "../components/PrivateRoute";

export function Rutas() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login1 />} />
        <Route element={<PrivateRoute/>} >
          <Route exact path="/inicio" element={<Inicio />} />
          <Route exact path="/files" element={<Files />} />
          <Route exact path="/upload" element={<Upload />} />
          <Route exact path="/process/:fileId" element={<Process />} />
        </Route>
      </Routes>
    </Router>
  );
}
