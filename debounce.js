let i = 0

function increment() {
  i++
  console.log("Incremented i to", i)
}

function debounce(cb, wait) {
  let timeout
  return function () {
    // Clear the previous timeout, if any
    clearTimeout(timeout)
    // Set a new timeout
    timeout = setTimeout(() => {
      cb()
    }, wait)
  }
}

const debouncedIncrement = debounce(increment, 100)

// Call the debounced function multiple times
debouncedIncrement()
debouncedIncrement()
debouncedIncrement()
