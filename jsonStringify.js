 function jsonStringify(value) {
      if (Array.isArray(value)) {
    const arrayValues = value.map((item) => jsonStringify(item));
    return `[${arrayValues.join(',')}]`;
  }

    if(typeof value === 'object' && value !== null) {
        const objectValues = Object.entries(value)
        .map(([key, value]) => `"${key}":${jsonStringify(value)}`)
        .join(',');
      return `{${objectValues}}`;
    }
    
    
    if(typeof value === 'string') {
        return `"${value}"`
    }

    return String(value);

  }
