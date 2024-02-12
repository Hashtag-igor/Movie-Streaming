import styled from "styled-components";

export const FooterContainer = styled.div`
    background: white;
    padding: 5px 0 20px 0;
`

export const RightsReservedContainer = styled.div`
    margin: 50px auto 0 auto;
    width: 94%;

    @media screen and (max-width: 800px) {
        margin: 45px auto 0 auto;
    }

    @media screen and (max-width: 799px) {
        margin: 40px auto 0 auto;
    }
`
export const FooterReserved = styled.h5`
    font-size: 14px;
    text-align: center;
    color: rgb(0, 0, 0);

    @media screen and (max-width: 420px) {
        font-size: 13px;
    }

    @media screen and (max-width: 360px) {
        font-size: 12px;
    }
`