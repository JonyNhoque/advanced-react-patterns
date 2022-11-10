import styled from "styled-components";

const S = {
    SearchBar: styled.div`
        padding: 12px 0px;
    `,

    Input: styled.input`
        border: none;
        border-radius: 15px;
        padding: 2px
    `,

    SearchButton: styled.button`
        text-decoration: none;
        color: #292929;
        background-color: #fff;
        padding: 3.5px 6px;
        border: none;
        border-radius: 15px;
        cursor: pointer;
        margin-left: 12px;
        transition: 0.2s;

        &:hover {
            padding: 4px 6.5px;
            background-color: #ffd966;
        }
    `
};

export default S;