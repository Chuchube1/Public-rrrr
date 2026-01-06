function parseEntityName(fieldName) {
    if (!fieldName || typeof fieldName !== 'string') {
        return '';
    }
    
    var replacementFieldNameSplit = fieldName.split('.');
    if (replacementFieldNameSplit.length === 0) {
        return '';

    }
    //Tet//
    var entitySplit = replacementFieldNameSplit[0].replace(/\[/g, '');
    var fieldNameSplit = replacementFieldNameSplit[1].replace(/\]/g, '');
    var modifiedFetchXml = fetchXml.replace(/&/g, "&amp");
   
   
    return entitySplit;
}


