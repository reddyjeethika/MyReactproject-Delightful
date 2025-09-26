import { add, multiply } from "./Math"; 
function m1() {
  
  const res1 = add(10, 20);
  const res2 = multiply(90, 20);

  return (
    <>
     
      <p>Addition of 10 and 20: {res1}</p>
      <p>Multiplication of 10 and 20: {res2}</p>
    </>
  );
}

export default m1;
