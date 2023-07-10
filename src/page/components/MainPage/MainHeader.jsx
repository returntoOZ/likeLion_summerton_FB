import React, { useEffect } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const ChatName = styled.h2`
    margin: 1.25rem 0 1.25rem 0;
`;

const CreateButton = styled.button`
    height: 2rem;
    background: rgba(56, 26, 239, 0.80);
    border-radius: 10%;
    border: none;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #FFF;
    text-align: center;
    letter-spacing: 0.6px;
    position: absolute;
    right: 1rem;
    top: 1rem;
`;



const MainHeader = () => {

    useEffect(()=>{
        axios
            .get(`http://54.180.85.255/room_list_create/`)
            .then((res)=>{
                console.log(res);
            })
            .catch((error)=>{
                console.log(error);
            });
    },[]);
    // const navigate = useNavigate();

    
    //버튼에 onClink={()=>navigate()} 추가
    return (
        <>
            <HeaderContainer>
                <ChatName>ㅇㅇ챗</ChatName>
                <CreateButton>개설하기</CreateButton>
            </HeaderContainer>
        </>
            
    );
};

export default MainHeader;