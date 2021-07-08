function Validator(options) {
    // save all rules to avoid overwriting
    let selectorRules = {}

    // validate
    function validate(inputElement, rule) {

        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var error_message;

        // console.log(selectorRules[rule.selector]) // return all test function array of a selector
        var testFunctionArray = selectorRules[rule.selector]
        for(var i = 0; i < testFunctionArray.length; i++) {
            // testFunctionArray[i](inputElement.value) ~ rule.test(inputElement.value)
            error_message = testFunctionArray[i](inputElement.value)
            if(error_message) 
            {
                errorElement.innerText = error_message;
                inputElement.parentElement.classList.add("invalid");
                break;
            }
        }
        //error_message = "" is valid but "" is falsy value
        //see more https://developer.mozilla.org/en-US/docs/Glossary/Falsy
        return !error_message
	}

    //main
    var formElement = document.querySelector(options.form);
	if (formElement) {

        // handle submit button onsubmit
        formElement.onsubmit = function(e) {
            let isFormValid = true;
            e.preventDefault();
            options.rules.forEach(function (rule) { 
                // rule = {selector: input_selector, test: function(value) {}}
			    var inputElement = document.querySelector(rule.selector);
                if (inputElement) {
                    var valid = validate(inputElement, rule);
                    if(!valid) {
                        isFormValid = false;
                    };
                };
            });
            // return data from when submit
            if(isFormValid) {
                //submit with javascript --> call API
                if(typeof options.onSubmit === 'function') {
                    // select all input: input tag, select tag, ......
                    var enableInput = formElement.querySelectorAll('[name]:not([disabled])');
                    var formValues = Array.from(enableInput).reduce(function (values, input) {
                        values[input.name] = input.value;
                        return values;
                    }, {});
                    // {fullname: "TRINH VAN MINH", email: "tvminh2611@gmail.com", password: "123456", password_confirmation: "123456"}
                    options.onSubmit(formValues);
                } else {
                    //submit with default
                    formElement.submit();
                };
            };
        };

    

        // handle event each from group, onblur, oninput,...
		options.rules.forEach(function (rule) {
            // save test function each rules to selector
            if(Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector] = [rule.test]
            }

			// rule = {selector: input_selector, test: function(value) {}}
			var inputElement = document.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
			if (inputElement) {
				// handle blur input (overwriting exist rule of the selector so you need to save before)
				inputElement.onblur = function () {
					validate(inputElement, rule);
				};
				// handle when oninput
				inputElement.oninput = function () {
					errorElement.innerText = "";
					inputElement.parentElement.classList.remove("invalid");
				};
			}
		});
	}
}

//--------------------------------define rules--------------------------------

//return error message
Validator.isRequired = function (selector, message) {
	return {
		selector: selector,
		test: function (value) {
			return value.trim() ? undefined : message || "Vui lòng nhập trường này";
		},
	};
};
//return error message
Validator.isEmail = function (selector, message) {
	return {
		selector: selector,
		test: function (value) {
			var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			return re.test(value) ? undefined : message || "Trường này phải là email";
		},
	};
};

Validator.minLength = function (selector, min = 6, message) {
	return {
		selector: selector,
		test: function (value) {
			return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự`;
		},
	};
};

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    console.log(getConfirmValue())
    return {
		selector: selector,
		test: function (value) {
			return value === getConfirmValue() ? undefined : message || "Giá trị nhập vào không chính xác";
		},
	};
}