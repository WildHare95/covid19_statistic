/*
A function to sort the array in ascending or descending order depending on the mutable "sortFit" value

sort() modifies the array it calls.
slice() always returns a new array - the array returned by slice(0) is identical to the input,
which basically means it's a cheap way to duplicate an array.
  */

const sortData = (data, sortFit) => {
    if (sortFit !== null) {
        return data.slice(0)
            .sort((a, b) => sortFit ? a.TotalConfirmed - b.TotalConfirmed : b.TotalConfirmed - a.TotalConfirmed)

    } else {
        return data
    }
}

export default sortData