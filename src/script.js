document.addEventListener('DOMContentLoaded', () => {
  const sellButton = document.getElementById('sellButton');
  const listButton = document.getElementById('listButton');

  sellButton.addEventListener('click', () => {
    alert('Thank you for your interest! Please contact Hector Picon for more details.');
  });

  listButton.addEventListener('click', () => {
    alert('Ready to list your home for 1%? Contact Hector Picon to get started!');
  });

});