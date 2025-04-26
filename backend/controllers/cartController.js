export default getCart=(res,req)=>{
    res.status(200).json({
        success:'true',
        message:'Allowed to fetch data in cart',
    })

}