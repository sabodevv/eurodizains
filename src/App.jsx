import { Routes, Route } from "react-router-dom";

// Components
import AnimatedBackground from "./components/AnimatedBackground.jsx";
import Header from "./components/Header.jsx";

// Main sections
import Hero from "./sections/Hero.jsx";
import Benefits from "./sections/Benefits.jsx";
import Services from "./sections/Services.jsx";
import Gallery from "./sections/Gallery.jsx";
import Contact from "./sections/Contact.jsx";

// Repairs Pages
import RepairsHome from "./pages/repairs/repairs-home.jsx";
import Standard from "./pages/repairs/standard.jsx";
import Premium from "./pages/repairs/premium.jsx";
import VIP from "./pages/repairs/vip.jsx";
import Apartments from "./pages/repairs/apartments.jsx";
import Houses from "./pages/repairs/houses.jsx";
import Offices from "./pages/repairs/offices.jsx";
import Ceilings from "./pages/repairs/ceilings.jsx";
import Floors from "./pages/repairs/floors.jsx";
import Plumbing from "./pages/repairs/plumbing.jsx";
import Walls from "./pages/repairs/walls.jsx";
import Electrics from "./pages/repairs/electrics.jsx";
import Openings from "./pages/repairs/openings.jsx";
import Demolition from "./pages/repairs/demolition.jsx";
import Finishing from "./pages/repairs/finishing.jsx";

// Design Pages
import DesignHome from "./pages/design/design-home.jsx";
import ProjectContent from "./pages/design/project-content.jsx";
import ProjectStandard from "./pages/design/project-standard.jsx";
import ProjectPremium from "./pages/design/project-premium.jsx";
import ProjectVip from "./pages/design/project-vip.jsx";
import Visualization3D from "./pages/design/visualization-3d.jsx";
import AuthorSupervision from "./pages/design/author-supervision.jsx";
import DesignGuarantees from "./pages/design/design-guarantees.jsx";
import DesignDiscounts from "./pages/design/design-discounts.jsx";

// 🔹 ВАШ НОВЫЙ ФАЙЛ
import Composition from "./pages/design/composition.jsx";

// Design Clients
import LivingRoomDesign from "./pages/design/living-room-design.jsx";
import HouseDesign from "./pages/design/house-design.jsx";
import Decoration from "./pages/design/decoration.jsx";
import InteriorDesign from "./pages/design/interior-design.jsx";
import OfficeDesign from "./pages/design/office-design.jsx";
import RestaurantDesign from "./pages/design/restaurant-design.jsx";
import ClubDesign from "./pages/design/club-design.jsx";

export default function App() {
  return (
    <>
      <AnimatedBackground />
      <Header />

      <Routes>
        {/* Главная */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Benefits />
              <Services />
              <Gallery />
              <Contact />
            </>
          }
        />

        {/* Repairs */}
        <Route path="/repairs" element={<RepairsHome />} />
        <Route path="/repairs/standard" element={<Standard />} />
        <Route path="/repairs/premium" element={<Premium />} />
        <Route path="/repairs/vip" element={<VIP />} />
        <Route path="/repairs/apartments" element={<Apartments />} />
        <Route path="/repairs/houses" element={<Houses />} />
        <Route path="/repairs/offices" element={<Offices />} />
        <Route path="/repairs/ceilings" element={<Ceilings />} />
        <Route path="/repairs/floors" element={<Floors />} />
        <Route path="/repairs/plumbing" element={<Plumbing />} />
        <Route path="/repairs/walls" element={<Walls />} />
        <Route path="/repairs/electrics" element={<Electrics />} />
        <Route path="/repairs/openings" element={<Openings />} />
        <Route path="/repairs/demolition" element={<Demolition />} />
        <Route path="/repairs/finishing" element={<Finishing />} />

        {/* Design */}
        <Route path="/design" element={<DesignHome />} />
        <Route path="/design/project-content" element={<ProjectContent />} />
        <Route path="/design/standard" element={<ProjectStandard />} />
        <Route path="/design/premium" element={<ProjectPremium />} />
        <Route path="/design/vip" element={<ProjectVip />} />
        <Route path="/design/3d-visual" element={<Visualization3D />} />
        <Route path="/design/supervision" element={<AuthorSupervision />} />
        <Route path="/design/warranty" element={<DesignGuarantees />} />
        <Route path="/design/discounts" element={<DesignDiscounts />} />

        {/* 🔹 НОВЫЙ РОУТ ДЛЯ composition.jsx */}
        <Route path="/design/composition" element={<Composition />} />

        {/* Design client categories */}
        <Route path="/design/apartments" element={<LivingRoomDesign />} />
        <Route path="/design/houses" element={<HouseDesign />} />
        <Route path="/design/decor" element={<Decoration />} />
        <Route path="/design/interiors" element={<InteriorDesign />} />
        <Route path="/design/offices" element={<OfficeDesign />} />
        <Route path="/design/restaurants" element={<RestaurantDesign />} />
        <Route path="/design/nightclubs" element={<ClubDesign />} />
      </Routes>
    </>
  );
}
