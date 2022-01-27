// Wait for the page to finish loading
document.addEventListener('DOMContentLoaded', function () {

  // Attach `change` event listener to checkbox
  document.getElementById('billing-checkbox').addEventListener('change', toggleBilling);
}, false);

function toggleBilling() {
  // Select the billing text fields
  let billingItems = document.querySelectorAll('#billing input[type="text"]');
  // Select the billing text labels
  let billingLabels = document.querySelectorAll('.billing-label');

  // Toggle the billing text fields and labels
  for (let i = 0; i < billingItems.length; i++) {
    billingItems[i].disabled = !billingItems[i].disabled;

    if (billingLabels[i].getAttribute('class') === 'billing-label disabled-label') {
      billingLabels[i].setAttribute('class', 'billing-label');
    } else {
      billingLabels[i].setAttribute('class', 'billing-label disabled-label');
    }
  }
}
