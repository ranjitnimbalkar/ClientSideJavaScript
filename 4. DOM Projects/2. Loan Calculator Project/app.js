document.getElementById('loan-form').addEventListener('submit', function(e){
    //Hide results
    document.getElementById('results').style.display = 'none';
    //Show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults,2000);

    e.preventDefault();
});

function calculateResults(){
    console.log('Calculating...');
    //UI Vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calcualteInterest = parseFloat(interest.value) / 100 / 12;
    const calcualtedPayment = parseFloat(years.value) * 12;

    //compute monthly payment
    const x = Math.pow(1 + calcualteInterest, calcualtedPayment);
    const monthly = (principal*x*calcualteInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calcualtedPayment).toFixed(2);
        totalInterest.value = ((monthly * calcualtedPayment) - principal).toFixed(2);
        document.getElementById('results').style.display = 'block';
        document.getElementById('loading').style.display = 'none';
    } else {
        showError('Please check you numbers');
    }
   // e.preventDefault();
}

function showError(error){
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'none';
    //Create div
    const errorDiv = document.createElement('div');
    //Add class
    errorDiv.className = 'alert alert-danger';
    //carete text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    //Get Elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    card.insertBefore(errorDiv,heading);

    //clear error
    setTimeout(clearError,2000);

}

function clearError(){
    document.querySelector('.alert').remove();
}