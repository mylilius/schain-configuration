function camelToSnakeCase(str: string) {
    return str.split(/(?=[A-Z])/).join('_').toLowerCase();
}

export {
    camelToSnakeCase
}