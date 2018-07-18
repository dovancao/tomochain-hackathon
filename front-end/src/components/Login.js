import React from 'react';
import { Button, InputGroup, Input } from 'reactstrap';

export default class SearchField extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className="log-in">
                    <div>
                        <h1>Log in and get to work</h1>
                    </div>
                    <div>
                        <div>
                        <InputGroup>
                            <Input type="text" placeholder="Your Private Key" />
                        </InputGroup>
                         </div>
                        <div>
                            <Button type="submit" color="success"></Button>
                        </div>
                    </div>
                </div>
                <div className="new=to=work">
                    <div>
                        <p>New to Chain Work</p>
                    </div>
                    <div>
                        <Button outline color="secondary" type="submit">Create Private Key</Button>
                    </div>
                </div>
            </div>
        )
    }
}