module.exports = {errorHandler};


function errorHandler(castError) {
    
   if(castError.errors){
     errors = castError.errors;
    }
    else{
      errors = [castError];
    }
    
    let error_msgs = [];
    for (let err in errors) {
        let err_msg = '';
        let col_name = errors[err].path;
        let err_type = errors[err].kind?errors[err].kind.toLowerCase():"default";
        switch (err_type) {
            case "required":
                err_msg = col_name + " is a required field";
                break;
            case "number":
                err_msg = col_name + " is not a valid number";
                break;
            case "date":
                err_msg = col_name + " must be valid date";
                break;
            default:
                err_msg = errors[err].message?errors[err].message:errors[err];
                break;    
        }
        error_msgs.push({
            "Error": err_msg
        })
    }
    return error_msgs;
}

