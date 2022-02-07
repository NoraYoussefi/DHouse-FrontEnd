export class Transaction{
  transactionId!:string;
  buyerAddress!:string;
  sellerAddress!:string;
  propertyId!:number;
  priceusd!:string;

  constructor(
    buyerAddress:string,
    sellerAddress:string,
    propertyId:number,
    priceusd:string
  )
  {
    this.buyerAddress=buyerAddress,
    this.sellerAddress=sellerAddress,
    this.propertyId=propertyId,
    this.priceusd=priceusd
  }
}
