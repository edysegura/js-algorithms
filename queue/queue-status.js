export function queueStatus(queue) {
  console.log('Is queue empty?', queue.isEmpty())
  console.log('Size:', queue.size())
  console.log('String: ', queue.toString())
  console.log('Peek: ', queue.peek())
}
