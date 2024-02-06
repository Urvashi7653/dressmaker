const sendResponse = (props)=>{
    const {
        res,
        status =200,
        data={},
        message = "",
    } = props; 

    return res.status(status).json({status,message,data});
}

module.exports = {
    sendResponse
}
