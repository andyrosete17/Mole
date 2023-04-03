export const mapToCollection = <A, B>(collection: A[], mapFn: (A: any) => B): B[] =>
    Array.isArray(collection) ? collection.map(mapFn) : [];
