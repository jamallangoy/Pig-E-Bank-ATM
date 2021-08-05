const ATMDeposit = ({ onChange, isDeposit, isValid, onClick}) => {
  const choice = ['Deposit', 'Cash Back'];
  // const numbers = [1,2,3,4,5,6,7,8,9,0]
  // const digits = numbers.map((number,index) => {

  //   return (
  //     <button key={index}    className='element'>{number}</button>
  //   )    
  // })
  console.log(`ATM isDeposit: ${isDeposit}`);

  return (
    <>
    {/* <ul >{digits}</ul> */}
      <h3 className='choice'> {choice[Number(!isDeposit)]}</h3>
      
      <input className = 'input' id="number-input" type="number" width="200" onChange={onChange} ></input>
      <input className='submitBtn' type="submit" disabled={!isValid} width="200" value="Submit" id="submit-input"></input>
    </>
  );
};

const Account = () => {
  // let deposit = 0; // state of this transaction
  const [deposit, setDeposit] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [atmMode, setAtmMode] = React.useState('');
  const [validTransaction, setValidTransaction] = React.useState(false);
  // const [input, setInput] = React.useState([])
  let status = `Account Balance $ ${totalState} `;

  console.log(`Account Rendered with isDeposit: ${isDeposit}`);
  const handleChange = (event) => {
    console.log(Number(event.target.value));
    if (Number(event.target.value) <= 0) {
      return setValidTransaction(false);
    }
    if (atmMode === 'Cash Back' && Number(event.target.value) > totalState) {
      setValidTransaction(false);
    } else {
      setValidTransaction(true);
    }
    setDeposit(Number(event.target.value));
  };
  const handleSubmit = (event) => {
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    setTotalState(newTotal);
    setValidTransaction(false);
    event.preventDefault();
  };

  // const handleClick = (e, numbers) => {
  //   e.preventDefault();
  //   console.log(numbers)
  //   let item = e.target.value
  //   numbers.map((number, index) =>{
  //     if (item == index) {
  //       console.log(item)
  //       setInput([...input, ...item])
  //       console.log(input)
  //     }

  //   }) 
  // };


  const handleModeSelect = (event) => {
    console.log(event.target.value);
    setAtmMode(event.target.value);
    setValidTransaction(false);
    if (event.target.value === 'Deposit') {
      setIsDeposit(true);
    } else {
      setIsDeposit(false);
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <>
        <h2 id="total" title="Your total amount in account">{status}</h2>
        <label >Select an action to continue</label>
        <select  onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
          <option id="no-selection" value="">Choose type</option>
          <option id="deposit-selection" value="Deposit">
            Deposit
          </option>
          <option id="cashback-selection" value="Cash Back">
            Cash Back
          </option>
        </select>
        {atmMode && (
          <ATMDeposit
            onChange={handleChange}
            isDeposit={isDeposit}
            isValid={validTransaction}
            // onClick={handleClick}
          ></ATMDeposit>
        )}
      </>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById('root'));



  





// const ATMDeposit = ({ onChange, isDeposit }) => {
//   const choice = ["Deposit", "Withdrawl"];
//   return(

//     <>
//       <label className="label huge">
//         <h4>{choice[Number(!isDeposit)]}</h4>
//         <input className='input' type='number' onChange={onChange}></input>
//         <input className='submit-btn' type='submit' value='Submit'></input>
        
//       </label> 
//     </>
//   )
// };

// const Account = (e) => {
//   let deposit = 0;
//   const [total, setTotal] = React.useState(0);
//   const [atmMode, setAtmMode] = React.useState('')
//   const [isDeposit, setIsDeposit] = React.useState(true);
  
//   let status = `Account total: $ ${total}`
  
//   const handleChange = (e) => {
//     deposit = (e.target.value);
//   }

//   const handleSubmit = (e) => {
//     let newTotal = isDeposit ? total + deposit : total - deposit;
//     setTotal(newTotal)
//     e.preventDefault();
//   }

//   return(
//       <form className='form' onSubmit={handleSubmit}>
//         <h4 id='total'>{status} </h4>
//         <button className='deposit-btn' onClick={() => setIsDeposit(true)}>Deposit</button>
//         <button className='withdrawl-btn' onClick={() => setIsDeposit(false)}>Withdrawl</button>

//         <ATMDeposit onChange={handleChange} isDeposit={isDeposit} />
//       </form>
//   )
 
// };

// ReactDOM.render(
//   <Account />,
//   document.getElementById('root')
// )

