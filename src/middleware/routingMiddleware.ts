export const logQueryMiddleWare = (req:any, res:any, next:any) => {
    console.log("", req.query);
    next()
}
