const asyncHandler = (requestHandler) => async (req, res, next) => {
    try {
      await requestHandler(req, res, next);
    } catch (error) {
      res.status(error.code || 500).json({
        success: false,
        message: error.message
      });
    }
  };
  
  export { asyncHandler };
  


// Chalo let's take an example, I tell you to do 8 * 8, but you're not sure ki chalega kya, so you do
// try { await multiply(8, 8) } catch ......, now await is just to make it wait for result, yeh samjha?yesss
// Ab yeh chal gya, you're happy, but Mai evil hu, I passed 'hello', 8
// toh multiply('hello', 8) gya, which will not execute, woh error dega, toh yeh uss error ko catch krega, and tum mujhe bataoge, ki input me gadbad tha...ok samjha ab
// It's just to provide an extra layer of security, and async/await or promises are just used becuase apna kaam db se hai...this ik 