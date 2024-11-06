import Index from "./components/Index";
import Footer from "./components/Layouts/Footer";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Layouts/Header";
import Course from "./components/Course";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Document from "./components/doc/Document";
import NCTBED from "./components/doc/NCTBED";
import NCTDElEd from "./components/doc/NCTDElEd";
import FacultyStaffListing from "./components/doc/FacultyStaffListing";
import CollegePhoto from "./components/doc/CollegePhoto";
import BalanceSheet from "./components/doc/BalanceSheet";
import IncomeandExpenditureAccount from "./components/doc/IncomeandExpenditureAccount";
import ReceiptandPayment from "./components/doc/ReceiptandPayment";
import AfrcLetter from "./components/doc/AfrcLetter";
import StudentList from "./components/doc/StudentList";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/course" element={<Course />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/document" element={<Document />} />
        <Route path="/nctbed" element={<NCTBED />} />
        <Route path="/nctdeled" element={<NCTDElEd/>} />
        <Route path="/FacultyStaffListing" element={<FacultyStaffListing/>} />
        <Route path="/collegephoto" element={<CollegePhoto/>} />
        <Route path="/balancesheet" element={<BalanceSheet/>} />
        <Route path="/incomeandexpenditure" element={<IncomeandExpenditureAccount/>} />
        <Route path="/receiptandpayment" element={<ReceiptandPayment/>} />
        <Route path="/afrcletter" element={<AfrcLetter/>} />
        <Route path="/studentlist" element={<StudentList/>} />




      </Routes>
      <Footer />
    </>
  );
}

export default App;
