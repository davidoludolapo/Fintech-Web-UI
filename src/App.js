import styled from "styled-components";
import CardSection from "./components/CardSection";
import ChartSection from "./components/ChartSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MessagingSection from "./components/MessagingSection";
import PaymentSection from "./components/PaymentSection";
import { OuterLayout } from "./styles/Layouts";
import { Fade } from "react-reveal";
import InfoSection from "./components/InfoSection";

const MainStyled = styled.main``;

function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <MainStyled>
          <Fade left>
            <CardSection />
          </Fade>
          <Fade right>
            <ChartSection />
          </Fade>
          <Fade left>
            <MessagingSection />
          </Fade>

          <FAQSection />

          {/* <Fade right>
            <PaymentSection />
          </Fade> */}
          <InfoSection/>
        </MainStyled>
      </OuterLayout>
      <Footer />
    </div>
  );
}

export default App;
