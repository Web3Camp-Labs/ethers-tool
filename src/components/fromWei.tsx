import {Form, FloatingLabel,Button} from 'react-bootstrap';
import {ChangeEvent, useState} from "react";
import styled from "styled-components";
import {ethers} from "ethers";

const Box = styled.div`
    .Topline{
      margin-bottom: 20px;
    }
`

const Result = styled.div`
    padding-top: 20px;
  color: green;

`
const Tips = styled.div`
    padding-top: 20px;
  color: red;
`

export default function FromWei(){

    const [number,setNumber] = useState('');
    const [unit,setUnit] = useState('');
    const [tips,setTips] = useState('');
    const [result,setResult] = useState('');

    const handleInput = (e:ChangeEvent) => {
        const { name,value } = e.target as HTMLInputElement;
        if(name ==="number"){
            setNumber(value);
        }else{
            setUnit(value);
        }

    }

    const run = () =>{
        setResult('');
        setTips('');
        try {
           let res = ethers.utils.formatUnits(number, unit?unit:'ether').toString();
            setResult(res)
        } catch (e:any) {
            setTips(e.toString());
        }
    }

    return <Box>
        <div className="title">formatUnits</div>
        <div className="tips">ethers.utils.formatUnits(string[, unit])</div>
        <div className="desc">Returns a string representation of value formatted with unit digits (if it is a number) or to the unit specified (if a string).</div>
        <div>
            <FloatingLabel
                controlId="number"
                label="number"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    name='number'
                    placeholder="number"
                    value={number}
                    onChange={(e)=>handleInput(e)}
                />
            </FloatingLabel>
            <div className="lastLine Topline">
                <div className="tipsBox">String|Number: The value in wei.</div>
            </div>
            <FloatingLabel
                controlId="unit"
                label="unit"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    name='unit'
                    placeholder="unit"
                    value={unit}
                    onChange={(e)=>handleInput(e)}
                />
            </FloatingLabel>
            <div className="lastLine">
                <div className="tipsBox">String (optional, defaults to "ether"): The ether to convert to.</div>
                <Button variant="flat" onClick={()=>run()}>RUN</Button>
            </div>

        </div>
        {
            !!result.length &&<Result>{result}</Result>
        }
        {
            !!tips.length &&  <Tips>{tips}</Tips>
        }

    </Box>
}