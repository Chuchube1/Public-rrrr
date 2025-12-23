function parseEntityName(fieldName) {
    if (!fieldName || typeof fieldName !== 'string') {
        return '';
    }
    
    var replacementFieldNameSplit = fieldName.split('.');
    if (replacementFieldNameSplit.length === 0) {
        return '';
    }
    var entitySplit = replacementFieldNameSplit[0].replace(/\[/g, '');
    var modifiedFetchXml = fetchXml.replace("&", "&amp")
   
    
    return entitySplit;
}

// Test cases 6787575646453535365
console.log(parseEntityName("[account].name")); // "account"
console.log(parseEntityName("contact].email[")); // "contact"
console.log(parseEntityName("lead")); // "lead"
