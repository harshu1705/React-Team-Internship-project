class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        errors=[],
        stack=""
    ){
        super(message)//inheritance superClass subClass
       
        this.statusCode=statusCode
        this.data=null
        this.message=message//isne khudka msg set kiya
        this.success=false
        this.errors=errors
        if(stack){
            this.stack=stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }

    }
}
export {ApiError}


// Toh agar kisi bhi parent ne catch nahi kiya, toh error node catch krega, and it'll show full details ki konse konse functions ko catch krna chahiye tha, that'll straightaway give us the
// Error line
