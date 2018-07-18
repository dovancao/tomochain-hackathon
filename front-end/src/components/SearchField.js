import React from 'react';
import { InputGroup, Input } from 'reactstrap';

export default class SearchField extends React.Component {
    render() {
        return (
            <InputGroup>
                <Input type="text" placeholder="Find Freelancers Or Job" />
            </InputGroup>
        )
    }
}