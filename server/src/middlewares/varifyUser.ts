export const verify = (req: any, res: any, next: any)=>{
    console.log("Passing through middleware");
    next();
}