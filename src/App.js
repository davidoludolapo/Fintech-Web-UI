import styled from "styled-components";
import CardSection from "./components/CardSection";
import Header from "./components/Header";
import {OuterLayout} from "./styles/Layouts"

const MainStyled = styled.main`
  
`

function App() {
  return (
    <div className="App">
       <Header/>
     <OuterLayout>
      <MainStyled>
        <CardSection/>
      </MainStyled>
     </OuterLayout>
    </div>
  );
}

export default App;
