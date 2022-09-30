import styled from "styled-components";

interface AnchorProps {

  anchor: string
}

export const SContainer = styled.div`
    width: 102.4rem;
    height: 100vh;
    margin: auto;
`

export const BoxLampada = styled.section`
    width: 80rem;
    height: 30rem;
    margin: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const BoxButton = styled.section`
    width: 80rem;
    height: 10rem;
    margin: auto;

    display: flex;
    justify-content: center;

`

export const Button = styled.button`
  width: 10rem;
  height: 5rem;
  margin-left: 1rem;
`

export const img = styled.img`
  width: 100%;
  height: 100%;
`

export const anchor = styled.a<AnchorProps>`

`