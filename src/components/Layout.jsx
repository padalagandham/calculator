import React from 'react';
import ResultInput from '../components/ResultInput';
import Button from '../components/Button';
import {math} from '../utill';

const operators = ['+','-','*','/'];
const numKeys = [7,8,9,4,5,6,1,2,3,0,'.'];

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            left: '',
            right: '',
            operator: '',
            result: ''
        }
        this.handleOperator = this.handleOperator.bind(this);
        this.handleNumeric = this.handleNumeric.bind(this);
        this.allClear = this.allClear.bind(this);
        this.calculateResult = this.calculateResult.bind(this);
    }

    allClear() {
        this.setState({result: '', left:'', righ:'', operator:'' });
    }

    calculateResult() {
        const {left, right, operator} = this.state;
        if(left && right && operator ){
            const result = math[operator](Number(left),Number(right));
            this.setState({'result': result, left:'', right:'', operator: '' });
        }
    }
    handleOperator(event) {
        const el = event.currentTarget;
        this.setState({operator : el.value, });
    }

    handleNumeric(event) {
        const {left, right, operator} = this.state;
        const el = event.currentTarget;
        if(operator === ''){
            this.setState({left:left + el.value, result : left + el.value });
        }else{
            this.setState({right:right + el.value, result : right + el.value });
        }
    }

    render() {
        const {result} = this.state;
        return (
            <div className="calculator">
                <ResultInput result={result}/>
                <div className="calculator-keys">
                    {
                        operators.map((key, index) => {
                            return <Button val={key} action={this.handleOperator} key={index} content={key} />
                        })

                    }
                    {
                        numKeys.map((key, index) => {
                            return <Button val={key} action={this.handleNumeric} key={index} content={key} />
                        })
                    } 
                    <Button val={"all-clear"} classname={"all-clear"} action={this.allClear} content={"AC"} />
                    <Button val={"="} classname={"equal-sign"} action={this.calculateResult} content={"="} />
                    
                </div>    
            </div>  
        );
    }
}

export default Layout;