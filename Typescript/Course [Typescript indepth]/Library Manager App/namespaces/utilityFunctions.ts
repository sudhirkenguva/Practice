namespace UtilityFunctions {
    export function lateFees(days: number, books: number ) : number {
        return ( (days + books) * 0.25 )
    }
}