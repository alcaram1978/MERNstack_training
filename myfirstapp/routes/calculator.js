var express = require('express');
var router = express.Router();


router.get('/:action/:n1/:n2', function (req, res) {
    // Convert the operator given in the URL to something that will fit into
    // the result sentence, using the hash we created earlier.

    var result = null;

    // Parse the numbers provided in the URL as floats.
    var n1 = parseFloat(req.params.n1);
    var n2 = parseFloat(req.params.n2);

    // Based on the operator string, perform the mathematical operations on the
    // parsed numbers.
    switch ( req.params.action ) {
	case 'add':
	    result = n1 + n2;
	    break;
	case 'subtract':
	    result = n1 - n2;
	    break;
	case 'multiply':
	    result = n1 * n2;
	    break;
	case 'divide':
	    result = n1 / n2;
	    break;
    }

    // Render `views/result.jade` and provide the result variables for display.
    console.log('result', result);
    res.send ({Result:result});
  });


module.exports = router;
