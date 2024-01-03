window.onload = () =>{
   const inputs =  document.querySelectorAll("input");
    inputs.forEach(input => {
        input.addEventListener('change',calculateLoan)
    })

}

function calculateLoan() {
    const principal = document.querySelector('#amount').value;
    const interestRate = document.querySelector('#interest').value;
    const tenure = document.querySelector('#tenure').value;

    if(!principal || !interestRate || !tenure) return;
    const monthlyInterset = interestRate /100 / 12;
    const emi = principal * monthlyInterset * Math.pow(1 + monthlyInterset, tenure) / (Math.pow(1+monthlyInterset, tenure)-1);

    const totalAmount = emi * tenure;
    const totalInterest = totalAmount - principal;

     document.querySelector('#emi').innerText = 'EMI: ₹' + emi.toFixed(2);
     document.querySelector('#totalAmount').innerText = 'Total Amount: ₹' + totalAmount.toFixed(2);
    document.querySelector('#totalInterest').innerText = 'Total Interest: ₹' + totalInterest.toFixed(2);

    
}
