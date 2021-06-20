import React, { Children } from 'react';
import styled from '@emotion/styled';

interface LayoutProps {
    children?: React.ReactNode;
}

const AccountLayout:React.FC<LayoutProps> = (props) => {

    const {children} = props;

    return (
        <AccountPage>
            <Container>
                <Card>
                    <CardImg
                        width="456"
                        height="500"
                    />
                    <CardBody>
                        {children}
                    </CardBody>
                </Card>
               
            </Container>
        </AccountPage>
    );
};

const AccountPage = styled.div`
    padding-top: 3rem;
    margin: 3rem 0;
`;

const Container = styled.div`
    width: 100%;
    padding-right: 12px;
    padding-left: 12px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 1200px) {
        max-width: 1140px;
    };

    @media (min-width: 992px) and (max-width: 1199) {
        max-width: 960px;
    };

    @media (min-width: 768px) and (max-width: 991px) {
        max-width: 720px;
    };

    @media (min-width: 576px) and (max-width: 767px) {
        max-width: 540px;
    };
`;

const Card = styled.div`
    justify-content: center;
    margin: 0 auto;
    display: flex;
`;

const CardImg = styled.img`
    @media (max-width: 991px) {
        display: none;
    }
`;

const CardBody = styled.div`
    width: 456px;
    padding: 30px;
`;


export default AccountLayout;