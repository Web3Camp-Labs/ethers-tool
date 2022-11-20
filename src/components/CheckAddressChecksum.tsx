import {Form, FloatingLabel,Button} from 'react-bootstrap';
import {ChangeEvent, useState} from "react";
import { ethers } from "ethers";


export default function CheckAddressChecksum(){

    const [address,setAddress] = useState('')

    const handleInput = (e:ChangeEvent) => {
        const {  value } = e.target as HTMLInputElement;
        setAddress(value);
    }

    return <div>
        <div className="title">CheckAddressChecksum</div>
        <div className="tips">ethers.utils.checkAddressChecksum(address)</div>
        <div className="desc">Checks the checksum of a given address. Will also return false on non-checksum addresses.</div>
        <div>
            <FloatingLabel
                controlId="Address"
                label="Address"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    name='token'
                    placeholder="Address"
                    value={address}
                    onChange={(e)=>handleInput(e)}
                />
            </FloatingLabel>
            <div className="lastLine">
                <div className="tipsBox">String: An address string.</div>
                <Button variant="flat">RUN</Button>
            </div>

        </div>
    </div>
}