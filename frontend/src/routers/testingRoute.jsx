import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminForm from "../TestingForms/AdminForm";

function TestingRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/adminform" element={<AdminForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default TestingRoute;
