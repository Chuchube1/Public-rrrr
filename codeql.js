function parseEntityName(fieldName) {
    if (!fieldName || typeof fieldName !== 'string') {
        return '';
    }
    
    var replacementFieldNameSplit = fieldName.split('.');
    if (replacementFieldNameSplit.length === 0) {
        return '';
    }
    var entitySplit = replacementFieldNameSplit[0].replace(/\[/g, '');
   
    
    return entitySplit;
}

// Test cases
console.log(parseEntityName("[account].name")); // "account"
console.log(parseEntityName("contact].email[")); // "contact"
console.log(parseEntityName("lead")); // "lead"
