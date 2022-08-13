export const secondToTime = (seconds) => {
    return new Date(1000 * seconds).toISOString().substring(14, 14 + 5)
}