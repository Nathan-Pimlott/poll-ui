import { Routes, Route } from "react-router-dom";

import Home from "../components/home";
// TODO Add the remaining routes.
import ViewPoll from "../components/viewPoll";
import ViewPollResult from "../components/viewPollResult";
import EditPoll from "../components/home";
import AddPoll from "../components/home";

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/poll/add" element={<AddPoll />} />
      <Route path="/poll/:pollId" element={<ViewPoll />} />
      <Route path="/poll/:pollId/result" element={<ViewPollResult />} />
      <Route path="/poll/:pollId/edit" element={<EditPoll />} />
    </Routes>
  );
}
