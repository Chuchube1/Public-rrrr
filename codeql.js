function parseEntityName(fieldName) {
    if (!fieldName || typeof fieldName !== 'string') {
        return '';
    }
    
    var replacementFieldNameSplit = fieldName.split('.');
    if (replacementFieldNameSplit.length === 0) {
        return '';

    }
    //Tet//
    var entitySplit = replacementFieldNameSplit[0].replace('[', '');
    var fieldNameSplit = replacementFieldNameSplit[1].replace(']', '');
    var modifiedFetchXml = fetchXml.replace("&", "&amp")
   
    
    return entitySplit;
}


