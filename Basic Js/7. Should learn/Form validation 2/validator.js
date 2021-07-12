function Validator(formSelector, options = {}) {
    var formRules = {};
    var validatorRules = {
        required: function (value) {
            return value ? undefined : 'Vui lòng nhập trường này'
        },
        email: function (value) {
            var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			return re.test(value) ? undefined : "Trường này phải là email";
        },
        min: function (min) {
            return function (value){
                return value.length >= min ? undefined : `Tối thiểu ${min} ký tự`
            }
        },
        max: function (max) {
            return function (value) {
                return value.length <= max ? undefined : `Tối đa ${max} ký tự`
            }
        }
    };

    var formElement = document.querySelector(formSelector);
    if(formElement) {
        var inputs = formElement.querySelectorAll('[name][rules]') 
        for (var input of inputs) {
            var rules = input.getAttribute('rules').split('|');
            for (var rule of rules) {
                // for input has min, max length
                if(rule.includes(':')) {
                    var ruleInfo = rule.split(':');
                    ruleFunc = validatorRules[ruleInfo[0]](ruleInfo[1]);
                    // rule = ruleInfo[1];
                } 
                else {
                    ruleFunc = validatorRules[rule]
                }

                // return function for validate
                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                } else {
                    formRules[input.name] = [ruleFunc];
                }
            }
            // handle blur, change, input.....
            input.onblur = handleValidate;
            input.oninput = handleClearError;
        }
        function handleValidate(event) {
            var name = event.target.name;
            var value = event.target.value;
            var errorMessage;
            formRules[name].find(function(ruleFunc) {
                errorMessage = ruleFunc(value);
                return errorMessage
            });

            if(name === 'password_confirmation') {
                var pwd = formElement.querySelector('#password').value
                if (pwd !== value) {
                    errorMessage = 'Mật khẩu nhập lại không trùng khớp'
                }
            }
            // display error to UI
            if(errorMessage) {
                var formGroupElement = event.target.closest('.form-group');
                if(formGroupElement) {
                    formGroupElement.classList.add('invalid');
                    var formMessage = formGroupElement.querySelector('.form-message');
                    if (formMessage)
                        formMessage.innerText = errorMessage;
                };
            };
            //errorMessage = undefined || 'vui long nhap truong nay'
            return !errorMessage;
        };
        function handleClearError(event) {
            var formGroupElement = event.target.closest('.form-group');
            if(formGroupElement.classList.contains('invalid')) { 
                formGroupElement.classList.remove('invalid');
                var formMessage = formGroupElement.querySelector('.form-message');
                    if (formMessage)
                        formMessage.innerText = '';
            };
        };
    };
    //handle submit form
    formElement.onsubmit = function(event) {
        event.preventDefault();
        var inputs = this.querySelectorAll('[name][rules]');
        var isValid = true;
        for (var input of inputs) {
            if(!handleValidate({target: input})) {
                isValid = false;
            }
        }

        //submit when no error
        if(isValid === true) {
            if(typeof options.onSubmit === 'function') {
                var enableInput = formElement.querySelectorAll('[name]:not([disabled])')
                //get value
                var formValues = Array.from(enableInput).reduce(function(values, input) {
                    switch(input.type) {
                        case 'radio':
                            values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                            break;
                        case 'checkbox':
                            if(!input.matches(':checked')) {
                                values[input.name] = '';
                                return value;
                            };
                            if(!Array.isArray(values[input.name])) {
                                values[input.name] = [];
                            };
                            values[input.name].push(input.value);
                            break;
                        case 'file':
                            values[input.name] = input.files;    
                            break;
                        default:
                            values[input.name] = input.value;
                    }
                    return values;
                }, {});
                // callback return value
                options.onSubmit(formValues);
            }
            else {
                formElement.submit();
            }
        }
    }
};