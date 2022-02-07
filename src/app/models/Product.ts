export class Product{
  propertyId!:any
  userId!:string
  images!:string | null //might be an array of paths
  legaldocs!:string | null 
  publicKey!:string //PK if methd is one2one
  category!:number
  title!:string
  govTitle!:string
  desc!:string
  physcial_address!:string
  priceusd!:number
  verified!:boolean
  sold!:boolean
}
