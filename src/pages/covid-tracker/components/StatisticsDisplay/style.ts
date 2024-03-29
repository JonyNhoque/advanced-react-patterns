import styled from "styled-components";

const S = {
    StatisticsDisplay: styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
    `,

    Title: styled.h2`
        text-transform: uppercase;
        margin-bottom: 20px;
    `,

    ResponseDisplay: styled.div`
        background-color: #D3D3D3;
        padding: 5px 8px;
        border-radius: 25px;
        text-align: center;
        min-height: 20px;
        width: 80px;
    `
};

export default S;