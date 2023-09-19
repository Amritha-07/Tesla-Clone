import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section({title, description, leftBtnText, rightBtnText, backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
            <ItemText>
                <h1>{ title }</h1>
                <p>{ description }</p>
            </ItemText>
        </Fade>
        <Buttons>
            <Fade bottom>
                <ButtonGroup>
                    { leftBtnText && 
                        <LeftButton>
                            { leftBtnText }
                        </LeftButton>
                    }
                    { rightBtnText && 
                        <RightButton>
                            { rightBtnText }
                        </RightButton>
                    }
                </ButtonGroup>
                <DownArrow src='/images/down-arrow.svg' />
            </Fade>
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    // background-image: url('/images/model-s.jpg');
    background-image: ${props => `url("/images/${props.bgImage}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between; //vertical
    align-items: center;//horizontal
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
`

const LeftButton = styled.div`
    background: white;
    opacity: 0.65;
    color: black;    
    height: 40px;
    width: 256px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    margin: 8px;
    @media (max-width: 820px) {
        width: 128px;
    }
`

const RightButton = styled(LeftButton)`
    background-color: rgba(23, 26, 32, 0.8);
    opacity: 0.85;
    color: white;
`

const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`
`

