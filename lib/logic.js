/**
 * Sample transaction processor function.
 * @param {org.example.biznet.AT_Manufacturer_WholeSaler} assetTxn The sample transaction instance.
 * @transaction
 */
function sampleTransaction(assetTxn) {

  
    assetTxn.product.wholeSaler=assetTxn.wholeSaler;
     
     
       // Get the asset registry for the asset.
       return getAssetRegistry('org.example.biznet.Product')
           .then(function (assetRegistry) {
   
               // Update the asset in the asset registry.
               return assetRegistry.update(assetTxn.product);
   
           })
   }
   
   /**
    * Sample transaction processor function.
    * @param {org.example.biznet.AT_WholeSaler_PharmacyRetailer} assetTxn1 The sample transaction instance.
    * @transaction
    */
   function sampleTransaction1(assetTxn1) {
   
     
    assetTxn1.product.pharmacyRetailer=assetTxn1.pharmacyRetailer;
     
     
       // Get the asset registry for the asset.
       return getAssetRegistry('org.example.biznet.Product')
           .then(function (assetRegistry) {
   
               // Update the asset in the asset registry.
               return assetRegistry.update(assetTxn1.product);
   
           })
   }