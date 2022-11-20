import React from 'react';
import styled from "styled-components";
import HeaderTop from "./components/headTop";
import FooterBox from "./components/footerBox";
import { Container, Row, Col, Card } from 'react-bootstrap';
import IsAddress from "./components/isAddress";
import ToCheckSumAddress from "./components/toCheckSumAddress";
// import CheckAddressChecksum from "./components/CheckAddressChecksum";
import ToWei from "./components/toWei";
import FromWei from "./components/fromWei";
import GlobalStyle from "./utils/GloablStyle";
import {ContextProvider} from "./api/connect";

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .liBox,.li{
    margin-bottom: 40px;
  }
`

const ContentBox = styled(Container)`
    margin: 40px auto;
`
const CardBox = styled(Card)`
  border:0;
  box-shadow: 0 0 5px #ccc;
  border-radius: 6px;
`


function App() {
  return (
      <ContextProvider>
        <MainContent>
            <HeaderTop />
            <ContentBox>
                <Row>
                    <Col className="liBox"  md={6} xs={12}>
                        <CardBox body>
                            <IsAddress />
                        </CardBox>
                    </Col>
                    <Col className="liBox"  md={6} xs={12}>
                        <CardBox body>
                            <ToCheckSumAddress />
                        </CardBox>
                    </Col>
                    {/*<Col className="li" md={12} xs={12}>*/}
                    {/*    <CardBox body>*/}
                    {/*        <CheckAddressChecksum />*/}

                    {/*    </CardBox>*/}
                    {/*</Col>*/}
                    <Col className="li" md={6} xs={12}>
                        <CardBox body>
                            <ToWei />
                        </CardBox>
                    </Col>
                    <Col className="li"  md={6} xs={12}>
                        <CardBox body>
                            <FromWei />
                        </CardBox>
                    </Col>
                </Row>
            </ContentBox>
            <FooterBox />
        </MainContent>
        <GlobalStyle />
      </ContextProvider>
  );
}

export default App;
