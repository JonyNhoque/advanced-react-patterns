import styled from "styled-components";

const S = {
    Container: styled.div`
        width: 100vw;
    `,

    Header: styled.div`
       display: flex;
       justify-content: space-between;
       border-bottom-left-radius: 10px;
       border-bottom-right-radius: 10px;
       background-color: #292929;
       padding: 0px 25px;
    `,

    Header__textContainer: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `,

    Header__title: styled.h2`
        color: #fff;
    `,

    Header__subtitle: styled.h4`
        margin-top: -20px;
        color: #fff;
    `
};

export default S;