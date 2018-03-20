
function payWithPaystack() {
    var handler = PaystackPop.setup({
        key: 'pk_test_71f07a209a16f669e1b465a06332429309dcf633',
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