import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

interface ModalProps {
    open: boolean;
    close?: any;
    modalTitle?: string;
    children?: React.ReactNode
}

const Modal: React.FC<ModalProps> = props => {

    const { open, close, modalTitle, children } = props;

    return (
        <PopUp
            className={`${open ? "active" : ""}`}
        >
            { open ? (
                <PopUpWrapper>
                    <CloseButton 
                        src={require('../../../assets/images/close.png')}
                        onClick={close}
                    />
                    <PopUpTitle>
                        {modalTitle}
                    </PopUpTitle>

                    <PopUpContent>
                        {children}
                    </PopUpContent>

                </PopUpWrapper>
            ) : null
            }
        </PopUp>
    );
};

const CloseButton = styled.img`
    position: absolute;
    right: 15px;
    top: 15px;
    width: 18px;
    heigh: auto;
`;

const modalBgKeyframe = keyframes`
    from {
    opacity: 0;
    }
    to {
    opacity: 1;
    }
`;

const PopUp = styled.div`
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
    align-items: center;
    text-align: center;

    &.active {
        display: flex;
        animation: ${modalBgKeyframe} .3s;
    }
`;

const modalKeyframe = keyframes`
    from {
    opacity: 0;
    margin-bottom: -50px;
    }
    to {
    opacity: 1;
    margin-top: 0;
    }
`;

const PopUpWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    width: 90%;
    min-height: 450px;
    max-width: 360px;
    margin:0 auto;
    border-radius: 16px;
    box-shadow: 0 -3px 10px 0 rgba(0, 0, 0, 0.04);
    background-color: #ffffff;

    animation: ${modalKeyframe} .3s;
    overflow: hidden;
`;


const PopUpTitle = styled.div`
    padding: 30px 20px;
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
    letter-spacing: -0.2px;
    text-align: center;
    color: #343437;

    border-bottom: 2px inset;
`;

const PopUpContent = styled.div`
    padding: 20px
`;

export default Modal;