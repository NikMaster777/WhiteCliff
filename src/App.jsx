import './App.css'
import { BrowserRouter, Route, Routes, useNavigate, useLocation } from 'react-router-dom'

import LendingToIndividuals_pledge from './pages/LendingToIndividuals_pledge/LendingToIndividuals_pledge'
import BusinessNoPledge from './pages/BusinessNoPledge/BusinessNoPledge'
import BusinessPledge from './pages/BusinessPledge/BusinessPledge'
import IpNoPledge from './pages/IpNoPledge/IpNoPledge'
import IpPledge from './pages/IpPledge/IpPledge'
import IndivisualPledgeApartment from './pages/IndivisualPledgeApartment/IndivisualPledgeApartment'
import IndividualPledgeCountryhouse from './pages/IndividualPledgeCountryhouse/IndividualPledgeCountryhouse'
import IndividualPledgeRoom from './pages/IndividualPledgeRoom/IndividualPledgeRoom'
import IndividualPledgeCar from './pages/IndividualPledgeCar/IndividualPledgeCar'
import InvestorPledgeApartment from './pages/InvestorPledgeApartment/InvestorPledgeApartment'
import InvestorPledgeRoom from './pages/InvestorPledgeRoom/InvestorPledgeRoom'
import InvestorPledgeCountryHouse from './pages/InvestorPledgeCountryHouse/InvestorPledgeCountryHouse'
import InvestorPledgeCar from './pages/InvestorPledgeCar/InvestorPledgeCar'
import RansomApartment from './pages/RansomApartment/RansomApartment'
import ScrollToTop from './features/ScrollToTop/ScrollToTop'
import RansomCountryhouse from './pages/RansomCountryhouse/RansomCountryhouse'
import RansomRoom from './pages/RansomRoom/RansomRoom'
import RansomCar from './pages/RansomCar/RansomCar'
import ThanksPledge from './pages/ThanksPledge/ThanksPledge'
import Contacts from './pages/Contacts/Contacts'
import BusinessPledgeProperty from './pages/BusinessPledgeProperty/BusinessPledgeProperty'
import Cooperation from './pages/Cooperation/Cooperation'
import BusinessLeasing from './pages/BusinessLeasing/BusinessLeasing'
import Insurance from './pages/Insurance/Insurance'
import Blog from './pages/Blog/Blog'

import './fix.css'
import './mobile.css'
import useWindowWidth from './useWindowWidth';

import { useEffect, useState } from 'react'

import _1URL from './1.svg'
import _2URL from './2.svg'
import Legal from './pages/Legal/Legal'

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

function AppContent() {

  const width = useWindowWidth()


  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || document.documentElement.scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // чтобы сразу поймать текущее положение при загрузке

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const routes = [
    '/',
    '/business-no-pledge',
    '/business-pledge',
    '/business-property',
    '/business-leasing',
    '/ip-no-pledge',
    '/ip-pledge',
    '/individual-pledge-apartment',
    '/individual-pledge-countryhouse',
    '/individual-pledge-room',
    '/individual-pledge-car',
    '/investor-pledge-apartment',
    '/investor-pledge-room',
    '/investor-pledge-countryhouse',
    '/investor-pledge-car',
    '/ransom-apartment',
    '/ransom-room',
    '/ransom-countryhouse',
    '/ransom-car',
    '/thanks-pledge',
    '/contacts',
    '/cooperation',
    '/insurance',
    '/blog'
  ];

  const getCurrentIndex = () => {
    const idx = routes.indexOf(location.pathname);
    return idx === -1 ? 0 : idx;
  };

  const goToNextRoute = () => {
    const currentIndex = getCurrentIndex();
    const nextIndex = (currentIndex + 1) % routes.length;
    navigate(routes[nextIndex]);
  };

  const goToPreviousRoute = () => {
    const currentIndex = getCurrentIndex();
    const prevIndex = (currentIndex - 1 + routes.length) % routes.length;
    navigate(routes[prevIndex]);
  };

  return (
    <>
      <ScrollToTop />

      {scrollY < 400 && width > 1024 &&  <>
        <button className='button-1' onClick={goToPreviousRoute}>
        <img src={_2URL} alt="" />
      </button>

      <button className='button-2' onClick={goToNextRoute}>
        <img src={_1URL} alt="" />
      </button>
      </>
      }



      <Routes>
        <Route path='*' element={<LendingToIndividuals_pledge />} />
        <Route path='/biznes-kreditovanie-bez-zaloga' element={<BusinessNoPledge />} />
        <Route path='/biznes-kreditovanie-s-zalogom' element={<BusinessPledge />} />
        <Route path='/biznes-kreditovanie-s-zalogom-kommercheskoy-nedvijimosti' element={<BusinessPledgeProperty />} />
        <Route path='/biznes-lizing' element={<BusinessLeasing />} />
        <Route path='/ip-bez-zaloga' element={<IpNoPledge />} />
        <Route path='/ip-s-zalogom' element={<IpPledge />} />
        <Route path='/kreditovanie-fizlic-pod-zalog-kvartiri' element={<IndivisualPledgeApartment />} />
        <Route path='/kreditovanie-fizlic-pod-zalog-doma' element={<IndividualPledgeCountryhouse />} />
        <Route path='/kreditovanie-fizlic-pod-zalog-komnati' element={<IndividualPledgeRoom />} />
        <Route path='/kreditovanie-fizlic-pod-zalog-mashinomesta' element={<IndividualPledgeCar />} />
        <Route path='/kreditovanie-pod-zalog-kvartiri-ot-investora' element={<InvestorPledgeApartment />} />
        <Route path='/kreditovanie-pod-zalog-komnati-ot-investora' element={<InvestorPledgeRoom />} />
        <Route path='/kreditovanie-pod-zalog-doma-ot-investora' element={<InvestorPledgeCountryHouse />} />
        <Route path='/kreditovanie-pod-zalog-mashinomesta-ot-investora' element={<InvestorPledgeCar />} />
        <Route path='/vikup-kvartiri' element={<RansomApartment />} />
        <Route path='/vikup-komnati' element={<RansomRoom />} />
        <Route path='/vikup=doma' element={<RansomCountryhouse />} />
        <Route path='/vikup-mashini' element={<RansomCar />} />
        <Route path='/spasibo' element={<ThanksPledge />} />
        <Route path='/kontakti' element={<Contacts />} />
        <Route path='/sotrudnichestvo' element={<Cooperation />} />
        <Route path='/bankovskaya-garantiya' element={<Insurance />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/legal' element={<Legal />} />
      </Routes>
    </>
  );
}

export default App;
