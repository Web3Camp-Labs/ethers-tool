import {Form, FloatingLabel,Button} from 'react-bootstrap';
import {ChangeEvent, useState} from "react";
import { ethers } from "ethers";

export default function IsAddress(){

    const [address,setAddress] = useState('');
    const [result,setResult] = useState('');

    const handleInput = (e:ChangeEvent) => {
        const { value } = e.target as HTMLInputElement;
        setAddress(value);
    }
    const run = () =>{
        try {
            let res = ethers.utils.isAddress(address).toString();
            setResult(res);
        } catch (e) {
            console.error(e)
        }
    }

    return <div>
        <div className="title">isAddress</div>
        <div className="tips">ethers.utils.isAddress(address)</div>
        <div className="desc">Returns true if address is valid (in any supported format).</div>
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
                {
                    !!result.length && <div className="result">{result}</div>
                }
                <Button variant="flat" onClick={()=>run()}>RUN</Button>
            </div>

        </div>
    </div>
}