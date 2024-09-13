export class ProductsDetails{
    constructor(
    public nameP: string,
    public descriptionP:string,
    public price:number,
    public id: number, 
    public showOptions: boolean = false
){}
 }