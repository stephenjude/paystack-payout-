
function payWithPaystack() {
    var handler = PaystackPop.setup({
        key: 'your_public_key', //remember to use your own paystack public key
        email: 'customer@email.com',
        amount: 370000,
        ref: '' + Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
        metadata: {
            custom_fields: [
                {
                    display_name: "Mobile Number",
                    variable_name: "mobile_number",
                    value: "+2348012345678"
                }
            ]
        },
        callback: function (response) {
            alert('success. transaction ref is ' + response.reference);
        },
        onClose: function () {
            alert('Transaction cancelled');
        }
    });
    handler.openIframe();
}
