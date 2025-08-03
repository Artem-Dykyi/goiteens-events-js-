import styled from "styled-components";
import Box from "./Box";
import PropTypes from 'prop-types';
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMan } from "react-icons/io";

const Title = styled.h3`
  
  font-size: 20px;
`;

const Info = styled.p`
  font-size: 15px;
`;



export const Event = ({name, location, speaker, start, end, icon})=>{
    return (
        <Box>
            <Title>{name}</Title>
            <Info><FaLocationDot/>{location}</Info>
            <Info><IoIosMan/>{speaker}</Info>
        </Box>
    )

}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  icon: PropTypes.node,
};

export default Event