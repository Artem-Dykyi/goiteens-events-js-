import styled from "styled-components";
import Box from "./Box";
import Event from "./Event";
import PropTypes from 'prop-types';

// import { FaRegCalendarAlt, FaMoneyBillAlt, FaCrown } from 'react-icons/fa';

const Page = styled(Box)`
    display:flex;
    flex-wrap:wrap;
    gap: 40px;
    background:rgb(182, 156, 196);
    width: 1500px;
    margin-left:auto;
    margin-right:auto;
`

const PageBoard =({events})=>{
    return(
    <Page>
        {events.map((e, index)=>
            <Event
                key={index}
                name={e.name}
                speaker={e.speaker}
                location={e.location}
                start={e.start}
                end={e.end}
            />
        )}
    </Page>
    )
}

PageBoard.propTypes = {
  events: PropTypes.array.isRequired,
  icon: PropTypes.node,
};


export default PageBoard